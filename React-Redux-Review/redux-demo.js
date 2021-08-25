// Initializing, with default values
var initialState = [
  { name: "react", count: 0 },
  { name: "angular", count: 0 },
  { name: "vue", count: 0 },
];
​
// Updating (via a reducer)
// - One reducer per part of state (and it handles all cases)
// - Pure function (no side-effects or mutations)
// - Accepts oldState and an action object
function votesReducer(state = initialState, action) {
  // action: {type: "ADD_VOTE", choiceName: "react"}
  // [4]: Each sub reducer is going to perform necessary operations
  //      and return produced state
  switch (action.type) {
    case "ADD_VOTE":
      return state.map((vote) => {
        if (action.choiceName === vote.name)
          return { name: vote.name, count: vote.count + 1 };
        else return vote;
      });
    case "REMOVE_VOTE":
      return state.map((vote) => {
        if (action.choiceName === vote.name)
          return { name: vote.name, count: vote.count - 1 };
        else return vote;
      });
    case "RESET_VOTE":
      return state.map((vote) => {
        if (action.choiceName === vote.name)
          return { name: vote.name, count: 0 };
        else return vote;
      });
    default:
      return state;
  }
}
​
// Centralizing
// [2]: triggered action is fed to root reducer
var rootReducer = Redux.combineReducers({
  // "partName": partReducer
  // [3]: root reducer passes action to all sub-reducers
  votes: votesReducer,
})
// [5]: the produced state is integrated into the store itself
var store = Redux.createStore(rootReducer)
​
// Subscribing / Listening (Reacting to state change)
// [6]: Whenever the store is updated, the callback is run
store.subscribe(() => {
  // Consuming
  // [7]: any work to do with new state can happen in the callback
  console.log("Store was updated!", store.getState())
})
​
// Action creator / a.k.a. "formatter"
function addVote(choiceName) {
  return { type: "ADD_VOTE", choiceName: choiceName };
}
​
// Triggering of updates
// [1]: trigger some action, based on user interaction
store.dispatch(addVote("react"));
store.dispatch(addVote("angular"));
store.dispatch(addVote("vue" ));
store.dispatch(addVote("react" ));
store.dispatch({ type: "REMOVE_VOTE", choiceName: "vue" });
store.dispatch({ type: "RESET_VOTE", choiceName: "angular" });
store.dispatch(addVote("angular"));
​
// Every dispatch is going to send the action to every reducer, every time