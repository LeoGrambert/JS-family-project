import notify from './toast';
import { strapiHost, strapiToken } from './constants';

const getPictures = async (id = null) => {
  try {
    const response = await fetch(`${strapiHost}/images${id ? `?id=${id}` : ''}`, {
      headers: {
        Authorization:
          `Bearer ${strapiToken}`,
      },
    });
    if (!response.ok) return displayError(response.statusText, response.status);
    return response.json();
  } catch (err) {
    displayError(err.message);
  }
};

const displayError = (message, code = null) => notify(`${code && code} ${message}`, 'danger');

export { getPictures };
