'use client';

import { useBookStore, getBookSizeDimensions } from '@/lib/store';
import { calculatePricing, calculateProductionDays, formatCurrency } from '@/lib/pricing';
import { FREE_BOOKS_THRESHOLD, FREE_BOOKS_BONUS, BINDINGS, PAPER_TYPES, COVER_MATERIALS } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Calendar } from 'lucide-react';

export function OrderSummarySidebar() {
    const store = useBookStore();
    const pricing = calculatePricing(store);
    const productionDays = calculateProductionDays(store);

    // Helpers to find labels
    const getBindingLabel = () => BINDINGS.find(b => b.id === store.binding)?.name || store.binding;

    const getPaperLabel = () => {
        const offset = PAPER_TYPES.offset.find(p => p.id === store.paperType);
        if (offset) return offset.name;
        const coated = PAPER_TYPES.coated.find(p => p.id === store.paperType);
        return coated?.name || store.paperType;
    };

    const getCoverLabel = () => COVER_MATERIALS.find(c => c.id === store.coverMaterial)?.name || store.coverMaterial;

    const bookSize = getBookSizeDimensions(store.bookSize);
    const totalPages = store.bwPages + store.colorPages;

    const sections = [
        { label: 'Binding', value: getBindingLabel() },
        { label: 'Size', value: bookSize ? `${bookSize.width}" × ${bookSize.height}"` : store.bookSize },
        { label: 'Pages', value: `${totalPages} Total`, sub: `${store.colorPages} Color, ${store.bwPages} B&W` },
        { label: 'Quantity', value: `${store.quantity.toLocaleString()} Books`, sub: store.quantity >= FREE_BOOKS_THRESHOLD ? `+${FREE_BOOKS_BONUS} Free Copies` : null },
        { label: 'Paper', value: getPaperLabel() },
        { label: 'Cover', value: getCoverLabel() },
    ];

    const date = new Date();
    date.setDate(date.getDate() + productionDays);
    const deliveryDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return (
        <div className="h-full flex flex-col bg-white border-l border-gray-200">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-gray-900" />
                    <h3 className="font-semibold text-gray-900 uppercase tracking-widest text-xs">Order Summary</h3>
                </div>
                <div className="text-xs text-gray-400 font-mono">#{Math.floor(Math.random() * 9000) + 1000}</div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">

                {/* Main Specs */}
                <div className="space-y-4">
                    {sections.map((section, i) => (
                        <div key={i} className="flex justify-between text-sm group">
                            <span className="text-gray-500 group-hover:text-gray-900 transition-colors">{section.label}</span>
                            <div className="text-right">
                                <span className="font-medium text-gray-900 block">{section.value}</span>
                                {section.sub && <span className="text-xs text-green-600 block">{section.sub}</span>}
                            </div>
                        </div>
                    ))}
                </div>

                <Separator />

                {/* Additional Services */}
                <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Services</h4>

                    {store.isbnTier > 0 && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">ISBN & Barcode</span>
                            <span className="text-gray-900">{store.isbnTier} ISBN{store.isbnTier > 1 ? 's' : ''}</span>
                        </div>
                    )}

                    {store.coverDesign !== 'none' && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Cover Design</span>
                            <span className="text-gray-900 capitalize">{store.coverDesign}</span>
                        </div>
                    )}

                    {store.rushLevel !== 'standard' && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Rush Production</span>
                            <span className="text-orange-600 font-medium capitalize">{store.rushLevel}</span>
                        </div>
                    )}

                    {store.printedProof && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Printed Proof</span>
                            <span className="text-gray-900">Included</span>
                        </div>
                    )}

                    {store.hardCoverConvert && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Hardcover Upgrade</span>
                            <span className="text-yellow-600 font-medium">Active</span>
                        </div>
                    )}
                </div>

                <Separator />

                {/* Timeline */}
                <div className="bg-blue-50/50 p-4 rounded-sm border border-blue-100">
                    <div className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 text-blue-600 mt-0.5" />
                        <div>
                            <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-1">Estimated Completion</p>
                            <p className="text-sm font-medium text-blue-700">{deliveryDate} ({productionDays} Days)</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer / Total */}
            <div className="p-6 bg-gray-900 text-white mt-auto">
                <div className="space-y-1 mb-4">
                    <div className="flex justify-between items-end">
                        <span className="text-sm text-gray-400">Unit Price</span>
                        <span className="font-medium">{formatCurrency(pricing.pricePerBook)}</span>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                    <div className="flex justify-between items-end">
                        <span className="text-lg font-light">Total</span>
                        <span className="text-2xl font-bold tracking-tight">{formatCurrency(pricing.total)}</span>
                    </div>
                    <div className="mt-2 text-right">
                        <span className="text-xs text-gray-500">Shipping calculated at checkout</span>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                        Powered by 4/4 <div className="w-1 h-1 bg-gray-600 rounded-full" /> Print Engine
                    </p>
                </div>
            </div>
        </div>
    );
}
