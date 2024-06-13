import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  console.log(count);

  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <button
        onClick={() => dispatch(incrementByValue(7))}
        className="px-4 py-2 rounded-lg text-2xl font-medium bg-purple-600 my-5"
      >
        Increment by 7
      </button>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 rounded-lg text-2xl font-medium bg-purple-600 my-5"
      >
        Increment
      </button>
      <div>
        <h1 className="text-4xl font-bold text-purple-600 text-center my-10">
          {count}
        </h1>
      </div>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 rounded-lg text-2xl font-medium bg-purple-600 my-5"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
