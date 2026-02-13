export interface SubscriptionPrice {
  id: string;
  product_id: string;
  product_name: string;
  currency: string;
  unit_amount: number;
  recurring: {
    interval: "month" | "year";
    interval_count: number;
  };
  lookup_key: "plan_pro_monthly" | "plan_pro_annual";
}

export interface SubscriptionProductsResponse {
  prices: SubscriptionPrice[];
}

export interface CheckoutRequest {
  price_id: string;
  success_url: string;
  cancel_url: string;
}

export interface CheckoutResponse {
  checkout_url: string;
}
