let test = {
  this: 'what a test'
}

export default (state = test, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
