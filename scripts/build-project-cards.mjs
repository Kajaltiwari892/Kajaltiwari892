import { mkdir, writeFile } from 'node:fs/promises';

const assets = new URL('../assets/', import.meta.url);
await mkdir(assets, { recursive: true });
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');

const projects = [
  {
    file: 'card-abhyaas.svg', name: 'Abhyaas', category: '01 / CDS PREPARATION', accent: '#6EE7DE',
    description: ['CDS practice, AI doubt-solving,', 'and progress in one study workspace.'],
    stack: ['Next.js · Python · FastAPI', 'PostgreSQL · Gemini · Qdrant'], action: 'EXPLORE ABHYAAS',
    icon: '<path d="M6 8q11-4 20 1v29q-10-5-20-1zm40 0q-11-4-20 1v29q10-5 20-1zM14 16h6m-6 7h6m13-7h6m-6 7h6"/>',
  },
  {
    file: 'card-resumeiq.svg', name: 'ResumeIQ', category: '02 / AI RESUME WORKSPACE', accent: '#B4A1FF',
    description: ['AI feedback, stronger bullet points,', 'and job matching—from upload to PDF.'],
    stack: ['Next.js · Express · MongoDB', 'Gemini · JWT · Stripe'], action: 'OPEN RESUMEIQ',
    icon: '<rect x="8" y="2" width="32" height="41" rx="5"/><path d="M16 13h16m-16 8h16m-16 8h9m4 7 5 5 10-12"/>',
  },
  {
    file: 'card-aissist.svg', name: 'AIssist', category: '03 / INTERVIEW PRACTICE', accent: '#F3ABDC',
    description: ['Practice interview answers aloud.', 'Revisit your responses with AI feedback.'],
    stack: ['Next.js · Gemini · Clerk', 'Drizzle ORM · Neon PostgreSQL'], action: 'EXPLORE THE CODE',
    icon: '<rect x="18" y="3" width="16" height="25" rx="8"/><path d="M11 20a15 15 0 0 0 30 0M26 35v8m-8 0h16M4 14v12m44-12v12"/>',
  },
  {
    file: 'card-fizzi.svg', name: 'Fizzi', category: '04 / INTERACTIVE 3D', accent: '#B1EF8E',
    description: ['A playful 3D product story, brought', 'to life through scroll and motion.'],
    stack: ['Next.js · Three.js · React Three Fiber', 'GSAP · Prismic'], action: 'EXPERIENCE FIZZI',
    icon: '<rect x="13" y="5" width="25" height="37" rx="7" transform="rotate(10 26 24)"/><path d="M21 10h11M20 21h13m-13 0v13m0-7h10M5 14h1m39 23h1"/>',
  },
];

for (const p of projects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="274" viewBox="0 0 440 274" role="img" aria-labelledby="title description">
<title id="title">${escape(p.name)}</title><desc id="description">${escape(p.description.join(' '))} Built with ${escape(p.stack.join(', '))}.</desc>
<defs><linearGradient id="surface" x2="1" y2="1"><stop stop-color="#121B2A"/><stop offset="1" stop-color="#0D121D"/></linearGradient><linearGradient id="border"><stop stop-color="${p.accent}" stop-opacity=".65"/><stop offset=".5" stop-color="#344156"/><stop offset="1" stop-color="${p.accent}" stop-opacity=".3"/></linearGradient></defs>
<rect x="8" y="8" width="424" height="250" rx="16" fill="url(#surface)" stroke="url(#border)" stroke-width="1.5"/>
<path d="M34 36h13" stroke="${p.accent}" stroke-width="2.5" stroke-linecap="round"/>
<g font-family="Segoe UI,Arial,sans-serif"><text x="55" y="40" fill="${p.accent}" font-size="10" font-weight="600" letter-spacing="1.15">${escape(p.category)}</text>
<text x="32" y="81" fill="#F0F4FC" font-size="30" font-weight="700" letter-spacing="-.9">${p.name}</text>
<text fill="#BBC7DB" font-size="16"><tspan x="33" y="117">${escape(p.description[0])}</tspan><tspan x="33" y="140">${escape(p.description[1])}</tspan></text>
<path d="M33 161h374" stroke="#2B384C"/>
<text fill="#9EABC2" font-size="12.5"><tspan x="33" y="184">${escape(p.stack[0])}</tspan><tspan x="33" y="204">${escape(p.stack[1])}</tspan></text>
<circle cx="36" cy="235" r="2.5" fill="${p.accent}"/><text x="47" y="239" fill="${p.accent}" font-size="10" font-weight="600" letter-spacing="1.1">${p.action}</text></g>
<path d="M394 241l10-10m-9 0h9v9" fill="none" stroke="${p.accent}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g transform="translate(352 43)" fill="none" stroke="${p.accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity=".8">${p.icon}</g>
</svg>\n`;
  await writeFile(new URL(p.file, assets), svg);
}
console.log('Built four compact project cards, with Abhyaas first.');
