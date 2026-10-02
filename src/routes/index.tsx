import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import paper from "@/assets/paper.jpg";
import { ActionBar } from "@/components/invite/ActionBar";
import { AddToCalendar } from "@/components/invite/AddToCalendar";
import { AudioPlayer } from "@/components/invite/AudioPlayer";
import { Countdown } from "@/components/invite/Countdown";
import { Envelope } from "@/components/invite/Envelope";
import { Hero } from "@/components/invite/Hero";
import { InviteFooter } from "@/components/invite/InviteFooter";
import { Note } from "@/components/invite/Note";
import { ScrollThread } from "@/components/invite/ScrollThread";
import { Venue } from "@/components/invite/Venue";
import { invite } from "@/config/invite";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const title = `${invite.bride} & ${invite.groom} — ${invite.dayLine.split(",")[1]?.trim() ?? invite.dateLabel}`;
const description = `${invite.bride} & ${invite.groom} invite you to their wedding on ${invite.dayLine} at ${invite.venue.name}, ${invite.venue.city}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${title} · Save the Date` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} · Save the Date` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Invitation,
});

function Invitation() {
  useSmoothScroll();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Envelope onOpen={() => setOpened(true)} />
      <AudioPlayer autoPlayTrigger={opened} />
      <ScrollThread />
      <main
        className="grain relative min-h-screen bg-paper text-ink"
        style={{ backgroundImage: `url(${paper})`, backgroundSize: "480px" }}
      >
        <Hero ready={opened} />
        <Note />
        <Countdown />
        <Venue />
        <AddToCalendar />
        <InviteFooter />
      </main>
      <ActionBar />
    </>
  );
}
