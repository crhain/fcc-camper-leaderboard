import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

class CamperList extends Component{
    componentWillMount(){
        this.props.fetchData();
    }
    renderCamperRows(){
        return this.props.campers.map((camper, index)=>{
            return (
                <tr key={index}> 
                    <td>{ camper.name }</td>
                    <td>{ camper.points30 }</td>
                    <td>{ camper.points }</td>
                </tr>
            );
        });

    }

    render(){        
        return (
            <div>
                <h3>Leaderboard</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Camper</th>
                            <th>Points in Last 30 Days</th>
                            <th>Total Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderCamperRows() }
                    </tbody>
                    
                </table>
            </div>
        );
    }
}


function mapStateToProps({ campers }){
    return { campers };    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CamperList);