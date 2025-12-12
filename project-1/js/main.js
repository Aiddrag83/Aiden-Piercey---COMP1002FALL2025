// Javascript is simplier than I was making it originally
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you for your feedback, " + document.getElementById('name').value + "!");
            form.reset();
        });
    }
});
