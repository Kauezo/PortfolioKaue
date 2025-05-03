import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loading from "@/components/Loading";
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://primary-production-18d97.up.railway.app/webhook/a7cf05d0-b81b-41ed-8259-d5c4c609c9c9/chat',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Olá! 👋',
        'Sou a IA, assistente do Kauê. Como posso ajudar você hoje?'
      ],
      i18n: {
        en: {
          title: 'Eu sou a assistente do Kauê',
          subtitle: "Sou a assistente virtual do Kauê! Posso te ajudar a conhecer melhor o trabalho dele ou agendar uma reunião. Como posso te ajudar?",
          footer: '',
          getStarted: 'Nova conversa',
          inputPlaceholder: 'Digite sua pergunta...',
          closeButtonTooltip: 'Fechar chat'
        }
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/PortfolioKaue/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
      <style>
        {`
          :root {
            --chat--color-primary: #000000;
            --chat--color-primary-shade-50: #1a1a1a;
            --chat--color-primary-shade-100: #333333;
            --chat--color-secondary: #8B5CF6;
            --chat--color-secondary-shade-50: #7C3AED;
            --chat--color-secondary-shade-100: #6A25D5;
            --chat--color-white: #ffffff;
            --chat--color-light: #f2f4f8;
            --chat--color-light-shade-50: #e6e9f1;
            --chat--color-light-shade-100: #c2c5cc;
            --chat--color-medium: #d2d4d9;
            --chat--color-dark: #000000;
            --chat--color-disabled: #777980;
            --chat--color-typing: #404040;

            --chat--spacing: 1rem;
            --chat--border-radius: 1rem;
            --chat--transition-duration: 0.3s;

            --chat--window--width: 400px;
            --chat--window--height: 600px;

            --chat--header-height: auto;
            --chat--header--padding: var(--chat--spacing);
            --chat--header--background: var(--chat--color-dark);
            --chat--header--color: var(--chat--color-white);
            --chat--header--border-top: none;
            --chat--header--border-bottom: 2px solid var(--chat--color-secondary);
            --chat--heading--font-size: 1.5em;
            --chat--subtitle--font-size: 0.9em;
            --chat--subtitle--line-height: 1.5;

            --chat--textarea--height: 50px;
            --chat--textarea--border: 2px solid var(--chat--color-secondary);
            --chat--textarea--border-radius: var(--chat--border-radius);

            --chat--message--font-size: 1rem;
            --chat--message--padding: var(--chat--spacing);
            --chat--message--border-radius: var(--chat--border-radius);
            --chat--message--line-height: 1.6;
            --chat--message--bot--background: var(--chat--color-white);
            --chat--message--bot--color: var(--chat--color-dark);
            --chat--message--bot--border: 2px solid var(--chat--color-secondary);
            --chat--message--user--background: var(--chat--color-dark);
            --chat--message--user--color: var(--chat--color-white);
            --chat--message--user--border: 2px solid var(--chat--color-secondary);
            --chat--message--pre--background: rgba(139, 92, 246, 0.1);

            --chat--toggle--background: var(--chat--color-secondary);
            --chat--toggle--hover--background: var(--chat--color-secondary-shade-50);
            --chat--toggle--active--background: var(--chat--color-secondary-shade-100);
            --chat--toggle--color: var(--chat--color-white);
            --chat--toggle--size: 64px;
            --chat--toggle--border: 2px solid var(--chat--color-secondary);
            --chat--toggle--border-radius: 50%;
          }
        `}
      </style>
    </QueryClientProvider>
  );
};

export default App;
