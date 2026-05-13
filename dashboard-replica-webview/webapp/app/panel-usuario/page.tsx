"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type FavoriteItem = {
  id: string;
  title: string;
  notes: string;
};

export default function PanelUsuarioPage() {
  const [items, setItems] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const run = async () => {
      const { data } = await supabase.from("favorites").select("id,title,notes").limit(12);
      setItems((data || []) as FavoriteItem[]);
    };

    run();
  }, []);

  return (
    <section className="card">
      <h2>Panel Usuario</h2>
      <p>Vista de elementos favoritos guardados en Supabase.</p>
      <div className="grid">
        {items.map((item) => (
          <article key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
