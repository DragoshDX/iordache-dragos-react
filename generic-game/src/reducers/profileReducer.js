import { PROFILE_SET_STATS } from '../actions/types/profile';

const initialState = {
  stats: {
    gamesWon: 0,
    gamesLost: 0,
    gamesPlayed: 0,
  },
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_SET_STATS:
      return {
        ...state,
        stats: payload,
      };
    default:
      return state;
  }
};

export default profileReducer;