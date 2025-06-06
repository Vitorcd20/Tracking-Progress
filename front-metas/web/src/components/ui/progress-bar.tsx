import * as ProgressPrimitive from "@radix-ui/react-progress";
import type { ReactNode } from "react";

interface ProgressProps extends ProgressPrimitive.ProgressProps {
  children: ReactNode;
  asChild?: boolean;
}

interface ProgressIndicatorProps
  extends ProgressPrimitive.ProgressIndicatorProps {
  children?: ReactNode;
  asChild?: boolean;
  style?: React.CSSProperties;
}

export function Progress({ children, asChild, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Progress
      {...props}
      asChild={asChild}
      className="bg-zinc-900 rounded-full h-2"
    >
      {children}
    </ProgressPrimitive.Progress>
  );
}

export function ProgressIndicator({
  children,
  asChild,
  style,
  ...props
}: ProgressIndicatorProps) {
  return (
    <ProgressPrimitive.Indicator
      {...props}
      asChild={asChild}
      style={style}
      className="bg-gradient-to-r from-pink-500 to-violet-500 w-1/2 h-2 rounded-full"
    >
      {children}
    </ProgressPrimitive.Indicator>
  );
}
