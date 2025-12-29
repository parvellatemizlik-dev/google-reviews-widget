# Google Reviews Widget - Wix Entegrasyonu

Bu proje, Google yorumlarınızı Wix sitenizde göstermek için basit ve hızlı bir çözüm sunar.

## 🚀 Özellikler

- ✅ Toplam yorum sayısı ve ortalama puan gösterimi
- ✅ Son N yorumu gösterme (ayarlanabilir)
- ✅ "Google'da Gör" butonu
- ✅ Hızlı yüklenme (cache'lenmiş veriler)
- ✅ Responsive tasarım
- ✅ Kolay yapılandırma

## 📋 Gereksinimler

- Google Places API Key
- Google Place ID
- GitHub hesabı
- Node.js (yorumları güncellemek için)

## 🛠️ Kurulum

### 1. Repository'yi Klonlayın veya İndirin

```bash
git clone https://github.com/KULLANICI_ADINIZ/google-reviews-widget.git
cd google-reviews-widget
```

### 2. Config Dosyasını Düzenleyin

`config.json` dosyasını açın ve şu alanları doldurun:

```json
{
  "apiKey": "BURAYA_API_KEY_YAPISTIRIN",
  "businessName": "Şirket Adınız"
}
```

### 3. İlk Yorumları Çekin

```bash
node fetch-reviews.js
```

Bu komut `reviews.json` dosyasını oluşturur ve güncel yorumları çeker.

### 4. Dosyaları GitHub'a Yükleyin

```bash
git add .
git commit -m "İlk yorum verilerini ekle"
git push
```

### 5. Widget'ı Wix'e Ekleyin

1. `widget.html` dosyasını açın
2. `GITHUB_KULLANICI_ADINIZ` kısmını kendi kullanıcı adınızla değiştirin
3. Wix editörde:
   - **Add Elements** > **Embed Code** > **Custom Element**
   - Kodu yapıştırın
   - İsterseniz boyutlandırın

## 🔄 Yorumları Güncelleme

### Manuel Güncelleme

```bash
node fetch-reviews.js
git add reviews.json
git commit -m "Yorumları güncelle"
git push
```

### Otomatik Güncelleme (GitHub Actions)

Günde 1 kez otomatik güncellemek için:

1. GitHub repo > **Settings** > **Secrets and variables** > **Actions**
2. **New repository secret** tıklayın
3. Name: `GOOGLE_API_KEY`
4. Value: API Key'inizi yapıştırın

Sonra `.github/workflows/update-reviews.yml` dosyasını oluşturun:

```yaml
name: Update Google Reviews

on:
  schedule:
    - cron: '0 9 * * *'  # Her gün saat 09:00'da çalışır
  workflow_dispatch:  # Manuel tetikleme

jobs:
  update-reviews:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Update API Key
        run: |
          sed -i 's/BURAYA_API_KEY_YAPISTIRIN/${{ secrets.GOOGLE_API_KEY }}/g' config.json
      
      - name: Fetch reviews
        run: node fetch-reviews.js
      
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add reviews.json
          git diff --quiet && git diff --staged --quiet || git commit -m "Yorumları güncelle [bot]"
          git push
```

## ⚙️ Yapılandırma

`config.json` dosyasındaki ayarlar:

- `reviewCount`: Gösterilecek yorum sayısı (varsayılan: 10)
- `updateInterval`: Güncelleme sıklığı (bilgi amaçlı)
- `language`: Yorum dili (tr, en, vb)

## 🎨 Özelleştirme

`widget.html` dosyasındaki CSS'i değiştirerek tasarımı özelleştirebilirsiniz:

- Renkler
- Fontlar
- Boyutlar
- Gölgeler

## 📝 Notlar

- API Key'inizi asla public dosyalarda paylaşmayın
- GitHub Actions kullanıyorsanız API Key'i secrets'ta saklayın
- Yorumlar 24 saatte 1 kez güncellenecek şekilde tasarlanmıştır

## 🆘 Sorun Giderme

**Yorumlar görünmüyor:**
- `reviews.json` dosyasının dolu olduğunu kontrol edin
- GitHub'da dosyaların yüklendiğini kontrol edin
- Widget'taki GitHub kullanıcı adının doğru olduğunu kontrol edin

**API hatası alıyorum:**
- API Key'in doğru olduğunu kontrol edin
- Places API'nin aktif olduğunu kontrol edin
- API limitlerini kontrol edin

## 📄 Lisans

MIT License - İstediğiniz gibi kullanabilirsiniz!
