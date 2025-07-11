import { config } from '../data/config'
import '../styles/components/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 