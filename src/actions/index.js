export const RECEIVE_SUBURBS = 'RECEIVE_SUBURBS';
export const RECIEVE_PROPERTIES = 'RECIEVE_PROPERTIES';

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

function receiveProperties(json) {
    return {
        type: RECIEVE_PROPERTIES,
        properties:json,
        recievedAt: Date.now()
    }
}

export const fetchSuburbs = () => dispatch => {
    return fetch(`http://localhost:7900/suburbs`)
      .then(response => response.json())
      .then(json => dispatch(receiveSuburbs(json)))
  }

export const fetchProperties = (suburb) => dispatch => {
    let url = 'http://localhost:7900/' + suburb + '/properties'
return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveProperties(json)))
}