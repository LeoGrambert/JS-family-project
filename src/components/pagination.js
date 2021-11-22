import { createGenericElement, displayElt } from '../utils/helpers';

//todo display ... if too many pages

const createPaginations = (nbPages, currentPage) => {
  const paginationDom = document.querySelector('#pagination');
  for (let i = 0; i < nbPages; i++) {
    if (currentPage === 1) {
      displayElt('#previous', 'none');
    } else {
      document.querySelector('#previous').href = `?p=${i}`;
    }
    if (currentPage === nbPages) {
      displayElt('#next', 'none');
    } else {
      document.querySelector('#next').href = `?p=${i + 1}`;
    }
    const pagination = createGenericElement(
      'div',
      'w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full',
      i + 1
    );
    const link = createGenericElement('a', 'md:flex justify-center items-center', null, [
      { key: 'href', value: `?p=${i + 1}` },
    ]);
    link.append(pagination);
    paginationDom.append(link);
  }
};

export { createPaginations };