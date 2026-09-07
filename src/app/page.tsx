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
} from "lucide-react"
import { CincaTickerBar } from "@/components/cinca/CincaTickerBar"
import { CincaPriceChart } from "@/components/cinca/CincaPriceChart"
import { CincaLiveMap } from "@/components/cinca/CincaLiveMap"

type Language = "pt" | "en" | "fr" | "es"

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("pt")

  // Testimonials Data matching layout mockup
  const testimonials = [
    {
      quote: "Agora consigo vender com mais segurança e melhor preço.",
      author: "Seu Raimundo",
      role: "Produtor – Mazagão",
      image: "/depoimento_raimundo.jpg",
    },
    {
      quote: "Com a AçaíDirect minha rota tem mais valor.",
      author: "João Carlos",
      role: "Barqueiro – Macapá",
      image: "/depoimento_joao.jpg",
    },
    {
      quote: "É mais fácil encontrar açaí de qualidade e planejar a produção.",
      author: "Dona Maria",
      role: "Batedeira – Santana",
      image: "/depoimento_maria.jpg",
    },
    {
      quote: "A plataforma facilita a negociação e dá mais confiança.",
      author: "Carlos Almeida",
      role: "Comprador – Belém",
      image: "/depoimento_carlos.jpg",
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
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-extrabold text-[#475569]">
            <a href="#inicio" className="text-[#10B981] border-b-2 border-[#10B981] pb-0.5 font-black">Início</a>
            <a href="#sobre" className="hover:text-[#05281E] transition-colors">Sobre</a>
            <a href="#como-funciona" className="hover:text-[#05281E] transition-colors">Como funciona</a>
            <a href="#usuarios" className="hover:text-[#05281E] transition-colors">Para quem é</a>
            <a href="#recursos" className="hover:text-[#05281E] transition-colors">Recursos</a>
            <Link
              href="/cinca"
              className="inline-flex items-center gap-1.5 bg-[#05281E] text-[#10B981] hover:bg-[#07382B] px-3.5 py-1.5 rounded-full font-black text-xs transition-all shadow-xs"
            >
              <Zap className="w-3.5 h-3.5 fill-[#10B981]" /> CINCA
            </Link>
            <a href="#noticias" className="hover:text-[#05281E] transition-colors">Notícias</a>
            <a href="#contato" className="hover:text-[#05281E] transition-colors">Contato</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-[#475569] hover:text-[#05281E] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors">
              <Search className="w-4 h-4" />
            </button>

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

            <Button variant="outline" className="hidden sm:inline-flex border-[#10B981] text-[#05281E] hover:bg-[#10B981]/10 font-black">
              Entrar
            </Button>
            <Button className="bg-gradient-to-r from-[#5E0B94] via-[#8315A6] to-[#A64DFF] hover:opacity-90 text-white font-black border border-white/20 shadow-md">
              Cadastrar-se
            </Button>
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
                A PLATAFORMA INTEGRADA DA CADEIA DO AÇAÍ
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                A plataforma que conecta a{" "}
                <span className="text-[#A3E635]">cadeia do açaí</span>
              </h1>

              <p className="text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-medium">
                Produtores, barqueiros, batedeiras, compradores, rotas, mercado, rastreabilidade e informação. Juntos por um açaí mais justo, sustentável e uma Amazônia mais forte.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="bg-[#A3E635] hover:bg-[#86EFAC] text-[#05281E] font-black px-8 rounded-2xl shadow-xl text-base">
                  Conheça a plataforma <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 bg-black/30 backdrop-blur-md text-white hover:bg-white/20 rounded-2xl px-8 text-base font-bold">
                  Acessar agora
                </Button>
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
      <section className="py-10 bg-[#F8FAFC]">
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
                <Button size="lg" className="bg-[#A3E635] hover:bg-[#86EFAC] text-[#05281E] font-black rounded-full px-8 py-3.5 text-sm lg:text-base shadow-xl w-full">
                  Cadastrar agora <ArrowRight className="w-4 h-4 ml-1 stroke-[2.5]" />
                </Button>
                <Button size="lg" variant="outline" className="bg-[#18052E]/80 border border-[#10B981]/60 text-white hover:bg-[#2A0A4B] rounded-full px-8 py-3 text-xs lg:text-sm font-bold w-full">
                  Saiba como se credenciar
                </Button>
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
                    Como funciona a AçaíDirect
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
                        Donos de batedeiras e indústrias compram açaí direto do produtor.
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#10B981]/20 pb-4">
                  <div>
                    <span className="text-[10px] font-black text-[#10B981] tracking-widest uppercase block mb-1">
                      FERRAMENTA DA AÇAÍDIRECT
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                      <Zap className="w-7 h-7 text-[#10B981] fill-[#10B981]" /> CINCA
                    </h3>
                    <p className="text-xs text-[#A7F3D0] mt-0.5 font-medium">
                      Central da Informação da Cadeia Produtiva do Açaí
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-[#032C20] border border-[#10B981]/40 px-3 py-1.5 rounded-xl text-xs font-bold text-[#A7F3D0] shrink-0 self-start sm:self-auto">
                    <Leaf className="w-3.5 h-3.5 text-[#10B981]" /> Uma ferramenta da AçaíDirect
                  </div>
                </div>

                <p className="text-xs lg:text-sm text-slate-200 leading-relaxed font-medium">
                  Preços, rotas, volumes, chegadas e tendências de mercado em tempo real, para decisões mais seguras e oportunidades para toda a cadeia.
                </p>

                {/* Call-to-action & Subtext */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#031812] border border-[#10B981]/30 p-4 rounded-2xl">
                  <Link href="/cinca" className="shrink-0">
                    <Button size="lg" className="bg-[#A3E635] hover:bg-[#86EFAC] text-[#05281E] font-black rounded-full px-6 text-sm shadow-lg">
                      Abrir painel completo <ArrowRight className="w-4 h-4 ml-1" />
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

      {/* 6. Recursos e Diferenciais Section */}
      <section id="recursos" className="py-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container mx-auto px-4 space-y-8">
          {/* Recursos e Diferenciais Banner Card (Pixel-Perfect Match to Mockup Screenshot) */}
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-5 lg:p-7 shadow-xs text-left">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="text-xl lg:text-2xl font-black text-[#0B1E36] tracking-tight">
                  Recursos e diferenciais da plataforma
                </h2>
                <p className="text-xs lg:text-sm text-slate-500 font-medium">
                  Mais que um marketplace. Um ecossistema para o açaí.
                </p>
              </div>
              <a
                href="#recursos"
                className="text-xs lg:text-sm font-extrabold text-[#0E5296] hover:text-[#0A3D70] flex items-center gap-1.5 shrink-0 group transition-colors"
              >
                Ver todos os recursos <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 2 Large Banner Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {/* Card 1: Rotas e logística */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden group h-56 lg:h-64 shadow-md border border-slate-200/60 flex flex-col justify-between p-6 text-white">
                <img
                  src="/recurso_rotas.jpg"
                  alt="Rotas e logística"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02182B]/95 via-[#02182B]/60 to-black/20"></div>

                {/* Top Badge Icon */}
                <div className="relative z-10 self-end">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#0284C7] shadow-lg border border-white/30 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white stroke-[2.2]" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-1 max-w-md">
                  <h3 className="text-xl lg:text-2xl font-black text-white leading-tight">
                    Rotas e logística
                  </h3>
                  <p className="text-xs lg:text-sm text-slate-200 font-medium leading-relaxed">
                    Acompanhe embarcações, chegadas e oportunidades de transporte.
                  </p>
                </div>
              </div>

              {/* Card 2: Cartilhas e conhecimento */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden group h-56 lg:h-64 shadow-md border border-slate-200/60 flex flex-col justify-between p-6 text-white">
                <img
                  src="/recurso_cartilhas.jpg"
                  alt="Cartilhas e conhecimento"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150A21]/95 via-[#150A21]/60 to-black/20"></div>

                {/* Top Badge Icon */}
                <div className="relative z-10 self-end">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#16A34A] shadow-lg border border-white/30 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white stroke-[2.2]" />
                  </div>
                </div>

                {/* Bottom Content with Arrow Action */}
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div className="space-y-1 max-w-sm">
                    <h3 className="text-xl lg:text-2xl font-black text-white leading-tight">
                      Cartilhas e conhecimento
                    </h3>
                    <p className="text-xs lg:text-sm text-slate-200 font-medium leading-relaxed">
                      Cartilhas, boas práticas, empreendedorismo digital e capacitação.
                    </p>
                  </div>
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white text-[#0B1E36] flex items-center justify-center shadow-lg shrink-0 group-hover:bg-slate-100 transition-colors cursor-pointer">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Vozes da nossa Amazônia Banner (Larger Prominent Elements) */}
          <div id="depoimentos" className="bg-white border border-[#E2E8F0] rounded-3xl p-5 lg:p-7 shadow-sm text-left">
            {/* Banner Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="text-xl lg:text-2xl font-black text-[#0B1E36] tracking-tight">
                  Vozes da nossa Amazônia
                </h2>
                <p className="text-xs lg:text-sm text-slate-500 font-medium">
                  Produtores, barqueiros e batedeiras que acreditam na plataforma.
                </p>
              </div>
              <a
                href="#depoimentos"
                className="text-xs lg:text-sm font-extrabold text-[#0E5296] hover:text-[#0A3D70] flex items-center gap-1.5 shrink-0 group transition-colors"
              >
                Ver mais depoimentos <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
    </div>
  )
}
