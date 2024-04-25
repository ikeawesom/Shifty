export const DEFAULT_ICON_SIZE = 30;

export type UtilityType = {
  className?: string;
  children?: React.ReactNode;
  parentClassName?: string;
  dark?: boolean;
};
export interface GraphicsType extends UtilityType {
  size?: number;
  type: "sleeping" | "question";
}

export const GRAPHICS_TYPE = {
  sleeping: "/images/img_sleeping.svg",
  question: "/images/img_question.svg",
};

export type UserType = {
  email: string;
  first_name: string;
  last_name: string;
};

export type MemberType = {
  member_id?: string;
  first_name: string;
  last_name: string;
  points: number;
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
  {
    title: "Shop",
    link: "/dashboard/shop",
    icon: "icon_fire.svg",
  },
  { title: "Settings", link: "/dashboard/settings", icon: "icon_settings.svg" },
] as NavLinkType[];
