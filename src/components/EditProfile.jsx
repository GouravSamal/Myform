import React, { useState, useEffect } from 'react'
import './style.css';
import { RxCross1 } from 'react-icons/rx';

export default function EditProfile() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const [profileArray,setProfileArray]=useState([]);

  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit=(e) => {
    e.preventDefault();

    console.log(firstname)

    const obj = {
      "FirstName":firstname,
      "LastName":lastname,
      "Email":email,
      "Phone":phone,
      "Gender":gender,
      "DateOfBirth":dob      
    }
    setProfileArray([...profileArray,obj]);

    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setGender("");
    setDob();

  }
  
  console.log(profileArray);

  return (
    <div className='background_screen'>
      <form className='editprofile_container'>

        <span className='cross_icon'><RxCross1 /></span>

        <div className='profileDiv'>

          <div className='profileformDiv'>

            <h2 className='editProfile_header'>Edit Profile</h2>

            <div className='name_div'>

              <div>
                <label>First Name<span className='required'>*</span></label>
                <br />
                <input type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div>
                <label>Last Name<span className='required'>*</span></label>
                <br />
                <input type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>

            </div>
            {/* name div ends */}

            <div className='emailDiv'>
              <label>Email<span className='required'>*</span></label>
              <br />
              <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='contactGenderDiv'>

              <div>
                <label>Contact Number<span className='required'>*</span></label>
                <br />
                <input type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className='genderDiv'>
                <label className='labels'>Gender<span className="required">*</span></label>
                <br />
                <select className='gender_select'
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}>
                  <option value="option 1">-----</option>
                  <option value="Male" >Male</option>
                  <option value="Female" >Female</option>
                  <option value="Others" >Others</option>
                </select>
              </div>

            </div>

            <div className='dateofbirth'>

              <label className='labels'>Date of Birth<span className="required">*</span></label>
              <br />

              <div>
                {/* <select className='day_select'
                  onClick={(e) => setDay(e.target.select)}
                  value={day}>
                  <option value="option 1">1</option>
                  <option value="option 2">2</option>
                  <option value="option 3">3</option>
                </select>

                <select className='month_select'
                  onClick={(e) => setMonth(e.target.select)}
                  value={month}>
                  <option value="option 1">January</option>
                  <option value="option 2">Febrary</option>
                  <option value="option 3">March</option>
                </select>

                <select className='day_select'
                  onClick={(e) => setYear(e.target.select)}
                  value={year}>
                  <option value="option 1">2001</option>
                  <option value="option 2">2002</option>
                  <option value="option 3">2003</option>
                </select> */}
                <input type="date" className='dob' value={dob} onChange={(e)=>setDob(e.target.value)}/>
              </div>

            </div>

          </div>
          {/* form div ends */}

          <div className='profilePicDiv'>

            <div>
              {selectedFile && <img src={preview} className='profileImage' />}
              <input type='file' onChange={onSelectFile} />
            </div>


          </div>
          {/* profile pic div div ends */}

        </div>

        <div className='prevNextDiv'>
          <div className='prevNextChildDiv'>
            <button>Cancel</button>
            <button onClick={handleSubmit}>Save</button>
          </div>
        </div>


      </form>
    </div>
  )
}
