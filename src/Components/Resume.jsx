import React from 'react';

function Resume() {
    const pdfUrl = "https://drive.google.com/file/d/1U3m45sVzXdq--fsc7Q0hcDZH4u5fFWow/view?usp=drive_link";

    return (
        <div>
            <h1>My Resume</h1>
            <iframe title="resume" src={pdfUrl} width="100%" height="600px"></iframe>
        </div>
    );
}

export default Resume;
