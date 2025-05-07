// import { useState } from "react";
// import Product from "./Product";

// export default function ProductsList() {
//     const [data, setData] = useState([
//         { id: 1, name: "Apple", price: 1, inStock: true },
//         { id: 2, name: "Banana", price: 1, inStock: false },
//         { id: 3, name: "Cherry", price: 2, inStock: true },
//     ])
//     const handleToggle = (id) => {
//         const item = data.find(p => p.id === id)
//         item.inStock = !item.inStock
//         setData([...data])
//     }
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>name</th>
//                     <th>price</th>
//                     <th>inStock</th>
//                     <th>toggle inStock</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((d) => (
//                     <Product key={d.id} product={d} toggleHandler={() => handleToggle(d.id)} />
//                 ))}
//             </tbody>
//         </table>
//     );
// }


import { useReducer } from "react";
import Product from "./Product";

const initialState = [
    { id: 1, name: "Apple", price: 1, inStock: true },
    { id: 2, name: "Banana", price: 1, inStock: false },
    { id: 3, name: "Cherry", price: 2, inStock: true },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_IN_STOCK":
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, inStock: !item.inStock }
                    : item
            );
        default:
            return state;
    }
};

export default function ProductsList() {
    const [data, dispatch] = useReducer(reducer, initialState);

    const handleToggle = (id) => {
        dispatch({ type: "TOGGLE_IN_STOCK", payload: id });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>inStock</th>
                    <th>toggle inStock</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d) => (
                    <Product key={d.id} product={d} toggleHandler={() => handleToggle(d.id)} />
                ))}
            </tbody>
        </table>
    );
}
