/**
 * KazKleen Pricing Engine Configuration
 * Rates defined in Nigerian Naira (NGN).
 * Modify values in this file to update the instant estimator across the site.
 */

export type PropertyType = 'Apartment' | 'House' | 'Office';
export type ServiceType = 'standard' | 'deep';

export interface PricingTier {
  basePrice: number;
  perRoomPrice: number;
  baseHours: number;
  hoursPerRoom: number;
}

export const PRICING_CONFIG: Record<PropertyType, PricingTier> = {
  Apartment: {
    basePrice: 18000,
    perRoomPrice: 5000,
    baseHours: 1.5,
    hoursPerRoom: 0.5,
  },
  House: {
    basePrice: 25000,
    perRoomPrice: 6500,
    baseHours: 2.0,
    hoursPerRoom: 0.75,
  },
  Office: {
    basePrice: 30000,
    perRoomPrice: 8000,
    baseHours: 2.5,
    hoursPerRoom: 0.8,
  },
};

export const SERVICE_MULTIPLIERS = {
  standard: {
    priceMultiplier: 1.0,
    durationMultiplier: 1.0,
    label: 'Standard Clean',
  },
  deep: {
    priceMultiplier: 1.45,
    durationMultiplier: 1.35,
    label: 'Deep Clean',
  },
};

export interface EstimateResult {
  lowPrice: number;
  highPrice: number;
  formattedRange: string;
  estimatedHours: number;
  summaryText: string;
}

/**
 * Calculates a pricing range rounded to the nearest ₦500.
 */
export function calculateCleaningEstimate(
  propertyType: PropertyType,
  roomCount: number,
  serviceType: ServiceType
): EstimateResult {
  const tier = PRICING_CONFIG[propertyType] || PRICING_CONFIG.Apartment;
  const multiplier = SERVICE_MULTIPLIERS[serviceType] || SERVICE_MULTIPLIERS.standard;

  const validRooms = Math.max(1, Math.min(roomCount, 20));

  // Calculate base sum
  let rawAmount = tier.basePrice + validRooms * tier.perRoomPrice;
  rawAmount *= multiplier.priceMultiplier;

  // Round to nearest ₦500 increment
  const lowPrice = Math.round((rawAmount * 0.9) / 500) * 500;
  const highPrice = Math.round((rawAmount * 1.15) / 500) * 500;

  // Duration computation
  const rawHours = (tier.baseHours + validRooms * tier.hoursPerRoom) * multiplier.durationMultiplier;
  const estimatedHours = Math.round(rawHours * 10) / 10;

  const formattedLow = '₦' + lowPrice.toLocaleString('en-NG');
  const formattedHigh = '₦' + highPrice.toLocaleString('en-NG');

  return {
    lowPrice,
    highPrice,
    formattedRange: `${formattedLow} – ${formattedHigh}`,
    estimatedHours,
    summaryText: `Roughly ${estimatedHours} hours on site · ${propertyType.toLowerCase()}, ${validRooms} room(s), ${multiplier.label.toLowerCase()}`,
  };
}