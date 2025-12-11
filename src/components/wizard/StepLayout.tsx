'use client';

import { motion } from 'framer-motion';

interface StepLayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
    preview?: React.ReactNode;
}

export function StepLayout({ title, description, children, preview }: StepLayoutProps) {
    return (
        <div className="h-full flex flex-col">
            {/* Step Header */}
            {title && (
                <div className="mb-8">
                    <h2 className="text-2xl font-light text-gray-900 mb-2">{title}</h2>
                    {description && (
                        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            )}

            {/* Content & Preview Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
                {/* Options Column - Takes up majority */}
                <div className="lg:col-span-8 space-y-6">
                    {children}
                </div>

                {/* Preview Column - Sticky Contextual Preview */}
                <div className="lg:col-span-4 hidden lg:block">
                    {preview ? (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-md bg-gray-50 flex items-center justify-center relative">
                                {/* Preview Container */}
                                {preview}
                            </div>
                            <div className="mt-3 text-center">
                                <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Visual Preview</span>
                            </div>
                        </motion.div>
                    ) : (
                        // Placeholder if no preview provided (to maintain layout)
                        // Or we can choose to auto-collapse? For now, we keep layout consistent.
                        <div className="sticky top-6 border border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50/50">
                            <span className="text-sm text-gray-400">Select an option to see details</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
