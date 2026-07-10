// 1. Interactive Accordion for Weekly Journal Section
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const content = this.nextElementSibling;
        
        // Toggle active styling class on clicked item
        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
            // Smoothly open accordion content panel
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            // Smoothly collapse accordion content panel
            content.style.maxHeight = "0px";
        }
    });
});

// 2. Interactive Lightbox (Modal Popup Viewer) for Documentation Photos
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(imageSrc) {
    lightbox.style.display = 'flex';
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

// Close lightbox window automatically if the user presses 'Escape' key
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});