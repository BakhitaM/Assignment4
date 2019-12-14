import React, { Component } from 'react';
import EnquireForm from '../enquireForm';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import * as actions from '../../action';
import { connect} from 'react-redux';
class Courses extends Component {
    constructor(props){
        super(props);
        this.state = {
            courseList:[],
            selectedCourse:''
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(data){
      this.setState({selectedCourse:this.props.data[data].name})
    }
    componentDidMount(){
      this.props.courseList();
    }
  render() {
    let listItems = [];
    if(this.props.data){
      
      listItems = this.props.data.map((d,count) => {
    return(<div key={d.id} className="table">
    <div className="bold">{d.name}</div>
     {d.batch.map(function(b, idx){
         return (
            <div key={idx} className="inline" >
            <span>{b.month}</span>
            <span key={idx}>{b.status}</span>
            <button onClick={(e) => this.handleChange(count, e)} disabled={!b.enquire} className={b.enquire?"active":""}>ENQUIRE</button>
            </div>)
       }.bind(this))}
    </div>
    );
    });
  }
  
    
    return (
      <div>
      <div className="allEnquiries">
     <Link to="/userEnquiries">All Enquiries</Link>
     </div>
      <div className="flex">
      
      <div className="Courses">
        {listItems}
      </div>
      <EnquireForm currentSelection={this.state.selectedCourse}></EnquireForm>
      
      </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state)
  
  return{
    data:state.courseList
  }
}


export default connect(mapStateToProps,actions)(Courses);
