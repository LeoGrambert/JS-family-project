import { getPictures } from '../utils/queries';
import { Picture } from '../classes/Picture';

const pictures = async () => {
  const pictures = await getPictures();
  const picturesDom = document.querySelector('#pictures');

  const createPicturesInDom = (pictures) =>
    pictures.map((picture, index) => createPictureCards(picture, index));

  const createPictureCards = (picture, index) => {
    const myPicture = new Picture(picture);
    const container = myPicture.createPictureCard();
    container.classList.add(`picture_${index}`);
    picturesDom.append(container);
  };

  createPicturesInDom(pictures);
};

export default pictures;
