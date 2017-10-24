import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EventsList extends Component {
    componentWillMount() {
        this.props.fetchEvents();
    }

    renderEvent(event) {
        return (
            <div className="card card-block" key={event.name}>
                <h4 className="card-title">{event.name}</h4>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.props.event.map(this.renderEvent)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { event: state.events };
}

export default connect(mapStateToProps, actions)(EventsList);