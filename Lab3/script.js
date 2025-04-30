import {
    get_items,
    add_item,
    update_item_title_by_id,
    delete_item_by_id,
    get_item_title_by_id,
} from "./data.js";

add_item({ id: 1, title: "Title1" });
add_item({ id: 2, title: "Title2" });
console.log("After add:", get_items());

update_item_title_by_id(1, "Updated Title");
console.log("After Update:", get_items());
delete_item_by_id(2);

console.log("After Delete:", get_items());
console.log("Get item id 1:", get_item_title_by_id(1));
console.log("Get item id 2:", get_item_title_by_id(2));
