import actionsType from '../actionsType';

export function create(user) {
  return {
    type: actionsType.user.create,
    payload: {
      user,
    },
  };
}

export function replace(user) {
  return {
    type: actionsType.user.replace,
    payload: {
      user,
    },
  };
}

export function destroy() {
  return {
    type: actionsType.user.destroy,
  };
}
