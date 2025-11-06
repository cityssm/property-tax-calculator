import type {
  AreaTaxPercentages,
  TaxData,
  TaxPercentages
} from '../dataTypes.js'
;(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const taxData = (globalThis as any).exports.taxData as TaxData

  /*
   * Budget Year
   */

  const budgetYearSelectElement = document.querySelector(
    '#filter--budgetYear'
  ) as HTMLSelectElement

  budgetYearSelectElement.addEventListener('change', renderAreas)

  // eslint-disable-next-line no-unsanitized/property
  budgetYearSelectElement.innerHTML = /* html */ `
    <option value="${taxData.taxYear}">
      ${taxData.taxYear}
    </option>
  `

  /*
   * Areas
   */

  const areaSelectElement = document.querySelector(
    '#filter--area'
  ) as HTMLSelectElement

  areaSelectElement.addEventListener('change', renderPropertyClasses)

  function renderAreas(): void {
    areaSelectElement.innerHTML = ''

    for (const area of Object.keys(taxData.percentages)) {
      const optionElement = document.createElement('option')
      optionElement.value = area
      optionElement.textContent = area
      areaSelectElement.append(optionElement)
    }

    renderPropertyClasses()
  }

  /*
   * Property Classes
   */

  const propertyClassSelectElement = document.querySelector(
    '#filter--propertyClass'
  ) as HTMLSelectElement

  function renderPropertyClasses(): void {
    const areaPercentages = taxData.percentages[
      areaSelectElement.value
    ] as AreaTaxPercentages

    propertyClassSelectElement.innerHTML = ''

    for (const propertyClass of Object.keys(areaPercentages)) {
      const optionElement = document.createElement('option')
      optionElement.value = propertyClass
      optionElement.textContent = propertyClass
      propertyClassSelectElement.append(optionElement)
    }

    renderPercentages()
  }

  /*
   * Data Table
   */

  const assessmentValueElement = document.querySelector(
    '#filter--assessmentValue'
  ) as HTMLInputElement

  assessmentValueElement.addEventListener('change', renderPercentages)

  const resultsContainerElement = document.querySelector(
    '#resultsContainer'
  ) as HTMLElement

  function renderPercentages(): void {
    const taxPercentages = taxData.percentages[areaSelectElement.value][
      propertyClassSelectElement.value
    ] as TaxPercentages

    if (assessmentValueElement.value === '') {
      resultsContainerElement.innerHTML = `<div class="message is-warning">
        <p class="message-body has-text-centered">
          Enter an assessment value to get started.
        </p>
        </div>`

      return
    }

    const assessmentValue = assessmentValueElement.valueAsNumber
    const taxesOwed = Math.round(assessmentValue * taxPercentages.taxRate)

    let taxesRemaining = taxesOwed

    // eslint-disable-next-line no-unsanitized/property
    resultsContainerElement.innerHTML = /* html */ `
      <div class="message is-info">
        <p class="message-body has-text-centered">
          Based on an assessment value of <strong>$${assessmentValue}</strong>,<br />
          the taxes owed for this property rounded to the nearest dollar would be:<br />
          <span class="is-size-2">$${taxesOwed}</span>
        </p>
      </div>
      <table class="table is-fullwidth is-striped is-hoverable">
        <thead>
          <tr>
            <th>Budget Area</th>
            <th class="has-text-right">Tax Amount</th>
            <th class="has-text-right">Percent of Taxes</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th class="has-text-right">$${taxesOwed}</th>
            <th class="has-text-right">100%</th>
          </tr>
        </tfoot>
      </table>
    `

    let rowElement: HTMLTableRowElement | undefined
    let taxAmount = 0

    for (const [budgetArea, percentage] of Object.entries(
      taxPercentages.budgetAreas
    )) {
      rowElement = document.createElement('tr')

      taxAmount = Math.round(taxesOwed * percentage)
      taxesRemaining -= taxAmount

      // eslint-disable-next-line no-unsanitized/property
      rowElement.innerHTML = /* html */ `
        <td>${budgetArea}</td>
        <td class="has-text-right">$${taxAmount}</td>
        <td class="has-text-right">${(percentage * 100).toFixed(2)}%</td>
      `

      resultsContainerElement.querySelector('tbody')?.append(rowElement)
    }

    if (taxesRemaining !== 0 && rowElement !== undefined) {
      // eslint-disable-next-line no-unsanitized/property
      rowElement.querySelectorAll('td').item(1).innerHTML =
        `$${taxAmount + taxesRemaining}`
    }
  }

  /*
   * Initialize
   */

  document.querySelector('form')?.addEventListener('submit', (event) => {
    event.preventDefault()
    renderAreas()
  })

  renderAreas()
})()
