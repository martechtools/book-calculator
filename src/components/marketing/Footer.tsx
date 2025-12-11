'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-teal-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="w-6 h-6" />
                            <span className="text-xl font-semibold">BookPress</span>
                        </div>
                        <p className="text-teal-100 leading-relaxed mb-4 max-w-md">
                            Premium book printing powered by 4OVER4.com. Trusted since 1999, we've printed over 50,000 books for authors and publishers across America.
                        </p>
                        <p className="text-sm text-teal-200">
                            Powered by <span className="font-semibold text-white">4OVER4.com</span>
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-teal-100">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/calculator" className="hover:text-white transition-colors">Book Configurator</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-2 text-teal-100">
                            <li>support@4over4.com</li>
                            <li>1-800-555-BOOK</li>
                            <li>USA-Based Production</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-teal-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-teal-200">
                        © {new Date().getFullYear()} BookPress by 4OVER4. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-teal-200">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
