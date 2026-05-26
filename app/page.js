'use client';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Code2, Palette, Film, Shield, Trophy, Github, Linkedin, Twitter, Bell } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { fields, leaderboard, members } from '../data/mockData';

const icons = [Cpu, Sparkles, Code2, Palette, Film, Shield];

const glass = 'bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-glow';

export default function Home() {
  return <main className="bg-deep text-white min-h-screen overflow-hidden">
    <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,.2),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,.18),transparent_35%)]" />
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"><h1 className="text-xl font-bold text-blue-300">Sharq Tech</h1><div className="hidden md:flex gap-7 text-sm text-slate-300"><span>Platform</span><span>Leaderboard</span><span>Projects</span><span>Contact</span></div></div>
    </nav>
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">Build the Future with <span className="text-blue-400">Sharq Tech</span>.</motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}} className="text-slate-300 mt-6 max-w-2xl">A cinematic technology team platform for innovation, competition, learning, and high-impact digital production.</motion.p>
      <div className="flex gap-4 mt-10"><button className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-400 transition">Explore Platform</button><button className="px-6 py-3 rounded-2xl border border-blue-400/40 hover:bg-blue-500/10 transition">Join Team</button></div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-20"><SectionTitle eyebrow="About" title="Mission-Driven Innovation Team" subtitle="Sharq Tech combines engineering, design, media, and security talents into one collaborative ecosystem." /><div className="grid md:grid-cols-4 gap-4">{['Mission','Vision','Innovation','Community'].map((t,i)=><div key={t} className={`${glass} p-6`}><h3 className="text-lg">{t}</h3><p className="text-slate-400 text-sm mt-2">{i===0?'Empower builders through real-world challenges.':'Create elite, collaborative talent with measurable outcomes.'}</p><p className="mt-5 text-3xl text-blue-300 font-semibold">{[120,35,98,14][i]}{i===2?'%':'+'}</p></div>)}</div></section>

    <section className="max-w-7xl mx-auto px-6 py-20"><SectionTitle eyebrow="Fields" title="Core Expertise" subtitle="Six futuristic tracks with premium interactive cards." /><div className="grid md:grid-cols-3 gap-5">{fields.map((f,idx)=>{const I=icons[idx];return <motion.article whileHover={{y:-8}} key={f.title} className={`${glass} p-6 hover:border-blue-300/40 transition`}><I className="text-blue-300" /><h3 className="mt-3 text-xl">{f.title}</h3><p className="text-slate-400 mt-2">{f.desc}</p></motion.article>})}</div></section>

    <section className="max-w-7xl mx-auto px-6 py-20"><SectionTitle eyebrow="Leaderboard" title="Top Performers" subtitle="XP-ranked talents pushing the standards higher each week." /><div className="grid md:grid-cols-3 gap-4">{leaderboard.map((u)=> <div key={u.name} className={`${glass} p-6`}><div className="flex items-center justify-between"><span className="text-2xl">#{u.rank}</span><Trophy className="text-yellow-300"/></div><p className="mt-4 font-medium">{u.name}</p><p className="text-slate-300">{u.xp.toLocaleString()} XP</p><div className="h-2 rounded-full bg-white/10 mt-4"><div className="h-2 rounded-full bg-blue-400" style={{width:`${88-u.rank*10}%`}}/></div></div>)}</div></section>

    <section className="max-w-7xl mx-auto px-6 py-20"><SectionTitle eyebrow="Members" title="Team Profiles" subtitle="Cross-functional builders with XP, skills, and social links." /><div className="grid md:grid-cols-3 gap-4">{members.map(m=><div key={m.name} className={`${glass} p-6`}><div className="h-16 w-16 rounded-2xl bg-blue-500/20 border border-blue-400/40" /><h3 className="mt-4 text-xl">{m.name}</h3><p className="text-blue-200 text-sm">{m.role}</p><div className="flex flex-wrap gap-2 mt-3">{m.skills.map(s=><span key={s} className="px-3 py-1 text-xs rounded-xl bg-white/10">{s}</span>)}</div><p className="mt-3 text-slate-300">{m.xp} XP</p><div className="flex gap-3 mt-4 text-slate-300"><Github size={16}/><Linkedin size={16}/><Twitter size={16}/></div></div>)}</div></section>

    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-5">{['Competitions','Courses','Projects','Gallery'].map((n,i)=><div key={n} className={`${glass} p-7`}><h3 className="text-2xl">{n}</h3><p className="mt-3 text-slate-300">{['Live challenges with deadlines and join CTA.','Premium learning tracks with duration, level, and start action.','AI apps, websites, videos, and design showcases.','Responsive image/video grid with cinematic hover zoom.'][i]}</p><button className="mt-6 px-5 py-2 rounded-xl bg-blue-500/90">Open</button></div>)}</section>

    <section className="max-w-7xl mx-auto px-6 py-20"><SectionTitle eyebrow="Dashboard" title="Futuristic Dashboard Preview" subtitle="Sidebar navigation, stats, activity feed, and notifications." /><div className={`${glass} p-6 grid lg:grid-cols-[220px_1fr_300px] gap-5`}><aside className="bg-white/5 rounded-2xl p-4 space-y-3"><p>Overview</p><p>XP & Ranks</p><p>Competitions</p><p>Media</p></aside><div className="space-y-4"><div className="grid sm:grid-cols-3 gap-3">{['Total XP','Active Members','Open Challenges'].map(t=><div key={t} className="rounded-2xl bg-white/5 p-4"><p className="text-sm text-slate-400">{t}</p><p className="text-2xl mt-2">{Math.floor(Math.random()*900+100)}</p></div>)}</div><div className="rounded-2xl bg-white/5 p-4 h-40">Chart Placeholder</div><div className="rounded-2xl bg-white/5 p-4">Activity Feed Placeholder</div></div><div className="rounded-2xl bg-white/5 p-4"><div className="flex items-center gap-2"><Bell size={16}/>Notifications</div><ul className="mt-4 space-y-3 text-sm text-slate-300"><li>New challenge starts in 12h</li><li>UI track weekly results published</li><li>3 course modules unlocked</li></ul></div></div></section>

    <footer className="max-w-7xl mx-auto px-6 py-20"><div className={`${glass} p-8 grid md:grid-cols-2 gap-8`}><div><h3 className="text-2xl">Contact Sharq Tech</h3><p className="text-slate-300 mt-2">Join our innovation network and get weekly platform updates.</p><div className="flex gap-3 mt-4 text-slate-300"><Github/><Linkedin/><Twitter/></div></div><div className="space-y-3"><input className="w-full rounded-2xl bg-white/5 border border-white/10 p-3" placeholder="Email address"/><textarea className="w-full rounded-2xl bg-white/5 border border-white/10 p-3" rows={4} placeholder="Message"/><button className="px-5 py-3 rounded-2xl bg-blue-500">Send</button></div></div><p className="text-center text-slate-500 mt-6">© 2026 Sharq Tech. All rights reserved.</p></footer>
  </main>
}
