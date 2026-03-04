export const mockScans = [
    {
        id: '1',
        name: 'Web App Servers',
        type: 'Greybox',
        status: 'Completed',
        progress: 100,
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        lastScan: '4d ago'
    },
    {
        id: '2',
        name: 'Production APIs',
        type: 'Blackbox',
        status: 'Scheduled',
        progress: 0,
        vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
        lastScan: '2d ago'
    },
    {
        id: '3',
        name: 'Staging Environment',
        type: 'Greybox',
        status: 'Failed',
        progress: 45,
        vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
        lastScan: '1d ago'
    },
    {
        id: '4',
        name: 'Customer Portal',
        type: 'Whitebox',
        status: 'Completed',
        progress: 100,
        vulnerabilities: { critical: 0, high: 2, medium: 15, low: 32 },
        lastScan: '3h ago'
    },
    {
        id: '5',
        name: 'Internal HR System',
        type: 'Greybox',
        status: 'Completed',
        progress: 100,
        vulnerabilities: { critical: 8, high: 24, medium: 45, low: 12 },
        lastScan: '1w ago'
    }
];

export const dashboardStats = {
    org: 'Project X',
    owner: 'Nammagiri',
    totalScans: 100,
    scheduled: 1000,
    rescans: 100,
    failedScans: 100,
    lastUpdated: '10 mins ago',
    severity: {
        critical: { count: 86, change: '+2% increase than yesterday', trend: 'up' },
        high: { count: 16, change: '+0.9% increase than yesterday', trend: 'up' },
        medium: { count: 26, change: '+0.9% decrease than yesterday', trend: 'down' },
        low: { count: 16, change: '+0.9% increase than yesterday', trend: 'up' }
    }
};
