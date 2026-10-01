/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Check,
  Share2,
  FileText,
  ShieldCheck,
  Sparkles,
  MoveHorizontal,
  X,
  Printer,
  Copy,
  Layers,
  Tag
} from 'lucide-react';

interface CourseItem {
  id: string;
  number: string;
  name: string;
  date: string;
  keyword: string;
  summary: string;
  code: string;
  rotation: string;
  certificateUrl: string;
}
}

const COURSES: CourseItem[] = [
  {
    id: 'c1',
    number: '01',
    name: 'AI Fundamentals',
    date: '2026',
    keyword: 'IA',
    summary: 'Principios de modelos, arquitectura de prompts y aplicaciones multimodales para diseño y estrategia.',
    code: 'GAI-2026-01-MCTZ',
    certificateUrl: '/certificados/01-ai-fundamentals.pdf',
    rotation: '-rotate-2',
  },
  {
    id: 'c2',
    number: '02',
    name: 'AI for Brainstorming and Planning',
    date: '2026',
    keyword: 'PLANIFICACIÓN',
    summary: 'Ideación divergente, estructuración creativa de campañas y diseño de mapas estratégicos.',
    code: 'GAI-2026-02-MCTZ',
    certificateUrl: '/certificados/02-ai-brainstorming-planning.pdf',
    rotation: 'rotate-1.5',
  },
  {
    id: 'c3',
    number: '03',
    name: 'AI for Research and Insights',
    date: '2026',
    keyword: 'INVESTIGACIÓN',
    summary: 'Síntesis cualitativa de audiencias, análisis de patrones de mercado y diferenciación de marca.',
    code: 'GAI-2026-03-MCTZ',
    certificateUrl: '/certificados/03-ai-research-insights.pdf',
    rotation: '-rotate-1',
  },
  {
    id: 'c4',
    number: '04',
    name: 'AI for Writing and Communicating',
    date: '2026',
    keyword: 'COMUNICACIÓN',
    summary: 'Calibración de tono de voz, redacción editorial estratégica y síntesis comunicacional ejecutiva.',
    code: 'GAI-2026-04-MCTZ',
    certificateUrl: '/certificados/04-ai-writing-communicating.pdf',
    rotation: 'rotate-2',
  },
  {
    id: 'c5',
    number: '05',
    name: 'AI for Data Analysis',
    date: '2026',
    keyword: 'DATOS',
    summary: 'Telemetría de rendimiento creativo, interpretación analítica de métricas y visualización de datos.',
    code: 'GAI-2026-05-MCTZ',
    certificateUrl: '/certificados/05-ai-data-analysis.pdf',
    rotation: '-rotate-2.5',
  },
  {
    id: 'c6',
    number: '06',
    name: 'AI for Content Creation',
    date: '2026',
    keyword: 'CONTENIDO',
    summary: 'Dirección de arte generativa, escalabilidad de activos visuales y consistencia estilística multicanal.',
    code: 'GAI-2026-06-MCTZ',
    certificateUrl: '/certificados/06-ai-content-creation.pdf',
    rotation: 'rotate-1.5',
  },
  {
    id: 'c7',
    number: '07',
    name: 'AI for App Building',
    date: '2026',
    keyword: 'APPS',
    summary: 'Prototipado rápido de microherramientas, interfaces interactivas y pipelines automatizados.',
    code: 'GAI-2026-07-MCTZ',
    
    rotation: '-rotate-1',
  },
];

interface CreativeShape {
  id: string;
  name: string;
  note: string;
  fillColor: string;
  shapeType: 'star' | 'circle' | 'capsule' | 'triangle' | 'flower' | 'geometric';
  rotation: string;
  desktopLayout: {
    top: string;
    left?: string;
    right?: string;
    width: string;
    height: string;
    noteStyle: string;
  };
}

const CREATIVE_SHAPES: CreativeShape[] = [
  {
    id: 'diseno',
    name: 'DISEÑO',
    note: '“Identidad, dirección visual y sistemas gráficos.”',
    fillColor: '#D4F458',
    shapeType: 'star',
    rotation: '-rotate-3',
    desktopLayout: {
      top: '2%',
      left: '38%',
      width: '185px',
      height: '185px',
      noteStyle: 'top-[100%] left-1/2 -translate-x-1/2 mt-2',
    },
  },
  {
    id: 'marketing',
    name: 'MARKETING',
    note: '“Estrategia, contenido y comunicación de marca.”',
    fillColor: '#BAE6FD',
    shapeType: 'circle',
    rotation: 'rotate-2',
    desktopLayout: {
      top: '10%',
      left: '6%',
      width: '160px',
      height: '160px',
      noteStyle: 'top-[102%] left-0 mt-2',
    },
  },
  {
    id: 'ia',
    name: 'IA',
    note: '“Exploración, creación y nuevas formas de trabajar.”',
    fillColor: '#DDD3EC',
    shapeType: 'triangle',
    rotation: 'rotate-3',
    desktopLayout: {
      top: '7%',
      right: '6%',
      width: '165px',
      height: '165px',
      noteStyle: 'top-[102%] right-0 mt-2',
    },
  },
  {
    id: 'automatizacion',
    name: 'AUTOMATIZACIÓN',
    note: '“Flujos que conectan herramientas y simplifican procesos.”',
    fillColor: '#FF6584',
    shapeType: 'capsule',
    rotation: '-rotate-1',
    desktopLayout: {
      top: '42%',
      left: '36%',
      width: '240px',
      height: '95px',
      noteStyle: 'top-[105%] left-1/2 -translate-x-1/2 mt-2',
    },
  },
  {
    id: 'ux-ui',
    name: 'UX/UI',
    note: '“Experiencias digitales que también se sienten.”',
    fillColor: '#F4DFD8',
    shapeType: 'flower',
    rotation: 'rotate-4',
    desktopLayout: {
      top: '64%',
      left: '8%',
      width: '175px',
      height: '175px',
      noteStyle: 'bottom-[102%] left-0 mb-2',
    },
  },
  {
    id: 'tecnologia',
    name: 'TECNOLOGÍA CREATIVA',
    note: '“Código, interacción y experimentación visual.”',
    fillColor: '#FAF7F2',
    shapeType: 'geometric',
    rotation: '-rotate-2',
    desktopLayout: {
      top: '62%',
      right: '8%',
      width: '185px',
      height: '185px',
      noteStyle: 'bottom-[102%] right-0 mb-2',
    },
  },
];

const COLLAGE_WORDS = [
  { word: 'IA', course: '01', scale: 'text-6xl sm:text-8xl md:text-9xl', italic: false, rot: '-rotate-2' },
  { word: 'CONTENIDO', course: '06', scale: 'text-4xl sm:text-6xl md:text-7xl', italic: true, rot: 'rotate-3' },
  { word: 'DATOS', course: '05', scale: 'text-5xl sm:text-7xl md:text-8xl', italic: false, rot: '-rotate-1' },
  { word: 'APPS', course: '07', scale: 'text-6xl sm:text-8xl', italic: true, rot: 'rotate-2' },
  { word: 'INVESTIGACIÓN', course: '03', scale: 'text-4xl sm:text-5xl md:text-7xl', italic: false, rot: '-rotate-3' },
  { word: 'COMUNICACIÓN', course: '04', scale: 'text-3xl sm:text-6xl', italic: true, rot: 'rotate-1' },
  { word: 'PLANIFICACIÓN', course: '02', scale: 'text-4xl sm:text-6xl md:text-7xl', italic: false, rot: '-rotate-2' },
];

