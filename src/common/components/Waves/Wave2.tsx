/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "styled-components";

const SVG = styled.svg`
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 0;
`;

const Wave2: React.FC = (): JSX.Element => {
  return (
    <SVG
      width="540"
      height="270"
      viewBox="0 0 540 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M204.894 52.6262C273.191 79.7979 341.489 161.313 409.787 174.899C453.191 183.533 496.596 164.732 540 142.905V270H409.787H204.894H34.1489H0V79.7979L34.1489 66.212C68.2978 52.6262 136.596 25.4544 204.894 52.6262Z"
        fill="#959FFF"
      />
      <path
        d="M335.106 13.7077C266.809 45.7443 198.511 141.854 130.213 157.872C86.8085 168.052 43.4043 145.885 0 120.15V270H130.213H335.106H505.851H540V45.7443L505.851 29.726C471.702 13.7077 403.404 -18.3288 335.106 13.7077Z"
        fill="#2F3676"
      />
    </SVG>
  );
};

export default Wave2;
