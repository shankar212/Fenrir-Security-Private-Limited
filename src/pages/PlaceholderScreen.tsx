import React from 'react';
import Sidebar from '../components/Sidebar';
import { LucideIcon, HelpCircle } from 'lucide-react';

interface PlaceholderScreenProps {
    title: string;
    icon?: LucideIcon;
}

const PlaceholderScreen: React.FC<PlaceholderScreenProps> = ({ title, icon: Icon = HelpCircle }) => {
    return (
        <div className="flex h-screen bg-slate-50 dark:bg-background-dark transition-colors duration-300">
            <Sidebar />
            <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                    <Icon className="w-10 h-10" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{title}</h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-md">
                    This screen is a placeholder for the "{title}" module. In a full production app, this would contain the actual {title.toLowerCase()} management interface.
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="mt-8 px-6 py-2 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
                >
                    Go Back
                </button>
            </main>
        </div>
    );
};

export default PlaceholderScreen;
