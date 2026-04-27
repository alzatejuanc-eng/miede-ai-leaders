import { useState } from "react";

const G = {
  bg: "#0A0B0F", card: "#12141A", border: "#1E2130",
  gold: "#C9A84C", goldL: "#E8C96B", goldD: "#9B7A2F",
  text: "#F0EDE6", sub: "#9A96A0", muted: "#5A5760",
  green: "#2ECC71", red: "#E74C3C", blue: "#3A9FD4",
  purple: "#9B59B6", orange: "#E67E22", teal: "#1ABC9C",
};

const PILLAR_COLORS = ["#C9A84C","#3A9FD4","#E74C3C","#9B59B6","#2ECC71","#F39C12","#1ABC9C","#E67E22"];

const pillars = [
  { n: "Evaluación Estado Actual + Madurez IA", icon: "🔍", kpi: "AI Score 0–200" },
  { n: "Estrategia Digital Exponencial + MTP", icon: "🎯", kpi: "AI Roadmap 3 horizontes" },
  { n: "Arquitectura de Datos e IA ★", icon: "🧱", kpi: "Data Readiness Index" },
  { n: "Hiperautomatización + Agentes IA", icon: "⚙️", kpi: "% procesos automatizados" },
  { n: "Innovación Modelo Negocios + GenAI", icon: "💡", kpi: "Nuevos revenue streams" },
  { n: "Capacidades Exponenciales Human+AI", icon: "🧠", kpi: "AI Literacy Index equipo" },
  { n: "Modelo Negocio Disruptivo ExO 2.0", icon: "🚀", kpi: "ExO Attributes Score" },
  { n: "Fusión Digital — IA en el ADN", icon: "🦋", kpi: "OKRs IA en Directorio" },
];

export default function App() {
  const [tab, setTab] = useState(0);
  const [openTier, setOpenTier] = useState(null);
  const [openWeek, setOpenWeek] = useState(null);

  const tabs = ["Visión","Assessment","Programa","Tiers","Funnel","Financiero"];

  return (
    <div style={{ background: G.bg, minHeight: "100vh", color: G.text, fontFamily: "'Crimson Pro', Georgia, serif" }}>
      <div style={{ background: "linear-gradient(135deg,#0A0B0F,#0F1520,#0A0B0F)", borderBottom: `1px solid ${G.border}`, padding: "40px 20px 32px", textAlign: "center" }}>
        <div style={{ display: "inline-block", border: `1px solid ${G.goldD}`, color: G.gold, fontSize: 10, fontFamily: "monospace", letterSpacing: "0.25em", padding: "4px 14px", borderRadius: 2, marginBottom: 18 }}>
          MIEDE AI LEADERS · v2.0
        </div>
        <h1 style={{ fontSize: "clamp(22px,5vw,40px)", fontWeight: 600, margin: "0 0 6px", lineHeight: 1.15 }}>
          <span style={{ color: G.gold }}>MIEDE AI Leaders</span>
        </h1>
        <p style={{ fontSize: 15, color: G.sub, margin: "10px auto 0", maxWidth: 540, lineHeight: 1.65, fontStyle: "italic" }}>
          El programa que convierte líderes en arquitectos de IA exitosa
        </p>
      </div>

      <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${G.border}`, background: "#0D0F16", overflowX: "auto" }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{ background: "none", border: "none", cursor: "pointer", padding: "13px 18px", fontSize: 11, fontFamily: "monospace", color: tab === i ? G.gold : G.muted, borderBottom: `2px solid ${tab === i ? G.gold : "transparent"}`, whiteSpace: "nowrap" }}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "28px 18px 60px" }}>
        {tab === 0 && (
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>Visión</div>
            <div style={{ fontSize: 14, color: G.sub, marginBottom: 24 }}>El único programa donde el CEO termina con un proyecto de IA en producción en su propia empresa.</div>
            <div style={{ background: "rgba(201,168,76,0.05)", border: `1px solid ${G.goldD}`, borderRadius: 10, padding: 24 }}>
              <p style={{ fontSize: 17, fontStyle: "italic", lineHeight: 1.75, margin: 0, color: G.text }}>
                "Mientras otros te enseñan qué es la IA, MIEDE AI Leaders te acompaña a implementarla."
              </p>
            </div>
          </div>
        )}
        {tab === 1 && <div><h2>Assessment MIEDE Personal</h2><p>40 criterios, 8 pilares, AI Score 0-200</p></div>}
        {tab === 2 && <div><h2>Programa</h2><p>8 semanas + Semana 0 de diagnóstico</p></div>}
        {tab === 3 && <div><h2>5 Tiers</h2><p>De Masterclass a Corporate</p></div>}
        {tab === 4 && <div><h2>Funnel</h2><p>LinkedIn → Lead Magnet → Conversión</p></div>}
        {tab === 5 && <div><h2>Financiero</h2><p>$238,865 Año 1 · Proyección 3 años</p></div>}
      </div>
    </div>
  );
}
