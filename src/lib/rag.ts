import { projects } from "./data/projects";
import { skillCategories } from "./data/skills";
import { experiences } from "./data/experience";
import { achievements } from "./data/achievements";
import { education } from "./data/education";
import { SITE } from "./constants";

export interface RagSource {
  title: string;
  category: string;
}

export interface RagResult {
  answer: string;
  sources: RagSource[];
}

interface KnowledgeEntry {
  id: string;
  source: string;
  category: string;
  keywords: string[];
  text: string;
}

const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

function buildKnowledgeBase(): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = [];

  entries.push({
    id: "intro",
    source: SITE.fullName,
    category: "about",
    keywords: ["atharva", "joshi", "software", "engineer", "about", "developer", "portfolio", "who"],
    text: `${SITE.fullName} is a ${SITE.title} focused on ${SITE.domains.join(
      ", "
    )}. ${SITE.tagline} Currently ${SITE.status.toLowerCase()}.`,
  });

  entries.push({
    id: "projects-overview",
    source: "Projects",
    category: "project",
    keywords: ["project", "projects", "work", "built", "portfolio", "case", "study"],
    text: `Atharva has built ${projects.length} major projects:\n${projects
      .map((p) => `• ${p.title} — ${p.description}`)
      .join("\n")}`,
  });

  for (const p of projects) {
    entries.push({
      id: `project-${p.id}`,
      source: `Project — ${p.title}`,
      category: "project",
      keywords: [
        ...p.title.toLowerCase().split(/\s+/),
        ...p.technologies.map((t) => t.toLowerCase()),
        ...p.category.toLowerCase().split(/\s+/),
        "project",
        "work",
      ],
      text: [
        `${SITE.fullName}'s project "${p.title}" (${p.category}).`,
        p.description,
        `Problem: ${p.problem}`,
        `Solution: ${p.solution}`,
        `Tech stack: ${p.technologies.join(", ")}`,
        `Architecture: ${p.architecture.join(" → ")}`,
        `Key results:\n${p.results.map((r) => `• ${r}`).join("\n")}`,
      ].join("\n"),
    });
  }

  entries.push({
    id: "skills-overview",
    source: "Skills",
    category: "skill",
    keywords: ["skill", "skills", "tech", "technologies", "stack", "tools", "language", "languages", "programming", "expertise"],
    text: `Atharva's skills across ${skillCategories.length} domains:\n${skillCategories
      .map((c) => `• ${c.name}: ${c.skills.map((s) => s.name).join(", ")}`)
      .join("\n")}`,
  });

  entries.push({
    id: "experience-overview",
    source: "Experience",
    category: "experience",
    keywords: ["experience", "intern", "internship", "job", "work", "role", "career", "background"],
    text: `Atharva's experience:\n${experiences
      .map((e) => `• ${e.role} at ${e.organization} (${e.duration}) — ${e.description}`)
      .join("\n")}`,
  });

  for (const e of experiences) {
    entries.push({
      id: `experience-${e.id}`,
      source: `Experience — ${e.role}`,
      category: "experience",
      keywords: [
        ...e.role.toLowerCase().split(/\s+/),
        ...e.organization.toLowerCase().split(/\s+/),
        ...e.technologies.map((t) => t.toLowerCase()),
        "internship",
        "job",
        "experience",
      ],
      text: [
        `${e.role} at ${e.organization} (${e.duration}).`,
        e.description,
        `Responsibilities:\n${e.responsibilities.map((r) => `• ${r}`).join("\n")}`,
        `Achievements:\n${e.achievements.map((a) => `• ${a}`).join("\n")}`,
      ].join("\n"),
    });
  }

  entries.push({
    id: "achievements-overview",
    source: "Achievements",
    category: "achievement",
    keywords: ["achievement", "achievements", "award", "awards", "winner", "win", "won", "competition", "hackathon", "research", "paper", "certification"],
    text: `Atharva's key achievements:\n${achievements
      .map((a) => `• ${a.title} (${a.event}) — ${a.position}, ${a.year}. ${a.description}`)
      .join("\n")}`,
  });

  entries.push({
    id: "education-overview",
    source: "Education",
    category: "education",
    keywords: ["education", "degree", "college", "university", "study", "student", "academic", "bachelor", "diploma", "school", "university", "graphic", "pict", "polytechnic"],
    text: `Atharva's education:\n${education
      .map((e) => `• ${e.degree} at ${e.institution} (${e.duration}). ${e.description}`)
      .join("\n")}`,
  });

  const allSkills = skillCategories.flatMap((c) => c.skills);
  entries.push({
    id: "contact",
    source: "Contact",
    category: "contact",
    keywords: ["contact", "email", "reach", "hire", "linkedin", "github", "social", "resume", "cv", "download"],
    text: `Reach Atharva at ${SITE.email}. GitHub: ${SITE.github} — LinkedIn: ${SITE.linkedin}. You can also use the Contact form on this site to request a resume.`,
  });

  const allSkillNames = allSkills
    .map((s) => `${s.name}: ${s.level}%.`)
    .join(" ");
  entries.push({
    id: "skill-detail",
    source: "Skill Details",
    category: "skill",
    keywords: ["level", "proficiency", "percent"],
    text: `Atharva's proficiency levels (0-100): ${allSkillNames}`,
  });

  return entries;
}

