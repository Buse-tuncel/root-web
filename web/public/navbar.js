// Mobil menü için toggle fonksiyonu
function toggleMenu() {
    var menu = document.querySelector(".nav-links");
    var menuToggle = document.querySelector(".menu-toggle");
    var overlay = document.querySelector(".menu-overlay");
    
    menu.classList.toggle("active"); // Menüyü aç/kapa
    overlay.classList.toggle("active"); // Overlay'i aç/kapa
    
    // Menü açıkken arka planı değiştir
    if (menu.classList.contains("active")) {
        menuToggle.style.backgroundColor = "#2C5282";
        menuToggle.style.color = "white";
    } else {
        menuToggle.style.backgroundColor = "transparent";
        menuToggle.style.color = "#2C5282";
    }
    
    // Sayfa kaydırıldığında menüyü kapat
    document.addEventListener('scroll', function() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            overlay.classList.remove("active");
            menuToggle.style.backgroundColor = "transparent";
            menuToggle.style.color = "#2C5282";
        }
    }, {once: true});
}

// Sayfa yüklendiğinde menu-overlay elementini ekle
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar && !document.querySelector('.menu-overlay')) {
        var overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.onclick = toggleMenu;
        navbar.parentNode.insertBefore(overlay, navbar.nextSibling);
    }
}); 