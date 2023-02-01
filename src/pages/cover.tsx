import './cover.scss';

export default function Cover() {
    return (
        <div className="wrap">
            <div className="cover">
                <div className="spine">
                    <div className="spine__pageNumber"> 
                        <p>01</p>
                    </div>

                    <div className="spine__meta">
                        <hr />
                        <p className="spine__title">ICARUS</p>
                        <hr />
                    </div>
                </div>
                
                <div className="subMatter">
                    <div className="subMatter__contactInfo">
                        <h4>Location</h4>
                        <p>Greater New York Area</p>
                        <p>Miami, FL</p>
                        <p>Austin, TX</p>

                        <h4>Contact</h4>
                        <p>(973) - 223 - 0516</p>
                        <p>amjsdev@gmail.com</p>
                        <p><a href="https://www.linkedin.com/in/autodiplo/">LinkedIn</a></p>

                        <h4>Languages</h4>
                        <p>Spanish</p>
                        <p>Portuguese</p>
                        <p>French</p>
                    </div>

                    <div className="subMatter__trademark">
                        <h4>Ashton <br /> Morris</h4>

                        <p>ICARUS: A DIGITAL AGENCY © {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}