/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  ArrowRight, 
  User, 
  PlayCircle, 
  RotateCcw,
  Sparkles,
  BrainCircuit,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const quizData = [
  {
    question: "လူအများစုက AI ကို အသုံးပြုတဲ့အခါ ဘယ်လို မှားယွင်းစွာ အသုံးပြုတတ်ကြသလဲ?",
    options: [
      "AI ကို အလုပ်သင် (Intern) တစ်ယောက်လို သဘောထားပြီး ညွှန်ကြားချက်တွေ ပေးတာ။",
      "AI ကို Google လိုမျိုး Search Engine တစ်ခုလို သဘောထားပြီး မေးခွန်းတိုတိုလေးတွေ မေးတာ။",
      "AI နဲ့ အပြန်အလှန် ဆွေးနွေးပြီး အဖြေကို အကြိမ်ကြိမ် ပြင်ဆင်ခိုင်းတာ။"
    ],
    correctAnswer: 1,
    explanation: "လူအများစုဟာ AI ကို Google လိုသဘောထားပြီး မေးခွန်းတိုလေးတွေနဲ့ ပြီးပြည့်စုံတဲ့အဖြေကို မျှော်လင့်တတ်ကြပါတယ်။ AI ဟာ Database မဟုတ်ဘဲ Prediction Engine ဖြစ်ပါတယ်။"
  },
  {
    question: "AI ကို မှန်ကန်စွာနဲ့ ထိထိရောက်ရောက် ခိုင်းစေဖို့ အသုံးပြုရမယ့် အခြေခံ ပုံသေနည်း (၄) ချက်က ဘာတွေလဲ?",
    options: [
      "Role, Context, Task, Constraints (အခန်းကဏ္ဍ၊ နောက်ခံ၊ အလုပ်၊ ကန့်သတ်ချက်)",
      "Ask, Wait, Copy, Paste (မေးမယ်၊ စောင့်မယ်၊ ကူးမယ်၊ ချမယ်)",
      "Read, Write, Speak, Listen (ဖတ်၊ ရေး၊ ပြော၊ နားထောင်)"
    ],
    correctAnswer: 0,
    explanation: "AI ကို ရမ်းဆမခိုင်းဘဲ တိကျတဲ့ တည်ဆောက်ပုံဖြစ်တဲ့ Role, Context, Task နဲ့ Constraints တွေကို ပေးရပါမယ်။"
  },
  {
    question: "AI ဆိုတာ တကယ်တမ်း ဘယ်လို အလုပ်လုပ်သလဲ?",
    options: [
      "လူတွေက စည်းမျဉ်းတစ်ခုချင်းစီကို အသေရေးဆွဲပေးထားတဲ့အတိုင်း တိတိကျကျ လုပ်ဆောင်တယ်။",
      "အသေမှတ်ထားတဲ့ Database ကြီးထဲကနေ မှန်ကန်တဲ့ အဖြေတွေကို ဆွဲထုတ်ပေးတယ်။",
      "ဒေတာတွေကနေ သင်ယူပြီး၊ ပုံစံတွေကို မှတ်သားကာ နောက်လာမယ့်စကားလုံးကို ခန့်မှန်းဆုံးဖြတ်ချက်ချတယ်။"
    ],
    correctAnswer: 2,
    explanation: "AI ဟာ Machine Learning ကို အသုံးပြုပြီး ဒေတာပေါင်းများစွာကနေ လေ့လာကာ သင်္ချာနည်းကျကျ ခန့်မှန်းပေးတဲ့ Prediction Engine ဖြစ်ပါတယ်။"
  },
  {
    question: "လုပ်ငန်းခွင်မှာ Public AI (ဥပမာ ChatGPT) တွေကို သုံးတဲ့အခါ အရေးအကြီးဆုံး သတိထားရမယ့် အချက်က ဘာလဲ?",
    options: [
      "အကောင့်ဝင်ပြီးမှ အသုံးပြုရန်။",
      "အရေးကြီးတဲ့ Customer အချက်အလက်တွေ၊ ကိုယ်ပိုင် Code တွေကို လုံးဝ မထည့်ရန် (Redact လုပ်ရန်)။",
      "အင်္ဂလိပ်လိုပဲ မေးခွန်းမေးရန်။"
    ],
    correctAnswer: 1,
    explanation: "Public AI တွေဟာ သင်ထည့်လိုက်တဲ့ ဒေတာတွေကို သင်ယူလေ့လာတဲ့အတွက် ကိုယ်ရေးကိုယ်တာနဲ့ လုပ်ငန်းလုံခြုံရေး (Privacy & Security) အချက်အလက်တွေကို ဘယ်တော့မှ မထည့်ရပါဘူး။"
  },
  {
    question: "AI ကို သင့်ရဲ့ အနာဂတ်အတွက် ဘယ်လို သဘောထားပြီး မြင်သင့်သလဲ?",
    options: [
      "လူသားတွေရဲ့ အလုပ်အားလုံးကို အစားထိုး ယူမယ့်အရာ။",
      "ဘာမှလုပ်စရာမလိုဘဲ အလုပ်တွေအကုန် ပြီးမြောက်စေမယ့် မှော်တုတ်တံ။",
      "ကိုယ့်ကို အကူအညီပေးမယ့် ဒစ်ဂျစ်တယ် လုပ်ဖော်ကိုင်ဖက် (Digital Co-pilot/Intern)။"
    ],
    correctAnswer: 2,
    explanation: "AI ဟာ သင့်ကို အစားထိုးဖို့မဟုတ်ဘဲ သင့်ရဲ့ လုပ်ရည်ကိုင်ရည်ကို ၁၀ ဆ တိုးစေမယ့် Multiplier (လုပ်ဖော်ကိုင်ဖက်) အဖြစ် အသုံးပြုရမှာ ဖြစ်ပါတယ်။"
  },
  {
    question: "AI ကို ကိုယ်လိုချင်တဲ့ ပုံစံအတိုင်း အတိအကျ အမြန်ဆုံး လုပ်ဆောင်ခိုင်းဖို့ ဘာလုပ်သင့်သလဲ?",
    options: [
      "အသစ်ကနေ အစကပြန်ရေးခိုင်းတာ။",
      "ဥပမာ အဟောင်းတစ်ခုကို ပေးပြီး အဲဒီအတိုင်း လုပ်ခိုင်းတာ (Few-Shot Prompting)။",
      "ခဏခဏ မေးခွန်းကို ပြန်မေးနေတာ။"
    ],
    correctAnswer: 1,
    explanation: "Few-Shot Prompting ဆိုတာ AI ကို နမူနာ (ဥပမာ) ပေးပြီး ခိုင်းစေခြင်း ဖြစ်ပါတယ်။ ဒါဟာ အလိုချင်ဆုံး ရလဒ်ရဖို့ အမြန်ဆုံး နည်းလမ်းပါ။"
  },
  {
    question: "AI က ပေးတဲ့ ပထမဆုံး အဖြေမှာ အမှားပါနေရင် ဒါမှမဟုတ် အားမရရင် ဘာလုပ်သင့်သလဲ?",
    options: [
      "အစကနေ စကားလုံးအသစ်တွေနဲ့ ပြန်ခိုင်းတာ။",
      "အဖြေကို မယူတော့ဘဲ ပိတ်လိုက်တာ။",
      "အမှားကို ထောက်ပြပြီး ဒါမှမဟုတ် လိုချင်တဲ့ ပုံစံကို ပြောပြီး ထပ်မံ ပြင်ဆင်ခိုင်းတာ (Iterative Conversation)။"
    ],
    correctAnswer: 2,
    explanation: "AI ဟာ အပြန်အလှန် ဆွေးနွေးလို့ရတဲ့အတွက် ပထမဆုံးအဖြေကို တန်းမယူဘဲ ကိုယ်ဖြစ်ချင်တဲ့ ပုံစံရအောင် အကြိမ်ကြိမ် မွမ်းမံခိုင်းရပါမယ်။"
  },
  {
    question: "AI ကို စာသား (Text) သက်သက် မဟုတ်ဘဲ တခြား ဘယ်လိုတွေ အသုံးပြုလို့ ရသေးသလဲ?",
    options: [
      "Screenshot ဒါမှမဟုတ် ဓာတ်ပုံတွေကို ပြပြီး ရှင်းပြခိုင်းတာ၊ PDF ဖိုင်ကြီးတွေကို ဖတ်ခိုင်းတာ (Multimodal)။",
      "စာသားကလွဲလို့ တခြားဘာမှ လုပ်လို့ မရပါ။",
      "အသံဖိုင်တွေကိုပဲ နားထောင်လို့ ရတာ။"
    ],
    correctAnswer: 0,
    explanation: "Modern AI (Multimodal) တွေဟာ ဓာတ်ပုံ၊ ဖိုင်၊ အသံ နဲ့ ဒေတာတွေကိုပါ နားလည် သိမြင်နိုင်စွမ်း ရှိပါတယ်။"
  },
  {
    question: "AI ကို ကျွမ်းကျင်ဖို့အတွက် အဓိက အလိုအပ်ဆုံး အချက်က ဘာလဲ?",
    options: [
      "ဈေးကြီးတဲ့ သင်တန်းတွေ အများကြီး တက်ထားဖို့။",
      "မှန်ကန်တဲ့ တွေးခေါ်ပုံ (Mental framework) နဲ့ လက်တွေ့ ဆင်းလုပ်ကြည့်ဖို့။",
      "Computer Programming တွေကို အရင် ကျွမ်းကျင်နေဖို့။"
    ],
    correctAnswer: 1,
    explanation: "AI ကို ကျွမ်းကျင်ဖို့က သင်တန်းတက်ရုံနဲ့ မရဘဲ မှန်ကန်တဲ့ စနစ်နဲ့ လက်တွေ့ ထပ်ခါတလဲလဲ အသုံးပြုကြည့်ဖို့ပဲ လိုအပ်ပါတယ်။"
  },
  {
    question: "AI ကို ခိုင်းတဲ့အခါ အကောင်းဆုံး ရလဒ်ရဖို့ ဘယ်လိုမျိုး ညွှန်ကြားသင့်သလဲ?",
    options: [
      "ရှုပ်ထွေးတဲ့ နည်းပညာစကားလုံးတွေ အများကြီး သုံးရမယ်။",
      "၇ နှစ်အရွယ် ကလေးတစ်ယောက်ကို ရှင်းပြသလို ရိုးရိုးရှင်းရှင်း ပြောပြရမယ်။",
      "Prompt တွေကို အလွတ်ကျက်ပြီး သုံးရမယ်။"
    ],
    correctAnswer: 1,
    explanation: "AI ကို ရိုးရိုးရှင်းရှင်းနဲ့ ရှင်းလင်းအောင် ပြောပြနိုင်လေ ပိုပြီး တိကျတဲ့ ရလဒ် ထွက်လာလေ ဖြစ်ပါတယ်။ Prompt တွေကို အလွတ်ကျက်နေစရာ မလိုပါဘူး။"
  },
  {
    question: "AI ကို အသုံးပြုရင်း ကိုယ်တိုင်လည်း ပိုပြီး တိုးတက်လာအောင် ဘယ်လို အကောင်းဆုံး လုပ်မလဲ?",
    options: [
      "AI ကို ဘာမှ မမေးဘဲ ကိုယ်တိုင်ပဲ အကြာကြီး စဉ်းစားမယ်။",
      "AI ပေးတဲ့ အဖြေကို Copy/Paste လုပ်ပြီး အမြဲ သုံးမယ်။",
      "ကိုယ့်ရဲ့ Project ကို AI ကို အလုပ်သင်တစ်ယောက်လို သဘောထားပြီး နားလည်အောင် ရှင်းပြ လမ်းညွှန်ပေးမယ်။"
    ],
    correctAnswer: 2,
    explanation: "Teach to Learn - AI ကို သင်ကြားပေးသလို ရှင်းပြခြင်းဟာ ကိုယ်တိုင်လည်း အဲဒီ ဘာသာရပ်ကို ပိုပြီး နားလည် သိမြင်လာစေပါတယ်။"
  },
  {
    question: "နည်းပညာအသစ်တွေ နေ့တိုင်း ထွက်လာတဲ့အခါ ဘယ်အရာက အရေးအကြီးဆုံးလဲ?",
    options: [
      "Tool တစ်ခုတည်းကိုပဲ အမြဲ စွဲကိုင်ထားဖို့။",
      "Mindset မှန်ကန်စွာ ရှိနေဖို့နဲ့ ပြောင်းလဲလာတဲ့ Tool တွေကို လိုအပ်သလို အသုံးချနိုင်ဖို့။",
      "အသစ်ထွက်သမျှ Tool တွေကို အကုန် လိုက်ဝယ်ဖို့။"
    ],
    correctAnswer: 1,
    explanation: "Tool တွေက အမြဲပြောင်းလဲနေမှာ ဖြစ်ပေမဲ့ AI Mindset ကို နားလည်သွားရင် ဘယ် Tool ထွက်ထွက် အလွယ်တကူ ပြောင်းလဲအသုံးချနိုင်မှာ ဖြစ်ပါတယ်။"
  }
];

