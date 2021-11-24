import { createGenericElement, displayElt } from '../utils/helpers';

const paginationDom = document.querySelector('#pagination');

const displayArrow = (condition, elt, param) => {
  if (condition) {
    displayElt(elt, 'none');
  } else {
    document.querySelector(elt).href = param;
  }
}

const displayArrows = (page, nbPages) => {
  displayArrow(page === 1, '#previous', `?p=1`);
  displayArrow(page === nbPages, '#next', `?p=${nbPages}`);
};

const createPageNumber = (number = null, page = null) => {
  console.log(number, page)
  const pagination = createGenericElement(
    'div',
    `w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full`,
    number ? number : '...'
  );
  if (!number) {
    return paginationDom.append(pagination);
  }
  const link = createGenericElement('a', `md:flex justify-center items-center ${
      number && page && number === page ? 'border-2 rounded' : ''
    }`, null, [
    { key: 'href', value: `?p=${number}` },
  ]);
  link.append(pagination);
  return paginationDom.append(link);
}

const computeNumbersToDisplay = (page, nbPages, displayedPages = 7, edges = 2) => {
  let pages = [];
  const aroundPage = displayedPages - edges - 1;
  const beforeAroundPagesCount = aroundPage / 2;
  const fromAroundPage = parseInt(page) - beforeAroundPagesCount;
  const toAroundPage = parseInt(page) + (aroundPage - beforeAroundPagesCount);
  pages = [...pages, createPageNumber(1, page)];
  if (nbPages > 1) {
    if (fromAroundPage > 2) pages = [...pages, createPageNumber()]
    for (let pageElement = Math.max(2, fromAroundPage); pageElement <= toAroundPage; pageElement++) {
      if (pageElement > nbPages) return pages;
      pages = [...pages, createPageNumber(pageElement, page)];
    }
    if (toAroundPage < nbPages - 1) pages = [...pages, createPageNumber()];
    if (nbPages > toAroundPage) pages = [...pages, createPageNumber(nbPages, page)];
  }
  return pages;
};

//todo square current page

const createPaginations = (nbPages, page) => {
  displayArrows(page, nbPages);
  computeNumbersToDisplay(page, nbPages);
};

export { createPaginations };