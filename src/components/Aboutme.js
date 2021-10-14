import React from 'react'
import {Link} from 'react-router-dom'
function Aboutme() {
    return (
        <section id="aboutMe">
            <section>
                <img src = {process.env.PUBLIC_URL +"/"+ "assets/images/headshot.jpeg"} className="profilePic" alt ="profile pic" />
                <Link to='/contactMe'>
                <button className="btnContact">Message Me</button>
                </Link>   
              <div>  
                <h2>About Me</h2>
                <p> My name is Patrick, I have been exploring the world of coding since High School when I first started writing programs for my graphing calculator. Since then I have learned a few languages such as: HTML5, JavaScript, CSS, and some Java. Currently all the sites on this page are mock sites that were made as an assignment for a coding class environment or something I created to learn and test my skills out.</p>
                <br/>
                <p>The featured site that I’m most proud of is the one that is a mockup of The Miro apartment complex site. Which was created to mirror the site at the time I created it. It includes stock images and my own custom CSS and coding. The Battle Masters html is a game that I wrote in JavaScript that uses very minimal HTML. Writing the code for this site was challenging, but it also was rewarding at the same time since it helped me to understand and learn JavaScript. The other sites are ones that I created for classroom assignments.
                </p>
                </div>
            </section>
        </section>
    )
}

export default Aboutme
