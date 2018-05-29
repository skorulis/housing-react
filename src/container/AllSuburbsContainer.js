import React from 'react';
import SuburbComponent from "../component/SuburbComponent"
import {fetchSuburbs} from "../actions"
import { connect } from 'react-redux'

class AllSuburbsContainer extends React.Component {
  render() {
    return <ul key="all-suburbs">
        {this.props.suburbs.map((suburb) => {
          return <SuburbComponent key={suburb.name} suburb={suburb} />
        })}
        
      </ul>
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSuburbs())
  }
}

const mapStateToProps = state => {
  return {suburbs:state.suburbs.suburbs}
}

export default connect(mapStateToProps)(AllSuburbsContainer);

