import { BackButton } from "@/app/components/back-button/BackButton";
import "./styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BackButton />;<div className="layout"> {children}</div>
    </div>
  );
}