export default function App() {
  const [gameState, setGameState] = useState<'start' | 'quiz' | 'result'>('start');
  const [userName, setUserName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const startGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setGameState('quiz');
    }
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setGameState('result');
    }
  };

  const restartQuiz = () => {
    setGameState('start');
    setUserName('');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const Nav = () => (
    <nav className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
          <Layers className="w-6 h-6" strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-slate-800">AI MINDSET ACADEMY</h1>
          <p className="text-[10px] text-blue-600 font-bold tracking-widest uppercase">Master AI • Master Your Future</p>
        </div>
      </div>
      {userName && (
        <div className="flex items-center space-x-4 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
          <div className="w-7 h-7 bg-slate-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-slate-600" />
          </div>
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-tight">{userName} (Student)</span>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-white border-t border-slate-200 px-8 py-4 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 font-medium gap-4 mt-auto">
      <span>&copy; {new Date().getFullYear()} AI Mindset Academy. All Rights Reserved.</span>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-blue-600">Learning Portal</a>
        <a href="#" className="hover:text-blue-600">Support Center</a>
        <a href="#" className="hover:text-blue-600">Terms of Service</a>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <Nav />
      
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto py-12 flex flex-col items-center space-y-10"
            >
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-3">
                  <Award className="w-12 h-12" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Ready to challenge your AI mindset?</h2>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    ဒီနေ့ Webinar ကနေ လေ့လာခဲ့ရတဲ့ AI Mindset အသိပညာတွေကို စမ်းသပ်ကြည့်ကြရအောင်။
                  </p>
                </div>
              </div>

              <form onSubmit={startGame} className="w-full space-y-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Student Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="text"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-slate-300 text-slate-800 font-medium"
                      placeholder="သင့်အမည်ကို ထည့်ပါ..."
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={!userName.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>စတင်မည်</span>
                </motion.button>
              </form>
            </motion.div>
          )}

          {gameState === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col lg:flex-row gap-8"
            >
              <aside className="w-full lg:w-72 flex flex-col gap-6 shrink-0">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Quiz Progress</h3>
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-slate-100" />
                      <motion.circle 
                        cx="64" 
                        cy="64" 
                        r="58" 
                        stroke="currentColor" 
                        strokeWidth="10" 
                        fill="transparent" 
                        strokeDasharray="364" 
                        initial={{ strokeDashoffset: 364 }}
                        animate={{ strokeDashoffset: 364 - (364 * (currentQuestion + 1) / quizData.length) }}
                        className="text-blue-600" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-slate-800">{currentQuestion + 1}/{quizData.length}</span>
                      <span className="text-[10px] text-slate-500 font-medium uppercase">Question</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-medium uppercase tracking-tighter">Current Score:</span>
                      <span className="font-bold text-slate-800 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-lg">{score} မှတ်</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(score / quizData.length) * 100}%` }}
                        className="bg-emerald-500 h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sparkles className="w-5 h-5 text-blue-200" />
                    <h4 className="font-bold">Pro Tip 💡</h4>
                  </div>
                  <p className="text-sm text-blue-50 leading-relaxed font-medium">
                    AI ကို ခိုင်းတဲ့အခါ Role တစ်ခု သတ်မှတ်ပေးဖို့ မမေ့ပါနဲ့။ ဥပမာ- "You are a Marketing Expert."
                  </p>
                </div>
              </aside>

              <div className="flex-1 flex flex-col gap-6">
                <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-16 -translate-y-16" />
                  <span className="relative z-10 text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em] bg-blue-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-100">
                    Question {String(currentQuestion + 1).padStart(2, '0')}
                  </span>
                  <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-slate-800 leading-snug mt-8">
                    {quizData[currentQuestion].question}
                  </h2>
                </div>

                <div className="grid gap-3">
                  {quizData[currentQuestion].options.map((option, index) => {
                    const isCorrect = index === quizData[currentQuestion].correctAnswer;
                    const isSelected = index === selectedOption;
                    
                    let cardStyle = "group cursor-pointer bg-white border-2 border-slate-200 rounded-2xl p-6 flex items-center space-x-5 transition-all duration-300 ";
                    let indexStyle = "w-10 h-10 shrink-0 rounded-xl border-2 border-slate-200 flex items-center justify-center font-black text-slate-400 group-hover:border-blue-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all ";
                    let textStyle = "text-slate-700 font-semibold text-lg leading-snug ";

                    if (isAnswered) {
                      cardStyle = "cursor-default rounded-2xl p-6 flex items-center space-x-5 border-2 transition-all duration-300 relative ";
                      if (isCorrect) {
                        cardStyle += "bg-emerald-50 border-emerald-500 shadow-md shadow-emerald-100";
                        indexStyle = "w-10 h-10 shrink-0 rounded-xl bg-emerald-500 flex items-center justify-center text-white";
                        textStyle = "text-emerald-900 font-bold text-lg leading-snug";
                      } else if (isSelected) {
                        cardStyle += "bg-rose-50 border-rose-400";
                        indexStyle = "w-10 h-10 shrink-0 rounded-xl bg-rose-500 flex items-center justify-center text-white";
                        textStyle = "text-rose-900 font-bold text-lg leading-snug";
                      } else {
                        cardStyle += "bg-white border-slate-100 opacity-40";
                      }
                    }

                    return (
                      <motion.div
                        key={index}
                        whileHover={!isAnswered ? { x: 5 } : {}}
                        onClick={() => handleOptionSelect(index)}
                        className={cardStyle}
                      >
                        <div className={indexStyle}>
                          {isAnswered && isCorrect ? <CheckCircle2 className="w-6 h-6" /> : 
                           isAnswered && isSelected ? <XCircle className="w-6 h-6" /> : 
                           index + 1}
                        </div>
                        <p className={textStyle}>{option}</p>
                        {isAnswered && isCorrect && (
                          <div className="hidden md:block absolute right-6 bg-emerald-500 text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full shadow-lg shadow-emerald-200">Correct</div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {isAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-900 p-8 rounded-[2rem] text-slate-200 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 border-l-[10px] border-emerald-400 shadow-2xl"
                  >
                    <div className="bg-slate-800 p-3 rounded-2xl shrink-0">
                      <BrainCircuit className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Detailed Explanation</p>
                      <p className="text-lg leading-relaxed text-slate-300 font-medium">{quizData[currentQuestion].explanation}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNextQuestion}
                      className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-3 shadow-xl transition-all w-full md:w-auto justify-center"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {gameState === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto py-12 flex flex-col items-center text-center space-y-12"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="relative w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-slate-50">
                  <div className="flex flex-col items-center">
                    <span className="text-6xl font-black text-slate-900 leading-none">{score}</span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Score</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Outstanding Performance!</h2>
                  <p className="text-xl font-bold text-blue-600 uppercase tracking-widest">{userName}</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {((score / quizData.length) * 100) === 100 ? "Excellent Director!" : 
                     ((score / quizData.length) * 100) >= 60 ? "Great Job!" : "Keep Learning!"}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    {((score / quizData.length) * 100) === 100 ? 
                      "သင်ဟာ AI Mindset ကို အပြည့်အဝ နားလည်သဘောပေါက်သွားပါပြီ။ လုပ်ငန်းခွင်မှာ AI ကို အကောင်းဆုံး အသုံးချနိုင်တော့မှာပါ။" : 
                     ((score / quizData.length) * 100) >= 60 ? 
                      "အခြေခံသဘောတရားတွေကို ကောင်းကောင်းနားလည်နေပါပြီ။ လက်တွေ့ များများအသုံးချပေးပါ။" : 
                      "Zoom Record ဗီဒီယိုကို ပြန်လည်လေ့လာပြီး နောက်တစ်ကြိမ် ပြန်လည်စမ်းသပ်ကြည့်ပါ။"}
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => window.open('https://ai.mindset-it.online/', '_blank')}
                  className="flex-1 bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-2xl shadow-xl transition-all"
                >
                  LMS ကို ဝင်ရောက်ရန်
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={restartQuiz}
                  className="flex-1 bg-white border-2 border-slate-200 text-slate-800 font-bold py-5 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>ပြန်လည်ဖြေဆိုမည်</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
