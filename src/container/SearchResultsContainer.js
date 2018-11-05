import React from 'react';
import {searchSuburb, searchNext} from "../actions"
import { connect } from 'react-redux'
import SearchResultComponent from '../component/SearchResultComponent'
import { Button } from 'bloomer/lib/elements/Button';
import { Title } from 'bloomer/lib/elements/Title';

class SearchResultsContainer extends React.Component {

  handleMoreClick = e => {
    const { dispatch,next } = this.props
    dispatch(searchNext(next))
    console.log("More")
  }

  render() {
    let button = null;
    if (this.props.next) {
      button = <Button onClick={this.handleMoreClick} >More properties</Button>
    }
    
    return <div>
        <ul>
        {this.props.searchResults.map((result) => {
          return <SearchResultComponent property={result} />
        })}
        </ul>
        {button}
        <Title>Ignored properties</Title>
        <ul>
        {this.props.searchIgnored.map((result) => {
          return <SearchResultComponent property={result} />
        })}
        </ul>
      </div>
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(searchSuburb(this.props.suburbName))
  }
}

const mapStateToProps = state => {
  return {searchResults:state.search.searchResults,
    searchIgnored:state.search.searchIgnored,
    next:state.search.next}
}

export default connect(mapStateToProps)(SearchResultsContainer);

