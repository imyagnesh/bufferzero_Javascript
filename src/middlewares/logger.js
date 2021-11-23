const logger = (store) => (next) => (action) => {
  console.log('action', action);
  if (action.type === 'fail') {
  }
  // API CALL
  // logg on server
  next(action);
};

export default logger;
