"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function PanelAdminPage() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const { error } = await supabase.from("favorites").insert({ title, notes });
    setMessage(error ? error.message : "Elemento guardado");
    if (!error) {
      setTitle("");
      setNotes("");
    }
  };

  return (
    <section className="card">
      <h2>Panel Administrativo</h2>
      <form onSubmit={submit}>
        <label>
          Titulo
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Notas
          <input value={notes} onChange={(e) => setNotes(e.target.value)} required />
        </label>
        <button type="submit">Guardar</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}
