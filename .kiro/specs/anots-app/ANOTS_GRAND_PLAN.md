# ANOTS_GRAND_PLAN.md

# ANOTS Grand Master Plan: The AgencyOS Constitution

Version: 0.1
Status: Single Source of Truth
Owner: Kaelis (Founder)
Audience: Kiro (Engineering), ANOTS Core, Qubik, Themis

## 0. Değiştirilemez İlkeler

1. Ürün dilinde "Flow, Automation, Task" yok. Kullanıcıya görünen tüm kavramlar ANOT üzerinden konuşur.
2. Execution asla otomatik başlamaz. Onay geçmeden execution yok.
3. Mentions ile routing esastır: No mention Core, @Qubik sadece Qubik, @Themis sadece Themis, @All hepsi.
4. Tier gating zorunlu: Explorer Free limitli, Pro kredili, Agency BYOK.
5. Self healing zorunlu: Model hatasında (429/500) otomatik fallback.
6. "Dummy proof" onboarding ritüeli zorunlu: adım adım, düşük bilişsel yük.
7. Trust by design: kullanıcı sadece sonuç değil, Qubik önerisi ve Themis denetimini yan yana görür.
8. Terminoloji dönüşümü kademeli: kod içi legacy isimler kısa vadede kalabilir, UI ve yeni şemalar ANOT’a döner.

---

## 1. ANOT Felsefesi ve Terminoloji

### 1.1 ANOT Nedir

ANOT (Atomic Unit of Agency), sistemin en küçük bağımsız iş hücresidir. Teknik bir akış değil, hedefi olan, adım adım kurulabilen, klonlanabilen ve sahiplenilebilen bir iş ortağı birimidir.

### 1.2 Yasaklı Terimler

Kullanıcı deneyiminde şu kelimeler kullanılmaz:

* Flow
* Automation
* Task
* Workflow

İçsel sistemlerde legacy kullanım olabilir, ancak UI ve public API katmanında ANOT terminolojisi esastır.

### 1.3 ANOT Türleri

* Default ANOTs: Tak çalıştır optimize edilmiş üretim birimleri (Video üret, görsel tasarla, blog yaz).
* Watchers (Sinyal ANOTları): Dış dünyayı izleyen, sinyal yakalayan ve kullanıcıya parmak kaldıran duyular.

---

## 2. TCAM V2: Üç Katmanlı Hibrit Beyin Protokolü

### 2.1 Roller ve Motorlar

Bu belgede adı geçen Qubik ve Themis, ANOTS içindeki uzman ajan kimlikleridir.

* ANOTS Core (Guide): Karşılama, onboarding, routing, özetleme, activity hub okuma.
* Qubik (Creative Motor): Üretim, yaratıcı taslaklar, dil ve ton, görsel ve kreatif öneriler.
* Themis (Logic Motor): Denetim, risk analizi, bütçe ve kısıt kontrolü, plan doğrulama, güvenlik bariyerleri.

### 2.2 Model Politikası ve Tier Bağımlılığı

Provider: OpenRouter (unified)

Tier 1 Explorer (Free) için örnek model listeleri:

* Creative:

  1. google/gemini-2.0-flash-exp:free
  2. meta-llama/llama-3.3-70b-instruct:free
  3. mistralai/mistral-7b-instruct:free
* Logic and Planning:

  1. deepseek/deepseek-r1:free
  2. nvidia/llama-3.1-nemotron-70b-instruct:free
* General Chat:

  1. google/gemini-1.5-flash:free

Tier 2 Pro (Kredili) için örnek:

* Qubik: Claude 3.5 Sonnet (veya eşdeğer premium)
* Themis: OpenAI o1-preview (veya eşdeğer reasoning premium)

Tier 3 Agency (BYOK):

* Kullanıcı kendi OpenAI veya Anthropic anahtarını bağlar.
* Model seçimi kalite öncelikli yapılır.

### 2.3 Münazara Protokolü (Adversarial Collaboration)

Akış:

1. PROPOSAL: Qubik üretir.
2. REVIEW: Themis denetler.
3. SYNTHESIS: Core, ikisini birleştirir ve Kaelis karar verir.

UI, bu üç katmanı görünür kılar.

---

## 3. Onboarding ve Kimlik Keşfi

