"use client";

import { usePathname } from "next/navigation";

const HideNavbar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideNavbarPages = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarPages.includes(pathname);

  return <div className={shouldHideNavbar ? "hidden" : ""}>{children}</div>;
};

export default HideNavbar;
