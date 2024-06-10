import type { TaxData } from '../dataTypes'
;(() => {
  const taxData: TaxData = {
    taxYear: 2024,
    percentages: {
      Urban: {
        Residential: {
          taxRate: 0.01789136,
          budgetAreas: {
            'Corporate Support': 0.0907807944,
            'Fire Services': 0.0854957606,
            'Police Services': 0.192986257,
            'Public Works & Engineering': 0.1461364564,
            'Winter Maintenance': 0.0443637633,
            'Waste Management': 0.0242839545,
            'Community Development & Enterprise Services': 0.0222629111,
            'Recreation & Culture': 0.0104848741,
            'Community Centres': 0.024293403,
            Planning: 0.0041548983,
            Transit: 0.0481529233,
            'Levy Boards & Outside Agencies': 0.152640433,
            'Economic Development': 0.0026173148,
            'Capital Financing and Debt': 0.0658301066,
            Education: 0.0855161497
          }
        }
      },
      Rural: {
        Residential: {
          taxRate: 0.01706792,
          budgetAreas: {
            'Corporate Support': 0.0951604967,
            'Fire Services': 0.0896204874,
            'Police Services': 0.2022968424,
            'Public Works & Engineering': 0.1255956177,
            'Winter Maintenance': 0.0465040847,
            'Waste Management': 0.0254555293,
            'Community Development & Enterprise Services': 0.023336981,
            'Recreation & Culture': 0.0109907149,
            'Community Centres': 0.0254654336,
            Planning: 0.0043553505,
            Transit: 0.0504760519,
            'Levy Boards & Outside Agencies': 0.1600045418,
            'Economic Development': 0.0027435867,
            'Capital Financing and Debt': 0.0483524213,
            Education: 0.0896418601
          }
        }
      }
    }
  }

  ;(window as any).exports.taxData = taxData
})()
