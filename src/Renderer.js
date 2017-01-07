const setInnerText = value => element => {
  element.innerText = value + ''
}

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
    // Apply custom render methods
    for (const element in map) {
      if (map.hasOwnProperty(element)) {
        const fn = node => map[element](node, episode)
        const nodes = document.getElementsByClassName(element)
        Array.prototype.forEach.call(nodes, fn)
      }
    }

    for (const data in episode) {
      if (episode.hasOwnProperty(data)) {
        const value = episode[data]
        const elements = document.getElementsByClassName('data-' + data)
        Array.prototype.forEach.call(elements, setInnerText(value))
      }
    }
  }
}
