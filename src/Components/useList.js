import { useState } from 'react';

export default (initialList = []) => {
    const [list, setList] = useState(initialList);

    function add(str) {
        setList([...list, str]);
    }

    function remove(index) {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]);
    }

    function update(index, newValue) {
        const updatedList = list.map((item, i) => (i === index ? newValue : item));
        setList(updatedList);
    }

    return {
        list,
        add,
        remove,
        update
    };
};
