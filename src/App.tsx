import { Button } from "@components";
import "./index.scss";
function App() {
    return (
        <div className="flex flex-col gap-16 p-6 bg-root">
            <Button
                type="link"
                variant="wild"
                onHoverAnimation="line"
                // onClickAnimation="none"
            >
                Button
            </Button>
            {/* <Button type="link" onHoverAnimation="line">
                Click here
            </Button> */}
        </div>
    );
}
export default App;
