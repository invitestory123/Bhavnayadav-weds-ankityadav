import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { invite } from "@/config/invite";

export function AudioPlayer({ autoPlayTrigger }: { autoPlayTrigger?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Attempt playback on envelope opening / trigger
  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Auto-play was prevented by browser policy until further gesture
        });
    }
  }, [autoPlayTrigger, hasInteracted]);

  const toggle = () => {
    setHasInteracted(true);
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={invite.bgm} loop preload="auto" />
      <motion.button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={isPlaying ? "Mute music" : "Play music"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed top-5 right-5 z-40 flex items-center gap-2 rounded-full border border-border/80 bg-paper/85 px-3 py-2 text-ink shadow-[0_12px_28px_-12px_rgba(60,45,25,0.45)] backdrop-blur-md transition-colors"
      >
        {/* Vinyl / Disc icon with spinning animation when active */}
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying
              ? { duration: 4, repeat: Infinity, ease: "linear" }
              : { duration: 0.3 }
          }
          className="relative grid size-7 place-items-center rounded-full border border-gold/60 bg-ink text-gold shadow-sm"
        >
          <span className="size-2 rounded-full bg-paper border border-gold/40" />
        </motion.div>

        {/* Dynamic sound equalizer bars */}
        <div className="flex h-3.5 items-end gap-[2px] px-1">
          <motion.span
            className="w-[2px] rounded-full bg-gold"
            animate={
              isPlaying
                ? { height: ["25%", "90%", "30%", "100%", "40%"] }
                : { height: "25%" }
            }
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.span
            className="w-[2px] rounded-full bg-gold"
            animate={
              isPlaying
                ? { height: ["50%", "20%", "100%", "35%", "75%"] }
                : { height: "40%" }
            }
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1,
            }}
          />
          <motion.span
            className="w-[2px] rounded-full bg-gold"
            animate={
              isPlaying
                ? { height: ["80%", "40%", "90%", "20%", "60%"] }
                : { height: "25%" }
            }
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </div>

        <span className="caps pr-1 text-[0.52rem] text-sepia select-none">
          {isPlaying ? "Music On" : "Music"}
        </span>
      </motion.button>
    </>
  );
}
