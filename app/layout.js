import './globals.css';
import './premium.css';
import './settings.css';
import ThemeProvider from '@/components/ThemeProvider';
export const metadata = { title: 'Birinchi Pul — Kichik qadamlar, katta maqsadlar', description: 'Ota-ona va farzand uchun vazifalar, cho‘ntak puli va jamg‘arma maqsadlari.' };
export default function RootLayout({ children }) { return <html lang="uz"><body><ThemeProvider>{children}</ThemeProvider></body></html>; }
