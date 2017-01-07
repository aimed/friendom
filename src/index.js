/* @flow */
import seasons from './seasons.js'
import Renderer from './Renderer.js'

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
 *
 * BOOT
 *
 */
selectEpisode()
