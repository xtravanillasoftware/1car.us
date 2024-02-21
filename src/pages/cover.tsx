import "./cover.scss";

export default function Cover() {
  return (
    <div className="wrap">
      <div className="cover">
        <div className="spine">
          <div className="spine__meta">
            <hr />
            <p className="spine__title">
              ICARUS
            </p>
            <hr />
          </div>
        </div>

        <div className="subMatter">
          <div className="subMatter__contactInfo">
            <h4>Contact</h4>
            <p>+1 (973)-223-0516</p>
            <p>amjsdev@gmail.com</p>
            <p>
              <a href="https://calendly.com/icarussoftware">Calendly</a>
            </p>

            <p>
              <a href="https://medium.com/@ashton-d-morris/automation-full-stack-javascript-f356fb662187">
                Whitepaper
              </a>
            </p>

            <h4>Languages</h4>
            <p>Spanish</p>
            <p>Portuguese</p>
            <p>French</p>
          </div>
        </div>
      </div>
    </div>
  );
}
