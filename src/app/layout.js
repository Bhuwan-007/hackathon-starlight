import './globals.css';
import AppHeader from '@/components/AppHeader';

export const metadata = {
  title: 'Starlight Vanguard Mainframe',
  description: 'Republic Cruiser Operating System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 min-h-screen flex flex-col antialiased">
        <AppHeader />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
