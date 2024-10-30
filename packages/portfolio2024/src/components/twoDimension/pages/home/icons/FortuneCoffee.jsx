import React from "react";
import styled, { keyframes } from "styled-components";

const FortuneCoffee = () => {
  return (
    <SVG
      className="contact-img"
      viewBox="0 0 431 285"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="steamColor" x1="50%" y1="0%" x2="60%" y2="50%">
          <stop stopColor="#FF80AE" stopOpacity="0.1" />
          <stop stopColor="#FF80AE" stopOpacity="0.8" offset="1" />
        </linearGradient>
      </defs>
      <StrokeGroup>
        <path
          d="M169.073 253.279C171.445 253.665 174.53 255 175.776 255.619C177.587 263.074 160.455 276.088 141.365 271.567C122.308 267.053 116.618 244.785 126.932 234.806C137.247 224.827 152.675 222.628 155.789 222.546C158.904 222.465 163.254 224.162 163.81 224.771C164.366 225.38 164.915 226.859 164.993 228.803C165.072 230.747 161.233 236.363 160.614 237.393C159.995 238.423 156.605 242.346 155.909 242.916C155.353 243.372 154.317 243.324 153.868 243.243C153.774 243.534 153.776 244.523 154.532 246.154C155.476 248.192 166.108 252.796 169.073 253.279Z"
          strokeWidth="3"
        />
        <path
          d="M57.6085 196.834C60.4792 191.392 63.1827 187.565 64.4566 186.067C68.1036 181.776 75.9258 177.927 77.5158 177.898C79.1057 177.869 81.9964 178.881 85.0192 181.075C88.0419 183.27 91.8522 195.085 92.6531 197.137C93.4541 199.189 95.2577 208.396 95.274 210.007C95.2871 211.295 93.9604 212.634 93.2955 213.142C93.6203 213.613 95.1124 214.781 98.4821 215.693C102.694 216.832 122.498 207.964 126.814 204.543C130.266 201.806 136.011 199.23 138.452 198.285C151.869 204.668 150.728 243.136 120.81 263.493C90.9451 283.814 50.5258 265.128 47.9849 239.431C47.584 235.376 47.6289 231.378 48.0034 227.505M57.6085 196.834C53.5573 204.512 49.173 215.405 48.0034 227.505M57.6085 196.834C49.7857 189.973 34.1532 175.523 34.2056 172.605C28.971 179.143 17.8197 192.402 15.0907 193.132C16.1181 192.568 35.2202 210.463 48.0034 227.505"
          strokeWidth="3"
        />
        <path
          d="M43.3395 197.386C41.9522 196.475 40.4746 196.914 40.2646 197.58C39.7675 199.159 40.9244 201.245 42.8367 201.724M43.4512 198.956C44.5592 199.345 45.8477 200.71 45.5762 201.857C45.1087 203.832 42.634 203.375 41.5626 202.931M39.1605 195.967C39.4264 195.104 40.3991 193.477 42.1623 193.87C43.9256 194.262 45.138 196.543 45.5238 197.634M46.5741 198.324C46.704 198.828 47.1464 200.017 47.8768 200.736C48.7899 201.635 49.3023 202.869 48.2651 203.624C47.2278 204.379 46.2631 203.924 45.8754 204.148M39.1175 200.426C38.9469 201.571 39.0062 204.111 40.608 205.116C42.2097 206.12 43.7324 205.274 44.2936 204.725M38.243 195.713C37.2553 196.301 35.4485 197.037 35.7099 198.837C35.9712 200.636 37.2558 202.375 37.9836 202.793M44.4765 193.825C45.653 194.598 46.5664 193.39 48.0493 194.796C49.9028 196.552 49.1401 198.813 49.1193 199.577M45.6834 205.997C45.3722 206.989 44.3285 208.865 42.6428 208.428C40.5357 207.881 39.7584 206.592 39.5304 206.024M38.2666 204.834C38.1406 204.752 35.0639 203.209 34.7956 202.793C34.5273 202.378 34.5625 200.127 34.5123 199.196M34.9515 196.971C34.8776 196.504 34.5727 195.297 34.8444 194.387C35.3977 192.537 37.3523 192.675 39.8908 193.205"
          strokeWidth="1.5"
        />
      </StrokeGroup>
      <Cup
        d="M380.65 230.68C383.283 229.318 385.911 227.842 388.45 226.26C393.588 223.061 398.44 219.383 402.251 215.285C406.054 211.195 408.938 206.559 409.896 201.451C412.433 187.918 407.319 177.026 401.826 170.153C407.077 171.738 412.772 174.163 417.552 177.558C425.026 182.866 429.972 190.275 428.101 200.542C427.193 205.522 424 210.04 419.026 214.11C414.054 218.179 407.479 221.649 400.21 224.538C393.904 227.044 387.164 229.079 380.65 230.68ZM153.544 156.5H384.923C384.298 173.6 377.378 201.483 360.414 225.513C342.678 250.637 314.018 271.5 269.97 271.5C225.888 271.5 196.858 251.21 178.769 226.391C161.417 202.584 154.162 174.63 153.544 156.5Z"
        strokeWidth="5"
      />
      <FillGroup>
        <path d="M34.5332 192.291C35.0312 191.941 34.5809 190.752 34.2936 190.202C36.3486 191.098 36.9361 191.071 37.6105 190.515C38.2543 189.984 37.9584 188.399 35.7485 186.867C33.9806 185.642 30.9763 184.832 29.6692 184.64C29.4783 185.407 32.1155 191.236 32.4951 191.685C32.8747 192.134 33.9107 192.728 34.5332 192.291Z M32.5244 197.693C32.5737 197.177 31.5552 196.811 31.0399 196.692C32.7575 195.858 33.0651 195.463 33.0784 194.719C33.0911 194.009 31.9014 193.323 29.6874 193.905C27.9162 194.371 25.7293 195.867 24.8814 196.606C25.2722 197.154 30.5036 198.674 31.0044 198.677C31.5051 198.68 32.4628 198.338 32.5244 197.693Z" />
        <path d="M65.378 232.384C64.0831 230.141 61.9846 229.483 59.9096 230.682C57.6665 231.977 57.5757 234.085 58.8113 236.549C60.047 239.013 62.5818 240.166 63.9244 239.578C65.2669 238.99 66.9967 235.188 65.378 232.384Z M110.161 243.91C108.783 241.522 104.989 241.102 103.026 242.235C101.982 242.838 99.5274 245.563 100.763 248.027C101.999 250.491 105.835 252.388 107.704 251.309C109.829 250.082 111.941 246.994 110.161 243.91Z M78.5132 247.043C76.1402 246.17 73.7715 241.744 74.893 241.096C76.0144 240.449 76.7845 243.758 78.9439 244.551C81.317 245.423 83.4219 241.842 83.5165 243.406C83.5601 244.127 81.1942 248.029 78.5132 247.043Z" />
        <path d="M368.448 114.73C366.43 113.068 362.027 116.298 360.077 118.12C361.435 108.578 360.65 106.176 357.576 104.02C354.642 101.963 348.421 105.008 344.615 115.92C341.57 124.65 341.658 138.025 342.358 143.66C345.752 143.57 366.85 125.956 368.274 123.868C369.698 121.78 370.969 116.807 368.448 114.73Z" />
      </FillGroup>
      <SteamGroup>
        <Steam1 d="M263.008 146.625C273.394 133.501 283.873 120.718 278.646 101.562C272.041 77.3501 235.822 82.0051 224.842 63.316C212.914 43.012 222.847 14.2429 241.879 3.16969" />
        <Steam2 d="M283.057 146.536C292.221 138.872 309.581 120.47 305.706 108.182C300.861 92.8229 276.483 95.4378 267.832 78.6237C260.912 65.1725 280.648 38.4477 306.884 35.1253" />
        <Steam3 d="M251.818 146.942C257.09 138.655 265.993 119.466 259.424 109.002C251.213 95.9213 232.222 101.976 220.525 88.1657C211.167 77.1173 219.667 50.0803 239.964 43.1067" />
      </SteamGroup>
    </SVG>
  );
};

