 const images = document.querySelectorAll('.carousel-image');
    let current = 0;

    function showSlide(index) {
      images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
      });
    }

    function nextSlide() {
      current = (current + 1) % images.length;
      showSlide(current);
    }

    setInterval(nextSlide, 3000);
    showSlide(current);