const galleryImages = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.getElementById('close-modal');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentImageIndex = 0;

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageIndex = index;
    modal.style.display = 'flex';
    modalImage.src = image.src;
    modalCaption.textContent = image.alt;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  const nextImage = galleryImages[currentImageIndex];
  modalImage.src = nextImage.src;
  modalCaption.textContent = nextImage.alt;
});

prevButton.addEventListener('click', () => {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  const prevImage = galleryImages[currentImageIndex];
  modalImage.src = prevImage.src;
  modalCaption.textContent = prevImage.alt;
});
