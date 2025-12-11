'use client';

import { useBookStore } from '@/lib/store';
import { ISBN_OPTIONS } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { Check, Barcode } from 'lucide-react';
import { motion } from 'framer-motion';

export function ISBNStep() {
    const { isbnTier, setIsbnTier, barcodeOnly, setBarcodeOnly } = useBookStore();

    const selectedOption = ISBN_OPTIONS.find(o => o.id === isbnTier);

    // Preview Content
    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-sm mb-6 w-48 relative">
                <div className="h-24 flex items-center justify-center bg-gray-50 mb-2 overflow-hidden relative">
                    {/* Visual Barcode Stub */}
                    <div className="flex gap-0.5 h-12 opacity-80">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="bg-black w-px" style={{ width: Math.random() > 0.5 ? 2 : 1, marginRight: Math.random() > 0.5 ? 1 : 0 }} />
                        ))}
                    </div>
                    {/* Label */}
                    <div className="absolute bottom-1 text-[8px] font-mono tracking-widest text-gray-500">
                        {isbnTier > 0 ? 'ISBN 978-X-XX-XXXXXX-X' : barcodeOnly ? 'YOUR BARCODE' : ''}
                    </div>
                </div>
                {isbnTier > 0 && (
                    <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        ISBN INCLUDED
                    </div>
                )}
                {barcodeOnly && isbnTier === 0 && (
                    <div className="absolute -top-2 -right-2 bg-gray-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        BARCODE ONLY
                    </div>
                )}
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">
                {isbnTier > 0 ? `${isbnTier} ISBN Number${isbnTier > 1 ? 's' : ''}` : barcodeOnly ? 'Placement Only' : 'No ISBN / Barcode'}
            </h3>
            <p className="text-xs text-gray-500 max-w-[200px]">
                {isbnTier > 0
                    ? 'Official registration for global book distribution.'
                    : barcodeOnly
                        ? 'We place your provided barcode on the cover.'
                        : 'Your book will not have a barcode or ISBN.'}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="ISBN & Barcode"
            description="Do you need an ISBN for your book? Required for retail sales (Amazon, Barnes & Noble, etc)."
            preview={Preview}
        >
            <div className="space-y-6">
                {/* Main ISBN Selection */}
                <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Select ISBN Quantity</h4>
                    <div className="grid grid-cols-1 gap-3">
                        {ISBN_OPTIONS.map((option) => (
                            <SelectableCard
                                key={option.id}
                                selected={isbnTier === option.id && !barcodeOnly}
                                onClick={() => {
                                    setIsbnTier(option.id);
                                    setBarcodeOnly(false);
                                }}
                                title={option.id === 0 ? 'No ISBN Needed' : `${option.label} ISBN${option.id > 1 ? 's' : ''}`}
                                description={option.id === 0 ? 'I have my own or do not need one.' : option.id === 1 ? 'Single ISBN for this title.' : 'Multiple ISBNs for a series or publishing house.'}
                                price={option.price}
                                features={option.perEach ? [`$${option.perEach} each`] : []}
                                showCheck={isbnTier === option.id && !barcodeOnly}
                            />
                        ))}
                    </div>
                </div>

                {/* Barcode Only Option (if no ISBN selected) */}
                {isbnTier === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pt-4 border-t border-gray-100"
                    >
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1 mb-3">Barcode Placement</h4>
                        <SelectableCard
                            selected={barcodeOnly}
                            onClick={() => setBarcodeOnly(!barcodeOnly)}
                            title="I have my own Barcode / ISBN"
                            description="You provide the image, we place it on the back cover for you."
                            price={20}
                            icon={<Barcode className="w-4 h-4 text-gray-500" />}
                            showCheck={barcodeOnly}
                        />
                    </motion.div>
                )}
            </div>
        </StepLayout>
    );
}
