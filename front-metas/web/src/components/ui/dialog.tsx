import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

interface DialogTriggerProps extends DialogPrimitive.DialogTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

interface DialogCloseProps extends DialogPrimitive.DialogTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Dialog(props: DialogPrimitive.DialogProps) {
  return <DialogPrimitive.Dialog {...props} />;
}

export function DialogTrigger({
  children,
  asChild,
  ...props
}: DialogTriggerProps) {
  return (
    <DialogPrimitive.DialogTrigger asChild={asChild} {...props}>
      {children}
    </DialogPrimitive.DialogTrigger>
  );
}

export function DialogClose({ children, asChild, ...props }: DialogCloseProps) {
  return (
    <DialogPrimitive.DialogClose asChild={asChild} {...props}>
      {children}
    </DialogPrimitive.DialogClose>
  );
}

export function DialogPortal(props: DialogPrimitive.DialogPortalProps) {
  return <DialogPrimitive.DialogPortal {...props} />;
}

export function DialogOverlay(props: DialogPrimitive.DialogOverlayProps) {
  return (
    <DialogPrimitive.DialogOverlay
      {...props}
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
    />
  );
}

export function DialogContent(props: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.DialogContent
        {...props}
        className="fixed z-50 right-0 top-0 bottom-0 w-[400px] h-screen border-l border-zinc-900 bg-zinc-950 p-8"
      />
    </DialogPortal>
  );
}

export function DialogTitle(props: DialogPrimitive.DialogTitleProps) {
  return (
    <DialogPrimitive.DialogTitle {...props} className="text-lg font-semibold" />
  );
}

export function DialogDescription(
  props: DialogPrimitive.DialogDescriptionProps
) {
  return (
    <DialogPrimitive.DialogDescription
      {...props}
      className="text-zinc-400 text-sm leading-relaxed"
    />
  );
}
