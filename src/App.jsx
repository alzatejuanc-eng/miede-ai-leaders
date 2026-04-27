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

const assessmentLevels = [
  { range: "40–80", name: "Nivel 1 · Inicial", desc: "Sin estrategia digital. Procesos ad-hoc.", color: G.red },
  { range: "81–120", name: "Nivel 2 · En Desarrollo", desc: "Pilotos de IA emergentes y aislados.", color: G.orange },
  { range: "121–150", name: "Nivel 3 · Definido", desc: "Arquitectura de datos establecida.", color: G.gold },
  { range: "151–180", name: "Nivel 4 · Gestionado", desc: "Innovación con GenAI activa.", color: G.blue },
  { range: "181–200", name: "Nivel 5 · Optimizado", desc: "Fusión Digital / ExO-Ready.", color: G.green },
];

const tiers = [
  { lv: "T1", name: "Masterclass IA con MIEDE", tag: "Entrada", tc: G.blue,
    price: "$150", unit: "persona", assessment: "Freemium — AI Score básico 8 preguntas",
    items: ["2.5h en vivo mensual","1 pilar MIEDE+IA por sesión","Herramienta descargable","AI Score básico gratuito","Grabación 30 días"] },
  { lv: "T2", name: "MIEDE AI Practitioner", tag: "Certificación", tc: G.gold,
    price: "$997", unit: "persona", assessment: "Full Assessment 40 criterios + reporte ejecutivo",
    items: ["8 semanas online · 20 personas/cohorte","Assessment MIEDE Personal completo","1 módulo = 1 pilar = 1 entregable real","Mentoría grupal con Juan Carlos","Comunidad privada","Certificación MIEDE AI Practitioner"] },
  { lv: "T3", name: "MIEDE AI Sprint", tag: "Implementación", tc: G.purple,
    price: "$3.500", unit: "empresa (3 personas)", assessment: "Assessment empresarial completo + diagnóstico + roadmap",
    items: ["10 semanas · máx 8 empresas","Diagnóstico MIEDE 2.0 full enterprise","Piloto IA en producción","2 mentorías individuales","Revisión de arquitectura","Roadmap validado 12 meses"] },
  { lv: "T4", name: "MIEDE AI Executive Circle", tag: "Élite CEO", tc: G.gold,
    price: "$9.000", unit: "CEO/año", assessment: "Dashboard CEO: benchmark sectorial en tiempo real",
    items: ["12 sesiones mensuales solo CEOs","Dashboard IA de su empresa vs peers","Acceso directo Juan Carlos","Revisión proyectos IA en curso","Invitación talleres presenciales"] },
  { lv: "T5", name: "MIEDE AI Corporate", tag: "Corporativo", tc: G.green,
    price: "$20.000+", unit: "empresa", assessment: "Assessment masivo por áreas + comparativa multi-departamento",
    items: ["Diagnóstico full enterprise por departamento","Diseño curricular sectorial a medida","Facilitación presencial + online","Certificación del equipo directivo"] },
];

const weeks = [
  { w: "Sem 0", title: "DIAGNÓSTICO: MIEDE Personal Assessment", tag: "OBLIGATORIO", color: G.gold, pillar: "Los 8 pilares", dur: "Antes Sem 1", desc: "Assessment MIEDE Personal completo. AI Score 0–200, mapa de brechas personalizado.", deliverable: "Reporte ejecutivo + Radar chart + Mapa de brechas", tool: "App MIEDE Personal" },
  { w: "Sem 1", title: "Liderazgo: El CEO como Arquitecto de IA", tag: "Pilar 01", color: PILLAR_COLORS[0], pillar: "Pilar 1", dur: "2h sesión", desc: "Resultados del assessment. Governance de IA.", deliverable: "Mapa de Governance IA + AI Owner", tool: "Template Governance" },
  { w: "Sem 2", title: "Estrategia: Elegir los Casos de Uso", tag: "Pilar 02", color: PILLAR_COLORS[1], pillar: "Pilar 2", dur: "2h sesión", desc: "Priorización con ROI. Roadmap 3 horizontes.", deliverable: "Portafolio de Casos + AI Roadmap", tool: "Canvas Priorización" },
  { w: "Sem 3", title: "Datos: El Prerrequisito Crítico ★", tag: "Pilar 03", color: PILLAR_COLORS[2], pillar: "Pilar 3", dur: "2h sesión", desc: "Auditoría de datos. Arquitectura IA-ready.", deliverable: "Data Audit + Plan Arquitectura", tool: "Data Audit Canvas" },
  { w: "Sem 4", title: "Procesos: Automatización Inteligente", tag: "Pilar 04", color: PILLAR_COLORS[3], pillar: "Pilar 4", dur: "2h sesión", desc: "Las 5 interfaces críticas. Flujos IA-augmented.", deliverable: "Mapa Procesos + Identificación bots", tool: "Process Mining Canvas" },
  { w: "Sem 5", title: "Cliente: IA en el Frente del Negocio", tag: "Pilar 05", color: PILLAR_COLORS[4], pillar: "Pilar 5", dur: "2h sesión", desc: "Hiperpersonalización. CX aumentado con IA.", deliverable: "Propuesta CX con IA + Métricas", tool: "CX-IA Canvas" },
  { w: "Sem 6", title: "Talento: Equipo IA-Ready", tag: "Pilar 06", color: PILLAR_COLORS[5], pillar: "Pilar 6", dur: "2h sesión", desc: "Reskilling. Roles nuevos. Prompts corporativos.", deliverable: "Plan Reskilling + Biblioteca Prompts", tool: "AI Skills Matrix" },
  { w: "Sem 7", title: "Innovación ExO: Escalar el Piloto", tag: "Pilar 07", color: PILLAR_COLORS[6], pillar: "Pilar 7", dur: "2h sesión", desc: "Metodología ExO. Atributos SCALE con IA.", deliverable: "Plan Escalamiento + Modelo de negocio", tool: "ExO Canvas" },
  { w: "Sem 8", title: "Fusión Digital: Presentación Directorio", tag: "Pilar 08", color: PILLAR_COLORS[7], pillar: "Pilar 8", dur: "2h sesión", desc: "Roadmap IA presentable. Cierre con impacto.", deliverable: "Tablero Mando IA + Roadmap 12 meses + AI Score final", tool: "Dashboard IA" },
];

