import React from "react";




function Home() {
  return (
    <div style={{ backgroundColor: "#008080", textAlign: 'center' }}>
      <p style={{ color: "white" }}> My name is Michael O'Connor and I am a 28 year old Junior Developer from Columbus, Ohio.  I have a passion for continued growth and being in a field that is always growing.</p>
      <p style={{ color: "white" }}>My previous background was in the printing industry where I wrote programs for machinery and solved problems to make the company more efficient.  I love music and it is my goal to find job that allows me to work around the music industry while programming! </p>

      <h3> Skills </h3>
      <div class="row" style={{ marginTop: "5rem", padding: '5rem' }}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> Front-end</h5>
              <ul class="list-group">
                <li class="list-group-item">HTML</li>
                <li class="list-group-item">CSS</li>
                <li class="list-group-item">JavaScript</li>
                <li class="list-group-item">jQuery</li>
                <li class="list-group-item">Nodejs</li>
                <li class="list-group-item">Reactjs</li>
              </ul>

            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Back-end</h5>
              <ul class="list-group">
                <li class="list-group-item">mySQL</li>
                <li class="list-group-item">MongoDb</li>
                <li class="list-group-item">Express</li>
                <li class="list-group-item">Nodejs</li>
              </ul>


            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Home;
