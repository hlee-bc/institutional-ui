import clsx from "clsx"

export interface WidgetLayoutProps {
  children?: React.ReactNode
  className?: string
  fallback?: boolean
}

export function WidgetLayout({
  children,
  className,
  fallback,
}: WidgetLayoutProps) {
  return (
    <div
      className={clsx(
        "bg-darkmode-800 rounded-lg w-full h-full p-2",
        className,
        fallback ? "animate-pulse" : ""
      )}
    >
      {children}
    </div>
  )
}
