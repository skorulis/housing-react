import React from 'react';
import SuburbComponent from "../component/SuburbComponent"
import {fetchSuburbs} from "../actions"
import { connect } from 'react-redux'

class SearchResultsContainer extends React.Component {
  render() {
    return <p>Search results would go here</p>
  }

  componentDidMount() {
    //const { dispatch } = this.props
    //dispatch(fetchSuburbs())
  }
}

const mapStateToProps = state => {
  return {suburbs:state.suburbs.suburbs}
}

export default connect(mapStateToProps)(SearchResultsContainer);

