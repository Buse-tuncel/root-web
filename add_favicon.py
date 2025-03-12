import os
import re

def add_favicon_to_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Eğer zaten favicon varsa, güncelle
    if '<link rel="icon"' in content:
        content = re.sub(
            r'<link rel="icon"[^>]*>',
            '<link rel="icon" type="image/png" href="images/logo.png">',
            content
        )
    # Eğer favicon yoksa, ekle
    elif '<base href="/">' in content:
        content = content.replace(
            '<base href="/">',
            '<base href="/">\n    \n    <!-- Favicon -->\n    <link rel="icon" type="image/png" href="images/logo.png">'
        )
    elif '<head>' in content:
        # Eğer base href yoksa, head etiketinden sonra ekle
        content = content.replace(
            '<head>',
            '<head>\n    <!-- Favicon -->\n    <link rel="icon" type="image/png" href="images/logo.png">'
        )
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"Favicon eklendi: {file_path}")

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                add_favicon_to_html(file_path)

# Web/public dizinindeki tüm HTML dosyalarını işle
process_directory('web/public')
print("İşlem tamamlandı!") 