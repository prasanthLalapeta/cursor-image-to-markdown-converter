import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { UseCase } from "@/config/use-cases";

export function UseCaseCard({ title, description, tags, href, disabled }: UseCase) {
  const CardWrapper = disabled ? 'div' : Link;
  const props = disabled ? {} : { href };

  return (
    <CardWrapper {...props}>
      <Card className={`group transition-all duration-200 ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg cursor-pointer'}`}>
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{title}</h2>
            {disabled ? (
              <Lock className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            )}
          </div>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </CardWrapper>
  );
} 