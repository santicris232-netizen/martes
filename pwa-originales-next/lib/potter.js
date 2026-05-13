const API = "https://api.potterdb.com/v1/characters?page[size]=12";

export async function getCharacters() {
  const res = await fetch(API, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error("No se pudo cargar PotterDB");
  }
  const data = await res.json();
  return data.data ?? [];
}
