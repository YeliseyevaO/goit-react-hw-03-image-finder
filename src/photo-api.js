const fetchPhoto = ({ photoName = "", currentPage = 1 }) => {
  return fetch(
    `https://pixabay.com/api/?q=${photoName}&page=${currentPage}&key=23352968-b8b048e55839ee6b2f6a0c2b8&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.hits;
    });
};
export { fetchPhoto };
