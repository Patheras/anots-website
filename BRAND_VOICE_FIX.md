# Brand Voice Feature Fix

## Problem
Brand voice (tone profile) was not showing in the UI even though the data was being extracted correctly.

## Root Cause
In `merge.ts`, the `toneProfile` was being created and added at the **root level** of the BrandSnapshot instead of inside the `voice` object. Additionally, multiple other files were also looking for `toneProfile` at the root level instead of `voice.toneProfile`.

### Before Fix
```typescript
// WRONG (before fix)
return {
  identity,
  visual,
  voice: {
    sampleSnippets: [...],
  },
  context,
  compliance,
  toneProfile,  // ❌ At root level
  claimPolicy,
  conflicts,
  _meta,
}
```

But the UI in `DraftView.tsx` was looking for `snapshot.voice?.toneProfile`:

```typescript
const toneProfile = snapshot.voice?.toneProfile  // ❌ Looking in voice object
```

And the type definition in `types.ts` also expected it in the voice object:

```typescript
voice: {
  toneProfile?: ToneTrait[]  // ✅ Should be here
  doSay?: string[]
  doNotSay?: string[]
  sampleSnippets?: VoiceSnippet[]
}
```

## Solution
Moved `toneProfile` from root level into the `voice` object where it belongs, and updated all references across the codebase.

### After Fix
```typescript
// CORRECT (after fix)
const voice = {
  sampleSnippets: allSnippets.slice(0, 15).map(s => ({
    text: s.text,
    kind: s.kind,
    sourceUrl: s.sourceUrl,
    sourceId,
  })),
  toneProfile: toneProfile.attributes.length > 0 ? toneProfile.attributes : undefined,  // ✅ Inside voice
}

return {
  identity,
  visual,
  voice,  // ✅ Contains toneProfile
  context,
  compliance,
  claimPolicy,
  conflicts,
  _meta,
}
```

## Changes Made

### 1. File: `agency-os-reference/agency-os/src/lib/brand/drafts/merge.ts`
- **Moved toneProfile creation** into the voice object construction (around line 590)
- **Removed duplicate toneProfile** creation that was at root level (around line 600)
- **Removed toneProfile** from root level of return statement (around line 710)

### 2. File: `agency-os-reference/agency-os/src/components/brand/BrandVersionHistory.tsx`
- Changed `version.snapshot_json.toneProfile?.attributes` → `version.snapshot_json.voice?.toneProfile`
- Updated to handle array format instead of object with attributes

### 3. File: `agency-os-reference/agency-os/src/components/brand/BrandImportPanel.tsx`
- Changed `extractedData.toneProfile?.attributes` → `extractedData.voice?.toneProfile`
- Updated to handle both string and object formats in array

### 4. File: `agency-os-reference/agency-os/src/lib/brand/context.ts`
- Changed `snapshot.toneProfile` → `snapshot.voice?.toneProfile`
- Added logic to convert array format to comma-separated string for context

### 5. File: `agency-os-reference/agency-os/src/lib/brand/review.ts`
- Changed `snapshot.toneProfile?.attributes` → `snapshot.voice?.toneProfile`
- Updated to extract traits from array format

### 6. File: `agency-os-reference/agency-os/src/lib/brand/validators.ts`
- Changed `snapshot.toneProfile?.attributes` → `snapshot.voice?.toneProfile`
- Updated validation to check for array format

## Data Flow

1. **LLM extracts tone attributes** from website content → `groundedData.communication.toneAttributes`
2. **merge.ts creates toneProfile** from tone attributes → `voice.toneProfile` (array of ToneTrait objects)
3. **DraftView.tsx renders** tone profile → Shows tone traits as badges
4. **Other components** access via `snapshot.voice.toneProfile`

## Expected Result

After this fix, when you import a brand:
- Tone attributes extracted by LLM will be stored in `snapshot.voice.toneProfile`
- The "Tone of Voice" section will appear in the UI
- Tone traits will be displayed as green badges (e.g., "Professional", "Friendly", "Innovative")
- All components will correctly access the tone profile from the voice object

## Testing

To test this fix:
1. Go to Brand Room
2. Use MAGIC Import to extract a brand (e.g., dataguess.com)
3. Check if "Tone of Voice" section appears in the draft view
4. Verify tone traits are displayed correctly
5. Check version history shows tone attributes count
6. Verify brand context uses tone profile correctly

## Related Files
- `agency-os-reference/agency-os/src/lib/brand/drafts/merge.ts` - Data merging logic ✅
- `agency-os-reference/agency-os/src/components/brand/DraftView.tsx` - UI rendering (already correct)
- `agency-os-reference/agency-os/src/components/brand/BrandVersionHistory.tsx` - Version history ✅
- `agency-os-reference/agency-os/src/components/brand/BrandImportPanel.tsx` - Import preview ✅
- `agency-os-reference/agency-os/src/lib/brand/context.ts` - Brand context ✅
- `agency-os-reference/agency-os/src/lib/brand/review.ts` - Review logic ✅
- `agency-os-reference/agency-os/src/lib/brand/validators.ts` - Validation ✅
- `agency-os-reference/agency-os/src/lib/brand/sources/types.ts` - Type definitions (already correct)

## Notes

- The fix maintains backward compatibility by handling both string and array formats
- All TypeScript diagnostics pass with no errors
- The toneProfile is now consistently accessed via `snapshot.voice.toneProfile` across the entire codebase
