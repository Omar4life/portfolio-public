import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FAFAFA]/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <span className="font-poppins font-bold text-xl tracking-tight"></span>
        <div className="flex gap-8 text-sm font-medium font-inter">
          <a href="#about" className="hover:text-[#0052FF] transition-colors duration-300">About</a>
          <a href="#experience" className="hover:text-[#0052FF] transition-colors duration-300">Experience</a>
          <a href="#contact" className="hover:text-[#0052FF] transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ profile }: { profile: any }) {
  if (!profile) return null;
  const headlineParts = profile.headline.split('|').map((s: string) => s.trim());

  return (
    <section className="pt-[200px] pb-[120px] min-h-[80vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-poppins font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8 text-[#171717]">
          {profile.name}
        </h1>
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl font-inter text-gray-600 leading-relaxed mb-12">
            {headlineParts.map((part: string, i: number) => (
              <React.Fragment key={i}>
                {part}
                {i !== headlineParts.length - 1 && (
                  <span className="text-[#0052FF] mx-3 font-light">|</span>
                )}
              </React.Fragment>
            ))}
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#171717] text-white font-medium font-inter hover:bg-[#0052FF] transition-all duration-300 ease-out hover:-translate-y-1"
            >
              Let's connect
            </a>
            <div className="flex items-center gap-4">
              <a href={`mailto:${profile.email}`} className="p-3 text-gray-500 hover:text-[#0052FF] transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function About({ profile }: { profile: any }) {
  if (!profile) return null;
  const paragraphs = profile.summary.split('\n').filter((p: string) => p.trim() !== '');
  
  return (
    <section id="about" className="py-[120px] border-t border-gray-200">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16"
      >
        <div>
          <h2 className="font-poppins font-bold text-3xl mb-4 text-[#171717]">About</h2>
          <p className="font-roboto text-gray-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0052FF] rounded-full"></span>
            {profile.location}
          </p>
        </div>
        <div className="space-y-6 font-inter text-lg text-gray-700 leading-relaxed">
          {paragraphs.map((p: string, i: number) => (
            <p key={i} className={p.startsWith('→') ? "pl-4 border-l-2 border-[#0052FF] text-[#171717] font-medium" : ""}>
              {p}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Experience({ experiences }: { experiences: any[] }) {
  if (!experiences.length) return null;
  return (
    <section id="experience" className="py-[120px] border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-poppins font-bold text-3xl mb-16 text-[#171717]">Experience</h2>
        <div className="space-y-24">
          {experiences.map((exp) => (
            <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 group">
              <div className="font-roboto">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">{exp.period}</p>
                <h3 className="font-poppins font-bold text-xl text-[#171717] mb-1">{exp.role}</h3>
                <p className="text-[#0052FF] font-medium">{exp.organization}</p>
              </div>
              <div className="font-inter text-gray-600 leading-relaxed">
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Skills({ skills }: { skills: any[] }) {
  if (!skills.length) return null;
  const topSkills = skills.filter(s => s.type === 'top');
  const languages = skills.filter(s => s.type === 'language');

  return (
    <section className="pr-0 md:pr-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-poppins font-bold text-3xl mb-12 text-[#171717]">Skills</h2>
        
        <div className="mb-12">
          <h3 className="font-poppins font-semibold text-lg mb-6 text-[#171717] border-b border-gray-200 pb-2">Core</h3>
          <ul className="space-y-4">
            {topSkills.map(skill => (
              <li key={skill.id} className="font-inter text-gray-700 flex items-center gap-3">
                <ArrowRight size={16} className="text-[#0052FF]" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-poppins font-semibold text-lg mb-6 text-[#171717] border-b border-gray-200 pb-2">Languages</h3>
          <ul className="space-y-4">
            {languages.map(skill => (
              <li key={skill.id} className="font-inter text-gray-700 flex justify-between items-center">
                <span>{skill.name.split(' (')[0]}</span>
                <span className="text-sm text-gray-400 font-roboto">{skill.name.match(/\((.*?)\)/)?.[1] || skill.name.split(' (')[1]?.replace(')','')}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

function Certifications({ certifications }: { certifications: any[] }) {
  if (!certifications.length) return null;
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-poppins font-bold text-3xl mb-12 text-[#171717]">Certifications</h2>
        <ul className="space-y-6">
          {certifications.map(cert => (
            <li key={cert.id} className="font-inter text-gray-700 group flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 bg-[#0052FF] rounded-full group-hover:scale-150 transition-transform duration-300 shrink-0"></div>
              <span className="leading-tight">{cert.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function Education({ education }: { education: any[] }) {
  if (!education.length) return null;
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="font-poppins font-bold text-3xl mb-12 text-[#171717]">Education</h2>
        <div className="space-y-8">
          {education.map(edu => (
            <div key={edu.id}>
              <h3 className="font-poppins font-bold text-xl text-[#171717]">{edu.institution}</h3>
              <p className="font-inter text-gray-500 mt-1">{edu.degree}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-[120px] border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-poppins font-bold text-4xl mb-6 text-[#171717]">Let's build something.</h2>
        <p className="font-inter text-gray-500 mb-12 text-lg">
          Interested in AI, tech, or collaborating? Drop a message.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="font-roboto text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full bg-transparent border-b border-gray-300 py-3 px-0 focus:outline-none focus:border-[#0052FF] transition-colors font-inter placeholder:text-gray-400"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-roboto text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full bg-transparent border-b border-gray-300 py-3 px-0 focus:outline-none focus:border-[#0052FF] transition-colors font-inter placeholder:text-gray-400"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="font-roboto text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={4}
              className="w-full bg-transparent border-b border-gray-300 py-3 px-0 focus:outline-none focus:border-[#0052FF] transition-colors font-inter placeholder:text-gray-400 resize-none"
              placeholder="Hi Omar, I saw your work..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full py-4 bg-[#171717] text-white font-medium font-inter hover:bg-[#0052FF] transition-all duration-300 ease-out disabled:opacity-50 mt-8"
          >
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
          {status === 'error' && <p className="text-red-500 text-sm text-center mt-4 font-inter">Something went wrong. Please try again.</p>}
          {status === 'success' && <p className="text-green-600 text-sm text-center mt-4 font-inter">Thanks for reaching out! I'll get back to you soon.</p>}
        </form>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 text-center font-roboto text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Omar El Idrissi. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  const [profile, setProfile] = useState<any>(null);
  const [experiences, setExperiences] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [certifications, setCertifications] = useState<any[]>([]);
  const [education, setEducation] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profRes, expRes, skillsRes, certRes, eduRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/experiences'),
          fetch('/api/skills'),
          fetch('/api/certifications'),
          fetch('/api/education')
        ]);
        
        if (profRes.ok) setProfile(await profRes.json());
        if (expRes.ok) setExperiences(await expRes.json());
        if (skillsRes.ok) setSkills(await skillsRes.json());
        if (certRes.ok) setCertifications(await certRes.json());
        if (eduRes.ok) setEducation(await eduRes.json());
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="w-8 h-8 border-4 border-[#0052FF] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#171717] selection:bg-[#0052FF] selection:text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 md:px-12">
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experiences={experiences} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-24 border-t border-gray-200">
          <Skills skills={skills} />
          <div className="space-y-16">
            <Certifications certifications={certifications} />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
