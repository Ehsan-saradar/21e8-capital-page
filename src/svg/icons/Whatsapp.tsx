import { useTheme } from "next-themes";
import * as React from "react";
import { SVGProps } from "react";

const Whatsapp = (props: SVGProps<SVGSVGElement>) => {
  const { resolvedTheme } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={42}
      fill="none"
      {...props}
    >
      <path
        fill={resolvedTheme === "light" ? "#3F3C3C" : "#fff"}
        d="M21 42c11.598 0 21-9.402 21-21S32.598 0 21 0 0 9.402 0 21s9.402 21 21 21Z"
      />
      <path
        fill={resolvedTheme === "light" ? "#fff" : "#3F3C3C"}
        fillRule="evenodd"
        d="M21.692 32.684h-.005c-2.09-.001-4.143-.526-5.967-1.52L9.1 32.9l1.772-6.47a12.465 12.465 0 0 1-1.667-6.244C9.208 13.302 14.809 7.7 21.692 7.7a12.406 12.406 0 0 1 8.834 3.662 12.412 12.412 0 0 1 3.653 8.834c-.002 6.884-5.602 12.485-12.487 12.488Zm-5.666-3.781.38.225a10.363 10.363 0 0 0 5.282 1.447h.004c5.72 0 10.377-4.656 10.38-10.38a10.317 10.317 0 0 0-3.038-7.342 10.308 10.308 0 0 0-7.338-3.044c-5.725 0-10.38 4.656-10.383 10.378 0 1.961.548 3.871 1.587 5.524l.247.392-1.049 3.83 3.928-1.03Zm11.53-6.018c.218.105.364.176.427.28.078.13.078.756-.182 1.485-.26.728-1.506 1.394-2.106 1.483-.537.08-1.218.114-1.965-.124a17.92 17.92 0 0 1-1.779-.657c-2.925-1.263-4.902-4.098-5.275-4.634l-.055-.077-.002-.003c-.165-.22-1.272-1.697-1.272-3.225 0-1.437.706-2.19 1.031-2.537l.061-.066c.286-.312.624-.39.832-.39.208 0 .416.002.598.01.023.002.046.002.07.002.182-.001.409-.003.632.534l.345.837c.268.653.565 1.376.617 1.48.078.156.13.338.026.547l-.044.089c-.078.16-.135.276-.268.431l-.16.192c-.107.131-.214.262-.308.355-.156.156-.319.324-.137.637.182.312.809 1.334 1.736 2.161.997.89 1.864 1.265 2.303 1.456.086.037.155.067.206.093.312.156.494.13.676-.078.182-.209.78-.911.988-1.224.208-.312.416-.26.702-.156.286.104 1.82.86 2.132 1.015l.171.084Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Whatsapp;
