import { useCounter } from "../hooks/useCounter";

export const Counter = () => {

    const { count, increaseBy } = useCounter();

    return (
        <>
            <h3 className="mb-5">
                Contador: <small>{count}</small>
            </h3>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increaseBy(+1)}>+1</button>
                &nbsp;
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increaseBy(-1)}>-1</button>
            </div>
        </>
    );
};
