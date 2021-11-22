const getParam = (param) => new URL(location.href).searchParams.get(param);

const createGenericElement = (type, classNa = null, text = null, attributes = []) => {
  const elt = document.createElement(type);
  if (classNa) elt.className = classNa;
  if (text) elt.innerHTML = text;
  if (attributes.length) attributes.map((attribute) => elt.setAttribute(attribute.key, attribute.value));
  return elt;
};

const convertDate = (iso) => {
  const date = new Date(iso);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

const displayElt = (elt, property) => document.querySelector(elt).style.display = property;

export { getParam, createGenericElement, convertDate, displayElt };
