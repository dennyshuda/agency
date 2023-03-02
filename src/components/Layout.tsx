import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

export default function Layout({ children }: Children) {
  return <div className="container mx-auto px-5 md:px-10">{children}</div>;
}