const funnel = [
  { icon: "📡", stage: "Atracción Orgánica", out: "5K impresiones/semana", items: ["3 posts/semana LinkedIn","Newsletter INNOVA 4 Business","Eventos Huawei + talleres","Alianza ExO LatAm"] },
  { icon: "🎯", stage: "Lead Magnet — AI Score Gratuito", out: "150–300 leads/mes", items: ["8 preguntas freemium MIEDE Personal","Recibe nivel madurez + 3 recomendaciones","CTA: Conoce tu score completo","Base de datos segmentada"] },
  { icon: "📧", stage: "Nurturing 5 Emails", out: "Tasa apertura 40%+", items: ["Email 1: Tu AI Score personalizado","Email 2: Caso real empresa similar","Email 3: Error más caro con IA","Email 4: Qué obtienen participantes","Email 5: Invitación Masterclass"] },
  { icon: "🔄", stage: "Conversión T1→T2", out: "30% Masterclass→Practitioner", items: ["Oferta 72h: descuento $150","Garantía semana 1: reembolso total","Call gratuita 30 min","Acceso anticipado assessment"] },
  { icon: "📈", stage: "Upsell T2 → T3/T4", out: "20% Practitioner→Sprint/Circle", items: ["Propuesta empresarial personalizada","Executive Circle: invitación selectiva","Corporate: contacto B2B + ROI"] },
];

const revenues = [
  { t: "T1 Masterclass", q: "4 ses/año × 60 personas", u: 150, total: 36000 },
  { t: "T2 AI Practitioner", q: "3 cohortes/año × 15 personas", u: 997, total: 44865 },
  { t: "T3 AI Sprint", q: "8 empresas/año", u: 3500, total: 28000 },
  { t: "T4 Executive Circle", q: "10 CEOs/año", u: 9000, total: 90000 },
  { t: "T5 Corporate", q: "2 corporativos/año", u: 20000, total: 40000 },
];
const totalRev = revenues.reduce((a, b) => a + b.total, 0);

