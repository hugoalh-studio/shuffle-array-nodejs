import { randomInt } from "node:crypto";
/**
 * Shuffle the array's indexes.
 * @template {unknown} T
 * @param {T[]} item Array that need to shuffle indexes.
 * @returns {T[]} An indexes shuffled array.
 * @example
 * const chain = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];
 *
 * shuffleArray(chain);
 * //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]
 *
 * shuffleArray(chain);
 * //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
 */
export function shuffleArray(item) {
    const itemClone = [...item];
    const result = [];
    while (itemClone.length > 0) {
        const index = randomInt(0, itemClone.length);
        result.push(itemClone[index]);
        itemClone.splice(index, 1);
    }
    return result;
}
export default shuffleArray;
