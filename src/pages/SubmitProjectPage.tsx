import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  FileText,
  User,
  AtSign,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Loader2,
  ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import {
  OFFICIAL_CONTACT_EMAIL,
  sendProjectSubmission,
  buildGmailComposeUrl,
  buildMailtoUrl
} from '../utils/contactService';

export function SubmitProjectPage() {
  const [formData, setFormData] = useState({
    autor: '',
    email: '',
    titulo: '',
    categoria: 'Web série',
    capitulos: '10',
    sinopse: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.autor || !formData.email || !formData.titulo || !formData.sinopse) return;

    setIsSubmitting(true);
    try {
      await sendProjectSubmission(formData);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailSubject = `[Novo Projeto] "${formData.titulo}" - ${formData.autor}`;
  const emailBody = `Autor / Roteirista: ${formData.autor}\nE-mail: ${formData.email}\nTítulo: ${formData.titulo}\nFormato: ${formData.categoria}\nCapítulos / Episódios: ${formData.capitulos}\n\nSinopse / Argumento:\n${formData.sinopse}`;

  const gmailUrl = buildGmailComposeUrl(emailSubject, emailBody);
  const mailtoUrl = buildMailtoUrl(emailSubject, emailBody);

  const handleCopySummary = () => {
    navigator.clipboard.writeText(`PROJETO SUBMETIDO AO ESTÚDIO WEBS:\n\n${emailBody}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Envie seu Projeto | Estúdio Webs"
        description="Submeta sua Web Novela ou Web Série para análise editorial e publicação no Estúdio Webs."
        canonicalPath="/envie-seu-projeto"
      />

      <div className="mb-10 pb-6 border-b border-slate-200">
        <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
          Novas Produções
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight mt-1">
          ENVIE SEU PROJETO
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Apresente sua ideia, argumento ou roteiro de ficção para a grade da emissora. Todo envio é encaminhado diretamente para <strong className="text-slate-900 font-semibold">{OFFICIAL_CONTACT_EMAIL}</strong>.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        {submitted ? (
          <div className="py-10 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-600 shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-brand">
                Projeto Encaminhado com Sucesso!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-reading mt-1">
                Recebemos os dados de <strong>"{formData.titulo}"</strong>. A proposta foi despachada para o e-mail oficial <strong className="text-slate-900">{OFFICIAL_CONTACT_EMAIL}</strong>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-lg mx-auto text-left space-y-2 text-xs">
              <div className="font-semibold text-slate-700 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                <span>Resumo da Obra Enviada:</span>
                <span className="text-[10px] text-emerald-600 font-bold uppercase">Entregue à Curadoria</span>
              </div>
              <div className="text-slate-600"><strong className="text-slate-900">Autor:</strong> {formData.autor}</div>
              <div className="text-slate-600"><strong className="text-slate-900">Título:</strong> {formData.titulo} ({formData.categoria})</div>
              <div className="text-slate-600"><strong className="text-slate-900">Episódios previstos:</strong> {formData.capitulos}</div>
              <div className="text-slate-600"><strong className="text-slate-900">Destino:</strong> {OFFICIAL_CONTACT_EMAIL}</div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={gmailUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Ver no Gmail</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? 'Copiado!' : 'Copiar Resumo'}</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    autor: '',
                    email: '',
                    titulo: '',
                    categoria: 'Web série',
                    capitulos: '10',
                    sinopse: ''
                  });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase transition shadow-md shadow-[#D80050]/20"
              >
                Enviar Outro Projeto
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D80050] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#D80050] block font-bold mb-0.5">Envio Direto para a Comissão de Seleção:</strong>
                O formulário despacha seu argumento de forma segura para <strong className="text-slate-900">{OFFICIAL_CONTACT_EMAIL}</strong>. Certifique-se de que a obra é original e informe a previsão da quantidade de capítulos ou episódios.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Autor */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nome do Autor / Roteirista <span className="text-[#D80050]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.autor}
                    onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  E-mail para Retorno <span className="text-[#D80050]">*</span>
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Título da Obra */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Título Provisório da Obra <span className="text-[#D80050]">*</span>
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.titulo}
                    onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                    placeholder="Ex: Noite de Névoa"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Categoria */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Categoria
                </label>
                <select
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#D80050] transition"
                >
                  <option value="Web série">Web série</option>
                  <option value="Web novela">Web novela</option>
                </select>
              </div>
            </div>

            {/* Quantidade estimada */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Quantidade Estimada de {formData.categoria === 'Web série' ? 'Episódios' : 'Capítulos'}
              </label>
              <input
                type="number"
                min="1"
                max="200"
                value={formData.capitulos}
                onChange={(e) => setFormData({ ...formData, capitulos: e.target.value })}
                className="w-full sm:w-48 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#D80050] transition"
              />
            </div>

            {/* Sinopse */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Sinopse / Argumento da Produção <span className="text-[#D80050]">*</span>
              </label>
              <textarea
                required
                rows={6}
                value={formData.sinopse}
                onChange={(e) => setFormData({ ...formData, sinopse: e.target.value })}
                placeholder="Descreva a história principal, os conflitos centrais, os protagonistas e o tom da narrativa..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] focus:bg-white resize-none font-reading leading-relaxed transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-[#D80050]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Enviando projeto para {OFFICIAL_CONTACT_EMAIL}...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submeter Projeto para o Estúdio Webs</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
