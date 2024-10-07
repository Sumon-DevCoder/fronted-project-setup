import { ReactNode } from "react";

// sidebar type
export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};
