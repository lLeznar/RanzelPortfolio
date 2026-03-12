import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Send, Mail, Phone, Github, Linkedin, User, MessageSquare, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeIn } from '../../constants/animations';
import { SectionTitle } from '../animations/SectionTitle';
import { MagneticButton } from '../MagneticButton';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent' | 'copied'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Try mailto first
    const mailBody = `Hi Ranzel,\n\n${message}\n\nBest regards,\n${name}\n${email}`;
    const mailtoUrl = `mailto:ranzelmerto.rm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    try {
      window.location.href = mailtoUrl;
      setStatus('sent');
    } catch {
      // Fallback: copy to clipboard
      const clipText = `To: ranzelmerto.rm@gmail.com\nSubject: ${subject}\n\n${mailBody}`;
      navigator.clipboard.writeText(clipText);
      setStatus('copied');
    }

    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <motion.section
      data-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="min-h-screen sm:h-screen flex flex-col justify-center snap-start snap-always py-16 md:py-0 overflow-y-auto overflow-x-hidden pt-20 pb-10"
    >
      <div className="flex-1 flex flex-col justify-center min-h-max">
        <SectionTitle icon={Send} title="Contact Me" />

        <motion.div variants={fadeIn} className="max-w-2xl mx-auto w-full text-center mb-10">
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Have a project in mind or want to collaborate? Send me a message directly — I'm always open to new ideas, interesting projects, and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-4xl mx-auto w-full">
          {/* ── Left: Contact Info ──────────────────────────────── */}
          <motion.div variants={fadeIn} className="lg:col-span-2 flex flex-col gap-4">
            {/* Email Card */}
            <MagneticButton>
              <a
                href="mailto:ranzelmerto.rm@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-500 group w-full"
              >
                <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors">ranzelmerto.rm@gmail.com</div>
                </div>
              </a>
            </MagneticButton>

            {/* Phone Card */}
            <MagneticButton>
              <a
                href="tel:+639366808540"
                className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-500 group w-full"
              >
                <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors">+639366808540</div>
                </div>
              </a>
            </MagneticButton>

            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              <MagneticButton>
                <a
                  href="https://github.com/lLeznar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group flex-1"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">GitHub</span>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://www.linkedin.com/in/ranzel-aris-merto-b51aa6296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl glass-card border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group flex-1"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">LinkedIn</span>
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* ── Right: Contact Form ─────────────────────────────── */}
          <motion.form
            variants={fadeIn}
            onSubmit={handleSubmit}
            className="lg:col-span-3 flex flex-col gap-4 p-6 md:p-8 rounded-2xl glass-card border border-slate-800"
          >
            {/* Name & Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.08)] text-sm text-slate-200 placeholder:text-slate-600 transition-all duration-300 font-mono"
                />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.08)] text-sm text-slate-200 placeholder:text-slate-600 transition-all duration-300 font-mono"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <MessageSquare size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.08)] text-sm text-slate-200 placeholder:text-slate-600 transition-all duration-300 font-mono"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.08)] text-sm text-slate-200 placeholder:text-slate-600 transition-all duration-300 resize-none font-mono"
            />

            {/* Submit Button */}
            <MagneticButton>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400/30 hover:border-cyan-400/60 hover:from-cyan-500/30 hover:to-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] text-cyan-300 font-semibold text-sm tracking-wide transition-all duration-500 group"
              >
                {status === 'sent' ? (
                  <>
                    <span>Message Ready!</span>
                    <span className="text-emerald-400">✓</span>
                  </>
                ) : status === 'copied' ? (
                  <>
                    <span>Copied to Clipboard!</span>
                    <span className="text-emerald-400">✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </MagneticButton>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        variants={fadeIn}
        className="pb-8 pt-12 border-t border-slate-800/50 text-center flex flex-col items-center gap-3 mt-auto"
      >
        <p className="text-sm font-mono text-slate-600">
          © {new Date().getFullYear()} <span className="text-slate-500">Ranzel Aris A. Merto</span>
        </p>
      </motion.footer>
    </motion.section>
  );
}
