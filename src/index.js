/* @flow */
import seasons from './seasons.js'

/**
 * All episodes.
 * Flatten the array to have equal chances for each episode.
 */
const episodes = seasons.map(season => season.episodes).reduce((p, c) => [...p, ...c], [])

/**
 * Selects a random element within the array.
 */
const randomInArray = array => array[~~(Math.random() * array.length - 1)]

/**
 * The render method used to render information about the episode.
 */
const render = Renderer({
  season: ({ season }) => season,
  episode: ({ number }) => number,
  title: ({ title }) => title
})

/**
 * Selects a random episode.
 */
function selectEpisode () {
  const episode = randomInArray(episodes)
  render(episode)
}

/**
 * Creates a render method.
 * Finds a dom node for each key.
 * Then executes the value, which is expected to be a function.
 *
 * @param {any} map
 * @returns
 */
function Renderer (map) {
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

/**
 *
 * BOOT
 *
 */
selectEpisode()
