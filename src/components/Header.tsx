import React, { useState } from 'react';
import {
  Menu,
  X,
  Search,
  Send,
  ChevronRight
} from 'lucide-react';
import { EstudioWebsLogo } from './EstudioWebsLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export function Header({ currentPath, onNavigate, onOpenSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Webs', path: '/webs' },
    { label: 'Vem Aí', path: '/vem-ai' },
    { label: 'Comunidade', path: '/comunidade' },
    { label: 'Categorias', path: '/categorias' },
    { label: 'Autores', path: '/autores' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Main Editorial Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
          {/* Official Brand Signature */}
          <button
            type="button"
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 cursor-pointer group select-none py-1 shrink-0 text-left"
            title="Estúdio Webs — Página Inicial"
          >
            <div className="h-10 sm:h-11 w-12 sm:w-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
              <EstudioWebsLogo className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-brand font-black text-sm tracking-tight text-slate-900 uppercase">
                ESTÚDIO<span className="text-[#D80050]">.WEBS</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 mt-1">
                Web Emissora
              </span>
            </div>
          </button>

          {/* Desktop Navigation — Clean editorial line inspired by minimal split layout */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const isComunidade = link.path === '/comunidade';

              if (isComunidade) {
                return (
                  <button
                    key={link.path}
                    type="button"
                    onClick={() => handleNav(link.path)}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-extrabold tracking-wide uppercase transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#512f2e] text-[#efae54] ring-1 ring-[#efae54]'
                        : 'bg-[#512f2e]/95 text-[#efae54] hover:bg-[#512f2e]'
                    }`}
                  >
                    <span>{link.label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNav(link.path)}
                  className={`relative px-3 py-2 text-xs tracking-wide uppercase transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'font-extrabold text-slate-950'
                      : 'font-semibold text-slate-500 hover:text-slate-950'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D80050]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Utility Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 text-slate-700 hover:text-slate-950 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Buscar obras, autores e categorias"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="hidden sm:inline">Buscar</span>
              <kbd className="hidden md:inline text-[10px] bg-white text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 font-sans">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => handleNav('/envie-seu-projeto')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-extrabold tracking-wide uppercase transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 shrink-0" />
              <span>Envie seu projeto</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 transition-colors cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            const isComunidade = link.path === '/comunidade';

            if (isComunidade) {
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNav(link.path)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-black tracking-wider uppercase text-left transition-colors ${
                    active
                      ? 'bg-[#512f2e] text-[#efae54] ring-1 ring-[#efae54]'
                      : 'bg-[#512f2e] text-[#efae54]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#efae54]" />
                </button>
              );
            }

            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleNav(link.path)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold tracking-wide uppercase text-left transition-colors ${
                  active
                    ? 'bg-rose-50 text-[#D80050]'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                <span>{link.label}</span>
                {active && <span className="w-2 h-2 rounded-full bg-[#D80050]" />}
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleNav('/sala-de-imprensa')}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider"
            >
              <span>Sala de Imprensa</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              type="button"
              onClick={() => handleNav('/envie-seu-projeto')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Envie seu projeto</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
