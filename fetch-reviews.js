const https = require('https');
const fs = require('fs');

// Config dosyasını oku
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const options = {
  hostname: 'places.googleapis.com',
  path: `/v1/places/${config.placeId}?fields=displayName,rating,userRatingCount,reviews&languageCode=${config.language}&key=${config.apiKey}`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

console.log('Google Places API\'den yorumlar çekiliyor...');

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      try {
        const result = JSON.parse(data);
        
        // Sadece son N yorumu al
        const reviews = result.reviews ? result.reviews.slice(0, config.reviewCount) : [];
        
        const output = {
          businessName: result.displayName?.text || config.businessName,
          rating: result.rating || 0,
          totalReviews: result.userRatingCount || 0,
          reviews: reviews.map(review => ({
            author: review.authorAttribution?.displayName || 'Anonim',
            authorPhotoUrl: review.authorAttribution?.photoUri || '',
            rating: review.rating || 0,
            text: review.text?.text || '',
            relativeTime: review.relativePublishTimeDescription || '',
            publishTime: review.publishTime || ''
          })),
          lastUpdated: new Date().toISOString(),
          googleMapsUrl: config.googleMapsUrl
        };

        fs.writeFileSync('./reviews.json', JSON.stringify(output, null, 2));
        console.log('✅ Yorumlar başarıyla güncellendi!');
        console.log(`📊 Toplam: ${output.totalReviews} yorum, Ortalama: ${output.rating} ⭐`);
        console.log(`📝 Çekilen yorum sayısı: ${reviews.length}`);
      } catch (error) {
        console.error('❌ JSON parse hatası:', error.message);
      }
    } else {
      console.error('❌ API Hatası:', res.statusCode);
      console.error(data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ İstek hatası:', error.message);
});

req.end();
