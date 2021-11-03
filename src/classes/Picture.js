import { createGenericElement } from "../utils/helpers";
import { strapiHost } from "../utils/constants";

export class Picture {
  constructor(picture) {
    this.id = picture.id;
    this.description = picture.description;
    this.image = `${strapiHost}${picture.image.url}`;
  }

  createPictureCard() {
    console.log(this.image)
    const container = createGenericElement('div', `w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col`);
    const link = createGenericElement('a', null, null, [{ key: 'href', value: `../pages/picture.html?id=${this.id}` }]);
    const img = createGenericElement('img', 'hover:grow hover:shadow-lg', null, [{ key: 'src', value: this.image }]);
    link.append(img);
    container.append(link);
    return container;
  }

  createPicturePage() {
    const container = createGenericElement('div', 'flex flex-col md:flex-row');
    const leftBlock = createGenericElement('div', 'w-full pr-3 pl-3 mt-1 md:w-3/5');
    const rightBlock = createGenericElement('div', 'w-full pr-3 pl-3 md:w-2/5 md:ml-8');
    const image = createGenericElement('img', null, null, [
      { key: 'src', value: this.image },
    ]);
    const description = createGenericElement('div', 'mt-4 mb-4', this.description);
    leftBlock.append(image);
    rightBlock.append(description);
    container.append(leftBlock, rightBlock);
    return container;
  }
}
