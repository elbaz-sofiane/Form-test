<form id="myForm">
  <input type="text" name="username" placeholder="Ton nom" required>
  <input type="text" name="message" placeholder="Ton message" required>
  <button type="submit">Envoyer</button>
</form>

<script>
const form = document.getElementById('myForm');
const webhookURL = 'https://discord.com/api/webhooks/1419306152596078652/gyajChb0IKSVhic2vMIwJNyQJ_-Ot9X7zhDzZ_bO4K_In_FdXRvL5tw998yI0AvKswBh';

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    const formData = new FormData(form);
    const username = formData.get('username');
    const message = formData.get('message');

    const payload = {
        username: username,
        content: message
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('Message envoyé !');
            form.reset();
        } else {
            alert('Erreur lors de l\'envoi du message.');
        }
    } catch (err) {
        console.error(err);
        alert('Erreur lors de l\'envoi du message.');
    }
});
</script>
