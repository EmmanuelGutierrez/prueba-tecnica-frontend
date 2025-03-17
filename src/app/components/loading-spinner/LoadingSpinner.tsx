import "./styles.css";
interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large" | "xl";
  color?: string;
  className?: string;
}

export default function LoadingSpinner({
  size = "medium",
  color = "currentColor",
}: LoadingSpinnerProps) {
  const sizeMap = {
    small: "spinner-small",
    medium: "spinner-medium",
    large: "spinner-large",
    xl: "spinner-xl",
  };

  return (
    <div className="spinner-container">
      <div
        className={`spinner ${sizeMap[size]}`}
        style={{ borderTopColor: color }}
        aria-label="Loading"
      />
    </div>
  );
}