export default function App() {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [modalCourse, setModalCourse] = useState<CourseItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [toastNotice, setToastNotice] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Áreas de Aprendizaje: Active & Hover State
  const [activeShapeId, setActiveShapeId] = useState<string | null>(null);
  const [hoveredShapeId, setHoveredShapeId] = useState<string | null>(null);
  const [areasInView, setAreasInView] = useState(false);
  const areasSectionRef = useRef<HTMLDivElement>(null);

  // Word collage hover state
  const [hoveredCollageWord, setHoveredCollageWord] = useState<string | null>(null);

  // Black section scroll observer
  const [blackSectionInView, setBlackSectionInView] = useState(false);
  const blackSectionRef = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((currentY / totalScroll) * 100);
      }

      const sections = ['hero', 'stack-certificados', 'recorrido', 'areas-aprendizaje', 'palabras-collage', 'poster-manifiesto', 'aprendizaje-continuo'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for Áreas de Aprendizaje & Black section
  useEffect(() => {
    if (!areasSectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAreasInView(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(areasSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // IntersectionObserver for black poster section line reveal
  useEffect(() => {
    if (!blackSectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBlackSectionInView(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(blackSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Modal Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalCourse(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeCourse = COURSES[activeCourseIndex];

  const handleOpenCertificate = (course: CourseItem) => {
    setModalCourse(course);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2400);
  };

  const handlePrintModal = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-[#FAF7F2] paper-grain relative overflow-x-hidden">
      {/* Toast Notice General */}
      {toastNotice && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#111111] text-[#FAF7F2] px-5 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-mono flex items-center gap-3 border border-[#F4DFD8]/40 transition-all duration-300">
          <FileText className="w-4 h-4 text-[#E24B6A]" />
          <span>{toastNotice}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* NAVEGACIÓN COMPACTA CON INDICADOR DE PROGRESO DE LECTURA                  */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-[#111111]">
        {/* Barra superior de progreso de lectura del archivo */}
        <div
          className="h-[3px] bg-[#111111] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="group flex items-center gap-2 font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#111111]"
          >
            <span>ARCHIVO</span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#F4DFD8] border border-[#111111] text-[#111111] font-bold -rotate-2">
              MACTZIL
            </span>
            <span className="text-[#E24B6A] text-xs transition-transform duration-300 group-hover:rotate-45 inline-block">
              ✦
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-[#5F5B54]">
            <a
              href="#hero"
              className={`hover:text-[#111111] transition-colors ${activeSection === 'hero' ? 'text-[#111111] font-bold underline decoration-[#E24B6A] decoration-2 underline-offset-4' : ''}`}
            >
              INICIO
            </a>
            <a
              href="#stack-certificados"
              className={`hover:text-[#111111] transition-colors ${activeSection === 'stack-certificados' ? 'text-[#111111] font-bold underline decoration-[#E24B6A] decoration-2 underline-offset-4' : ''}`}
            >
              STACK 01–07
            </a>
            <a
              href="#recorrido"
              className={`hover:text-[#111111] transition-colors ${activeSection === 'recorrido' ? 'text-[#111111] font-bold underline decoration-[#E24B6A] decoration-2 underline-offset-4' : ''}`}
            >
              RUTA
            </a>
            <a
              href="#areas-aprendizaje"
              className={`hover:text-[#111111] transition-colors ${activeSection === 'areas-aprendizaje' ? 'text-[#111111] font-bold underline decoration-[#E24B6A] decoration-2 underline-offset-4' : ''}`}
            >
              ÁREAS
            </a>
            <a
              href="#palabras-collage"
              className={`hover:text-[#111111] transition-colors ${activeSection === 'palabras-collage' ? 'text-[#111111] font-bold underline decoration-[#E24B6A] decoration-2 underline-offset-4' : ''}`}
            >
              CONCEPTOS
            </a>
            <a
              href="#aprendizaje-continuo"
              className={`hover:text-[#111111] transition-colors ${activeSection === 'aprendizaje-continuo' ? 'text-[#111111] font-bold underline decoration-[#E24B6A] decoration-2 underline-offset-4' : ''}`}
            >
              EXPANSIÓN
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://readymag.website/6506559"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#111111] bg-[#111111] text-[#FAF7F2] text-xs font-mono font-medium hover:bg-[#FAF7F2] hover:text-[#111111] transition-all duration-200"
            >
              <ArrowLeft className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Portafolio</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* CAPÍTULO 1: DIGITAL SCRAPBOOK STUDIO WALL — HERO                          */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="pt-12 sm:pt-20 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto relative overflow-visible"
        >
          {/* Forma gráfica de papel cortado a mano irregular en Dusty Pink con borde físico */}
          <div
            className="absolute top-14 left-6 sm:left-20 w-80 sm:w-[32rem] h-56 sm:h-72 bg-[#F4DFD8] border-2 border-[#111111] rotate-[-2.5deg] -z-10 shadow-[8px_8px_0px_#111111] pointer-events-none"
            style={{ clipPath: 'polygon(0% 2%, 98% 0%, 100% 95%, 4% 100%)' }}
          />

          {/* Trozo de cinta adhesiva washi tape gráfica */}
          <div className="absolute top-10 left-16 sm:left-36 w-28 h-6 bg-[#FFFDF9]/90 border border-[#111111]/40 rotate-[-5deg] z-20 shadow-xs pointer-events-none" />

          {/* Sello circular estilo rubber stamp en la pared del estudio */}
          <div className="absolute top-6 right-6 sm:right-16 hidden md:flex items-center justify-center w-28 h-28 rounded-full border-2 border-dashed border-[#E24B6A] text-[#E24B6A] rotate-12 select-none pointer-events-none opacity-85">
            <div className="text-center font-mono text-[9px] font-bold tracking-widest uppercase leading-tight">
              <div>ARCHIVO VIVO</div>
              <div className="text-sm font-serif">✦ 2026 ✦</div>
              <div>VERIFICADO</div>
            </div>
          </div>

          {/* Anotaciones editoriales gráficas */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#FAF7F2] font-mono text-xs uppercase tracking-widest rounded-md rotate-[-1deg] shadow-[2px_2px_0px_#E24B6A]">
              <span>ARCHIVO PERSONAL</span>
              <span>·</span>
              <span>2026</span>
            </div>

            <div className="font-serif italic text-base sm:text-xl text-[#111111] hover:rotate-1 transition-transform cursor-default">
              “seguir aprendiendo también es parte del proceso ✦”
            </div>
          </div>

          {/* Titular Expresivo Monumental como Póster Gráfico */}
          <div className="relative z-10 mb-8">
            <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tight text-[#111111]">
              <span className="block">ARCHIVO</span>
              <span className="block italic font-light sm:ml-12 md:ml-20">DE</span>
              <span className="block sm:ml-24 md:ml-36 relative">
                APRENDIZAJE
                <span className="inline-block text-[#E24B6A] not-italic ml-2 sm:ml-4 text-5xl sm:text-7xl md:text-8xl align-top hover:rotate-90 transition-transform duration-300">
                  ✦
                </span>
              </span>
            </h1>
          </div>

          {/* Dispersión de marcas y ficha física sobre la pared de estudio */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4">
            <div className="md:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#111111]">
                <span className="px-3 py-1 bg-[#EAE4F0] border-2 border-[#111111] rounded shadow-[2px_2px_0px_#111111] rotate-1 font-bold">
                  07 CURSOS
                </span>
                <span className="px-3 py-1 bg-[#FFFDF9] border-2 border-[#111111] rounded shadow-[2px_2px_0px_#111111] -rotate-1 font-bold">
                  01 CREDENCIAL
                </span>
                <span className="px-3 py-1 bg-[#F4DFD8] border-2 border-[#111111] rounded shadow-[2px_2px_0px_#111111] rotate-2 font-bold text-[#111111]">
                  EN CONSTANTE ACTUALIZACIÓN ↗
                </span>
              </div>

              <p className="font-serif italic text-xl sm:text-2xl text-[#2B2926] max-w-xl leading-relaxed">
                “Certificaciones, credenciales y formación continua de una diseñadora gráfica y marketer.”
              </p>

              <div className="font-mono text-xs text-[#726E67] flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#111111]" />
                <span>registro vivo · notas &amp; acreditaciones oficiales</span>
              </div>
            </div>

            {/* Ficha tipo etiqueta física de estudio con CTA integrado */}
            <div className="md:col-span-5 flex md:justify-end">
              <div className="bg-[#FFFDF9] border-2 border-[#111111] p-6 rounded-2xl shadow-[6px_6px_0px_#111111] rotate-[1.5deg] hover:rotate-0 transition-transform duration-200 max-w-sm w-full relative">
                {/* Cinta adhesiva en la esquina de la tarjeta */}
                <div className="absolute -top-3 right-8 w-20 h-5 bg-[#FAF7F2] border border-[#111111] -rotate-3 z-10" />

                <div className="text-[11px] font-mono uppercase tracking-widest text-[#726E67] border-b border-[#111111] pb-2 mb-4 flex justify-between">
                  <span>RESUMEN DEL ARCHIVO</span>
                  <span className="text-[#111111] font-bold">VOL. 01</span>
                </div>

                <div className="space-y-2 text-xs font-mono mb-6">
                  <div className="flex justify-between">
                    <span>Google IA:</span>
                    <span className="font-bold text-[#111111]">7 / 7 Acreditados ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Credencial:</span>
                    <span className="text-[#8A6D3B] font-bold">En espera de emisión ●</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estado:</span>
                    <span className="text-emerald-800 font-bold">Colección Activa</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection('stack-certificados')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#111111] text-[#FAF7F2] hover:bg-[#E24B6A] transition-colors rounded-xl text-xs font-mono uppercase tracking-wider font-bold cursor-pointer shadow-sm"
                >
                  <span>EXPLORAR STACK ↓</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CINTA TIPOGRÁFICA EN MOVIMIENTO                                           */}
        {/* ========================================================================= */}
        <div className="border-t-2 border-b-2 border-[#111111] bg-[#111111] text-[#FAF7F2] py-3 overflow-hidden select-none">
          <div className="animate-marquee font-serif text-lg sm:text-2xl tracking-widest uppercase flex items-center gap-6 whitespace-nowrap">
            <span>APRENDER ✦ CREAR ✦ PROBAR ✦ DISEÑAR ✦ EXPERIMENTAR ✦ AUTOMATIZAR ✦</span>
            <span>APRENDER ✦ CREAR ✦ PROBAR ✦ DISEÑAR ✦ EXPERIMENTAR ✦ AUTOMATIZAR ✦</span>
            <span>APRENDER ✦ CREAR ✦ PROBAR ✦ DISEÑAR ✦ EXPERIMENTAR ✦ AUTOMATIZAR ✦</span>
            <span>APRENDER ✦ CREAR ✦ PROBAR ✦ DISEÑAR ✦ EXPERIMENTAR ✦ AUTOMATIZAR ✦</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CAPÍTULO 2: INTERACTIVE CERTIFICATE STACK & CERTIFICATE CARDS             */}
        {/* ========================================================================= */}
        <section
          id="stack-certificados"
          className="bg-[#F4DFD8] border-b-2 border-[#111111] py-20 sm:py-28 relative overflow-hidden studio-grid"
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Encabezado del Programa */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-2 border-[#111111] pb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#111111] text-[#FAF7F2] font-mono text-xs uppercase font-bold tracking-wider rounded shadow-[2px_2px_0px_#FAF7F2]">
                    7 / 7 CURSOS COMPLETADOS ✓
                  </span>
                  <span className="px-3 py-1 bg-[#FFFDF9] border border-[#111111] font-mono text-xs uppercase font-bold text-[#8A6D3B] rounded">
                    CREDENCIAL DIGITAL · EN ESPERA DE EMISIÓN ●
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
                  CERTIFICADO PROFESIONAL DE IA DE GOOGLE
                </h2>
                <div className="font-mono text-xs text-[#111111] uppercase tracking-widest mt-1 font-bold">
                  GOOGLE · REGISTRO VERIFICADO
                </div>
              </div>

              {/* Indicador interactivo */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFDF9] border-2 border-[#111111] rounded-full font-mono text-xs font-bold shadow-[4px_4px_0px_#111111] self-start md:self-auto">
                <MoveHorizontal className="w-4 h-4 text-[#E24B6A]" />
                <span>HAZ CLIC EN CUALQUIER HOJA PARA ABRIR</span>
              </div>
            </div>

            {/* STACK INTERACTIVO DE HOJAS FÍSICAS DE CERTIFICADO (01–07) */}
            <div className="mb-14">
              {/* Barra de pestañas numéricas tipo archivador físico */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
                {COURSES.map((course, idx) => {
                  const isActive = activeCourseIndex === idx;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => setActiveCourseIndex(idx)}
                      className={`flex-shrink-0 px-4 py-2.5 rounded-lg border-2 border-[#111111] font-mono text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? 'bg-[#111111] text-[#FAF7F2] shadow-[3px_3px_0px_#FFFDF9] -translate-y-1'
                          : 'bg-[#FFFDF9] text-[#111111] hover:bg-[#EAE4F0] hover:-translate-y-0.5'
                      }`}
                    >
                      <span>HOJA {course.number}</span>
                      {isActive && <span className="text-[#E24B6A]">●</span>}
                    </button>
                  );
                })}
              </div>

              {/* El Stack Físico: Hojas superpuestas simulando una pared de estudio */}
              <div className="relative min-h-[460px] sm:min-h-[500px] flex items-center justify-center pt-4">
                {COURSES.map((course, idx) => {
                  const isActive = activeCourseIndex === idx;
                  const offset = idx - activeCourseIndex;

                  // Cálculo de posiciones artísticas de las hojas secundarias en el stack
                  const zIndex = isActive ? 30 : 20 - Math.abs(offset);
                  const isVisibleInStack = Math.abs(offset) <= 3;

                  if (!isVisibleInStack) return null;

                  return (
                    <div
                      key={course.id}
                      onClick={() => setActiveCourseIndex(idx)}
                      style={{ zIndex }}
                      className={`absolute w-full max-w-3xl transition-all duration-300 cursor-pointer select-none ${
                        isActive
                          ? 'rotate-0 translate-y-0 scale-100'
                          : `${course.rotation} translate-y-3 sm:translate-y-4 hover:translate-y-1 scale-95 opacity-85 hover:opacity-100`
                      }`}
                    >
                      {/* Cinta washi tape en la parte superior de la hoja */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#FAF7F2]/95 border border-[#111111]/40 -rotate-1 z-40 shadow-xs pointer-events-none" />

                      {/* Cuerpo de la hoja física del certificado */}
                      <div className="bg-[#FFFDF9] border-2 border-[#111111] rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0px_#111111] relative overflow-hidden">
                        {/* Marca de agua monumental del número */}
                        <div className="absolute -top-8 -right-4 font-serif text-[10rem] sm:text-[14rem] text-[#F4DFD8]/60 select-none pointer-events-none font-bold leading-none -z-0">
                          {course.number}
                        </div>

                        <div className="relative z-10 flex flex-col justify-between min-h-[300px]">
                          {/* Encabezado de la hoja */}
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#111111] pb-4">
                            <div className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-[#111111]" />
                              <span className="font-mono text-xs font-bold tracking-widest text-[#111111]">
                                GOOGLE · MÓDULO {course.number} / 07
                              </span>
                            </div>
                            <div className="font-mono text-xs text-emerald-800 font-bold bg-[#FAF7F2] px-2.5 py-1 border border-[#111111] rounded">
                              COMPLETADO ✓
                            </div>
                          </div>

                          {/* Centro: Título oficial del curso */}
                          <div className="my-6">
                            <div className="text-[11px] font-mono uppercase tracking-widest text-[#726E67] mb-1">
                              CERTIFICADO OFICIAL
                            </div>
                            <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] mb-2 leading-tight">
                              {course.name}
                            </h3>
                            <p className="font-sans text-sm text-[#5F5B54] max-w-xl">
                              {course.summary}
                            </p>
                          </div>

                          {/* Pie de la hoja con acciones e información */}
                          <div className="pt-4 border-t-2 border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="text-xs font-mono text-[#5F5B54]">
                              <span className="text-[#726E67]">Acreditación: </span>
                              <span className="font-bold text-[#111111]">GOOGLE · {course.date}</span>
                            </div>

                            {/* Acciones para la hoja activa */}
                            {isActive ? (
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(course.certificateUrl, '_blank', 'noopener,noreferrer');
                                  }}
                                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] text-[#FAF7F2] hover:bg-[#E24B6A] transition-colors rounded-lg text-xs font-mono font-bold uppercase tracking-wider shadow-sm cursor-pointer"
                                >
                                  <span>VER CERTIFICADO ↗</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(course.certificateUrl, '_blank', 'noopener,noreferrer');
                                  }}
                                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-transparent text-[#111111] border border-[#111111] hover:bg-[#F4DFD8] transition-colors rounded-lg text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
                                >
                                  <span>VERIFICAR ↗</span>
                                </button>
                              </div>
                            ) : (
                              <span className="text-xs font-mono text-[#111111] underline">
                                Haz clic para abrir ↗
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CAPÍTULO 3: COURSE JOURNEY AS A VISUAL MAP/STORY (RECORRIDO)              */}
        {/* ========================================================================= */}
        <section
          id="recorrido"
          className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto relative"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#111111]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#111111] font-mono font-bold">
              <span>08 / RUTA DE APRENDIZAJE</span>
              <span className="text-[#E24B6A]">✦</span>
            </div>
            <div className="font-serif italic text-sm text-[#726E67]">
              “un mapa paso a paso a través de la IA aplicada”
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] tracking-tight">
              RECORRIDO DEL PROGRAMA
            </h2>
            <p className="font-serif italic text-lg text-[#5F5B54] mt-1">
              Mapa secuencial de los siete cursos completados.
            </p>
          </div>

          {/* El Mapa Editorial de Conexión Gráfica */}
          <div className="bg-[#FFFDF9] border-2 border-[#111111] rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_#111111] relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {/* Fila 1: 01 -> 02 -> 03 */}
              {COURSES.slice(0, 3).map((c, i) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setActiveCourseIndex(i);
                    scrollToSection('stack-certificados');
                  }}
                  className="p-5 border-2 border-[#111111] rounded-xl bg-[#FAF7F2] hover:bg-[#F4DFD8] transition-all duration-200 cursor-pointer group hover:-translate-y-1 shadow-[3px_3px_0px_#111111]"
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-xl font-bold font-serif">{c.number}</span>
                    <span className="text-emerald-700 font-bold">COMPLETADO ✓</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#111111] group-hover:underline">
                    {c.name}
                  </h4>
                  <div className="text-[11px] font-mono text-[#726E67] mt-2">
                    GOOGLE · {c.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Flecha conectora visual */}
            <div className="hidden md:flex justify-end pr-16 my-4 text-2xl text-[#111111] font-mono">
              ↓
            </div>

            {/* Fila 2: 04 & 05 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10 max-w-2xl ml-auto mr-auto my-2">
              {COURSES.slice(3, 5).map((c, i) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setActiveCourseIndex(i + 3);
                    scrollToSection('stack-certificados');
                  }}
                  className="p-5 border-2 border-[#111111] rounded-xl bg-[#FAF7F2] hover:bg-[#EAE4F0] transition-all duration-200 cursor-pointer group hover:-translate-y-1 shadow-[3px_3px_0px_#111111]"
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-xl font-bold font-serif">{c.number}</span>
                    <span className="text-emerald-700 font-bold">COMPLETADO ✓</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#111111] group-hover:underline">
                    {c.name}
                  </h4>
                  <div className="text-[11px] font-mono text-[#726E67] mt-2">
                    GOOGLE · {c.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Flecha conectora visual */}
            <div className="hidden md:flex justify-start pl-16 my-4 text-2xl text-[#111111] font-mono">
              ↓
            </div>

            {/* Fila 3: 06 -> 07 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
              {COURSES.slice(5, 7).map((c, i) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setActiveCourseIndex(i + 5);
                    scrollToSection('stack-certificados');
                  }}
                  className="p-5 border-2 border-[#111111] rounded-xl bg-[#FAF7F2] hover:bg-[#F4DFD8] transition-all duration-200 cursor-pointer group hover:-translate-y-1 shadow-[3px_3px_0px_#111111]"
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-xl font-bold font-serif">{c.number}</span>
                    <span className="text-emerald-700 font-bold">COMPLETADO ✓</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#111111] group-hover:underline">
                    {c.name}
                  </h4>
                  <div className="text-[11px] font-mono text-[#726E67] mt-2">
                    GOOGLE · {c.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Cierre celebratorio sofisticado: 7 / 7 COMPLETADO ✓ */}
            <div className="mt-10 pt-6 border-t-2 border-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#111111]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#726E67]">
                  META DEL PROGRAMA
                </span>
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#111111] text-[#FAF7F2] font-mono text-sm uppercase tracking-wider font-bold rounded-full rotate-[-1deg] shadow-[3px_3px_0px_#E24B6A]">
                <span>7 / 7</span>
                <span>·</span>
                <span>COMPLETADO ✓</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CAPÍTULO 4: ÁREAS DE APRENDIZAJE (INTERACTIVE SHAPE CONSTELLATION)        */}
        {/* ========================================================================= */}
        <section
          id="areas-aprendizaje"
          ref={areasSectionRef}
          onClick={() => setActiveShapeId(null)}
          className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t-2 border-[#111111] relative overflow-hidden"
        >
          {/* Encabezado editorial */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#111111]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#111111] font-mono font-bold">
              <span>03 / ÁREAS DE APRENDIZAJE</span>
              <span className="text-[#E24B6A]">✦</span>
            </div>
            <div className="font-mono text-xs text-[#726E67]">
              SISTEMA CREATIVO
            </div>
          </div>

          <div className="mb-8 max-w-3xl">
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] tracking-tight">
              ÁREAS DE APRENDIZAJE
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[#2B2926] mt-2">
              “Lo que aprendo se mezcla con lo que creo.” ✦
            </p>
          </div>

          {/* ===================================================================== */}
          {/* CONSTELLATION LAYOUT: DESKTOP (LARGE SCREENS)                         */}
          {/* ===================================================================== */}
          <div className="hidden lg:block relative min-h-[660px] w-full mt-4 select-none">
            {/* Mensaje Gráfico Central (Graphic Annotation) */}
            <div className="absolute top-[38%] left-[6%] xl:left-[8%] z-10 max-w-xs pointer-events-none select-none">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold tracking-widest text-[#111111] bg-[#FFFDF9] px-2.5 py-1 border-2 border-[#111111] rounded -rotate-2 shadow-[2px_2px_0px_#111111] mb-2">
                <span>COMBINO:</span>
                <span className="text-[#E24B6A]">✦</span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-[#2B2926] leading-snug">
                “para convertir ideas en algo que pueda verse, sentirse y recordarse.” ♡
              </p>
              {/* Flecha gráfica hacia el grupo de formas */}
              <svg
                width="72"
                height="36"
                viewBox="0 0 72 36"
                fill="none"
                className="mt-2 text-[#111111] rotate-6"
              >
                <path
                  d="M 6 12 C 28 8 48 18 64 28 M 64 28 L 52 28 M 64 28 L 60 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Constelación de 6 Formas Gráficas Originales */}
            {CREATIVE_SHAPES.map((shape, idx) => {
              const isActive = activeShapeId === shape.id;
              const isHovered = hoveredShapeId === shape.id;
              const isDimmed =
                (hoveredShapeId !== null && !isHovered && activeShapeId === null) ||
                (activeShapeId !== null && !isActive);

              // Entrada escalonada en scroll
              const entranceClasses = !areasInView
                ? idx === 0
                  ? 'opacity-0 rotate-[-25deg] scale-90'
                  : idx === 1
                  ? 'opacity-0 scale-50'
                  : idx === 2
                  ? 'opacity-0 translate-y-10'
                  : idx === 3
                  ? 'opacity-0 translate-x-12'
                  : idx === 4
                  ? 'opacity-0 rotate-[35deg]'
                  : 'opacity-0 scale-75'
                : 'opacity-100 scale-100 translate-x-0 translate-y-0';

              const entranceDelay =
                idx === 0
                  ? 'delay-100'
                  : idx === 1
                  ? 'delay-200'
                  : idx === 2
                  ? 'delay-350'
                  : idx === 3
                  ? 'delay-500'
                  : idx === 4
                  ? 'delay-650'
                  : 'delay-800';

              return (
                <div
                  key={shape.id}
                  style={{
                    top: shape.desktopLayout.top,
                    left: shape.desktopLayout.left,
                    right: shape.desktopLayout.right,
                    width: shape.desktopLayout.width,
                    height: shape.desktopLayout.height,
                  }}
                  className={`absolute z-20 group cursor-pointer transition-all duration-500 ease-out ${entranceDelay} ${entranceClasses} ${
                    shape.rotation
                  } ${
                    isActive
                      ? 'scale-[1.06] -translate-y-1 z-30'
                      : isHovered
                      ? 'scale-[1.06] -translate-y-1 z-30'
                      : 'hover:scale-[1.06] hover:-translate-y-1'
                  } ${isDimmed ? 'opacity-75' : 'opacity-100'}`}
                  onMouseEnter={() => setHoveredShapeId(shape.id)}
                  onMouseLeave={() => setHoveredShapeId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveShapeId(isActive ? null : shape.id);
                  }}
                >
                  {/* Destello sutil en hover */}
                  <span className="absolute -top-2 -right-1 text-sm text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity font-bold select-none">
                    ✦
                  </span>

                  {/* Renderizado de la forma SVG original */}
                  {shape.shapeType === 'star' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible">
                        <path
                          d="M 80 8 L 96 52 L 148 38 L 118 78 L 154 114 L 106 120 L 120 156 L 80 128 L 40 156 L 54 120 L 6 114 L 42 78 L 12 38 L 64 52 Z"
                          fill={shape.fillColor}
                          stroke="#111111"
                          strokeWidth={isActive ? '3.5' : '2.2'}
                          strokeLinejoin="round"
                          className="transition-all duration-300 group-hover:rotate-6 origin-center"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                          {shape.name}
                        </span>
                      </div>
                    </div>
                  )}

                  {shape.shapeType === 'circle' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible animate-pulse-on-hover">
                        <path
                          d="M 80 12 C 122 10 150 40 150 80 C 150 122 120 150 80 148 C 38 146 10 120 10 80 C 10 40 38 14 80 12 Z"
                          fill={shape.fillColor}
                          stroke="#111111"
                          strokeWidth={isActive ? '3.5' : '2.2'}
                          className="transition-all duration-300"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                          {shape.name}
                        </span>
                      </div>
                    </div>
                  )}

                  {shape.shapeType === 'triangle' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible group-hover:-translate-y-1.5 transition-transform duration-300">
                        <path
                          d="M 80 16 C 96 16 138 92 144 114 C 150 134 136 148 116 148 L 44 148 C 24 148 10 134 16 114 C 22 92 64 16 80 16 Z"
                          fill={shape.fillColor}
                          stroke="#111111"
                          strokeWidth={isActive ? '3.5' : '2.2'}
                          className="transition-all duration-300"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] translate-y-2 group-hover:translate-x-0.5 transition-transform duration-200">
                          {shape.name}
                        </span>
                      </div>
                    </div>
                  )}

                  {shape.shapeType === 'capsule' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 240 100" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible group-hover:scale-x-105 transition-transform duration-300">
                        <path
                          d="M 50 14 C 24 14 12 30 12 50 C 12 70 24 86 50 86 L 190 86 C 216 86 228 70 228 50 C 228 30 216 14 190 14 Z"
                          fill={shape.fillColor}
                          stroke="#111111"
                          strokeWidth={isActive ? '3.5' : '2.2'}
                          className="transition-all duration-300"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#FAF7F2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                          {shape.name}
                        </span>
                      </div>
                    </div>
                  )}

                  {shape.shapeType === 'flower' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 170 170" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible group-hover:rotate-12 origin-center transition-transform duration-300">
                        <path
                          d="M 85 24 C 98 6 122 14 124 38 C 146 36 158 60 144 78 C 162 96 146 124 124 124 C 120 148 98 156 85 140 C 74 156 50 148 46 124 C 24 124 6 96 24 78 C 10 60 22 36 44 38 C 48 14 72 6 85 24 Z"
                          fill={shape.fillColor}
                          stroke="#111111"
                          strokeWidth={isActive ? '3.5' : '2.2'}
                          className="transition-all duration-300"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                          {shape.name}
                        </span>
                      </div>
                    </div>
                  )}

                  {shape.shapeType === 'geometric' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 180 180" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible group-hover:rotate-3 origin-center transition-transform duration-300">
                        <path
                          d="M 90 14 L 166 56 L 142 154 L 38 154 L 14 56 Z"
                          fill={shape.fillColor}
                          stroke="#111111"
                          strokeWidth={isActive ? '3.5' : '2.2'}
                          className="transition-all duration-300"
                        />
                        <line x1="38" y1="154" x2="166" y2="56" stroke="#111111" strokeWidth="1.8" strokeDasharray="4 4" />
                        <circle cx="90" cy="126" r="10" fill="#E24B6A" stroke="#111111" strokeWidth="1.5" className="group-hover:scale-110 transition-transform origin-center" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -translate-y-2">
                        <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#111111] leading-tight">
                          TECNOLOGÍA
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#5F5B54] font-bold">
                          CREATIVA
                        </span>
                      </div>
                    </div>
                  )}

                  {/* NOTA CONTEXTUAL TIPO NOTA MANUSCRITA AL HACER CLIC */}
                  {isActive && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute z-40 animate-note-spring ${shape.desktopLayout.noteStyle} w-64 sm:w-72`}
                    >
                      <div className="bg-[#FFFDF9] border-2 border-[#111111] p-4 rounded-xl shadow-[5px_5px_0px_#111111] relative paper-grain">
                        {/* Washi tape decorativo */}
                        <div className="absolute -top-2.5 left-6 w-12 h-4 bg-[#FAF7F2] border border-[#111111]/40 -rotate-2" />

                        <div className="flex items-center justify-between border-b border-[#111111]/20 pb-2 mb-2">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#726E67]">
                            {shape.name}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveShapeId(null);
                            }}
                            className="w-5 h-5 rounded-full hover:bg-[#111111] hover:text-[#FAF7F2] text-[#111111] flex items-center justify-center font-mono text-xs font-bold transition-colors cursor-pointer"
                          >
                            ×
                          </button>
                        </div>

                        <p className="font-serif italic text-base sm:text-lg text-[#111111] leading-snug">
                          {shape.note}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ===================================================================== */}
          {/* MOBILE FLOWING SKETCHBOOK LAYOUT (SMALL & MEDIUM SCREENS)            */}
          {/* ===================================================================== */}
          <div className="block lg:hidden space-y-8 pt-2">
            {/* Mensaje Gráfico en Móvil */}
            <div className="bg-[#FFFDF9] border-2 border-[#111111] p-5 rounded-2xl shadow-[4px_4px_0px_#111111] max-w-sm mx-auto text-center rotate-[-1deg] paper-grain">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold tracking-widest text-[#111111] mb-2">
                <span>COMBINO:</span>
                <span className="text-[#E24B6A]">✦</span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-[#2B2926] leading-snug">
                “para convertir ideas en algo que pueda verse, sentirse y recordarse.” ♡
              </p>
            </div>

            {/* Lista orgánica vertical de formas interactivas */}
            <div className="flex flex-col items-center gap-10 py-4">
              {CREATIVE_SHAPES.map((shape) => {
                const isActive = activeShapeId === shape.id;

                return (
                  <div
                    key={shape.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveShapeId(isActive ? null : shape.id);
                    }}
                    className={`flex flex-col items-center w-full max-w-xs cursor-pointer select-none transition-transform duration-300 ${
                      isActive ? 'scale-105' : 'hover:scale-105'
                    }`}
                  >
                    {/* Contenedor de la forma */}
                    <div
                      style={{
                        width: shape.shapeType === 'capsule' ? '240px' : '165px',
                        height: shape.shapeType === 'capsule' ? '95px' : '165px',
                      }}
                      className={`relative flex items-center justify-center ${shape.rotation}`}
                    >
                      {shape.shapeType === 'star' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible">
                            <path
                              d="M 80 8 L 96 52 L 148 38 L 118 78 L 154 114 L 106 120 L 120 156 L 80 128 L 40 156 L 54 120 L 6 114 L 42 78 L 12 38 L 64 52 Z"
                              fill={shape.fillColor}
                              stroke="#111111"
                              strokeWidth={isActive ? '3.5' : '2.2'}
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="font-serif text-xl font-bold tracking-tight text-[#111111]">
                              {shape.name}
                            </span>
                          </div>
                        </div>
                      )}

                      {shape.shapeType === 'circle' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible">
                            <path
                              d="M 80 12 C 122 10 150 40 150 80 C 150 122 120 150 80 148 C 38 146 10 120 10 80 C 10 40 38 14 80 12 Z"
                              fill={shape.fillColor}
                              stroke="#111111"
                              strokeWidth={isActive ? '3.5' : '2.2'}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="font-serif text-lg font-bold tracking-tight text-[#111111]">
                              {shape.name}
                            </span>
                          </div>
                        </div>
                      )}

                      {shape.shapeType === 'triangle' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible">
                            <path
                              d="M 80 16 C 96 16 138 92 144 114 C 150 134 136 148 116 148 L 44 148 C 24 148 10 134 16 114 C 22 92 64 16 80 16 Z"
                              fill={shape.fillColor}
                              stroke="#111111"
                              strokeWidth={isActive ? '3.5' : '2.2'}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="font-serif text-3xl font-bold tracking-tight text-[#111111] translate-y-2">
                              {shape.name}
                            </span>
                          </div>
                        </div>
                      )}

                      {shape.shapeType === 'capsule' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 240 100" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible">
                            <path
                              d="M 50 14 C 24 14 12 30 12 50 C 12 70 24 86 50 86 L 190 86 C 216 86 228 70 228 50 C 228 30 216 14 190 14 Z"
                              fill={shape.fillColor}
                              stroke="#111111"
                              strokeWidth={isActive ? '3.5' : '2.2'}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="font-serif text-base font-bold tracking-tight text-[#FAF7F2]">
                              {shape.name}
                            </span>
                          </div>
                        </div>
                      )}

                      {shape.shapeType === 'flower' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 170 170" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible">
                            <path
                              d="M 85 24 C 98 6 122 14 124 38 C 146 36 158 60 144 78 C 162 96 146 124 124 124 C 120 148 98 156 85 140 C 74 156 50 148 46 124 C 24 124 6 96 24 78 C 10 60 22 36 44 38 C 48 14 72 6 85 24 Z"
                              fill={shape.fillColor}
                              stroke="#111111"
                              strokeWidth={isActive ? '3.5' : '2.2'}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="font-serif text-2xl font-bold tracking-tight text-[#111111]">
                              {shape.name}
                            </span>
                          </div>
                        </div>
                      )}

                      {shape.shapeType === 'geometric' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 180 180" className="w-full h-full drop-shadow-[5px_5px_0px_#111111] overflow-visible">
                            <path
                              d="M 90 14 L 166 56 L 142 154 L 38 154 L 14 56 Z"
                              fill={shape.fillColor}
                              stroke="#111111"
                              strokeWidth={isActive ? '3.5' : '2.2'}
                            />
                            <line x1="38" y1="154" x2="166" y2="56" stroke="#111111" strokeWidth="1.8" strokeDasharray="4 4" />
                            <circle cx="90" cy="126" r="10" fill="#E24B6A" stroke="#111111" strokeWidth="1.5" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -translate-y-2">
                            <span className="font-serif text-base font-bold tracking-tight text-[#111111] leading-tight">
                              TECNOLOGÍA
                            </span>
                            <span className="font-mono text-[10px] tracking-wider text-[#5F5B54] font-bold">
                              CREATIVA
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Nota contextual en móvil justo debajo de la forma */}
                    {isActive ? (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full mt-4 animate-note-spring"
                      >
                        <div className="bg-[#FFFDF9] border-2 border-[#111111] p-4 rounded-xl shadow-[4px_4px_0px_#111111] relative paper-grain">
                          <div className="flex items-center justify-between border-b border-[#111111]/20 pb-2 mb-2">
                            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#726E67]">
                              {shape.name}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveShapeId(null);
                              }}
                              className="w-5 h-5 rounded-full hover:bg-[#111111] hover:text-[#FAF7F2] text-[#111111] flex items-center justify-center font-mono text-xs font-bold transition-colors cursor-pointer"
                            >
                              ×
                            </button>
                          </div>
                          <p className="font-serif italic text-base text-[#111111] leading-snug">
                            {shape.note}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-[11px] font-mono text-[#726E67] mt-2 flex items-center gap-1">
                        <span>Toca para ver</span>
                        <span>↗</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CAPÍTULO 5: LEARNING WORD COLLAGE (CONCEPTOS)                             */}
        {/* ========================================================================= */}
        <section
          id="palabras-collage"
          className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t-2 border-[#111111] relative"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#111111]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#111111] font-mono font-bold">
              <span>09 / PÓSTER TIPOGRÁFICO</span>
              <span className="text-[#E24B6A]">✦</span>
            </div>
            <div className="text-xs font-mono text-[#726E67]">
              INTERACCIÓN LIBRE
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] tracking-tight">
              ¿QUÉ HE ESTADO APRENDIENDO?
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#5F5B54] mt-1">
              Pasa el cursor sobre los conceptos clave de la formación.
            </p>
          </div>

          {/* El Collage Tipográfico de Palabras (Asimétrico, Superpuesto y Vivo) */}
          <div className="bg-[#FFFDF9] border-2 border-[#111111] rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_#111111] relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 select-none py-6">
              {COLLAGE_WORDS.map((item, idx) => {
                const isHovered = hoveredCollageWord === item.word;
                const isAnyHovered = hoveredCollageWord !== null;
                const isDimmed = isAnyHovered && !isHovered;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredCollageWord(item.word)}
                    onMouseLeave={() => setHoveredCollageWord(null)}
                    onClick={() => {
                      const courseIdx = parseInt(item.course) - 1;
                      if (!isNaN(courseIdx)) {
                        setActiveCourseIndex(courseIdx);
                        scrollToSection('stack-certificados');
                      }
                    }}
                    className={`transition-all duration-300 cursor-pointer font-serif tracking-tight leading-none px-4 py-2 rounded-2xl ${item.scale} ${item.rot} ${
                      item.italic ? 'italic font-light' : 'font-normal'
                    } ${
                      isHovered
                        ? 'bg-[#F4DFD8] text-[#111111] scale-110 z-30 shadow-[4px_4px_0px_#111111] rotate-0'
                        : isDimmed
                        ? 'opacity-25'
                        : 'text-[#111111] hover:text-[#E24B6A]'
                    }`}
                  >
                    <span>{item.word}</span>
                    {isHovered && (
                      <span className="block font-mono text-xs uppercase tracking-wider text-[#111111] mt-1 font-bold not-italic">
                        CURSO {item.course} ↗
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-[#111111] flex items-center justify-between text-xs font-mono text-[#726E67]">
              <span>CONCEPTOS CLAVE DE FORMACIÓN</span>
              <span className="text-[#111111]">HAZ CLIC EN CUALQUIER PALABRA PARA IR AL CURSO</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CAPÍTULO 6: LAVENDER ACCORDION INDEX TABS                                 */}
        {/* ========================================================================= */}
        <section className="bg-[#EAE4F0] border-t-2 border-b-2 border-[#111111] py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold mb-3 flex items-center gap-2">
              <span>PESTAÑAS DE ARCHIVADOR</span>
              <span className="text-[#E24B6A]">✦</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] mb-8">
              ÍNDICE DEL ARCHIVO
            </h2>

            {/* Franjas horizontales de acordeón llamativas inspiradas en pestañas de encuadernación */}
            <div className="space-y-4">
              {/* Tira 1: Dusty Pink - CERTIFICADOS */}
              <div
                onClick={() => scrollToSection('stack-certificados')}
                className="bg-[#F4DFD8] border-2 border-[#111111] p-6 sm:p-8 rounded-2xl shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#726E67] mb-1">
                    SECCIÓN 01
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#111111] group-hover:translate-x-2 transition-transform">
                    CERTIFICADOS (STACK 01–07)
                  </h3>
                </div>
                <span className="font-mono text-xl sm:text-3xl text-[#111111] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </div>

              {/* Tira 2: Cream - RECORRIDO */}
              <div
                onClick={() => scrollToSection('recorrido')}
                className="bg-[#FAF7F2] border-2 border-[#111111] p-6 sm:p-8 rounded-2xl shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#726E67] mb-1">
                    SECCIÓN 02
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#111111] group-hover:translate-x-2 transition-transform">
                    RUTA DE APRENDIZAJE
                  </h3>
                </div>
                <span className="font-mono text-xl sm:text-3xl text-[#111111] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </div>

              {/* Tira 3: Cream Specimen - ÁREAS */}
              <div
                onClick={() => scrollToSection('areas-aprendizaje')}
                className="bg-[#FFFDF9] border-2 border-[#111111] p-6 sm:p-8 rounded-2xl shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#726E67] mb-1">
                    SECCIÓN 03
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#111111] group-hover:translate-x-2 transition-transform">
                    ÁREAS DE APRENDIZAJE
                  </h3>
                </div>
                <span className="font-mono text-xl sm:text-3xl text-[#111111] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </div>

              {/* Tira 4: Deep Black - VER CREDENCIALES */}
              <div
                onClick={() => scrollToSection('stack-certificados')}
                className="bg-[#111111] text-[#FAF7F2] border-2 border-[#111111] p-6 sm:p-8 rounded-2xl shadow-[4px_4px_0px_#F4DFD8] hover:shadow-[6px_6px_0px_#F4DFD8] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#F4DFD8] mb-1">
                    SECCIÓN 04
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF7F2] group-hover:translate-x-2 transition-transform">
                    VER CREDENCIALES
                  </h3>
                </div>
                <span className="font-mono text-xl sm:text-3xl text-[#FAF7F2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CAPÍTULO 7: DEEP BLACK — MONUMENTAL MANIFESTO POSTER                      */}
        {/* ========================================================================= */}
        <section
          id="poster-manifiesto"
          ref={blackSectionRef}
          className="py-28 sm:py-44 bg-[#111111] text-[#FAF7F2] dark-grain relative overflow-hidden select-none border-b-2 border-[#111111]"
        >
          {/* Estrella tipográfica flotante monumental */}
          <div
            className="absolute top-1/4 -right-12 text-neutral-800 text-[18rem] select-none pointer-events-none font-serif opacity-30 transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${(scrollY - 1600) * 0.08}px)` }}
          >
            ✦
          </div>

          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <div className="text-xs uppercase tracking-widest text-[#F4DFD8] font-mono mb-8 flex items-center gap-2">
                <span>MANIFIESTO VIVO</span>
                <span className="text-[#E24B6A]">✦</span>
                <span>EXP. 2026</span>
              </div>

              {/* Tipografía monumental revelada línea a línea */}
              <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-[#FAF7F2] leading-[0.86] tracking-tight text-balance">
                <span
                  className={`block transition-all duration-700 ${
                    blackSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: '0ms' }}
                >
                  SEGUIR
                </span>

                <span
                  className={`block transition-all duration-700 ${
                    blackSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: '140ms' }}
                >
                  APRENDIENDO
                </span>

                <span
                  className={`block italic font-light text-[#F4DFD8] transition-all duration-700 ${
                    blackSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: '280ms' }}
                >
                  TAMBIÉN ES
                </span>

                <span
                  className={`block transition-all duration-700 ${
                    blackSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: '420ms' }}
                >
                  PARTE DEL
                </span>

                <span
                  className={`block transition-all duration-700 ${
                    blackSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: '560ms' }}
                >
                  PROCESO.
                  <span className="inline-block text-[#E24B6A] not-italic ml-2 sm:ml-4 text-5xl sm:text-7xl align-top">
                    ✦
                  </span>
                </span>
              </h2>

              <div className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>sin prisa, con intención</span>
                <span className="font-serif italic text-sm text-[#F4DFD8]">
                  nota en el margen ↗
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CAPÍTULO 8: CONTINUOUS LEARNING AS AN OPEN ENDING                         */}
        {/* ========================================================================= */}
        <section
          id="aprendizaje-continuo"
          className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#111111]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#111111] font-mono font-bold">
              <span>12 / FINAL ABIERTO</span>
              <span className="text-[#E24B6A]">✦</span>
            </div>
            <div className="text-xs font-mono text-[#726E67]">
              EXPEDIENTE ABIERTO
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#111111] leading-[0.88] tracking-tight">
              ESTE ARCHIVO <br />
              <span className="italic font-light">
                SIGUE CRECIENDO.
                <span className="inline-block text-[#E24B6A] not-italic ml-2 sm:ml-4 text-5xl sm:text-7xl">
                  ✦
                </span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xl sm:text-2xl text-[#111111] leading-relaxed font-serif">
                “Continúo capacitándome y nuevas credenciales se incorporarán aquí conforme complete nuevos procesos de formación.”
              </p>

              <div className="pt-4 flex items-center gap-3 font-mono text-xs text-[#726E67]">
                <span className="w-8 h-[1px] bg-[#111111]" />
                <span>Actualización periódica por Mactzil</span>
              </div>
            </div>

            {/* Las Etiquetas Físicas y la Hoja del Registro 08 ? (Open Ending) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Etiqueta 1: EN PROCESO */}
              <div className="bg-[#FFFDF9] border-2 border-[#111111] rounded-2xl p-6 shadow-[5px_5px_0px_#111111] rotate-[2.5deg] hover:rotate-0 transition-transform duration-200 cursor-default">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#726E67] border-b border-[#111111] pb-2 mb-3">
                  PRÓXIMA CREDENCIAL
                </div>
                <div className="font-serif text-2xl sm:text-3xl text-[#111111] flex items-center justify-between">
                  <span className="italic">EN PROCESO ●</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E24B6A] animate-pulse" />
                </div>
              </div>

              {/* Etiqueta 2: PRÓXIMAMENTE */}
              <div className="bg-[#F4DFD8] border-2 border-[#111111] rounded-2xl p-6 shadow-[5px_5px_0px_#111111] -rotate-1 hover:rotate-0 transition-transform duration-200 cursor-default">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#726E67] border-b border-[#111111] pb-2 mb-3">
                  NUEVAS INSIGNIAS
                </div>
                <div className="font-serif text-2xl sm:text-3xl text-[#111111] flex items-center justify-between">
                  <span className="italic">PRÓXIMAMENTE ✦</span>
                  <span className="font-mono text-xs px-2.5 py-1 bg-[#111111] text-[#FAF7F2] rounded">
                    En cola
                  </span>
                </div>
              </div>

              {/* La Tarjeta del Futuro: 08 ? Asomándose en el Viewport */}
              <div className="bg-[#EAE4F0] border-2 border-dashed border-[#111111] rounded-2xl p-6 shadow-sm rotate-[-3deg] hover:rotate-0 transition-transform duration-200 flex items-center justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#111111]">
                    08
                  </div>
                  <div className="text-xs font-mono text-[#726E67]">
                    PRÓXIMO REGISTRO EN FORMACIÓN
                  </div>
                </div>
                <div className="font-serif text-5xl text-[#111111] italic">
                  ?
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* MODAL DE INSPECCIÓN DE HOJA DE CERTIFICADO (ARCHIVAL LIGHTBOX VIEWER)    */}
      {/* ========================================================================= */}
      {modalCourse && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setModalCourse(null)}
        >
          <div
            className="bg-[#FFFDF9] border-2 border-[#111111] rounded-3xl p-6 sm:p-10 max-w-2xl w-full shadow-[12px_12px_0px_#111111] relative paper-grain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Washi Tape Superior */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#FAF7F2] border border-[#111111] -rotate-1 shadow-xs" />

            {/* Botón de Cierre */}
            <button
              type="button"
              onClick={() => setModalCourse(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full border-2 border-[#111111] bg-[#FAF7F2] hover:bg-[#E24B6A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del Certificado */}
            <div className="border-b-2 border-[#111111] pb-5 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#726E67] uppercase mb-1">
                <span>GOOGLE PROFESSIONAL CERTIFICATE</span>
                <span>·</span>
                <span>MÓDULO {modalCourse.number} / 07</span>
              </div>
              <div className="font-serif text-xl sm:text-2xl text-[#111111]">
                Acreditación Individual de Curso
              </div>
            </div>

            {/* Cuerpo del Certificado */}
            <div className="space-y-6 my-6">
              <div className="p-6 bg-[#FAF7F2] border-2 border-[#111111] rounded-2xl relative">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#726E67] mb-1">
                  TÍTULO OFICIAL DEL CURSO
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] mb-3 leading-tight">
                  {modalCourse.name}
                </h3>
                <p className="font-sans text-sm text-[#5F5B54] mb-4">
                  {modalCourse.summary}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#111111] text-xs font-mono">
                  <div>
                    <span className="text-[#726E67] block">EMISOR:</span>
                    <span className="font-bold text-[#111111]">GOOGLE</span>
                  </div>
                  <div>
                    <span className="text-[#726E67] block">ESTADO:</span>
                    <span className="font-bold text-emerald-800">COMPLETADO ✓</span>
                  </div>
                  <div>
                    <span className="text-[#726E67] block">FECHA:</span>
                    <span className="font-bold text-[#111111]">{modalCourse.date}</span>
                  </div>
                </div>

                {/* Sello Rubber Stamp Verificado */}
                <div className="mt-6 flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#111111]/30">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-dashed border-[#E24B6A] text-[#E24B6A] font-mono text-xs font-bold rotate-[-2deg]">
                    <span>✦ VERIFICADO · GOOGLE AI 2026</span>
                  </div>
                  <div className="font-mono text-xs text-[#726E67]">
                    REGISTRO: {modalCourse.code}
                  </div>
                </div>
              </div>

              {/* Nota sobre certificado original */}
              <div className="text-xs font-mono text-[#726E67] bg-[#FFFDF9] border border-[#111111] p-3 rounded-xl flex items-center gap-2">
                <span className="text-[#E24B6A] font-bold">ℹ</span>
                <span>
                  El certificado PDF original contiene la información completa de acreditación de la plataforma emisora.
                </span>
              </div>
            </div>

            {/* Acciones */}
            <div className="pt-4 border-t-2 border-[#111111] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleCopyCode(modalCourse.code)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#111111] rounded-xl font-mono text-xs font-bold hover:bg-[#FAF7F2] transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedCode ? '¡CÓDIGO COPIADO!' : 'COPIAR REGISTRO'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrintModal}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#111111] rounded-xl font-mono text-xs font-bold hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>IMPRIMIR FICHA</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalCourse(null)}
                  className="px-5 py-2 bg-[#111111] text-[#FAF7F2] hover:bg-[#E24B6A] transition-colors rounded-xl font-mono text-xs font-bold cursor-pointer"
                >
                  CERRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PIE DE PÁGINA (FOOTER CON RETORNO Y COLOFÓN)                             */}
      {/* ========================================================================= */}
      <footer id="portfolio-return" className="bg-[#FAF7F2] border-t-2 border-[#111111] py-16 sm:py-20 relative paper-grain">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Bloque interactivo de retorno */}
          <div className="border-2 border-[#111111] rounded-3xl p-8 sm:p-12 bg-[#FFFDF9] shadow-[6px_6px_0px_#111111] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E24B6A] font-mono font-semibold mb-2">
                <span>✦</span>
                <span>PORTAFOLIO DE DISEÑO &amp; MARKETING</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] mb-1">
                Volver al Portafolio
              </h3>
              <p className="text-sm text-[#5F5B54]">
                Regresar al cuerpo principal de proyectos y dirección de arte de Mactzil.
              </p>
            </div>

            <a
              href="https://readymag.website/6506559"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-3 px-7 py-3.5 bg-[#111111] text-[#FAF7F2] hover:bg-[#E24B6A] transition-colors duration-200 rounded-full text-xs sm:text-sm font-mono uppercase tracking-wider shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Volver al Portafolio</span>
              <span className="text-[#FAF7F2] text-xs">↗</span>
            </a>
          </div>

          {/* Ficha técnica y navegación */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 pb-10 border-b border-[#111111] text-xs font-mono">
            <div>
              <div className="font-serif text-lg text-[#111111] mb-2 flex items-center gap-1.5 font-normal">
                <span>Archivo / Mactzil</span>
                <span className="text-[#E24B6A] text-xs">✦</span>
              </div>
              <p className="text-[#726E67] leading-relaxed max-w-sm">
                Extensión editorial de portafolio personal.
              </p>
            </div>

            <div>
              <div className="text-[#111111] uppercase tracking-wider mb-2 font-bold">
                Navegación
              </div>
              <ul className="space-y-1.5 text-[#5F5B54]">
                <li>
                  <a href="#hero" className="hover:text-[#E24B6A] transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#stack-certificados" className="hover:text-[#E24B6A] transition-colors">
                    Stack 01–07
                  </a>
                </li>
                <li>
                  <a href="#recorrido" className="hover:text-[#E24B6A] transition-colors">
                    Recorrido
                  </a>
                </li>
                <li>
                  <a href="#areas-aprendizaje" className="hover:text-[#E24B6A] transition-colors">
                    Áreas de Aprendizaje
                  </a>
                </li>
                <li>
                  <a href="#palabras-collage" className="hover:text-[#E24B6A] transition-colors">
                    Conceptos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[#111111] uppercase tracking-wider mb-2 font-bold">
                Credencial Activa
              </div>
              <div className="text-[#111111] font-medium">
                Google AI Professional
              </div>
              <div className="text-[#726E67] mt-0.5">
                7 / 7 Cursos Completados ✓
              </div>
              <div className="text-[#8A6D3B] text-[11px] mt-1 font-mono">
                Credencial Digital · En espera de emisión ●
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#726E67] font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#E24B6A]">✦</span>
              <span>© 2026 Mactzil. Archivo Vivo de Aprendizaje.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#hero" className="hover:text-[#111111] transition-colors">
                Arriba ↑
              </a>
              <span aria-hidden="true" className="text-[#C8C2B8]">·</span>
              <a
                href="https://readymag.website/6506559"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E24B6A] transition-colors text-[#111111] font-bold"
              >
                Portafolio ↗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
