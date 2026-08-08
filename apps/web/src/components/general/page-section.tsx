import type { ReactNode } from "react";
import { cn } from "@aishah-dot/ui/lib/utils";

type PageSectionProps = {
	children: ReactNode;
	className?: string;
};

export function PageSection({ children, className }: PageSectionProps) {
	return <section className={cn("w-full px-4 py-6", className)}>{children}</section>;
}
