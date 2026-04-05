import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 text-center space-y-6">
      {/* Bug #5: Missing alt text on Republic Logo */}
      <img src="/republic-logo.svg" className="w-48 h-48 mb-8 opacity-80 mix-blend-screen drop-shadow-2xl" />
      
      <h1 className="text-5xl font-bold tracking-widest text-slate-100 drop-shadow-md">
        STARLIGHT VANGUARD
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl">
        Warning: Vessel has sustained critical damage. Multiple systems failing.
        Please act to restore life support.
      </p>
      
      <div className="pt-8">
        <Link href="/dashboard" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded shadow-[0_0_15px_rgba(37,99,235,0.5)] transition">
          Access Mainframe
        </Link>
      </div>
    </div>
  );
}
