import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-blue-300 uppercase tracking-[0.2em] text-xs mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-slate-300">{subtitle}</p>
    </motion.div>
  );
}
