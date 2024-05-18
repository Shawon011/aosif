import Hcertificates from "../../../../components/hcertificates/Hcertificates"


function HomeCertificates() {
  return <>
    <div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[1rem] justify-center">
            <Hcertificates img="/assets/aboutCertificate02.jpg" text="Hello" href="#"/>
            <Hcertificates img="/assets/certificate01.jpg" text="Hello" href="#"/>
            <Hcertificates img="/assets/certificate01.jpg" text="Hello" href="#"/>
            <Hcertificates img="/assets/certificate02.jpg" text="Hello" href="#"/>
            <Hcertificates img="/assets/certificate03.jpg" text="Hello" href="#"/>
            <Hcertificates img="/assets/certificate04.jpg" text="Hello" href="#"/>
            <Hcertificates img="/assets/certificate05.jpg" text="Hello" href="#"/>
            <Hcertificates img="/assets/certificate06.jpg" text="Hello" href="#"/>
        </div>
    </div>
  </>
}

export default HomeCertificates