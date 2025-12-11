'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface SelectableCardProps {
    selected: boolean;
    onClick: () => void;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    price?: number | string;
    description?: React.ReactNode;
    features?: string[];
    icon?: React.ReactNode;
    className?: string;
    savingsBadge?: React.ReactNode;
    showCheck?: boolean;
}

export function SelectableCard({
    selected,
    onClick,
    title,
    subtitle,
    price,
    description,
    features,
    icon,
    className,
    savingsBadge,
    showCheck = true
}: SelectableCardProps) {
    // Format price if it's a number
    const formattedPrice = typeof price === 'number'
        ? price > 0 ? `+$${price.toLocaleString()}` : '+$0'
        : price;

    return (
        <button
            onClick={onClick}
            className={cn(
                "group relative w-full text-left p-5 border transition-all duration-300 rounded-sm overflow-hidden cursor-pointer",
                selected
                    ? "bg-gray-900 border-gray-900 shadow-xl"
                    : "bg-white border-gray-200 hover:border-gray-400 hover:shadow-md",
                className
            )}
        >
            {/* Header / Top Row */}
            <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-4 pr-12"> {/* pr-12 to prevent overlap with checkmark/price */}
                    {/* Icon */}
                    {icon && (
                        <div className={cn(
                            "mt-0.5 transition-colors duration-300",
                            selected ? "text-white" : "text-gray-400 group-hover:text-gray-600"
                        )}>
                            {icon}
                        </div>
                    )}

                    {/* Title & Subtitle */}
                    <div>
                        <h3 className={cn(
                            "font-medium text-lg leading-tight transition-colors duration-300",
                            selected ? "text-white" : "text-gray-900"
                        )}>
                            {title}
                        </h3>
                        {subtitle && (
                            <p className={cn(
                                "text-sm mt-1 transition-colors duration-300",
                                selected ? "text-gray-400" : "text-gray-500"
                            )}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>

                {/* Price - Moved to prevent checking overlap, or ensured padding */}
                {price !== undefined && (
                    <div className="text-right flex-shrink-0 z-10 relative">
                        <div className={cn(
                            "text-sm font-medium transition-colors duration-300",
                            selected ? "text-white" : price === 0 || price === 'Included' || price === '+$0' ? "text-gray-900" : "text-gray-900"
                        )}>
                            {formattedPrice}
                        </div>
                        {savingsBadge}
                    </div>
                )}
            </div>

            {/* Description */}
            {description && (
                <div className={cn(
                    "mt-3 text-sm leading-relaxed transition-colors duration-300 pr-8",
                    selected ? "text-gray-300" : "text-gray-600",
                    icon ? "ml-10" : "" // Indent to align with text if icon exists
                )}>
                    {description}
                </div>
            )}

            {/* Features List */}
            {features && features.length > 0 && (
                <div className={cn("mt-4 space-y-1", icon ? "ml-10" : "")}>
                    {features.map((feature, i) => (
                        <div key={i} className={cn(
                            "text-xs flex items-center gap-1.5",
                            selected ? "text-gray-400" : "text-gray-500"
                        )}>
                            <div className={cn("w-1 h-1 rounded-full", selected ? "bg-gray-500" : "bg-gray-400")} />
                            {feature}
                        </div>
                    ))}
                </div>
            )}

            {/* Selected Indicator - Bottom Right for less interference or Top Right with different style */}
            {selected && showCheck && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute bottom-0 right-0 p-1.5 bg-white rounded-tl-lg shadow-sm border-t border-l border-gray-100"
                >
                    <Check className="w-4 h-4 text-gray-900" />
                </motion.div>
            )}
        </button>
    );
}
