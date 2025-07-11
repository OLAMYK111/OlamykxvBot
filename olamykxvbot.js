// script.js

document.addEventListener("DOMContentLoaded", () => {
  const connectBtn = document.getElementById("connectBtn");
  const featureCards = document.querySelectorAll(".feature-card");

  connectBtn.addEventListener("click", () => {
    document.getElementById("connect").scrollIntoView({ behavior: "smooth" });
  });

  featureCards.forEach(card => {
    card.addEventListener("click", () => {
      const feature = card.getAttribute("data-feature");
      alert(`Feature selected: ${feature}\n(This will be interactive in full backend integration.)`);
    });
  });
});

function startBot() {
  const qrContainer = document.getElementById("qrCode");
  qrContainer.innerHTML = "<p><strong>Generating QR code...</strong></p>";

  // Simulate backend call to fetch WhatsApp QR code
  setTimeout(() => {
    qrContainer.innerHTML = '<img src="https://api.qrserver.com/v1/create-qr-code/?data=whatsapp-connect-url&size=200x200" alt="WhatsApp QR Code" />';
  }, 1500);
}
