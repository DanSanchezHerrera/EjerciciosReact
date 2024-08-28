import React, { useState } from 'react';

export default ({ initialValue = 0, render }) => {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return render({ count, increment, decrement });
}
