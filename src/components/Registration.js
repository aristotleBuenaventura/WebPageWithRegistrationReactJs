import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Registration = () => {
  const [birthdate, setBirthdate] = useState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowAlert(true);
    } else {
      window.open("/", "_self");
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center px-5 mb-5">
        <form class="container border p-5 mx-1 mx-md-4 mt-5 " onSubmit={handleSubmit}>
            
          <div className="d-flex justify-content-center mb-3 ">
            <h3 className="fw-bold">Registration</h3>
          </div>
          
          <div className="row">
            <div class="col col-12 col-lg-6">
              <div class="d-flex flex-row align-items-center ">
                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <label class="fw-bold">Username</label>
                  <input type="text" id="username" name="username" class="form-control mb-3" placeholder="Username" required/>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center">
                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <label class="fw-bold">Email</label>
                  <input type="email" id="email" name="email" class="form-control mb-3" placeholder="Email" required/>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center">
                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <label class="fw-bold">Firstname</label>
                  <input type="text" id="First Name" name="firstname" class="form-control mb-3" placeholder="First Name" required/>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center ">
                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <label class="fw-bold">Lastname</label>
                  <input type="text" id="Last Name" name="lastname" class="form-control mb-3" placeholder="Last Name" required/>
                </div>
              </div>
              
              
              
              

              <div class="d-flex flex-row align-items-center ">
                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <label class="fw-bold">Gender</label>
                  <div class="form-check">
                    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                    <label class="form-check-label" for="validationFormCheck2">Male</label>
                  </div>
                  <div class="form-check mb-3">
                    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required/>
                    <label class="form-check-label" for="validationFormCheck3">Female</label>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div class="col col-12 col-lg-6">
              
              <div class="d-flex flex-row align-items-center ">
                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-3">
                  <label class="fw-bold">Birth Date</label>
                   <DatePicker selected={birthdate} onChange={(date) => setBirthdate(date)} className="form-control" required />
                </div>
              </div>
              
              
              <div class="d-flex flex-row align-items-center ">
                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-3">
                  <label class="fw-bold">Program</label>
                  <select class="form-select" id="validationDefault04" placeholder="Required example textarea" required>
                    <option selected disabled value="">Select your Program</option>
                    <option>Information Technology</option>
                    <option>Information System</option>
                    <option>Computer Science</option>
                    <option>Computer Engineer</option>
                  </select>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center ">
                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-3">
                  <label class="fw-bold">Description</label>
                  <textarea class="form-control" id="validationTextarea" placeholder="Description" required></textarea>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center ">
                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <label class="fw-bold">Password</label>
                  <input              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" value={password} onChange={(e) => setPassword(e.target.value)}  type="password" id="password" name="password" class="form-control mb-3" placeholder="Password" required/>
                </div>
              </div>


              <div class="d-flex flex-row align-items-center ">
                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <label class="fw-bold">Confirm Password</label>
                  <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirm password" name="cpassword" class="form-control mb-3" placeholder="Confirm Password" required/>
                  { showAlert && 
                    <div style={{background: 'red', color: 'white', padding: '10px'}}>
                      Password does not match!
                    </div>
                  } 
                  
                </div>
              </div>


            </div>
            
             <div class="form-check d-flex justify-content-center me-3 mb-3">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required />
                <label class="form-check-label" for="form2Example3">
                I agree all statements in <a href="#" class="alink">Terms and Condition</a>
                </label>
              </div>

              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <input type="submit" name="submit" class="btn btn-success btn-lg"></input>
              </div>
            
              
          
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Registration
