// Questa è una funzione placeholder
// In futuro posso sostituirla con un controllo JWT o contesto utente

export function isUserLoggedIn() {
  const token = localStorage.getItem("accessToken");
  return !!token;
}
