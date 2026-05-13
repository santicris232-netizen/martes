import NavTabs from "../components/NavTabs";
import { getCharacters } from "../lib/potter";

export default async function HomePage() {
  const list = await getCharacters();

  return (
    <main>
      <header>
        <h1>Wizard Atlas</h1>
        <NavTabs />
      </header>
      <p>
        PWA original que consume PotterDB y presenta una bitacora de personajes.
      </p>
      <section className="grid">
        {list.map((item) => {
          const attrs = item.attributes;
          return (
            <article key={item.id} className="card">
              <span className="badge">{attrs.blood_status || "estatus desconocido"}</span>
              <h3>{attrs.name}</h3>
              <p>
                <strong>Casa:</strong> {attrs.house || "Sin registro"}
              </p>
              <p>
                <strong>Nacimiento:</strong> {attrs.born || "Sin dato"}
              </p>
            </article>
          );
        })}
      </section>
      <footer>Instalable como PWA desde el navegador.</footer>
    </main>
  );
}
