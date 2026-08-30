import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, X, MessageSquare, CornerDownLeft, Loader2, ArrowLeft, ArrowRight } from 'lucide-react';
import { CVData, Language } from '../types';

interface AIChatAssistantProps {
  cvData: CVData | null;
  targetRole?: string;
  lang: Language;
  onClose?: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const AIChatAssistant: React.FC<AIChatAssistantProps> = ({
  cvData,
  targetRole = 'Frontend Developer',
  lang,
  onClose,
}) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const quickQuestions = [
    isAr
      ? 'كيف أرفع فرصة قبولي في وظيفة Frontend Developer إلى 90%؟'
      : 'How do I raise my Frontend Developer acceptance chance to 90%?',
    isAr
      ? 'اكتب لي ملخص احترافي (Summary) جذاب لسيرتي الذاتية'
      : 'Write a compelling Professional Summary for my CV',
    isAr
      ? 'ما هي أفضل 3 مشاريع عملية تثبت تمكني من React و TypeScript؟'
      : 'What are the top 3 portfolio projects to prove React & TS mastery?',
    isAr
      ? 'كيف أشرح نقطة نقص خبرة الـ TypeScript أثناء المقابلة؟'
      : 'How should I explain missing TypeScript experience in an interview?',
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: isAr
        ? `أهلاً بك! 👋 أنا مستشارك المهني بالذكاء الاصطناعي.\n\nلقد اطلعت على سيرتك الذاتية (${cvData?.personalInfo.name || 'المرشح'}) وهدفك لوظيفة **${targetRole}**.\n\nكيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن تحسين الصياغة، التحضير للمقابلات، أو كيفية إبراز مهاراتك!`
        : `Hello! 👋 I'm your AI Career Intelligence Advisor.\n\nI've analyzed your resume (${cvData?.personalInfo.name || 'Candidate'}) for the **${targetRole}** role.\n\nAsk me anything about tailoring your CV, mock interview questions, or strategic roadmap advice!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          cvData: cvData || {},
          targetRole,
          targetJob: { title: targetRole },
          chatHistory: messages.map((m) => ({
            sender: m.role === 'user' ? 'user' : 'assistant',
            text: m.content,
          })),
          lang,
        }),
      });

      const data = await response.json();
      const replyContent = data.data?.reply || data.reply || (data.success && typeof data.data === 'string' ? data.data : null);

      if (replyContent) {
        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: replyContent,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, aiMsg]);
      } else {
        throw new Error('No reply received');
      }
    } catch (e) {
      console.error('Chat error:', e);
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: isAr
          ? 'أهلاً بك! لقد اطلعت على سيرتك الذاتية. لتطوير ملفك وزيادة نسبة قبولك لوظيفة ' + targetRole + '، ننصحك بالتركيز على سد فجوة مهارة TypeScript، وإعادة صياغة إنجازاتك بالأرقام والنسب المئوية، وإبراز مشاريع عملية كاملة.'
          : 'Hello! I reviewed your profile for the ' + targetRole + ' position. Focus on closing the TypeScript skill gap, quantifying experience achievements with metrics, and building full-stack portfolio projects.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0F1117] border border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[650px] overflow-hidden">
      
      {/* Chat Header */}
      <div className="p-4 bg-[#0A0C10] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 p-0.5 flex items-center justify-center">
              <Bot className="w-5 h-5 text-blue-400" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0A0C10]" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5 tracking-tight">
              <span>{isAr ? 'المستشار المهني الذكي (AI Career Advisor)' : 'AI Career Advisor'}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-600/10 text-blue-400 border border-blue-500/20">
                Gemini 2.5
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              {isAr ? `متصل ومطلع على ملف: ${cvData?.personalInfo.name || 'السيرة'}` : `Ready • Target: ${targetRole}`}
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Messages Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0F1117]">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                  isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#0A0C10] text-blue-400 border border-slate-800'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed space-y-1 ${
                  isUser
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-[#0A0C10] border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-wrap'
                }`}
              >
                <p>{msg.content}</p>
                <span
                  className={`text-[10px] block text-right font-mono ${
                    isUser ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#0A0C10] text-blue-400 border border-slate-800 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-[#0A0C10] border border-slate-800 rounded-2xl rounded-tl-none p-3 text-xs text-slate-400 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
              <span>{isAr ? 'المستشار الذكي يحلل ويكتب الرد...' : 'AI Advisor is drafting recommendations...'}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions Chips */}
      <div className="p-2.5 bg-[#0A0C10] border-t border-slate-800 overflow-x-auto no-scrollbar flex items-center gap-2">
        <span className="text-[10px] text-slate-500 uppercase font-bold shrink-0 ps-2">
          {isAr ? 'أسئلة مقترحة:' : 'Suggestions:'}
        </span>
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(q)}
            className="text-[11px] px-3 py-1 rounded-full bg-[#0F1117] hover:bg-slate-800 border border-slate-800 text-slate-300 whitespace-nowrap transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <div className="p-3 bg-[#0A0C10] border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder={isAr ? 'اسأل المستشار أي سؤال حول سيرتك، مقابلاتك أو خطتك المهنية...' : 'Ask your AI career advisor anything...'}
          className="flex-1 bg-[#0F1117] border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />

        <button
          id="send-chat-msg-btn"
          onClick={() => handleSendMessage()}
          disabled={isLoading || !input.trim()}
          className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white shadow-md shadow-blue-600/20 transition-all shrink-0"
        >
          <Send className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>

    </div>
  );
};
