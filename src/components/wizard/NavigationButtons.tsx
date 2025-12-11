'use client';

import { Button } from '@/components/ui/button';
import { useBookStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
    canProceed?: boolean;
    onNext?: () => boolean | void;
}

export function NavigationButtons({ canProceed = true, onNext }: NavigationButtonsProps) {
    const { currentStep, nextStep, prevStep } = useBookStore();

    const handleNext = () => {
        if (onNext) {
            const result = onNext();
            if (result === false) return;
        }
        nextStep();
    };

    return (
        <motion.div
            className="flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="gap-2 bg-transparent border-gray-400 text-gray-700 hover:bg-white hover:border-gray-600 disabled:opacity-30 rounded-none px-6 py-2 cursor-pointer disabled:cursor-not-allowed"
            >
                <ChevronLeft className="w-4 h-4" />
                Back
            </Button>

            <Button
                onClick={handleNext}
                disabled={!canProceed || currentStep === 14}
                className="gap-2 bg-gray-900 hover:bg-black text-white rounded-none px-8 py-2 disabled:opacity-50 min-w-[140px] cursor-pointer"
            >
                {currentStep === 14 ? 'Complete Order' : 'Continue'}
                {currentStep < 14 && <ChevronRight className="w-4 h-4" />}
            </Button>
        </motion.div>
    );
}
