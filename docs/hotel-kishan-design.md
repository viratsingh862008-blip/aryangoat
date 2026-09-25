
# Hotel Kishan Bettiah — V2 Design Direction

## Objective
Rebuild Hotel Kishan as a polished, hospitality-first website that feels closer to a premium boutique hotel brand than a generic local-hotel template. The site should convert visitors into calls, directions, and booking actions while remaining truthful to public property data.

## Inspiration Research
Research was performed against three current hospitality websites using crawlers, rendered screenshots, and extracted style guides:

1. The Oberoi Hotels & Resorts
   - https://www.oberoihotels.com/
   - Useful patterns: clear luxury information architecture, highly visible booking action, large destination imagery, editorial property cards, disciplined spacing, calm typography.
   - Extracted cues: warm neutral base, brass/orange action accent, generous vertical rhythm, clean card framing.

2. Aman / Amanbagh
   - https://www.aman.com/resorts/amanbagh
   - Useful patterns: quiet editorial composition, very large whitespace, serif-led storytelling, image-as-architecture, restrained navigation, minimal controls, experiential sections.
   - Extracted cues: warm ivory background, dark charcoal type, almost no shadows, squared/soft-radius controls, long-form vertical pacing.

3. Bombay Canteen
   - https://www.bombaycanteen.com/
   - Useful patterns: bold visual storytelling, prominent food section, image grids, playful section rhythm, clear order/contact actions.
   - Extracted cues: strong dark image sections, expressive accent color, gallery-led dining storytelling.

### Important implementation rule
Use the patterns above as design research only. Do not copy source HTML, CSS, JavaScript, logos, proprietary fonts, text, or third-party photography from those reference sites.

## Hotel Kishan Source Data
Current public listing evidence:
- Name: HOTEL KISHAN
- Location: Kamalnath Nagar, Supriya Cinema Road, Bettiah, West Champaran, Bihar 845438
- Public booking channels: Goibibo and MakeMyTrip
- Current Goibibo listing: 2-star property, 5 room types, 25 property photos, current displayed rating 3.4/5 from 134 reviews; these values can change and must not be hard-coded into conversion copy as permanent facts.
- Public room categories: Standard NON AC, Standard AC, DELUX, Family Room, Luxury
- Public amenities reported by MakeMyTrip: Restaurant, Room Service, Smoking Rooms, Power Backup, Elevator/Lift, Refrigerator
- Public property timings reported by Goibibo: check-in 2:00 PM, check-out 12:00 PM
- Public phone numbers previously surfaced for the property: +91 99732 11516, +91 6254 233188, +91 99310 68605
- Google Maps search target:
  https://www.google.com/maps/search/?api=1&query=HOTEL%20KISHAN%2C%20Supriya%20Cinema%20Road%2C%20Bettiah%2C%20Bihar%20845438
- Goibibo booking:
  https://www.goibibo.com/hotels/kishan-hotel-in-bettiah-4667815554817029647/
- MakeMyTrip:
  https://www.makemytrip.com/hotels/hotel_kishan-details-bettiah.html

## Photography
Use publicly listed Hotel Kishan property photos only for the demo. Do not borrow competitor imagery.

Primary facade:
https://r1imghtlak.mmtcdn.com/6ab623be-5fd5-43d1-b8d6-56f4dea24767.jpg

Room:
https://r1imghtlak.mmtcdn.com/2f29580d-c235-4cc3-b550-19943547c110.jpg

Additional public property images already identified:
https://r1imghtlak.ibcdn.com/dbf4e08f-98bf-4526-bceb-622f23369827.jpg?crop=520%3A350%3B2%2C0&downsize=520%3A350&output-format=webp&output-quality=75
https://r1imghtlak.ibcdn.com/76773e99-89c5-458e-9ce1-23f6d9d8117a.jpg?crop=520%3A350%3B0%2C215&downsize=520%3A350&output-format=webp&output-quality=75
https://r1imghtlak.ibcdn.com/534db602-727f-4a67-ab86-4cf4b1a9d3dd.jpg?crop=520%3A350%3B2%2C0&downsize=520%3A350&output-format=webp&output-quality=75
https://r1imghtlak.ibcdn.com/5d4c38d6-97c3-46a2-82a6-5075ca4a9790.jpg

