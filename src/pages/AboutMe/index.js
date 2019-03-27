import React from 'react';
import './index.css'
import './animation.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class AboutMe extends React.Component {
    componentDidMount() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
        }
    }
    render() {
        return(
            <div>
                <div id="navbar">
                    <a className="tracking-in-expand" href="/">Home</a>
                </div>
                <div className="headeraboutme">
                    <div className="heroaboutme poppinsfont">
                        <h1 className="h1aboutme text-focus-in">Hi, I am Tito</h1>
                        <AnchorLink  className="heroaboutmescroll ping" href='#contentaboutme' style={{ textDecoration: 'none' }}>
                        <span>scroll down</span>
                        </AnchorLink>
                    </div>
                </div>
                <div id="contentaboutme">
                    <p className="actualcontentaboutme">
                    <span className="largeletter">M</span>y name is Wijayanto Abdurrahman Prawirodirjo
                        and I am a Front-End Developer. <br/>Bachelor in Information Technology with specialism in Business Information Systems.
                        I graduated from a university called Asia Pacific University, located in Kuala Lumpur, Malaysia. And yes, I know there's another
                        university called APU which is located in Japan but it is a whole different university and <strike>unfortunately</strike> doesn't have any relation at all. <br/>
                        As I mentioned earlier, I am currently working as a developer, I do enjoy coding <strike>(if everything is working)</strike>, solving problems <strike>(that I create)</strike>,
                        dealing with people <strike>Krappa</strike> and probably things that you are currently thinking.<br/>
                        Oh yeah, here's my <a className="linkaboutme" href="https://www.linkedin.com/in/wijayantoap/">linked in</a> if you are interested to find out more about my background.
                        <br/>Anyhow, lately I have been interested in this thing called UI, design or whatever you may call. So I might gonna be implementing some of
                        my weird design in here and there. So you might <strike>or not</strike> want to check it out later.<br/>
                        Fiuh, I know it's very brief. But it is already morning now, I'll update whatever I want to write here later on. So for now, this is what it is.<br/>
                        If you have anything you want to share, somehow want to ask for help <strike>for university assignment</strike> or whatsoever, you can contact me at wijayanto.a.p@gmail.com.
                    </p>
                    <p className="signature">Wijayanto A.P</p>
                </div>
            </div>
        )
    }
}

export default AboutMe;