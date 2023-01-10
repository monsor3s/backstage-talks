import Logo from "../src/assets/logo.png"
import ImgIssue6 from "../src/assets/assetIssue6.png"
import ImgIssue5 from "../src/assets/assetIssue5.png"
import ImgIssue4 from "../src/assets/assetIssue4.png"
import ImgIssue3 from "../src/assets/assetIssue3.png"
import ImgIssue2 from "../src/assets/assetIssue2.png"
import ImgIssue1 from "../src/assets/assetIssue1.png"

import "../src/styles/components/app.sass"
import "../src/scripts/index.js"


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
          <div className="scroll-section">
            <div id="issueSix" className="container-scroll" data-anime="down">
              <img src={ImgIssue6} className="main-img" alt="img issue6" />
              <p className="footer-title" >Issue #6</p>
              <p>
                <a className="link-issue6" href="https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r">BUY HERE</a>
              </p>
              <p>
                or in <a className="link-issue6" href="https://backstagetalks.com/stocklist.php">selected stores</a>.
              </p>
            </div>
            <div id="issueFive" className="container-scroll" data-anime="down">
            <img src={ImgIssue5} className="main-img" alt="img issue5" />
            <p className="footer-title" >Issue #5</p>
            <p>
              <a className="link-issue6" href="https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r">BUY HERE</a>
            </p>
            <p>
              or in <a className="link-issue6" href="https://backstagetalks.com/stocklist.php">selected stores</a>.
            </p>
            </div>
            <div id="issueFour" className="container-scroll" data-anime="down">
            <img src={ImgIssue4} className="main-img" alt="img issue4" />
            <p className="footer-title" >Issue #4 is sold out.</p>
            <p>
              if you are lucky, you may get the last pieces in <a className="link-issue6" href="https://backstagetalks.com/stocklist.php">selected stores</a>.
            </p>
            </div>
            <div id="issueThree" className="container-scroll" data-anime="down">
            <img src={ImgIssue3} className="main-img" alt="img issue3" />
            <p className="footer-title" >Issue #3</p>
            <p>
              <a className="link-issue6" href="https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r">BUY HERE</a>
              </p>
            <p>
              or in <a className="link-issue6" href="https://backstagetalks.com/stocklist.php">selected stores</a>.
            </p>
            </div>
            <div id="issueTwo" className="container-scroll" data-anime="down">
            <img src={ImgIssue2} className="main-img" alt="img issue2" />
            <p className="footer-title" >Issue #2</p>
            <p>
              <a className="link-issue6" href="https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r">BUY HERE</a>
              </p>
            <p>
              or in <a className="link-issue6" href="https://backstagetalks.com/stocklist.php">selected stores</a>.
            </p>
            </div>
            <div id="issueOne" className="container-scroll" data-anime="down">
            <img src={ImgIssue1} className="main-img" alt="img issue1" />
            <p className="footer-title" >Issue #1 is sold out.</p>
            <p>
              if you are lucky, you may get the last pieces in <a className="link-issue6" href="https://backstagetalks.com/stocklist.php">selected stores</a>.
            </p>
            </div>
          </div>
        </div>
        <div className="section-right">
          <p className="contact">
            <a className="link" href="mailto:info@backstagetalks.com">info@backstagetalks.com</a>
          </p>
            <ul className="menu">
              <li>
                <a href="#issue6" className="menu-link issue6">Issue #6</a>
              </li>
              <li>
                <a href="#issue5" className="menu-link issue5">Issue #5</a>
              </li>
              <li>
                <a href="#issue4" className="menu-link issue4">Issue #4</a>
              </li>
              <li>
                <a href="#issue3" className="menu-link issue3">Issue #3</a>
              </li>
              <li>
                <a href="#issue2" className="menu-link issue2">Issue #2</a>
              </li>
              <li>
                <a href="#issue1" className="menu-link issue1">Issue #1</a>
              </li>
            </ul>
        </div>
      </section>
    </body>
  )
}

export default App
