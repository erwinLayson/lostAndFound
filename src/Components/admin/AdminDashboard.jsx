
/* Componensts */
import { Navbar } from "./Navigation/Navbar";
import { CorouselCard } from "./MainContent/CorouselCard";
import { ItemList } from "./MainContent/ItemList";

export function AdminDashboard() {
    return (
        <>
            <Navbar />
            <section className="pt-[100px] w-full px-[20px] pb-[30px] flex flex-col">
                <CorouselCard />
                <ItemList />
            </section>
        </>  
    );
}