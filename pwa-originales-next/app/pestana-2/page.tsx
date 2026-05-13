import { getCharacters } from "@/lib/potter";

function scoreCharacter(value?: string) {
  if (!value) return 1;
  return value.length;
}

export default async function PestanaDosPage() {
  const characters = await getCharacters(10);

  const ranked = characters
    .map((c) => ({
      ...c,
      score: scoreCharacter(c.blood_status) + scoreCharacter(c.house) + scoreCharacter(c.nationality)
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <section>
      <h2>Pestana original 2: Ranking magico</h2>
      <p>Ranking propio creado con atributos de PotterDB.</p>
      <div className="grid">
        {ranked.map((char, idx) => (
          <article key={char.id} className="card">
            <h3>
              #{idx + 1} {char.name}
            </h3>
            <p>Puntaje: {char.score}</p>
            <p>{char.nationality || "Nacionalidad no definida"}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
