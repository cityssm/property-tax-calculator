// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable perfectionist/sort-union-types */

export interface TaxData {
  taxYear: number
  
  percentages: Record<Area, AreaTaxPercentages>
}

export type AreaTaxPercentages = Partial<Record<PropertyClass, TaxPercentages>>

export interface TaxPercentages {
  taxRate: number
  
  budgetAreas: Partial<Record<BudgetArea, number>>
}

type Area = 'Urban' | 'Rural'

type PropertyClass = 'Residential'

type BudgetArea =
  | 'Corporate Support'
  | 'Fire Services'
  | 'Police Services'
  | 'Public Works & Engineering'
  | 'Winter Maintenance'
  | 'Waste Management'
  | 'Community Development & Enterprise Services'
  | 'Recreation & Culture'
  | 'Community Centres'
  | 'Planning'
  | 'Transit'
  | 'Levy Boards & Outside Agencies'
  | 'Economic Development'
  | 'Capital Financing and Debt'
  | 'Education'
