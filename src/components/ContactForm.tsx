"use client";

import { useState } from "react";

export default function ContactForm({ tr }: { tr: any; locale: string }) {
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setMsg(tr.contact.ok);
      form.reset();
    } catch {
      setStatus("err");
      setMsg(tr.contact.err);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{borderRadius:22}}>
      <label style={{display:"block", fontWeight:900, margin:"0 0 12px"}}>
        {tr.contact.name}
        <input
          name="name"
          required
          placeholder={tr.contact.yourName}
          style={inputStyle}
        />
      </label>

      <label style={{display:"block", fontWeight:900, margin:"0 0 12px"}}>
        Email
        <input
          name="email"
          type="email"
          required
          placeholder={tr.contact.yourEmail}
          style={inputStyle}
        />
      </label>

      <label style={{display:"block", fontWeight:900, margin:"0 0 12px"}}>
        {tr.contact.message}
        <textarea
          name="message"
          required
          rows={5}
          placeholder={tr.contact.placeholder}
          style={inputStyle}
        />
      </label>

      <button className="btn" type="submit" disabled={status === "loading"} style={{width:"100%"}}>
        {status === "loading" ? tr.contact.loading : tr.contact.send}
      </button>

      <p style={{margin:"10px 0 0", color:"var(--muted)", fontSize:".9rem"}} aria-live="polite">
        {msg}
      </p>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 8,
  padding: "12px 12px",
  borderRadius: 14,
  border: "1px solid var(--border)",
  background: "rgba(16,26,47,.55)",
  color: "var(--text)",
  outline: "none",
};