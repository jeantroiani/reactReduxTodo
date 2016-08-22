import React, { Component, PropTypes } from 'react';

export default class Routes extends Component {
    static propTypes = {
        name: PropTypes.string
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <p>{name}</p>
            </div>
        );
    }
}
