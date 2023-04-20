const BASE_URL ="https://pixabay.com/api"
const API_KEY ="33608045-c8f013478b324b8af4cdd5d23"

export const getApi =(searchText)=>{
return fetch(`${BASE_URL}/?q=${searchText}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)

}

export default getApi;