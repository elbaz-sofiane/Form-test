// Sélection du formulaire et de l'élément de statut
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

// Ton webhook Discord
const webhookURL = 'https://discord.com/api/webhooks/1419316952664375366/NgTG31MGuWvFORBUVRJYArkhIBD0eZ7nCfjMMQSSg8sS5cZWhELIEXS8eWZlmEKjJZOe';

// Événement submit
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du formulaire
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const username = "Formulaire";

    // Vérification rapide des champs
    if (!name || !email || !message) {
        status.textContent = "Veuillez remplir tous les champs ! ❌";
        status.style.color = "red";
        return;
    }

    // Payload pour Discord
    const payload = {
        username: username,
        content: `**👨‍💻Nom:** ${name}\n**✉️Email:** ${email}\n**🖋️Message:** ${message}`
    };

    // Envoi vers le webhook Discord
    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            status.textContent = "Message envoyé, Je reviens vers vous au plus vite ! ✅";
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
