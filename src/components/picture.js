import { getPicture } from '../utils/queries';
import { getParam } from '../utils/helpers';
import { Picture } from '../classes/Picture';

const picture = async () => {
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

export default picture;
