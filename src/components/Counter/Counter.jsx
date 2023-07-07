import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from '../../store/reducers/counterReducer'
import { getCounterValue } from "../../store/selectors/getCounterValue/getCounterValue";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCounterValue);

    return (
        <div>
            <div>
                <button
                    data-testid='increment-btn'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span
                    data-testid='counter-value'
                >
                    {count}
                </span>
                <button
                    data-testid='decrement-btn'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;