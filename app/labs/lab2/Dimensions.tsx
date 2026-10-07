export default function Dimensions() {
    return (
        <div id="wd-css-dimensions">
            <h2>Dimension</h2>
            <div>
                <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
                <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
                    Landscape
                </div>
                <div className="wd-dimension-square wd-bg-color-red">Square</div>
                <div className="wd-dimension-square wd-bg-color-blue">
                    Confirming the Square class remains square
                </div>
                <div id="wd-ai-dimension" className="wd-ai-dimension-box">
                    This is a deliberately long sentence that overflows its small fixed-size box, making the declared width and height obvious.
                </div>
            </div>
        </div>
    );
}