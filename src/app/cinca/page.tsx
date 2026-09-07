"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Activity,
  Ship,
  TrendingUp,
  Package,
  Clock,
  MapPin,
  Leaf,
  BookOpen,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Zap,
  Award,
  HelpCircle,
  X,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import { CincaPriceChart } from "@/components/cinca/CincaPriceChart"
import { CincaLiveMap } from "@/components/cinca/CincaLiveMap"
import { CincaTickerBar } from "@/components/cinca/CincaTickerBar"

export default function CincaPage() {
  const [activeTab, setActiveTab] = useState<string>("todos")
  const [selectedVessel, setSelectedVessel] = useState<any | null>(null)

  const radarVessels = [
    {
      id: "EMB-01",
      name: "Barco Estrela do Norte",
      capitao: "Mestre Raimundo Nonato",
      origem: "Afuá / PA",
      destino: "Igarapé da Fortaleza / AP",
      sacas: 280,
      toneladas: 14,
      colheita: "04/09 — 16h30",
      saida: "05/09 — 01h20",
      chegadaEst: "07h40",
      produtor: "Cooperativa de Extrativistas do Afuá",
      status: "Em deslocamento",
      statusColor: "text-emerald-400 bg-emerald-500/20 border-emerald-500/40",
    },
    {
      id: "EMB-02",
      name: "Balsa Marajó III",
      capitao: "Capitão João Silva",
      origem: "Bailique / AP",
      destino: "Rampa do Açaí (Macapá)",
      sacas: 180,
      toneladas: 9,
      colheita: "04/09 — 18h00",
      saida: "05/09 — 02h15",
      chegadaEst: "09h20",
      produtor: "Associação de Ribeirinhos do Bailique",
      status: "Próximo à rampa",
      statusColor: "text-sky-400 bg-sky-500/20 border-sky-500/40",
    },
    {
      id: "EMB-03",
      name: "Expresso das Ilhas",
      capitao: "Mestre Carlos Almeida",
      origem: "Ilhas das Cinzas / PA",
      destino: "Porto de Santana / AP",
      sacas: 250,
      toneladas: 12.5,
      colheita: "04/09 — 20h30",
      saida: "05/09 — 04h00",
      chegadaEst: "11h40",
      produtor: "Produtores da Ilha das Cinzas",
      status: "Em navegação",
      statusColor: "text-purple-400 bg-purple-500/20 border-purple-500/40",
    },
  ]

  const freshHarvests = [
    {
      origem: "Afuá — PA",
      tipo: "Açaí Nativo de Várzea",
      sacas: 85,
      colheita: "Hoje às 06h30",
      status: "Colhido há 3 horas",
      tempo: "Frescor Máximo ★★★★★",
    },
    {
      origem: "Mazagão — AP",
      tipo: "Açaí Preto de Manejo",
      sacas: 120,
      colheita: "Hoje às 05h00",
      status: "Colhido há 4,5 horas",
      tempo: "Frescor Máximo ★★★★★",
    },
    {
      origem: "Bailique — AP",
      tipo: "Açaí de Ilha Orgânico",
      sacas: 160,
      colheita: "Ontem às 22h00",
      status: "Colhido há 8 horas",
      tempo: "Excelente Qualidade ★★★★☆",
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
      desc: "Proteção contra oscilações severas no porto através da rede de compradores diretos AçaíDirect.",
      tag: "Comercialização",
      orgao: "AçaíDirect / CONAB",
    },
  ]

  return (
    <div className="min-h-screen bg-[#06140E] text-white selection:bg-[#10B981] selection:text-white">
      {/* Top Ticker */}
      <CincaTickerBar />

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-xs font-bold text-[#10B981] hover:underline mb-6 bg-[#10B981]/10 px-3 py-1.5 rounded-lg border border-[#10B981]/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o site principal
        </Link>

        {/* Dashboard Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#10B981]/20 pb-6 mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#10B981]/20 text-[#34D399] text-xs font-black px-3 py-1 rounded-full border border-[#10B981]/40 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-[#10B981]" /> CINCA AO VIVO
              </span>
              <span className="text-xs text-[#94A3B8]">Central de Inteligência da Cadeia do Açaí</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
              Observatório & Mercado em Tempo Real
            </h1>
            <p className="text-sm text-[#A7F3D0] mt-2 max-w-2xl">
              Preços indicativos, fluxo logístico fluvial, tempo de colheita e tendências do açaí in natura no Amapá e Pará.
            </p>
          </div>

          <div className="bg-[#0B241A] border border-[#10B981]/30 p-4 rounded-2xl flex items-center gap-6 shadow-xl">
            <div>
              <span className="text-xs text-[#94A3B8] font-bold block">Índice CINCA (Saca 50kg)</span>
              <span className="text-3xl font-black text-white">R$ 320,00</span>
            </div>
            <div className="border-l border-[#10B981]/20 pl-6">
              <span className="text-xs text-[#34D399] font-black flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> ▲ +4,2% (24h)
              </span>
              <span className="text-[10px] text-[#64748B] block mt-0.5">Preço Médio Observado</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#10B981]/15 scrollbar-none">
          <button
            onClick={() => setActiveTab("todos")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeTab === "todos"
                ? "bg-[#10B981] text-[#05281E] shadow-lg"
                : "bg-[#0B241A] text-[#94A3B8] hover:text-white border border-[#10B981]/20"
            }`}
          >
            Visão Geral CINCA
          </button>
          <button
            onClick={() => setActiveTab("precos")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeTab === "precos"
                ? "bg-[#10B981] text-[#05281E] shadow-lg"
                : "bg-[#0B241A] text-[#94A3B8] hover:text-white border border-[#10B981]/20"
            }`}
          >
            Preços & Índices
          </button>
          <button
            onClick={() => setActiveTab("radar")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeTab === "radar"
                ? "bg-[#10B981] text-[#05281E] shadow-lg"
                : "bg-[#0B241A] text-[#94A3B8] hover:text-white border border-[#10B981]/20"
            }`}
          >
            Radar de Embarcações
          </button>
          <button
            onClick={() => setActiveTab("colheita")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeTab === "colheita"
                ? "bg-[#10B981] text-[#05281E] shadow-lg"
                : "bg-[#0B241A] text-[#94A3B8] hover:text-white border border-[#10B981]/20"
            }`}
          >
            Frescor & Colheita
          </button>
          <button
            onClick={() => setActiveTab("direitos")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeTab === "direitos"
                ? "bg-[#10B981] text-[#05281E] shadow-lg"
                : "bg-[#0B241A] text-[#94A3B8] hover:text-white border border-[#10B981]/20"
            }`}
          >
            Direitos & Biblioteca
          </button>
        </div>

        {/* Top KPIs Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#0B241A] border border-[#10B981]/30 p-4 rounded-2xl">
            <span className="text-xs text-[#94A3B8] font-bold block mb-1">Volume Registrado Hoje</span>
            <span className="text-2xl font-black text-white">18,6 Toneladas</span>
            <span className="text-[11px] text-[#10B981] font-bold block mt-1">367 sacas em transporte</span>
          </div>

          <div className="bg-[#0B241A] border border-[#10B981]/30 p-4 rounded-2xl">
            <span className="text-xs text-[#94A3B8] font-bold block mb-1">Embarcações Monitoradas</span>
            <span className="text-2xl font-black text-[#38BDF8]">7 em Rota Ativa</span>
            <span className="text-[11px] text-[#94A3B8] block mt-1">3 com chegada nas próximas 2h</span>
          </div>

          <div className="bg-[#0B241A] border border-[#10B981]/30 p-4 rounded-2xl">
            <span className="text-xs text-[#94A3B8] font-bold block mb-1">Localidades de Origem</span>
            <span className="text-2xl font-black text-white">7 Portos / Zonas</span>
            <span className="text-[11px] text-[#A7F3D0] block mt-1">Afuá, Bailique, Mazagão, etc.</span>
          </div>

          <div className="bg-[#0B241A] border border-[#10B981]/30 p-4 rounded-2xl">
            <span className="text-xs text-[#94A3B8] font-bold block mb-1">Tendência Próximas 24h</span>
            <span className="text-2xl font-black text-[#10B981]">Alta Provável</span>
            <span className="text-[11px] text-[#34D399] font-bold block mt-1">+5% a +8% estimado</span>
          </div>
        </div>

        {/* Main Grid: Left Charts & Maps | Right Radar & Trend */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left 2 Cols: Chart & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price Chart Box */}
            <CincaPriceChart />

            {/* Map Box */}
            <CincaLiveMap />

            {/* Fresh Harvests List */}
            <div className="bg-[#0B241A] border border-[#10B981]/30 rounded-2xl p-6">
              <h2 className="text-lg font-black text-white mb-1 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-[#10B981]" /> Produção Recém-Colhida (Frescor & Rastreabilidade)
              </h2>
              <p className="text-xs text-[#94A3B8] mb-4">
                Lotes de açaí colhidos nas últimas horas com dados de localização e horário certificado.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {freshHarvests.map((fh, idx) => (
                  <div key={idx} className="bg-[#06140E] border border-[#10B981]/20 p-4 rounded-xl">
                    <span className="text-xs font-black text-white block mb-1">{fh.origem}</span>
                    <span className="text-xs text-[#10B981] font-bold block mb-2">{fh.tipo}</span>
                    <div className="text-xs text-[#E2E8F0] space-y-1 border-t border-[#10B981]/20 pt-2">
                      <p>📦 Volume: <strong>{fh.sacas} sacas</strong></p>
                      <p>🕒 {fh.colheita}</p>
                      <span className="inline-block mt-1 text-[10px] font-black text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded">
                        {fh.tempo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direitos e Oportunidades do Produtor Section */}
            <div className="bg-[#0B241A] border border-[#10B981]/30 rounded-2xl p-6 space-y-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#A3E635]" /> Direitos e Oportunidades do Produtor
                </h2>
                <p className="text-xs text-[#94A3B8] mt-0.5 font-medium">
                  Informações acessíveis em linguagem simples sobre apoio, crédito e regularização na Amazônia.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {producerRights.map((item, idx) => (
                  <div key={idx} className="bg-[#06140E] border border-[#10B981]/20 p-4 rounded-xl hover:border-[#10B981]/60 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold text-[#A3E635] bg-[#A3E635]/15 border border-[#A3E635]/30 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                      <span className="text-[10px] text-[#64748B] font-bold">{item.orgao}</span>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed font-medium mb-3">{item.desc}</p>
                    <button className="text-xs font-bold text-[#10B981] hover:underline flex items-center gap-1">
                      Saiba como solicitar <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Radar of Boats & Market Drivers */}
          <div className="space-y-8">
            {/* Radar "Açaí a caminho" */}
            <div className="bg-[#0B241A] border border-[#10B981]/30 rounded-2xl p-6">
              <h2 className="text-lg font-black text-white mb-1 flex items-center gap-2">
                <Ship className="w-5 h-5 text-[#38BDF8]" /> Radar de Barcos "Açaí a Caminho"
              </h2>
              <p className="text-xs text-[#94A3B8] mb-4">Clique em uma embarcação para visualizar o manifesto completo de rota.</p>

              <div className="space-y-4">
                {radarVessels.map((vessel) => (
                  <div
                    key={vessel.id}
                    onClick={() => setSelectedVessel(vessel)}
                    className="bg-[#06140E] border border-[#10B981]/20 p-4 rounded-xl hover:border-[#10B981] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-white group-hover:text-[#10B981] transition-colors">{vessel.name}</span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${vessel.statusColor}`}>
                        {vessel.status}
                      </span>
                    </div>

                    <div className="text-xs text-[#CFC9E6] space-y-1 mb-2">
                      <p>📍 {vessel.origem} ➔ {vessel.destino}</p>
                      <p>📦 Carga: <strong>{vessel.sacas} sacas</strong> ({vessel.toneladas} t)</p>
                      <p>🕒 Colheita: {vessel.colheita}</p>
                    </div>

                    <div className="border-t border-[#10B981]/20 pt-2 flex items-center justify-between text-xs">
                      <span className="text-[#94A3B8]">Previsão de Chegada:</span>
                      <span className="font-black text-[#10B981] flex items-center gap-1">
                        {vessel.chegadaEst} <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tendência de Mercado & Fatores */}
            <div className="bg-[#0B241A] border border-[#10B981]/30 rounded-2xl p-6">
              <h2 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#10B981]" /> Análise de Tendência de Mercado
              </h2>
              <div className="bg-[#10B981]/15 border border-[#10B981]/40 p-3 rounded-xl mb-4">
                <span className="text-xs font-black text-[#10B981] block">TENDÊNCIA: ALTA PROVÁVEL (+5% a +8%)</span>
                <span className="text-[11px] text-[#A7F3D0]">Válido para as próximas 24 horas</span>
              </div>

              <span className="text-xs font-bold text-white block mb-2">Fatores Observados pela CINCA:</span>
              <ul className="space-y-2 text-xs text-[#CFC9E6]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Redução temporária no volume de embarcações vindas de Afuá;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Aumento da procura por batedeiras de Macapá e Santana;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Qualidade superior do fruto colhido nesta safra de várzea.</span>
                </li>
              </ul>
            </div>

            {/* Biblioteca & Cartilhas */}
            <div className="bg-[#0B241A] border border-[#10B981]/30 rounded-2xl p-6">
              <h2 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#A64DFF]" /> Biblioteca AçaíDirect
              </h2>
              <p className="text-xs text-[#94A3B8] mb-4">Conhecimento e boas práticas para quem faz o açaí.</p>

              <div className="space-y-2">
                <div className="p-3 bg-[#06140E] border border-[#10B981]/20 rounded-xl flex items-center justify-between text-xs hover:border-[#10B981] transition-all cursor-pointer">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#10B981]" />
                    <span className="font-bold text-white">Cartilha de Boas Práticas de Manejo</span>
                  </div>
                  <span className="text-[10px] text-[#10B981] font-black">PDF</span>
                </div>

                <div className="p-3 bg-[#06140E] border border-[#10B981]/20 rounded-xl flex items-center justify-between text-xs hover:border-[#10B981] transition-all cursor-pointer">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                    <span className="font-bold text-white">Guia de Higiene e Sanidade da Fruta</span>
                  </div>
                  <span className="text-[10px] text-[#38BDF8] font-black">PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Vessel Manifest Modal */}
      {selectedVessel && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B241A] border border-[#10B981]/40 rounded-3xl p-6 max-w-md w-full text-white space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedVessel(null)}
              className="absolute top-4 right-4 p-2 text-[#94A3B8] hover:text-white bg-[#06140E] rounded-full"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-[#10B981]/20 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black text-[#10B981] uppercase block">MANIFESTO DE EMBARCAÇÃO</span>
                <h3 className="text-xl font-black text-white">{selectedVessel.name}</h3>
                <span className="text-xs text-[#94A3B8]">{selectedVessel.capitao}</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-200">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Origem ➔ Destino:</span>
                <span className="font-extrabold text-white">{selectedVessel.origem} ➔ {selectedVessel.destino}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Volume Transportado:</span>
                <span className="font-extrabold text-[#10B981]">{selectedVessel.sacas} sacas ({selectedVessel.toneladas} toneladas)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Produtor / Associação:</span>
                <span className="font-bold text-white">{selectedVessel.produtor}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Data e Hora de Colheita:</span>
                <span className="font-bold text-white">{selectedVessel.colheita}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Horário de Saída do Porto:</span>
                <span className="font-bold text-white">{selectedVessel.saida}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Previsão de Desembarque:</span>
                <span className="font-black text-[#38BDF8]">{selectedVessel.chegadaEst}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedVessel(null)}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-[#05281E] font-black py-3 rounded-2xl text-xs transition-colors"
              >
                Fechar Detalhes da Carga
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
