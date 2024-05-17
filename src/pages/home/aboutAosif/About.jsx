import "./aboutAosif.css"

function About() {
  return <>
    <div className="about mt-10">
        <div className="container m-auto py-10">
            <h1 className="text-center text-[32px] font-bold text-white">About Aosif</h1>

            <div className="company mt-10">
                <ul className="grid md:grid-cols-5 grid-cols-2 justify-between text-[16px] font-bold text-white">
                    <li>
                        <span className="truncate">Company Profile</span>
                    </li>
                    <li>
                        <span className="truncate">Company Culture</span>
                    </li>
                    <li>
                        <span className="truncate">Certificates</span>
                    </li>
                    <li>
                        <span className="truncate">Production Facility</span>
                    </li>
                    <li>
                        <span className="truncate">Talent recruitment</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </>
}

export default About