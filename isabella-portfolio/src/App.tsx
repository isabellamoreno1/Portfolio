import { motion } from "framer-motion";
import headshot from "./components/headshot.jpg";
import TravelGlobe from "./components/globe";
import { useState } from "react";

export default function App() {
  const [flyFn, setFlyFn] = useState<(() => void) | null>(null);
  return (
    <main className="text-[#1F2937] font-sans scroll-smooth">
      
      {/* Nav Bar */}
      <nav className="fixed top-0 w-full z-50">
        <div className="backdrop-blur-mdbg-white/30 backdrop-blur-md border-b border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">
            <div className="flex space-x-20 font-prata text-xl text-[#430a13]">
              {["About", "Travel", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative
                    transition-colors duration-300
                    hover:text-[#9a4652]

                    after:absolute after:left-1/2 after:-bottom-1
                    after:h-[1.5px] after:w-0
                    after:bg-[#9a4652]
                    after:transition-all after:duration-300
                    after:-translate-x-1/2
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              ))}
      </div>
    </div>
  </div>
</nav>

{/* Home Page Background */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#C88994]">
  <div
  className="absolute inset-0"
  style={{
    background: `
      radial-gradient(
        circle at 50% 35%,
        rgba(255,255,255,0.28) 0%,
        rgba(255,255,255,0.12) 25%,
        transparent 55%
      ),
      linear-gradient(
        180deg,
        #F2B6C1 0%,
        #E47A8F 45%,
        #C74864 100%
      )
    `
  }}
/>
  {/* Home Page Text */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
  <motion.p className="tracking-[0.5em] text-sm text-[#7C2D45]/80 mb-12 font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      PORTFOLIO 2026
    </motion.p>

    <motion.h1
      className="text-[6rem] md:text-[7rem] font-serifItalic2 text-[#4A0F2A] leading-none"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      Isabella
    </motion.h1>

    <motion.h2
      className="text-2xl tracking-[0.6em] text-[#6B1E3A] mt-6 mb-10 font-semibold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      MORENO
    </motion.h2>

    <motion.div
      className="w-20 h-[2px] bg-[#4A0F2A] mx-auto mb-12"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    />

<motion.a
      href="#projects"
      className="inline-block bg-[#4A0F2A] hover:bg-[#3D0A05] text-white px-14 py-5 rounded-full text-sm tracking-widest font-semibold shadow-2xl transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      VIEW MY WORK
    </motion.a>

  </div>

  <style>{`
    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
</section>


{/* About Me Section */}
<section id="about" className="py-44 px-8 bg-[#F1D1D8]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-28 items-center">

    <motion.div
      className="max-w-xl"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2 className="text-6xl font-serifItalic2 text-[#5A1633] leading-tight">
        About Me
      </h2>

      <div className="w-20 h-[2px] bg-[#7A1E3A] mt-6 mb-14" />

      <p className="text-[#6D2542] text-lg font-serif leading-relaxed mb-10">
        I really enjoy the middle ground where engineering meets the person actually using the app. I think the best software happens when you're paying just
        as much attention to the user's experience as you are to the logic happening in the background.
      </p>

      <p className="text-[#6D2542] text-lg font-serif leading-relaxed mb-10">
        I am drawn to projects where engineering and business goals overlap. I enjoy the challenge of making technical decisions that actually lead to better
        results for the product and the people using it.
      </p>

      <p className="text-[#6D2542] text-lg font-serif leading-relaxed">
        I'm focused on growing into an engineer who can build, collaborate, and think beyond the surface level!
      </p>
    </motion.div>

    {/* Headshot Picture */}
    <motion.div
      className="relative flex justify-center"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative w-[400px]">
      <div className="absolute inset-0 bg-white rounded-3xl shadow-xl -z-10" />
        <img
          src={headshot}
          alt="Isabella Moreno"
          className="w-full h-[520px] object-cover rounded-3xl shadow-lg transition duration-500 hover:scale-[1.02]"
        />
      </div>
    </motion.div>

  </div>
</section>


{/* Globe Section */}
<section id="travel" className="bg-[#f8f5fb] pt-20">
  <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-start gap-12">
    
    <div className="md:w-80 shrink-0 pt-4">
      <h2 className="text-5xl font-serifItalic2 text-[#430A13] leading-tight">
        My Travels
      </h2>
      <div className="w-16 h-[2px] bg-[#7A1E3A] mt-5 mb-8" />
      <p className="text-[#6D2542] font-serif text-base leading-relaxed mb-6">
      When I'm not debugging, I'm traveling. I love exploring new places, trying local food, and picking up bits of different languages along the way.

      </p>
      <p className="text-[#6D2542] font-serif text-base leading-relaxed mb-6">
      I'm fluent in English and Spanish, currently learning Italian, and I also know some phrases in French, Polish, and Russian.
      </p>
      <p className="text-[#9a4652] font-serif text-sm italic">
      Click any pin to see photos from that trip.
      </p>
      <button
        onClick={() => flyFn?.()}
        className="mt-8 flex items-center gap-2 bg-[#4A0F2A] hover:bg-[#3D0A05] text-white px-6 py-3 rounded-full text-sm tracking-widest font-semibold shadow-lg transition duration-300 hover:scale-105"
      >
        ✈ Take Me Somewhere
      </button>

    </div>

    <div className="flex-1 -mt-16">
    <TravelGlobe onReady={(fn) => setFlyFn(() => fn)} />
    </div>

  </div>
</section>
    



  
<section id="projects" className="py-32 px-6 bg-[#FBE4E7]">
  <motion.div
    className="max-w-5xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-5xl font-serifItalic2 text-[#430A13] mb-16 text-center">
      Projects
    </h2>

    <div className="space-y-16">

      {/* StudyBuddy */}
      <div className="bg-white rounded-3xl p-12 shadow-md">
        <h3 className="text-4xl font-serif tracking-[0.08em] text-[#7A1E2B] mb-4">
          StudyBuddy
        </h3>

        <p className="text-lg text-[#5C1A24] leading-relaxed mb-6">
          StudyBuddy is a full-stack platform designed to help students find compatible
          study partners based on shared schedules, study habits, and goals. Users can
          connect with matches, message one another, and plan study sessions or join
          group study spaces.
        </p>

        <span className="inline-block px-5 py-2 rounded-full bg-[#EFE7EA] text-[#7A1E2B] text-sm">
          TypeScript • React • MongoDB
        </span>
      </div>

      {/* TripTally */}
      <div className="bg-white rounded-3xl p-12 shadow-md">
        <h3 className="text-4xl font-serif tracking-[0.08em] text-[#7A1E2B] mb-4">
          TripTally
        </h3>

        <p className="text-lg text-[#5C1A24] leading-relaxed mb-6">
          TripTally is a full-stack web application that helps groups manage and divide
          shared travel expenses. It allows users to add expenses, track individual
          payments, and automatically calculate balances so costs are split fairly
          across the group in real time.
        </p>

        <span className="inline-block px-5 py-2 rounded-full bg-[#EFE7EA] text-[#7A1E2B] text-sm">
          Next.js • MongoDB • REST APIs
        </span>
      </div>

    </div>
  </motion.div>
</section>








<section
  id="contact"
  className="py-32 px-6 bg-gradient-to-b from-[#f0dce1] to-[#f7e9ee]"
>
  <motion.div
    className="max-w-3xl mx-auto text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-5xl font-serifItalic2 text-[#430A13] mb-6">
      Let’s Connect
    </h2>

    <p className="text-lg text-[#5C1A24] leading-relaxed mb-14">
      I’m open to opportunities in frontend development, software engineering,
      and product-focused or creative roles.  
      Feel free to reach out if you’d like to collaborate or learn more about my work.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-6">
      {/* Email */}
      <a
        href="mailto:your@email.com"
        className="
          px-8 py-4 rounded-2xl
          border border-[#7A1E2B]
          text-[#7A1E2B]
          font-prata text-lg
          transition
          hover:bg-[#7A1E2B]
          hover:text-white
        "
      >
        Email Me
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-8 py-4 rounded-2xl
          bg-[#7A1E2B]
          text-white
          font-prata text-lg
          transition
          hover:bg-[#9a4652]
        "
      >
        LinkedIn
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-8 py-4 rounded-2xl
          border border-[#E6AAB2]
          text-[#5C1A24]
          font-prata text-lg
          transition
          hover:border-[#7A1E2B]
          hover:text-[#7A1E2B]
        "
      >
        GitHub
      </a>
    </div>
  </motion.div>
</section>


    </main>
  );
}
