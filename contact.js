// Sélection du formulaire et de l'élément de statut
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

// Ton webhook Discord
const webhookURL = 'https://discord.com/api/webhooks/1419306152596078652/gyajChb0IKSVhic2vMIwJNyQJ_-Ot9X7zhDzZ_bO4K_In_FdXRvL5tw998yI0AvKswBh';

// Événement submit
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du formulaire
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    // Vérification rapide des champs
    if (!name || !email || !message) {
        status.textContent = "Veuillez remplir tous les champs ! ❌";
        status.style.color = "red";
        return;
    }

    // Payload pour Discord
    const payload = {
        username: name,
        content: `**Nom:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
    };

    // Envoi vers le webhook Discord
    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            status.textContent = "Message envoyé avec succès ! ✅";
            status.style.color = "green";
            form.reset(); // Réinitialise le formulaire
        } else {
            status.textContent = "Erreur lors de l'envoi. ❌";
            status.style.color = "red";
            console.error("Erreur Discord webhook:", response.statusText);
        }
    } catch (error) {
        status.textContent = "Erreur lors de l'envoi. ❌";
        status.style.color = "red";
        console.error("Erreur fetch:", error);
    }
});
