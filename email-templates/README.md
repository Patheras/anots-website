# ANOTS Email Templates

Bu klasörde 3 farklı email template'i bulunuyor. Hepsi ANOTS dark theme'ine uygun tasarlanmış.

## Templates

### 1. `waitlist-confirmation.html`
**Kullanım:** Closed Beta waitlist'e kayıt olunca gönderilir.

**Değişkenler:**
- `{{NAME}}` - Kullanıcının adı

**Özellikler:**
- April 6, 2025 launch date vurgusu
- Isaac Asimov referansı
- Founder's Deal mention
- 3 AI agent tanıtımı

---

### 2. `newsletter-welcome.html`
**Kullanım:** Newsletter'a subscribe olunca gönderilir.

**Değişkenler:**
- `{{UNSUBSCRIBE_URL}}` - Unsubscribe linki

**Özellikler:**
- Newsletter içeriği hakkında bilgi
- Closed beta CTA
- Unsubscribe linki

---

### 3. `contact-confirmation.html`
**Kullanım:** Contact form gönderilince kullanıcıya confirmation maili.

**Değişkenler:**
- `{{NAME}}` - Kullanıcının adı
- `{{MESSAGE}}` - Gönderilen mesaj

**Özellikler:**
- Mesaj özeti gösterimi
- 24-48 saat response time
- Explore links (Features, Pricing, Insights)

---

## Supabase Email Integration

Bu template'leri Supabase ile kullanmak için:

### Option 1: Supabase Auth Email Templates (Sadece auth için)
1. Supabase Dashboard → Authentication → Email Templates
2. HTML'i kopyala-yapıştır
3. Değişkenleri Supabase syntax'ına çevir: `{{ .ConfirmationURL }}` gibi

### Option 2: Resend / SendGrid / Mailgun (Önerilen)
1. Bir email service provider seç (Resend öneriyorum, modern ve kolay)
2. API key al
3. Template'leri provider'a yükle veya API'den gönder
4. Next.js API route'larından email gönder

### Option 3: Supabase Edge Functions
1. Edge Function oluştur
2. Template'leri function içinde kullan
3. Database trigger ile otomatik email gönder

---

## Örnek: Resend ile Kullanım

```bash
npm install resend
```

```typescript
// src/lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistEmail(name: string, email: string) {
  const html = `<!-- waitlist-confirmation.html içeriği -->`;
  const htmlWithData = html.replace('{{NAME}}', name);
  
  await resend.emails.send({
    from: 'ANOTS <hello@anots.com>',
    to: email,
    subject: 'Welcome to ANOTS Closed Beta Waitlist',
    html: htmlWithData,
  });
}
```

---

## Design Tokens

Template'lerde kullanılan renkler:

```css
--background: #030303
--container-bg: #0a0a0a
--border: #262626
--text-primary: #ededed
--text-secondary: #a1a1a1
--text-muted: #666
--accent: #5e6ad2
--accent-gradient: linear-gradient(135deg, rgba(94, 106, 210, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)
```

---

## Testing

Template'leri test etmek için:

1. HTML dosyasını browser'da aç
2. Değişkenleri manuel olarak değiştir
3. Farklı email client'larda test et (Gmail, Outlook, Apple Mail)
4. [Litmus](https://litmus.com) veya [Email on Acid](https://www.emailonacid.com) kullan

---

## Next Steps

1. Email service provider seç (Resend öneriyorum)
2. API key al ve `.env.local`'e ekle
3. Email gönderme fonksiyonları yaz
4. API route'larına entegre et
5. Test et!

---

**Not:** Bu template'ler responsive değil (mobile optimize edilmemiş). Çoğu email client zaten otomatik scale ediyor ama gerekirse media query eklenebilir.
