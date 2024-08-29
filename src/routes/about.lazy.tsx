import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
    component: About,
});

function About() {
    return (
        <div>
            <h3>About</h3>
        </div>
    );
}
