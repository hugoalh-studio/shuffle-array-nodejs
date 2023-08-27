import { randomInt } from "node:crypto";
/**
 * Shuffle the array's indexes.
 * @template {unknown} T
 * @param {T[]} item Array that need to shuffle indexes.
 * @returns {T[]} An indexes shuffled array.
 */
export default function shuffleArray(item) {
    if (!Array.isArray(item)) {
        throw new TypeError(`Argument \`item\` must be a unknown[]!`);
    }
    let itemClone = [...item];
    let result = [];
    while (itemClone.length > 1) {
        let index = randomInt(0, itemClone.length);
        result.push(itemClone[index]);
        itemClone.splice(index, 1);
    }
    result.push(itemClone[0]);
    return result;
}
