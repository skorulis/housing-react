import React from 'react';
import SuburbComponent from "../component/SuburbComponent"

class AllSuburbsContainer extends React.Component {
  render() {
    return <ul>
        {this.props.suburbs.map((suburb) => {
          return <SuburbComponent suburb={suburb} />
        })}
        
      </ul>
  }
}

export default AllSuburbsContainer;

