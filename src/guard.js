
/*
 Default behaviour is to restrict access to only logged in users
*/

const testLoggedIn = (state, wantLoggedIn) => {
  const isLoggedIn = state.cognito.user !== null;
  if (isLoggedIn && wantLoggedIn) {
    return true;
  }
  if (!isLoggedIn && !wantLoggedIn) {
    return true;
  }
  return false;
};

const permitted = (state, expr) =>
  new Promise((resolve) => {
    if (expr.loggedIn !== undefined) {
      resolve(testLoggedIn(state, expr.loggedIn));
    } else {
      resolve(testLoggedIn(state, true));
    }
  });

const guard = (store, forbiddenUrl, expr = {}, routeState, replace, callback) => {
  const state = store.getState();
  let dest = forbiddenUrl;

  if (expr.forbiddenUrl !== undefined) {
    dest = expr.forbiddenUrl;
  }
  permitted(state, expr).then((allow) => {
    if (!allow) {
      replace(dest);
    }
    callback();
  });
};

/**
 * creates a guard function you can use in <Route> tags
 * @param {object} store - the redux store
 * @param {string} forbiddenUrl - the default url to navigate to if forbidden
 * @returns {function} - a function that can be provided to onEnter
*/
const createGuard = (store, forbiddenUrl) => expr => (state, replace, callback) =>
  guard(store, forbiddenUrl, expr, state, replace, callback);


export { createGuard };
