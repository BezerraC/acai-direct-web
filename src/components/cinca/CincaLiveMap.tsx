"use client"

import React, { useState } from "react"
import { Navigation, Ship, MapPin, Maximize2, Radio } from "lucide-react"

export function CincaLiveMap() {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null)

  const routes = [
    { id: 1, name: "Afuá ➔ Santana", sacas: 280, toneladas: 14, status: "Em rota", statusBg: "bg-[#10B981]", eta: "08h40" },
    { id: 2, name: "Bailique ➔ Macapá", sacas: 180, toneladas: 9, status: "Em rota", statusBg: "bg-[#10B981]", eta: "10h15" },
    { id: 3, name: "Ilhas das Cinzas ➔ Santana", sacas: 250, toneladas: 12.5, status: "Previsão", statusBg: "bg-[#38BDF8]", eta: "11h40" },
    { id: 4, name: "Mazagão ➔ Macapá", sacas: 120, toneladas: 6, status: "Carregando", statusBg: "bg-[#A64DFF]", eta: "14h20" },
  ]

  return (
    <div className="w-full bg-[#0D1A15]/90 border border-[#10B981]/30 rounded-2xl p-4 text-white relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-[#10B981] animate-pulse" />
          <span className="text-xs text-white font-black uppercase tracking-wider">
            Embarcações em tempo real
          </span>
        </div>
        <button className="text-[#94A3B8] hover:text-white transition-colors" title="Expandir mapa">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Map Graphic Box */}
      <div className="relative h-44 w-full bg-[#06140E] border border-[#10B981]/20 rounded-xl overflow-hidden p-3 flex flex-col justify-between">
        {/* River paths SVG overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
          <path d="M 30 140 Q 120 100 220 80 T 320 40" stroke="#059669" strokeWidth="4" fill="none" strokeDasharray="4 4" />
          <path d="M 60 150 Q 180 120 280 90" stroke="#38BDF8" strokeWidth="3" fill="none" />
        </svg>

        {/* Live Map Pins */}
        <div className="relative z-10 flex flex-col gap-2">
          {routes.map((rt) => (
            <div
              key={rt.id}
              onClick={() => setSelectedRoute(rt.name)}
              className={`flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                selectedRoute === rt.name
                  ? "bg-[#10B981]/20 border-[#10B981]"
                  : "bg-[#1D0836]/70 border-[#10B981]/20 hover:border-[#10B981]/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <Ship className="w-3.5 h-3.5 text-[#10B981] animate-bounce" />
                <span className="font-bold text-white">{rt.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#A7F3D0]">{rt.sacas} sacas ({rt.toneladas}t)</span>
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white ${rt.statusBg}`}>
                  {rt.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Map Legend Pills */}
        <div className="relative z-10 flex items-center justify-between border-t border-[#10B981]/20 pt-2 text-[10px] text-[#94A3B8]">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Em rota (7)
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span> Chegada hoje (3)
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#A64DFF]"></span> Aguardando (2)
          </div>
        </div>
      </div>
    </div>
  )
}
