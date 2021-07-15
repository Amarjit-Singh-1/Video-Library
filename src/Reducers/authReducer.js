export function authReducer(state, { type, payload }) {
  switch (type) {
    case "LOGIN_USER": {
      return { ...state, id: payload.id, username: payload.username };
    }
    case "LOGOUT_USER": {
      return { ...state, id: null, username: null };
    }
    default: {
      return state;
    }
  }
}
