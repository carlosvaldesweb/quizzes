import type {
  SubscriptionPrice,
  SubscriptionProductsResponse,
} from "~/types/subscription";

export function useSubscription() {
  const client = useSanctumClient();

  const prices = ref<SubscriptionPrice[]>([]);
  const status = ref<"idle" | "pending" | "success" | "error">("idle");
  const error = ref<string | null>(null);

  async function fetchProducts() {
    status.value = "pending";
    error.value = null;

    try {
      const data = await client<SubscriptionProductsResponse>(
        "/subscriptions/products",
      );
      prices.value = data.prices;
      status.value = "success";
    } catch {
      status.value = "error";
      error.value = "No se pudieron obtener los precios";
    }
  }

  const monthlyPrice = computed(() =>
    prices.value.find((p) => p.lookup_key === "plan_pro_monthly"),
  );

  const annualPrice = computed(() =>
    prices.value.find((p) => p.lookup_key === "plan_pro_annual"),
  );

  function formatPrice(amountInCents: number, currency: string): string {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: currency.toUpperCase(),
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amountInCents / 100);
  }

  async function checkout(priceId: string) {
    const { isAuthenticated } = useSanctumAuth();

    if (!isAuthenticated.value) {
      await navigateTo("/signup?redirect=/pricing");
      return;
    }

    const currentUrl = window.location.origin;

    try {
      const data = await client<{ checkout_url: string }>(
        "/subscriptions/checkout",
        {
          method: "POST",
          body: {
            price_id: priceId,
            success_url: `${currentUrl}/pricing?success=true`,
            cancel_url: `${currentUrl}/pricing?canceled=true`,
          },
        },
      );

      if (data.checkout_url) {
        await navigateTo(data.checkout_url, { external: true });
      }
    } catch {
      error.value = "No se pudo iniciar el proceso de pago";
    }
  }

  return {
    prices,
    monthlyPrice,
    annualPrice,
    status,
    error,
    fetchProducts,
    formatPrice,
    checkout,
  };
}
