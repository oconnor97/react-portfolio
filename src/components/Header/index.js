import React from 'react'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <a class="navbar-brand" href="Home">Michael O'Connor</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="About Me">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Work">Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
