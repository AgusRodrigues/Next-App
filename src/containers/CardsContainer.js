import ShowCard from "@/components/ShowCard";
import Hero from "@/components/Hero"
import { useAppContext } from "@/contexts/AppContext";

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <section>
      {!loading && (
        <div className="inner my-0 mx-auto max-w-[1200px] px-4 bg-aliceblue">
          <div className="grid grid-cols-10 gap-4 gap-y-6">
            {shows.map((actualShow, index) => {
              return <ShowCard actualShow={actualShow} key={index} />;
            })}
          </div>
        </div>
      )}
      {loading && <p className="w-full flex justify-center">Loading...</p>}
    </section>
  );
};

export default CardsContainer;
