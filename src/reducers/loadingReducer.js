/* eslint-disable no-restricted-syntax */
const initialState = {};

export default (state = initialState, { type, payload }) => {
  const matches = /(.*)_(request|success|fail)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestType] = matches;

  if (requestType === 'request') {
    if (payload) {
      return { ...state, [`${requestName}_${payload.id}`]: true };
    }
    return { ...state, [requestName]: true };
  }

  const newState = {};

  for (const key in state) {
    if (payload && !Array.isArray(payload)) {
      if (key !== `${requestName}_${payload.id}`) {
        newState[key] = state[key];
      }
    } else if (key !== requestName) {
      newState[key] = state[key];
    }
  }

  return newState;
};
