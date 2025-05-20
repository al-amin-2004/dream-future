export default function ProfileLayout({ children }) {
    return (
        <section className="p-2 md:p-14 md:h-full">
            <div className="md:h-full bg-gray-400/10 rounded-3xl p-5 md:p-10 backdrop-blur-md">{children}</div>
        </section>
    )
}
