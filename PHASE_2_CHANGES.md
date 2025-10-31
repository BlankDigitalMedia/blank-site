# Phase 2: Homepage Streamlining

## What Changed

### Removed from Homepage ❌
1. **"Now Listening" music widget** - Creates cognitive dissonance for SMB buyers
2. **"Latest Builder Notes" card** - Duplicate of main Builder Notes section below

### Added/Modified ✅
1. **New Newsletter Section** with SMB-focused copy:
   - Old: "Join the lab notes — occasional updates, no spam"
   - New: "Practical fixes for Southwest Michigan small businesses. 1–2 emails per month. No agency fluff."
   
2. **Streamlined Builder Notes**:
   - Changed from "All Builder Notes" to "Builder Notes"
   - Added description: "Technical explorations, experiments, and lessons learned"
   - Limited to top 6 posts on homepage (was showing all)

3. **Music Widget Moved to About Page**:
   - Preserves personality/builder identity
   - Doesn't distract from business CTAs on homepage

## New Homepage Structure

```
┌─────────────────────────────────────┐
│ Hero                                │
│ • Photo + Value Prop                │
│ • 2 CTAs (Book Call, Services)      │
│ • Trust Chips (Veteran, Local, etc) │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│ Trust Signals                       │
│ • Veteran-owned • Local • Fast      │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│ Services Highlight                  │
│ • Quick overview with CTAs          │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│ Newsletter (NEW SMB FOCUS)          │
│ • "Practical fixes for SW Michigan" │
│ • Single panel, no bento grid       │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│ Builder Notes (Top 6)               │
│ • Shows technical credibility       │
│ • No longer "All" posts             │
└─────────────────────────────────────┘
```

## Oracle's Reasoning

### Why Remove Music Widget?
- **Cognitive dissonance**: SMB owners looking for business help don't care what you're listening to
- **Off-target**: Creates distraction from conversion goals
- **Solution**: Move to About page where personality fits context

### Why Remove "Latest Posts" Card?
- **Duplication**: Already showing Builder Notes below
- **Redundant**: One content surface is cleaner than two
- **Focus**: Every element should support conversion or credibility

### Why Keep Newsletter?
- **Lead nurture**: Captures non-ready buyers
- **SMB value**: Repositioned as practical business tips (not personal updates)
- **Low friction**: Doesn't compete with primary CTAs

### Why Keep Builder Notes?
- **Credibility**: Shows you actually build things (not just talk)
- **SEO**: Internal linking and fresh content
- **Authenticity**: "No agency overhead" is proven by showing your work

## Conversion Focus Metrics

Track for 2-4 weeks:

**Primary (Most Important):**
- Book Call CTA clicks
- Services page visits
- Form submissions

**Secondary:**
- Newsletter signups
- Scroll depth to Builder Notes
- Time on page

**Hypothesis:**
Removing distractions will increase primary CTA engagement even if secondary metrics (time on page, scroll depth) decrease slightly.

## Implementation Time
- Actual: ~30 minutes
- Oracle estimated: 30-60 minutes

## Files Changed
- ✅ `app/page.tsx` - Removed LatestAndListening, added NewsletterSection
- ✅ `components/NewsletterSection.tsx` - New SMB-focused newsletter
- ✅ `components/NowPlayingWidget.tsx` - Created for About page
- ✅ `app/about/layout.tsx` - Adds music widget to About page

## Before vs After

### Before (Phase 1):
- Homepage had bento grid with Latest/Listening/Newsletter
- All builder notes shown
- Music widget on homepage

### After (Phase 2):
- Homepage has single newsletter panel
- Top 6 builder notes shown
- Music widget on About page only
- Newsletter copy targets SMB owners

## What to Validate

After 2-4 weeks, check if:
1. ✅ Primary CTA clicks increased
2. ✅ Newsletter signups maintained or increased (new copy)
3. ⚠️ Time on page may decrease (expected, not bad)
4. ⚠️ Scroll depth may decrease (expected, not bad)

If primary CTAs don't improve, consider adding proof elements (testimonials, case studies) in place of removed sections.

## Next Phase Trigger

Move to Phase 3 (add testimonials/case studies) when:
- You have 2-3 completed client projects
- You have real testimonials
- You want to replace trust chips with social proof
