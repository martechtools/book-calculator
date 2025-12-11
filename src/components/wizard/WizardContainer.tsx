'use client';

import Link from 'next/link';
import { useBookStore } from '@/lib/store';
import { StepIndicator } from './StepIndicator';
import { NavigationButtons } from './NavigationButtons';
import { OrderSummarySidebar } from '@/components/sidebar/OrderSummarySidebar';
import { motion, AnimatePresence } from 'framer-motion';

// Step components
import { BindingStep } from './steps/BindingStep';
import { BookSizeStep } from './steps/BookSizeStep';
import { PagesStep } from './steps/PagesStep';
import { QuantityStep } from './steps/QuantityStep';
import { QuickPriceStep } from './steps/QuickPriceStep';
import { PaperTypeStep } from './steps/PaperTypeStep';
import { CoverMaterialStep } from './steps/CoverMaterialStep';
import { CoverCoatingStep } from './steps/CoverCoatingStep';
import { PrintedProofStep } from './steps/PrintedProofStep';
import { ISBNStep } from './steps/ISBNStep';
import { EdgePrintingStep } from './steps/EdgePrintingStep';
import { InsideDesignStep } from './steps/InsideDesignStep';
import { CoverDesignStep } from './steps/CoverDesignStep';
import { HardCoverStep } from './steps/HardCoverStep';

const stepComponents: Record<number, React.ComponentType> = {
    1: BindingStep,
    2: BookSizeStep,
    3: PagesStep,
    4: QuantityStep,
    5: QuickPriceStep,
    6: PaperTypeStep,
    7: CoverMaterialStep,
    8: CoverCoatingStep,
    9: PrintedProofStep,
    10: ISBNStep,
    11: EdgePrintingStep,
    12: InsideDesignStep,
    13: CoverDesignStep,
    14: HardCoverStep,
};

export function WizardContainer() {
    const { currentStep } = useBookStore();
    const StepComponent = stepComponents[currentStep];

    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col lg:flex-row bg-[#f9f9f7]">
            {/* Left Panel - Main Configuration Area (75%) */}
            <div className="flex-1 flex flex-col h-full relative z-20 overflow-hidden bg-[#f9f9f7]">
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-black/5 flex-shrink-0 bg-[#f9f9f7]">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-teal-50 rounded-lg">
                                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <span className="text-sm font-semibold text-gray-900">BookPress</span>
                        </div>
                        <span className="text-sm text-gray-400">Book Configurator</span>
                    </div>
                    <Link href="/">
                        <button className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-4 decoration-gray-300 cursor-pointer">
                            Exit Configurator
                        </button>
                    </Link>
                </div>

                {/* Step Indicator */}
                <div className="px-8 py-6 bg-[#f9f9f7] sticky top-0 z-10 border-b border-black/5">
                    <StepIndicator />
                </div>

                {/* Scrollable Step Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                    <div className="px-8 py-8 lg:px-12 lg:py-10 max-w-7xl mx-auto w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="h-full"
                            >
                                {StepComponent && <StepComponent />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Footer (No Price Widget, just Buttons) */}
                <div className="border-t border-black/10 bg-[#f9f9f7] p-8">
                    <NavigationButtons />
                </div>
            </div>

            {/* Right Panel - Order Summary Sidebar (25% / Fixed Width) */}
            <div className="hidden lg:block w-[400px] flex-shrink-0 h-full border-l border-gray-200 bg-white relative z-30 shadow-xl">
                <OrderSummarySidebar />
            </div>

            {/* Mobile Order Summary Toggle would go here for responsiveness */}
        </div>
    );
}
