import React from "react";
import icons from "../icons.js";
import { TBaseIconProps } from "../types/types";

export const BaseIcon: React.FC<TBaseIconProps> = ({ name }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    ></svg>
  );
};
