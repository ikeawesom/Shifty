export const DEFAULT_ICON_SIZE = 30;

export type UtilityType = {
  className?: string;
  children?: React.ReactNode;
  parentClassName?: string;
  dark?: boolean;
};

export type UserType = {
  email: string;
  first_name: string;
  last_name: string;
};

export type FormInputContainerType = {
  text: string;
  id: string;
  children?: React.ReactNode;
};

export type ButtonType = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  activated?: boolean;
};

export type NavLinkType = { title: string; link: string; icon?: string };

export const NAVBAR_MAIN_LINKS = [
  { title: "Docs", link: "/docs" },
  { title: "Pricing", link: "/pricing" },
  { title: "FAQ", link: "/faq" },
] as NavLinkType[];

export const NAVBAR_DASHBOARD_LINKS = [
  { title: "Home", link: "/dashboard/home", icon: "icon_home.svg" },
  { title: "Events", link: "/dashboard/events", icon: "icon_events.svg" },
  { title: "Members", link: "/dashboard/members", icon: "icon_people.svg" },
  {
    title: "Permissions",
    link: "/dashboard/permissions",
    icon: "icon_permissions.svg",
  },
  { title: "Settings", link: "/dashboard/settings", icon: "icon_settings.svg" },
] as NavLinkType[];
