import React from 'react';
import SuburbComponent from "../component/SuburbComponent"

class AllSuburbsContainer extends React.Component {
  render() {
    return <ul key="all-suburbs">
        {this.props.suburbs.map((suburb) => {
          return <SuburbComponent key={suburb.name} suburb={suburb} />
        })}
        
      </ul>
  }
}

export default AllSuburbsContainer;

