import * as Svg from "../../svg/Svg";
import { LinksProps } from "./types";




export const linksTop:LinksProps[] = [
  {
    name: "Home",
    path: "/",
    icon: <Svg.HomeIcon />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <Svg.ProjectsIcon />,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: <Svg.TasksIcon />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <Svg.UsersIcon />,
  },
];

export const linksBottom:LinksProps[] = [
  {
    name: "Support",
    path: "/support",
    icon: <Svg.SupportIcon />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Svg.SettingIcon />,
  }
];
