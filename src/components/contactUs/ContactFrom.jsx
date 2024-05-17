
function ContactFrom() {
  return <>
    <div className="fromSection lg:w-[350px] w-full">
        <form>
            <div className="contactFrom lg:text-[16px] text-[14px]">
                <div>
                    <input type="email" required placeholder="E-mail*"/>
                </div>
                <div>
                    <input type="text" required placeholder="The phone number*"/>
                </div>
                <div>
                    <textarea required placeholder="Fill in the content*"></textarea>
                </div>
                <div className="mt-5">
                    <a className="subBtn bg-basered text-basewhite" href="#">Submit</a>
                </div>
            </div>
        </form>
    </div>
  </>
}

export default ContactFrom