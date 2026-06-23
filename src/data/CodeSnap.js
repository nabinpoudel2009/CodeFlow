

export const codeSnap = {
    "App.jsx": `
import { useState } from "react";
import { CodeFlow } from "codeflow/ai";
        
import React from 'react'
        
const App = () => {
        
    const [code, setCode] = useState("");
        
    const handelAiCompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
    }
        
    return (
        <div className="app">
            <CodeEditor 
                onChange={setCode}
                onAI={handelAiCompletion} 
            />
        </div>
    );
}
        
export default App
    `,

    "Hero.jsx": `
import { useState } from "react";
import { CodeFlow } from "codeflow/ai";

const Hero = () => {
    const [prompt, setPrompt] = useState("");
    const [generatedCode, setGeneratedCode] = useState("");

    const handleCodeGeneration = async () => {
        const result = await CodeFlow.generate(prompt);
        setGeneratedCode(result);
    };

    return (
        <section className="hero">
            <h1>Build Faster with CodeFlow AI</h1>

            <input
                type="text"
                placeholder="Describe what you want to build..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />

            <button onClick={handleCodeGeneration}>
                Generate Code
            </button>

            <pre>{generatedCode}</pre>
        </section>
    );
};

export default Hero;
    `,

    "Navbar.jsx": `
import { useState } from "react";
import { CodeFlow } from "codeflow/ai";

const Nav = () => {
    const [command, setCommand] = useState("");
    const [result, setResult] = useState("");

    const handleQuickAction = async () => {
        const response = await CodeFlow.execute(command);
        setResult(response);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>CodeFlow AI</h2>
            </div>

            <ul className="nav-links">
                <li>Features</li>
                <li>Docs</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>

            <button onClick={handleQuickAction}>
                Start Building
            </button>
        </nav>
    );
};

    export default Nav;
    `
}

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/15",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-time",
        border: "border-blue-300/30"
    },
    "Hero.jsx": {
        bgColor: "bg-purple-500/15",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "⚡",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically",
        border: "border-purple-300/30"
    },
    "Navbar.jsx": {
        bgColor: "bg-emerald-500/15",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "🔍",
        title: "Smart Search",
        content: "Intelligent code search across your project",
        border: "border-emerald-300/30"
    },
};

export const textChange = {
    "App.jsx": {
        textColor: "text-blue-400",
    },

    "Hero.jsx": {
        textColor: "text-purple-500",
    },

    "Navbar.jsx": {
        textColor: "text-emerald-400",
    },
}