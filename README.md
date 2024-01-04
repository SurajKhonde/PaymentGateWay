1)Razorpay Payment Gateway Integration:
Create a Razorpay Account:
         Go to the Razorpay website and sign up for an account.
         Obtain the API key and API secret from the Razorpay Dashboard.
2)Include Razorpay Script in HTML:
        Add the Razorpay script in the HTML file where you handle payments.
3)Initialize Razorpay:
             In your index.js file, initialize Razorpay with your API key.
 4)Create a Payment Button:
            In your HTML, create a button that will trigger the payment process.     
 5)Handle Payment Button Click:
          In your JavaScript, handle the click event for the payment button
 6) Handle Payment Callback:
          Implement a callback function to handle the payment response.
  7)  Define Order Details:
             Before creating an order,
             define the order details, including amount, currency, and other necessary information.
  8)Verify Payments on Server:
          After a successful payment, 
                  verify the payment on your server using Razorpay's APIs for added security.
  9)Test in Sandbox Mode:
            During development, use Razorpay's sandbox environment to test transactions without real money.
  10)Handle Webhooks (Optional):
            If needed, set up webhook endpoints on your server to receive real-time updates about payment events.
11)Secure API Keys:
          Ensure that your API keys are stored securely, and never expose them in client-side code.
