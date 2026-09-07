import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-bold text-[#10B981] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para a página inicial
        </Link>
        <h1 className="text-3xl font-black mb-6 text-[#0F172A] tracking-tight">Termos de Uso</h1>
        <div className="space-y-6 text-[#475569] text-sm leading-relaxed font-medium">
          <p>
            Bem-vindo ao <strong>AçaíDirect</strong>. Ao acessar nossa plataforma web ou aplicativo móvel, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis.
          </p>
          <h2 className="text-xl font-black text-[#0F172A] mt-6">1. Responsabilidade do Usuário</h2>
          <p>
            Os usuários (extrativistas, barqueiros e empresários) são responsáveis pela veracidade das informações cadastradas, pela integridade dos produtos ofertados e pelo cumprimento dos acordos de frete estabelecidos na plataforma.
          </p>
          <h2 className="text-xl font-black text-[#0F172A] mt-6">2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, marca, layout e tecnologias presentes no AçaíDirect são de propriedade exclusiva e protegidos pela legislação de propriedade intelectual.
          </p>
          <h2 className="text-xl font-black text-[#0F172A] mt-6">3. Contato</h2>
          <p>
            Dúvidas sobre os Termos de Uso podem ser enviadas para: <strong>cinca@acaidirect.com.br</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
