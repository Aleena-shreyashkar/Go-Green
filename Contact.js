import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
    return(
        <>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        {/* phone number */}
                        <div className="contact_info_item d-flex justify-content-start-align-items-center">
                            <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone Number
                                </div>
                                <div className="contact_info_text">
                                    +91 2234567899
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact