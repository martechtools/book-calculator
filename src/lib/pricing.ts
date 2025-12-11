import {
    BINDINGS,
    COIL_COLORS,
    PAPER_TYPES,
    COVER_MATERIALS,
    DIAMOND_3D_OPTIONS,
    COVER_COATINGS,
    ISBN_OPTIONS,
    INSIDE_DESIGN_OPTIONS,
    COVER_DESIGN_OPTIONS,
    RUSH_OPTIONS,
    FREE_BOOKS_THRESHOLD,
    FREE_BOOKS_BONUS,
    PRINTED_PROOF_PRICE,
    BARCODE_ONLY_PRICE,
    HARDCOVER_CONVERSION_PRICE,
} from './constants';
import type { BookConfig } from './store';

// Calculate base price per page (simplified - real pricing would be more complex)
const BASE_PRICE_PER_BW_PAGE = 0.02;
const BASE_PRICE_PER_COLOR_PAGE = 0.08;
const BASE_BOOK_PRICE = 2.50;

export function calculatePricing(config: BookConfig) {

    const effectiveQuantity = config.quantity >= FREE_BOOKS_THRESHOLD
        ? config.quantity + FREE_BOOKS_BONUS
        : config.quantity;

    // Base page cost
    const pageCost = (config.bwPages * BASE_PRICE_PER_BW_PAGE) +
        (config.colorPages * BASE_PRICE_PER_COLOR_PAGE);

    // Binding cost
    const binding = BINDINGS.find(b => b.id === config.binding)!;
    let bindingCost = binding.pricePerBook;

    // Coil color cost (only for spiral)
    if (config.binding === 'spiral') {
        const coil = COIL_COLORS.find(c => c.id === config.coilColor)!;
        bindingCost += coil.extraCost;
    }

    // Paper cost
    const allPapers = [...PAPER_TYPES.offset, ...PAPER_TYPES.coated];
    const paper = allPapers.find(p => p.id === config.paperType)!;
    const paperCost = paper.pricePerBook;

    // Cover material cost
    const coverMaterial = COVER_MATERIALS.find(c => c.id === config.coverMaterial)!;
    const coverMaterialCost = coverMaterial.pricePerBook;

    // Diamond 3D cost
    const diamond3D = DIAMOND_3D_OPTIONS.find(d => d.id === config.diamond3D)!;
    const diamond3DCost = diamond3D.pricePerBook;

    // Cover coating cost
    const coating = COVER_COATINGS.find(c => c.id === config.coverCoating)!;
    const coatingCost = coating.pricePerBook;

    // Per book total
    const pricePerBook = BASE_BOOK_PRICE + pageCost + bindingCost + paperCost +
        coverMaterialCost + diamond3DCost + coatingCost;

    // Base price (quantity * per book)
    const basePrice = pricePerBook * config.quantity;

    // Options (flat costs)
    let optionsTotal = 0;

    // Printed proof
    if (config.printedProof) {
        optionsTotal += PRINTED_PROOF_PRICE;
    }

    // ISBN
    const isbn = ISBN_OPTIONS.find(i => i.id === config.isbnTier)!;
    optionsTotal += isbn.price;

    // Barcode only
    if (config.barcodeOnly) {
        optionsTotal += BARCODE_ONLY_PRICE;
    }

    // Inside design
    const insideDesign = INSIDE_DESIGN_OPTIONS.find(d => d.id === config.insideDesign)!;
    optionsTotal += insideDesign.price;

    // Cover design
    const coverDesign = COVER_DESIGN_OPTIONS.find(d => d.id === config.coverDesign)!;
    optionsTotal += coverDesign.price;

    // Hard cover conversion
    if (config.hardCoverConvert && config.quantity >= FREE_BOOKS_THRESHOLD) {
        optionsTotal += HARDCOVER_CONVERSION_PRICE;
    }

    // Rush services
    const rush = RUSH_OPTIONS.find(r => r.id === config.rushLevel)!;
    const rushCost = rush.price;

    // Total
    const subtotal = basePrice + optionsTotal + rushCost;
    const total = subtotal + (config.shippingEstimate || 0);

    // Effective price per book (including free books)
    const effectivePricePerBook = subtotal / effectiveQuantity;

    return {
        pricePerBook,
        basePrice,
        optionsTotal,
        rushCost,
        shippingEstimate: config.shippingEstimate,
        subtotal,
        total,
        effectiveQuantity,
        effectivePricePerBook,
        freeBooks: config.quantity >= FREE_BOOKS_THRESHOLD ? FREE_BOOKS_BONUS : 0,
    };
}

export function calculateProductionDays(config: BookConfig): number {
    let days = 2; // Standard production

    // Rush adjustments
    const rush = RUSH_OPTIONS.find(r => r.id === config.rushLevel)!;
    days = rush.days;

    // Spiral coil color adds days
    if (config.binding === 'spiral') {
        const coil = COIL_COLORS.find(c => c.id === config.coilColor)!;
        days += coil.extraDays;
    }

    // Edge printing adds days
    if (config.edgePrinting) {
        days += 2;
    }

    // Diamond 3D adds days (estimate)
    if (config.diamond3D !== 'none') {
        days += 1;
    }

    return days;
}

export function validatePageCount(
    binding: 'perfect' | 'spiral' | 'saddle',
    totalPages: number
): { valid: boolean; error?: string } {
    const bindingConfig = BINDINGS.find(b => b.id === binding)!;

    if (totalPages < bindingConfig.minPages) {
        return {
            valid: false,
            error: `Minimum ${bindingConfig.minPages} pages required for ${bindingConfig.name}`
        };
    }

    if (totalPages > bindingConfig.maxPages) {
        return {
            valid: false,
            error: `Maximum ${bindingConfig.maxPages} pages allowed for ${bindingConfig.name}`
        };
    }

    if (binding === 'saddle' && totalPages % 4 !== 0) {
        return {
            valid: false,
            error: 'Saddle Stitched binding requires page count divisible by 4'
        };
    }

    return { valid: true };
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
}
