import { invite } from "@/config/invite";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function Note() {
  return (
    <section className="px-7 py-20 text-center sm:py-28">
      <Reveal>
        <Divider className="mb-10" />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="caps text-[0.6rem] text-olive">With the blessings of our families</p>
      </Reveal>

      {/* Couple and Parents Information */}
      <Reveal delay={0.15}>
        <div className="mx-auto mt-8 max-w-lg rounded-sm border border-border/70 bg-paper-deep/40 px-6 py-8 shadow-[0_12px_32px_-24px_rgba(60,45,25,0.35)] sm:px-10 sm:py-10">
          <div className="space-y-6">
            <div>
              <h3 className="script text-3xl text-ink sm:text-4xl">{invite.brideFullName}</h3>
              <p className="caps mt-1.5 text-[0.58rem] leading-relaxed text-sepia sm:text-[0.62rem]">
                Daughter of {invite.brideParents}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold/50" />
              <span className="script text-2xl text-gold">&</span>
              <span className="h-px w-8 bg-gold/50" />
            </div>

            <div>
              <h3 className="script text-3xl text-ink sm:text-4xl">{invite.groomFullName}</h3>
              <p className="caps mt-1.5 text-[0.58rem] leading-relaxed text-sepia sm:text-[0.62rem]">
                Son of {invite.groomParents}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mx-auto mt-9 max-w-md text-lg leading-[1.9] text-ink/85 sm:text-xl">
          {invite.invitationNote}
        </p>
      </Reveal>
      <Reveal delay={0.35}>
        <p className="script mt-8 text-3xl text-sepia">{invite.dayLine}</p>
        <p className="caps mt-4 text-[0.6rem] text-sepia">{invite.timeLine}</p>
      </Reveal>
    </section>
  );
}
