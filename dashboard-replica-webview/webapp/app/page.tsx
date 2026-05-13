import { getMvpData } from "./server-data";

export default async function Page() {
  const rows = await getMvpData();

  return (
    <section className="card">
      <h2>MVP replicado</h2>
      <p>Replica tipo gestor de personajes con autenticacion y paneles separados.</p>
      <div className="grid">
        {rows.map((item) => (
          <article key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>Casa: {item.house || "Sin casa"}</p>
            <p>Estado sangre: {item.blood_status || "No definido"}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
