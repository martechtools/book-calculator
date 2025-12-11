// Book configuration options and pricing data

export const BINDINGS = [
    {
        id: 'perfect',
        name: 'Perfect Binding',
        subtitle: 'Paper Back',
        description: 'Softcover, glued spine',
        pricePerBook: 0,
        minPages: 16,
        maxPages: 1052,
    },
    {
        id: 'spiral',
        name: 'Spiral Coil Binding',
        subtitle: 'Plastic Coil',
        description: 'Plastic coil along the spine',
        pricePerBook: 0.60,
        minPages: 16,
        maxPages: 350,
    },
    {
        id: 'saddle',
        name: 'Saddle Stitched',
        subtitle: 'Stapled Booklet',
        description: 'Staples in the spine, booklet style',
        pricePerBook: 0,
        minPages: 16,
        maxPages: 36,
        mustBeDivisibleBy: 4,
    },
] as const;

export const COIL_COLORS = [
    { id: 'black', name: 'Black', inStock: true, extraCost: 0, extraDays: 0 },
    { id: 'white', name: 'White', inStock: true, extraCost: 0, extraDays: 0 },
    { id: 'clear', name: 'Clear', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'red', name: 'Red', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'pumpkin', name: 'Pumpkin', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'yellow', name: 'Yellow', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'green', name: 'Green', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'forest-green', name: 'Forest Green', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'navy-blue', name: 'Navy Blue', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'royal-blue', name: 'Royal Blue', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'purple', name: 'Purple', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'burgundy', name: 'Burgundy', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'gold', name: 'Gold', inStock: false, extraCost: 0.20, extraDays: 4 },
    { id: 'silver', name: 'Silver', inStock: false, extraCost: 0.20, extraDays: 4 },
] as const;

export const BOOK_SIZES = {
    portrait: [
        { id: '4.25x7', label: '4.25″ × 7″', width: 4.25, height: 7 },
        { id: '5.5x8.5', label: '5.5″ × 8.5″', width: 5.5, height: 8.5 },
        { id: '6x9', label: '6″ × 9″', width: 6, height: 9 },
        { id: '8.5x11', label: '8.5″ × 11″', width: 8.5, height: 11 },
    ],
    landscape: [
        { id: '7x4.25', label: '7″ × 4.25″', width: 7, height: 4.25 },
        { id: '8.5x5.5', label: '8.5″ × 5.5″', width: 8.5, height: 5.5 },
        { id: '9x6', label: '9″ × 6″', width: 9, height: 6 },
        { id: '11x8.5', label: '11″ × 8.5″', width: 11, height: 8.5 },
        { id: '12x9', label: '12″ × 9″', width: 12, height: 9 },
    ],
    square: [
        { id: '5.5x5.5', label: '5.5″ × 5.5″', width: 5.5, height: 5.5 },
        { id: '6x6', label: '6″ × 6″', width: 6, height: 6 },
        { id: '8.5x8.5', label: '8.5″ × 8.5″', width: 8.5, height: 8.5 },
        { id: '9x9', label: '9″ × 9″', width: 9, height: 9 },
        { id: '11x11', label: '11″ × 11″', width: 11, height: 11 },
    ],
} as const;

export const PAPER_TYPES = {
    offset: [
        { id: '60-bright-white', name: '60# Bright White', tag: '(our standard)', pricePerBook: 0, ppi: 440 },
        { id: '70-bright-white', name: '70# Bright White', tag: '(thicker)', pricePerBook: 0.40, ppi: 378 },
        { id: '80-bright-white', name: '80# Bright White', tag: '(thickest)', pricePerBook: 1.21, ppi: 330 },
        { id: '60-cream', name: '60# Cream', tag: '', pricePerBook: 0.61, ppi: 420 },
        { id: '70-cream', name: '70# Cream', tag: '(thicker)', pricePerBook: 0.81, ppi: 360 },
    ],
    coated: [
        { id: '80-silk', name: '80# Silk Text', tag: '(low shine)', pricePerBook: 1.62, ppi: 440 },
        { id: '100-silk', name: '100# Silk Text', tag: '(thicker)', pricePerBook: 1.82, ppi: 352 },
        { id: '80-gloss', name: '80# Gloss Text', tag: '(gloss finish)', pricePerBook: 1.62, ppi: 480 },
        { id: '100-gloss', name: '100# Gloss Text', tag: '(thicker)', pricePerBook: 1.82, ppi: 384 },
    ],
} as const;

