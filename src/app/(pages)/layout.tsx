import { Header } from "../container/header/Header";
import "./style.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="layout"> {children}</div>
    </div>
  );
}
