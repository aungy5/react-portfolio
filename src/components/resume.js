import React from 'react';

function Resume() {
    return(
        <section class="mb-4">
            <h1 className="resume">Take a look at my Resume Below!</h1>
            <button type="button" class="btn btn-light"><a href="https://docs.google.com/document/d/e/2PACX-1vS1sb1ENhpV3Qd6q3jYfIkbGUKogv02R36VyANqCtuNFK4Xtb166H1fDrKK8HkDcrjkzKQXRZaTv7UU/pub
            ">Click Here to view my Resume!</a></button>
            
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Me
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Dedicated Tech Professional with experience in web applications and production support. Recognized as a proactive, resourceful, and persistent problem-solver. Excellent communicator with effective client relationship-management skills. Graduate of Syracuse University with a BA in Economics. Will graduate from the University of Pennsylvania with a certificate in full stack web development in November of 2021.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Front End Skills
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>IndexedDB</li>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Back End Skills
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL (mySQL, sequelize)</li>
        <li>noSQL (mongoDBL, mongoose)</li>
        <li>APIs (RESTful, server-side, third-party)</li>
      </div>
    </div>
  </div>
</div>
        </section>
    )
}

export default Resume;