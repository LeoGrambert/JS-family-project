import pictures from './components/pictures';
import picture from './components/picture';

const main = async () => {
  switch (window.location.pathname) {
    case '/':
      await pictures();
      break;
    case '/pages/picture.html':
      await picture();
      break;
    default:
      await pictures();
  }
};

main();
