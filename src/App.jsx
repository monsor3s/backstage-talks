import Logo from "../src/assets/logo.png"

import "../src/styles/components/app.sass"


function App() {
  return (
    <body>
      <section className="main-section">
        <div className="section-left">
          <img className="logo" src={Logo} alt="logo" />
          <p className="description">Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right s, we need to talk.
          <span className="span-copyright">© 2022<a href="milk.sk" className="published">Published by studio Milk</a></span>
          <p className="main-privacy">Privacy Policy</p>
          </p>
        </div>
        <div className="section-central">

        </div>
        <div className="section-right">
          <p className="contact">
            <a className="link" href="mailto:info@backstagetalks.com">info@backstagetalks.com</a>
          </p>
            <ul className="menu">
              <li>
                <a href="#issue6" className="menu-link">Issue #6</a>
              </li>
              <li>
                <a href="#issue5" className="menu-link">Issue #5</a>
              </li>
              <li>
                <a href="#issue4" className="menu-link">Issue #4</a>
              </li>
              <li>
                <a href="#issue3" className="menu-link">Issue #3</a>
              </li>
              <li>
                <a href="#issue2" className="menu-link">Issue #2</a>
              </li>
              <li>
                <a href="#issue1" className="menu-link">Issue #1</a>
              </li>
            </ul>
        </div>
      </section>
    </body>
  )
}

export default App
