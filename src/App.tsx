import "./index.scss";
import { Button, Card, Layout } from "@components";
import { BrowserRouter } from "react-router-dom";
import Section from "@components/section";
import { H1, H2, H3, H4, H5, H6, Title } from "@components/typography";
function App() {
    return (
        <BrowserRouter>
            <Layout
                variant="secondary"
                navbar={{
                    variant: "secondary",
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
                <Section className="flex justify-between" variant="primary">
                    <div>
                        <Title>Text</Title>
                        <H1>Text</H1>
                        <H2>Text</H2>
                        <H3>Text</H3>
                        <H4>Text</H4>
                        <H5>Text</H5>
                        <H6>Text</H6>
                        <Button variant="wild">Button</Button>
                    </div>
                    <div className="flex justify-center w-full">
                        <Card variant="wild">yo</Card>
                    </div>
                </Section>
                <Section className="flex justify-between" variant="secondary">
                    <div>
                        <Title>Text</Title>
                        <H1>Text</H1>
                        <H2>Text</H2>
                        <H3>Text</H3>
                        <H4>Text</H4>
                        <H5>Text</H5>
                        <H6>Text</H6>
                        <Button variant="wild">Button</Button>
                    </div>
                    <div className="flex justify-center w-full">
                        <Card variant="wild">yo</Card>
                    </div>
                </Section>
            </Layout>
            {/* Link={Link} */}
        </BrowserRouter>
    );
}
export default App;
