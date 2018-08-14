import _ from 'lodash';

const isValidDebounce = debounce => debounce === true || debounce > 0;

const DEFAULT_DEBOUNCE = 1000;

const AsyncThunk  = (callback = null, debounce = true) => {

  let unsolvedPromises = [];

  const resolveOldPromises = () => {
    unsolvedPromises.forEach(r => typeof r === 'function' ? r() : null);
    unsolvedPromises = [];
  };

  const debounceTime = debounce === true ?
    DEFAULT_DEBOUNCE :
    debounce > 0 ? debounce : 0;

  const debouncedCallback = _.debounce(cb => cb(), debounceTime);

  const addPromise = resolve => unsolvedPromises.push(resolve);

  return (...args) => (dispatch, getState) => new Promise((resolve, reject) => {

    addPromise(resolve);

    const thunk = () => {
      const prom = callback(...args, {dispatch, getState});
      if (prom) {
        prom
          .then(() => resolve())
          .catch(() => reject())
          .then(resolveOldPromises);
      }
      else {
        throw new Error('callback must return a promise');
      }
    };

    return isValidDebounce(debounce) ?
      debouncedCallback( () => thunk())
      :
      thunk();
  });
};

export default AsyncThunk;

