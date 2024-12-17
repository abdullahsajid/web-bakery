import ContactAddress from "@/app/_components/Contact-Address";
import ContactForm from "@/app/_components/Contact-form";
import ContactHero from "@/app/_components/Contact-hero";

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