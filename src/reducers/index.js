export default function app(state = {}, action) {
  switch (action.type) {
    case 'FETCH_TIMELINE':
      return { ...state, tweets: action.payload };
    case 'FETCH_FOLLOWERS':
      return { ...state, followers: action.payload };
    case 'FETCH_FOLLOWING':
      return { ...state, following: action.payload };
    default:
      return state
  }
}
