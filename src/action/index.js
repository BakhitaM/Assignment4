const url = 'http://localhost:3000';
export function courseList(){
    const output = fetch(`${url}/courses`,{method:'GET'})
    .then(response => response.json())
    return{
        type:'COURSE_LIST',
        payload:output
    }
}
const url1 = 'http://localhost:3002';
export function enquiryList(){
    const output = fetch(`${url1}/details`,{method:'GET'})
    .then(response => response.json())
    return{
        type:'ENQUIRY_LIST',
        payload:output
    }
}
export function submitEnquiry(dataToSubmit){
    

    const output =  fetch(`${url1}/details`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(dataToSubmit)
    })
  .then(function(res){ console.log(res) })
  .catch(function(res){ console.log(res) })
  return{
    type:'ENQUIRY_SUBMIT',
    payload:output
}
}