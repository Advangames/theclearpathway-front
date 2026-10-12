import Image from "next/image";
import logoExtended from "@/assets/images/header/logo_extended.png";
import { Link } from "@/i18n/navigation";

export function BrandMark() {
  return (
    <Link className="flex min-w-0 items-center" href="/">
      <Image
        alt="The CLEAR Pathway"
        className="h-14 w-auto shrink-0 sm:h-16"
        priority
        src={logoExtended}
      />
    </Link>
  );
}
