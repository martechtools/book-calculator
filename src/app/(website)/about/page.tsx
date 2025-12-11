export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
                    About <span className="font-semibold text-teal-600">4OVER4</span>
                </h1>

                <p className="text-xl text-gray-500 font-light mb-16 leading-relaxed">
                    Shaping stories and breathing life into brands for over two decades
                </p>
            </div>

            <div className="prose prose-lg text-gray-600 font-light leading-relaxed space-y-8 max-w-4xl">
                <p className="text-lg">
                    At 4OVER4, we've been shaping stories and breathing life into brands for over two decades. Nestled in the heart of NYC, we've made it our mission to be the go-to destination for all your printing needs. Our journey is fueled by a passion for creativity, a commitment to quality, and a relentless pursuit of customer satisfaction.
                </p>

                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 not-prose my-8">
                    <h3 className="text-lg font-semibold text-teal-900 mb-2">Express QR Code Generator</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Our Express QR Code Generator is built for simplicity and efficiency. With just a few clicks, your QR code is ready to use. The digital landscape is evolving, and this tool lets you stay ahead, enhancing your marketing strategy and allowing you to connect with your audience more effectively.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-light text-gray-900 mb-8">Why Choose 4OVER4</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                        <div className="border-l-2 border-gray-200 pl-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Crafting Your Identity</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in the power of unique stories. Our custom printing services are tailored to help businesses stand out in the crowded marketplace. From eye-catching die-cut prints to luxurious business cards, we're here to ensure your brand speaks volumes.
                            </p>
                        </div>

                        <div className="border-l-2 border-gray-200 pl-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Unleashed</h3>
                            <p className="text-gray-600 leading-relaxed">
                                When it comes to printing, quality is non-negotiable. We take pride in delivering the finest prints that not only meet but exceed your expectations. Immerse yourself in a world where every detail matters, and every print tells a story.
                            </p>
                        </div>

                        <div className="border-l-2 border-gray-200 pl-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordability That Surprises</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Elevating your brand shouldn't break the bank. Experience the joy of premium prints at budget-friendly prices. At 4OVER4, we've redefined affordability without compromising on excellence.
                            </p>
                        </div>

                        <div className="border-l-2 border-gray-200 pl-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Swift and Seamless Delivery</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Time is of the essence, and we understand that. Our commitment to prompt delivery spans across the USA. Get ready to witness the magic of receiving top-notch prints at your doorstep in just days.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mt-12 not-prose">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        To be more than a printing service – to be the creative partner you can rely on. We envision a world where every business, big or small, has the opportunity to make a lasting impression through exceptional prints.
                    </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-12">
                    <p className="text-gray-500 text-sm">
                        Founded in 1999, 4OVER4 has grown from a small New York print shop to become one of America's most trusted printing partners, serving over 50,000 satisfied customers nationwide.
                    </p>
                </div>
            </div>
        </div>
    );
}
