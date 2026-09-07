import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PoliticaDePrivacidade() {
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
        <h1 className="text-3xl font-black mb-6 text-[#0F172A] tracking-tight">Política de Privacidade</h1>
        <div className="space-y-6 text-[#475569] text-sm leading-relaxed font-medium">
          <p>
            A plataforma <strong>AçaíDirect</strong> está comprometida com a proteção e a privacidade dos dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nossa plataforma web e aplicativo móvel.
          </p>
          <h2 className="text-xl font-black text-[#0F172A] mt-6">1. Coleta de Dados</h2>
          <p>
            Coletamos informações necessárias para a prestação dos serviços, tais como nome, e-mail, telefone, localização (para logística de frete fluvial) e informações de pagamento processadas com segurança via parceiros certificados (Stripe e Asaas).
          </p>
          <h2 className="text-xl font-black text-[#0F172A] mt-6">2. Uso das Informações</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para operacionalizar as transações da cadeia produtiva do açaí, conectar extrativistas, barqueiros e compradores, e garantir a transparência do processo.
          </p>
          <h2 className="text-xl font-black text-[#0F172A] mt-6">3. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail: <strong>cinca@acaidirect.com.br</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
