'use client';

import { useBookStore } from '@/lib/store';
import { COVER_MATERIALS, DIAMOND_3D_OPTIONS } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Gem, Layers } from 'lucide-react';

export function CoverMaterialStep() {
    const { coverMaterial, setCoverMaterial, diamond3D, setDiamond3D } = useBookStore();

    const selectedMaterial = COVER_MATERIALS.find(m => m.id === coverMaterial);
    const selectedDiamond = DIAMOND_3D_OPTIONS.find(d => d.id === diamond3D);

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            {/* Cover Visual */}
            <div className="relative mb-6 group perspective-1000">
                <div className="w-32 h-48 bg-white border border-gray-300 shadow-xl rounded-r-md flex items-center justify-center relative overflow-hidden transition-transform group-hover:rotate-y-12 duration-500 transform-style-3d bg-gray-50">
                    {/* Material/Color Simulation */}
                    <div className={`absolute inset-0 ${coverMaterial.includes('coated') ? 'bg-white' : 'bg-[#f5f5f0]'}`} />

                    {/* 3D Effect Visual */}
                    {diamond3D !== 'none' && (
                        <div className="absolute inset-x-0 top-1/3 h-1/3 border-y-2 border-gray-200 flex items-center justify-center">
                            <span className="text-[10px] uppercase font-bold text-gray-300 tracking-widest opacity-50">
                                {selectedDiamond?.name?.replace('Diamond 3D ', '')}
                            </span>
                        </div>
                    )}

                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/10 shadow-inner" />
                </div>
            </div>

            <div className="space-y-1">
                <h3 className="text-lg font-medium text-gray-900">{selectedMaterial?.name}</h3>
                {diamond3D !== 'none' && (
                    <p className="text-xs text-blue-600 font-medium flex items-center justify-center gap-1">
                        <Gem className="w-3 h-3" />
                        {selectedDiamond?.name}
                    </p>
                )}
            </div>
        </div>
    );

    return (
        <StepLayout
            title="Cover Material"
            description="Choose the stock for your book cover. Add Diamond 3D effects for a premium finish."
            preview={Preview}
        >
            <div className="space-y-8">
                {/* Cover Stocks */}
                <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1 flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Card Stock
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                        {COVER_MATERIALS.map((material) => (
                            <SelectableCard
                                key={material.id}
                                selected={coverMaterial === material.id}
                                onClick={() => setCoverMaterial(material.id)}
                                title={material.name}
                                subtitle={`${material.thickness}" thick`}
                                price={material.pricePerBook}
                                features={[material.tag]}
                                showCheck={true}
                            />
                        ))}
                    </div>
                </div>

                {/* Diamond 3D Options */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-lg border border-blue-100/50">
                    <h4 className="text-xs font-semibold text-blue-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Gem className="w-4 h-4 text-blue-500" />
                        Diamond 3D Effects
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {DIAMOND_3D_OPTIONS.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setDiamond3D(option.id)}
                                className={`text-left p-4 rounded-md border transition-all relative overflow-hidden ${diamond3D === option.id
                                        ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500'
                                        : 'bg-white/60 border-blue-200 hover:bg-white hover:border-blue-300'
                                    }`}
                            >
                                <div className="font-medium text-sm text-gray-900 mb-1">{option.name}</div>
                                <div className="text-xs text-gray-500">
                                    {option.pricePerBook > 0 ? `+$${option.pricePerBook.toFixed(2)}` : 'Included'}
                                </div>
                                {diamond3D === option.id && (
                                    <motion.div
                                        layoutId="diamond-check"
                                        className="absolute top-2 right-2 text-blue-500"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </StepLayout>
    );
}
