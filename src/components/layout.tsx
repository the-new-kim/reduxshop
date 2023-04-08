import { ReactNode } from "react";
import Header from "./header";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
