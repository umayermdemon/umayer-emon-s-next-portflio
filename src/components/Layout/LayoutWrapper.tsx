"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { routeList } from "@/routes/routeList";

const isValidRoute = (pathname: string) => {
  return routeList.some((route) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route)
  );
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const showHeaderFooter = isValidRoute(pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <div className="min-h-[calc(100vh-169px)]">{children}</div>
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default LayoutWrapper;
