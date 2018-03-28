import axios from 'axios';

//Action Types
const GET_IMAGE = 'GET_IMAGE';

// Initial State
var images = []

//Action Creators
export function getImage (images) {
	const action = {type: GET_IMAGE, images}
	return action;
}

//Thunk Creators
export function fetchImage (pic) {

  return function thunk(dispatch) {
    return axios.get(`http://api.giphy.com/v1/gifs/search?q=${pic}&api_key=4zqMjqn9oECYbu2ZwHgseweLyahB2IxR&limit=5`)
    .then(res => {
        return res.data
      })
      .then(images => {
        const action = getImage(images);
        dispatch(action);
      })
      .catch(error => {
        console.log(error.response)
      });
  };
}

//Reducers
export default function reducers(state = images, action) {
	switch (action.type) {
		case GET_IMAGE:
			return action.images;
		default:
			return state;
	}
}