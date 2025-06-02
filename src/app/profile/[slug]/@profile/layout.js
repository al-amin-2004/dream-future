export default function ProfileLayout({ children }) {
    return (
        <section className="row-span-11 p-3 md:p-14 md:h-full">
            <div className="md:h-full md:bg-gray-400/10 rounded-3xl p-1.5 sm:p-5 md:p-10 backdrop-blur-md ">{children}</div>
        </section>
    )
}
