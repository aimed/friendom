/* @flow */
import seasons from './seasons.js'
import Renderer from './Renderer.js'
import fetchEpisodeDetails from './api.js'

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
})

/**
 * Selects a random episode.
 */
function selectEpisode () {
  const selected = randomInArray(episodes)

  const episode = {
    season: selected.season,
    episode: selected.number,
    title: selected.title
  }

  // initially render availiable data
  render(episode)

  // render more data
  fetchEpisodeDetails(episode.episode, episode.season)
  .then(data => {
    const episodeExtended = Object.assign(episode, {
      summary: data.overview
    })
    render(episodeExtended)
  })
}

/**
 *
 * BOOT
 *
 */
window.addEventListener('load', function (event) {
  selectEpisode()
})