### 3.1 Karşılama

Kullanıcı boş ekranla karşılaşmaz. Core ilk mesajı:
"Nereden başlayacağını bilememen çok normal. Kafan karışmış olabilir. Gel ilk ANOT'unu birlikte kuralım."

### 3.2 Dummy Proof Build

ANOT oluşturma süreci form değil, adım adım ritüeldir:

1. Niyet: Ne yapmak istiyoruz
2. Hesap kontrolü: Tier, kredi, BYOK durumu
3. İnşa: Sıralı sorularla ANOT planının oluşturulması
4. Onay: Planı gör, approve veya reject
5. Execution: Sadece approve sonrası (bu belge kapsamında execution daha sonra açılır)

Sinyal odaklılık:

* "API ver" yerine "Ekran görüntüsü veya dosya at, sinyali ben alırım" yaklaşımı.

### 3.3 Kimlik Sınıfları

Core, kullanıcıyı ilk aşamada sınıflar:

* Solo girişimci
* Ajans
* Kurumsal marka

Bu sınıf, önerilen default ANOT setlerini etkiler.

### 3.4 Stage Graph UI

Sohbet içinde dikey ilerleyen bir grafik:

1. Kimlik
2. Marka analizi
3. Stratejik plan
4. Kurulum

---

## 4. Marketing Room ve Brand Standards

Marketing Room, tüm üretimlerin uyması gereken standart katmanıdır.

### 4.1 Brand Archaeologist

Kullanıcı URL’sinden ve sağladığı sinyallerden şunları çıkarır:

* Marka renkleri (HEX)
* Logo varlıkları
* Ton of voice
* Basit layout kuralları

### 4.2 Google Fonts Kuralı

Fontlar sadece Google Fonts ile sınırlıdır.
Amaç: performans, uyumluluk, tutarlılık.

### 4.3 Layout ve Logo Kuralları

* Logo güvenli alanları
* Yerleşim koordinatları (örn sağ alt)
* Sosyal format varyantları için güvenli alan presetleri

### 4.4 Tone of Voice Profili

Qubik üretimde bu profile uymak zorundadır.
Themis, uyumsuzluk varsa işaretler.

---

## 5. Sinyal Sistemi ve Proaktif Uyarılar

ANOTS pasif değil, proaktif bir yardımcıdır.

### 5.1 Input Kanalları

* Manuel: ekran görüntüsü, dosya, excel, metin
* Canlı: Watcher entegrasyonları (Drive, sosyal medya, web, CRM)

### 5.2 Parmak Kaldırma (Hand Raise)

Watcher kritik bir sinyal yakaladığında UI’da belirgin bir ikon tetikler.
Tıklandığında:

* Qubik hızlı üretim önerisi sunar
* Themis risk ve kısıt kontrolü sunar
* Core sonraki adımı sorar

---

## 6. Smart Editor ve Creative Suite

### 6.1 Real Time Preview

Metin, seçili font ve marka renkleriyle anlık önizleme.

### 6.2 Magic Style

Tek tıkla içerik, Brand Standards’a giydirilir:

* logo yerleşimi
* renk uyumu
* güvenli alanlar

### 6.3 Formatlar

* Video (Reels, Shorts)
* Görsel (Social, Ads)
* Blog (SEO, narrative)

---

## 7. Teknik Optimizasyon ve Performans

### 7.1 Context Management

Bağlam penceresi yüksek doluluğa ulaştığında otomatik yönetici özeti üretimi.

### 7.2 Big Data Windowing

Büyük veri setlerinde sadece ilgili pencere LLM’e gönderilir.

### 7.3 Virtual Scroll

Tablolarda lazy loading, tarayıcı performansı korunur.

---

## 8. İletişim Protokolü: @Mention Routing

### 8.1 Routing Kuralları

* No mention: sadece Core yanıt verir.
* @Qubik: sadece Qubik aktif.
* @Themis: sadece Themis aktif.
* @All: Core, Qubik, Themis birlikte çalışır.

### 8.2 Self Healing

Model çağrısı 429 veya 500 ile dönerse:

* aynı intent için backup modele 1 kez retry
* hata tekrar ederse kontrollü hata payload’ı üret ve kullanıcıya net durum bildir

