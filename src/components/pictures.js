import { getPictures, getPicturesLength } from '../utils/queries';
import { Picture } from '../classes/Picture';
import { nbImgPerPage } from '../utils/constants';
import { getParam } from '../utils/helpers';
import {createPaginations} from './pagination';

const pictures = async () => {
  const nbImg = await getPicturesLength();
  const nbPages = Math.ceil(nbImg / nbImgPerPage);
  const currentPage = parseInt(getParam('p')) || 1;
  const pictures = await getPictures(currentPage === 1 ? 0 : nbImgPerPage * currentPage - 1);
  const picturesDom = document.querySelector('#pictures');

  const createPicturesInDom = () =>
    pictures.map((picture, index) => createPictureCards(picture, index));

  const createPictureCards = (picture, index) => {
    const myPicture = new Picture(picture);
    const container = myPicture.createPictureCard();
    container.classList.add(`picture_${index}`);
    picturesDom.append(container);
  };

  createPicturesInDom();
  createPaginations(nbPages, currentPage);
};

export default pictures;
