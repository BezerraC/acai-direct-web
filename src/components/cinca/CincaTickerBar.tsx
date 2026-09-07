"use client"

import React from "react"
import Link from "next/link"
import { Activity, ArrowUpRight, Ship, Package, Clock, TrendingUp } from "lucide-react"

export function CincaTickerBar() {
  const tickerItems = [
    { label: "AÇAÍ / CINCA", val: "R$ 320,00 / saca", change: "+4,2%", isUp: true, icon: TrendingUp },
    { label: "Igarapé da Fortaleza", val: "8,2 t previstas", sub: "Chegada 08h40", icon: Ship },
    { label: "Rampa do Açaí", val: "6,7 t registradas", sub: "Embarque concluído", icon: Package },
    { label: "Afuá ➔ Santana", val: "280 sacas", sub: "Chegada 08h40", icon: Ship },
    { label: "Bailique ➔ Macapá", val: "180 sacas", sub: "Chegada 10h15", icon: Ship },
    { label: "Ilhas das Cinzas", val: "250 sacas", sub: "Previsão 11h40", icon: Package },
    { label: "Tendência 24h", val: "▲ Alta Moderada", sub: "+5% a +8%", isUp: true, icon: Activity },
  ]

  return (
    <div className="w-full bg-[#051C14] border-y border-[#10B981]/30 text-white overflow-hidden py-2.5 px-4 flex items-center justify-between shadow-lg relative z-40">
      {/* Ticker Badge Fixed Label */}
      <div className="flex items-center gap-2.5 shrink-0 bg-[#092D21] border border-[#10B981]/40 px-3 py-1 rounded-full mr-4 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
        </span>
        <span className="text-xs font-black tracking-wider text-[#10B981] uppercase flex items-center gap-1">
          <Activity className="w-3.5 h-3.5" /> CINCA AO VIVO
        </span>
        <span className="hidden sm:inline text-[10px] text-[#A7F3D0] font-medium border-l border-[#10B981]/30 pl-2">
          Mercado do açaí em tempo real
        </span>
      </div>

      {/* Marquee Ticker Loop */}
      <div className="flex-1 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-semibold">
          {[...tickerItems, ...tickerItems].map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="inline-flex items-center gap-2 text-[#E2E8F0]">
                <Icon className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[#94A3B8] font-bold">{item.label}:</span>
                <span className="text-white font-black">{item.val}</span>
                {item.change && (
                  <span className="bg-[#10B981]/20 text-[#34D399] px-1.5 py-0.5 rounded text-[10px] font-bold">
                    {item.change}
                  </span>
                )}
                {item.sub && <span className="text-[#64748B] text-[10px]">({item.sub})</span>}
                <span className="mx-3 text-[#1E293B]">|</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right Link Action */}
      <div className="shrink-0 pl-4 hidden md:flex items-center gap-2">
        <span className="text-[11px] text-[#94A3B8]">Atualizado 06:42</span>
        <Link
          href="/cinca"
          className="inline-flex items-center gap-1 text-xs font-extrabold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/40 px-3 py-1 rounded-lg transition-all"
        >
          Ver mais no CINCA <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
