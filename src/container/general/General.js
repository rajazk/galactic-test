import React from 'react'

const General = () => {
  return (
    <React.Fragment>
      <div className="head">
        <h3 className="title">General</h3>
        <span>Click field boxes to edit and then save your changes.</span>
      </div>
      <div className="profile-image">
        <h4>Avatar</h4>
        <div className="set-img">
          <img src="/images/Rectangle 2.png" alt="" />
          <button>Upload</button>
          <button>Remove</button>
        </div>
      </div>
      <div className="profile-info">
        <div className="info-item">
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="Romania" />
        </div>
        <div className="info-item">
          <label htmlFor="">Last name</label>
          <input type="text" placeholder="Flowers" />
        </div>
        <div className="info-item">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="ramona.flowers@biorelate.com" />
        </div>
        <div className="info-item">
          <label htmlFor="">Phone number</label>
          <input type="text" placeholder="207 555 0119" />
        </div>
      </div>
      <span className="ruler"></span>
      <div className="content-footer">
        <div className="footer-left">
          <h3>Delete account</h3>
          <h4>By deleting your account you will lose all of your data.</h4>
        </div>
        <div className="footer-right">
          <span>Delete account...</span>
        </div>
      </div>
      <div className="save-changes">
        <button>Save Changes</button>
      </div>
    </React.Fragment>
  )
}

export default General
