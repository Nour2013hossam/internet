'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Palette, Shield, Sparkles, Video, Users, Trophy, Mail, Instagram, Linkedin, Github, Rocket } from 'lucide-react';

const fields = [
  { title: 'Artificial Intelligence', desc: 'Build, train, and deploy advanced AI products.', icon: Brain },
  { title: 'Prompt Engineering', desc: 'Craft robust prompts for reliable AI workflows.', icon: Sparkles },
  { title: 'Programming', desc: 'Ship modern web applications at startup speed.', icon: Code2 },
  { title: 'Graphic Design', desc: 'Design cinematic visuals and premium UI systems.', icon: Palette },
  { title: 'Media & Editing', desc: 'Produce engaging video narratives and motion reels.', icon: Video },
  { title: 'Cyber Security', desc: 'Protect infrastructure, users, and data operations.', icon: Shield }
];

const members = [
  { name: 'Lina Sharq', role: 'AI Lead', xp: 9200, skills: ['LLMs', 'Python', 'MLOps'] },
  { name: 'Zaid Noor', role: 'Frontend Engineer', xp: 8700, skills: ['Next.js', 'UI Motion', 'TypeScript'] },
  { name: 'Maya Azam', role: 'Design Director', xp: 8100, skills: ['Branding', 'Figma', '3D'] }
];

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6 } };

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.14),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="section py-4 flex items-center justify-between">
          <div className="text-xl font-bold neon-text text-sky-300">Sharq Tech</div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            {['About','Fields','Leaderboard','Members','Projects','Contact'].map(i => <a key={i} href={`#${i.toLowerCase()}`}>{i}</a>)}
          </nav>
          <button className="rounded-2xl border border-sky-400/40 px-4 py-2 text-sky-300">Join Beta</button>
        </div>
      </header>

      <section className="section min-h-[85vh] flex flex-col justify-center relative">
        <motion.h1 {...fade} className="max-w-4xl text-5xl md:text-7xl font-black leading-tight neon-text">Futuristic Platform for Elite Technology Teams</motion.h1>
        <motion.p {...fade} className="mt-6 max-w-2xl text-slate-300">Sharq Tech merges AI, design, engineering, and security into one cinematic collaboration experience.</motion.p>
        <motion.div {...fade} className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-3xl bg-sky-400/20 px-8 py-4 text-sky-200 shadow-glow">Explore Platform</button>
          <button className="rounded-3xl border border-white/20 px-8 py-4">Join Team</button>
        </motion.div>
      </section>

      <motion.section id="about" className="section" {...fade}><h2 className="text-3xl font-bold">Mission, Vision & Innovation</h2><div className="mt-8 grid md:grid-cols-3 gap-6">{['Mission-driven tech education.','Vision of a borderless digital team.','Innovation across AI products.'].map(t=><div key={t} className="glass rounded-3xl p-6">{t}</div>)}</div><div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">{['120+ Members','45 Projects','96% Completion','24/7 Collaboration'].map(s=><div key={s} className="glass rounded-2xl p-4 text-center text-sky-200">{s}</div>)}</div></motion.section>

      <section id="fields" className="section"><h2 className="text-3xl font-bold mb-8">Fields</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{fields.map((f)=><motion.article key={f.title} whileHover={{ y:-8, scale:1.02 }} className="glass rounded-3xl p-6"><f.icon className="text-sky-300"/><h3 className="mt-4 font-semibold">{f.title}</h3><p className="mt-2 text-sm text-slate-300">{f.desc}</p></motion.article>)}</div></section>

      <section id="leaderboard" className="section"><h2 className="text-3xl font-bold mb-8">Leaderboard</h2><div className="grid md:grid-cols-3 gap-6">{['Ayla-9850 XP','Rami-9320 XP','Sahar-9010 XP'].map((u,i)=><div key={u} className="glass rounded-3xl p-6"><Trophy className="text-amber-300"/><h3 className="mt-3">#{i+1} {u.split('-')[0]}</h3><p className="text-slate-300">{u.split('-')[1]}</p><div className="mt-3 h-2 rounded bg-white/10"><div className="h-full rounded bg-sky-400" style={{width:`${90-i*7}%`}}/></div></div>)}</div></section>

      <section id="members" className="section"><h2 className="text-3xl font-bold mb-8">Members</h2><div className="grid md:grid-cols-3 gap-6">{members.map(m=><div key={m.name} className="glass rounded-3xl p-6"><div className="h-14 w-14 rounded-2xl bg-sky-400/30"/><h3 className="mt-4 font-semibold">{m.name}</h3><p className="text-slate-300 text-sm">{m.role} • {m.xp} XP</p><div className="mt-3 flex gap-2 flex-wrap">{m.skills.map(s=><span key={s} className="rounded-xl bg-white/10 px-2 py-1 text-xs">{s}</span>)}</div><div className="mt-4 flex gap-3 text-slate-300"><Github size={16}/><Linkedin size={16}/><Instagram size={16}/></div></div>)}</div></section>

      <section className="section grid md:grid-cols-2 lg:grid-cols-3 gap-6">{['AI Hack Sprint','UI Motion Cup','Cyber Defense CTF'].map(c=><div key={c} className="glass rounded-3xl p-6"><p className="text-xs text-emerald-300">Open</p><h3 className="mt-2 font-semibold">{c}</h3><p className="text-sm text-slate-300 mt-2">Deadline: 7 days • Countdown: 168:00:00</p><button className="mt-4 rounded-2xl bg-sky-400/20 px-4 py-2 text-sky-200">Join</button></div>)}</section>

      <section id="projects" className="section"><h2 className="text-3xl font-bold mb-8">Courses • Projects • Gallery</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{['AI Projects','Websites','Videos','Designs','Prompt Mastery','Fullstack Ops','Editing Pro','Secure Coding'].map(p=><div key={p} className="glass rounded-2xl p-4"><div className="h-28 rounded-xl bg-gradient-to-br from-sky-500/30 to-indigo-500/20"/><p className="mt-3 text-sm">{p}</p></div>)}</div></section>

      <section className="section"><h2 className="text-3xl font-bold mb-8">Dashboard Preview</h2><div className="glass rounded-[2rem] p-6 grid lg:grid-cols-[220px_1fr_320px] gap-6"><aside className="rounded-3xl bg-white/5 p-4 space-y-3">{['Overview','Courses','Competitions','Members','Settings'].map(i=><div key={i} className="rounded-xl bg-white/5 p-2">{i}</div>)}</aside><div className="space-y-4"><div className="grid sm:grid-cols-3 gap-4">{['XP 12,450','Tasks 32','Streak 28d'].map(s=><div key={s} className="rounded-2xl bg-white/5 p-4">{s}</div>)}</div><div className="h-52 rounded-3xl bg-white/5 p-4">Chart Placeholder</div><div className="rounded-3xl bg-white/5 p-4">Activity Feed Placeholder</div></div><div className="rounded-3xl bg-white/5 p-4">Notifications Panel</div></div></section>

      <footer id="contact" className="section pt-10 border-t border-white/10"><div className="grid md:grid-cols-2 gap-6"><div><h3 className="text-2xl font-bold">Let&apos;s build the future.</h3><p className="text-slate-300 mt-2">Contact Sharq Tech for partnerships and talent collaboration.</p><div className="mt-4 flex gap-3"><Linkedin/><Github/><Instagram/></div></div><form className="glass rounded-3xl p-6 space-y-3"><input className="w-full rounded-xl bg-white/5 p-3" placeholder="Your Name"/><input className="w-full rounded-xl bg-white/5 p-3" placeholder="Email"/><textarea className="w-full rounded-xl bg-white/5 p-3" rows={4} placeholder="Message"/><button className="rounded-2xl bg-sky-400/20 px-4 py-2 text-sky-200 inline-flex items-center gap-2"><Mail size={16}/>Send</button></form></div><p className="mt-8 text-xs text-slate-400">© 2026 Sharq Tech. All rights reserved.</p></footer>
    </main>
  );
}
