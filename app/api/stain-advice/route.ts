import { NextRequest, NextResponse } from 'next/server';

interface StainRequestBody {
  query?: string;
  stainDescription?: string;
}

const OFFLINE_STAIN_DATABASE: Record<string, string> = {
  wine: "Blot (don't rub) with a clean white microfiber cloth immediately. Apply cold water, followed by a solution of mild dish soap and hydrogen peroxide. Blot gently from the outside inward, then rinse with cool water.",
  oil: "Sprinkle baking soda or cornstarch generously over the fresh grease spot. Allow it to sit for 20 minutes to draw out the oil, brush away, then blot with warm water and degreasing liquid detergent.",
  ink: "Dab gently (never rub) using a cotton swab moistened with isopropyl rubbing alcohol. Work from the outer ring inward to prevent spreading. Rinse with cool water and wash promptly.",
  coffee: "Rinse the reverse side of the fabric with cold running water. Apply a solution of white vinegar, mild dish soap, and lukewarm water. Blot dry with a clean towel.",
  tea: "Flush immediately with cold water. Soak with white vinegar and a small dab of liquid detergent for 10 minutes, then rinse thoroughly.",
  blood: "Use cold water only—hot water sets protein stains permanently. Soak in cold salt water or dilute hydrogen peroxide, then blot with a damp cloth.",
  grass: "Dab with rubbing alcohol or a 50/50 white vinegar and water mix. Let sit for 10 minutes, then launder with an enzyme-based detergent.",
  mud: "Allow mud to dry completely before touching. Brush off dried crust, then treat remaining residue with warm soapy water and an enzyme spot cleaner.",
  grease: "Absorb excess grease with talc or cornstarch. Work liquid dish soap directly into the fibers, let sit 15 minutes, and rinse with hot water if fabric permits.",
};

const DEFAULT_OFFLINE_ADVICE =
  "Blot excess liquid immediately with a clean, dry cloth—never rub. Flush with cold water and treat with a mild detergent solution. Avoid applying heat until the stain is fully lifted. For delicate or set-in fabrics in Abuja, contact KazKleen for professional extraction.";

export async function POST(req: NextRequest) {
  try {
    const body: StainRequestBody = await req.json();
    const rawInput = body.query || body.stainDescription || '';
    const cleanInput = rawInput.trim().slice(0, 300);

    if (!cleanInput) {
      return NextResponse.json(
        { error: 'Please describe the stain or fabric issue.' },
        { status: 400 }
      );
    }

    const systemPrompt = `You are the lead textile cleaning specialist at KazKleen, Abuja's top cleaning service. Provide clear, safe, step-by-step first-aid advice for this stain: "${cleanInput}". Strictly keep your answer under 50 words. Focus on immediate household actions and warnings.`;

    // 1. PRIMARY: Vercel AI Gateway
    const gatewayUrl = process.env.AI_GATEWAY_URL || 'https://gateway.ai.vercel.store/v1/chat/completions';
    const gatewayKey = process.env.AI_GATEWAY_API_KEY;

    if (gatewayKey) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const response = await fetch(gatewayUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${gatewayKey}`,
          },
          body: JSON.stringify({
            model: 'google/gemini-2.0-flash',
            messages: [{ role: 'user', content: systemPrompt }],
            max_tokens: 120,
            temperature: 0.3,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const advice = data.choices?.[0]?.message?.content?.trim();
          if (advice) {
            return NextResponse.json({
              success: true,
              advice,
              source: 'vercel-ai-gateway',
            });
          }
        }
      } catch (err: unknown) {
        console.warn('Vercel AI Gateway timed out or failed. Switching to Gemini fallback...');
      }
    }

    // 2. SECONDARY FALLBACK: Google Gemini AI Studio
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const response = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt }] }],
            generationConfig: { maxOutputTokens: 120, temperature: 0.3 },
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const advice = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (advice) {
            return NextResponse.json({
              success: true,
              advice,
              source: 'google-gemini-fallback',
            });
          }
        }
      } catch (geminiErr: unknown) {
        console.warn('Google Gemini API call failed. Using offline rule engine...');
      }
    }

    // 3. TERTIARY FALLBACK: Deterministic Rule Engine
    const lowerInput = cleanInput.toLowerCase();
    const matchedKey = Object.keys(OFFLINE_STAIN_DATABASE).find((key) =>
      lowerInput.includes(key)
    );

    const advice = matchedKey ? OFFLINE_STAIN_DATABASE[matchedKey] : DEFAULT_OFFLINE_ADVICE;

    return NextResponse.json({
      success: true,
      advice,
      source: 'offline-curated-db',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        advice: DEFAULT_OFFLINE_ADVICE,
        source: 'offline-curated-db',
      },
      { status: 200 }
    );
  }
}