document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const nav = document.querySelector('.carousel-nav');
  
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    // Create pagination dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      nav.appendChild(dot);
  
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
    });
  
    const dots = Array.from(nav.children);
  
    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
  
      // Update active dot
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }
  
    // Next Button
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
  
    // Prev Button
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  });
  