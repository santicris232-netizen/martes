import NavTabs from "../../components/NavTabs";

export default function ObjetoPage() {
  return (
    <main>
      <header>
        <h1>Objeto Original</h1>
        <NavTabs />
      </header>
      <section className="card">
        <h2>Reloj de Turnos de Hogwarts</h2>
        <p>
          Objeto inventado para la app: organiza guardias de las casas por turno para eventos.
        </p>
        <ul>
          <li>Turno amanecer: Gryffindor</li>
          <li>Turno tarde: Ravenclaw</li>
          <li>Turno noche: Hufflepuff</li>
          <li>Turno madrugada: Slytherin</li>
        </ul>
      </section>
    </main>
  );
}