Demo note: photo rights are not independently verified. Keep a small internal developer note to replace remote listing photos with owner-supplied/licensed originals before production launch.

## Visual Direction
### Palette
- Ink: #171717
- Charcoal: #242321
- Ivory: #F3EEE7
- Paper: #FAF7F1
- Stone: #DDD4C7
- Brass: #B38B5B
- Vermilion: #8E302B
- Line: rgba(23,23,23,.14)

Do not use the competitor brand colors as-is; the Hotel Kishan palette must feel native and distinct.

### Typography
Use accessible, public fonts:
- Display: Cormorant Garamond 500/600
- UI/body: Manrope 400/500/600/700
- Micro labels: DM Mono 400

Use large serif headlines, compact uppercase microcopy, and restrained body widths.

## Layout System
- Max content width: 1240px
- Mobile side padding: 18px
- Desktop side padding: 28px
- Section vertical rhythm: 96–160px
- Grid gap: 20–28px
- Border radius: mostly 0–10px; never pill-heavy except compact controls.
- Shadows should be rare. Prefer borders, image depth, overlay gradients, and spacing.

## Page Architecture
One long-form responsive page with anchor navigation.

### 1. Utility strip
Small top strip with:
- BETTIAH / WEST CHAMPARAN
- “Direct booking & local stay” style metadata
- Current time / location must not be fabricated.

### 2. Navigation
Desktop:
- left: Hotel Kishan monogram + wordmark
- center: Stay / Dining / Gallery / Location
- right: “Call” text action + primary “Book” action

Mobile:
- compact brand
- menu drawer
- fixed bottom action rail with Call / Directions / Book

### 3. Hero
A cinematic full-viewport hero using the actual Hotel Kishan facade.
Structure:
- small eyebrow: KAMALNATH NAGAR · BETTIAH
- huge serif title: HOTEL KISHAN
- two-line supporting statement focused on stay + dining
- primary CTA: Check availability
- secondary CTA: Directions
- floating metadata card with:
  - 5 room categories
  - “Local hotel · rooms + restaurant”
  - Check-in 2 PM / Check-out 12 PM

Hero motion:
- subtle image scale on load
- gentle parallax on scroll
- no excessive animation

### 4. Property story
Editorial two-column composition:
- large portrait/cropped room image
- text stack explaining the property in factual language
- tiny facts row:
  - Kamalnath Nagar
  - Supriya Cinema Road
  - Restaurant on property
- no fake awards/testimonials.

### 5. Stay / Rooms
Make this the conversion center.

UI:
- horizontal room selector tabs/cards
- one featured image
- title, bed, city-view, occupancy, bathroom summary
- “View live rates” outbound CTA
- “Call hotel” CTA

Room data:
- Standard NON AC
- Standard AC
- DELUX
- Family Room
- Luxury

Keep pricing dynamic: never freeze scraped booking-site rates into the website.

### 6. Experience / dining
Blend Oberoi-style destination storytelling with Bombay-Canteen-style food energy.

Use a dark section:
- left: oversized section label “KISHAN”
- center: facade/restaurant imagery
- right: concise restaurant copy
- CTA to call / maps / booking

Do not invent menu items not confirmed in public source data. It is safe to describe the visible property signage as “Kishan Sweets & Restaurant” and “chaats, snacks, bakery, banquet” only when referencing the property photo itself.

### 7. Amenities
Minimal grid with icon + label:
- Restaurant
- Room Service
- Power Backup
- Elevator / Lift
- Refrigerator
- Smoking Rooms

