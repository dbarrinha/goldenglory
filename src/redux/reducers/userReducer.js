import actionType from '../actionsType';

const initialValue = {
  logged: false,
  user: null
};

export default function session(state = initialValue, action) {
  switch (action.type) {
    case actionType.user.create:
      return {
        ...state,
        logged: true,
        user: action.payload.user,
      };

    case actionType.user.replace:
      return action.payload;

    case actionType.user.destroy:
      return initialValue;

    default:
      return state;
  }
}
