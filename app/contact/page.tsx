import ContactAddress from "../_components/Contact-Address";
import ContactForm from "../_components/Contact-form";
import ContactHero from "../_components/Contact-hero";
const Contact = () => {
    return (
        <div>
            <ContactHero/>
            <div className="flex justify-between px-10 pt-7 max-sm:flex-col">
                <ContactAddress/>
                <ContactForm/>
            </div>
        </div>
    )
};

export default Contact;