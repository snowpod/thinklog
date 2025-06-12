import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f7f2ed] dark:bg-[#1c1c1c] text-[#2b2b2b] dark:text-[#e5e5e5] font-serif p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-6 border-b border-gray-400 dark:border-gray-600">
            <button
              className={`pb-2 text-lg font-medium border-b-2 transition-all duration-300 ${activeTab === 'projects' ? 'border-current' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-current'}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button
              className={`pb-2 text-lg font-medium border-b-2 transition-all duration-300 ${activeTab === 'about' ? 'border-current' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-current'}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border border-gray-400 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {activeTab === 'projects' && (
          <div className="space-y-10">
            <div>
<h2 className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 font-mono mb-2">
  Developer’s Log
</h2><br/>
<h2 className="text-lg font-semibold font-mono mb-2">
  Entry: 2025.06, OntologyOne
</h2>
  <p className="text-[1.05rem] leading-relaxed italic max-w-prose">
    OntologyOne began as a personal reckoning after a difficult chapter — a period of emotional upheaval that left me searching for clarity, healing, and direction...
  </p>
<ul className="mt-4 space-y-3 text-sm">
  <li>
    <a href="/OntologyOne/letter.html" className="underline text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
      Read the letter
    </a>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
      A personal reflection on how OntologyOne began.
    </p>
  </li>

  <li>
    <a href="https://ontologyone.app" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
      Launch the app
    </a>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
      Try the latest version of the OntologyOne interface.
    </p>
  </li>

  <li>
    <span className="underline text-blue-700 dark:text-blue-400">Read articles</span>
    <ul className="mt-1 pl-4 space-y-2 border-l border-gray-300 dark:border-gray-600">
      <li>
        <a href="/articles/interaction-grammar" className="text-blue-700 dark:text-blue-400 hover:underline">
          ✧ Designing an Interaction Grammar
        </a>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Exploring the logic behind new UI gestures and ontology nudges.
        </p>
      </li>
      <li>
        <a href="/articles/rdf-tagging-patterns" className="text-blue-700 dark:text-blue-400 hover:underline">
          ✧ RDF Tagging Patterns
        </a>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          A breakdown of how semantic tags are extracted and applied.
        </p>
      </li>
    </ul>
  </li>
</ul>
</div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="text-[1.05rem] leading-relaxed space-y-4">
            <p>Hello, I'm Siewchoo.</p>
            <p>
              I create tools that explore the space between structure and intuition — quiet, intentional software designed to help people think more clearly.
              OntologyOne was born from that ethos. It’s a solo project, built from scratch, and still very much evolving.
            </p>
            <p>
              I'm based in Singapore, and I work mostly alone, unless you count the chatbot.
            </p>
            <div className="pt-2">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">LinkedIn</a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 pt-4">
              Source code is private for now — but I’m happy to talk shop if you’re curious.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
