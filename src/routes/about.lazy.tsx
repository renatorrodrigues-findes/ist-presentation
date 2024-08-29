import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
    component: About,
});

function About() {
    return (
        <div className="flex justify-center items-center m-auto">
            <div className="flex flex-col items-center gap-4">
                <p className="text-gray-800 font-bold">
                    Provavelmente se chegamos ate aqui é porque deu certo
                </p>

                <button className="px-4 py-2 bg-indigo-400 rounded-lg text-white font-semibold shadow-md hover:scale-110 transition-all duration-300">
                    Hora de Comemorar !
                </button>
            </div>
        </div>
    );
}
