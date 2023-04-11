import React, { useState } from 'react';
import './style.css';
import { RxCross1 } from 'react-icons/rx';
import { useToast } from '@chakra-ui/react';

export default function EducationalDetails() {

  const [qualifications, setQualifications] = useState();
  const [beginningYear, setBeginneringYear] = useState("");
  const [percentage, setPercentage] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [degree, setDegree] = useState("");
  const [finalYear, setFinalYear] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [university, setUniversity] = useState("");
  const [institute, setInstitute] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [educationArray,setEducationArray]=useState([]);
  
  const date = new Date();
  const todayDay = date.getDay();
  const todayMonth = date.getMonth();
  const todayYear = date.getFullYear();
  const today = todayYear+""+todayMonth+""+todayDay

  const [todate,setTodate] = useState("");
  const [fromdate,setFromdate] = useState("");

  const toast = useToast(); 

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Today",today);

    if(fromdate > todate){
      toast({
        title:'Error Occured',
        description:'Please enter the valid date',
        status:'error',
        duration:3000,
        isClosable:true,
        position:'bottom'
      })
      alert('Please enter the valid date')
      return;
    }

    // if(fromdate > today){
      // alert('Please enter the valid beginning year')
      // return;
    // }


    const obj = {
      "Qualifications":qualifications,
      "Degree":degree,
      "Beginning Year":beginningYear,
      "Final Year":finalYear,
      "Percentage":percentage,
      "CGPA":cgpa,
      "Specialization":specialization,
      "University":university,
      "Institute":institute,
      "Country":country,
      "State":state,
      "City":city
    }

    setEducationArray([...educationArray,obj]);

    setQualifications("");
    setDegree("");
    setBeginneringYear();
    setFinalYear();
    setPercentage("");
    setCgpa("");
    setSpecialization("");
    setUniversity("");
    setInstitute("");
    setCountry("");
    setState("");
    setCity("");
  }
  
  
  console.log(educationArray);

  const handlefromdate = (e) =>{

    setBeginneringYear(e.target.value);
    const getFromDateValue = e.target.value;

    const setFromdateformat = getFromDateValue.split('-');

    const setFromyear = setFromdateformat[0];
    const setFrommonth = setFromdateformat[1];
    const setFromday = setFromdateformat[2];

    const fromdate = setFromyear+""+setFrommonth+""+setFromday;
    setFromdate(fromdate);
  }

  const handletodate = (e) =>{

    setFinalYear(e.target.value);
    const getToDateValue = e.target.value;

    const setTodateformat = getToDateValue.split('-');

    const settoyear = setTodateformat[0];
    const settomonth = setTodateformat[1];
    const settoday = setTodateformat[2];

    const todate = settoyear+""+settomonth+""+settoday;
    setTodate(todate);
  }


  return (

    <div className='background_screen'>
      <form className='educationalDetails_container'>

        <span className='cross_icon'><RxCross1/></span>

        <h2 className="educationalDetails_header">Educational Details</h2>

        <div className='educationalDetails_contents'>

          <div className="educationalDetails_firstDiv">

            <div className='educationalDetails_leftdiv'>

              <div className='qualifications'>
                <label className='labels'>Qualifications<span className="required">*</span></label>
                <br />
                <select className='qualification_select'
                  onChange={(e) => setQualifications(e.target.value)}
                  value={qualifications}>
                  <option value="option 1">----</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                </select>
              </div>

              <div>
                
                <label className='labels'>Degree<span className="required">*</span></label>
                <br />
                <input type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </div>

              <div>
                
                <label className='labels'>From(Year)<span className="required">*</span></label>
                <br />
                <input type="date"
                  value={beginningYear}
                  // onChange={(e) => setBeginneringYear(e.target.value)}
                  onChange={handlefromdate}
                />
              </div>

              <div>
                
                <label className='labels'>To(Year)<span className="required">*</span></label>
                <br />
                <input type="date"
                  value={finalYear}
                  // onChange={(e) => setFinalYear(e.target.value)}
                  onChange={handletodate}
                />
              </div>

            </div>

            <div className='educationalDetails_rightdiv'>

              <div>
                
                <label className='labels'>Percentage<span className="required">*</span></label>
                <br />
                <input type="text"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                />
              </div>

              <div>
                
                <label className='labels'>CGPA<span className="required">*</span></label>
                <br />
                <input type="text"
                  value={cgpa}
                  onChange={(e) => setCgpa(e.target.value)}
                />
              </div>

              <div>
                
                <label className='labels'>Specialization<span className="required">*</span></label>
                <br />
                <input type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </div>

              <div>
                <label className='labels'>University<span className="required">*</span></label>
                <br />
                <input type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </div>

            </div>

          </div>

          <div className='educationalDetails_middleDiv'>
            <label className='labels'>Institute<span className="required">*</span></label>
            <br />
            <input type="text"
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
            />
          </div>

          <div className='educationalDetails_lastDiv'>

            <div>
              <label>Country<span className='required'>*</span></label>
              <br />
              <input className='educationalDetails_lastDiv_input' type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div>
              <label>State<span className='required'>*</span></label>
              <br />
              <input type="text" className='educationalDetails_lastDiv_input'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div>
              <label>City<span className='required'>*</span></label>
              <br />
              <input type="text" className='educationalDetails_lastDiv_input'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

          </div>

          <div className='prevNextDiv'>
            <div className='prevNextChildDiv'>
              <button>Cancel</button>
              <button onClick={handleSubmit}>Save</button>
            </div>
          </div>        

        </div>

      </form>
    </div>
  )
}
