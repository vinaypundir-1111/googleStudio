import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  Users, 
  TrendingDown, 
  Globe2,
  Mail,
  Linkedin,
  Menu,
  X,
  CreditCard,
  Receipt,
  Wallet,
  FileText
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl">Z</span>
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tighter">ZookBooks</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Us</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#contact" className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-300">Book a Consultation</a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Why Us</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">How it Works</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-black text-white py-4 rounded-xl text-center font-bold hover:bg-blue-600 transition-colors">Book a Consultation</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const headlines = [
    "While You Sleep, We Close Your Books.",
    "Reduce Your Accounting Costs by 60%—Without Compromise."
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">
              Your Books. Done Before Your Morning Coffee. <br />
              <span className="text-blue-600 relative block h-[2.8em] md:h-[2.4em] overflow-hidden align-top mt-4 text-[0.65em] max-w-3xl">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="block leading-tight"
                  >
                    {headlines[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Dedicated offshore accountants for US 🇺🇸, UK 🇬🇧, AU 🇦🇺 & NZ 🇳🇿 businesses. 
              Accurate, reliable, and cost-effective bookkeeping—delivered overnight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="px-8 py-5 bg-black text-white rounded-2xl font-bold text-lg hover:bg-blue-600 hover:shadow-blue-600/20 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-black/10">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-5 bg-white text-black border-2 border-slate-200 rounded-2xl font-bold text-lg hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center justify-center">
                Start Your Free Trial Week
              </button>
            </div>

            <div className="flex items-center gap-4 text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-sm md:text-base">
                Trusted by growing businesses across Australia. <br className="hidden md:block" />
                Expanding to US, UK & New Zealand.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const regions = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "New Zealand", flag: "🇳🇿" }
  ];
  const tools = ["Xero", "Zoho Books", "QuickBooks", "Tally"];
  const standards = ["GAAP", "IFRS"];

  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Serving Businesses Across</p>
            <div className="flex flex-wrap gap-4">
              {regions.map(r => (
                <span key={r.name} className="text-sm font-semibold text-slate-600 flex items-center gap-1.5">
                  <span className="text-lg">{r.flag}</span> {r.name}
                </span>
              ))}
            </div>
          </div>
          <div className="md:border-x border-slate-200 md:px-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Working with Standards</p>
            <div className="flex gap-6">
              {standards.map(s => (
                <span key={s} className="text-lg font-black text-slate-800">{s}</span>
              ))}
            </div>
          </div>
          <div className="md:pl-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Preferred Tools</p>
            <div className="flex gap-8 items-center">
              {tools.map(t => (
                <span key={t} className="text-sm font-bold text-slate-500">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Bookkeeping",
      desc: "Accurate, up-to-date books maintained daily or weekly.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Accounts Payable",
      desc: "Manage bills, vendor payments, and due schedules effortlessly.",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "Accounts Receivable",
      desc: "Track invoices, follow-ups, and improve your cash flow.",
      icon: <Receipt className="w-6 h-6" />
    },
    {
      title: "Bank Reconciliation",
      desc: "Ensure every transaction is accounted for—no surprises.",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "Financial Reporting",
      desc: "Clear, actionable reports to help you make better decisions.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Payroll & Compliance",
      desc: "Stay compliant with local regulations (GST, VAT & more).",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Everything Your Finance Team Needs—Handled.</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            From daily bookkeeping to financial reporting, we take care of it all—so you can focus on growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  const points = [
    { title: "Save up to 60%", desc: "Dramatically reduce your accounting overhead without sacrificing quality.", icon: <TrendingDown /> },
    { title: "Dedicated Accountant", desc: "A professional who knows your business inside and out.", icon: <Users /> },
    { title: "Overnight Delivery", desc: "Work gets done while you sleep. Wake up to updated books.", icon: <Clock /> },
    { title: "Scalable Team", desc: "Easily expand your finance operations as your business grows.", icon: <TrendingDown className="rotate-180" /> },
    { title: "100% Data Security", desc: "Enterprise-grade confidentiality and security protocols.", icon: <ShieldCheck /> },
    { title: "Seamless Sync", desc: "Effortless communication across all major global time zones.", icon: <Globe2 /> }
  ];

  return (
    <section id="why-us" className="section-padding bg-black text-white overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Why Businesses Choose ZookBooks</h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            We're not just a vendor. We're your offshore finance operations partner, built for speed and accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {points.map((p, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                {p.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Needs",
      desc: "Share your current setup, tools, and requirements. We'll build a tailored plan."
    },
    {
      num: "02",
      title: "Get Your Dedicated Accountant",
      desc: "We assign a skilled professional aligned to your business and local standards."
    },
    {
      num: "03",
      title: "Receive Accurate Books",
      desc: "Daily/weekly updates delivered while you sleep. On time, every time."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Simple. Seamless. Scalable.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />
          
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
              <span className="text-6xl font-black text-slate-100 absolute -top-6 left-8">{s.num}</span>
              <h3 className="text-2xl font-bold mb-4 relative z-10 pt-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "ZookBooks transformed our accounting process. We now wake up to fully updated books every day. It’s like having an in-house team—at a fraction of the cost.",
      author: "Sarah Jenkins",
      role: "CEO, TechFlow Australia"
    },
    {
      text: "Their accuracy and consistency are outstanding. The time zone advantage alone has improved our operations significantly.",
      author: "David Miller",
      role: "Founder, Miller & Co. (UK)"
    },
    {
      text: "We reduced our accounting costs by more than 50% without compromising quality. Highly recommend ZookBooks.",
      author: "James Wilson",
      role: "Director, GrowthOps NZ"
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div>
                <p className="font-bold text-lg">{r.author}</p>
                <p className="text-slate-500 text-sm">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Positioning = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
          
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              More Than Outsourcing—Your Offshore Accounting Team
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-10">
              ZookBooks is not just a service provider—we become an extension of your business. 
              Our team works behind the scenes so your finances are always up-to-date, accurate, and ready when you need them.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-300" />
                <span className="font-bold">Global Standards</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-300" />
                <span className="font-bold">Real-time Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-300" />
                <span className="font-bold">Seamless Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black mb-8">Let’s Talk</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Tell us about your business and we’ll show you how much you can save. 
              Our experts are ready to build your dedicated offshore team.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-bold">hello@zookbooks.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Globe2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Global HQ</p>
                  <p className="text-lg font-bold">Serving clients globally from India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Work Email</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Country</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all duration-300 shadow-lg shadow-blue-600/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">Z</span>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tighter">ZookBooks</span>
            </div>
            <p className="text-slate-500 text-lg max-w-sm mb-8">
              Your Offshore Accounting Team. 
              High-quality, cost-efficient finance operations for global businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-black transition-colors">Bookkeeping</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Accounts Payable</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Accounts Receivable</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Financial Reporting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Why Offshore?</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
          <p>© 2026 ZookBooks. All rights reserved.</p>
          <p>Serving clients globally from India</p>
        </div>
      </div>
    </footer>
  );
};

const CTASection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8">Start Saving on Your Accounting Today</h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            Get expert bookkeeping support without the overhead of an in-house team. 
            Join hundreds of businesses scaling with ZookBooks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-10 py-6 bg-black text-white rounded-2xl font-bold text-xl hover:bg-blue-600 hover:shadow-blue-600/20 transition-all duration-300 shadow-xl shadow-black/10">
              Book a Free Consultation
            </button>
            <button className="px-10 py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-black transition-all duration-300 shadow-xl shadow-blue-600/20">
              Try Us Free for 7 Days
            </button>
          </div>
          <p className="text-slate-500 font-medium">
            No long-term contracts. No hidden costs. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <ValueProp />
        <HowItWorks />
        <Testimonials />
        <Positioning />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
