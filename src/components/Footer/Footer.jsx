import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icon">
                <img src={facebook_icon} alt="facebook" />
                <img src={instagram_icon} alt="instagram" />
                <img src={twitter_icon} alt="twitter" />
                <img src={youtube_icon} alt="youtube" />
            </div>

            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Center</li>
                <li>Media Center</li>
                <li>Inventor Relation</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notice</li>
                <li>Cookie Preference</li>
                <li>Corporation Information</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Footer