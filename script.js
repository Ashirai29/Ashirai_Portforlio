document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission with a custom message
    document.getElementById('contactForm').addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank you for your message! Ashley will get back to you soon.');
    });

    // Modal for viewing profile image
    const profileImage = document.getElementById('profileImage');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    // Show modal with full-view image
    profileImage.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = profileImage.src;
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
