# Fenrir Security - Technical Screening Task

A production-grade, high-fidelity 3-screen React application implemented for the Fenrir Security frontend design challenge.

## 🚀 Overview

This project translates a UI/UX design reference into a functional React application. It covers layout, spacing, typography, colors, and interactive behaviors across three essential screens of a B2B SaaS security platform.

## ✨ Features

- **Three Core Screens**: 
  - **Login / Sign-up**: Split-layout with a dark gradient feature panel and functional signing form.
  - **Main Dashboard**: Scan list overview with real-time stats, filtering, and status tracking.
  - **Active Scan Detail**: Live console output, circular progress visualization, and finding logs.
- **Global Theme Support**: Seamless switching between **Dark Mode** and **Light Mode** using CSS variables and React Context.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views with a custom animated sidebar.
- **Interactive UI**:
  - Tabbed interfaces in the Scan Detail view.
  - Real-time search/filter on the Dashboard.
  - Smooth micro-animations and transitions powered by Framer Motion.

## 🛠️ Tech Stack

- **Core**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (configured with PostCSS for legacy compatibility)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router 7
- **Utility**: clsx, tailwind-merge

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shankar212/Fenrir-Security-Private-Limited.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tech-frontend-assig
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the next available port).

### Build

Create a production-ready build:
```bash
npm run build
```
The output will be in the `dist` directory.

## 📂 Project Structure

- `src/components/`: Reusable UI components (Sidebar, ThemeProvider, etc.).
- `src/pages/`: Main application screens (Login, Dashboard, ScanDetail).
- `src/context/`: Global state management for theming.
- `src/mock/`: Mock data for scans and statistics.
- `src/index.css`: Global styles and Tailwind v4 configuration.

## 🎨 Design System

The project uses a custom design system defined in `src/index.css` tailored for Fenrir Security:
- **Teal Accent**: `#0CC8A8`
- **Severity Colors**: Critical (Red), High (Orange), Medium (Yellow), Low (Blue).
- **Dark Mode Palette**: Deep navy/black backgrounds with high-contrast text.
