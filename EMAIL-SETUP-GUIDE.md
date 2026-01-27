# Email Setup Guide - Resend Integration

## 1. Resend Hesabı Oluştur

1. [resend.com](https://resend.com) adresine git
2. "Sign Up" ile hesap oluştur (GitHub ile giriş yapabilirsin)
3. Email doğrulama yap

## 2. Domain Ekle

### Option A: Kendi Domain'in Varsa (anots.com)
1. Resend Dashboard → "Domains" → "Add Domain"
2. Domain'ini ekle: `anots.com`
3. DNS kayıtlarını ekle (Resend sana verecek):
   - SPF record
   - DKIM records
   - DMARC record
4. Verification bekle (5-10 dakika)

### Option B: Test İçin (Resend'in Test Domain'i)
1. Resend otomatik olarak `onboarding@resend.dev` veriyor
2. Bu sadece kendi email adresine mail gönderebilir (test için yeterli)
3. Production'da mutlaka kendi domain'ini eklemen gerekiyor

## 3. API Key Al

1. Resend Dashboard → "API Keys"
2. "Create API Key" tıkla
3. Name: `ANOTS Website`
4. Permission: `Sending access`
5. Key'i kopyala (bir daha göremezsin!)

## 4. .env.local'e Ekle

```bash
RESEND_API_KEY=re_123456789_your_actual_key_here
```

## 5. Email Gönderme Ayarları

`src/lib/email.ts` dosyasında `from` adreslerini güncelle:

### Kendi Domain'in Varsa:
```typescript
from: 'ANOTS <hello@anots.com>'
from: 'ANOTS <notifications@anots.com>'
```

### Test Domain Kullanıyorsan:
```typescript
from: 'onboarding@resend.dev'
```

### Contact Notification Email'i Değiştir:
`src/lib/email.ts` dosyasında `sendContactNotification` fonksiyonunda:

```typescript
to: 'your-email@example.com', // Buraya kendi email'ini koy
```

## 6. Test Et

### Terminal'de:
```bash
npm run dev
```

### Browser'da:
1. **Waitlist Test**: `http://localhost:3010/closed-beta`
   - Formu doldur
   - Email geldi mi kontrol et

2. **Newsletter Test**: Herhangi bir sayfanın footer'ına scroll et
   - Email gir, subscribe ol
   - Email geldi mi kontrol et

3. **Contact Test**: `http://localhost:3010/contact`
   - Formu doldur
   - 2 email gelecek:
     - Sana: Confirmation email
     - Kendine: Notification email

## 7. Email Gelmezse Debug

### Console'u Kontrol Et:
```bash
# Terminal'de şu mesajları ara:
Failed to send waitlist email:
Failed to send newsletter email:
Failed to send contact confirmation email:
```

### Resend Dashboard'u Kontrol Et:
1. Resend Dashboard → "Emails"
2. Son gönderilen email'leri gör
3. Status: `delivered`, `bounced`, `failed`

### Yaygın Sorunlar:

**1. API Key Yanlış:**
```
Error: Invalid API key
```
→ `.env.local`'deki key'i kontrol et, server'ı restart et

**2. Domain Verified Değil:**
```
Error: Domain not verified
```
→ DNS kayıtlarını kontrol et, verification bekle

**3. From Address Yanlış:**
```
Error: Invalid from address
```
→ `src/lib/email.ts`'deki `from` adreslerini kontrol et

**4. Template Bulunamadı:**
```
Error: ENOENT: no such file or directory
```
→ `email-templates/` klasörünün doğru yerde olduğunu kontrol et

## 8. Production'a Geçiş

### Domain Setup:
1. Kendi domain'ini Resend'e ekle
2. DNS kayıtlarını ekle
3. Verification bekle

### Email Adresleri:
- `hello@anots.com` - Genel iletişim
- `notifications@anots.com` - Internal notifications
- `no-reply@anots.com` - Otomatik email'ler

### Rate Limits:
- **Free Tier**: 100 email/day, 3,000 email/month
- **Pro Tier**: $20/month, 50,000 email/month
- **Enterprise**: Custom

## 9. Monitoring

### Resend Dashboard:
- Email delivery rates
- Bounce rates
- Open rates (opsiyonel)
- Click rates (opsiyonel)

### Supabase:
- Kaç kişi kayıt oldu
- Kaç email gönderildi
- Success/failure rates

## 10. Alternatif Email Services

Resend yerine başka servisler de kullanabilirsin:

### SendGrid:
- Daha eski, daha fazla feature
- Free tier: 100 email/day
- Biraz daha karmaşık setup

### Mailgun:
- Developer-friendly
- Free tier: 5,000 email/month (ilk 3 ay)
- Güçlü API

### AWS SES:
- En ucuz ($0.10/1000 email)
- AWS hesabı gerekiyor
- Setup biraz karmaşık

### Postmark:
- Transactional email'e odaklı
- Free tier: 100 email/month
- Çok hızlı delivery

**Öneri:** Resend ile başla, büyüdükçe gerekirse değiştir.

## 11. Email Template Güncelleme

Template'leri güncellemek için:

1. `email-templates/` klasöründeki HTML dosyalarını düzenle
2. Server'ı restart et (template'ler runtime'da okunuyor)
3. Test et

## 12. Unsubscribe Sistemi

Newsletter unsubscribe için:

1. Supabase'de `newsletter_subscribers` tablosunda `status` field'ını `unsubscribed` yap
2. Unsubscribe sayfası oluştur: `/unsubscribe`
3. Email'deki unsubscribe link'ini güncelle

---

## Özet Checklist

- [ ] Resend hesabı oluştur
- [ ] API key al
- [ ] `.env.local`'e ekle
- [ ] `src/lib/email.ts`'de email adreslerini güncelle
- [ ] Contact notification email'ini kendine yönlendir
- [ ] Server'ı restart et
- [ ] 3 formu test et (waitlist, newsletter, contact)
- [ ] Resend dashboard'da email'leri kontrol et
- [ ] Production'da domain ekle

---

**Sorular?** Resend documentation çok iyi: [resend.com/docs](https://resend.com/docs)
