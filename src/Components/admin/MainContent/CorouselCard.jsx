import { DashboardCard } from "./DashboardCard"
import { AdminFilter } from "./adminFilter"

export function CorouselCard() {
    return (
        <>
            <section className="flex flex-col w-full gap-8">
                <h1 className="font-bold text-2xl">Dashoard Overviews</h1>
                <div className="w-full shadow-sm shadow-blue-900 rounded-lg bg-blue-200/50 flex flex-col justify-center py-4 px-10">
                    <p className="text-bold text-md text-blue-400/90">Admin Contact</p>
                    <span className="text-blue-900/90">security@sksu.edu.ph</span>
                    <span className="text-blue-900/90">Security Office, Main Building</span>
                </div>
                <DashboardCard />
                <AdminFilter />
            </section>       
        </>
    )
}