import React, { Component } from 'react';
import './enquireForm.css';
import * as actions from '../../action';
import { connect} from 'react-redux';
class EnquireForm extends Component {
    constructor(props){
        super(props);
        this.state={
            currentSelection:'',
            enquiries:[{
                'name':'',
                'lastname':'',
                'details':''
            }],
                'name':'',
                'lastname':'',
                'details':'',
                'onsubmit':false
            
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({onsubmit:false})
        this.setState({course:nextProps.currentSelection});
       
      }
      submitEnquiry(e){
          
          let dataToSubmit = {
            'name':this.state.name,
            'lastname':this.state.lastname,
            'details':this.state.details,
            'id':Math.random()
          }
          ;
          this.setState({ 
            enquiries: this.state.enquiries.concat([dataToSubmit])
          })
          //submit data
          this.props.submitEnquiry(dataToSubmit);
          this.setState({onsubmit:true})
         this.render();
          
      }
      saveUserData(field,e){
        this.setState({[field]:e.target.value});

      }
  render() {
    if(this.props.currentSelection && !this.state.onsubmit){
    return (
       
      <span className="EnquireForm">
    
        <div >
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e) => this.saveUserData("name", e)}/>

    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(e) => this.saveUserData("lastname", e)}/>

    <label htmlFor="course">Course</label>
    <input type="text" id="lname" name="course" disabled value={this.state.course}/>

    <label htmlFor="subject">Your Enquiry</label>
    <textarea id="subject" name="subject" placeholder="Write something.." onChange={(e) => this.saveUserData("details", e)}></textarea>

    <input type="submit" value="Submit" onClick={this.submitEnquiry.bind(this)}/>
  </div>

 
      </span>
        
    );
    }else{
        return <div></div>;
    }
  }
}
function mapStateToProps(state){
  console.log(state)
  return{
    data:''
  }
}


export default connect(mapStateToProps,actions)(EnquireForm);
