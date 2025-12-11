'use client';

import { useBookStore, getBookSizeDimensions } from '@/lib/store';
import { BOOK_SIZES } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { motion } from 'framer-motion';
import { Ruler } from 'lucide-react';

export function BookSizeStep() {
    const { bookSize, setBookSize } = useBookStore();
    const currentSize = getBookSizeDimensions(bookSize);

    const sizeGroups = [
        { label: 'Portrait', sizes: BOOK_SIZES.portrait },
        { label: 'Landscape', sizes: BOOK_SIZES.landscape },
        { label: 'Square', sizes: BOOK_SIZES.square },
    ];

    const Preview = (
        <div className="flex flex-col items-center justify-center text-gray-400 h-full w-full p-8">
            <div
                className="border-2 border-gray-900 bg-white shadow-lg transition-all duration-500 relative flex items-center justify-center"
                style={{
                    width: `${currentSize.width * 20}px`, // Scale for visual
                    height: `${currentSize.height * 20}px`,
                    maxWidth: '100%',
                    maxHeight: '260px'
                }}
            >
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-900 flex flex-col items-center gap-1">
                    <div className="h-8 w-[1px] bg-gray-300" />
                    <span>{currentSize.height}"</span>
                    <div className="h-8 w-[1px] bg-gray-300" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-gray-900 flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-gray-300" />
                    <span>{currentSize.width}"</span>
                    <div className="w-4 h-[1px] bg-gray-300" />
                </div>
                <span className="text-gray-900 font-bold text-xl opacity-10">{currentSize.label}</span>
            </div>
            <div className="mt-12 flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest">
                <Ruler className="w-4 h-4" />
                <span>Dimensions</span>
            </div>
        </div>
    );

    return (
        <StepLayout
            title="Select Book Size"
            description="Choose from our standard sizes. The size determines the layout canvas for your content."
            preview={Preview}
        >
            <div className="space-y-8">
                {sizeGroups.map((group, groupIndex) => (
                    <motion.div
                        key={group.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: groupIndex * 0.1 }}
                    >
                        <h3 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-widest pl-1">
                            {group.label}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {group.sizes.map((size) => {
                                const isSelected = bookSize === size.id;
                                return (
                                    <SelectableCard
                                        key={size.id}
                                        selected={isSelected}
                                        onClick={() => setBookSize(size.id)}
                                        title={size.label}
                                        subtitle={`${size.width}″ × ${size.height}″`}
                                        className="h-full"
                                        showCheck={true}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </StepLayout>
    );
}
