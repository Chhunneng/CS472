export default function Product({ product, toggleHandler }) {
    return (
        <tr>
            <td style={{ color: product.inStock ? "green" : "red" }}>
                {product.name}
            </td>
            <td>{product.price}</td>
            <td>{product.inStock.toString()}</td>
            <td>
                <button onClick={toggleHandler}>change</button>
            </td>
        </tr>
    );
}
