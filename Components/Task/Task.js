import React{ Components, PropTypes } from 'react';

export default class Task extends Components {
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