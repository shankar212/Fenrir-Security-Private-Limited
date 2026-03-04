import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Chrome, Facebook, Apple } from 'lucide-react';

const LoginScreen: React.FC = () => {
    const navigate = useNavigate();

    const handleCreateAccount = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-background-dark transition-colors duration-300">
            {/* Left Panel */}
            <div className="hidden md:flex flex-1 bg-gradient-to-br from-[#0A1A1A] via-[#0F0F0F] to-[#1A1A1A] p-12 text-white flex-col justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-background-dark border-2 border-accent" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight">Fenrir Security</span>
                </div>

                <div className="max-w-md">
                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        Secure your digital assets with <span className="text-accent underline decoration-accent/30 underline-offset-8">Fenrir</span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-12">
                        The all-in-one platform for vulnerability management and automated security scanning.
                    </p>

                    <ul className="space-y-6">
                        {[
                            'Enterprise-grade scanning engine',
                            'Real-time vulnerability detection',
                            'Automated compliance reporting',
                            'Priority technical support'
                        ].map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-slate-300 font-medium">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-accent" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Fenrir Security Private Limited. All rights reserved.
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 flex items-center justify-center p-6 bg-slate-50 dark:bg-background-dark transition-colors duration-300">
                <div className="w-full max-w-md">
                    <div className="bg-white dark:bg-background-darkSecondary p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Create account</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
                            Start your 14-day free trial. No credit card required.
                        </p>

                        <form className="space-y-4" onSubmit={handleCreateAccount}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">First name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    placeholder="admin@edu.com"
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all placeholder:text-slate-400"
                                />
                                <p className="text-[10px] text-slate-400 mt-1">Must be at least 8 characters long.</p>
                            </div>

                            <div className="flex items-center gap-2 py-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 rounded border-slate-300 text-accent focus:ring-accent cursor-pointer"
                                />
                                <label htmlFor="terms" className="text-sm text-slate-500 dark:text-slate-400 cursor-pointer">
                                    I agree to the <span className="text-accent underline underline-offset-2">Terms</span> and <span className="text-accent underline underline-offset-2">Privacy Policy</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-all shadow-lg shadow-accent/20 active:scale-[0.98]"
                            >
                                Create account
                            </button>
                        </form>

                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                            <span className="text-xs text-slate-400 font-medium">OR CONTINUE WITH</span>
                            <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex items-center justify-center py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <Chrome className="w-5 h-5" />
                            </button>
                            <button className="flex items-center justify-center py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </button>
                            <button className="flex items-center justify-center py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <Apple className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                            Already have an account? <span className="text-accent font-semibold cursor-pointer">Log in</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
