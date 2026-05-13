export type CharacterItem = {
  id: string;
  name: string;
  house?: string;
  blood_status?: string;
};

export async function getPotterCharacters(): Promise<CharacterItem[]> {
  const response = await fetch("https://api.potterdb.com/v1/characters?page[size]=20");

  if (!response.ok) {
    throw new Error("No se pudo obtener la lista de personajes");
  }

  const json = await response.json();

  return (json.data ?? []).map((item: any) => ({
    id: item.id,
    name: item.attributes?.name,
    house: item.attributes?.house,
    blood_status: item.attributes?.blood_status
  }));
}
