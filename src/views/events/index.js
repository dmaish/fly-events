import React, { Component } from 'react';

import AllEvents from './../../components/all-events';
import './index.scss';

export default class Events extends Component {

    render() {
        return(
            <div className="mdl-layout mdl-js-layout  mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">FLY EVENTS</span>
                    <div className="mdl-layout-spacer"></div>
                        <div className="search-bar">
                            <input className="search-input" placeholder="search"/>
                            <div className="search-icon">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                    <div className="mdl-layout-spacer"></div>
                        <div className="avatar">
                            <img src="https://i.pinimg.com/originals/13/03/69/130369231ecba23d5e0e1230d015fb6e.jpg" alt="avatar"></img>
                        </div>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <nav className="mdl-navigation">
                        <div className="nav-item">Home</div>
                        <div className="nav-item nav-item-active">Events</div>
                    </nav>
                    <div className="logout-btn">logout</div>
                </div>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <AllEvents />
                    </div>
                </main>
            </div>
        )
    }
}