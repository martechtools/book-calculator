export function SiteFooter() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <div className="text-2xl font-light tracking-tighter text-white mb-6">
                        <span className="font-semibold">LUXE</span>PRINT
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full ml-1 mb-0.5" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Premium book printing services for authors, designers, and visionaries. Quality without compromise.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Services</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Hardcover Books</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Paperback Books</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Art Books</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Magazines</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Stay Updated</h4>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-gray-800 border-none text-white text-sm px-4 py-2 w-full rounded-sm focus:ring-1 focus:ring-blue-500"
                        />
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                <p>&copy; 2024 LuxePrint Inc. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
