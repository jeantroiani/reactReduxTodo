import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
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
