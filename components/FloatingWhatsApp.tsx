export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/2349046042275?text=" +
    encodeURIComponent("Hello KazKleen, I would like to enquire about your cleaning services in Abuja.");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with KazKleen on WhatsApp"
      className="whatsapp-ring fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-whats text-white flex items-center justify-center shadow-soft hover:brightness-105 transition"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.3-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4 0-.1-.2-.2-.5-.3zM12.1 21a9 9 0 01-4.6-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9 9 0 1112.1 21z" />
      </svg>
    </a>
  );
}