import axios from "axios";

export const getAllCharacters = (page=1) => {
  return axios
.get(`https://rickandmortyapi.com/api/character?page=${page}`)
.then((response) => {
  const {data} = response;
  return data.results;
});
};