export const DIAMOND_3D_OPTIONS = [
    { id: 'none', name: 'None', pricePerBook: 0 },
    { id: 'foil', name: 'Diamond 3D Foil', pricePerBook: 2.10 },
    { id: 'clear', name: 'Diamond 3D Clear', pricePerBook: 1.30 },
    { id: 'smart-texture', name: 'Diamond 3D Smart Texture', pricePerBook: 1.15 },
] as const;

export const COVER_MATERIALS = [
    { id: '10pt-coated', name: '10 Pt. Coated', tag: '(our standard)', pricePerBook: 0, thickness: 0.010 },
    { id: '12pt-coated', name: '12 Pt. Coated', tag: '(thicker)', pricePerBook: 0.10, thickness: 0.012 },
    { id: '80-smooth', name: '80# Smooth', tag: '(no coating)', pricePerBook: 0.40, thickness: 0.011 },
    { id: '80-linen', name: '80# Linen', tag: '(no coating)', pricePerBook: 0.40, thickness: 0.009 },
    { id: 'leatherette', name: 'Leatherette', tag: '(no coating)', pricePerBook: 1.50, thickness: 0.009 },
] as const;

export const COVER_COATINGS = [
    { id: 'silk-laminate', name: 'Silk Laminate', pricePerBook: 0.50 },
    { id: 'gloss-uv', name: 'Gloss UV', pricePerBook: 0 },
    { id: 'hi-gloss', name: 'Hi-Gloss', pricePerBook: 0.50 },
] as const;

export const ISBN_OPTIONS = [
    { id: 0, label: 'No Thanks', quantity: 0, price: 0, perEach: null },
    { id: 1, label: '1', quantity: 1, price: 125, perEach: null },
    { id: 10, label: '10', quantity: 10, price: 450, perEach: 45 },
    { id: 100, label: '100', quantity: 100, price: 2000, perEach: 20 },
    { id: 1000, label: '1000', quantity: 1000, price: 4000, perEach: 4 },
] as const;

export const INSIDE_DESIGN_OPTIONS = [
    { id: 'none', name: 'No Thanks', price: 0 },
    { id: 'economy', name: 'Economy Reformatting', price: 125 },
    { id: 'standard', name: 'Standard Reformatting', price: 250 },
    { id: 'custom', name: 'Custom Reformatting', price: 500 },
] as const;

export const COVER_DESIGN_OPTIONS = [
    { id: 'none', name: 'No Thanks', price: 0 },
    { id: 'economy', name: 'Economy Create-A-Cover', price: 100 },
    { id: 'custom', name: 'Custom Cover Design', price: 500 },
] as const;

export const RUSH_OPTIONS = [
    { id: 'standard', name: 'Standard', days: 2, price: 0 },
    { id: 'rush', name: 'Rush', days: 1, price: 216.02 },
    { id: 'super-rush', name: 'Super Rush', days: 0, price: 432.04 },
] as const;

export const STEPS = [
    { id: 1, name: 'Binding', shortName: 'Binding' },
    { id: 2, name: 'Book Size', shortName: 'Size' },
    { id: 3, name: 'Number of Pages', shortName: 'Pages' },
    { id: 4, name: 'Quantity', shortName: 'Qty' },
    { id: 5, name: 'Quick Price', shortName: 'Price' },
    { id: 6, name: 'Inside Paper', shortName: 'Paper' },
    { id: 7, name: 'Cover Material', shortName: 'Cover' },
    { id: 8, name: 'Cover Coating', shortName: 'Coating' },
    { id: 9, name: 'Printed Proof', shortName: 'Proof' },
    { id: 10, name: 'ISBN + Barcode', shortName: 'ISBN' },
    { id: 11, name: 'Edge Printing', shortName: 'Edge' },
    { id: 12, name: 'Inside Design', shortName: 'Design' },
    { id: 13, name: 'Cover Design', shortName: 'CvrDsgn' },
    { id: 14, name: 'Hard Cover', shortName: 'HardCvr' },
] as const;

export const MIN_QUANTITY = 10;
export const FREE_BOOKS_THRESHOLD = 100;
export const FREE_BOOKS_BONUS = 25;
export const PRINTED_PROOF_PRICE = 40;
export const BARCODE_ONLY_PRICE = 20;
export const HARDCOVER_CONVERSION_PRICE = 210;