Include a subtle developer note that these are from current public booking listings and should be confirmed before launch.

### 8. Gallery
Use a magazine-like asymmetric mosaic:
- one large hero image
- two stacked medium images
- three smaller cards
- click opens lightbox
- keyboard accessible
- alt text must describe the image content

### 9. Location
Two-column:
- left: address + local context
- right: map CTA card
- one-click Google Maps
- three phone actions

### 10. Booking strip
Full-width ivory/charcoal section:
- “Your stay starts in Bettiah.”
- “Check live availability”
- Goibibo + MakeMyTrip
- phone button

### 11. Footer
- Hotel Kishan
- address
- phone links
- maps
- booking links
- small demo-photo rights note

## Interaction Requirements
- Smooth anchor scrolling
- Mobile nav drawer
- Room selector updates image, description, and metadata
- Gallery lightbox with previous/next/close
- Escape closes dialogs
- Click outside closes drawer/lightbox
- Body scroll locked while drawer/lightbox is open
- Reduced-motion preference respected
- No console errors
- No broken internal anchor navigation
- External links open intentionally

## Accessibility
- Semantic landmarks: header, nav, main, section, footer
- One H1 only
- Logical H2/H3 hierarchy
- Visible keyboard focus
- Minimum 44px tap targets on mobile for primary controls
- Dialog/lightbox has accessible label
- Images use meaningful alt text
- Avoid color-only status cues
- Respect prefers-reduced-motion

## SEO
- Unique title and meta description
- canonical URL placeholder comment only if no canonical domain exists
- Hotel structured data with factual fields only
- LocalBusiness/Hotel JSON-LD should not invent rating, price range, email, or opening hours
- OpenGraph image should use Hotel Kishan facade
- Descriptive image alts

## Performance
- Use responsive image sizes and lazy loading below the fold
- Hero image loads eagerly
- Avoid giant background video
- Use CSS transitions rather than animation libraries for this static demo
- Keep the page dependency-light: single HTML/CSS/JS implementation is acceptable

## Implementation Contract for the Code Builder
Build against this MD as the source of truth.

Do NOT:
- use AppDeploy
- deploy anywhere
- overwrite main
- create a new repository
- copy competitor source code or assets
- invent hotel information
- add fake testimonials or fake awards
- hard-code volatile booking rates
- use third-party logos as the Hotel Kishan logo

DO:
- work only on branch hotel-kishan-v2
- keep the page self-contained
- use only Hotel Kishan public listing photos for imagery
- preserve valid outbound booking/maps/phone actions
- implement the room selector, mobile drawer, gallery lightbox, and sticky mobile CTA bar
- update tests/hotel-kishan-tests.json with behavior-focused checks
- keep docs/hotel-kishan-design.md committed
- run syntax/structural checks before push
- finish with a clean GitHub branch containing the design document, implementation, and tests

## Definition of Done
- GitHub branch contains:
  - index.html
  - docs/hotel-kishan-design.md
  - tests/hotel-kishan-tests.json
- Main branch is untouched.
- The website has the new editorial hospitality design.
- Room selector works.
- Navigation and mobile drawer work.
- Gallery lightbox works.
- Phone, Maps, Goibibo, and MakeMyTrip CTAs are present.
- HTML/JS structure is valid.
- No AppDeploy deployment is created or used.


## Visual refinement — September 2026
- Keep the hero focused on one clean “HOTEL KISHAN” headline and a concise line of factual context; remove the floating property-details panel and stacked headline treatment.
- Use a compact circular HK roundel in the header, based on the circular HK mark visible in the hotel's public facade photograph; do not substitute another hotel's logo.
- Keep section headlines naturally flowing rather than forcing stacked line breaks. Use restrained overlays, calm reveal transitions, and reduced-motion support.
- Preserve the existing working room selector, mobile drawer and action rail, gallery lightbox, amenities, booking links, phone actions, and directions.
