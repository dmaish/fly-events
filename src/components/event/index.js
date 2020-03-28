import React, { Component } from 'react';

export default class Event extends Component {

    render() {
        const {singleEventIndex} = this.props;
        console.log('propsssss', this.props);
        return(
            <div>
                {singleEventIndex}
            </div>
        );
    }
}