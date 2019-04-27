const baseUrl = 'https://demo2718530.mockable.io';

export const get = async url => {
  return fetch(`${baseUrl}${url}`).then(item => item.json());
};
