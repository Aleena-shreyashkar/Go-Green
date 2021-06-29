import React, { useState } from "react";
import emailjs from 'emailjs-com';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import AppBar from 'material-ui/AppBar';
// import { Form, Button } from 'semantic-ui-react';

const Result = () =>{
    return(
        <p>Your message has been successfully sent. We will contact you soon</p>
    )
}
function ContactComponent(props) {
    const [result,showResult] = useState(false);
const sendEmail= (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_jchc9cj', 'template_ev6hjgh', e.target, 'user_TWahtZOdDXkmiQQOUBabR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
        }
    return(
        // <MuiThemeProvider>
        //     <React.Fragment>
        //         <AppBar title="Enter Your Details" ></AppBar>
        //             <TextField onSubmit={sendEmail}
        //                 hintText="Enter Your First Name"
        //                 floatingLabelText = "First Name"
        //                 onChange={handleChange('FirstName')}
        //                 defaultValue={values.firstName}   
        //             />
        //             <TextField
        //                 hintText="Enter Your Last Name"
        //                 floatingLabelText = "Last Name"
        //                 onChange={handleChange('lastName')}
        //                 defaultValue={values.lastName}   
        //             />
                    
        //             <TextField
        //                 hintText="Enter Your Email"
        //                 floatingLabelText = "Email ID"
        //                 onChange={handleChange('email')}
        //                 defaultValue={values.email}   
        //             />
        //             <br/>
        //             <TextField
        //                 hintText="Phone Number"
        //                 floatingLabelText = "Phone Number"
        //                 onChange={handleChange('phone')}
        //                 defaultValue={values.phone}   
        //             />
        //             <br/>
        //             <TextField
        //                 hintText="Message"
        //                 floatingLabelText = "Message"
        //                 onChange={handleChange('message')}
        //                 defaultValue={values.message}   
        //             />
        //             </React.Fragment>
        //     </MuiThemeProvider>
        <MuiThemeProvider>
        <form action="" onSubmit={sendEmail}>
            <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input className="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
            </div>
            <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div className="row">{result ? <Result /> : null}</div>
            </div>
        </form> 
        </MuiThemeProvider> 
    );
}

// const styles = {
//     button: {
//         margin : 15
//     }
// }
export default ContactComponent;