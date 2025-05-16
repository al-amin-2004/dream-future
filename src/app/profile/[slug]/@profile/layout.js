export default function ProfileLayout({ children }) {
    return (
        <section className="p-14 h-full">
            <div className="h-full bg-gray-400/10 rounded-3xl p-10 backdrop-blur-md">{children}</div>
        </section>
    )
}
