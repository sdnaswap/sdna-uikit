import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 568" {...props}>
      <image width="512" height="568" href="/images/logo.png"/>
    </Svg>
  );
};

export default Icon;
