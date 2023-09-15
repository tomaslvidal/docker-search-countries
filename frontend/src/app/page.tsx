import { Search }  from "@/components/SeachCountries"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-2xl mx-auto">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <Search />
                </div>
            </div>
        </main>
    )
}
