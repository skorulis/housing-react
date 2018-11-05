export const RECEIVE_SUBURBS = 'RECEIVE_SUBURBS';

export const REQUEST_PROPERTIES = "REQUEST_PROPERTIES";
export const RECIEVE_PROPERTIES = 'RECIEVE_PROPERTIES';
export const EDIT_PROPERTY_SAVE = 'EDIT_PROPERTY_SAVE';

export const UPDATE_PROPERTY_FIELD = "UPDATE_PROPERTY_FIELD";
export const UPDATE_FEATURE = "UPDATE_FEATURE";

export const REPLACE_PROPERTY = "REPLACE_PROPERTY";
export const RECEIVE_RELATED_PROPERTIES = "RECEIVE_RELATED_PROPERTIES"

export const RECIEVE_INSPECTIONS = "RECIEVE_INSPECTIONS";
export const RECIEVE_FEATURES = "RECIEVE_FEATURES";

export const UPDATE_SEARCH_ID = "UPDATE_SEARCH_ID";

export const RECEIVE_SEARCH = "RECEIVE_SEARCH"
export const CLEAR_SEARCH = "CLEAR_SEARCH"

function receiveSuburbs(json) {
    return {
        type: RECEIVE_SUBURBS,
        suburbs: json,
        recievedAt: Date.now()
    }
}

function receiveSearchResults(json) {
    return {
        type: RECEIVE_SEARCH,
        results: json,
        recievedAt: Date.now()
    }
}

function clearSearch() {
    return {
        type: CLEAR_SEARCH,
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

function requestProperties() {
    return {
        type:REQUEST_PROPERTIES
    }
}

function receiveInspections(json) {
    return {
        type: RECIEVE_INSPECTIONS,
        result:json,
        recievedAt: Date.now()
    }
}

function receiveList(json,action) {
    return {
        type: action,
        items:json,
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

export const updateFeature = (propertyId,featureName,featureValue) => {
    return {
        type:UPDATE_FEATURE,
        propertyId:propertyId,
        featureName:featureName,
        featureValue:featureValue
    }
}

export const updateSearchField = (propertyId) => {
    return {
        type:UPDATE_SEARCH_ID,
        propertyId:propertyId
    }
}

export const replaceProperty = (property) => {
    return {
        type:REPLACE_PROPERTY,
        property:property
    }
}

export const receivedRelatedProperties = (json) => {
    console.log("Got related")
    return {
        type:RECEIVE_RELATED_PROPERTIES,
        related:json.properties
    }
}

export const fetchSuburbs = () => dispatch => {
    let url = window.location.origin.replace("3000","7900") + "/suburbs"
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveSuburbs(json)))
}

export const searchSuburb = (suburb) => dispatch => {
    let url = window.location.origin.replace("3000","7900") + "/search/" + suburb
    dispatch(clearSearch())
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchResults(json)))
}

export const searchNext = (path) => dispatch => {
    console.log(path)
    let url = window.location.origin.replace("3000","7900") + path
    console.log(url)
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchResults(json)))
}

export const fetchInspections = (suburb) => dispatch => {
    console.log("fetch")
    let url = window.location.origin.replace("3000","7900") + "/inspections"
    if (suburb) {
      url = url + "/" + suburb;
    }
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveInspections(json)))
}

export const fetchFeatures = () => dispatch => {
    let url = window.location.origin.replace("3000","7900") + "/features"
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveList(json,RECIEVE_FEATURES)))
}

export const fetchSingleProperty = (suburb,propertyId) => dispatch => {
    dispatch(requestProperties())
    let url = window.location.origin.replace("3000","7900") + "/property/" + suburb + "/" + propertyId
return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveProperties([json])))
}

export const fetchProperties = (suburb) => dispatch => {
    dispatch(requestProperties())
    let url = window.location.origin.replace("3000","7900") + "/" + suburb + '/properties'
return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveProperties(json)))
}

export const fetchAllProperties = (filter) => dispatch => {
    dispatch(requestProperties())
    let url = window.location.origin.replace("3000","7900") + '/allProperties'
    let params;
    if (filter) {
        params = {
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(filter)
        }
    } else {
        params = {method:"get"}
    }

return fetch(url,params)
    .then(response => response.json())
    .then(json => dispatch(receiveProperties(json)))
}

export const refreshProperty = (property) => dispatch => {
    let url = property.links.update;
return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(replaceProperty(json)))
}

export const lookupProperty = (propertyId) => dispatch => {
    dispatch(requestProperties())
    let url = window.location.origin.replace("3000","7900") + '/property/' + propertyId + "/update"
return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveProperties([json])))
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

export const fetchRelatedProperties = (address,currentId) => dispatch => {
    let url = window.location.origin.replace("3000","7900") + "/property/query?address=" + address + "&excluding=" + currentId;
    return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receivedRelatedProperties(json)))
}