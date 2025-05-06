import { useSelector, useDispatch } from 'react-redux';
//use Selector lets you read state from the Redux store
//use Dispatch lets you send actions to the Redux store
import { type RootState, type AppDispatch } from '../app/store';
//RootState tells TypeScript what Redux state looks like
//AppDisptach says what actions are valid to dispatch
import { increment, decrement, reset } from '../features/counter/counterSlice';
//these are my action creators
//so if you call incremenet it returns an action like {type: 'counter/increment' }

const Counter = () => {
    //grabbing the value
    const count = useSelector((state: RootState) => state.counter.value);
    //dispatch function so you can send actions 
    const dispatch = useDispatch<AppDispatch>();


  return (
    <div>
      <h2> Counter : {count} </h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick ={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
//overall this component is reding redux state using use Selector
//updating redux state using useDispatch + createSlice actions
//completely decoupling from local state - all logic lives in Redux