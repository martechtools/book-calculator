'use client';

import { useBookStore } from '@/lib/store';
import { HARDCOVER_CONVERSION_PRICE } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { BookMarked, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HardCoverStep() {
    const { hardCoverConvert, setHardCoverConvert } = useBookStore();

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="relative mb-6">
                {/* Stack of books visual */}
                <div className="relative w-36 h-48">
                    <motion.div
                        animate={{ y: hardCoverConvert ? 0 : 40, scale: hardCoverConvert ? 1 : 0.95 }}
                        className="absolute bottom-0 w-36 h-8 bg-gray-900 rounded-sm shadow-xl z-20"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gray-800 rounded-l-sm" />
                    </motion.div>

                    {hardCoverConvert && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -top-4 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded shadow-sm z-30 transform rotate-12"
                        >
                            Hardcover!
                        </motion.div>
                    )}
                </div>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">
                {hardCoverConvert ? 'Hardcover Upgrade' : 'Standard Softcover'}
            </h3>
            <p className="text-xs text-gray-500 max-w-[200px]">
                {hardCoverConvert
                    ? 'Premium casing for a library-quality finish.'
                    : 'Standard perfect bound or coil bound as selected.'}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="Hardcover Upgrade"
            description="Transform your order into premium hardcovers. Ideal for limited editions or special releases."
            preview={Preview}
        >
            <div className="grid grid-cols-1 gap-4">
                <SelectableCard
                    selected={!hardCoverConvert}
                    onClick={() => setHardCoverConvert(false)}
                    title="No Thanks, Keep as Softcover"
                    description="Proceed with the binding selected in Step 1."
                    price={0}
                    showCheck={true}
                />

                <SelectableCard
                    selected={hardCoverConvert}
                    onClick={() => setHardCoverConvert(true)}
                    title="Upgrade to Hardcover"
                    description="Convert entire order to Case Bound Hardcover."
                    price={HARDCOVER_CONVERSION_PRICE}
                    features={['Premium durability', 'Library quality', 'Increased cover value']}
                    icon={<BookMarked className="w-5 h-5 text-yellow-600" />}
                    savingsBadge={
                        <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Best Seller
                        </span>
                    }
                    showCheck={true}
                />
            </div>
        </StepLayout>
    );
}
