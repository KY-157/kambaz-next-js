export default function Flex() {
    return (
        <div id="wd-css-flex">
            <h2>Flex</h2>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
                <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
                <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
                    Column 3
                </div>
            </div>
            <div id="wd-ai-flex" className="wd-flex-row-container">
                <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
                <div className="wd-bg-color-green wd-fg-color-white">Column 2</div>
                <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
                    Column 3 (stretches)
                </div>
            </div>
            <div className="wd-flex-row-container">
                <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">My Column 1</div>
                <div className="wd-bg-color-blue wd-fg-color-white">My Column 2</div>
                <div className="wd-bg-color-yellow wd-width-75px">
                    My Column 3
                </div>
            </div>
        </div>
    );
}