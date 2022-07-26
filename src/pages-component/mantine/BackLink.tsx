import Link from "next/link";
import { ArrowBackUp } from "tabler-icons-react";
import { FC } from "react";

type BackLinkProps = {
  href: string;
};

export const BackLink: FC<BackLinkProps> = ({ href }) => {
  return (
    <Link href={href}>
      <ArrowBackUp className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
    </Link>
  );
};
