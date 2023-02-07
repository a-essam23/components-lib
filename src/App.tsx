import "./index.scss";
import { Button, Layout } from "@components";
import { BrowserRouter, Link } from "react-router-dom";
import Section from "@components/section";
function App() {
    return (
        <BrowserRouter>
            <Layout
                size="md"
                navbar={{
                    shadowed: true,
                    logo: {
                        primary: <span className="text-control">Title1</span>,
                        secondary: <span className="text-root">Title1</span>,
                        wild: <span className="text-dark">Title1</span>,
                        to: "/",
                    },
                    // size: "lg",
                    items: [
                        { label: "Shop", to: "/shop" },
                        { label: "Cart", to: "/cart" },
                        { label: "Call us", to: "/callus" },
                    ],
                }}
            >
                <Section className="h-screen" variant="primary">
                    <Button variant="wild">Button</Button>
                </Section>
            </Layout>
            {/* Link={Link} */}
        </BrowserRouter>
    );
}
export default App;
