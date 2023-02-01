import './offerings.scss';

export default function Offerings() {
    return (
        <div className="offerings">
            <div className="offerings__pageNumber"> 
                <p>02</p>
            </div>

            <div className="offerings__quote">
                <h1 className="quote">Make everything as simple as possible, but not simpler.</h1>
                <h1> — Albert Einstein</h1>
            </div>

            <div className="offerings__categories">
                <h3>Discovery</h3>
                <h3>Design</h3>
                <h3>Mobile & Web Dev</h3>
                <h3>Deployment</h3>

                <div className="wrap">
                    <div className="logo">i</div>
                </div>
            </div>

            <h1 className="offerings__bttmTitle">Offerings.</h1>
        </div>
    )
}