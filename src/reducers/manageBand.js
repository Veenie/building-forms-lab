export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { band: state.band.concat(action.payload.text) };

    default:
      return state;
    }
}
