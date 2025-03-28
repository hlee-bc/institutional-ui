import styles from "@/styles/AvatarIcon.module.scss"

export function AvatarIcon({
  showColoredBorder,
  className,
  size,
}: {
  showColoredBorder: boolean
  className?: string
  size?: number
}) {
  return (
    <div
      className={`${styles["avatar-wrapper"]} ${className ? className : ""} ${showColoredBorder ? styles["colored-border"] : ""}`}
    >
      <div className={`${styles["avatar"]}`}>
        <svg
          viewBox="-12 -12 48 48"
          height={`${size}px`}
          width={`${size}px`}
          fill="#ffa133"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 12a5 5 0 0 0 5-5c0-2.763-2.238-5-5-5S7 4.237 7 7a5 5 0 0 0 5 5Zm0 2.5c-3.338 0-10 1.675-10 5V22h20v-2.5c0-3.325-6.662-5-10-5Z" />
        </svg>
      </div>
    </div>
  )
}
