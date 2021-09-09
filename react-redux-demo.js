const redux = require("redux");

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const defaultState = {
  counter: 0,
};

const counterReducer = (state = defaultState, action) => {
  if (action.type === actions.INCREMENT) {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === actions.DECREMENT) {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: actions.INCREMENT });
store.dispatch({ type: actions.DECREMENT });
