// Hero Slider - Geliştirilmiş
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;
    let isAnimating = false;
    
    function showSlide(index) {
        if (isAnimating) return;
        isAnimating = true;
        
        slides[currentSlide].classList.remove("active");
        indicators[currentSlide].classList.remove("active");
        
        currentSlide = index;
        
        slides[currentSlide].classList.add("active");
        indicators[currentSlide].classList.add("active");
        
        setTimeout(() => {
            isAnimating = false;
        }, 1200);
    }
    
    function nextSlide() {
        let next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }
    
    function prevSlide() {
        let prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    }
    
    function startSlideshow() {
        stopSlideshow();
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopSlideshow() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }
    
    prevBtn.addEventListener("click", () => {
        prevSlide();
        stopSlideshow();
        startSlideshow();
    });
    
    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopSlideshow();
        startSlideshow();
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            if (currentSlide !== index) {
                showSlide(index);
                stopSlideshow();
                startSlideshow();
            }
        });
    });
    
    const sliderContainer = document.querySelector(".slider-container");
    sliderContainer.addEventListener("mouseenter", stopSlideshow);
    sliderContainer.addEventListener("mouseleave", startSlideshow);
    
    startSlideshow();
});


//menü barı//
function toggleMenu() {
    var menu = document.querySelector(".nav-links");
    menu.classList.toggle("active"); // Menüyü aç/kapa
}


// Lightbox Açma Fonksiyonu
function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

// Lightbox Kapatma Fonksiyonu
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
