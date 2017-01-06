/* @flow */
import seasons from './seasons.js'

const randomInArray = array => array[~~(Math.random() * array.length)]
const seasonContainer = document.getElementById('season')
const episodeContainer = document.getElementById('episode')
const titleContainer = document.getElementById('title')

function selectEpisode (params) {
  const season = randomInArray(seasons)
  const episode = randomInArray(season.episodes)

  seasonContainer.innerText = '' + (season.number + 1)
  episodeContainer.innerText = '' + (episode.number + 1)
  titleContainer.innerText = episode.title
}

selectEpisode()
