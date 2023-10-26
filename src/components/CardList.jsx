import { useEffect, useState } from "react";
import { getList } from "../services/serviceData";
import CardItem from "./CardItem";

export default function CardList() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleReload = () => {
    setPage(1);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getList(page);
        setPokemons((prev) => {
          if (page === 1) return data;
          else return [...prev, ...data];
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <CardItem key={index} pokemon={pokemon} />
          ))}
      </div>
      <div className="flex items-center justify-center gap-4 mb-4">
        {pokemons && (
          <button
            onClick={handleLoadMore}
            className="bg-amber-950 px-8 py-3 shadow-lg"
          >
            <span className="font-bold text-white">
              {loading ? "Cargando..." : "Mostrar más"}
            </span>
          </button>
        )}
        <button
          onClick={handleReload}
          className="bg-amber-950 px-8 py-3 shadow-lg"
        >
          <span className="font-bold text-white">Recargar página</span>
        </button>
      </div>
    </>
  );
}
