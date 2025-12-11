'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Side - Info */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
                        Contact <span className="font-semibold text-teal-600">4OVER4</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed">
                        Have a question about your book printing project? We're here to help guide you through the process.
                    </p>

                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-teal-50 rounded-lg">
                                    <Phone className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                                    <p className="text-gray-600 mb-1">
                                        <a href="tel:718-932-2700" className="hover:text-teal-600 transition-colors">
                                            718-932-2700
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-400">Fax: 718-932-2600</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-teal-50 rounded-lg">
                                    <Mail className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                                    <a href="mailto:support@4over4.com" className="text-gray-600 hover:text-teal-600 transition-colors">
                                        support@4over4.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-teal-50 rounded-lg">
                                    <MapPin className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                                    <p className="text-gray-600 mb-1">4OVER4.COM - New York Printing</p>
                                    <p className="text-gray-600">19-41 46th St</p>
                                    <p className="text-gray-600">Queens, NY 11105</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-teal-50 rounded-lg">
                                    <Clock className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                                    <p className="text-gray-600">Monday - Friday</p>
                                    <p className="text-gray-600">10am - 6pm EST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Send us a message</h2>
                    <p className="text-gray-500 mb-8">We'll get back to you within 24 hours</p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Name*</label>
                                <Input className="bg-white" placeholder="Your name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email*</label>
                                <Input className="bg-white" placeholder="you@example.com" type="email" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Subject*</label>
                            <Input className="bg-white" placeholder="Book printing inquiry" required />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Message*</label>
                            <textarea
                                className="w-full h-32 p-3 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                placeholder="Tell us about your book printing project..."
                                required
                            />
                        </div>

                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-base cursor-pointer">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
