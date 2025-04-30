let data = [];
// assume the data store array of {id: 1, title: "Test"}
export function get_items() {
    return data;
}
export function add_item(new_item) {
    // add item (if id does not exist)
    // return true if item is added successfully, false otherwise
    let findItem = data.find((item) => item.id === new_item.id);
    if (findItem) return false;
    data.push(new_item);
    return true;
}
export function update_item_title_by_id(id, new_title) {
    // update the title (if id exist)
    // return true if item is update successfully, false otherwise
    let findItem = data.find((item) => item.id === id);
    if (!findItem) return false;
    findItem.title = new_title;
    return true;
}
export function delete_item_by_id(id) {
    // delete the item (if id exist)
    // return true if item is deleted successfully, false otherwise
    let index = data.findIndex((item) => item.id === id);
    if (index === -1) return false;
    data.splice(index, 1);
    return true;
}
export function get_item_title_by_id(id) {
    // return the item title by id (if id exist)
    let findItem = data.find((item) => item.id === id);
    return findItem ? findItem.title : null;
}
