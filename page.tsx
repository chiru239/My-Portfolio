import { useTypewriter } from 'react-simple-typewriter';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioPage() {
  const [text] = useTypewriter({
    words: ['AI/ML Developer', 'Frontend Engineer', 'Python Expert'],
    loop: 0,
    delaySpeed: 2000,
  });

  const backgroundImage = {
    backgroundImage: `url('https://i.ibb.co/NLF7NB1/background.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="text-white font-sans">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col justify-center items-center h-screen text-center relative" style={backgroundImage}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            Hi! I’m <span className="text-yellow-300">Chiranjeevi Charan Meduri</span>
          </h1>
          <h2 className="text-3xl mt-4">
            <span>{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <div className="mt-6 flex space-x-6 justify-center">
            <a href="https://github.com/chiru239" target="_blank" rel="noreferrer">
              <Github className="w-7 h-7 hover:text-yellow-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/chiranjeevicharan" target="_blank" rel="noreferrer">
              <Linkedin className="w-7 h-7 hover:text-yellow-400 transition" />
            </a>
          </div>
        </motion.div>
        <div className="absolute bottom-10 animate-bounce z-10">
          <a href="#overview" className="text-white text-xl">↓ Scroll</a>
        </div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </section>

      {/* Second Page with 3 Clickable Boxes */}
      <section id="overview" className="h-screen flex flex-col justify-center items-center space-y-10 px-4 relative" style={backgroundImage}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl z-10">
          <Link href="#about" className="bg-white/20 hover:bg-white/40 transition p-6 rounded-lg text-center cursor-pointer backdrop-blur-lg border border-white/30">
            <img src="https://i.ibb.co/MB3Nn3G/about.jpg" alt="About Me" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-2xl font-semibold text-white">About Me</h3>
          </Link>
          <Link href="#projects" className="bg-white/20 hover:bg-white/40 transition p-6 rounded-lg text-center cursor-pointer backdrop-blur-lg border border-white/30">
            <h3 className="text-2xl font-semibold text-white">My Projects</h3>
          </Link>
          <Link href="#resume" className="bg-white/20 hover:bg-white/40 transition p-6 rounded-lg text-center cursor-pointer backdrop-blur-lg border border-white/30">
            <h3 className="text-2xl font-semibold text-white">Resume</h3>
          </Link>
        </div>
      </section>

      {/* Project Section with cards */}
      <section id="projects" className="py-16 px-6 bg-black text-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[{
              title: 'Sign Language Translator',
              link: 'https://github.com/chiru239/SignLanguageTranslation',
              image: 'https://i.ibb.co/w4d6jJg/signlanguage.jpg',
            },
            {
              title: 'Object Detection',
              link: 'https://github.com/chiru239/Object-Detection-using-Python',
              image: 'https://i.ibb.co/h8R0c9W/objectdetection.jpg',
            },
            {
              title: 'Flood Prediction',
              link: 'https://github.com/chiru239/Flood-Prediction',
              image: 'https://i.ibb.co/0CyFrjf/floodprediction.jpg',
            },
            {
              title: 'Chatbot',
              link: 'https://github.com/chiru239/chat-bot',
              image: 'https://i.ibb.co/hKxrw1D/chatbot.jpg',
            },
            {
              title: 'Todos App',
              link: 'https://github.com/chiru239/todo',
              image: 'https://i.ibb.co/DKqtfxz/todos.jpg',
            },
          ].map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noreferrer" className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}