export function playlistReducer(state, { type, payload }) {
  switch (type) {
    case "SET_INITIAL": {
      state = payload.data;
      return state;
    }
    case "CREATE_PLAYLIST": {
      if (state[payload.name]) {
        return state;
      }
      const newState = { ...state };
      newState[payload.name] = [];
      return newState;
    }
    case "DELETE_PLAYLIST": {
      if (!state[payload.name]) {
        return state;
      }
      const newState = { ...state };
      delete newState[payload.name];
      return newState;
    }
    case "ADD_TO_PLAYLIST": {
      // payload.id of video to add to state
      if (state[payload.name].includes(payload.id)) {
        return state;
      }
      const newState = { ...state };
      newState[payload.name].push(payload.id);
      return newState;
    }
    case "DELETE_FROM_PLAYLIST": {
      if (!state[payload.name].includes(payload.id)) {
        return state;
      }
      const newState = { ...state };
      newState[payload.name] = newState[payload.name].filter(
        (el) => el !== payload.id
      );
      return newState;
    }
    default: {
      return state;
    }
  }
}
