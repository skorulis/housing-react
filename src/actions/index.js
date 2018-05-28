export const RECEIVE_SUBURBS = 'RECEIVE_SUBURBS';

function receiveSuburbs(json) {
    let suburbs = [];
    for (let key in json) {
        suburbs.push(json[key])
    }

    return {
        type: RECEIVE_SUBURBS,
        suburbs: suburbs,
        recievedAt: Date.now()
    }
}

export const fetchSuburbs = () => dispatch => {
    return fetch(`http://localhost:7900/suburbs`)
      .then(response => response.json())
      .then(json => dispatch(receiveSuburbs(json)))
  }