/* eslint-disable no-restricted-syntax */
const initialState = {};

export default (state = initialState, { type, payload }) => {
  const matches = /(.*)_(request|fail)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestType] = matches;

  if (requestType === 'fail') {
    return { ...state, [requestName]: payload };
  }

  const newState = {};

  for (const key in state) {
    if (key !== requestName) {
      newState[key] = state[key];
    }
  }

  return newState;
};
