import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <div className="flex justify-center items-center m-auto">
            <h3 className="text-gray-800 font-bold">
                Bem-vindos a tela Inicial !!
            </h3>
        </div>
    );
}
