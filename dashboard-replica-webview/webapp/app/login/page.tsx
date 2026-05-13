"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    setMessage(error ? error.message : "Login correcto");
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>LogIn</h2>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
      </label>
      <label>
        Contrasena
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
      </label>
      <button type="submit">Ingresar</button>
      {message && <p>{message}</p>}
    </form>
  );
}
