'use client';

import { STEPS } from '@/lib/constants';
import { useBookStore } from '@/lib/store';
import { motion } from 'framer-motion';

export function StepIndicator() {
    const { currentStep, setStep } = useBookStore();

    // Group steps into sections for cleaner display (show 4 main sections like Rivian)
    const mainSteps = [
        { id: 1, label: '01', name: 'Basics', steps: [1, 2, 3, 4] },
        { id: 2, label: '02', name: 'Paper', steps: [5, 6, 7, 8] },
        { id: 3, label: '03', name: 'Options', steps: [9, 10, 11, 12] },
        { id: 4, label: '04', name: 'Finish', steps: [13, 14] },
    ];

    const getCurrentSection = () => {
        for (const section of mainSteps) {
            if (section.steps.includes(currentStep)) {
                return section.id;
            }
        }
        return 1;
    };

    const currentSection = getCurrentSection();

    return (
        <div className="space-y-3">
            {/* Section Numbers */}
            <div className="flex items-center gap-8">
                {mainSteps.map((section) => {
                    const isActive = section.id === currentSection;
                    const isCompleted = section.id < currentSection;
                    const isClickable = section.id <= currentSection;

                    return (
                        <button
                            key={section.id}
                            onClick={() => isClickable && setStep(section.steps[0])}
                            disabled={!isClickable}
                            className={`
                                relative text-2xl font-light transition-all
                                ${isActive
                                    ? 'text-gray-900'
                                    : isCompleted
                                        ? 'text-gray-500 cursor-pointer hover:text-gray-700'
                                        : 'text-gray-300 cursor-not-allowed'
                                }
                            `}
                        >
                            {section.label}
                            {isActive && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-900"
                                    initial={false}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Current step name (within section) */}
            <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-xl font-medium text-gray-900">
                    {STEPS[currentStep - 1]?.name}
                </h2>
            </motion.div>
        </div>
    );
}
