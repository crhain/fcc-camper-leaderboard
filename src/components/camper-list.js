import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData, sortDataByRecentPoints, sortDataByPoints, sortDataByName } from '../actions/index';
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
                    <td><img className="profile-pic img-circle" src={camper.img} alt={camper.username}/> { camper.username }</td>
                    <td>{ camper.recent }</td>
                    <td>{ camper.alltime }</td>
                </tr>
            );
        });

    }
    
    sortDataByName(){
        this.props.sortDataByName(this.getSortedOrder('name'));
    }

    sortDataByRecentPoints(){
        this.props.sortDataByRecentPoints(this.getSortedOrder('recent'));        
    }

    sortDataByPoints(){        
        this.props.sortDataByPoints(this.getSortedOrder('points'));        
    }

    getSortedOrder(field){
        let newOrder = 'asc';
        if(this.props.sorted.by === field){
            if(this.props.sorted.order === 'asc'){
                newOrder = 'dsc';
            } 
        }        
        return newOrder;
    }

    render(){
        let nameSortClass = '';
        let recentSortClass = '';
        let pointsSortClass = '';

        if(this.props.sorted.by === 'name'){
            if(this.props.sorted.order === 'asc'){
                nameSortClass = 'glyphicon glyphicon-triangle-top';
            } else {
                nameSortClass = 'glyphicon glyphicon-triangle-bottom';
            }                       
        } else if(this.props.sorted.by === 'recent'){
            if(this.props.sorted.order === 'asc'){
                recentSortClass = 'glyphicon glyphicon-triangle-top';
            } else {
                recentSortClass = 'glyphicon glyphicon-triangle-bottom';
            }
        } else if(this.props.sorted.by === 'points'){
            if(this.props.sorted.order === 'asc'){
                pointsSortClass = 'glyphicon glyphicon-triangle-top';
            } else {
                pointsSortClass = 'glyphicon glyphicon-triangle-bottom';
            }
        }   

        return (
            <div>
                <h3>Leaderboard</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><a id="name-sort-btn" className="sort-btn" onClick={this.sortDataByName.bind(this)}>Camper Name <i className={nameSortClass}></i></a></th>
                            <th><a id="recent-sort-btn" className="sort-btn" onClick={this.sortDataByRecentPoints.bind(this)}>Points in Past 30 Days <i className={recentSortClass}></i></a></th>
                            <th><a id="points-sort-btn" className="sort-btn" onClick={this.sortDataByPoints.bind(this)}>All Time Points <i className={pointsSortClass}></i></a></th>
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


function mapStateToProps({ campers, sorted }){
    return { campers, sorted };    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchData, sortDataByRecentPoints, sortDataByPoints, sortDataByName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CamperList);