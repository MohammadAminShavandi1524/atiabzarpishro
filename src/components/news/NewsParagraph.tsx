import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type NewsParagraphProps = ComponentPropsWithoutRef<"p">;

export function NewsParagraph({
  className,
  children,
  ...props
}: NewsParagraphProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground mb-6 text-justify text-base leading-8",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
