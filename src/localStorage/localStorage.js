const storage = window.localStorage;

export const addDataToStorage = (data) => {
  storage.setItem('cart', JSON.stringify(data));
};

export const getDataFromStorage = () => {
  const result = storage.getItem('cart');

  if (result) {
    return JSON.parse(result);
  }

  return null;
};
