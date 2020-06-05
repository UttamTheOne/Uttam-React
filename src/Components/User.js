import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                <div style={{ border: '2px dotted blue', margin: '30px 200px', borderRadius: '25px', color: 'black' }}>
                    <h4>{this.props.FirstName} {this.props.LastName}</h4>
                    <hr/>
                    <h5>FirstName: {this.props.FirstName}</h5>
                    <h5>LastName: {this.props.LastName}</h5>
                    <h5>City: {this.props.City}</h5>
                    <h5>State: {this.props.State}</h5>
                    <h5>Country: {this.props.Country}</h5>
                </div>
            </div>
        );
    };
}

export default Users;