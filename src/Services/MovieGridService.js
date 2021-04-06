import { API_URL, API_KEY } from "../Config/config";

const urls = [
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=tentacles`,
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=zack%20snyders%20justice%20league`,

  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=100%20wolf`
];

export function fetchGrid() {
  return Promise.all(
    urls.map(items => {
      return fetch(items).then(response => response.json());
    })
  );
}
