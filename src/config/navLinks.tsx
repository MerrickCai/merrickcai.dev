import { HomeIcon, InformationCircleIcon, EnvelopeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

export const navIcons = new Map([
  ["HomeIcon", HomeIcon],
  ["InformationCircleIcon", InformationCircleIcon],
  ["EnvelopeIcon", EnvelopeIcon],
  ["CodeBracketIcon", CodeBracketIcon],
]);

export const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: "HomeIcon",
  },
  {
    href: "/about",
    label: "About",
    icon: "InformationCircleIcon",
  },
  {
    href: "/projects",
    label: "Projects",
    icon: "CodeBracketIcon",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "EnvelopeIcon",
  },
];
