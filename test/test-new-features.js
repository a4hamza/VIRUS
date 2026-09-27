/**
 * Verification Test for New Bot Features:
 * 1. Mobile Legends .ml clean output with accurate country flag
 * 2. Ben 10 voice TTS and signature line sample
 * 3. Separate Anti-Delete toggles (.antidelgroup vs .antidelete)
 * 4. .reset spam multi-word command normalization
 * 5. Dynamic paired user owner recognition
 */

const assert = require('assert');
const { checkMobileLegends, parseMLBBInput, countryCodeToFlag } = require('../lib/gameChecker');
const { resolveHero, getCharacterVoiceSampleBuffer } = require('../lib/heroVoices');
const antiDelete = require('../lib/antiDelete');
const commandHandler = require('../lib/commandHandler');
const safety = require('../lib/safety');

async function testNewFeatures() {
  console.log('🧪 Testing New VIRUS Bot Features...\n');

  // Test 1: Mobile Legends Input Parsing & Live Lookup
  console.log('▶ Test 1: Mobile Legends Parser & Live Lookup...');
  const input1 = parseMLBBInput('1114917746', '13486');
  assert.strictEqual(input1.id, '1114917746');
  assert.strictEqual(input1.zone, '13486');

  // Swapped input auto-detection
  const inputSwapped = parseMLBBInput('13486 1114917746');
  assert.strictEqual(inputSwapped.id, '1114917746');
  assert.strictEqual(inputSwapped.zone, '13486');

  // Country Flag Emoji conversion
  assert.strictEqual(countryCodeToFlag('PK'), '🇵🇰');
  assert.strictEqual(countryCodeToFlag('ID'), '🇮🇩');
  assert.strictEqual(countryCodeToFlag('PH'), '🇵🇭');

  const mlResult = await checkMobileLegends('1114917746', '13486');
  assert(mlResult.includes('Outrageous Dominance'), 'Should include username');
  assert(mlResult.includes('🇮🇩 Indonesia'), 'Should include exact flag and country');
  assert(mlResult.includes('1114917746'), 'Should include player ID');
  assert(mlResult.includes('13486'), 'Should include zone ID');
  assert(mlResult.includes('Southeast Asia (SEA)'), 'Should include SEA region');
  console.log('  ✅ Mobile Legends: Accurate parser, live nickname, exact country flag & region verified.');

  // Test 2: Ben 10 Voice Definition & Sample
  console.log('\n▶ Test 2: Ben 10 Voice Definition & Classic Sample...');
  const ben10Char = resolveHero('ben10');
  assert(ben10Char, 'Ben 10 character should be defined');
  assert.strictEqual(ben10Char.id, 'ben10');
  assert.strictEqual(ben10Char.name, 'Ben Tennyson');
  assert(ben10Char.aliases.includes('ben'));
  assert(ben10Char.aliases.includes('tennyson'));
  assert(ben10Char.aliases.includes('omnitrix'));

  const benSample = getCharacterVoiceSampleBuffer('ben10');
  assert(benSample && benSample.length > 1000, 'Ben 10 sample audio file should exist and have content');
  console.log(`  ✅ Ben 10: Character resolved and signature sample loaded (${benSample.length} bytes).`);

  // Test 3: Separate Anti-Delete Toggles (Group vs Private)
  console.log('\n▶ Test 3: Separate Anti-Delete Toggles (Group vs Private)...');
  antiDelete.setGroupEnabled(true);
  antiDelete.setPrivateEnabled(false);
  assert.strictEqual(antiDelete.isGroupEnabled(), true);
  assert.strictEqual(antiDelete.isPrivateEnabled(), false);

  antiDelete.setGroupEnabled(false);
  antiDelete.setPrivateEnabled(true);
  assert.strictEqual(antiDelete.isGroupEnabled(), false);
  assert.strictEqual(antiDelete.isPrivateEnabled(), true);

  // Restore both enabled
  antiDelete.setGroupEnabled(true);
  antiDelete.setPrivateEnabled(true);
  assert.strictEqual(antiDelete.isGroupEnabled(), true);
  assert.strictEqual(antiDelete.isPrivateEnabled(), true);
  console.log('  ✅ Separate Anti-Delete: .antidelgroup and .antidelete independently controlled.');

  // Test 4: Commands Registration
  console.log('\n▶ Test 4: Commands Registration...');
  assert(commandHandler.getCommand('antidelgroup'), 'Command .antidelgroup should be registered');
  assert(commandHandler.getCommand('antidelete'), 'Command .antidelete should be registered');
  assert(commandHandler.getCommand('resetspam'), 'Command .resetspam should be registered');
  assert(commandHandler.getCommand('warn'), 'Command .warn should be registered');
  assert(commandHandler.getCommand('viewonce'), 'Command .viewonce should be registered');
  console.log('  ✅ Commands: .antidelgroup, .antidelete, .resetspam, .warn, .viewonce registered.');

  // Test 5: Dynamic Paired User Owner Recognition
  console.log('\n▶ Test 5: Dynamic Paired User Owner Recognition...');
  const testPairedNumber = '12345678901';
  safety.setPairedUser(`${testPairedNumber}@s.whatsapp.net`);
  assert.strictEqual(safety.isOwner(`${testPairedNumber}@s.whatsapp.net`), true);
  assert.strictEqual(safety.getOwnerJid(), `${testPairedNumber}@s.whatsapp.net`);
  console.log('  ✅ Dynamic Owner: Any user who pairs the bot automatically becomes recognized as owner.');

  console.log('\n🎉 ALL NEW FEATURE TESTS PASSED SUCCESSFULLY! 🎉\n');
}

testNewFeatures().catch(err => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
