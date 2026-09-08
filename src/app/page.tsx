"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ArrowRight,
  Truck,
  ShoppingCart,
  Shield,
  CreditCard,
  Smartphone,
  MapPin,
  Leaf,
  Heart,
  Globe,
  Languages,
  ChevronLeft,
  ChevronRight,
  Search,
  Zap,
  BookOpen,
  Anchor,
  UserCheck,
  TrendingUp,
  Award,
  Sparkles,
  FileText,
  ShieldCheck,
  ClipboardList,
  CheckCircle2,
  X,
  Download,
  ExternalLink,
  Play,
  Film,
  Camera,
} from "lucide-react"
import { CincaTickerBar } from "@/components/cinca/CincaTickerBar"
import { CincaPriceChart } from "@/components/cinca/CincaPriceChart"
import { CincaLiveMap } from "@/components/cinca/CincaLiveMap"

type Language = "pt" | "en" | "fr" | "es"

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("pt")
  const [activeSurveyModal, setActiveSurveyModal] = useState<string | null>(null)
  const [activeVideoModal, setActiveVideoModal] = useState<{ src: string; title: string; desc: string; tag: string } | null>(null)
  const [activePhotoModal, setActivePhotoModal] = useState<{ src: string; title: string; desc: string; tag: string } | null>(null)
  const [activeMediaTab, setActiveMediaTab] = useState<"todos" | "videos" | "sebrae" | "campo">("todos")
  const [showAllMedia, setShowAllMedia] = useState(false)

  // Testimonials Data matching layout mockup & updated terminology
  const testimonials = [
    {
      quote: "Agora consigo vender com mais segurança e melhor preço.",
      author: "Seu Raimundo",
      role: "Produtor – Mazagão",
      image: "/midia/IMG-20260412-WA0062.jpg.jpeg",
    },
    {
      quote: "Com o AçaíDirect minha rota tem mais valor.",
      author: "João Carlos",
      role: "Barqueiro – Macapá",
      image: "/midia/SEBRAE_FEVEREIRO_12 02 2026 (2).jpg.jpeg",
    },
    {
      quote: "É mais fácil encontrar açaí de qualidade e planejar a produção.",
      author: "Dona Maria",
      role: "Dona de Batedeira – Santana",
      image: "/midia/IMG-20260814-WA0041(1).jpg.jpeg",
    },
    {
      quote: "O AçaíDirect facilita a negociação e dá mais confiança.",
      author: "Carlos Almeida",
      role: "Comprador – Belém",
      image: "/midia/SEBRAE_FEVEREIRO_12 02 2026 (5).jpg.jpeg",
    },
  ]

  const fieldMediaItems = [
    {
      id: "v1",
      type: "video" as const,
      category: "videos" as const,
      title: "Colheita e Embarque Fluvial de Açaí",
      desc: "Registro em vídeo da colheita nas ilhas da Amazônia e transporte em embarcação regional.",
      src: "/midia/239.mp4",
      poster: "/midia/240.jpg.jpeg",
      tag: "VÍDEO EM CAMPO",
    },
    {
      id: "v2",
      type: "video" as const,
      category: "videos" as const,
      title: "Registro de Campo & Aplicativo AçaíDirect",
      desc: "Uso do aplicativo em áreas ribeirinhas para cadastro de lotes e precificação.",
      src: "/midia/VID-20260412-WA0098.mp4",
      poster: "/midia/IMG-20260412-WA0062.jpg.jpeg",
      tag: "VÍDEO DA OPERAÇÃO",
    },
    {
      id: "v3",
      type: "video" as const,
      category: "videos" as const,
      title: "Chegada de Embarcação ao Porto Fluvial",
      desc: "Desembarque das sacas de açaí in natura e conferência de frescor.",
      src: "/midia/WhatsApp Video 2026-09-07 at 14.50.13.mp4",
      poster: "/midia/IMG-20260814-WA0041(1).jpg.jpeg",
      tag: "LOGÍSTICA FLUVIAL",
    },
    {
      id: "v4",
      type: "video" as const,
      category: "videos" as const,
      title: "Seleção e Qualidade do Fruto de Açaí",
      desc: "Inspeção dos frutos nativos antes do processamento na batedeira.",
      src: "/midia/IMG_0200.MOV.mp4",
      poster: "/midia/240.jpg.jpeg",
      tag: "QUALIDADE & MANEJO",
    },
    {
      id: "v5",
      type: "video" as const,
      category: "videos" as const,
      title: "Estruturação em Batedeira Local",
      desc: "Acompanhamento do processamento do açaí com padrões de higiene.",
      src: "/midia/IMG_0207.MOV.mp4",
      poster: "/midia/IMG-20260814-WA0041(1).jpg.jpeg",
      tag: "BATEDEIRAS",
    },
    {
      id: "v6",
      type: "video" as const,
      category: "videos" as const,
      title: "Encontro de Produtores e Validação",
      desc: "Reunião de campo com comunitários e parceiros institucionais.",
      src: "/midia/WhatsApp Video 2026-09-07 at 15.56.42.mp4",
      poster: "/midia/SEBRAE_FEVEREIRO_12 02 2026 (2).jpg.jpeg",
      tag: "ENCONTRO DE CAMPO",
    },
    {
      id: "f1",
      type: "photo" as const,
      category: "sebrae" as const,
      title: "Capacitação Técnica & SEBRAE",
      desc: "Encontro institucional do SEBRAE para fortalecimento da cadeia do açaí.",
      src: "/midia/SEBRAE_FEVEREIRO_12 02 2026 (2).jpg.jpeg",
      tag: "EVENTO SEBRAE",
    },
    {
      id: "f2",
      type: "photo" as const,
      category: "sebrae" as const,
      title: "Oficina com Produtores e Lideranças",
      desc: "Apresentação da plataforma AçaíDirect aos produtores da região.",
      src: "/midia/SEBRAE_FEVEREIRO_12 02 2026 (5).jpg.jpeg",
      tag: "CAPACITAÇÃO",
    },
    {
      id: "f3",
      type: "photo" as const,
      category: "sebrae" as const,
      title: "Encontro de Negócios & Sustentabilidade",
      desc: "Reunião com batedeiras e cooperativas ribeirinhas.",
      src: "/midia/SEBRAE_FEVEREIRO_12 02 2026 (6).jpg.jpeg",
      tag: "PARCERIA SEBRAE",
    },
    {
      id: "f4",
      type: "photo" as const,
      category: "sebrae" as const,
      title: "Validação do Modelo de Rastreabilidade",
      desc: "Discussão sobre precificação justa e dados transparentes no porto.",
      src: "/midia/SEBRAE_FEVEREIRO_12 02 2026 (9).jpg.jpeg",
      tag: "RASTREABILIDADE",
    },
    {
      id: "f5",
      type: "photo" as const,
      category: "campo" as const,
      title: "Açaí Nativo de Manejo Sustentável",
      desc: "Fruta fresca recém-colhida nas áreas de várzea da Amazônia.",
      src: "/midia/240.jpg.jpeg",
      tag: "FRUTA IN NATURA",
    },
    {
      id: "f6",
      type: "photo" as const,
      category: "campo" as const,
      title: "Produtor e Peconheiro no Açaizal",
      desc: "Trabalho tradicional de colheita sustentável sem desmatamento.",
      src: "/midia/IMG-20260412-WA0062.jpg.jpeg",
      tag: "MANEJO SUSTENTÁVEL",
    },
    {
      id: "f7",
      type: "photo" as const,
      category: "campo" as const,
      title: "Batedeira e Processamento Local",
      desc: "Estabelecimento de polpação de açaí pronto para distribuição.",
      src: "/midia/IMG-20260814-WA0041(1).jpg.jpeg",
      tag: "BATEDEIRA LOCAL",
    },
    {
      id: "f8",
      type: "photo" as const,
      category: "campo" as const,
      title: "Validação com a Comunidade",
      desc: "Teste e aceitação da plataforma por quem vive da floresta.",
      src: "/midia/WhatsApp Image 2026-09-07 at 15.33.49.jpeg",
      tag: "VALIDAÇÃO REAL",
    },
  ]

  const producerRights = [
    {
      title: "Crédito Rural PRONAF",
      desc: "Linha de financiamento para custeio de colheita e equipamentos ribeirinhos com taxa reduzida.",
      tag: "Financiamento",
      orgao: "Banco da Amazônia / MDA",
    },
    {
      title: "Selo de Origem Açaí Amapá",
      desc: "Certificação de procedência e sustentabilidade para fruto nativo colhido em manejo sustentável.",
      tag: "Certificação",
      orgao: "Governo do Amapá / RURAP",
    },
    {
      title: "Boas Práticas e Sanidade",
      desc: "Regras sanitárias de higienização de cestos e barcos para manutenção do frescor e valor de mercado.",
      tag: "Capacitação",
      orgao: "EMBRAPA / ANVISA",
    },
    {
      title: "Garantia de Preço Mínimo",
      desc: "Proteção contra oscilações severas no porto através da rede de compradores diretos do AçaíDirect.",
      tag: "Comercialização",
      orgao: "AçaíDirect / CONAB",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#10B981] selection:text-white font-sans">
      {/* 1. Header Navbar (Clean White Header) */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs">
        <div className="container mx-auto px-4 py-3.5 flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="AçaíDirect Logo" className="w-10 h-10 object-contain" />
            <div>
              <span className="text-xl font-black text-[#05281E] tracking-wide block leading-none">AçaíDirect</span>
              <span className="text-[9px] font-bold text-[#10B981] tracking-widest uppercase block mt-1">
                DA AMAZÔNIA PARA O MUNDO
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-extrabold text-[#475569]">
            <a href="#inicio" className="text-[#10B981] border-b-2 border-[#10B981] pb-0.5 font-black">Início</a>
            <a href="#como-funciona" className="hover:text-[#05281E] transition-colors">Como funciona</a>
            <a href="#credenciamento" className="hover:text-[#05281E] transition-colors">Credenciamento</a>
            <Link
              href="/cinca"
              className="inline-flex items-center gap-1.5 bg-[#05281E] text-[#10B981] hover:bg-[#07382B] px-3.5 py-1.5 rounded-full font-black text-xs transition-all shadow-xs"
            >
              <Zap className="w-3.5 h-3.5 fill-[#10B981]" /> CINCA
            </Link>
            <a href="#em-campo" className="hover:text-[#05281E] transition-colors">Em Campo</a>
            <a href="#depoimentos" className="hover:text-[#05281E] transition-colors">Vozes do Açaí</a>
            <a href="#direitos" className="hover:text-[#05281E] transition-colors">Direitos & Biblioteca</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-slate-200 bg-slate-100 hover:bg-slate-200 text-[#05281E]">
                  <Languages className="h-4 w-4 text-[#10B981]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border-slate-200 text-[#0F172A] shadow-xl">
                <DropdownMenuItem className="cursor-pointer hover:bg-slate-100" onClick={() => setLanguage("pt")}>
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-slate-100" onClick={() => setLanguage("en")}>
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-slate-100" onClick={() => setLanguage("fr")}>
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-slate-100" onClick={() => setLanguage("es")}>
                  🇪🇸 Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="https://drive.google.com/file/d/1FtXdH2tfFudeNV7m_DV4HWBJ8kUMtkO3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#10B981] via-[#059669] to-[#05281E] hover:opacity-95 text-white font-black border border-white/20 shadow-md text-xs px-3.5 py-2 uppercase tracking-wide rounded-xl">
                ACESSE O APP 
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section (Landscape Hero Image with Dark Overlay as in Mockup) */}
      <section id="inicio" className="relative py-20 lg:py-28 overflow-hidden bg-[#052219]">
        {/* Background Landscape Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner_hero.png"
            alt="AçaíDirect na Amazônia"
            className="w-full h-full object-cover opacity-60 filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#052219]/95 via-[#052219]/75 to-[#052219]/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#052219] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Badge className="bg-[#10B981] text-black border-none font-black px-3.5 py-1.5 rounded-full text-xs inline-flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                AÇAÍDIRECT
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Conectando o produtor da Amazônia ao{" "}
                <span className="text-[#A3E635]">mercado global</span>
              </h1>

              <p className="text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-medium">
                Produtores, <span className="text-[#A3E635] font-bold">Peconheiros</span>, barqueiros, donos de batedeiras, compradores, rotas, mercado, rastreabilidade e informação. Juntos por um açaí mais justo, sustentável e uma Amazônia mais forte.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://drive.google.com/file/d/1FtXdH2tfFudeNV7m_DV4HWBJ8kUMtkO3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#A3E635] hover:bg-[#86EFAC] text-[#05281E] font-black px-8 rounded-2xl shadow-xl text-base">
                    Baixar o App (APK) <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button
                  size="lg"
                  onClick={() =>
                    setActiveVideoModal({
                      src: "/midia/239.mp4",
                      title: "Operação AçaíDirect em Campo",
                      desc: "Vídeo completo demonstrando a colheita nas ilhas, transporte fluvial e uso da plataforma AçaíDirect.",
                      tag: "VÍDEO DA OPERAÇÃO",
                    })
                  }
                  variant="outline"
                  className="border-[#A3E635]/60 bg-[#10B981]/20 hover:bg-[#10B981]/40 text-white rounded-2xl px-6 text-base font-bold flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-all"
                >
                  <Play className="w-5 h-5 text-[#A3E635] fill-[#A3E635]" /> Assistir Vídeo em Campo
                </Button>
                <a href="https://drive.google.com/file/d/1FtXdH2tfFudeNV7m_DV4HWBJ8kUMtkO3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white/40 bg-black/30 backdrop-blur-md text-white hover:bg-white/20 rounded-2xl px-8 text-base font-bold">
                    Acessar agora
                  </Button>
                </a>
              </div>

              {/* Bottom Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/20 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span>Mais oportunidades para quem produz</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Cadeia mais conectada e transparente</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#A64DFF] shrink-0" />
                  <span>Floresta em pé gera renda</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Do Amapá para o mundo</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Overlay Badge Image */}
            <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
              <img
                src="/banner_effect.png"
                alt="AçaíDirect - Da Amazônia para o Mundo - Pessoas, Territórios, Oportunidades"
                className="w-full h-auto max-h-[440px] object-contain filter drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Live CINCA Ticker Bar (Dark Emerald Bar) */}
      <CincaTickerBar />

      {/* 4. Credenciamento Banner Card (Pixel-Perfect Match to Mockup Banner) */}
      <section id="credenciamento" className="py-10 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl lg:rounded-[28px] bg-gradient-to-r from-[#1D0836] via-[#2A0A4B] to-[#17052E] border border-[#A64DFF]/30 p-5 lg:p-6 shadow-2xl text-white overflow-hidden">
            {/* Background Foliage Overlay (Left Corner) */}
            <div className="absolute -bottom-2 -left-2 w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 pointer-events-none z-0 mix-blend-screen opacity-90">
              <img
                src="/folhas_banner_esq.jpg"
                alt=""
                className="w-full h-full object-cover rounded-bl-3xl"
              />
            </div>

            {/* Background Foliage Overlay (Right Corner) */}
            <div className="absolute -top-6 -right-6 w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 pointer-events-none z-0 mix-blend-screen opacity-50 scale-x-[-1] scale-y-[-1]">
              <img
                src="/folhas_banner_esq.jpg"
                alt=""
                className="w-full h-full object-cover rounded-tr-3xl"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              
              {/* Left Column: Text & Subtitle with Green Leaf Icon */}
              <div className="flex items-center gap-4 text-left max-w-xl">
                {/* Decorative Green Leaf SVG */}
                <div className="hidden sm:flex shrink-0 text-[#16A34A] items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 lg:w-14 lg:h-14">
                    <path d="M17.5 3C14 3 11.5 5.5 10.5 8C9.5 5.5 7 3 3.5 3C3.5 10 9 14.5 11 21H13C15 14.5 20.5 10 20.5 3H17.5Z" />
                  </svg>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                    Faça seu credenciamento no <span className="text-[#A3E635]">AçaíDirect</span>
                  </h2>
                  <p className="text-xs lg:text-sm text-slate-200 font-medium leading-relaxed">
                    Cadastre-se na plataforma e participe da cadeia do açaí com mais conexão, rastreabilidade e oportunidades de mercado.
                  </p>
                  <p className="text-xs lg:text-sm text-slate-300 font-medium">
                    Escolha seu perfil e comece agora: produtor, barqueiro ou empresário.
                  </p>
                </div>
              </div>

              {/* Middle Column: 3 Slanted Profile Cards (Produtor, Barqueiro, Empresário) */}
              <div className="flex items-center justify-center gap-3 shrink-0">
                {/* Card 1: Produtor */}
                <div className="relative w-28 h-40 lg:w-32 lg:h-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform -skew-x-3 hover:skew-x-0 transition-transform duration-300 group">
                  <img
                    src="/depoimento_raimundo.jpg"
                    alt="Produtor"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-11/12">
                    <div className="bg-[#05281E]/90 backdrop-blur-md border border-[#10B981] text-white px-2 py-0.5 rounded-full text-[11px] font-extrabold flex items-center justify-center gap-1 shadow-md">
                      <Leaf className="w-3 h-3 text-[#A3E635] fill-[#A3E635]" /> Produtor
                    </div>
                  </div>
                </div>

                {/* Card 2: Barqueiro */}
                <div className="relative w-28 h-40 lg:w-32 lg:h-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform -skew-x-3 hover:skew-x-0 transition-transform duration-300 group">
                  <img
                    src="/depoimento_joao.jpg"
                    alt="Barqueiro"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-11/12">
                    <div className="bg-[#031B29]/90 backdrop-blur-md border border-[#38BDF8] text-white px-2 py-0.5 rounded-full text-[11px] font-extrabold flex items-center justify-center gap-1 shadow-md">
                      <Truck className="w-3 h-3 text-[#38BDF8]" /> Barqueiro
                    </div>
                  </div>
                </div>

                {/* Card 3: Empresário */}
                <div className="relative w-28 h-40 lg:w-32 lg:h-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl transform -skew-x-3 hover:skew-x-0 transition-transform duration-300 group">
                  <img
                    src="/depoimento_carlos.jpg"
                    alt="Empresário"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-11/12">
                    <div className="bg-[#210836]/90 backdrop-blur-md border border-[#A64DFF] text-white px-2 py-0.5 rounded-full text-[11px] font-extrabold flex items-center justify-center gap-1 shadow-md">
                      <UserCheck className="w-3 h-3 text-[#A64DFF]" /> Empresário
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Action Buttons Stack */}
              <div className="flex flex-col gap-2.5 shrink-0 w-full sm:w-auto">
                <a href="https://drive.google.com/file/d/1FtXdH2tfFudeNV7m_DV4HWBJ8kUMtkO3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" className="bg-[#A3E635] hover:bg-[#86EFAC] text-[#05281E] font-black rounded-full px-8 py-3.5 text-sm lg:text-base shadow-xl w-full">
                    Cadastrar agora <ArrowRight className="w-4 h-4 ml-1 stroke-[2.5]" />
                  </Button>
                </a>
                <a href="https://drive.google.com/file/d/1FtXdH2tfFudeNV7m_DV4HWBJ8kUMtkO3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" variant="outline" className="bg-[#18052E]/80 border border-[#10B981]/60 text-white hover:bg-[#2A0A4B] rounded-full px-8 py-3 text-xs lg:text-sm font-bold w-full">
                    Saiba como se credenciar
                  </Button>
                </a>
              </div>

              {/* Far Right Callout Image Effect */}
              <div className="hidden xl:flex items-center justify-center shrink-0 max-w-[160px]">
                <img
                  src="/banner_effect_cred.png"
                  alt="Juntos por mais oportunidades"
                  className="w-full h-auto object-contain max-h-[140px] filter drop-shadow-md"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Grid Row: Como Funciona (Left 2x2 Steps) vs CINCA Live Dashboard (Right Dark Emerald Card) */}
      <section id="como-funciona" className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 6 Cols: Como Funciona Header + 2x2 Steps Card */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-5 lg:p-7 shadow-xs text-left flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-wider block mb-1">
                    FLORESTA AO MERCADO
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-black text-[#0B1E36] tracking-tight">
                    O que é o AÇAÍDIRECT e como funciona?
                  </h2>
                  <p className="text-xs lg:text-sm text-slate-500 font-medium mt-1">
                    Da floresta ao mercado, mais conexão em cada etapa.
                  </p>
                </div>

                {/* 2x2 Grid of 4 Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {/* Step 1 */}
                  <div className="bg-white border border-slate-200/80 hover:border-[#10B981] transition-all rounded-2xl overflow-hidden shadow-2xs group flex flex-col h-full">
                    <div className="relative flex-1 min-h-[180px] lg:min-h-[210px] overflow-hidden bg-slate-100">
                      <img
                        src="/passo_peconheiro.jpg"
                        alt="Peconheiro"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#16A34A] text-white font-black text-xs flex items-center justify-center border-2 border-white shadow-md z-10">
                        1
                      </span>
                    </div>
                    <div className="p-4 space-y-1 bg-white shrink-0 border-t border-slate-100">
                      <h3 className="text-base font-black text-[#0B1E36]">Peconheiro</h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        É contratado pelo produtor e faz a colheita e a debulha das peconhas no açaizal.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white border border-slate-200/80 hover:border-[#9333EA] transition-all rounded-2xl overflow-hidden shadow-2xs group flex flex-col h-full">
                    <div className="relative flex-1 min-h-[180px] lg:min-h-[210px] overflow-hidden bg-slate-100">
                      <img
                        src="/depoimento_maria.jpg"
                        alt="Produtor cadastra a oferta"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#9333EA] text-white font-black text-xs flex items-center justify-center border-2 border-white shadow-md z-10">
                        2
                      </span>
                    </div>
                    <div className="p-4 space-y-1 bg-white shrink-0 border-t border-slate-100">
                      <h3 className="text-base font-black text-[#0B1E36]">Produtor cadastra a oferta</h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Registra a produção antes ou depois de colher na plataforma.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white border border-slate-200/80 hover:border-[#C026D3] transition-all rounded-2xl overflow-hidden shadow-2xs group flex flex-col h-full">
                    <div className="relative flex-1 min-h-[180px] lg:min-h-[210px] overflow-hidden bg-slate-100">
                      <img
                        src="/depoimento_joao.jpg"
                        alt="Barqueiro informa a rota"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#C026D3] text-white font-black text-xs flex items-center justify-center border-2 border-white shadow-md z-10">
                        3
                      </span>
                    </div>
                    <div className="p-4 space-y-1 bg-white shrink-0 border-t border-slate-100">
                      <h3 className="text-base font-black text-[#0B1E36]">Barqueiro informa a rota</h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Indica origem, destino e previsão de chegada da carga.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white border border-slate-200/80 hover:border-[#0284C7] transition-all rounded-2xl overflow-hidden shadow-2xs group flex flex-col h-full">
                    <div className="relative flex-1 min-h-[180px] lg:min-h-[210px] overflow-hidden bg-slate-100">
                      <img
                        src="/passo_empresarios.jpg"
                        alt="Empresários compram direto"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#0284C7] text-white font-black text-xs flex items-center justify-center border-2 border-white shadow-md z-10">
                        4
                      </span>
                    </div>
                    <div className="p-4 space-y-1 bg-white shrink-0 border-t border-slate-100">
                      <h3 className="text-base font-black text-[#0B1E36]">Empresários compram direto</h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Donos de batedeiras e indústrias compram açaí direto do produtor no AçaíDirect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: CINCA Live Dashboard Card (Dark Emerald Container) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-[#041F17] border border-[#10B981]/40 rounded-3xl p-6 lg:p-7 shadow-2xl text-left space-y-6 text-white flex flex-col justify-between h-full relative overflow-hidden">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#10B981]/20 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-[#10B981] tracking-widest uppercase block">
                      FERRAMENTA DO AÇAÍDIRECT
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight flex items-center gap-2">
                      <Zap className="w-7 h-7 text-[#10B981] fill-[#10B981] shrink-0" />
                      Central de Informações da Cadeia Produtiva do Açaí – CINCA
                    </h3>
                    <p className="text-xs text-[#A7F3D0] font-medium pt-1">
                      Inteligência de Mercado, Transparência & Rastreabilidade Fluvial em Tempo Real
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-[#032C20] border border-[#10B981]/40 px-3 py-1.5 rounded-xl text-xs font-bold text-[#A7F3D0] shrink-0 self-start">
                    <Leaf className="w-3.5 h-3.5 text-[#10B981]" /> Observatório AçaíDirect
                  </div>
                </div>

                <div className="bg-[#031812] border border-[#10B981]/30 p-4 rounded-2xl space-y-2">
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-wide block">
                    O QUE É E QUAL A FUNÇÃO DO CINCA?
                  </span>
                  <p className="text-xs lg:text-sm text-slate-200 leading-relaxed font-medium">
                    O <strong>CINCA</strong> (Central de Informações da Cadeia Produtiva do Açaí) é o centro de inteligência de mercado do AçaíDirect. Sua função é monitorar em tempo real os preços indicativos da saca de açaí, o fluxo de embarcações nos rios amazônicos, o tempo de colheita e a rastreabilidade do fruto, fornecendo dados estratégicos e segurança para produtores, barqueiros e donos de batedeiras.
                  </p>
                </div>

                {/* Call-to-action & Subtext */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#031812] border border-[#10B981]/30 p-4 rounded-2xl">
                  <Link href="/cinca" className="shrink-0">
                    <Button size="lg" className="bg-[#A3E635] hover:bg-[#86EFAC] text-[#05281E] font-black rounded-full px-6 text-sm shadow-lg">
                      Abrir painel completo do CINCA <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <span className="text-xs text-slate-300 font-medium">
                    Dados em tempo real para um açaí mais forte.
                  </span>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#031812] border border-[#10B981]/20 p-3 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-bold block">Preço médio (saca)</span>
                    <span className="text-base lg:text-lg font-black text-white">R$ 320,00</span>
                    <span className="text-[9px] text-[#34D399] font-black block">▲ +4,2%</span>
                  </div>

                  <div className="bg-[#031812] border border-[#10B981]/20 p-3 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-bold block">Volume hoje</span>
                    <span className="text-base lg:text-lg font-black text-white">18,6 t</span>
                    <span className="text-[9px] text-[#A7F3D0] block">367 sacas</span>
                  </div>

                  <div className="bg-[#031812] border border-[#10B981]/20 p-3 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-bold block">Embarcações em rota</span>
                    <span className="text-base lg:text-lg font-black text-[#38BDF8]">7</span>
                    <span className="text-[9px] text-slate-400 block">Monitoradas</span>
                  </div>
                </div>

                {/* Sub Components: Price Chart & Live Map */}
                <div className="space-y-4">
                  <CincaPriceChart />
                  <CincaLiveMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AçaíDirect em Campo (Pesquisas e Questionários em Andamento) */}
      <section id="em-campo" className="py-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container mx-auto px-4 space-y-8">
          {/* Quadro: AÇAÍDIRECT EM CAMPO */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#05281E] via-[#073A2D] to-[#041F17] border border-[#10B981]/40 p-6 lg:p-8 shadow-2xl text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl text-left">
                <Badge className="bg-[#A3E635] text-[#05281E] font-black px-3.5 py-1 rounded-full text-xs inline-flex items-center gap-1.5 shadow-md">
                  <ClipboardList className="w-4 h-4 text-[#05281E]" /> PESQUISAS & AÇÕES COMUNITÁRIAS
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                  AÇAÍDIRECT EM CAMPO
                </h2>
                <p className="text-lg font-bold text-[#A7F3D0]">
                  Ações e pesquisas em andamento.
                </p>
                <p className="text-xs lg:text-sm text-slate-200 font-medium leading-relaxed">
                  Clique aqui e participe das nossas pesquisas respondendo os questionários para fortalecer o ecossistema do açaí na Amazônia.
                </p>
              </div>

              {/* 2 Questionnaire Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
                {/* Link Questionário Produtor */}
                <a
                  href="https://forms.gle/awqehxzaaDLefNFZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B241A] hover:bg-[#0E3224] border-2 border-[#10B981] p-5 rounded-2xl cursor-pointer transition-all duration-300 shadow-xl group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] text-[#05281E] flex items-center justify-center font-black shrink-0 shadow-md">
                      <Leaf className="w-5 h-5 fill-[#05281E]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-[#A3E635] uppercase block">Questionário Oficial</span>
                      <h3 className="text-sm font-black text-white group-hover:text-[#A3E635] transition-colors leading-tight">
                        PRODUTOR DE AÇAÍ
                      </h3>
                    </div>
                  </div>
                  <Button size="sm" className="bg-[#10B981] hover:bg-[#059669] text-[#05281E] font-black rounded-xl w-full text-xs shadow-md">
                    Responder Pesquisa <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </a>

                {/* Link Questionário Dono de Batedeira */}
                <a
                  href="https://forms.gle/a1Ekpy2oHr4HQzwW7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B241A] hover:bg-[#0E3224] border-2 border-[#38BDF8] p-5 rounded-2xl cursor-pointer transition-all duration-300 shadow-xl group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#38BDF8] text-[#031B29] flex items-center justify-center font-black shrink-0 shadow-md">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-[#38BDF8] uppercase block">Questionário Oficial</span>
                      <h3 className="text-sm font-black text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                        DONO DE BATEDEIRA
                      </h3>
                    </div>
                  </div>
                  <Button size="sm" className="bg-[#38BDF8] hover:bg-[#0284C7] text-[#031B29] font-black rounded-xl w-full text-xs shadow-md">
                    Responder Pesquisa <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Nova Subseção: GALERIA DE VÍDEOS & MÍDIA REAL EM CAMPO */}
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 lg:p-8 shadow-sm text-left space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-[#05281E] text-[#A3E635] border-none font-black text-xs">
                    <Film className="w-3.5 h-3.5 mr-1" /> REGISTROS DA AMAZÔNIA
                  </Badge>
                  <span className="text-xs font-bold text-slate-400">AMAPÁ & PARÁ</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-[#0B1E36] tracking-tight">
                  Galeria de Mídias & Vídeos da Operação Real
                </h3>
                <p className="text-xs lg:text-sm text-slate-500 font-medium mt-1">
                  Veja em vídeo e fotos como funciona o manejo sustentável, logística fluvial, batedeiras e encontros com o SEBRAE.
                </p>
              </div>

              {/* Media Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0">
                <button
                  onClick={() => setActiveMediaTab("todos")}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                    activeMediaTab === "todos"
                      ? "bg-[#05281E] text-[#A3E635] shadow-md"
                      : "bg-[#F1F5F9] text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  🌟 Todos ({fieldMediaItems.length})
                </button>
                <button
                  onClick={() => setActiveMediaTab("videos")}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    activeMediaTab === "videos"
                      ? "bg-[#05281E] text-[#A3E635] shadow-md"
                      : "bg-[#F1F5F9] text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Film className="w-3.5 h-3.5" /> Vídeos ({fieldMediaItems.filter((i) => i.type === "video").length})
                </button>
                <button
                  onClick={() => setActiveMediaTab("sebrae")}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    activeMediaTab === "sebrae"
                      ? "bg-[#05281E] text-[#A3E635] shadow-md"
                      : "bg-[#F1F5F9] text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  🏛️ SEBRAE ({fieldMediaItems.filter((i) => i.category === "sebrae").length})
                </button>
                <button
                  onClick={() => setActiveMediaTab("campo")}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    activeMediaTab === "campo"
                      ? "bg-[#05281E] text-[#A3E635] shadow-md"
                      : "bg-[#F1F5F9] text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  🌾 Campo & Frutos ({fieldMediaItems.filter((i) => i.category === "campo").length})
                </button>
              </div>
            </div>

            {/* Media Items Grid (1 row default with Ver Mais) */}
            {(() => {
              const filtered = fieldMediaItems.filter(
                (item) => activeMediaTab === "todos" || item.category === activeMediaTab
              )
              const visible = showAllMedia ? filtered : filtered.slice(0, 4)
              const hasMore = filtered.length > 4

              return (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {visible.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          if (item.type === "video") {
                            setActiveVideoModal({
                              src: item.src,
                              title: item.title,
                              desc: item.desc,
                              tag: item.tag,
                            })
                          } else {
                            setActivePhotoModal({
                              src: item.src,
                              title: item.title,
                              desc: item.desc,
                              tag: item.tag,
                            })
                          }
                        }}
                        className="group bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden hover:border-[#10B981] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                      >
                        <div className="relative aspect-video bg-slate-900 overflow-hidden">
                          {item.type === "video" ? (
                            <>
                              <video src={item.src} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-[#10B981] text-[#05281E] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                  <Play className="w-6 h-6 fill-[#05281E] ml-0.5" />
                                </div>
                              </div>
                              <Badge className="absolute top-2.5 left-2.5 bg-[#05281E]/90 backdrop-blur-md text-[#A3E635] text-[10px] font-black border border-[#10B981]/40">
                                🎥 VÍDEO MP4
                              </Badge>
                            </>
                          ) : (
                            <>
                              <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <Badge className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-black border border-white/20">
                                📸 FOTO REAL
                              </Badge>
                            </>
                          )}
                          <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-[#A7F3D0] text-[9px] font-bold px-2 py-0.5 rounded-md">
                            {item.tag}
                          </span>
                        </div>

                        <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                          <div>
                            <h4 className="text-sm font-black text-[#0B1E36] group-hover:text-[#10B981] transition-colors leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                              {item.desc}
                            </p>
                          </div>

                          {item.type === "video" ? (
                            <span className="text-xs font-bold text-[#10B981] flex items-center gap-1 pt-1 group-hover:underline">
                              Assistir em alta definição <Play className="w-3 h-3 fill-[#10B981]" />
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-[#0E5296] flex items-center gap-1 pt-1 group-hover:underline">
                              Ver foto ampliada <Camera className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {hasMore && (
                    <div className="flex justify-center pt-2">
                      <Button
                        onClick={() => setShowAllMedia(!showAllMedia)}
                        variant="outline"
                        className="bg-[#F1F5F9] hover:bg-[#E2E8F0] border-slate-300 text-[#05281E] font-black text-xs px-6 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                      >
                        {showAllMedia
                          ? "Recolher galeria (Mostrar apenas 1 linha)"
                          : `Ver todas as mídias (+${filtered.length - 4} registros)`}
                      </Button>
                    </div>
                  )}
                </div>
              )
            })()}
          </div>

          {/* 7. Quadro "Vozes do Açaí" (Posicionado no lugar de Rotas Logísticas) */}
          <div id="depoimentos" className="bg-white border border-[#E2E8F0] rounded-3xl p-5 lg:p-7 shadow-sm text-left">
            {/* Banner Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="text-xl lg:text-2xl font-black text-[#0B1E36] tracking-tight">
                  Vozes do Açaí
                </h2>
                <p className="text-xs lg:text-sm text-slate-500 font-medium">
                  Produtores, barqueiros e donos de batedeiras que acreditam no AçaíDirect.
                </p>
              </div>
              <a
                href="#depoimentos"
                className="text-xs lg:text-sm font-extrabold text-[#0E5296] hover:text-[#0A3D70] flex items-center gap-1.5 shrink-0 group transition-colors"
              >
                Ver todos os depoimentos <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 5 Horizontal Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4.5 items-stretch">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  {/* Persona Photo */}
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-22 h-22 sm:w-24 sm:h-24 lg:w-22 lg:h-22 xl:w-24 xl:h-24 object-cover rounded-2xl shrink-0 border border-slate-100 shadow-xs"
                  />

                  {/* Speech Bubble & Info */}
                  <div className="flex flex-col justify-between flex-1 min-h-[96px] h-full">
                    {/* Speech Bubble */}
                    <div className="bg-[#EFF4FB] border border-[#E2E8F0]/70 rounded-2xl p-2.5 lg:p-3 flex flex-col justify-between flex-1 relative shadow-2xs">
                      <p className="text-xs lg:text-[12.5px] font-semibold text-[#1E293B] leading-relaxed">
                        "{t.quote}"
                      </p>
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0B1E36] shadow-xs shrink-0 self-end mt-1.5 cursor-pointer hover:bg-slate-50 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="mt-1.5 px-0.5">
                      <span className="text-xs lg:text-sm font-black text-[#0B1E36] block leading-tight">
                        {t.author}
                      </span>
                      <span className="text-[11px] lg:text-xs text-slate-500 font-semibold block mt-0.5">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* 5th Brand Card */}
              <div className="flex items-center justify-between gap-3 p-3.5 lg:p-4 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl h-full min-h-[96px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 text-[#16A34A] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                      <path d="M17.5 3C14 3 11.5 5.5 10.5 8C9.5 5.5 7 3 3.5 3C3.5 10 9 14.5 11 21H13C15 14.5 20.5 10 20.5 3H17.5Z" />
                    </svg>
                  </div>
                  <span className="text-xs lg:text-sm font-black text-[#0B1E36] leading-tight max-w-[125px]">
                    Amazônia que conecta pessoas.
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[#0B1E36] shadow-xs shrink-0 cursor-pointer hover:bg-slate-50 transition-colors">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>

          {/* 8. Direitos, Informações e Oportunidades + Biblioteca AçaíDirect (Relocado do CINCA para a Homepage) */}
          <div id="direitos" className="bg-white border border-[#E2E8F0] rounded-3xl p-6 lg:p-8 shadow-sm space-y-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30 font-extrabold text-xs">
                  APOIO & CONHECIMENTO
                </Badge>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[#0B1E36] tracking-tight">
                DIREITOS, INFORMAÇÕES E OPORTUNIDADES
              </h2>
              <p className="text-xs lg:text-sm text-slate-500 font-medium mt-1">
                Informações acessíveis em linguagem simples sobre apoio, crédito e regularização na Amazônia.
              </p>
            </div>

            {/* Grid de Direitos do Produtor */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {producerRights.map((item, idx) => (
                <div key={idx} className="bg-[#F8FAFC] border border-slate-200/80 p-4 rounded-2xl hover:border-[#10B981] transition-all flex flex-col justify-between shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold text-[#16A34A] bg-[#16A34A]/10 border border-[#16A34A]/20 px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">{item.orgao}</span>
                    </div>
                    <h3 className="text-sm font-black text-[#0B1E36] mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium mb-3">{item.desc}</p>
                  </div>
                  <button className="text-xs font-bold text-[#10B981] hover:underline flex items-center gap-1 self-start">
                    Saiba como solicitar <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Subseção: Biblioteca AçaíDirect mostrando a cartilha (BAIXE AQUI) */}
            <div className="bg-[#05281E] border border-[#10B981]/40 rounded-2xl p-6 text-white space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#10B981]/20 pb-4">
                <div>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#A3E635]" /> Biblioteca AçaíDirect
                  </h3>
                  <p className="text-xs text-[#A7F3D0] mt-0.5 font-medium">
                    Cartilhas técnicas e guias práticos gratuitos para a cadeia produtiva do açaí.
                  </p>
                </div>
                <Badge className="bg-[#A3E635] text-[#05281E] font-black px-3 py-1 text-xs self-start sm:self-auto">
                  DOWNLOAD GRATUITO
                </Badge>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Cartilha 1 */}
                <div className="bg-[#031812] border border-[#10B981]/30 p-4 rounded-xl flex items-center justify-between gap-3 hover:border-[#10B981] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white leading-snug">
                        Cartilha de Boas Práticas de Manejo
                      </h4>
                      <span className="text-[10px] text-[#A7F3D0] block mt-0.5">PDF • Embrapa & AçaíDirect</span>
                    </div>
                  </div>
                  <a
                    href="#direitos"
                    onClick={(e) => {
                      e.preventDefault()
                      alert("Iniciando o download da Cartilha de Boas Práticas de Manejo em PDF...")
                    }}
                    className="shrink-0"
                  >
                    <Button size="sm" className="bg-[#A3E635] hover:bg-[#86EFAC] text-[#05281E] font-black text-xs px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" /> BAIXE AQUI
                    </Button>
                  </a>
                </div>

                {/* Cartilha 2 */}
                <div className="bg-[#031812] border border-[#10B981]/30 p-4 rounded-xl flex items-center justify-between gap-3 hover:border-[#10B981] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white leading-snug">
                        Guia de Higiene e Sanidade da Fruta
                      </h4>
                      <span className="text-[10px] text-[#38BDF8] block mt-0.5">PDF • Anvisa & AçaíDirect</span>
                    </div>
                  </div>
                  <a
                    href="#direitos"
                    onClick={(e) => {
                      e.preventDefault()
                      alert("Iniciando o download do Guia de Higiene e Sanidade da Fruta em PDF...")
                    }}
                    className="shrink-0"
                  >
                    <Button size="sm" className="bg-[#38BDF8] hover:bg-[#0284C7] text-[#031B29] font-black text-xs px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" /> BAIXE AQUI
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer (Dark Forest Green Footer) */}
      <footer id="contato" className="bg-[#041A13] border-t border-[#10B981]/30 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="AçaíDirect Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-black text-white tracking-wide">AçaíDirect</span>
              </div>
              <p className="text-xs text-slate-300 mb-4 max-w-md leading-relaxed">
                Plataforma web e mobile que conecta a tradição amazônica com a tecnologia moderna para fortalecer a cadeia produtiva do açaí.
              </p>
              <Badge className="bg-[#10B981]/20 text-[#A7F3D0] border-[#10B981]/40 font-black px-3 py-1 text-xs">
                <MapPin className="w-3 h-3 mr-1 text-[#38BDF8]" /> Amapá, Brasil
              </Badge>
            </div>

            <div>
              <h3 className="font-black text-white text-sm mb-4">Plataforma</h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                <li><a href="#inicio" className="hover:text-[#A3E635] transition-colors">Início</a></li>
                <li><a href="#como-funciona" className="hover:text-[#A3E635] transition-colors">Como funciona</a></li>
                <li><Link href="/cinca" className="hover:text-white text-[#A3E635] font-black transition-colors">⚡ Observatório CINCA</Link></li>
                <li><a href="#recursos" className="hover:text-[#A3E635] transition-colors">Recursos</a></li>
                <li><a href="https://drive.google.com/file/d/1FtXdH2tfFudeNV7m_DV4HWBJ8kUMtkO3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#86EFAC] text-[#A3E635] font-black transition-colors">📱 Baixar App AçaíDirect (APK)</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-white text-sm mb-4">Contato & Suporte</h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                <li>cinca@acaidirect.com.br</li>
                <li>+55 (96) 98125-0762</li>
                <li>Macapá, Amapá — Brasil</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#10B981]/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <p>&copy; 2025 AçaíDirect. Todos os direitos reservados.</p>
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* Survey Modal (AçaíDirect em Campo) */}
      {activeSurveyModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#05281E] border border-[#10B981]/40 rounded-3xl p-6 max-w-lg w-full text-white space-y-5 shadow-2xl relative">
            <button
              onClick={() => setActiveSurveyModal(null)}
              className="absolute top-4 right-4 p-2 text-[#94A3B8] hover:text-white bg-[#031812] rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-[#10B981]/20 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shrink-0">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black text-[#A3E635] uppercase tracking-wider block">
                  AÇAÍDIRECT EM CAMPO
                </span>
                <h3 className="text-xl font-black text-white">
                  Questionário — {activeSurveyModal === "produtor" ? "Produtor de Açaí" : "Dono de Batedeira"}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <p className="text-slate-300 leading-relaxed font-medium">
                Sua participação é fundamental para o desenvolvimento de soluções mais justas e eficientes para o setor no Amapá e Pará.
              </p>

              <div className="space-y-3 bg-[#031812] border border-[#10B981]/20 p-4 rounded-2xl">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">1. Qual seu município de atuação?</label>
                  <input
                    type="text"
                    placeholder="Ex: Macapá, Afuá, Santana, Mazagão..."
                    className="w-full bg-[#05281E] border border-[#10B981]/30 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">
                    2. {activeSurveyModal === "produtor" ? "Qual sua produção média por safra (sacas)?" : "Qual a capacidade diária do seu estabelecimento?"}
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 100 sacas / dia"
                    className="w-full bg-[#05281E] border border-[#10B981]/30 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">3. Principal desafio enfrentado na comercialização:</label>
                  <select className="w-full bg-[#05281E] border border-[#10B981]/30 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-[#10B981]">
                    <option value="preco">Oscilação de preços no porto</option>
                    <option value="transporte">Logística e transporte fluvial</option>
                    <option value="frescor">Manutenção da qualidade e frescor</option>
                    <option value="credito">Acesso a crédito e financiamento</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={() => {
                  alert("Obrigado por responder ao questionário! Suas contribuições foram registradas com sucesso no AçaíDirect.")
                  setActiveSurveyModal(null)
                }}
                className="w-full bg-[#A3E635] hover:bg-[#86EFAC] text-[#05281E] font-black py-3 rounded-2xl text-xs transition-colors shadow-lg"
              >
                Enviar Resposta do Questionário
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Video Player Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#05281E] border border-[#10B981]/50 rounded-3xl p-5 lg:p-7 max-w-4xl w-full text-white space-y-4 shadow-2xl relative overflow-hidden">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-20 p-2.5 text-[#94A3B8] hover:text-white bg-[#031812] rounded-full transition-colors border border-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-[#10B981]/20 pb-3">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#A3E635] shrink-0">
                <Play className="w-5 h-5 fill-[#A3E635]" />
              </div>
              <div>
                <span className="text-[10px] font-black text-[#A3E635] uppercase tracking-wider block">
                  {activeVideoModal.tag}
                </span>
                <h3 className="text-lg lg:text-xl font-black text-white leading-tight">
                  {activeVideoModal.title}
                </h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 shadow-inner">
              <video
                src={activeVideoModal.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Seu navegador não suporta a exibição direta deste vídeo HTML5.
              </video>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300 pt-1">
              <p className="font-medium text-slate-200">
                {activeVideoModal.desc}
              </p>
              <Button
                size="sm"
                onClick={() => setActiveVideoModal(null)}
                className="bg-[#10B981] hover:bg-[#059669] text-[#05281E] font-black rounded-xl text-xs px-5 shrink-0 cursor-pointer"
              >
                Fechar Vídeo
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Photo Lightbox Modal */}
      {activePhotoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#05281E] border border-[#10B981]/50 rounded-3xl p-5 lg:p-7 max-w-4xl w-full text-white space-y-4 shadow-2xl relative overflow-hidden">
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 z-20 p-2.5 text-[#94A3B8] hover:text-white bg-[#031812] rounded-full transition-colors border border-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-[#10B981]/20 pb-3">
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black text-[#38BDF8] uppercase tracking-wider block">
                  {activePhotoModal.tag}
                </span>
                <h3 className="text-lg lg:text-xl font-black text-white leading-tight">
                  {activePhotoModal.title}
                </h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-black max-h-[70vh] flex items-center justify-center border border-white/10 shadow-inner">
              <img
                src={activePhotoModal.src}
                alt={activePhotoModal.title}
                className="max-h-[68vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300 pt-1">
              <p className="font-medium text-slate-200">
                {activePhotoModal.desc}
              </p>
              <Button
                size="sm"
                onClick={() => setActivePhotoModal(null)}
                className="bg-[#38BDF8] hover:bg-[#0284C7] text-[#031B29] font-black rounded-xl text-xs px-5 shrink-0 cursor-pointer"
              >
                Fechar Foto
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
