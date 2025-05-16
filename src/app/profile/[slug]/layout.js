import { Header, Sidebar } from "./_components";


export default async function ProfileLayout({ params, profile }) {
    const { slug } = await params;
    return (
        <main className="h-screen flex w-full">
            <Sidebar slug={slug}/>
            <div className="w-full h-full flex flex-col">
                <Header slug={slug}/>
                {profile}
            </div>
        </main>
    );
}
