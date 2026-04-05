import Link from 'next/link';

export default function AppHeader() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center text-slate-200">
        <Link href="/" className="text-xl font-bold tracking-widest text-blue-400">
          STARLIGHT VANGUARD
        </Link>
        <div className="space-x-6">
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link href="/life-support" className="hover:text-white transition">Life Support</Link>
          
          {/* Bug #3: Broken Link. Points to dead /logs/hyperdrive instead of /logs */}
          <Link href="/logs/hyperdrive" className="hover:text-white transition">Security Logs</Link>
        </div>
      </div>
    </nav>
  );
}
