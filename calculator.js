"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const taxData = window.exports.taxData;
    const budgetYearSelectElement = document.querySelector('#filter--budgetYear');
    budgetYearSelectElement.addEventListener('change', renderAreas);
    budgetYearSelectElement.innerHTML = `<option value="${taxData.taxYear}">${taxData.taxYear}</option>`;
    const areaSelectElement = document.querySelector('#filter--area');
    areaSelectElement.addEventListener('change', renderPropertyClasses);
    function renderAreas() {
        areaSelectElement.innerHTML = '';
        for (const area of Object.keys(taxData.percentages)) {
            const optionElement = document.createElement('option');
            optionElement.value = area;
            optionElement.textContent = area;
            areaSelectElement.append(optionElement);
        }
        renderPropertyClasses();
    }
    const proertyClassSelectElement = document.querySelector('#filter--propertyClass');
    function renderPropertyClasses() {
        const areaPercentages = taxData.percentages[areaSelectElement.value];
        proertyClassSelectElement.innerHTML = '';
        for (const propertyClass of Object.keys(areaPercentages)) {
            const optionElement = document.createElement('option');
            optionElement.value = propertyClass;
            optionElement.textContent = propertyClass;
            proertyClassSelectElement.append(optionElement);
        }
        renderPercentages();
    }
    const assessmentValueElement = document.querySelector('#filter--assessmentValue');
    assessmentValueElement.addEventListener('change', renderPercentages);
    const resultsContainerElement = document.querySelector('#resultsContainer');
    function renderPercentages() {
        const taxPercentages = taxData.percentages[areaSelectElement.value][proertyClassSelectElement.value];
        if (assessmentValueElement.value === '') {
            resultsContainerElement.innerHTML = `<div class="message is-warning">
        <p class="message-body has-text-centered">
          Enter an assessment value to get started.
        </p>
        </div>`;
            return;
        }
        const assessmentValue = assessmentValueElement.valueAsNumber;
        const taxesOwed = Math.round(assessmentValue * taxPercentages.taxRate);
        let taxesRemaining = taxesOwed;
        resultsContainerElement.innerHTML = `<div class="message is-info">
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
      </table>`;
        let rowElement;
        let taxAmount;
        for (const [budgetArea, percentage] of Object.entries(taxPercentages.budgetAreas)) {
            rowElement = document.createElement('tr');
            taxAmount = Math.round(taxesOwed * percentage);
            taxesRemaining -= taxAmount;
            rowElement.innerHTML = `<td>${budgetArea}</td>
        <td class="has-text-right">$${taxAmount}</td>
        <td class="has-text-right">${(percentage * 100).toFixed(2)}%</td>`;
            resultsContainerElement.querySelector('tbody').append(rowElement);
        }
        if (taxesRemaining !== 0) {
            rowElement.querySelectorAll('td').item(1).innerHTML = `$${taxAmount + taxesRemaining}`;
        }
    }
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        renderAreas();
    });
    renderAreas();
})();
