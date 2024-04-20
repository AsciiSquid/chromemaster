import './About.css';

function About() {
    return (
        <div>
            <h1>About</h1>
            <div class="about">
                <p>Chromaster Dental Lab has been specializing in the manufacturing of high-quality cast partials since 1981. Our years of experience designing partials allows us to create an appliance that suits the needs of our clients as well as fulfilling the comfort levels and esthetics required by their patients. We understand that a proper functioning partial is essential for speech, eating, and overall confidence that a patient will have with a complete restoration of their mouth.</p>
                <div class="contact-container">
                    <ul class="contact-list">
                        <h2>Contact Us</h2>
                        <li><b>Rick Tratch,</b> RDT</li>
                        <li><b>Phone:</b> 306-244-5571</li>
                        <li><b>Fax:</b> 306-244-5585</li>
                        <br/>
                        <li>rchrome@sasktel.net</li>
                    </ul>
                    <div class="contact-map">
                        <div id="google-maps-canvas">
                            <iframe title="Chromemaster Map" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=2001+Alberta+Avenue,+Saskatoon,+SK,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;