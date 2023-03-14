/**
 * Build tree from array of objects
 *
 * @param {*} items
 * @param {*} id
 * @param {*} link // property to used for tree
 * @returns array of objects
 */
export const listToTree = (items, id = null, link = "parent_id") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: listToTree(items, item.id) }));
