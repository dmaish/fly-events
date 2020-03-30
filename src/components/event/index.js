import React, { Component } from 'react';

import './index.scss';
import eventsDummyData from './../events-dummy-data';

export default class Event extends Component {

    render() {

        const {singleEventIndex, stateHandler} = this.props;
        console.log('*++after func runs'.repeat(7), this.props);

        return(
            <div className="single-event-page">
                <div className="main-section">
                        <div className="link-section">
                            <div className="link-section">
                                <span className="link-span" onClick={() => stateHandler("allEvents")}>
                                    <i class="fas fa-arrow-left"></i> 
                                    Back
                                </span>
                            </div>
                        </div>
                        <div className="carousel-section"  style={{
                                backgroundImage: `url(${eventsDummyData[singleEventIndex].photoUrl})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="main-content-section">
                            <div className="event-title">
                                {eventsDummyData[singleEventIndex].title}
                            </div>
                            <div className="event-description">
                                {eventsDummyData[singleEventIndex].description}
                            </div>
                            <div className="action-section">
                                <button>GET A TICKET</button>
                            </div>
                        </div>
                </div>
                <div className="details-section">
                    <div className="details-article">
                        <div className="title-sect">
                            <h6>Event Details</h6>
                        </div>
                        <div className="details-sect">
                            <div className="detail-wrapper">
                                <div className="detail-type">owner:</div>
                                <div className="detail-value">{eventsDummyData[singleEventIndex].owner}</div>
                            </div>
                            <div className="detail-wrapper">
                                <div className="detail-type">location:</div>
                                <div className="detail-value">{eventsDummyData[singleEventIndex].location}</div>
                            </div>
                            <div className="detail-wrapper">
                                <div className="detail-type">date:</div>
                                <div className="detail-value">{eventsDummyData[singleEventIndex].date}</div>
                            </div>
                            <div className="detail-wrapper">
                                <div className="detail-type">start:</div>
                                <div className="detail-value">{eventsDummyData[singleEventIndex].start}</div>
                            </div>
                            <div className="detail-wrapper">
                                <div className="detail-type">end:</div>
                                <div className="detail-value">{eventsDummyData[singleEventIndex].end}</div>
                            </div>
                        </div>
                        <div className="attendees-sect">confirmed attendees</div>
                        <div className="buttons-sect">
                            <button>SEND INVITE</button>
                            <button>SHARE</button>
                        </div>
                    </div>
                    <div className="comments-article">
                        <div className="comments-title">comments</div>
                        <div className="comment">
                            <div className="comment-body">This events are usually lit !!!!</div>
                            <div className="comment-owner">- joe black</div>
                        </div>
                        <div className="comment">
                            <div className="comment-body">This events are usually lit !!!!</div>
                            <div className="comment-owner">- joe black</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}