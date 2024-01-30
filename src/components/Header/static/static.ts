export interface HeaderLink {
  to: string;
  label: string;
  isActive: boolean;
}

export const headerLinks: HeaderLink[] = [
  { to: '/', label: '_home', isActive: false },
  { to: '/projects', label: '_projects', isActive: false },
  { to: '/certificates', label: '_certificates', isActive: false },
  { to: '/aboutMe', label: '_about-me', isActive: false },
];
