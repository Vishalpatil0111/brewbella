import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentCheckout = ({ total }) => {
  const [paymentDone, setPaymentDone] = useState(false);
  const navigate = useNavigate();

  const handleDummyPayment = () => {
    setTimeout(() => {
      setPaymentDone(true);
      alert("🎉 Payment Successful!");
    }, 1000);
  };

  // Redirect after success
  useEffect(() => {
    if (paymentDone) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1500); 

      return () => clearTimeout(timer);
    }
  }, [paymentDone, navigate]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <p className="text-lg font-medium mb-2">Total: ₹{total}</p>

      {!paymentDone ? (
        <button
          onClick={handleDummyPayment}
          className="bg-yellow-700 hover:bg-yellow-800 text-white py-2 px-6 rounded-lg transition-all duration-300"
        >
          Pay with Razorpay (Dummy)
        </button>
      ) : (
        <p className="text-green-600 font-semibold mt-4">
          Payment Done ✅ Redirecting...
        </p>
      )}
    </div>
  );
};

export default PaymentCheckout;
