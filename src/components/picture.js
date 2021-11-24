import { getPicture } from '../utils/queries';
import { getParam } from '../utils/helpers';
import { Picture } from '../classes/Picture';

const picture = async () => {
  displayGoBack();
  const id = getParam('id');
  const pictures = await getPicture(id);
  const myPicture = new Picture(pictures[0]);
  hydratePicture(myPicture);
};

const hydratePicture = (myPicture) => {
  const pictureDom = document.querySelector("#picture");
  const container = myPicture.createPicturePage();
  pictureDom.append(container);
};

const displayGoBack = () => {
  const arrow = document.querySelector('#back');
  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
  })
}

export default picture;
