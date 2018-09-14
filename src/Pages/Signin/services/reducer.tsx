import { SIGNIN, SIGNOUT } from './action';

const defaultState = {
  error: null,
  loading: false,
  loggedIn: false,
  user: null,
};

export const authReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SIGNIN.REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case SIGNIN.SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        loggedIn: true,
        user: action.payload.user
      }
    }

    case SIGNIN.ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    }

    case SIGNOUT: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: null,
      }
    }

    default:
      return state;
  }
};
