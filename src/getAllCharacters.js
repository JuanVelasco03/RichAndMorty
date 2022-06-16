// import axios from "axios";

// export const getAllCharacters = async (setCharacters, page) => {
//   const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
//   setCharacters(res.data.results);
// };

export async function getAllCharacters(page = 1) {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    return data;
  }




export const searchCharacter = async (name) => {
  const response = await fetch (`https://rickandmortyapi.com/api/character/?name=${name}`);
  const data = await response.json();
  return data;
}
