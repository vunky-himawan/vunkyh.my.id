/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function FreelancesSection() {
  return (
    <section id="freelances" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Freelancing
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              I like building things
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Throughout my freelance journey, I've worked on{" "}
              {DATA.freelances.length}+ projects for different clients, turning
              ideas into reliable and scalable applications. Each project has
              challenged me to adapt quickly, communicate effectively, and
              deliver solutions that create real value.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.freelances.map((freelance) => (
            <TimelineItem
              key={freelance.title + freelance.dates}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                <Avatar className="border size-12 m-auto">
                  <AvatarImage
                    src={freelance.image}
                    alt={freelance.title}
                    className="object-contain"
                  />
                  <AvatarFallback>L</AvatarFallback>
                </Avatar>
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {freelance.dates && (
                  <time className="text-xs text-muted-foreground">
                    {freelance.dates}
                  </time>
                )}
                {freelance.title && (
                  <h3 className="font-semibold leading-none">
                    {freelance.title}
                  </h3>
                )}
                {freelance.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {freelance.description}
                  </p>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
