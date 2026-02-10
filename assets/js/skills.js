document.addEventListener('DOMContentLoaded', () => {
    const competenceCards = document.querySelectorAll('.competence-card');

    competenceCards.forEach(card => {
        const header = card.querySelector('.competence-header');
        header.addEventListener('click', () => {
            // Toggle current card
            card.classList.toggle('active');

            // Optional: Close others when one opens (accordion style)
            // Uncomment the lines below if you want accordion behavior
            /*
            competenceCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });
            */
        });
    });
});
