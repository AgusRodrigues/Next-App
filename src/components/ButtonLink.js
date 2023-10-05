import React from "react";
import Link from "next/link";

const ButtonLink = ({ id }) => {
  return (
    <Link
      className="relative px-5 py-2.5 bg-gray-900 rounded-md"
      
      href={`/show/${id}`}
    >
      View Show
    </Link>
  );
};

export default ButtonLink;
