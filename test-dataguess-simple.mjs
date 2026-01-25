// Simple test for dataguess.com extraction
import https from 'https';

async function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractColors(html) {
  const colors = new Set();
  
  // Extract hex colors
  const hexMatches = html.matchAll(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g);
  for (const match of hexMatches) {
    let hex = match[1].toLowerCase();
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    colors.add(`#${hex}`);
    if (colors.size >= 20) break;
  }
  
  // Filter out white/black
  return Array.from(colors).filter(c => 
    c !== '#ffffff' && c !== '#000000' && c !== '#fff' && c !== '#000'
  ).slice(0, 10);
}

function extractFonts(html) {
  const fonts = new Set();
  const fontMatches = html.matchAll(/font-family:\s*([^;}]+)/gi);
  
  for (const match of fontMatches) {
    const fontFamily = match[1].trim();
    const fontNames = fontFamily.split(',').map(f => f.replace(/["']/g, '').trim());
    
    for (const fontName of fontNames) {
      const generic = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui'];
      if (!generic.includes(fontName.toLowerCase()) && fontName.length >= 3) {
        fonts.add(fontName);
        if (fonts.size >= 10) break;
      }
    }
    if (fonts.size >= 10) break;
  }
  
  return Array.from(fonts).slice(0, 5);
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : null;
}

function extractMetaDescription(html) {
  const match = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  return match ? match[1].trim() : null;
}

async function test() {
  console.log('🚀 Testing dataguess.com extraction...\n');
  
  try {
    console.log('📥 Fetching HTML...');
    const html = await fetchHTML('https://www.dataguess.com');
    console.log(`✅ Fetched ${(html.length / 1024).toFixed(1)} KB\n`);
    
    // Check for #fa0047
    console.log('🔍 Searching for #fa0047...');
    if (html.includes('#fa0047') || html.includes('#FA0047')) {
      console.log('✅ Found #fa0047 in HTML!');
    } else {
      console.log('❌ #fa0047 NOT found in HTML');
    }
    
    // Check for Unbounded
    console.log('\n🔍 Searching for Unbounded font...');
    if (html.includes('Unbounded')) {
      console.log('✅ Found Unbounded in HTML!');
      const unboundedMatches = html.match(/Unbounded[^<]{0,100}/gi);
      if (unboundedMatches) {
        console.log('Matches:', unboundedMatches.slice(0, 3));
      }
    } else {
      console.log('❌ Unbounded NOT found in HTML');
    }
    
    // Check for Space Grotesk
    console.log('\n🔍 Searching for Space Grotesk font...');
    if (html.includes('Space Grotesk') || html.includes('Space+Grotesk')) {
      console.log('✅ Found Space Grotesk in HTML!');
      const spaceMatches = html.match(/Space[+ ]Grotesk[^<]{0,100}/gi);
      if (spaceMatches) {
        console.log('Matches:', spaceMatches.slice(0, 3));
      }
    } else {
      console.log('❌ Space Grotesk NOT found in HTML');
    }
    
    // Check for Google Fonts links
    console.log('\n🔍 Searching for Google Fonts...');
    const googleFontsMatches = html.match(/fonts\.googleapis\.com[^"'<>]+/gi);
    if (googleFontsMatches) {
      console.log('✅ Found Google Fonts links:', googleFontsMatches.length);
      googleFontsMatches.slice(0, 3).forEach(m => console.log(`  ${m}`));
    } else {
      console.log('❌ No Google Fonts links found');
    }
    
    // Check for CSS links
    console.log('\n🔍 Searching for CSS links...');
    const cssLinks = html.match(/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi);
    if (cssLinks) {
      console.log('✅ Found CSS links:', cssLinks.length);
      cssLinks.slice(0, 5).forEach(link => {
        const hrefMatch = link.match(/href=["']([^"']+)["']/);
        if (hrefMatch) console.log(`  ${hrefMatch[1]}`);
      });
    }
    
    console.log('\n🎨 Extracting colors...');
    const colors = extractColors(html);
    console.log('Colors found:', colors.length);
    colors.forEach(c => console.log(`  ${c}`));
    
    console.log('\n📝 Extracting fonts...');
    const fonts = extractFonts(html);
    console.log('Fonts found:', fonts.length);
    fonts.forEach(f => console.log(`  ${f}`));
    
    console.log('\n📄 Extracting metadata...');
    const title = extractTitle(html);
    const description = extractMetaDescription(html);
    console.log('Title:', title);
    console.log('Description:', description);
    
    console.log('\n✨ Test completed!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();
