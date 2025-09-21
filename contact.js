document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Envoi en cours...";

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      // Remplace cette URL par ton endpoint Cloudflare Worker / serveur proxy
      const response = await fetch("https://ton-worker.cloudflareworkers.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        status.textContent = "Message envoyé avec succès !";
        form.reset();
      } else {
        status.textContent = "Erreur lors de l'envoi.";
      }
    } catch (err) {
      console.error(err);
      status.textContent = "Erreur réseau. Essayez plus tard.";
    }
  });
});
