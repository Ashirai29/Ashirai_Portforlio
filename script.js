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

    

    // Modal for profile image
    const profileImage = document.getElementById('profileImage');
    const modal = document.createElement('div');
    const modalImage = document.createElement('img');
    const closeButton = document.createElement('span');

    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = 1000;

    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '35px';
    closeButton.style.fontSize = '40px';
    closeButton.style.color = '#fff';
    closeButton.style.cursor = 'pointer';

    modalImage.style.maxWidth = '90%';
    modalImage.style.maxHeight = '80%';

    modal.appendChild(closeButton);
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    profileImage.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = profileImage.src;
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
