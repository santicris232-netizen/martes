"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function RegistroPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, role }
      }
    });

    if (!error && data.user?.id) {
      await supabase.from("profiles").upsert({
        id: data.user.id,
        name,
        role
      });
    }

    setMessage(error ? error.message : "Registro correcto (revisar correo de confirmacion)");
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>Registro</h2>
      <label>
        Nombre
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Rol
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
      </label>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
      </label>
      <label>
        Contrasena
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
      </label>
      <button type="submit">Registrar</button>
      {message && <p>{message}</p>}
    </form>
  );
}
