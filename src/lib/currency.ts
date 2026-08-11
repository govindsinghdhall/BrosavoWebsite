export type CurrencyCode =
  | "INR"
  | "USD"
  | "EUR"
  | "GBP"
  | "CAD"
  | "AED"
  | "AUD";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  label: string;
  flag: string;
  locale: string;
}

export const CURRENCIES: Currency[] = [
  {
    code: "INR",
    symbol: "₹",
    label: "Indian Rupee",
    flag: "🇮🇳",
    locale: "en-IN",
  },
  {
    code: "USD",
    symbol: "$",
    label: "US Dollar",
    flag: "🇺🇸",
    locale: "en-US",
  },
  {
    code: "EUR",
    symbol: "€",
    label: "Euro",
    flag: "🇪🇺",
    locale: "de-DE",
  },
  {
    code: "GBP",
    symbol: "£",
    label: "British Pound",
    flag: "🇬🇧",
    locale: "en-GB",
  },
  {
    code: "CAD",
    symbol: "CA$",
    label: "Canadian Dollar",
    flag: "🇨🇦",
    locale: "en-CA",
  },
  {
    code: "AED",
    symbol: "د.إ",
    label: "UAE Dirham",
    flag: "🇦🇪",
    locale: "ar-AE",
  },
  {
    code: "AUD",
    symbol: "AU$",
    label: "Australian Dollar",
    flag: "🇦🇺",
    locale: "en-AU",
  },
];

/**
 * BROSAVO regional display rates.
 *
 * These rates are relative to 1 INR.
 *
 * They are intentionally controlled by BROSAVO
 * rather than being updated automatically from
 * live foreign-exchange rates.
 *
 * Example:
 *
 * ₹999 × 0.019 CAD ≈ CA$19
 * ₹999 × 0.015 USD ≈ $15
 */
let exchangeRates: Record<CurrencyCode, number> = {
  INR: 1,

  // 1 INR ≈ 0.015 USD
  USD: 0.015,

  // 1 INR ≈ 0.011 EUR
  EUR: 0.011,

  // 1 INR ≈ 0.010 GBP
  GBP: 0.010,

  // 1 INR ≈ 0.019 CAD
  CAD: 0.019,

  // 1 INR ≈ 0.055 AED
  AED: 0.055,

  // 1 INR ≈ 0.018 AUD
  AUD: 0.018,
};

/**
 * Returns the currently configured BROSAVO
 * regional pricing rates.
 *
 * Kept as an async function so the existing
 * useCurrency hook does not need to change.
 *
 * No external API request is made.
 */
export async function fetchExchangeRates(): Promise<
  Record<CurrencyCode, number>
> {
  return exchangeRates;
}

/**
 * Convert an INR base price into the selected currency.
 */
export function convertFromInr(
  amountInr: number,
  toCurrency: CurrencyCode
): number {
  if (toCurrency === "INR") {
    return amountInr;
  }

  const rate = exchangeRates[toCurrency];

  if (!rate) {
    return amountInr;
  }

  return amountInr * rate;
}

/**
 * Format an INR-based price into the selected currency.
 *
 * Examples:
 *
 * formatPrice(999, "INR") → ₹999
 * formatPrice(999, "CAD") → CA$18.98
 * formatPrice(999, "USD") → $14.99
 */
export function formatPrice(
  amountInr: number,
  currency: CurrencyCode
): string {
  const meta = CURRENCIES.find(
    (item) => item.code === currency
  );

  if (!meta) {
    return `₹${Math.round(amountInr).toLocaleString("en-IN")}`;
  }

  const converted = convertFromInr(
    amountInr,
    currency
  );

  const rounded =
    currency === "INR"
      ? Math.round(converted)
      : Math.round(converted * 100) / 100;

  return new Intl.NumberFormat(meta.locale, {
    style: "currency",
    currency,
    maximumFractionDigits:
      currency === "INR"
        ? 0
        : rounded >= 100
          ? 0
          : 2,
    minimumFractionDigits: 0,
  }).format(rounded);
}

/**
 * Automatically select the currency based on
 * the visitor's country.
 *
 * Countries not explicitly mapped fall back to USD.
 */
export function getCountryCurrency(
  countryCode: string
): CurrencyCode {
  const countryMap: Record<string, CurrencyCode> = {
    // India
    IN: "INR",

    // North America
    US: "USD",
    CA: "CAD",

    // United Kingdom
    GB: "GBP",

    // Middle East
    AE: "AED",

    // Australia
    AU: "AUD",

    // Eurozone
    DE: "EUR",
    FR: "EUR",
    IT: "EUR",
    ES: "EUR",
    NL: "EUR",
    BE: "EUR",
    PT: "EUR",
    IE: "EUR",
    AT: "EUR",
    FI: "EUR",
    GR: "EUR",
  };

  const normalizedCountry =
    countryCode.trim().toUpperCase();

  return (
    countryMap[normalizedCountry] || "USD"
  );
}

/**
 * Get the currency manually selected by the visitor.
 */
export function getStoredCurrency(): CurrencyCode | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = localStorage.getItem(
    "preferredCurrency"
  );

  if (!value) {
    return null;
  }

  return CURRENCIES.some(
    (item) => item.code === value
  )
    ? (value as CurrencyCode)
    : null;
}

/**
 * Save the visitor's currency preference.
 */
export function setStoredCurrency(
  currency: CurrencyCode
): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    "preferredCurrency",
    currency
  );
}