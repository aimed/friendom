/* @flow */

/**
 * The key to use for the localStorage
 */
const KEY = 'viewed'

/**
 * Wheather or not the browser supports localStorage
 */
const supporstLocalStorage = !!window.localStorage

/**
 * Gets the list of all viewed episodes
 *
 * @export
 * @returns
 */
export function getEpisodesViewed () {
  const stored = supporstLocalStorage && window.localStorage.getItem(KEY)
  return stored ? JSON.parse(stored) : []
}

/**
 * Adds the given episode to the list of episodes viewed
 *
 * @export
 * @param {any} season
 * @param {any} episode
 */
export function addEpisodeViewed (season, episode) {
  const episodes = getEpisodesViewed()
  episodes.push([season, episode])
  window.localStorage.setItem(KEY, JSON.stringify(episodes))
}

/**
 * Resets all episodes viewed
 *
 * @export
 */
export function resetEpisodesViewed () {
  supporstLocalStorage && window.localStorage.setItem(KEY, [])
}

/**
 * Gets a handler that can be invoked when using .filter() on an list of episodes to return only
 * those not viewed recently.
 *
 * @export
 * @returns
 */
export function episodesViewedFilter () {
  const episodes = getEpisodesViewed()

  return (episodeToCheck) => {
    for (const data in episodes) {
      if (episodes.hasOwnProperty(data)) {
        const [s, e] = episodes[data]
        if (episodeToCheck.number === e && episodeToCheck.season === s) {
          // Remove the episode from the array
          episodes.splice(data, 1)
          return false
        }
      }
    }
    return true
  }
}

