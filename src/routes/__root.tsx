import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => {
        const menuItems = [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
        ];

        return (
            <main className="flex flex-col min-h-screen">
                <header className="p-4 w-full">
                    <nav className="flex items-center justify-between max-w-lg m-auto">
                        {menuItems.map((menuItem) => (
                            <Link
                                className="text-indigo-800 font-semibold hover:scale-105 transition-all duration-300"
                                to={menuItem.path}
                                activeProps={{
                                    className: "text-indigo-900 scale-110",
                                }}
                            >
                                {menuItem.name}
                            </Link>
                        ))}
                    </nav>
                </header>

                <section className="flex-1 flex border border-indigo-200 bg-white rounded-lg mx-8 mb-8 overflow-y-auto shadow-lg">
                    <Outlet />
                </section>

                <TanStackRouterDevtools />
            </main>
        );
    },
});
