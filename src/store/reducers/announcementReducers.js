import {
  GET_ANNOUNCEMENTS,
  GOT_ANNOUNCEMENTS
} from '../actions/annoucementActions';

const initialState = {
  announcements: [],
  loading: true
};

export const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return { ...state, loading: true };
    case GOT_ANNOUNCEMENTS:
      return { ...state, loading: false, announcements: action.payload };
    default:
      return state;
  }
};
