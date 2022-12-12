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

        </div>
      </section>
    </body>
  )
}

export default App
