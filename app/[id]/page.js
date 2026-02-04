import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    try {
        // Dynamically import the component from the examples directory
        // Note: We use a relative path pattern that webpack can analyze
        const module = await import(`@/examples/${id}.js`);

        // Find the component: prefer default export, otherwise take the first named export
        const Component = module.default || Object.values(module)[0];

        if (!Component) {
            return <div>Error: No component found in examples/{id}.js</div>;
        }

        return <Component />;
    } catch (error) {
        console.error("Failed to load example:", error);
        return notFound();
    }
}
