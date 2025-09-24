'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import TypingText from '@/components/TypingText';
import PasswordProtection from '@/components/PasswordProtection';

export default function Home() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if user is already authenticated in this session
    const hasAccess = sessionStorage.getItem('portfolioAccess') === 'granted';
    if (hasAccess) {
      setIsAuthenticated(true);
    }
  }, []);


  const handlePasswordCorrect = () => {
    setIsAuthenticated(true);
  };

  // Show loading state while checking authentication
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onPasswordCorrect={handlePasswordCorrect} />;
  }


  return (
    <div>
    <section className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center px-4">
      {/* Outer Space Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Stars */}
      {isClient && (
        <div className="absolute inset-0">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>
      )}


          {/* Shooting Star */}
          <motion.div
            className="absolute w-4 h-4 bg-white rounded-full shadow-2xl z-20"
            style={{
              left: '-40px',
              top: '15%',
            }}
            animate={{
              x: ['0px', '120vw'],
              y: ['0px', '70vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
          
          {/* Shooting Star Trail */}
          <motion.div
            className="absolute w-32 h-2 bg-gradient-to-r from-white via-yellow-200 to-transparent rounded-full z-20"
            style={{
              left: '-40px',
              top: '15%',
            }}
            animate={{
              x: ['0px', '120vw'],
              y: ['0px', '70vh'],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />

          {/* Rotating Orbit */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-5">
            {/* Outer Orbit Ring */}
            <motion.div
              className="absolute inset-0 border-2 border-gray-300 rounded-full opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Middle Orbit Ring */}
            <motion.div
              className="absolute inset-8 border border-gray-400 rounded-full opacity-40"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Orbit Ring */}
            <motion.div
              className="absolute inset-16 border border-gray-500 rounded-full opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Orbit Dots */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`orbit-dot-${i}`}
                className="absolute w-2 h-2 bg-gray-400 rounded-full"
                style={{
                  left: `${50 + Math.cos((i * 45) * Math.PI / 180) * 40}%`,
                  top: `${50 + Math.sin((i * 45) * Math.PI / 180) * 40}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Bio Content - Center */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: 'Orbitron, system-ui, -apple-system, sans-serif' }}>
            <TypingText key="main-name" text="Hi, my name is Mario Onoh" delay={0} isInView={true} />
          </div>
          
          <div className="text-sm md:text-base text-gray-300 mb-8 italic" style={{ fontFamily: 'Orbitron, system-ui, -apple-system, sans-serif' }}>
            <TypingText key="main-aka" text="(aka Rio, aka Skrio)" delay={0.1} isInView={true} />
          </div>
          
              <div className="text-xl md:text-2xl font-light text-white mb-12" style={{ fontFamily: 'Orbitron, system-ui, -apple-system, sans-serif' }}>
                <TypingText key="main-work" text="I work in music, tech, film, and beyond." delay={0.2} isInView={true} />
              </div>

          <div className="text-lg text-yellow-400 max-w-3xl mx-auto leading-relaxed text-center" style={{ fontFamily: 'Orbitron, system-ui, -apple-system, sans-serif' }}>
              <TypingText 
                key="main-description"
                text="I bring ideas to life across multiple creative disciplines, blending technology with artistry to create experiences that resonate and inspire." 
                delay={0.4} 
                isInView={true} 
              />
          </div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="mt-16 flex flex-col items-center"
              >
                <motion.button
                  onClick={() => {
                    document.getElementById('second-page')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  animate={{ 
                    y: [0, 8, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-gray-400 text-4xl font-bold hover:text-gray-600 cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ↓
                </motion.button>
              </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Second Page - Previous Works */}
    <section id="second-page" ref={aboutRef} className="min-h-screen bg-white relative overflow-hidden">
      {/* Vortex Hole - Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isAboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
      >
        <div className="relative w-[600px] h-[600px]">
          {/* Warped Grid Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              transform: 'perspective(1000px) rotateX(60deg)',
              borderRadius: '50%'
            }}>
            </div>
          </div>

          {/* Cosmic Dust Swirls */}
          {isClient && (
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={`dust-${i}`}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0.3, 0.8, 0.3],
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50]
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          )}

          {/* Energy Streaks */}
          {isClient && (
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`streak-${i}`}
                  className="absolute h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-70"
                  style={{
                    width: `${100 + Math.random() * 200}px`,
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'left center',
                    transform: `rotate(${i * 30}deg) translateX(-50%)`
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                />
              ))}
            </div>
          )}

          {/* Swirling Gas Clouds */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-radial from-purple-900/20 via-blue-800/30 to-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 w-full h-full bg-gradient-radial from-blue-800/20 via-purple-700/30 to-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Static Tornado Spiral Dots */}
          {isClient && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Outer Spiral Ring */}
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                  key={`spiral-outer-${i}`}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.cos((i * 15) * Math.PI / 180) * 80}px`,
                    top: `${Math.sin((i * 15) * Math.PI / 180) * 80}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 0.9, 0.4]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Middle Spiral Ring */}
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.div
                  key={`spiral-middle-${i}`}
                  className="absolute w-1.5 h-1.5 bg-gray-300 rounded-full"
                  style={{
                    left: `${Math.cos((i * 20) * Math.PI / 180) * 50}px`,
                    top: `${Math.sin((i * 20) * Math.PI / 180) * 50}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    rotate: [0, -360],
                    scale: [0.6, 1.1, 0.6],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Inner Spiral Ring */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`spiral-inner-${i}`}
                  className="absolute w-1 h-1 bg-gray-400 rounded-full"
                  style={{
                    left: `${Math.cos((i * 30) * Math.PI / 180) * 25}px`,
                    top: `${Math.sin((i * 30) * Math.PI / 180) * 25}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.4, 1, 0.4],
                    opacity: [0.2, 0.7, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Center Core */}
              <motion.div
                className="absolute w-3 h-3 bg-black rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
            </div>
          )}


        </div>
      </motion.div>
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      {/* Background Dots */}
      {isClient && (
        <div className="absolute inset-0">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={`bg-dot-${i}`}
              className="absolute bg-black rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>
      )}

          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-8 right-8 text-3xl md:text-4xl font-bold text-black z-10"
          >
            Previous Works
          </motion.h2>

          {/* GitHub Link - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-8 left-8 z-10"
          >
            <a 
              href="https://github.com/riotalk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black text-2xl font-bold hover:underline transition-all duration-300 hover:text-gray-700"
            >
              GitHub
            </a>
          </motion.div>

          {/* Education Link - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-16 left-8 z-10"
          >
            <a 
              href="https://bu.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black text-xl font-bold hover:underline transition-all duration-300 hover:text-gray-700"
            >
              Education
            </a>
          </motion.div>

          {/* Skills Dropdown - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-24 left-8 z-10"
          >
            <div className="relative">
              <button
                onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                className="text-black text-xl font-bold hover:underline transition-all duration-300 hover:text-gray-700 flex items-center"
              >
                Skills
                <motion.span
                  animate={{ rotate: isSkillsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  ▼
                </motion.span>
              </button>
              
              {isSkillsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64"
                >
                  <div className="space-y-2">
                    <div className="text-black font-bold">
                      Full-Stack Developer
                      <span className="text-gray-500 font-normal"> React, NodeJS, HTML, CSS, Python, etc.</span>
                    </div>
                    <div className="text-gray-600 text-sm font-medium mt-3">Proficient</div>
                    <div className="text-black font-bold">
                      Music Production
                      <span className="text-gray-500 font-normal"> FL Studio</span>
                    </div>
                    <div className="text-black font-bold mt-3">Languages</div>
                    <div className="text-gray-500 text-base">
                      English, Spanish, Igbo
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Instagram Link - Bottom Center */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <a 
              href="https://www.instagram.com/skrioo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-300"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </motion.div>

          {/* Portfolio Links Container */}
          <div className="absolute top-20 right-8 z-10 space-y-24">
            {/* Cash App Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a 
                href="https://cash.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                Cash App
              </a>
              <div className="text-gray-500 text-base mt-2">
                Creative consultant
              </div>
            </motion.div>

            {/* Columbia Records Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="https://www.columbiarecords.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                Columbia Records
              </a>
              <div className="text-gray-500 text-base mt-2">
                Creative Consultant
              </div>
            </motion.div>

            {/* Loewe Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a 
                href="https://www.loewe.tv/gl/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                Loewe Technology
              </a>
              <div className="text-gray-500 text-base mt-2">
                Creative consultant
              </div>
            </motion.div>

            {/* PWRS Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a 
                href="https://pwrs.world/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                PWRS
              </a>
              <div className="text-gray-500 text-base mt-2">
                Founder of Creative Agency
              </div>
            </motion.div>

            {/* Samsung Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <a 
                href="https://www.samsung.com/levant/smartphones/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                Samsung
              </a>
              <div className="text-gray-500 text-base mt-2">
                Creative consultant
              </div>
            </motion.div>

            {/* SZA-CTRL Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <a 
                href="https://www.szactrl.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                SZA-CTRL
              </a>
              <div className="text-gray-500 text-base mt-2">
                Creative / Marketing
              </div>
            </motion.div>

            {/* TEKNO - TMTB Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a 
                href="https://open.spotify.com/album/3F886JEtegyU2CGjbvbv4I?si=rIsT8t7hSqyT5YvCAUostQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                Tekno -TMTB
              </a>
              <div className="text-gray-500 text-base mt-2">
                Executive Produced
              </div>
            </motion.div>

            {/* VFILES Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <a 
                href="https://vfiles.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                VFILES
              </a>
              <div className="text-gray-500 text-base mt-2">
                Creative consultant
              </div>
            </motion.div>

            {/* Young Thug Hot Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <a 
                href="https://youtu.be/leJNDpm_G10?si=_cBkhqL7KpbR2Rdn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                Young Thug Hot
              </a>
              <div className="text-gray-500 text-base mt-2">
                Creative / Producer
              </div>
            </motion.div>

            {/* We Still Don't Trust You Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <a 
                href="https://www.westilldonttrustyou.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                We Still Don&apos;t Trust You
              </a>
              <div className="text-gray-500 text-base mt-2">
                Tour Management
              </div>
            </motion.div>

            {/* Music Management Tab */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              <a 
                href="https://open.spotify.com/playlist/5qRGk47BAPfsx0rc2eQS0q?si=d8cbecf2f8024507" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-xl font-medium hover:underline transition-all duration-300 hover:text-gray-700"
              >
                Music Management
              </a>
              <div className="text-gray-500 text-base mt-2">
                songs I contributed towards
              </div>
            </motion.div>
          </div>
    </section>

      </div>
  );
}