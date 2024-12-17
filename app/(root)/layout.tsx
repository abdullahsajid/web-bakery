import { Footer } from "../_components/footer";
import { NavBar } from "../_components/NavBar";

export default async function SetupLayout({children}:{children:React.ReactNode}){
    return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    </>
    )
}