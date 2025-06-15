// Footer.js - Sayfaya footer ekleyen script

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-info">
                <h3>İletişim Bilgileri</h3>
                <p>📍 İcadiye Mahallesi Mağazacı Sokak No:12 Üsküdar/İstanbul, Türkiye</p>
                <p>📞 <a href="tel:+908504748112">+90 850 474 81 12</a></p>
                <p>📞 <a href="tel:+902162324090">+90 216 232 40 90</a></p>
                <p>✉️ <a href="mailto:speechtherapy26@gmail.com">speechtherapy26@gmail.com</a></p>
                <div class="social-links">
                    <a href="https://www.instagram.com/dktbusetuncel/" target="_blank" title="Instagram'da Bizi Takip Edin">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            
            <div class="footer-cta">
                <h3>Hızlı Bağlantılar</h3>
                <p><a href="hizmetler/">Hizmetlerimiz</a></p>
                <p><a href="hakkimizda/">Hakkımızda</a></p>
                <p><a href="iletisim/">İletişim</a></p>
            </div>

            <div class="footer-cta">
                <h3>Randevu Alın</h3>
                <p>Size en uygun zamanda randevu oluşturmak için hemen iletişime geçin.</p>
                <a href="tel:+908504748112" class="btn">Hemen Ara</a>
            </div>
        </div>
        <div class="footer-copy">
            © ${new Date().getFullYear()} Dil ve Konuşma Terapisi. Tüm hakları saklıdır.
        </div>
        <footer style="text-align: center; margin: 50px 0;">
  <p><a href="/privacy-policy.html">Gizlilik Politikası</a></p>
</footer>

    `;

    // Font Awesome CDN'ini dinamik olarak ekle
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }

    document.body.appendChild(footer);
}); 