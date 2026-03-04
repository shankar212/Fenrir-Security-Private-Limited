import React, { useState } from 'react';
import {
    Home,
    ChevronRight,
    Terminal,
    Search,
    X,
    ChevronDown,
    Activity,
    CheckCircle2,
    Clock,
    Shield
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const ScanDetailScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'activity' | 'verification'>('activity');

    const steps = [
        { label: 'Spidering', status: 'active' },
        { label: 'Mapping', status: 'pending' },
        { label: 'Testing', status: 'pending' },
        { label: 'Validating', status: 'pending' },
        { label: 'Reporting', status: 'pending' }
    ];

    const logs = [
        { time: '[09:00:00]', text: "I'll begin a systematic penetration test on ", highlight: 'helpdesk.democorp.com', suffix: '. Let me start with reconnaissance and enumeration.' },
        { time: '[09:01:00]', text: 'Good! target is online. Now let me perform port scanning to identify running services.' },
        { time: '[09:02:00]', text: 'Excellent reconnaissance results:', isResult: true, subtext: '- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.' },
        { time: '[09:03:00]', text: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: ', highlight: '"TODO: Delete the testing account (test:test)"', suffix: '. Let me test this credential. The login redirects to ', secondaryHighlight: '/password/test', suffix2: '. Let me follow that path and explore it.' },
    ];

    const findings = [
        {
            severity: 'Critical',
            time: '18:45:23',
            title: 'SQL Injection in Authentication Endpoint',
            path: '/api/users/profile',
            desc: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.'
        },
        {
            severity: 'High',
            time: '18:45:23',
            title: 'Unauthorized Access to User Metadata',
            path: '/api/auth/login',
            desc: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.'
        },
        {
            severity: 'Medium',
            time: '18:45:23',
            title: 'Broken Authentication Rate Limiting',
            path: '/api/search',
            desc: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.'
        }
    ];

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-background-dark transition-colors duration-300">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header Navigation */}
                <header className="px-8 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-darkSecondary">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-bold text-slate-900 dark:text-white">Scan</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <Home className="w-3.5 h-3.5 text-slate-400" />
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400">Private Assets</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <span className="text-accent font-bold">New Scan</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Export Report
                        </button>
                        <button className="px-4 py-2 text-sm font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors">
                            Stop Scan
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-8 space-y-6">
                    {/* Progress Section */}
                    <div className="bg-white dark:bg-background-darkSecondary p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            {/* Circular Progress */}
                            <div className="relative w-40 h-40 flex-shrink-0">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="80" cy="80" r="70"
                                        className="stroke-slate-100 dark:stroke-slate-800 fill-none"
                                        strokeWidth="12"
                                    />
                                    <circle
                                        cx="80" cy="80" r="70"
                                        className="stroke-accent fill-none"
                                        strokeWidth="12"
                                        strokeDasharray="440"
                                        strokeDashoffset="440"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black text-slate-900 dark:text-white">0%</span>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">In Progress</span>
                                </div>
                            </div>

                            {/* Step Tracker */}
                            <div className="flex-1 w-full">
                                <div className="flex items-center justify-between mb-12 relative">
                                    <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 dark:bg-slate-800 -translate-y-1/2 -z-10" />
                                    {steps.map((step, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-3 bg-white dark:bg-background-darkSecondary px-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${step.status === 'active'
                                                    ? 'border-accent bg-accent/10 text-accent shadow-[0_0_15px_rgba(12,200,168,0.3)]'
                                                    : 'border-slate-100 dark:border-slate-800 text-slate-300'
                                                }`}>
                                                {idx === 0 ? <Search className="w-5 h-5" /> :
                                                    idx === 1 ? <Shield className="w-5 h-5" /> :
                                                        idx === 2 ? <Activity className="w-5 h-5" /> :
                                                            idx === 3 ? <CheckCircle2 className="w-5 h-5" /> :
                                                                <Terminal className="w-5 h-5" />}
                                            </div>
                                            <span className={`text-xs font-bold ${step.status === 'active' ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                                                {step.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                                    <MetadataItem label="Scan Type" value="Grey Box" />
                                    <MetadataItem label="Targets" value="google.com" />
                                    <MetadataItem label="Started At" value="Nov 22, 09:00AM" />
                                    <MetadataItem label="Credentials" value="2 Active" />
                                    <MetadataItem label="Files" value="Control.pdf" />
                                    <MetadataItem label="Checklists" value="40/350" highlight />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Console & Log Section */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 min-h-[500px]">
                        {/* Live Scan Console */}
                        <div className="xl:col-span-2 bg-white dark:bg-background-darkSecondary rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden">
                            <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">Live Scan Console</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 uppercase">
                                        <Clock className="w-3 h-3" /> Running...
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <ChevronDown className="w-4 h-4 cursor-pointer hover:text-slate-600" />
                                    <X className="w-4 h-4 cursor-pointer hover:text-slate-600" />
                                </div>
                            </div>

                            <div className="flex items-center border-b border-slate-100 dark:border-slate-800 px-6">
                                <button
                                    onClick={() => setActiveTab('activity')}
                                    className={`px-4 py-3 text-xs font-bold transition-all relative ${activeTab === 'activity' ? 'text-accent' : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    Activity Log
                                    {activeTab === 'activity' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />}
                                </button>
                                <button
                                    onClick={() => setActiveTab('verification')}
                                    className={`px-4 py-3 text-xs font-bold transition-all relative ${activeTab === 'verification' ? 'text-accent' : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    Verification Loops
                                    {activeTab === 'verification' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />}
                                </button>
                            </div>

                            <div className="flex-1 p-6 font-mono text-sm overflow-auto bg-white dark:bg-background-darkSecondary text-slate-600 dark:text-slate-400">
                                <div className="space-y-4">
                                    {logs.map((log, i) => (
                                        <div key={i} className="leading-relaxed">
                                            <span className="text-slate-400 dark:text-slate-500 mr-3">{log.time}</span>
                                            <span className={log.isResult ? 'font-bold dark:text-slate-200' : ''}>{log.text}</span>
                                            {log.highlight && <span className="text-accent font-bold mx-1">{log.highlight}</span>}
                                            {log.suffix && <span>{log.suffix}</span>}
                                            {log.secondaryHighlight && <span className="bg-accent/10 text-accent px-1.5 py-0.5 rounded font-bold mx-1">{log.secondaryHighlight}</span>}
                                            {log.suffix2 && <span>{log.suffix2}</span>}
                                            {log.subtext && (
                                                <div className="mt-2 pl-8 border-l-2 border-slate-100 dark:border-slate-800 whitespace-pre-wrap text-slate-500 italic">
                                                    {log.subtext}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-4 bg-accent animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Finding Log */}
                        <div className="bg-white dark:bg-background-darkSecondary rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden">
                            <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Finding Log</span>
                            </div>
                            <div className="flex-1 p-4 overflow-auto space-y-4">
                                {findings.map((finding, idx) => (
                                    <div key={idx} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/40 hover:border-accent/40 transition-colors">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-black text-white uppercase ${finding.severity === 'Critical' ? 'bg-severity-critical' :
                                                    finding.severity === 'High' ? 'bg-severity-high' : 'bg-severity-medium'
                                                }`}>
                                                {finding.severity}
                                            </span>
                                            <span className="text-[10px] font-bold text-slate-400">{finding.time}</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 leading-tight">{finding.title}</h4>
                                        <div className="text-[11px] font-bold text-accent mb-3 truncate">{finding.path}</div>
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                            {finding.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Status Bar */}
                <footer className="px-8 py-3 bg-white dark:bg-background-darkSecondary border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            Sub-agents: 0
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            Parallel Executions: 2
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            Operations: 1
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex gap-2"><span>Critical:</span> <span className="text-severity-critical">0</span></div>
                        <div className="flex gap-2"><span>High:</span> <span className="text-severity-high">0</span></div>
                        <div className="flex gap-2"><span>Medium:</span> <span className="text-severity-medium">0</span></div>
                        <div className="flex gap-2"><span>Low:</span> <span className="text-severity-low">0</span></div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

const MetadataItem = ({ label, value, highlight }: any) => (
    <div className="space-y-1">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</div>
        <div className={`text-sm font-bold ${highlight ? 'text-accent' : 'text-slate-900 dark:text-white'}`}>{value}</div>
    </div>
);

export default ScanDetailScreen;
