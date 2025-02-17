//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <form>
        <div className="container mt-5">
          <h2 className="mb-4">User Information Form</h2>
          <form>

            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" placeholder="Enter first name"></input>
            </div>


            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" placeholder="Enter last name"></input>
            </div>


            <div className="mb-3">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" placeholder="Enter age"></input>
            </div>


            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="male"></input>
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="female"></input>
                <label className="form-check-label">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="other"></input>
                <label className="form-check-label">Other</label>
              </div>
            </div>


            <div className="mb-3">
              <label className="form-label">Skills</label>
              <select className="form-select">
                <option selected disabled>Select a skill</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
            </div>


            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email"></input>
            </div>


            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter phone number"></input>
            </div>


            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="3" placeholder="Enter your address"></textarea>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

      </form>
    </>
  );
}

export default App;
