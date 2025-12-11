'use client';

import { useBookStore, getBindingConfig } from '@/lib/store';
import { StepLayout } from '../StepLayout';
import { Input } from '@/components/ui/input';
import { AlertCircle, Layers } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function PagesStep() {
    const {
        bwPages,
        colorPages,
        setBwPages,
        setColorPages,
        colorPagesDescription,
        setColorPagesDescription,
        binding
    } = useBookStore();

    const bindingConfig = getBindingConfig(binding);
    const totalPages = bwPages + colorPages;

    // Validation
    const isValid = totalPages >= bindingConfig.minPages && totalPages <= bindingConfig.maxPages;

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-32 bg-white border border-gray-200 shadow-sm flex flex-col items-center mb-6" style={{ height: Math.max(60, Math.min(200, totalPages * 0.5)) + 'px' }}>
                {/* Pages stack visual */}
                <div className="w-full flex-1 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')] opacity-50" />
                {/* Spine */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
            </div>

            <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                    <Layers className="w-5 h-5 text-gray-400" />
                    <span className="text-3xl font-light text-gray-900">{totalPages}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-400">Total Pages</p>

                {!isValid && (
                    <p className="text-xs text-red-500 font-medium mt-2">
                        {totalPages < bindingConfig.minPages ? `Min: ${bindingConfig.minPages}` : `Max: ${bindingConfig.maxPages}`}
                    </p>
                )}
            </div>
        </div>
    );

    return (
        <StepLayout
            title="Page Count"
            description="Enter the number of Black & White and Color pages in your book."
            preview={Preview}
        >
            <div className="space-y-6 max-w-xl">
                {/* Inputs */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                            Black & White
                        </label>
                        <Input
                            type="number"
                            min={0}
                            value={bwPages || ''}
                            onChange={(e) => setBwPages(Number(e.target.value))}
                            className="text-2xl h-16 bg-white border-gray-200 focus:border-gray-900 focus:ring-0"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            Color
                        </label>
                        <Input
                            type="number"
                            min={0}
                            value={colorPages || ''}
                            onChange={(e) => setColorPages(Number(e.target.value))}
                            className="text-2xl h-16 bg-white border-gray-200 focus:border-gray-900 focus:ring-0"
                        />
                    </div>
                </div>

                {/* Color Description */}
                {colorPages > 0 && (
                    <div className="space-y-3 pt-2">
                        <label className="text-sm font-medium text-gray-700">
                            Description of Color Pages <span className="text-red-500">*</span>
                        </label>
                        <Input
                            placeholder="e.g. Photos at the end, Chapter headers..."
                            value={colorPagesDescription}
                            onChange={(e) => setColorPagesDescription(e.target.value)}
                            className="bg-white"
                        />
                        <p className="text-xs text-gray-500">
                            Please help us locate the color pages in your file.
                        </p>
                    </div>
                )}

                {/* Validation Alert */}
                {!isValid && (
                    <Alert variant="destructive" className="bg-red-50 border-red-100 text-red-900">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Invalid Page Count</AlertTitle>
                        <AlertDescription className="text-xs">
                            Your selected binding ({binding}) requires between {bindingConfig.minPages} and {bindingConfig.maxPages} pages.
                        </AlertDescription>
                    </Alert>
                )}

                {/* Info Box */}
                <div className="bg-gray-50 p-4 rounded-sm text-xs text-gray-500 leading-relaxed border border-gray-100">
                    <p className="font-medium text-gray-900 mb-1">Note:</p>
                    Page count refers to the number of single book pages (like page numbers vertically), not sheets of paper.
                </div>
            </div>
        </StepLayout>
    );
}
