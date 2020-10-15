function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}
//We have created a function aka reducer but everytime we call it, it only updates the count to be 1.
// When we console.logged it below, we get {count:1} 3 times.
console.log(changeState(state, action))
console.log(changeState(state, action))
console.log(changeState(state, action))
console.log(changeState(state, action))


// State is never really updated. It stays as count:0
console.log(state) 



// We created a functio that takes the action as the arugment.
function dispatch(action){
  state = changeState(state,action)
  //return state // This has been commented out since we are using thr render to show the state.count for us
  render()
}

// When we call this function 3 times, and we pass it the action object from line 11, it updates our count.
// So now everytime we call the function count gets updated.
//When we console.log this we get, {count:1},{count:2},{count:3}.
 console.log(dispatch(action))
 console.log(dispatch(action))
 console.log(dispatch(action))
 

// This function is simply adding our state to the index.html page to be shown on our webpage when we call render().
// Going back up to the dispatch function, instead of it just returning the state, we will call the render() in it.
//This will help update the state to the webapge everytime dispatch() is called.
   function render(){
    document.body.textContent = state.count

   }
   render();

   console.log(dispatch({type: "INCREASE_COUNT"}))