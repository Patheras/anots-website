// Test dataguess.com brand extraction
const { importBrandFromUrl } = require('./agency-os-reference/agency-os/src/lib/brand/import.ts');

async function test() {
  console.log('🚀 Testing dataguess.com brand extraction...\n');
  
  try {
    const result = await importBrandFromUrl(
      'https://www.dataguess.com',
      'test-org-id',
      null
    );
    
    if (!result.ok) {
      console.error('❌ Import failed:', result.error);
      return;
    }
    
    console.log('✅ Import successful!\n');
    
    // Display extracted signals
    console.log('📊 EXTRACTED SIGNALS:');
    console.log('─────────────────────────────────────');
    result.extractedSignals.forEach(signal => {
      console.log(`  ${signal}`);
    });
    
    console.log('\n🎨 VISUAL DATA:');
    console.log('─────────────────────────────────────');
    console.log('Colors:', result.snapshot.visual.colors.detected.map(c => c.hex).join(', '));
    console.log('Primary Color:', result.snapshot.visual.colors.primary || 'none');
    console.log('Secondary Color:', result.snapshot.visual.colors.secondary || 'none');
    console.log('Fonts:', result.snapshot.visual.fonts.detectedFonts.map(f => f.name).join(', '));
    console.log('Logos:', result.snapshot.visual.logos.length, 'found');
    
    console.log('\n📝 TEXT SNIPPETS:');
    console.log('─────────────────────────────────────');
    result.snapshot.voice.sampleSnippets.slice(0, 3).forEach((snippet, i) => {
      console.log(`${i + 1}. [${snippet.kind}] ${snippet.text.slice(0, 100)}...`);
    });
    
    console.log('\n🎯 IDENTITY:');
    console.log('─────────────────────────────────────');
    console.log('Name:', result.snapshot.identity.name || 'none');
    console.log('Tagline:', result.snapshot.identity.tagline || 'none');
    
    console.log('\n✨ Test completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error(error.stack);
  }
}

test();