### 8.3 Output Kontratları

* Qubik output:

  * title
  * proposal
  * artifacts[]
  * assumptions[]
* Themis output:

  * status: approve | warn | reject
  * reasons[]
  * risks[]
  * costNote opsiyonel
* Core output:

  * synthesis
  * nextStepQuestion opsiyonel
  * upgradeNudge opsiyonel

---

## 9. ANOT Hareket Merkezi (Activity Hub)

### 9.1 Görünümler

* 24 saatlik operasyonel görünüm
* 7 günlük stratejik görünüm

### 9.2 Parametreler

* üretim saati
* saklama yeri (Drive, Docs, DB)
* gönderim hedefi (IG, X, WP)
* yayın takvimi
* status

### 9.3 Sorgular

Core, şu tip soruları Activity Hub’dan yanıtlar:

* "Yarın planımda ne var"
* "İçeriklerim nereye kaydedildi"

---

## 10. Ekonomi ve Tier Yapısı

Bu bölüm, ANOTS’un ekonomik anayasasıdır.

### 10.1 Tier 1: Explorer (Free)

Motto: Sadece keşfetmek için.

* Modeller: Free Army ile sınırlı
* Limit: maksimum 3 aktif ANOT

### 10.2 Tier 2: Pro (Kredili)

Motto: Güçlü üretim.

* Modeller: premium modeller
* Limit: sınırsız ANOT
* Kullanım: kredi tabanlı

### 10.3 Tier 3: Agency (BYOK)

Motto: Sınırsız özgürlük.

* Kullanıcı kendi OpenAI veya Anthropic anahtarını bağlar
* Limit: sınırsız ANOT
* En yüksek kaliteye erişim

### 10.4 Satış ve Teşvik Kuralları

* Üst paket teşviki: kullanıcı 3 ANOT limitine yaklaştığında Qubik nazikçe önerir.
* Kredi şeffaflığı: ağır analizlerde işlem öncesi tahmini maliyet gösterilir.
* BYOK bilinci: Agency tier’da kalite odaklı model önerilir.

---

## 11. Yol Haritası (Gelecek Tasklar)

Bu bölüm, tasks.md için referans iskeletidir.

### 11.1 Task 7.3 (Aktif)

Hedef: Mention routing, debate UI, approval gate, activity hub temel görünümü.

Önerilen alt kırılım:

* 7.3a Mention Router + ProviderFactory + Tier gating + fallback
* 7.3b Duel UI: Qubik kartı + Themis rozetli denetim + Core sentez
* 7.3c Approval persistence: approve/reject karar kayıtları
* 7.3d Activity Hub minimal: 24h ve 7d görünüm, okuma API

DoD:

* Onay geçmeden execution yok.
* UI üç katmanı görünür kılar.
* Tier limitleri uygulanır.
* Retry ve hata payload’ları deterministik.

### 11.2 Task 7.4

Marketing Room, Brand Archaeologist, Google Fonts entegrasyonu.

### 11.3 Task 7.5

Data Engine, lazy loading, windowing logic.

### 11.4 Task 7.6

ActivePieces entegrasyonu ve Creative Suite fabrikalarının canlıya alınması.

---

## 12. Mühendislik Notları: Veri Tabanı ve Terminoloji Geçişi

### 12.1 Terminoloji Geçişi

* UI ve yeni API alanları ANOT terimini kullanır.
* Legacy tabloları kısa vadede kalabilir; migrate planı kademeli yapılır.

### 12.2 Beklenen DB Alanları

* profiles:

  * tier: explorer | pro | agency
  * credits_balance: number
  * byok_provider_keys: encrypted refs (agency)
* anots (veya legacy flows tablosunun yeni adı):

  * anot_id
  * owner_id
  * status (active, paused)
  * definition (json)
  * created_at, updated_at
* anot_approvals:

  * approval_id
  * anot_id
  * plan_id veya trace_id
  * actor_id
  * decision (approve, reject)
  * decided_at
  * notes opsiyonel

---

## 13. Değişiklik Kaydı

* 0.1: İlk anayasa sürümü. ANOT terminolojisi, TCAM V2, mention routing, tier gating, onboarding ritüeli, roadmap iskeleti.

Motto: Karmaşayı ANOT’larla çözün.
