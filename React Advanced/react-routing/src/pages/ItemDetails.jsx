import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";
export default function ItemDetails() {
    //const param = useParams();
    const { itemId } = useParams();
    const item = ITEMS.find((item) => item.id == itemId);
    console.log(item);
    
    return (<>
        <main><h1 style={{ color: "white" }}>Item Details</h1></main>
        {/* <h2>{param.itemId}</h2> */}
        <h2>{item.title}</h2>
        <h2>{item.description }</h2>
    </>)
}