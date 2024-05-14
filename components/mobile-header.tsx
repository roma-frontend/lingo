import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[3.125rem] flex items-center bg-[var(--main-bg-color)] border-b fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};
