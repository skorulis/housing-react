import React from 'react';
import {searchSuburb} from "../actions"
import { connect } from 'react-redux'
import SearchResultComponent from '../component/SearchResultComponent'

class SearchResultsContainer extends React.Component {
  render() {
    return <ul>
      {this.props.searchResults.map((result) => {
          return <SearchResultComponent property={result} />
        })}
      </ul>
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(searchSuburb(this.props.suburbName))
  }
}

const mapStateToProps = state => {
  return {searchResults:state.search.searchResults}
}

export default connect(mapStateToProps)(SearchResultsContainer);

