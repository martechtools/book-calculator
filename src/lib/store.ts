import { create } from 'zustand';
import {
    BINDINGS,
    BOOK_SIZES,
    COIL_COLORS,
    PAPER_TYPES,
    COVER_MATERIALS,
    DIAMOND_3D_OPTIONS,
    COVER_COATINGS,
    INSIDE_DESIGN_OPTIONS,
    COVER_DESIGN_OPTIONS,
} from './constants';

export type BindingType = 'perfect' | 'spiral' | 'saddle';
export type RushLevel = 'standard' | 'rush' | 'super-rush';

export interface BookConfig {
    // Step 1: Binding
    binding: BindingType;
    coilColor: string;

    // Step 2: Book Size
    bookSize: string;

    // Step 3: Pages
    bwPages: number;
    colorPages: number;
    colorPagesDescription: string;

    // Step 4: Quantity
    quantity: number;

    // Step 5: Quick Price / Rush
    rushLevel: RushLevel;
    zipCode: string;
    shippingEstimate: number | null;

    // Step 6: Paper
    paperType: string;

    // Step 7: Cover Material
    diamond3D: string;
    coverMaterial: string;

    // Step 8: Cover Coating
    coverCoating: string;

    // Step 9: Printed Proof
    printedProof: boolean;

    // Step 10: ISBN
    isbnTier: number;
    barcodeOnly: boolean;

    // Step 11: Edge Printing
    edgePrinting: boolean;

    // Step 12: Inside Design
    insideDesign: string;

    // Step 13: Cover Design
    coverDesign: string;

    // Step 14: Hard Cover
    hardCoverConvert: boolean;
}

interface BookStore extends BookConfig {
    currentStep: number;
    setStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;

    // Setters
    setBinding: (binding: BindingType) => void;
    setCoilColor: (color: string) => void;
    setBookSize: (size: string) => void;
    setBwPages: (pages: number) => void;
    setColorPages: (pages: number) => void;
    setColorPagesDescription: (desc: string) => void;
    setQuantity: (qty: number) => void;
    setRushLevel: (level: RushLevel) => void;
    setZipCode: (zip: string) => void;
    setShippingEstimate: (estimate: number | null) => void;
    setPaperType: (type: string) => void;
    setDiamond3D: (opt: string) => void;
    setCoverMaterial: (material: string) => void;
    setCoverCoating: (coating: string) => void;
    setPrintedProof: (proof: boolean) => void;
    setIsbnTier: (tier: number) => void;
    setBarcodeOnly: (barcode: boolean) => void;
    setEdgePrinting: (edge: boolean) => void;
    setInsideDesign: (design: string) => void;
    setCoverDesign: (design: string) => void;
    setHardCoverConvert: (convert: boolean) => void;
}

export const useBookStore = create<BookStore>((set) => ({
    // Initial values
    currentStep: 1,
    binding: 'perfect',
    coilColor: COIL_COLORS[0].id,
    bookSize: BOOK_SIZES.portrait[1].id, // 5.5x8.5
    bwPages: 100,
    colorPages: 0,
    colorPagesDescription: '',
    quantity: 100,
    rushLevel: 'standard',
    zipCode: '',
    shippingEstimate: null,
    paperType: PAPER_TYPES.offset[0].id,
    diamond3D: DIAMOND_3D_OPTIONS[0].id,
    coverMaterial: COVER_MATERIALS[0].id,
    coverCoating: COVER_COATINGS[1].id, // Gloss UV
    printedProof: false,
    isbnTier: 0,
    barcodeOnly: false,
    edgePrinting: false,
    insideDesign: INSIDE_DESIGN_OPTIONS[0].id,
    coverDesign: COVER_DESIGN_OPTIONS[0].id,
    hardCoverConvert: false,

    // Navigation
    setStep: (step) => set({ currentStep: step }),
    nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 14) })),
    prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

    // Setters
    setBinding: (binding) => set({ binding }),
    setCoilColor: (coilColor) => set({ coilColor }),
    setBookSize: (bookSize) => set({ bookSize }),
    setBwPages: (bwPages) => set({ bwPages }),
    setColorPages: (colorPages) => set({ colorPages }),
    setColorPagesDescription: (colorPagesDescription) => set({ colorPagesDescription }),
    setQuantity: (quantity) => set({ quantity }),
    setRushLevel: (rushLevel) => set({ rushLevel }),
    setZipCode: (zipCode) => set({ zipCode }),
    setShippingEstimate: (shippingEstimate) => set({ shippingEstimate }),
    setPaperType: (paperType) => set({ paperType }),
    setDiamond3D: (diamond3D) => set({ diamond3D }),
    setCoverMaterial: (coverMaterial) => set({ coverMaterial }),
    setCoverCoating: (coverCoating) => set({ coverCoating }),
    setPrintedProof: (printedProof) => set({ printedProof }),
    setIsbnTier: (isbnTier) => set({ isbnTier }),
    setBarcodeOnly: (barcodeOnly) => set({ barcodeOnly }),
    setEdgePrinting: (edgePrinting) => set({ edgePrinting }),
    setInsideDesign: (insideDesign) => set({ insideDesign }),
    setCoverDesign: (coverDesign) => set({ coverDesign }),
    setHardCoverConvert: (hardCoverConvert) => set({ hardCoverConvert }),
}));

// Helper to get current binding config
export const getBindingConfig = (bindingId: BindingType) => {
    return BINDINGS.find((b) => b.id === bindingId)!;
};

// Helper to get book size dimensions
export const getBookSizeDimensions = (sizeId: string) => {
    const allSizes = [
        ...BOOK_SIZES.portrait,
        ...BOOK_SIZES.landscape,
        ...BOOK_SIZES.square,
    ];
    return allSizes.find((s) => s.id === sizeId)!;
};
