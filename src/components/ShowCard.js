import Image from "next/image";
import ButtonLink from "./ButtonLink";

const ShowCard = ({ actualShow }) => {
  const { show } = actualShow;
  const { name, id, image } = show;
  return (
      <div className="show_container col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 flex flex-col gap-3 justify-start items-center pb-2">
        <div className="border border-slate-800 border-solid mb-2 w-full h-auto">
          <Image
            className="hover:bg-cover"
            src={image?.original}
            width={680}
            height={1000}
            alt={name}
          />
        </div>
        <h3>{name}</h3>
        <ButtonLink id={id} />
      </div>
  );
};

export default ShowCard;
