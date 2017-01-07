/**
 * Creates a render method.
 * Finds a dom node for each key.
 * Then executes the value, which is expected to be a function.
 *
 * @param {any} map
 * @returns
 */
export default function Renderer (map) {
  return (episode) => {
    for (const element in map) {
      if (map.hasOwnProperty(element)) {
        const fn = map[element]
        const dom = document.getElementById(element)
        const value = fn(episode, dom)

        // If the returned value is a string etc, replace the nodes innerText with the value.
        if (value !== undefined) {
          dom.innerText = value + ''
        }
      }
    }
  }
}
