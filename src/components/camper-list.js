import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';
import './styles/camper-list.css';

class CamperList extends Component{
    componentWillMount(){
        this.props.fetchData();
    }
    renderCamperRows(){
        return this.props.campers.map((camper, index)=>{
            return (
                <tr key={index}>
                    <td>{index + 1}</td> 
                    <td><img className="profile-pic img-circle" src={camper.img} alt="profile picture"/> { camper.username }</td>
                    <td>{ camper.recent }</td>
                    <td>{ camper.alltime }</td>
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
                            <th>#</th>
                            <th>Camper Name <a className="sort-btn">x</a></th>
                            <th>Points in Past 30 Days <a className="sort-btn">x</a></th>
                            <th>All Time Points <a className="sort-btn">x</a></th>
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