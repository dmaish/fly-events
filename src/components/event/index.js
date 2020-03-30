import React, { Component } from 'react';

import './index.scss';
export default class Event extends Component {

    render() {

        const {singleEventIndex} = this.props;
        console.log('*++after func runs'.repeat(7), this.props);

        return(
            <div className="single-event-page">
                <div className="main-section">
                        <div className="link-section">
                            <div className="link-section">
                                <span>
                                <i class="fas fa-arrow-left"></i> 
                                Back</span>
                            </div>
                        </div>
                        <div className="carousel-section">
                        </div>
                        <div className="main-content-section">
                            <div className="event-title">
                                concours d'elegance
                            </div>
                            <div className="event-description">
                                
                            </div>
                            <div className="action-section">
                                <button>GET A TICKET</button>
                            </div>
                        </div>
                </div>
                <div className="details-section"></div>
            </div>
        );
    }
}