export default function App() {
  const [tab, setTab] = useState(0);
  const [openTier, setOpenTier] = useState(null);
  const [openWeek, setOpenWeek] = useState(null);

  const tabs = ["Visión","Assessment","Programa","Tiers","Funnel","Financiero"];

  return (
    <div style={{ background: G.bg, minHeight: "100vh", color: G.text, fontFamily: "'Crimson Pro', Georgia, serif" }}>
      <div style={{ background: "linear-gradient(135deg,#0A0B0F,#0F1520,#0A0B0F)", borderBottom: `1px solid ${G.border}`, padding: "40px 20px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ display: "inline-block", border: `1px solid ${G.goldD}`, color: G.gold, fontSize: 10, fontFamily: "monospace", letterSpacing: "0.25em", padding: "4px 14px", borderRadius: 2, marginBottom: 18, position: "relative", zIndex: 1 }}>
          MODELO DE NEGOCIO · MIEDE AI LEADERS · v2.0 · 2026
        </div>
        <h1 style={{ fontSize: "clamp(22px,5vw,40px)", fontWeight: 600, margin: "0 0 6px", lineHeight: 1.15, position: "relative", zIndex: 1 }}>
          <span style={{ color: G.gold }}>MIEDE AI Leaders</span>
        </h1>
        <p style={{ fontSize: 15, color: G.sub, margin: "10px auto 0", maxWidth: 540, lineHeight: 1.65, fontStyle: "italic", position: "relative", zIndex: 1 }}>
          El programa que convierte líderes en arquitectos de IA exitosa
        </p>
      </div>

      <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${G.border}`, background: "#0D0F16", overflowX: "auto", scrollbarWidth: "none" }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{ background: "none", border: "none", cursor: "pointer", padding: "13px 18px", fontSize: 11, fontFamily: "monospace", letterSpacing: "0.08em", color: tab === i ? G.gold : G.muted, borderBottom: `2px solid ${tab === i ? G.gold : "transparent"}`, whiteSpace: "nowrap", transition: "all 0.2s" }}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "28px 18px 60px" }}>
        {tab === 0 && (
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>Visión del Programa</div>
            <div style={{ fontSize: 14, color: G.sub, marginBottom: 24, lineHeight: 1.5 }}>El único programa en LatAm donde el CEO termina con un proyecto de IA en producción en su propia empresa — no en un caso ficticio.</div>
            <div style={{ background: "rgba(201,168,76,0.05)", border: `1px solid ${G.goldD}`, borderRadius: 10, padding: 24, marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: G.gold, fontFamily: "monospace", letterSpacing: "0.12em", marginBottom: 12 }}>PROPUESTA DE VALOR</div>
              <p style={{ fontSize: 17, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>"Mientras otros te enseñan qué es la IA, MIEDE AI Leaders te acompaña a implementarla — comenzando por saber exactamente dónde estás."</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
              {[["70%","Personas & Cultura",G.green],["25%","Metodología & Proceso",G.blue],["5%","Tecnología",G.muted],["IA","Capa Transversal",G.gold]].map(([v,l,c]) => (
                <div key={l} style={{ flex: 1, minWidth: 120, textAlign: "center", padding: "14px 10px", background: `${c}12`, border: `1px solid ${c}40`, borderRadius: 8 }}>
                  <div style={{ fontSize: 26, fontWeight: 700, color: c }}>{v}</div>
                  <div style={{ fontSize: 11, color: G.sub, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === 1 && (
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>MIEDE Personal Assessment</div>
            <div style={{ fontSize: 14, color: G.sub, marginBottom: 24 }}>40 criterios × 8 pilares. AI Score 0–200. El punto de partida obligatorio.</div>
            <div style={{ fontSize: 11, color: G.gold, fontFamily: "monospace", letterSpacing: "0.1em", marginBottom: 12 }}>LOS 5 NIVELES DE MADUREZ</div>
            {assessmentLevels.map(l => (
              <div key={l.name} style={{ display: "flex", gap: 14, padding: "12px 14px", marginBottom: 6, background: `${l.color}0D`, border: `1px solid ${l.color}30`, borderRadius: 7 }}>
                <div style={{ fontSize: 11, fontFamily: "monospace", color: l.color, minWidth: 52, flexShrink: 0 }}>{l.range}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: l.color, marginBottom: 2 }}>{l.name}</div>
                  <div style={{ fontSize: 12, color: G.sub }}>{l.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 2 && (
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>Estructura del Programa</div>
            <div style={{ fontSize: 14, color: G.sub, marginBottom: 20 }}>Semana 0 de diagnóstico + 8 semanas de aplicación.</div>
            {weeks.map((w, i) => (
              <div key={i} onClick={() => setOpenWeek(openWeek === i ? null : i)} style={{ background: openWeek === i ? `${w.color}08` : "rgba(255,255,255,0.015)", border: `1px solid ${openWeek === i ? w.color : G.border}`, borderRadius: 8, marginBottom: 8, cursor: "pointer", overflow: "hidden" }}>
                <div style={{ display: "flex", gap: 12, padding: "14px 16px", alignItems: "center" }}>
                  <div style={{ fontSize: 10, fontFamily: "monospace", color: G.muted, minWidth: 42, flexShrink: 0 }}>{w.w}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 3 }}>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>{w.title}</span>
                      <span style={{ fontSize: 9, fontFamily: "monospace", padding: "2px 7px", borderRadius: 2, background: `${w.color}20`, color: w.color, border: `1px solid ${w.color}40` }}>{w.tag}</span>
                    </div>
                    <div style={{ fontSize: 11, color: G.muted }}>{w.pillar} · {w.dur}</div>
                  </div>
                  <div style={{ fontSize: 12, color: G.muted }}>{openWeek === i ? "▲" : "▼"}</div>
                </div>
                {openWeek === i && (
                  <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${G.border}` }}>
                    <p style={{ fontSize: 13, color: G.sub, lineHeight: 1.7, margin: "12px 0 10px" }}>{w.desc}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 6, padding: 12 }}>
                        <div style={{ fontSize: 10, fontFamily: "monospace", color: w.color, marginBottom: 5 }}>ENTREGABLE</div>
                        <div style={{ fontSize: 12, color: G.text, lineHeight: 1.5 }}>{w.deliverable}</div>
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 6, padding: 12 }}>
                        <div style={{ fontSize: 10, fontFamily: "monospace", color: w.color, marginBottom: 5 }}>HERRAMIENTA</div>
                        <div style={{ fontSize: 12, color: G.text, lineHeight: 1.5 }}>{w.tool}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {tab === 3 && (
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>5 Tiers</div>
            <div style={{ fontSize: 14, color: G.sub, marginBottom: 20 }}>De Masterclass a Corporate.</div>
            {tiers.map((t, i) => (
              <div key={i} onClick={() => setOpenTier(openTier === i ? null : i)} style={{ background: openTier === i ? `${t.tc}08` : G.card, border: `1px solid ${openTier === i ? t.tc : G.border}`, borderRadius: 10, marginBottom: 10, cursor: "pointer", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 6, background: `${t.tc}18`, border: `1px solid ${t.tc}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: t.tc, flexShrink: 0 }}>{t.lv}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{t.name}</div>
                    <div style={{ fontSize: 10, fontFamily: "monospace", color: t.tc }}>{t.tag.toUpperCase()}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: G.gold }}>{t.price}</div>
                    <div style={{ fontSize: 10, color: G.sub }}>{t.unit}</div>
                  </div>
                </div>
                {openTier === i && (
                  <div style={{ padding: "0 18px 18px", borderTop: `1px solid ${G.border}` }}>
                    <div style={{ background: `${t.tc}12`, border: `1px solid ${t.tc}40`, borderRadius: 7, padding: "10px 14px", margin: "12px 0" }}>
                      <div style={{ fontSize: 10, fontFamily: "monospace", color: t.tc, marginBottom: 4 }}>🔍 MIEDE PERSONAL</div>
                      <div style={{ fontSize: 12, color: G.text }}>{t.assessment}</div>
                    </div>
                    <div style={{ fontSize: 10, fontFamily: "monospace", color: G.muted, marginBottom: 8 }}>INCLUYE</div>
                    {t.items.map((item, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: `1px solid ${G.border}`, fontSize: 13, color: G.sub }}>
                        <span style={{ color: t.tc }}>✓</span><span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {tab === 4 && (
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>Funnel de Adquisición</div>
            <div style={{ fontSize: 14, color: G.sub, marginBottom: 24 }}>LinkedIn → Lead Magnet → Conversión → Upsell</div>
            {funnel.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 46, height: 46, background: G.card, border: `1px solid ${G.border}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{f.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{i+1}. {f.stage}</div>
                  <div style={{ fontSize: 13, color: G.sub, lineHeight: 1.7 }}>
                    {f.items.map((item, j) => <div key={j}>• {item}</div>)}
                  </div>
                  <div style={{ marginTop: 8, display: "inline-block", fontSize: 11, fontFamily: "monospace", color: G.gold, background: "rgba(201,168,76,0.1)", padding: "3px 10px", borderRadius: 4 }}>{f.out}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 5 && (
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>Proyección Financiera</div>
            <div style={{ fontSize: 14, color: G.sub, marginBottom: 20 }}>Año 1 conservador.</div>
            <div style={{ background: "rgba(201,168,76,0.05)", border: `1px solid ${G.goldD}`, borderRadius: 10, padding: 20, marginBottom: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontSize: 11, color: G.sub, fontFamily: "monospace", marginBottom: 4 }}>INGRESO AÑO 1</div>
                <div style={{ fontSize: 40, fontWeight: 700, color: G.gold }}>${totalRev.toLocaleString()}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: G.sub, fontFamily: "monospace", marginBottom: 4 }}>MARGEN</div>
                <div style={{ fontSize: 40, fontWeight: 700, color: G.green }}>94%</div>
              </div>
            </div>
            {revenues.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: `1px solid ${G.border}` }}>
                <div style={{ width: 32, height: 28, borderRadius: 4, background: `${G.gold}15`, border: `1px solid ${G.goldD}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontFamily: "monospace", color: G.gold, flexShrink: 0 }}>{r.t.split(" ")[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>{r.t}</div>
                  <div style={{ fontSize: 11, color: G.sub, marginBottom: 6 }}>{r.q}</div>
                  <div style={{ height: 5, borderRadius: 3, background: `linear-gradient(90deg,${G.gold},${G.goldL})`, width: `${(r.total/totalRev)*100}%` }} />
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: G.gold }}>${r.total.toLocaleString()}</div>
                  <div style={{ fontSize: 10, color: G.sub }}>${r.u.toLocaleString()}/u</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
Fix: Complete App.jsx with all variables used
