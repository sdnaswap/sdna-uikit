import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 225 225" {...props}>
      <image width="225" height="225" href="/images/logo-round.png"/>
    </Svg>
  );
};

export default Icon;
