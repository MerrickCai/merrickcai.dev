import { navLinks } from "@/config/navLinks";
import NavItem from "@/ui/NavItem";
import ThemeSwitcher from "@/ui/ThemeSwitcher";

export default async function Header() {
  return (
    <header className="bg-zinc-50/70 dark:bg-black/70 shadow-none shadow-gray-100 dark:shadow-none backdrop-blur-sm sticky top-0 z-10 w-full h-14 md:h-18 flex flex-row md:justify-around justify-around gap-0.5 md:gap-10 items-center">
      <nav className="w-auto h-full flex flex-row justify-center gap-0.5 md:gap-3 md:p-2 items-center">
        {navLinks.map((link) => (
          <NavItem key={link.href} link={link} />
        ))}
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
