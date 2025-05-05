import { Link, Outlet } from "react-router-dom";
import { ITEMS } from "../data/itemData";
export default function Items() {
  return (
    <>
      <main>
        {" "}
        <h2>Items Page</h2>
        {/* <Link to="/">Back</Link> */}
      </main>
      {/* <ul>
        <Link to="/items/item-1">
          <li>Item-1</li>
        </Link>
        <Link to="/items/item-2">
          <li>Item-2</li>
        </Link>
        <Link to="/items/item-3">
          <li>Item-3</li>
        </Link>
      </ul> */}
      <ul>
        {ITEMS.map((items) => (
          <Link to={`/items/${items.id}`}>
            <li>{items.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
