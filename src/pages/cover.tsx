import "./cover.scss";

export default function Cover() {
  return (
    <div className="wrap">
      <div className="cover">
        <div className="spine">
          <div className="spine__meta">
            <hr />
            <p className="spine__title">ICARUS: A Digital Agency</p>
            <hr />
          </div>
        </div>

        <div className="subMatter">
          <div className="subMatter__contactInfo">
            <h4>Contact</h4>
            <p>+1 973-223-0516</p>
            <p>amjsdev@gmail.com</p>
            <p>
              <a href="https://calendly.com/icarusdigitalagency">Calendly</a>
            </p>

            <p>
              <a href="https://github.com/xtraVanilla/automation_fsjs/blob/main/Automation%20%26%20Full%20Stack%20JavaScript.pdf">
                Whitepaper
              </a>
            </p>

            <h4>Languages</h4>
            <p>Spanish</p>
            <p>Portuguese</p>
            <p>French</p>

            <h4>Services</h4>
            <p>Ideation</p>
            <p>Design</p>
            <p>Cloud Development</p>
            <p>Solutions Architecture</p>
            <p>Web & Mobile Development</p>
            <p>Deployment & Hosting</p>
          </div>

          <div className="subMatter__trademark">
            <h4>
              Ashton <br /> Morris
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
