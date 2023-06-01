export interface TaxData {
    taxYear: number;
    percentages: Record<Area, AreaTaxPercentages>;
}
export type AreaTaxPercentages = {
    [propertyClass in PropertyClass]?: TaxPercentages;
};
export interface TaxPercentages {
    taxRate: number;
    budgetAreas: {
        [budgetArea in BudgetArea]?: number;
    };
}
type Area = 'Urban' | 'Rural';
type PropertyClass = 'Residential';
type BudgetArea = 'Corporate Support' | 'Fire Services' | 'Police Services' | 'Public Works & Engineering' | 'Winter Maintenance' | 'Waste Management' | 'Community Development & Enterprise Services' | 'Recreation & Culture' | 'Community Centres' | 'Planning' | 'Transit' | 'Levy Boards & Outside Agencies' | 'Economic Development' | 'Capital Financing and Debt' | 'Education';
export {};
