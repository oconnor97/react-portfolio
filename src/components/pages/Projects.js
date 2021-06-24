import React from 'react'

const Projects = () => {
    return (
        <div style={{ backgroundColor: "#008080", marginBottom: '0' }}>
            <h2 style={{ textAlign: 'center', color: 'white' }}>Group Projects</h2>
            <div class="card-deck" style={{ padding: "3rem" }}>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Event Eats</h5>
                        <p class="card-text">This application will allow users to plan a trip by choosing an event they plan to attend. Clicking on that event will display resturaunts within a 5 mile radius of that event.</p>
                        <ul class="list-group">

                            <li class="list-group-item list-group-item-secondary">Ticketmaster API</li>
                            <li class="list-group-item list-group-item-secondary">DocuMenu API</li>
                            <li class="list-group-item list-group-item-secondary">jQuery</li>
                            <li class="list-group-item list-group-item-secondary">bootstrap</li>

                        </ul>
                        <a href="https://schimmoellerm.github.io/events-eats/" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                        <a href="https://github.com/oconnor97/events-eats" target='_blank ' style={{ marginLeft: '2rem' }}>Deployed App</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">On the Growl</h5>
                        <p class="card-text">On the Growl takes the easy-to-use format of a casual dating app and applies it to the more enjoyable process of finding a new pet.</p>
                        <ul class="list-group">

                            <li class="list-group-item list-group-item-secondary">Petfinder API</li>
                            <li class="list-group-item list-group-item-secondary">MongoDB</li>
                            <li class="list-group-item list-group-item-secondary">JavaScript</li>
                            <li class="list-group-item list-group-item-secondary">Express</li>

                        </ul>
                        <a href="https://github.com/oconnor97/on-the-growl" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                        <a href="https://on-the-growl.herokuapp.com/login" target='_blank ' style={{ marginLeft: '2rem' }}>Deployed App</a>

                    </div>
                </div>

            </div>
            <h2 style={{ textAlign: 'center', color: 'white' }}>Individual</h2>
            <div class="card-deck" style={{ padding: "3rem" }}>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title">Employee-Tracker</h5>
                        <p class="card-text">A node applciation that uses the command line and MySQL to create an employee database.  This allows the user to view all emplyees, deparments and employee roles and add to them. Also allows the user to update the roles of a given employee.</p>
                        <a href="https://github.com/oconnor97/employee-tracker" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                    </div>
                </div>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title">E-Commerce-backend</h5>
                        <p class="card-text"> This assignment is for the back end of an e-commerce website. I have used starter code to configure a working Express.js API to use Sequelize to interact with a MySQL database.</p>
                        <a href="https://github.com/oconnor97/e-commerce-backend" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                    </div>
                </div>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title">Employee-directory</h5>
                        <p class="card-text"> The goal was to create a searchable Employee Directory in React.js. The employee data is generated from the https://randomuser.me API</p>
                        <a href="https://github.com/oconnor97/e-commerce-backend" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                        <a href="https://oconnor97.github.io/employee-directory/" target='_blank ' style={{ marginLeft: '2rem' }}>Deployed App</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
