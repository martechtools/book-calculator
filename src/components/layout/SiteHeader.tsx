'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SiteHeader() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/calculator', label: 'Configurator' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-gray-900 group">
                    <BookOpen className="w-6 h-6 text-teal-600" />
                    <span className="text-xl font-light tracking-tight">
                        <span className="font-semibold">Book</span>Press
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 hidden sm:block">
                        by 4OVER4
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-gray-900",
                                pathname === link.href ? "text-gray-900" : "text-gray-500"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/calculator">
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6 cursor-pointer">
                            Start Configuration
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-900 cursor-pointer"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "text-lg font-medium transition-colors",
                                        pathname === link.href ? "text-gray-900" : "text-gray-500"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link href="/calculator" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg cursor-pointer">
                                        Start Configuration
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
