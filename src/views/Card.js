import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="mb-4 shadow hover:shadow-md p-2 rounded flex lg:flex-col xl:flex-col flex-wrap">
        <div className="w-full bold text-xl text-gray-700 border-b-0 mb-0 mb-4 pb-1">{this.props.title}</div>
        <div className="flex lg:flex-col justify-between">
          <div className="w-full m-1 mb-4">
            {this.props.children}
          </div>
          <div className="w-full flex-col m-1">
            <div className="w-full bold text-gray-600 mb-4">Props:</div>
            <div className="text-gray-600 p-2 bg-gray-200 md:max-w-xl2">
              {JSON.stringify(this.props.props)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
