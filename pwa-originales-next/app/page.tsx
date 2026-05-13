import InstallPWAButton from "@/components/InstallPWAButton";
import { getCharacters } from "@/lib/potter";

export default async function HomePage() {
  const characters = await getCharacters(6);

  return (
    <section>
      <h2>PWA Original #1 con PotterDB</h2>
      <p>
        Esta app cumple: icono, objeto, fork y capacidad de instalacion como PWA.
      </p>
      <InstallPWAButton />

      <div className="grid" style={{ marginTop: "1rem" }}>
        {characters.map((char) => (
          <article key={char.id} className="card">
            <h3>{char.name}</h3>
            <span className="chip">{char.house || "Sin casa"}</span>
            <span className="chip">{char.blood_status || "No definido"}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
