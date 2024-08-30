import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export const Route = createLazyFileRoute("/about")({
    component: About,
});

function About() {
    const [isExploding, setIsExploding] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function handleExplode() {
        if (isExploding || isLoading) return;

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsExploding(true);

            setTimeout(() => {
                setIsExploding(false);
            }, 3000);
        }, 3000);
    }

    return (
        <div
            className={`flex justify-center items-center m-auto ${isLoading ? "animate-spin" : ""}`}
        >
            <div className="flex flex-col items-center gap-4">
                <p className="text-gray-800 font-bold">
                    Provavelmente se chegamos ate aqui é porque deu certo
                </p>
                {isExploding && (
                    <ConfettiExplosion particleCount={200} duration={4000} />
                )}

                <button
                    className="px-4 py-2 bg-indigo-400 rounded-lg text-white font-semibold shadow-md hover:scale-110 transition-all duration-300"
                    onClick={handleExplode}
                    disabled={isLoading}
                >
                    Hora de Comemorar !
                </button>
            </div>
        </div>
    );
}
