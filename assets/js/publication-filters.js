(() => {
  const filters = document.getElementById('publication-filters');
  const search = document.getElementById('publication-search');
  const type = document.getElementById('publication-type');
  const year = document.getElementById('publication-year');
  const status = document.getElementById('publication-status');
  const papers = Array.from(document.getElementById('publication-list').children, element => ({
    element,
    text: element.textContent.toLowerCase().replace(/\s+/g, ' '),
    types: element.dataset.types.split(' '),
    year: element.dataset.year,
  }));

  function filterPapers() {
    const query = search.value.trim().toLowerCase();
    const matching = papers.filter(paper =>
      (!type.value || paper.types.includes(type.value)) && paper.text.includes(query)
    );
    // Papers are rendered newest first, so the menu follows that same order.
    const availableYears = new Set(matching.map(paper => paper.year));
    const selectedYear = year.value;
    year.options.length = 1;
    for (const value of availableYears) {
      year.add(new Option(value, value));
    }
    year.value = availableYears.has(selectedYear) ? selectedYear : '';

    const visible = new Set(matching.filter(paper => !year.value || paper.year === year.value));
    for (const paper of papers) {
      paper.element.hidden = !visible.has(paper);
    }
    status.textContent = visible.size ? '' : 'No publications match these filters. Try another search or publication type.';
  }

  // The theme links to publication types using fragments such as /publication/#2.
  function readTypeFromUrl() {
    const hash = window.location.hash.slice(1);
    type.value = Array.from(type.options).some(option => option.value === hash) ? hash : '';
    filterPapers();
  }

  type.addEventListener('change', () => {
    const url = new URL(window.location.href);
    url.hash = type.value;
    window.history.pushState(null, '', url);
    filterPapers();
  });
  window.addEventListener('hashchange', readTypeFromUrl);
  search.addEventListener('input', filterPapers);
  year.addEventListener('change', filterPapers);
  readTypeFromUrl();
  filters.hidden = false;
})();
