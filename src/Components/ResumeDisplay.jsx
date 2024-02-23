// ResumeDisplay.jsx
import React from 'react';

function ResumeDisplay() {
  return (
    <div>
      {/* Your header */}
      <header>
        <h1>Your Header</h1>
        {/* Add any additional header content here */}
      </header>
      
      {/* Embed the PDF within an iframe */}
      <iframe src="https://drive.google.com/file/d/1U3m45sVzXdq--fsc7Q0hcDZH4u5fFWow/view?usp=drive_link" title="Resume" frameborder="0"></iframe>
    </div>
  );
}

export default ResumeDisplay;
