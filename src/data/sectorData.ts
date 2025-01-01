export type Stock = {
  symbol: string;
  exchange: string;
  name: string;
  buyPrice: number;
  forwardPE: number;
  starRating: number;
};

export const sectorData: Record<string, Stock[]> = {
  Technology: [
    { symbol: "AAPL", exchange: "NASDAQ", name: "Apple Inc.", buyPrice: 155, forwardPE: 27.8, starRating: 4 },
    { symbol: "MSFT", exchange: "NASDAQ", name: "Microsoft Corp.", buyPrice: 365, forwardPE: 32.1, starRating: 5 },
    { symbol: "NVDA", exchange: "NASDAQ", name: "NVIDIA Corp.", buyPrice: 110, forwardPE: 34.5, starRating: 4 },
    { symbol: "QCOM", exchange: "NASDAQ", name: "Qualcomm Inc.", buyPrice: 150, forwardPE: 34.5, starRating: 3 },
    { symbol: "TOST", exchange: "NYSE", name: "Toast Inc.", buyPrice: 31, forwardPE: 34.5, starRating: 4 },
    { symbol: "UBER", exchange: "NYSE", name: "Uber Technologies", buyPrice: 60, forwardPE: 34.5, starRating: 4 },
    { symbol: "ASML", exchange: "NASDAQ", name: "ASML Holding NV", buyPrice: 550, forwardPE: 34.5, starRating: 4 },
  ],
  Financials: [
    { symbol: "MA", exchange: "NYSE", name: "Mastercard Inc.", buyPrice: 455, forwardPE: 12.3, starRating: 5 },
    { symbol: "V", exchange: "NYSE", name: "Visa Inc.", buyPrice: 280, forwardPE: 10.8, starRating: 5 },
    { symbol: "SPGI", exchange: "NYSE", name: "S&P Global Inc.", buyPrice: 400, forwardPE: 25.6, starRating: 4 },
  ],
  CommunicationServices: [
    { symbol: "GOOGL", exchange: "NASDAQ", name: "Alphabet Inc. Class A", buyPrice: 155, forwardPE: 12.3, starRating: 3 },
    { symbol: "META", exchange: "NASDAQ", name: "Meta Platforms Inc.", buyPrice: 470, forwardPE: 10.8, starRating: 4 },
    { symbol: "NFLX", exchange: "NASDAQ", name: "Netflix Inc.", buyPrice: 425, forwardPE: 25.6, starRating: 3 },
  ],
  ConsumerCyclical: [
    { symbol: "JPM", exchange: "NYSE", name: "JPMorgan Chase", buyPrice: 187.42, forwardPE: 12.3, starRating: 4.5 },
    { symbol: "BAC", exchange: "NYSE", name: "Bank of America", buyPrice: 35.68, forwardPE: 10.8, starRating: 3.5 },
    { symbol: "V", exchange: "NYSE", name: "Visa Inc.", buyPrice: 279.87, forwardPE: 25.6, starRating: 5 },
  ],
  ConsumerDefensive: [
    { symbol: "JPM", exchange: "NYSE", name: "JPMorgan Chase", buyPrice: 187.42, forwardPE: 12.3, starRating: 4.5 },
    { symbol: "BAC", exchange: "NYSE", name: "Bank of America", buyPrice: 35.68, forwardPE: 10.8, starRating: 3.5 },
    { symbol: "V", exchange: "NYSE", name: "Visa Inc.", buyPrice: 279.87, forwardPE: 25.6, starRating: 5 },
  ],
  Industrials: [
    { symbol: "JPM", exchange: "NYSE", name: "JPMorgan Chase", buyPrice: 187.42, forwardPE: 12.3, starRating: 4.5 },
    { symbol: "BAC", exchange: "NYSE", name: "Bank of America", buyPrice: 35.68, forwardPE: 10.8, starRating: 3.5 },
    { symbol: "V", exchange: "NYSE", name: "Visa Inc.", buyPrice: 279.87, forwardPE: 25.6, starRating: 5 },
  ],
  Healthcare: [
    { symbol: "JPM", exchange: "NYSE", name: "JPMorgan Chase", buyPrice: 187.42, forwardPE: 12.3, starRating: 4.5 },
    { symbol: "BAC", exchange: "NYSE", name: "Bank of America", buyPrice: 35.68, forwardPE: 10.8, starRating: 3.5 },
    { symbol: "V", exchange: "NYSE", name: "Visa Inc.", buyPrice: 279.87, forwardPE: 25.6, starRating: 5 },
  ],
  RealEstate: [
    { symbol: "JPM", exchange: "NYSE", name: "JPMorgan Chase", buyPrice: 187.42, forwardPE: 12.3, starRating: 4.5 },
    { symbol: "BAC", exchange: "NYSE", name: "Bank of America", buyPrice: 35.68, forwardPE: 10.8, starRating: 3.5 },
    { symbol: "V", exchange: "NYSE", name: "Visa Inc.", buyPrice: 279.87, forwardPE: 25.6, starRating: 5 },
  ],
  Energy: [
    { symbol: "JPM", exchange: "NYSE", name: "JPMorgan Chase", buyPrice: 187.42, forwardPE: 12.3, starRating: 4.5 },
    { symbol: "BAC", exchange: "NYSE", name: "Bank of America", buyPrice: 35.68, forwardPE: 10.8, starRating: 3.5 },
    { symbol: "V", exchange: "NYSE", name: "Visa Inc.", buyPrice: 279.87, forwardPE: 25.6, starRating: 5 },
  ],
};

export const sectors = Object.keys(sectorData);
