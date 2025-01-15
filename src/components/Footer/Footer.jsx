import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <img src="https://i.ibb.co.com/74WT3Y1/Group-1.png" alt="" />
            <div className='footer-item'>
                <div>
                    <h1>About Us</h1>
                    <p className='text-zinc-400'>We are a passionate team <br /> dedicated to providing the <br /> best services to our customers.</p>
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <ul>
                        <li className='text-zinc-400'>Home</li>
                        <li className='text-zinc-400'>Services</li>
                        <li className='text-zinc-400'>About</li>
                        <li className='text-zinc-400'>Contact</li>

                    </ul>
                </div>
                <div>
                    <h1>Subscribe</h1>
                    <p className='text-zinc-400'>Subscribe to our newsletter for the latest updates.</p>
                    <input className='rounded-md p-2' type="text" placeholder="Enter your email" />
                    <button className='subscribe-btn'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;