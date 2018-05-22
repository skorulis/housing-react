import React from 'react';

class SuburbComponent extends React.Component {
  render() {
    return <div>
        <h1>{this.props.suburb.name}</h1>
        <h2>{this.props.suburb.count} Properties</h2>
      </div>
  }
}

export default SuburbComponent;

