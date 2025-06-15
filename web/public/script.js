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
        
        // Önceki slaytı gizle
        slides[currentSlide].classList.remove("active");
        indicators[currentSlide].classList.remove("active");
        
        // Yeni slaytı göster
        currentSlide = index;
        slides[currentSlide].classList.add("active");
        indicators[currentSlide].classList.add("active");
        
        // Slayt metinlerini göster
        const slideTexts = slides[currentSlide].querySelectorAll(".slide-text h1, .slide-text h2, .slide-text p");
        slideTexts.forEach(text => {
            text.style.opacity = "1";
            text.style.transform = "none";
            text.style.visibility = "visible";
            text.style.display = "block";
            text.style.position = "relative";
            text.style.left = "0";
            text.style.right = "0";
            text.style.transition = "opacity 0.5s ease";
            text.style.textAlign = "center";
            text.style.width = "100%";
            text.style.margin = "0 auto";
            text.style.padding = "0";
        });
        
        // Slayt metin container'ını ortala
        const slideTextContainer = slides[currentSlide].querySelector(".slide-text");
        if (slideTextContainer) {
            slideTextContainer.style.position = "absolute";
            slideTextContainer.style.top = "50%";
            slideTextContainer.style.left = "50%";
            slideTextContainer.style.transform = "translate(-50%, -50%)";
            slideTextContainer.style.width = "90%";
            slideTextContainer.style.maxWidth = "800px";
            slideTextContainer.style.margin = "0 auto";
            slideTextContainer.style.padding = "30px";
            slideTextContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            slideTextContainer.style.borderRadius = "15px";
            slideTextContainer.style.backdropFilter = "blur(5px)";
            slideTextContainer.style.display = "flex";
            slideTextContainer.style.flexDirection = "column";
            slideTextContainer.style.alignItems = "center";
            slideTextContainer.style.justifyContent = "center";
        }
        
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
    
    // İlk slaytı göster
    showSlide(0);
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
