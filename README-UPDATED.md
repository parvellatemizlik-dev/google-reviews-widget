# Google Reviews Widget - Wix Entegrasyonu

Bu proje, Google yorumlarınızı Wix sitenizde göstermek için basit ve hızlı bir çözüm sunar.

## 🚀 Özellikler

- ✅ Toplam yorum sayısı ve ortalama puan gösterimi
- ✅ Son N yorumu gösterme (ayarlanabilir)
- ✅ "Google'da Gör" butonu
- ✅ Hızlı yüklenme (cache'lenmiş veriler)
- ✅ Responsive tasarım
- ✅ Kolay yapılandırma
- ✅ **Tek butonla güncelleme (GitHub Actions)**

## 📋 Hızlı Başlangıç

### 1️⃣ Repository'yi GitHub'a Yükleyin

1. [GitHub](https://github.com) 'da yeni repository oluşturun
   - İsim: `google-reviews-widget`
   - **Public** seçin
   - README eklemeyin (zaten var)

2. Bu dosyaları repository'ye yükleyin
   - Drag & drop ile veya GitHub Desktop ile

### 2️⃣ API Key'i GitHub Secrets'a Ekleyin

1. Repository'nizde **Settings** > **Secrets and variables** > **Actions**
2. **New repository secret** tıklayın
3. Bilgileri girin:
   - **Name:** `GOOGLE_API_KEY`
   - **Secret:** Google API Key'inizi yapıştırın
4. **Add secret** tıklayın

### 3️⃣ Config Dosyasını Düzenleyin

GitHub'da `config.json` dosyasını açın ve şunları düzenleyin:
```json
{
  "businessName": "Şirket Adınız"  // ← Şirket adınızı buraya
}
```

**NOT:** `apiKey` alanını boş bırakın, GitHub Actions otomatik dolduracak!

### 4️⃣ İlk Yorumları Çekin

1. Repository'nizde **Actions** sekmesine gidin
2. Sol taraftan **"Google Yorumları Güncelle"** workflow'unu seçin
3. **Run workflow** butonuna basın
4. Yeşil **Run workflow** onaylayın
5. Birkaç saniye bekleyin ✅

Yorumlar `reviews.json` dosyasına kaydedilecek!

### 5️⃣ Widget'ı Wix'e Ekleyin

1. `widget.html` dosyasını GitHub'da açın
2. **Raw** butonuna basın ve tüm kodu kopyalayın
3. Kodda şunu değiştirin:
   ```javascript
   const GITHUB_USERNAME = 'GITHUB_KULLANICI_ADINIZ'; // ← Buraya kendi kullanıcı adınız
   ```

4. Wix editörde:
   - **Add Elements** (+)
   - **Embed Code** bölümü
   - **Custom Element** seçin
   - Kodu yapıştırın
   - İsterseniz boyutlandırın

## 🔄 Yorumları Güncelleme

### Manuel Güncelleme (Tek Buton!)

1. GitHub'da **Actions** sekmesi
2. **"Google Yorumları Güncelle"** seçin
3. **Run workflow** ▶️
4. Bitti! 🎉

### Otomatik Güncelleme

Workflow dosyası zaten her gün saat 09:00'da otomatik çalışacak şekilde ayarlı.

Saati değiştirmek için `.github/workflows/update-reviews.yml` dosyasındaki cron ifadesini düzenleyin:
```yaml
- cron: '0 9 * * *'  # Her gün 09:00
- cron: '0 */6 * * *'  # Her 6 saatte bir
- cron: '0 0 * * *'  # Her gün gece yarısı
```

## ⚙️ Yapılandırma

### config.json Ayarları

- `placeId`: Google Place ID (değiştirmeyin)
- `reviewCount`: Kaç yorum gösterilecek (varsayılan: 10)
- `language`: Yorum dili (tr, en, vb)
- `businessName`: İşletme adınız
- `googleMapsUrl`: Google Maps linkiniz

### Widget Özelleştirme

`widget.html` içindeki CSS'i düzenleyerek:
- Renkleri değiştirin
- Font boyutlarını ayarlayın
- Tasarımı özelleştirin

## 🎨 Tasarım Örnekleri

Widget'ta gösterilen bilgiler:
- ⭐ Ortalama puan (büyük)
- 📊 Toplam yorum sayısı
- 💬 Son N yorum
- 🔗 "Google'da Gör" butonu

## 🔒 Güvenlik

- ✅ API Key asla public dosyalarda görünmez
- ✅ GitHub Secrets'ta güvenli saklanır
- ✅ Sadece Actions workflow'ları erişebilir

## 📱 Responsive

Widget otomatik olarak:
- Desktop
- Tablet
- Mobil

cihazlara uyum sağlar.

## 🆘 Sorun Giderme

**"Run workflow" butonu görmüyorum:**
- Repository'nin **Public** olduğunu kontrol edin
- `.github/workflows/` klasörünün doğru yerde olduğunu kontrol edin

**Yorumlar çekilmiyor:**
- GitHub **Actions** sekmesinde hata loglarına bakın
- API Key'in doğru girildiğini kontrol edin
- Places API'nin aktif olduğunu kontrol edin

**Widget'ta yorumlar görünmüyor:**
- `reviews.json` dosyasının dolu olduğunu kontrol edin
- Widget'taki GitHub kullanıcı adının doğru olduğunu kontrol edin
- Tarayıcı konsolunda (F12) hata var mı bakın

**Actions çalışmıyor:**
- Repository **Settings** > **Actions** > **General**
- "Allow all actions" seçeneğinin aktif olduğunu kontrol edin

## 📊 API Limitleri

Google Places API ücretsiz limiti:
- **100,000 istek/ay** ücretsiz
- Günde 1 kez = ayda ~30 istek
- **Hiçbir ücret ödemezsiniz!** ✅

## 🔄 Güncelleme Geçmişi

GitHub'da **Actions** sekmesinden tüm güncelleme geçmişini görebilirsiniz.

## 📝 Notlar

- İlk kurulumdan sonra hiç kod yazmanıza gerek yok
- Tüm güncellemeler tek butonla yapılır
- Widget otomatik olarak güncel yorumları gösterir
- Hiçbir maliyet yok, tamamen ücretsiz

## 🎯 İleriye Dönük

Bu basit çözümle başlayın. İlerleye:
- Tasarımı özelleştirin
- Daha fazla yorum gösterin
- Filtreleme ekleyin
- Cevapları gösterin

## 📄 Lisans

MIT License - Özgürce kullanabilirsiniz!

---

**Sorularınız mı var?** GitHub Issues'da soru sorabilirsiniz!
