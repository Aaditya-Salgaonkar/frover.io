<html>
  <head>
    <meta charset="utf-8" />
    <title>Billing Page</title>
    <script src="https://js.stripe.com/v3/"></script>
  </head>
  <body>
    <h1>Welcome to the Billing Page</h1>
    <div id="subscription-details"></div>
    <button id="manage-subscription">Manage Subscription</button>

    <script>
      const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);

      async function fetchSubscriptionDetails() {
        const response = await fetch('/api/subscription-details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        return data;
      }

      async function renderSubscriptionDetails(subscription) {
        const subscriptionDetails = document.getElementById('subscription-details');
        subscriptionDetails.innerHTML = `
          <p>Status: ${subscription.status}</p>
          <p>Product: ${subscription.product}</p>
          <p>Quantity: ${subscription.quantity}</p>
          <p>Price: ${subscription.price.unit_amount} ${subscription.price.currency}</p>
        `;
      }

      async function openStripeBillingPortal() {
        const response = await fetch('/api/sessions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const { sessionId } = await response.json();
        const result = await stripe.redirectToCheckout({ sessionId });

        if (result.error) {
          // Handle error
        }
      }

      (async function () {
        const subscription = await fetchSubscriptionDetails();
        await renderSubscriptionDetails(subscription);
      })();

      document.getElementById('manage-subscription').addEventListener('click', () => {
        openStripeBillingPortal();
      });
    </script>
  </body>
</html>