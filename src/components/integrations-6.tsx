import { Gmail, Notion, Slack } from "@/components/logos";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-md px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
          <div className="bg-background dark:bg-muted/50 rounded-xl border px-6 pb-12 pt-3 shadow-xl">
            <Integration
              icon={<Notion />}
              name="Notion"
              description="Make notes, tasks, and edit documents with natural language commands."
            />
            <Integration
              icon={<Slack />}
              name="Slack"
              description="Send messages to team and notifications instantly."
            />
            <Integration
              icon={<Gmail />}
              name="Gmail"
              description="Compose and send emails to tanmay@zyx members and clients."
            />
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
            Connect with Thousands of Apps
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect seamlessly with popular platforms and services to automate
            your workflow and boost productivity.
          </p>
        </div>
      </div>
    </section>
  );
}

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
      <div className="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-lg border">
        {icon}
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm">
          {description}
        </p>
      </div>
      <Button
        variant="outline"
        size="icon"
        aria-label={`Add ${name} integration`}
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
};
