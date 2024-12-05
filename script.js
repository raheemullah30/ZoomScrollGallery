const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-btn');

let index = 0;

// Function to update the gallery's position
function updateGallery() {
  const offset = -index * 100; // Calculate offset
  gallery.style.transform = `translateX(${offset}%)`;
}

// Next button click event
nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length; // Loop back to the start
  updateGallery();
});

// Previous button click event
prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length; // Loop to the end
  updateGallery();
});

// Open modal on image click
images.forEach((img) => {
  img.addEventListener('click', (e) => {
    modal.style.display = 'block';
    modalImg.src = e.target.src;
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
