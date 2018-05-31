export const RECEIVE_SUBURBS = 'RECEIVE_SUBURBS';

export const RECIEVE_PROPERTIES = 'RECIEVE_PROPERTIES';
export const EDIT_PROPERTY = 'EDIT_PROPERTY';
export const EDIT_PROPERTY_CANCEL = 'EDIT_PROPERTY_CANCEL';
export const EDIT_PROPERTY_SAVE = 'EDIT_PROPERTY_SAVE';

export const UPDATE_PROPERTY_FIELD = "UPDATE_PROPERTY_FIELD";

export const REPLACE_PROPERTY = "REPLACE_PROPERTY";

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

export const editProperty = (propertyId) => {
    return {
        type:EDIT_PROPERTY,
        propertyId:propertyId
    }
}

export const editPropertyCancel = (propertyId) => {
    return {
        type:EDIT_PROPERTY_CANCEL,
        propertyId:propertyId
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