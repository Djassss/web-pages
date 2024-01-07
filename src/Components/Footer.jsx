import { Link } from "react-router-dom"

import '../styles/footer.scss'

export default function Footer () {
    return(
    <div className='footer-link'>
        <li>
            <Link>@2023 Jasur</Link>
          </li>
          
          <li>
            <Link>Terms of use</Link>
          </li>
          
          <li>
            <Link>Privacy policy</Link>
          </li>
          
          <li>
            <Link>jasurumarov.94@gmail.com</Link>
          </li>
    </div> 
    )
}