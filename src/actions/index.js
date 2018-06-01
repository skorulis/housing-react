export const RECEIVE_SUBURBS = 'RECEIVE_SUBURBS';

export const RECIEVE_PROPERTIES = 'RECIEVE_PROPERTIES';
export const RECIEVE_SINGLE_PROPERTY = 'RECIEVE_SINGLE_PROPERTY';
export const EDIT_PROPERTY_SAVE = 'EDIT_PROPERTY_SAVE';

export const UPDATE_PROPERTY_FIELD = "UPDATE_PROPERTY_FIELD";

export const REPLACE_PROPERTY = "REPLACE_PROPERTY";

export const RECIEVE_INSPECTIONS = "RECIEVE_INSPECTIONS";

function receiveSuburbs(json) {
    return {
        type: RECEIVE_SUBURBS,
        suburbs: json,
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

function receiveSingleProperty(json) {
    return {
        type: RECIEVE_SINGLE_PROPERTY,
        property:json,
        recievedAt: Date.now()
    }
}

function receiveInspections(json) {
    return {
        type: RECIEVE_INSPECTIONS,
        inspections:json,
        recievedAt: Date.now()
    }
}

export const updatePropertyField = (propertyId,field,value) => {
    return {
        type:UPDATE_PROPERTY_FIELD,
        propertyId:propertyId,
        field:field,
        value:value
    }
}

export const replaceProperty = (property) => {
    return {
        type:REPLACE_PROPERTY,
        property:property
    }
}

export const fetchSuburbs = () => dispatch => {
    return fetch(`http://localhost:7900/suburbs`)
      .then(response => response.json())
      .then(json => dispatch(receiveSuburbs(json)))
}

export const fetchInspections = () => dispatch => {
    return fetch(`http://localhost:7900/inspections`)
      .then(response => response.json())
      .then(json => dispatch(receiveInspections(json)))
}

export const fetchSingleProperty = (suburb,propertyId) => dispatch => {
    let url = "http://localhost:7900/property/" + suburb + "/" + propertyId
return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveSingleProperty(json)))
}

export const fetchProperties = (suburb) => dispatch => {
    let url = 'http://localhost:7900/' + suburb + '/properties'
return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveProperties(json)))
}

export const setPropertyFields = (property) => dispatch => {
    let url = property.links.setFields;
    return fetch(url,
        {method:'post',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(property)})
    .then(response => response.json())
    .then(json => dispatch(replaceProperty(json)))
}