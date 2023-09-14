import React from "react";
import Link from "next/link";

const ButtonLink = ({ id }) => {
  return (
    <Link
      className="text-white bg-blue-900  max-w-[120px] border border-slate-300 border-solid py-2 px-3 hover:bg-blue-600 hover:text-black"
      href={`/show/${id}`}
    >
      View Show
    </Link>
  );
};

export default ButtonLink;
