const initialLocaleState = 'en';

const localeReducer = (state = initialLocaleState, { type, payload }) => {
  console.log('localeReducer');
  switch (type) {
    case 'change_locale':
      return payload;

    default:
      return state;
  }
};

export default localeReducer;
