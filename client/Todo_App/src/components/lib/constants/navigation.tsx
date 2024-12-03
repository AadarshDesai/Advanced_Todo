import { Sun, Star, SquareMenu, House, HandHelping} from "lucide-react";

export interface SidebarLinkItem {
    key: string;
    label: string;
    path: string;
    icon: React.ReactNode;
}

export const DASHBOARD_SIDEBAR_LINKS:SidebarLinkItem[] = [
    {
        key: "myday",
        label: "My Day",
        path: "/",
        icon: <Sun className="text-neutral-600 h-5 w-5"/>
    },
    {
        key: "important",
        label: "Important",
        path: "/important",
        icon: <Star className="text-red-400 h-5 w-5"/>
    },
    {
        key: "planned",
        label: "Planned",
        path: "/planned",
        icon: <SquareMenu className="text-gray-500 h-5 w-5" />
    },
    {
        key: "tasks",
        label: "Tasks",
        path: "/tasks",
        icon: <House className="text-blue-400 h-5 w-5"/>
    }
]

export const NewList_Navigation: SidebarLinkItem[] = [
    {
        key: "getstarted",
        label: "Getting Started",
        path: "/getstarted",
        icon: <HandHelping className="text-yellow-500 "/>
    }
]