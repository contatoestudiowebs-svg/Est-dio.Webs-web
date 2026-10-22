import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  User,
  AtSign,
  FileText,
  Copy,
  Check,
  ExternalLink,
  Clock,
  ShieldCheck,
  Sparkles,
  Loader2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import {
  OFFICIAL_CONTACT_EMAIL,
  sendContactMessage,
  buildGmailComposeUrl,
  buildMailtoUrl
} from '../utils/contactService';

export function ContactPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) return;

    setIsSubmitting(true);
    try {
      await sendContactMessage(formData);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OFFICIAL_CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const emailSubject = formData.assunto || `Contato via Estúdio Webs - ${formData.nome}`;
  const emailBody = `Nome: ${formData.nome}\nE-mail: ${formData.email}\nAssunto: ${formData.assunto}\n\nMensagem:\n${formData.mensagem}`;

  const gmailUrl = buildGmailComposeUrl(emailSubject, emailBody);
  const mailtoUrl = buildMailtoUrl(emailSubject, emailBody);

  return (
    <div className="min-h-screen py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Contato Oficial | Estúdio Webs"
        description="Entre em contato com o Estúdio Webs pelo e-mail oficial contatoestudiowebs@gmail.com para dúvidas, sugestões e parcerias."
        canonicalPath="/contato"
      />

      {/* Header */}
      <div className="mb-10 pb-6 border-b border-slate-200">
        <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
          Atendimento Oficial
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight mt-1">
          CONTATO
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Envie sua mensagem diretamente para nossa equipe editorial pelo e-mail oficial <strong className="text-slate-900 font-semibold">{OFFICIAL_CONTACT_EMAIL}</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Info Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 w-12 h-12 rounded-xl bg-rose-50 text-[#D80050] border border-rose-200 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Canal Direto</span>
                <h3 className="text-base font-bold text-slate-900 font-brand">
                  E-mail Oficial
                </h3>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
              <span className="text-[11px] font-medium text-slate-500 block">Endereço de destino:</span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${OFFICIAL_CONTACT_EMAIL}`}
                  className="font-bold text-xs sm:text-sm text-slate-900 hover:text-[#D80050] transition break-all"
                >
                  {OFFICIAL_CONTACT_EMAIL}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition cursor-pointer shrink-0"
                  title="Copiar endereço de e-mail"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-reading">
              Todas as mensagens enviadas através do formulário ao lado são despachadas diretamente para a caixa postal da emissora.
            </p>

            <div className="pt-3 border-t border-slate-100 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Canal autenticado da teledramaturgia virtual</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Tempo médio de retorno: até 48 horas úteis</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${OFFICIAL_CONTACT_EMAIL}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 text-xs font-bold transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir direto no Gmail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="md:col-span-7">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-8 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-brand">
                    Mensagem Despachada com Sucesso!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed mt-1">
                    Seu contato foi encaminhado para <strong className="text-slate-900">{OFFICIAL_CONTACT_EMAIL}</strong>. Nossa equipe entrará em contato em breve.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-left space-y-2 text-xs">
                  <div className="font-semibold text-slate-700 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                    <span>Resumo da tentativa de contato:</span>
                    <span className="text-[10px] text-emerald-600 font-bold uppercase">Entregue</span>
                  </div>
                  <div className="text-slate-600"><strong className="text-slate-900">De:</strong> {formData.nome} ({formData.email})</div>
                  <div className="text-slate-600"><strong className="text-slate-900">Para:</strong> {OFFICIAL_CONTACT_EMAIL}</div>
                  <div className="text-slate-600"><strong className="text-slate-900">Assunto:</strong> {formData.assunto || 'Contato Geral'}</div>
                </div>

                {/* Direct quick action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Ver no Gmail</span>
                  </a>

                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Cliente de E-mail</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold hover:bg-slate-50 transition"
                  >
                    Enviar Outra
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nome Completo <span className="text-[#D80050]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome ou pseudônimo de autor"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Seu E-mail <span className="text-[#D80050]">*</span>
                  </label>
                  <div className="relative">
                    <AtSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@exemplo.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Assunto
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      placeholder="Dúvida, sugestão, parceria ou pauta de imprensa"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mensagem para contatoestudiowebs@gmail.com <span className="text-[#D80050]">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Escreva sua mensagem aqui..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white resize-none font-reading leading-relaxed transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-[#D80050]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Enviando para contatoestudiowebs@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
