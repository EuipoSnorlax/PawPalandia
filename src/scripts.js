document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.backgroundColor = '#D6DBF5';
        });

        card.addEventListener('mouseout', function() {
            card.style.backgroundColor = '#E3E6FA';
        });
    });
});
