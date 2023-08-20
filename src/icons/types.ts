import { IconList } from "./index";

export type IconString = keyof typeof IconList;

export interface IconProps {
    color?: string;
    size?: number;
}

export interface IconDTO {
    name: IconString;
    color?: string;
    size?: number;
}

export interface IIcons {
    [key: string]: any;
}