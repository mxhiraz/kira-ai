import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Zap, Calendar, Search, Send } from "lucide-react";
import IntegrationsSection from "@/components/integrations-6";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <IntegrationsSection />
      <p className="text-muted-foreground pb-4 text-xs text-center">
        Made with ❤️ by Kira team
      </p>
    </>
  );
}

function HeroSection() {
  return (
    <section className="py-20 pb-16 ">
      <div
        className=" absolute top-[-100] right-[-50]  blur-[50px] opacity-20 w-full md:h-[200px] bg-gradient-to-r from-pink-100 to-pink-300 
            animate-[blob_8s_infinite_ease-in-out] 
            rounded-[50%_40%_60%_50%_/_50%_60%_40%_50%]"
      ></div>
      <div className=" absolute top-[-100] left-[-50]  blur-[50px] opacity-20 w-full md:h-[200px] bg-gradient-to-r from-[#F39845] to-[#F16316]/50 animate-[blob_8s_infinite_ease-in-out] rounded-[50%_40%_60%_50%_/_50%_60%_40%_50%]"></div>
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative text-center">
          <MistKitLogo className="mx-auto" />
          <h1 className="mx-auto mt-16 max-w-xl text-balance text-5xl font-medium">
            Kira
          </h1>
          <p className="text-muted-foreground mx-auto mb-2 mt-4 text-balance text-xl font-medium">
            Siri on Steroids
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 mt-4 text-balance text-lg">
            Your AI assistant that floats above everything. No app switching, no
            new tabs - just ask Kira to get things done. Press ⌘ + K anywhere.
          </p>

          <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
            <Button asChild variant="neutral">
              <Link href="https://tally.so/r/mZMv7z">
                <span className="text-nowrap">Join Waitlist</span>
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/learn-more">
                <span className="text-nowrap">Learn More</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentSection() {
  const features = [
    {
      title: "Universal Access",
      description:
        '"Check my calendar for tomorrow" - no need to open calendar app.',
      icon: Calendar,
    },
    {
      title: "Quick Actions",
      description:
        '"Find the latest sales report and share with team" - saves 5 minutes.',
      icon: Zap,
    },
    {
      title: "Instant Communication",
      description:
        '"Send meeting summary to John and Sarah" - done while still in meeting.',
      icon: Send,
    },
    {
      title: "Smart Automation",
      description:
        '"Record meeting → Make notes → Save to Notion" - one command.',
      icon: Search,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            One Hotkey, Endless Possibilities
          </h2>
          <p className="text-muted-foreground">
            ⌘ + K activates Kira anywhere. Reduce context switching with voice
            or text commands that work across all your apps instantly.
          </p>
        </div>
        <img
          className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
          src="/kira.webp"
          alt="AI assistant visualization"
          loading="lazy"
        />

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-3">
              <div className="flex items-center gap-2">
                <feature.icon className="size-4" />
                <h3 className="text-sm font-medium">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MistKitLogo = ({ className }: { className?: string }) => (
  <Image
    src={"/logo.png"}
    alt="Kira AI Logo"
    width={150}
    height={150}
    className={cn("h-16 w-16", className)}
  />
);
