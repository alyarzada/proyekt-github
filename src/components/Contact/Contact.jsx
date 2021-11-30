import React from 'react';

function Contact() {
  return (
    <>
      <h1 className="text-center mb-5">Contact Info</h1>
      <div className="container">
        <div className="row">
          <div className="map col-lg-6">
            <iframe
              className="rounded iframe-placeholder"
              title="1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43555725476!2d-118.69192171264476!3d34.02073049643141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1637590357112!5m2!1sen!2s"
              style={{ border: '0', height:'50vh', width:'100%' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="loading-gif position-absolute w-25">
              <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading..." className='w-25' />
          </div>
          <ul className="list-group list-group-flush lead rounded col-lg-6">
            <li className="list-group-item">
              <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Enrollment Phone:</span> (555) 555-55-55
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Student Phone:</span> (333) 333-33-33
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Enrollment Email:</span> enroll@gmail.com
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Student Email:</span>{' '}
              frontendbc.test@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