const SVG = styled.svg`
  position: absolute;
  bottom: 5vh;
  right: 5vh;
  /* width: 20vw;//380 */
  /* width: 50vh; */
`;

const Steam1Ani = keyframes`
  0% {
  	stroke-dashoffset: 0;
  }
  100% {
  	stroke-dashoffset: -320px;
  }
`;

const Steam2Ani = keyframes`
  0% {
  	stroke-dashoffset: 0;
  }
  100% {
  	stroke-dashoffset: -240px;
  }
`;

const Steam3Ani = keyframes`
  0% {
  	stroke-dashoffset: 0;
  }
  100% {
  	stroke-dashoffset: -220px;
  }
`;

const StrokeGroup = styled.g`
  fill: hsl(var(--pink-back-100));
  stroke: hsl(var(--pink-back-060));
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const FillGroup = styled.g`
  fill: hsl(var(--pink-back-060));
`;

const SteamGroup = styled.g`
  stroke: url(#steamColor);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dashoffset: 0;
  filter: drop-shadow(2px 2px 2px hsla(var(--pink-back-030), 0.6));
`;

const Steam1 = styled.path`
  stroke-dasharray: 160px;
  animation: ${Steam1Ani} 3.5s linear infinite;
`;

const Steam2 = styled.path`
  stroke-dasharray: 120px;
  animation: ${Steam2Ani} 2s linear infinite;
`;

const Steam3 = styled.path`
  stroke-dasharray: 110px;
  animation: ${Steam3Ani} 2.5s linear infinite;
`;

const Cup = styled.path`
  stroke: hsl(var(--pink-back-070));
`;

export default FortuneCoffee;
