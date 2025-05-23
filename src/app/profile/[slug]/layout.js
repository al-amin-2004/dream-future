import { Header, Sidebar } from "./_components";

export default async function ProfileLayout({ params, profile }) {
    const { slug } = await params;
    return (
        <main className="md:h-screen flex w-full">
            <Sidebar slug={slug} />

            <div className="w-full h-full md:h-auto md:grid grid-rows-12">
                <Header slug={slug} />
                {profile}
            </div>
        </main>
    );
}
