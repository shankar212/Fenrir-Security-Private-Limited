import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Plus,
    Search,
    Filter,
    Columns,
    RefreshCw,
    TrendingUp,
    TrendingDown,
    ChevronLeft,
    ChevronRight,
    ShieldAlert,
    AlertTriangle,
    Info,
    SearchCode
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { mockScans, dashboardStats } from '../mock/data';

const DashboardScreen: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredScans = mockScans.filter(scan =>
        scan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scan.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-background-dark transition-colors duration-300">
            <Sidebar />
            <main className="flex-1 overflow-auto">
                <div className="p-8 max-w-7xl mx-auto space-y-6">

                    {/* Top Org Stats */}
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-medium text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-6">
                        <div className="flex gap-2"><span>Org:</span> <span className="text-slate-900 dark:text-white font-bold">{dashboardStats.org}</span></div>
                        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 hidden md:block" />
                        <div className="flex gap-2"><span>Owner:</span> <span className="text-slate-900 dark:text-white font-bold">{dashboardStats.owner}</span></div>
                        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 hidden md:block" />
                        <div className="flex gap-2"><span>Total Scans:</span> <span className="text-slate-900 dark:text-white font-bold">{dashboardStats.totalScans}</span></div>
                        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 hidden md:block" />
                        <div className="flex gap-2"><span>Scheduled:</span> <span className="text-slate-900 dark:text-white font-bold">{dashboardStats.scheduled}</span></div>
                        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 hidden md:block" />
                        <div className="flex gap-2"><span>Rescans:</span> <span className="text-slate-900 dark:text-white font-bold">{dashboardStats.rescans}</span></div>
                        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 hidden md:block" />
                        <div className="flex gap-2"><span>Failed Scans:</span> <span className="text-slate-900 dark:text-white font-bold">{dashboardStats.failedScans}</span></div>
                        <div className="ml-auto flex items-center gap-2 text-accent font-bold">
                            <RefreshCw className="w-3.5 h-3.5" />
                            {dashboardStats.lastUpdated}
                        </div>
                    </div>

                    {/* Severity Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <SeverityCard
                            label="Critical Severity"
                            count={dashboardStats.severity.critical.count}
                            change={dashboardStats.severity.critical.change}
                            trend={dashboardStats.severity.critical.trend}
                            color="text-severity-critical"
                            bgColor="bg-severity-critical/10"
                            icon={<ShieldAlert className="w-5 h-5 text-severity-critical" />}
                        />
                        <SeverityCard
                            label="High Severity"
                            count={dashboardStats.severity.high.count}
                            change={dashboardStats.severity.high.change}
                            trend={dashboardStats.severity.high.trend}
                            color="text-severity-high"
                            bgColor="bg-severity-high/10"
                            icon={<AlertTriangle className="w-5 h-5 text-severity-high" />}
                        />
                        <SeverityCard
                            label="Medium Severity"
                            count={dashboardStats.severity.medium.count}
                            change={dashboardStats.severity.medium.change}
                            trend={dashboardStats.severity.medium.trend}
                            color="text-severity-medium"
                            bgColor="bg-severity-medium/10"
                            icon={<Info className="w-5 h-5 text-severity-medium" />}
                        />
                        <SeverityCard
                            label="Low Severity"
                            count={dashboardStats.severity.low.count}
                            change={dashboardStats.severity.low.change}
                            trend={dashboardStats.severity.low.trend}
                            color="text-severity-low"
                            bgColor="bg-severity-low/10"
                            icon={<SearchCode className="w-5 h-5 text-severity-low" />}
                        />
                    </div>

                    {/* Scan Table Section */}
                    <div className="bg-white dark:bg-background-darkSecondary rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                        <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-100 dark:border-slate-800">
                            <div className="relative flex-1 w-full max-w-2xl">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search scans by name or type..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
                                />
                            </div>
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <Filter className="w-4 h-4" /> Filter
                                </button>
                                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <Columns className="w-4 h-4" /> Column
                                </button>
                                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
                                    <Plus className="w-4 h-4" /> New scan
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                                        <th className="px-6 py-4">Scan Name</th>
                                        <th className="px-6 py-4">Type</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Progress</th>
                                        <th className="px-6 py-4">Vulnerability</th>
                                        <th className="px-6 py-4">Last Scan</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                                    {filteredScans.map((scan) => (
                                        <tr
                                            key={scan.id}
                                            onClick={() => navigate(`/scan/${scan.id}`)}
                                            className="hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors group"
                                        >
                                            <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                                                {scan.name}
                                            </td>
                                            <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">
                                                {scan.type}
                                            </td>
                                            <td className="px-6 py-4">
                                                <StatusChip status={scan.status} />
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-accent transition-all duration-500"
                                                            style={{ width: `${scan.progress}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-900 dark:text-white">{scan.progress}%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1.5">
                                                    {scan.vulnerabilities.critical > 0 && <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white bg-severity-critical">{scan.vulnerabilities.critical}</span>}
                                                    {scan.vulnerabilities.high > 0 && <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white bg-severity-high">{scan.vulnerabilities.high}</span>}
                                                    {scan.vulnerabilities.medium > 0 && <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white bg-severity-medium">{scan.vulnerabilities.medium}</span>}
                                                    {scan.vulnerabilities.low > 0 && <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white bg-severity-low">{scan.vulnerabilities.low}</span>}
                                                    {Object.values(scan.vulnerabilities).every(v => v === 0) && <span className="text-slate-400 text-xs">—</span>}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">
                                                {scan.lastScan}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                            <div>Showing {filteredScans.length} of {mockScans.length} Scans</div>
                            <div className="flex items-center gap-2">
                                <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const SeverityCard = ({ label, count, change, trend, color, bgColor, icon }: any) => (
    <div className="bg-white dark:bg-background-darkSecondary p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between group hover:border-accent/30 transition-colors">
        <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</span>
            <div className={`p-2 rounded-lg ${bgColor}`}>
                {icon}
            </div>
        </div>
        <div className="space-y-1">
            <div className={`text-4xl font-bold ${color}`}>{count}</div>
            <div className={`flex items-center gap-1 text-[10px] font-bold ${trend === 'up' ? 'text-rose-500' : 'text-emerald-500'}`}>
                {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {change}
            </div>
        </div>
    </div>
);

const StatusChip = ({ status }: { status: string }) => {
    const styles: any = {
        Completed: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20',
        Scheduled: 'bg-slate-50 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-500/20',
        Failed: 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20'
    };

    return (
        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${styles[status]}`}>
            {status}
        </span>
    );
};

export default DashboardScreen;
