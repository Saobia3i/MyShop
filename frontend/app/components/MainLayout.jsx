"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function MainLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("darkMode");
    if (mode === "true") setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen font-sans">
        {/* Sidebar */}
        <aside className="w-64 bg-[var(--color-bg)] border-r border-white p-6 flex flex-col gap-6">
          <h2 className="text-xl font-bold mb-6">{/* Empty title if you want */}</h2>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="hover:text-[var(--color-hover)]">Products</Link>
            <Link href="/cart" className="hover:text-[var(--color-hover)]">Cart</Link>
            <Link href="/account" className="hover:text-[var(--color-hover)]">Account</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <header className="flex justify-between items-center p-4 border-b border-white bg-[var(--color-navbar)]">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full border border-white" />
              <span className="text-[var(--color-font)] font-bold text-lg">MyShop</span>
            </div>
            <button
              className="p-2 rounded-full border border-white hover:bg-white/20 transition-colors"
              onClick={toggleDarkMode}
            >
              {darkMode ? <SunIcon className="w-6 h-6 text-yellow-300" /> : <MoonIcon className="w-6 h-6 text-white" />}
            </button>
          </header>

          {/* Page Content */}
          <main className="p-6 flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-[var(--color-navbar)] text-[var(--color-font)] p-6 border-t border-white flex flex-col sm:flex-row justify-between">
            <div>© 2025 MyShop Inc.</div>
            <div className="flex gap-4">
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Privacy</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
