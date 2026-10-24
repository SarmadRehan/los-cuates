import Image from "next/image";

import logo from "@/assets/images/logo.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/** Los Cuates' own logo from their Instagram profile: white lettering on a black plate. */
export function Logo({ className = "", priority = false }: LogoProps) {
  return <Image src={logo} alt="Taqueria Los Cuates" className={`h-auto ${className}`} sizes="24rem" priority={priority} />;
}
