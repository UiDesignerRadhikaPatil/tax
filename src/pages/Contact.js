import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import "./Contact.css";

function Contact({ handleContactClose }) {

  // phone number======================================

  const [isPhoneNumberFormVisible, setIsPhoneNumberFormVisible] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  const togglePhoneNumberForm = () => {
    setIsPhoneNumberFormVisible(!isPhoneNumberFormVisible);
  };

  const addPhoneNumber = () => {
    setPhoneNumbers([phoneNumbers, '']);
  };

  const navigate =  useNavigate()
  const handleback =()=>{
    navigate ('/#')
  }



  return (
    <div className="create-Contact col-12">
      <div className="contact-header col-12">
        <h3 className="contact_title">New Contact</h3>
        <button className="contactheader-button">
          <RxCross2 onClick={ handleback} />
        </button>
      </div>

      <div className="contact-information-section col-12" style={{ display: 'flex', marginTop: '5%' }}>
        <div className="middle-title col-12" style={{ display: 'flex', margin: '2%', flexWrap: 'wrap', fontSize: '16px', fontFamily: 'sans-serif' }}>
          <h5>Contact info</h5>
        </div>
      </div>
      <div className="name_container col-12" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5%', fontSize: '14px', color: 'CaptionText', fontFamily: 'sans-serif', }}>
        <div className="first-name col-4" style={{ flex: '1', padding: '10px' }}>
          <label >First name</label>
          <input type="text" id="first_name" style={{ width: '100%', padding: '2px', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>
        <div className="middle-name col-4" style={{ flex: '1', padding: '10px' }}>
          <label >Middle name</label>
          <input type="text" id="middle_name col-4" style={{ width: '100%', padding: '2px', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>
        <div className="last-name col-4" style={{ flex: '1', padding: '10px' }}>
          <label>Last name</label>
          <input type="text" id="last_name" style={{ width: '100%', padding: '2px', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>

        <div className="col-12" style={{ flexFlow: 'wrap', display: 'flex', padding: '10px' }}>
          <label>Contact name</label>
          <input type="text" id="contact_name" style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>

        <div className="col-12" style={{ flexFlow: 'wrap', display: 'flex', padding: '10px' }}>
          <label>Company name</label>
          <input type="text" id="company_name" style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>

        <div className="col-12" style={{ flexFlow: 'wrap', display: 'flex', padding: '10px' }}>
          <label>Note</label>
          <input type="text" id="note" style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>

        <div className="col-12" style={{ flexFlow: 'wrap', display: 'flex', padding: '10px' }}>
          <label>Social Security Number</label>
          <input type="text" id="social_security_number" style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>

        <div className="col-12" style={{ flexFlow: 'wrap', display: 'flex', padding: '10px' }}>
          <label>Tag</label>
          <select type="text" id="tag" style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>
      </div>

      <div className="col-12" style={{ flexFlow: 'wrap', display: 'flex', padding: '10px' }}>
        <h6 style={{ fontSize: '14px', fontFamily: 'sans-serif' }}> Phone numbers</h6>
        <div className="col-12" style={{ display: 'flex', marginTop: '5%', color: 'rgb(58, 145, 245)' }} >
          <FiPlusCircle onClick={togglePhoneNumberForm} style={{ marginRight: '2%' }} />
          <h6>Add Phone numbers</h6>
        </div>
        {isPhoneNumberFormVisible && (

          <div className="label-input-container col-12" style={{ padding: '10px', display: 'flex', flex: '1' }}>
            <div>
              <label htmlFor="Primary Phone col-6" style={{ fontSize: '14px', fontFamily: 'sans-serif', fontWeight: '300', }}>Primary Phone</label>
              <input type="text" id="Primary Phone" style={{ width: '100%', padding: '5px', boxSizing: 'border-box', borderRadius: '10px', border: '1px solid rgb(229, 228, 226)', height: '5vh' }} />
            </div>
            <div className='delete-icon col-6' style={{ marginLeft: '2%', color: 'red', marginTop: '2%' }}>
              <RiDeleteBin4Line />
            </div>
          </div>

        )}
      </div>



      <div className="Address-section" style={{ flexWrap: 'wrap', marginTop: '5%', fontSize: '14px', color: 'CaptionText', fontFamily: 'sans-serif', }}>
        <div className="col-12" style={{ flexFlow: 'wrap', padding: '10px' }}>
          <h6 style={{ fontSize: '14px', fontFamily: 'sans-serif' }}>Address</h6>
        </div>

        <div className="col-12" style={{ padding: '10px' }}>
          <label style={{ fontSize: '14px', color: 'CaptionText', fontFamily: 'sans-serif', }}>Country</label>
          <select type="text" id="country" style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>

        <div className="col-12" style={{ padding: '10px' }}>
          <label style={{ fontSize: '14px', color: 'CaptionText', fontFamily: 'sans-serif', }}>Street Address</label>
          <input type="text" id="street_address" style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
        </div>

        <div className="col-12" style={{ flexWrap: 'wrap' }}>
          <div className="city col-4" style={{ flex: '1', padding: '10px' }}>
            <label >City</label>
            <input type="text" id="city" style={{ width: '100%', padding: '2px', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
          </div>

          <div className="State col-4" style={{ flex: '1', padding: '10px' }}>
            <label >State/ Province</label>
            <input type="text" id="State" style={{ width: '100%', padding: '2px', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
          </div>

          <div className="State col-4" style={{ flex: '1', padding: '10px' }}>
            <label >ZIP/PostalCode</label>
            <input type="text" id="State" style={{ width: '100%', padding: '2px', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '10px', height: '4vh', }} />
          </div>
        </div>

        <div className=" col-12" style={{ display: 'flex', alignItems: 'center', marginTop: '5%', flexWrap: 'wrap' }}>
          <div className="Linked-accounts" style={{ fontSize: '20px', marginLeft: '2%', flex: '1' }}>
            <h6 style={{ margin: '0' }}>Linked accounts</h6>
          </div>

          <div className='link-account' style={{ display: 'flex', color: 'rgb(58, 145, 245)' }}>
            <div style={{ marginRight: '2px' }}><FiPlusCircle /> </div>
            <label htmlFor="account_info_radio" style={{ fontSize: '12px', fontFamily: 'sans-serif', color: 'rgb(58, 145, 245)' }}>Link account</label>
          </div>

        </div>

        <div className="button-container col-8" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5%' }}>
          <div className="create col-4" style={{ padding: '10px', flex: '1' }}>
            <button className="custom-button">Create</button>
          </div>
          <div className="cancel col-4" style={{ padding: '10px', flex: '1' }}>
            <button className="custom-button">Cancel</button>
          </div>
        </div>









      </div>



    </div>


  );
}

export default Contact;
