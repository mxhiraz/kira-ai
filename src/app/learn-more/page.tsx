import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Zap, Send, Command } from "lucide-react";

export default function LearnMore() {
  return (
    <>
      <HeroSection />
      <BlogContent />
    </>
  );
}

function HeroSection() {
  return (
    <section className="py-20 pb-6">
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 lg:px-0">
        <div className="relative text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Kira AI Logo"
              width={80}
              height={80}
              className="mx-auto h-12 w-12 hover:opacity-80 transition-opacity"
            />
          </Link>
          <h1 className="mx-auto mt-12 max-w-3xl text-balance text-5xl font-medium">
            The Future of AI Assistance
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 mt-6 text-balance text-xl">
            One AI that works everywhere - no more switching between apps
          </p>
          <Button asChild variant="neutral">
            <Link href="/">
              <span className="text-nowrap">Back to Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function BlogContent() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">
              The Problem We&apos;re Solving
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Today&apos;s AI tools are scattered across different websites and
              apps. Even for simple queries, you have to open different tools
              and switch between them constantly. This wastes your time and
              kills productivity as you lose focus on your actual work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every time you need help, you have to remember which tool to use,
              open the right website, navigate through their interface, wait for
              the page to load, and then switch back to your work. It&apos;s
              like having a brilliant assistant but they&apos;re locked in
              different rooms - you have to keep running between them instead of
              getting help instantly where you are.
            </p>

            <div className="text-center mb-8">
              <Image
                src="/more.webp"
                alt="Kira AI in action"
                width={850}
                height={400}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">How Kira Works</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Kira works like having a brilliant personal assistant who never
              sleeps and can access all your digital tools simultaneously. The
              magic happens in three simple steps that feel completely natural.
            </p>

            <div className="bg-muted/30 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="mx-auto size-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                    <Command className="size-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">1. Activate</h3>
                  <p className="text-muted-foreground">
                    Press ⌘ + K anywhere on your system to summon Kira
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="mx-auto size-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                    <Send className="size-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">2. Command</h3>
                  <p className="text-muted-foreground">
                    Speak or type your request in conversational commands
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="mx-auto size-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                    <Zap className="size-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">3. Execute</h3>
                  <p className="text-muted-foreground">
                    Watch as Kira intelligently completes your tasks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
