import axios from "axios";

const BASE_URL = "http://localhost:8080/api/orders";

export async function handleOrderSubmit(payload, setOrder, setOrderId, setIsCard, setText, setIsLoading) {
  try {
    setIsLoading(true);
    const response = await axios.post(`${BASE_URL}/custom`, payload);
    const order = response.data;

    setOrder(order);
    setOrderId(order.id);
    setText("Adding to Cart");
    setIsCard(true);
    console.log("Order Created:", order);
  } catch (error) {
    console.error("Order failed:", error);
    alert("Failed to place order. Please try again.");
  } finally {
    setTimeout(() => setIsLoading(false), 1500);
  }
}

export async function handlePayment(orderId, method, setIsCard, setText) {
  try {
    const response = await axios.post(`${BASE_URL}/${orderId}/pay?method=${method}`);
    setIsCard(false);
    setText(response.data);
  } catch (err) {
    console.error(err);
    setText("❌ Payment failed");
  }
}

export async function advanceOrderState(orderId, setCurrentStep, setStep) {
  try {
    const response = await axios.post(`${BASE_URL}/${orderId}/next`);
    const updatedOrder = response.data;

    const status = updatedOrder.status.toLowerCase();
    setCurrentStep(status);
    setStep((prev) => prev + 1);
  } catch (error) {
    console.error("Failed to advance order state:", error);
  }
}
