import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { useCookies } from 'react-cookie';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);
  let navigate = useNavigate();

  const logOut = () => {
    removeCookie("user");
    removeCookie("token")
    navigate("/")
  }
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#' onClick={() => navigate("/")}>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <div>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center m-auto">
                <MDBCard className="w-96">
                  <MDBCardImage
                    src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
                    alt="avatar"
                    className="rounded-circle pb-10 m-auto pt-8"
                    style={{ width: '150px' }}
                    fluid />
                  <ul >
                    <li className='py-3' style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                      <h5>Name :  </h5>
                      <span className='font-normal'>  {cookies?.user?.name}</span>
                    </li>
                    <li className='*:py-3'>
                      <h5>Email : <span className='font-normal'>  {cookies?.user?.email}</span> </h5>
                    </li>
                    <li className='*:py-3'>
                      <h5>Number : <span className='font-normal'>  {cookies?.user?.number}</span> </h5>
                    </li>
                    <li className='*:py-3'>
                      <h5>Age : <span className='font-normal'>  {cookies?.user?.age}</span> </h5>
                    </li>
                  </ul>
                  <div className='py-4 flex justify-center items-center'>
                    <button className="bg-blue-500 text-white hover:bg-blue-600 h-11 rounded w-28 p-0 " onClick={logOut}>
                      <span className='flex items-center  gap-2 justify-center'>Log out<LogOut /></span>
                    </button>
                  </div>
                </MDBCard>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </MDBContainer>
    </section>
  );
}

