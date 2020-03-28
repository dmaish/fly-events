import React, { Component } from 'react';

import eventsDummyData from './../events-dummy-data';
import './index.scss';

export default class AllEvents extends Component {
    renderTable = () => {
        return (
            <div className="table-section">
                <div className="section-title">
                    All Events
                </div>
                <div className="table-div">
                    <table className="mdl-data-table mdl-js-data-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="mdl-data-table__cell--non-numeric">Title</th>
                            <th className="mdl-data-table__cell--non-numeric">Owner</th>
                            <th className="mdl-data-table__cell--non-numeric">Date</th>
                            <th className="mdl-data-table__cell--non-numeric">Start</th>
                            <th className="mdl-data-table__cell--non-numeric">End</th>
                            <th className="mdl-data-table__cell--non-numeric">Location</th>
                            <th className="mdl-data-table__cell--non-numeric"></th>
                            <th className="mdl-data-table__cell--non-numeric"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventsDummyData.map(
                            (event, index) => (
                                <tr>
                                    <td >{index + 1}.</td>
                                    <td className="mdl-data-table__cell--non-numeric">{event.title}</td>
                                    <td className="mdl-data-table__cell--non-numeric">{event.owner}</td>
                                    <td className="mdl-data-table__cell--non-numeric">{event.date}</td>
                                    <td className="mdl-data-table__cell--non-numeric">{event.start}</td>
                                    <td className="mdl-data-table__cell--non-numeric">{event.end}</td>
                                    <td className="mdl-data-table__cell--non-numeric">{event.location}</td>
                                    <td className="mdl-data-table__cell--non-numeric"><span className="trash"><i class="fas fa-trash-alt"></i></span></td>
                                    <td className="mdl-data-table__cell--non-numeric"><span className="more-link">more</span></td>
                                </tr>
                            )
                        )}
                    </tbody>
                    </table>
                </div>
                <div className="action-button-section">
                    <button >
                        ADD NEW EVENT
                    </button>
                </div>
            </div>
        );
    }
    renderCalendar = () => {
        return (
            <div className="calendar-section">
                <div class="section-title">
                    Events Calendar
                </div>
            </div>
        );
    }

    render() {
        return(
            <div className="all-events">
                {this.renderTable()}
                {this.renderCalendar()}
            </div>
        )
    }
}