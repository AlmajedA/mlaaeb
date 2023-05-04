import React from 'react';
import { useEffect, useState, useContext } from "react";

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


export default function PersonalProfile() {
  const [userAcc, setUserAcc] = useState(null);
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const loggedInUser = localStorage.getItem("userAcc") || null;
      if (loggedInUser) {
        setUserAcc(loggedInUser);
      }
    }
  }, []);

  if (!userAcc)
    return <div>Please login to see your profile</div>;
   
  

  
  return (
    <section className="vh-90" style={{ backgroundColor: '#lightgrey' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-200">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white "
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', backgroundColor: '#4a934a', fontFamily:"Calibri (Body)"}}>
                  <MDBCardImage src="https://cdn2.iconfinder.com/data/icons/soccer-players/100/color-20-1024.png"
                    alt="Avatar" className="my-5" style={{ width: '120px'}} fluid />
                  <MDBTypography tag="h5">{userAcc.name}</MDBTypography>
                  <MDBCardText>ROLE</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4" style={{ fontFamily: "Verdana, sans-serif" }}>
                    <MDBTypography tag="h6">INFORMATION</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">{userAcc.email}</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">{userAcc.phone_number}</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">CITY</MDBTypography>
                        <MDBCardText className="text-muted">cityName</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">FAVORITE SPORT</MDBTypography>
                        <MDBCardText className="text-muted">sportName</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}