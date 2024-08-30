import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <div className="flex flex-col justify-center items-center m-auto">
            <p className="text-gray-800 font-bold text-center">
                Bem-vindos ao Nosso servidor
            </p>
            <p className="text-4xl mt-2">😁✌️</p>
        </div>
    );
}
