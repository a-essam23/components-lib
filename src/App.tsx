import "./index.scss";
import { Button, Layout } from "@components";
import { BrowserRouter, Link } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Layout
                size="lg"
                navbar={{
                    logo: { label: "Title" },
                    items: [
                        { label: "Shop", to: "/shop" },
                        { label: "Cart", to: "/cart" },
                        { label: "Call us", to: "/callus" },
                    ],
                }}
            >
                <Button variant="wild" size="md" className="">
                    Click here!
                </Button>
            </Layout>
            {/* Link={Link} */}
        </BrowserRouter>
    );
}
export default App;
