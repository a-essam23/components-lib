import { Button, Toggle } from "@components";
import BlockButton from "@components/button/block";
import "./index.scss";
function App() {
    return (
        <div className="flex flex-col gap-16 p-6 bg-root">
            {/* <Button variant="wild"> Button</Button>
            {/* <Button type="link" onHoverAnimation="line">
                Click here
            </Button> */}
            <BlockButton
                variant="primary"
                onClick={() => console.log(11)}
                style={{}}
            >
                Button
            </BlockButton>
            <Toggle size="lg"></Toggle>
        </div>
    );
}
export default App;
