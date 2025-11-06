// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable perfectionist/sort-objects */

import type { TaxData } from '../dataTypes.js'
;(() => {
  const taxData: TaxData = {
    taxYear: 2025,
    percentages: {
      Urban: {
        Residential: {
          taxRate: 0.01849357,
          budgetAreas: {
            'Corporate Support': 0.0910857986,
            'Fire Services': 0.0868029502,
            'Police Services': 0.1974575871,
            'Public Works & Engineering': 0.1470353635,
            'Winter Maintenance': 0.0453083945,
            'Waste Management': 0.0251269416,
            'Community Development & Enterprise Services': 0.0218187181,
            'Recreation & Culture': 0.0109091711,
            'Community Centres': 0.0244678054,
            Planning: 0.0049648994,
            Transit: 0.0472837626,
            'Levy Boards & Outside Agencies': 0.1477763392,
            'Economic Development': 0.0027571996,
            'Capital Financing and Debt': 0.0644736053,
            Education: 0.0827314638
          }
        }
      },
      Rural: {
        Residential: {
          taxRate: 0.01737378,
          budgetAreas: {
            'Corporate Support': 0.0969565619,
            'Fire Services': 0.0923976706,
            'Police Services': 0.2101843432,
            'Public Works & Engineering': 0.1278642613,
            'Winter Maintenance': 0.0482286615,
            'Waste Management': 0.0267464512,
            'Community Development & Enterprise Services': 0.0232250024,
            'Recreation & Culture': 0.0116123011,
            'Community Centres': 0.0260448317,
            Planning: 0.0052849026,
            Transit: 0.0503313482,
            'Levy Boards & Outside Agencies': 0.1573009842,
            'Economic Development': 0.0029349097,
            'Capital Financing and Debt': 0.0328240063,
            Education: 0.0880637642
          }
        }
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any).exports.taxData = taxData
})()
