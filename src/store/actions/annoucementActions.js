import axios from 'axios';
export const GET_ANNOUNCEMENTS = 'GET_ANNOUNCEMENTS';
export const GOT_ANNOUNCEMENTS = 'GOT_ANNOUNCEMENTS';

export const loadAnnouncements = () => {
  return dispatch => {
    dispatch({ type: GET_ANNOUNCEMENTS });
    axios
      .get('https://dev.requiemapp.com/public/memorial/random')
      .then(({ data }) => {
        dispatch({ type: GOT_ANNOUNCEMENTS, payload: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
