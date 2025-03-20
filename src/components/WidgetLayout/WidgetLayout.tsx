interface Props {
  children?: React.ReactNode
  className?: string
  fallback?: boolean
}

export function WidgetLayout({ children, className, fallback }: Props) {
  return (
    <div
      className={`bg-darkmode-800 rounded-lg w-full h-full ${className} p-2 ${
        fallback ? "animate-pulse" : ""
      }`}
    >
      {children}
    </div>
  )
}
