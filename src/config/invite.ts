// ─────────────────────────────────────────────────────────────
// Engagement Invitation Configuration
// ─────────────────────────────────────────────────────────────

export const invite = {
  bride: "Bhavna Yadav",
  groom: "Ankit Yadav",
  brideFullName: "Bhavna Yadav",
  groomFullName: "Ankit Yadav",
  brideParents: "Mr. Ram Sanjivan Yadav & Mrs. Rani Yadav",
  groomParents: "Late Mr. Ashok Kumar Yadav & Mrs. Suman Yadav",
  monogram: "BA",
  /** Shown big in the hero */
  dateLabel: "14.10.26",
  /** Local start / end of the main function (ISO, no timezone) */
  start: "2026-10-14T19:00:00",
  end: "2026-10-14T23:30:00",
  /** IANA timezone of the venue */
  timeZoneOffset: "+05:30",
  dayLine: "Wednesday, 14th October 2026",
  timeLine: "7:00 PM onwards",
  eventTitle: "Engagement of Bhavna Yadav & Ankit Yadav",
  eventHeading: "Join us for the engagement celebration of",
  invitationNote:
    "Together with their families, we warmly invite you to share in the joy of the engagement of Bhavna Yadav & Ankit Yadav — an evening of divine blessings, love, laughter, and cherished moments.",
  venue: {
    name: "Skylark Farm",
    address: "Ludhiana, Punjab",
    city: "Ludhiana, Punjab",
    /** Used for the Google Maps deep link */
    query: "30.881195,75.830978",
    lat: 30.881195,
    lng: 75.830978,
  },
  closingLead: "On behalf of Yadav Family",
  closing: "Warmly Awaiting Your Presence",
  bgm: "/bgm.mp3",
  ogImage: "/og-image.jpg",
} as const;

export const mapsUrl = `https://maps.google.com/?q=${invite.venue.lat},${invite.venue.lng}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${invite.venue.lat},${invite.venue.lng}`;
