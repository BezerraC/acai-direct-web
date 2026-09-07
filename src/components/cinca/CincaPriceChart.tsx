"use client"

import React from "react"
import { TrendingUp } from "lucide-react"

export function CincaPriceChart() {
  const points = [
    { date: "01/04", price: 280, label: "R$ 280" },
    { date: "08/04", price: 290, label: "R$ 290" },
    { date: "15/04", price: 295, label: "R$ 295" },
    { date: "22/04", price: 310, label: "R$ 310" },
    { date: "29/04", price: 320, label: "R$ 320" },
  ]

  // Map 280-350 to Y coordinates (160 to 20)
  const getY = (val: number) => 160 - ((val - 270) / (340 - 270)) * 140
  const getX = (idx: number) => 30 + idx * 75

  const pathD = points.reduce((acc, pt, idx) => {
    const x = getX(idx)
    const y = getY(pt.price)
    return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`
  }, "")

  const fillD = `${pathD} L ${getX(points.length - 1)} 170 L ${getX(0)} 170 Z`

  return (
    <div className="w-full bg-[#0D1A15]/80 border border-[#10B981]/30 rounded-2xl p-4 text-white">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xs text-[#94A3B8] font-bold block">Evolução de preço (30 dias)</span>
          <span className="text-xs text-[#10B981] font-extrabold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> ▲ +4,2% neste mês
          </span>
        </div>
        <div className="bg-[#10B981]/20 border border-[#10B981]/40 text-[#34D399] px-2.5 py-1 rounded-lg text-xs font-black">
          R$ 320,00
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative h-44 w-full">
        <svg viewBox="0 0 350 180" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="20" y1="30" x2="340" y2="30" stroke="#1E293B" strokeDasharray="3 3" />
          <line x1="20" y1="80" x2="340" y2="80" stroke="#1E293B" strokeDasharray="3 3" />
          <line x1="20" y1="130" x2="340" y2="130" stroke="#1E293B" strokeDasharray="3 3" />

          {/* Area fill */}
          <path d={fillD} fill="url(#chartGradient)" />

          {/* Line path */}
          <path d={pathD} fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />

          {/* Points */}
          {points.map((pt, idx) => {
            const cx = getX(idx)
            const cy = getY(pt.price)
            const isLast = idx === points.length - 1
            return (
              <g key={idx}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={isLast ? 6 : 4}
                  fill={isLast ? "#A64DFF" : "#10B981"}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                <text x={cx} y={178} textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">
                  {pt.date}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
