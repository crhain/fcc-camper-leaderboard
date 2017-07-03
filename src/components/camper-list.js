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
        this.props.sortDataByName(this.getSortedOrder('name', true));
    }

    sortDataByRecentPoints(){
        this.props.sortDataByRecentPoints(this.getSortedOrder('recent'));        
    }

    sortDataByPoints(){        
        this.props.sortDataByPoints(this.getSortedOrder('points'));        
    }

    getSortedOrder(field, reverseDefaultOrder = false){
        let newOrder;
        if(this.props.sorted.by === field){
            if(this.props.sorted.order === 'dsc'){
                newOrder = 'asc';
            } else {
                newOrder = 'dsc';
            }
        } else {
            newOrder = reverseDefaultOrder ? 'asc' : 'dsc';
        }        
        return newOrder;
    }

    render(){
        let nameSortClass = '';
        let recentSortClass = '';
        let pointsSortClass = '';

        if(this.props.sorted.by === 'name'){
            if(this.props.sorted.order === 'dsc'){
                nameSortClass = 'glyphicon glyphicon-triangle-bottom';                
            } else {
                nameSortClass = 'glyphicon glyphicon-triangle-top';
            }                       
        } else if(this.props.sorted.by === 'recent'){
            if(this.props.sorted.order === 'dsc'){
                recentSortClass = 'glyphicon glyphicon-triangle-bottom';                
            } else {
                recentSortClass = 'glyphicon glyphicon-triangle-top';
            }
        } else if(this.props.sorted.by === 'points'){
            if(this.props.sorted.order === 'dsc'){
                pointsSortClass = 'glyphicon glyphicon-triangle-bottom';
                
            } else {
                pointsSortClass = 'glyphicon glyphicon-triangle-top';
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