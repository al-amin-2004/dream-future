import { ThemeToggleBtn } from "@/components/ui/ThemeToggleBtn";


const Header = () => {


    return (
        <header className="px-8 py-2 flex justify-between border-b border-dark-border">
            <div>
                <h1 className="text-4xl font-medium">Dream Future</h1>
                <p className="text-dark-primary">A belevable Comitti limited</p>
            </div>

            <div className="flex gap-3 items-center">
                <ThemeToggleBtn />
                <h2>User name</h2>
            </div>
        </header>
    );
};

export default Header