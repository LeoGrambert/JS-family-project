import notify from './toast';
import { nbImgPerPage, strapiHost, strapiToken } from './constants';

const getPictures = async (from = 0) => {
  try {
    const response = await fetch(`${strapiHost}/images?_start=${from}&_limit=${nbImgPerPage}`, {
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

const getPicture = async (id = null) => {
  try {
    const response = await fetch(`${strapiHost}/images?id=${id}`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });
    if (!response.ok) return displayError(response.statusText, response.status);
    return response.json();
  } catch (err) {
    displayError(err.message);
  }
};

const getPicturesLength = async () => {
  try {
    const response = await fetch(`${strapiHost}/images/count`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });
    if (!response.ok) return displayError(response.statusText, response.status);
    return response.json();
  } catch (err) {
    displayError(err.message);
  }
}

const displayError = (message, code = null) => notify(`${code && code} ${message}`, 'danger');

export { getPictures, getPicture, getPicturesLength };