export function retrieve(query: string, k = 3): KnowledgeEntry[] {
  const qTokens = tokenize(query);
  const entries = buildKnowledgeBase();

  const scored = entries
    .map((entry) => {
      let score = 0;
      // A match on an explicit keyword (category-level intent) counts more
      // than an incidental match deep inside a long text body, so overview
      // entries aren't drowned out by per-item entries that merely mention
      // the word (e.g. every experience entry has an "Achievements:" line).
      const keywordSet = new Set(entry.keywords);
      const textSet = new Set(tokenize(entry.text));
      for (const tok of qTokens) {
        if (keywordSet.has(tok)) score += 2;
        else if (textSet.has(tok)) score += 1;
      }
      return { entry, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, k).map((s) => s.entry);
}

const CATEGORY_LABELS: Record<KnowledgeEntry["category"], string> = {
  about: "About",
  project: "Projects",
  skill: "Skills",
  experience: "Experience",
  achievement: "Achievements",
  education: "Education",
  contact: "Contact",
};

const OVERVIEW_IDS = new Set([
  "projects-overview",
  "skills-overview",
  "experience-overview",
  "achievements-overview",
  "education-overview",
]);

function generate(query: string, hits: KnowledgeEntry[]): string {
  let top = hits[0];

  // A category-level overview (e.g. Experience overview) is more on-target than
  // a tie-breaking generic entry like the About/intro line, so prefer it even
  // if it didn't rank first by pure score.
  const overview = hits.find((h) => OVERVIEW_IDS.has(h.id));
  if (overview && top.category !== overview.category) top = overview;

  // General overview categories: the overview entry carries the record itself,
  // so there is nothing extra to append.
  if (OVERVIEW_IDS.has(top.id)) return top.text;

  // A single specific entry was retrieved (e.g. one project, one experience).
  if (hits.length === 1) return top.text;

  // A specific entry plus supporting context: surface the specific entry
  // first, then any sibling overview entries for breadth, de-duplicated.
  const seen = new Set<string>([top.id]);
  const parts = [top.text];
  for (const h of hits) {
    if (seen.has(h.id)) continue;
    if (OVERVIEW_IDS.has(h.id)) {
      // Only attach the overview of a category we don't already fully cover.
      if (h.category === top.category) continue;
      parts.push(h.text);
      seen.add(h.id);
    } else if (h.category === top.category) {
      parts.push(`\nAlso in ${CATEGORY_LABELS[h.category]}:\n${h.text}`);
      seen.add(h.id);
    }
  }

  return parts.join("\n\n");
}

const GREETING = /^(hi|hello|hey|yo|namaste)\b/i;
const THANKS = /(thank|thanks|thx)\b/i;
const HELP = /(help|what can you|what do you do|how.*(use|work))/i;

const FALLBACK =
  "I can answer questions about Atharva's portfolio using his knowledge base — projects, skills, experience, and achievements.\n\nTry asking things like:\n• What projects has Atharva built?\n• What are his skills?\n• Tell me about his robotics work\n• What about his experience?";

function isGreeting(query: string): string | null {
  const match = query.match(GREETING);
  if (match) {
    return `Hello${match[1] === "yo" ? "!" : "!"} I'm Atharva's RAG assistant. I retrieve answers from his portfolio knowledge base.\n\nAsk me anything about his ${SITE.domains.join(", ")} work.`;
  }
  if (query.match(HELP)) {
    return "I use Retrieval-Augmented Generation over Atharva's portfolio data: I search his knowledge base (projects, skills, experience, achievements) and compose an answer from the most relevant chunks.\n\nTry: \"What projects has he built?\" or \"What are his skills?\"";
  }
  if (query.match(THANKS)) {
    return "You're welcome! Feel free to ask anything else about Atharva's work. 🚀";
  }
  return null;
}

export function answerQuery(query: string): RagResult {
  const special = isGreeting(query);
  if (special) {
    return { answer: special, sources: [] };
  }

  const hits = retrieve(query);
  if (hits.length === 0) {
    return { answer: FALLBACK, sources: [] };
  }

  return {
    answer: generate(query, hits),
    sources: hits.map((h) => ({ title: h.source, category: h.category })),
  };
}