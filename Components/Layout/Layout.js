import React, { Component, PropTypes } from 'react';

export default class Layout extends Component {
    static propTypes = {
        name: PropTypes.string
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <p>Welcome to the ToDo list</p>
            </div>
        );
    }
}
