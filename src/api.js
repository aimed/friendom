/* global TMDB_API_KEY fetch */
import 'whatwg-fetch'

const BASE = 'https://api.themoviedb.org'
const VERSION = '3'
const TYPE = 'tv'
const SHOW_ID = '1668'
const LANG = 'en-US'

/**
 * Fetches details about a given episode
 *
 * @export
 * @param {string | number} episode The episode within the season
 * @param {string | number} season The season
 * @returns {Promise<any>}
 */
export default function fetchEpisode (episode, season) {
  const url = [BASE, VERSION, TYPE, SHOW_ID, 'season', season, 'episode', episode].join('/')
  const query = `?api_key=${TMDB_API_KEY}&language=${LANG}`
  return fetch(url + query).then(response => response.json())
}
