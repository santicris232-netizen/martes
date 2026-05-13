export type PotterCharacter = {
  id: string;
  name: string;
  gender?: string;
  blood_status?: string;
  house?: string;
  nationality?: string;
  image?: string;
};

export async function getCharacters(limit = 12): Promise<PotterCharacter[]> {
  const response = await fetch(`https://api.potterdb.com/v1/characters?page[size]=${limit}`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener personajes de PotterDB");
  }

  const json = await response.json();

  return (json.data ?? []).map((item: any) => ({
    id: item.id,
    name: item.attributes?.name,
    gender: item.attributes?.gender,
    blood_status: item.attributes?.blood_status,
    house: item.attributes?.house,
    nationality: item.attributes?.nationality,
    image: item.attributes?.image
  }));
}
