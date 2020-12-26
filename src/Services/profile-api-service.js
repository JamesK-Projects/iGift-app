import config from '../config'
import TokenService from '../services/token-service'

const ProfileApiService = {
  getProfiles() {
    return fetch(`${config.API_ENDPOINT}/api/profiles`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getProfile(profileId) {
    return fetch(`${config.API_ENDPOINT}/api/profiles/${profileId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getProfileWishlists(profileId) {
    return fetch(`${config.API_ENDPOINT}/api/profiles/${profileId}/wishlists`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postWishlist(profileId, text) {
    return fetch(`${config.API_ENDPOINT}/wishlists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        profile_id: profileId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ProfileApiService