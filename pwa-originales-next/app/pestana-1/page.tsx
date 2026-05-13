import { getCharacters } from "@/lib/potter";

export default async function PestanaUnoPage() {
  const characters = await getCharacters(12);
  const houses = characters.reduce<Record<string, number>>((acc, current) => {
    const key = current.house || "Sin casa";
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section>
      <h2>Pestana original 1: Mapa de casas</h2>
      <div className="grid">
        {Object.entries(houses).map(([house, count]) => (
          <article className="card" key={house}>
            <h3>{house}</h3>
            <p>{count} personajes en el corte actual del API.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
