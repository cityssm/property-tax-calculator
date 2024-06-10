import type { TaxData } from '../dataTypes'
;(() => {
  const taxData: TaxData = {
    taxYear: 2023,
    percentages: {
      Urban: {
        Residential: {
          taxRate: 0.01720655,
          budgetAreas: {
            'Corporate Support': 0.09474331,
            'Fire Services': 0.0885121404,
            'Police Services': 0.1865353897,
            'Public Works & Engineering': 0.1419567338,
            'Winter Maintenance': 0.0430752018,
            'Waste Management': 0.0235033136,
            'Community Development & Enterprise Services': 0.0226787312,
            'Recreation & Culture': 0.0104325194,
            'Community Centres': 0.0224781924,
            Planning: 0.0054664045,
            Transit: 0.0462436471,
            'Levy Boards & Outside Agencies': 0.1521852194,
            'Economic Development': 0.0042728394,
            'Capital Financing and Debt': 0.0689965135,
            Education: 0.0889198438
          }
        }
      },
      Rural: {
        Residential: {
          taxRate: 0.01651196,
          budgetAreas: {
            'Corporate Support': 0.09872743285,
            'Fire Services': 0.09223423159,
            'Police Services': 0.19437953103,
            'Public Works & Engineering': 0.12257395936,
            'Winter Maintenance': 0.04488658984,
            'Waste Management': 0.02449166924,
            'Community Development & Enterprise Services': 0.02363241174,
            'Recreation & Culture': 0.01087122524,
            'Community Centres': 0.02342343997,
            Planning: 0.0056962764,
            Transit: 0.04818827387,
            'Levy Boards & Outside Agencies': 0.15858487566,
            'Economic Development': 0.00445251979,
            'Capital Financing and Debt': 0.05519848374,
            Education: 0.09265907967
          }
        }
      }
    }
  }

  ;(window as any).exports.taxData = taxData
})()
