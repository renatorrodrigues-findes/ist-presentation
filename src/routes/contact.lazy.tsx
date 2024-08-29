import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
    component: Contact,
});

function Contact() {
    return (
        <div className="flex justify-center items-center m-auto">
            <div className="flex flex-col items-center gap-4">
                <h3 className="text-gray-800 font-bold">
                    Para mais telas como essa so entrar em contato
                </h3>
                <a
                    href="https://www.linkedin.com/in/renato-rrodrigues/"
                    target="_blank"
                    className="font-bold text-blue-400"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
