/**
 *
 * @param {string} text
 * @param {T} instance
 * @implNote The instance passed is mutated and is also returned for chaining
 * @returns {T}
 */

export default function fromJSON(text, instance) {
    const raw = JSON.parse(text);
    if (raw) {
        for (const k in instance) {
            instance[k] = raw[k];
        }
    }
    return instance;
}
