// Founder Bio Pool - Session-based non-repeating random responses
// Wire sessionId from: localStorage.getItem('echo_session') or generate UUID on first load

const BIO_POOL_TR = [
  "Kaelis. İnsan orkestratör. 3 ajanda, 12 sekme, 1 vizyon. Geri kalanı biz hallediyoruz :D",
  "Kaelis. 'Bir gün ajanslar uyuyacak, sistem çalışacak' diye yola çıktı. Uykusuzluk kısmı hala beta :D",
  "Kaelis. 'Dağınık yaratıcılık' ile 'düzenli makine' arasında barış anlaşması imzalayan kişi.",
  "Kaelis. Sistem kurar, sonra sisteme 'niye bu kadar iyi çalışıyorsun' diye bakar :D",
  "Kaelis. Ajans işlerini otomatikleştirmeye kalktı; yanlışlıkla bir işletim sistemi doğdu.",
  "Kaelis. 'Fikir güzel, peki operasyonu kim yapacak?' sorusuna sinirlenip ANOTS'u yazdı.",
  "Kaelis. 'İçerik üretimi fabrikalaşmalı' dedi. Biz de 'tamam patron' dedik :D"
];

const BIO_POOL_EN = [
  "Kaelis. Human orchestrator. 3 calendars, 12 tabs, 1 vision. We handle the rest :D",
  "Kaelis. Started with 'one day agencies will sleep, system will work'. The sleepless part is still in beta :D",
  "Kaelis. The person who signed a peace treaty between 'messy creativity' and 'organized machine'.",
  "Kaelis. Builds systems, then stares at them like 'why are you working so well?' :D",
  "Kaelis. Tried to automate agency work; accidentally birthed an operating system.",
  "Kaelis. Got annoyed at 'great idea, but who will execute?' and wrote ANOTS.",
  "Kaelis. Said 'content production should be industrialized'. We said 'yes boss' :D"
];

const SERIOUS_FALLBACK_TR = "ANOTS'un kurucusu Kaelis. Ürünün vizyonu ve mimarisini belirleyen isim.";
const SERIOUS_FALLBACK_EN = "ANOTS founder is Kaelis. The person who defines the product's vision and architecture.";

// Intent detection patterns
const FOUNDER_PATTERNS = [
  /founder\s+kim/i,
  /kurucu\s+kim/i,
  /who\s+is\s+the\s+founder/i,
  /who\s+founded/i,
  /kim\s+kurdu/i,
  /kurucusu\s+kim/i,
  /founder\?/i,
  /kurucu\?/i
];

const SERIOUS_PATTERNS = [
  /gerçekten\s+kim/i,
  /seriously/i,
  /who\s+exactly/i,
  /really\s+who/i,
  /ciddi\s+söyle/i,
  /şaka\s+değil/i
];

// Language detection patterns
const TURKISH_PATTERNS = [
  /kim/i,
  /kurucu/i,
  /kurdu/i,
  /gerçekten/i,
  /ciddi/i,
  /şaka/i
];

// In-memory session store (fallback if no localStorage)
const sessionStore = new Map<string, { tr: number[], en: number[] }>();

function detectLanguage(message: string): 'tr' | 'en' {
  return TURKISH_PATTERNS.some(pattern => pattern.test(message)) ? 'tr' : 'en';
}

export function detectFounderQuery(message: string): boolean {
  return FOUNDER_PATTERNS.some(pattern => pattern.test(message));
}

export function detectSeriousQuery(message: string): boolean {
  return SERIOUS_PATTERNS.some(pattern => pattern.test(message));
}

export function getFounderResponse(sessionId: string, message: string, isSeriousQuery: boolean = false): string {
  const lang = detectLanguage(message);
  
  if (isSeriousQuery) {
    return lang === 'tr' ? SERIOUS_FALLBACK_TR : SERIOUS_FALLBACK_EN;
  }

  const bioPool = lang === 'tr' ? BIO_POOL_TR : BIO_POOL_EN;
  
  // Get or initialize remaining pool for this session
  let sessionData = sessionStore.get(sessionId);
  
  if (!sessionData) {
    sessionData = {
      tr: Array.from({ length: BIO_POOL_TR.length }, (_, i) => i),
      en: Array.from({ length: BIO_POOL_EN.length }, (_, i) => i)
    };
    sessionStore.set(sessionId, sessionData);
  }

  let remaining = sessionData[lang];
  
  if (remaining.length === 0) {
    // Reset pool with all indices
    remaining = Array.from({ length: bioPool.length }, (_, i) => i);
    sessionData[lang] = remaining;
  }

  // Pick random index from remaining
  const randomIdx = Math.floor(Math.random() * remaining.length);
  const selectedPoolIdx = remaining[randomIdx];
  
  // Remove from remaining
  remaining.splice(randomIdx, 1);
  sessionStore.set(sessionId, sessionData);

  return bioPool[selectedPoolIdx];
}

// Helper to generate session ID (use in client component)
export function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'server';
  
  const key = 'echo_session';
  let sessionId = localStorage.getItem(key);
  
  if (!sessionId) {
    sessionId = `echo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(key, sessionId);
  }
  
  return sessionId;
}
