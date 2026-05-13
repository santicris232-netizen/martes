type MvpCharacter = {
  id: string;
  name: string;
  house?: string;
  blood_status?: string;
};

export async function getMvpData(): Promise<MvpCharacter[]> {
  const response = await fetch("https://api.potterdb.com/v1/characters?page[size]=8", {
    cache: "no-store"
  });

  if (!response.ok) {
    return [];
  }

  const json = await response.json();

  return (json.data ?? []).map((item: any) => ({
    id: item.id,
    name: item.attributes?.name,
    house: item.attributes?.house,
    blood_status: item.attributes?.blood_status
  }));
}
