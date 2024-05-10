document.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('currentDateTime').textContent = now.toLocaleString();
    }, 1000);
});