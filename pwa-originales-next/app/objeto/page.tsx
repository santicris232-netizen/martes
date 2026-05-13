const objetoOriginal = {
  proyecto: "PWA Originales",
  api: "https://api.potterdb.com/v1/characters",
  autor: "Equipo de trabajo",
  fecha: "2026-05-13"
};

export default function ObjetoPage() {
  return (
    <section className="card">
      <h2>Objeto del proyecto</h2>
      <pre>{JSON.stringify(objetoOriginal, null, 2)}</pre>
      <p>
        Fork sugerido: crear una variante de esta app y personalizar la visual, manteniendo el consumo del API.
      </p>
    </section>
  );
}
