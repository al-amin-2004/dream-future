export default function ProfileLayout({ children, header, sidebar, profile }) {
    return (
        <main className="text-dark-text h-screen">
            {/* {children} */}

            <section className="flex w-full h-full">
                {sidebar}

                <div className="w-full">
                    {header}
                    {profile}
                </div>
            </section>

        </main>
    );
}
