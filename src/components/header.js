import '../styles/style.jsx';
import {NavBar, Navbar,NavBarUl, Container,} from '../styles/style.jsx'

function Header() {
  return (

    <div>
  <NavBar>
    <img src="https://i.ibb.co/4dWXnRn/images-q-tbn-ANd9-Gc-Rr-Mm-f-YIj-Yhm-UMAr64-GAc-Fp-Ine521w2p-L-6-A-usqp-CAU.png" alt="" width="70px" ></img>
    <NavBarUl >
          <a href='./Compras'>Home</a>
              <a href='./Login'>Sign in</a>
              <a href='./Account'>Account</a>
    </NavBarUl>
  </NavBar>

  </div>

  )
}

export default Header