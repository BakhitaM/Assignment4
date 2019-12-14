import React, { Component } from 'react';
import jsonData from "../../../public/enquiries";
import './enquiries.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import * as actions from '../../action';
import { connect} from 'react-redux';
class UserEnquiries extends Component {
    constructor(props){
        super(props);
        this.state = {
          enquiryList:[]
      };
    }
    componentDidMount(){
      this.props.enquiryList();
      
    
    }
  render() {
    let  listItems = [];
    if(this.props.data){
    listItems = this.props.data.map((d) => {
      return(<div key={Math.random()} className="table enquiries">
      <div>
      <label>Name : </label>
      <span >{d.name} {d.lastname}</span>
      </div>
     
      <div > <label>Enquiry : </label>
      <span >{d.details}</span></div>
      
      </div>
      );
      });
    }
    return (
      <div>
      <div className="back">
      <Link to="/">Back</Link>
      </div>
      <div className="flex">
      {listItems}
      </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state)
  return{
      data:state.enquiry
  }
}


export default connect(mapStateToProps,actions)(UserEnquiries);
