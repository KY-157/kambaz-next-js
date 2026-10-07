import "./index.css"
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import "./MediaQueriesDemo.css"
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconSampler";

export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
                Style attribute allows configuring look and feel right on the
                element. Although it&apos;s very convenient it is considered bad
                practice and you should avoid using the style attribute.
            </p>
            <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
                The style attribute accepts CSS properties directly on an element,
                such as a purple background with white text, overriding rules
                from any external stylesheet.
            </p>
            <p style={{ backgroundColor: "green", color: "yellow" }}>
                This paragraph was added to confirm personal understanding of the 
                style attribute. If it were up to me, this wouldn't be in yellow text.
            </p>
            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>
                <p id="wd-id-selector-1">
                    Instead of changing the look and feel of all the 
                    elements of the same name, e.g., P, we can refer to a 
                    specific element by its ID
                </p>
                <p id="wd-id-selector-2">
                    Here&apos;s another paragraph using a different ID and a 
                    different look and feel
                </p>
                <p id="wd-ai-id-selector">
                    This is one more sample paragraph, styled by its own ID
                    with a separate background and text color.
                </p>
                <p id="wd-id-selector-3">
                    It's crazy how many colors you can choose from with CSS. 
                    This page is turning into a little rainbow.
                </p>
            </div>
            <div>
                <h3>Class selectors</h3>
                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you can use an 
                    element&apos;s CLASS attribute
                </p>        
                <h4 className="wd-class-selector">
                    This heading has same style as paragraph above
                </h4>
                <p className="wd-ai-class-selector">
                    This paragraph uses a different CLASS with its own
                    background and text color.
                </p>
                <h4 className="wd-ai-class-selector">
                    This heading shares the style of the paragraph above
                </h4>
                <p className="wd-your-class">
                    I quite like the pale color palettes and using this CLASS 
                    attribute means that the following header will have the same style.
                </p>
                <h4 className="wd-your-class">
                    This heading also has the same style. How nifty.
                </h4>
            </div>
            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular 
                        places in the document
                        <p className="wd-selector-3">
                            This paragraph&apos;s red background is referenced as 
                            <br />
                            .selector-2 .selector3 
                            <br />
                            <span className="wd-selector-4">
                                Whereas this span is a direct child of its parent
                            </span>
                            <br />
                            <span className="wd-ai-selector-5">
                                This span is a descendant of .wd-selector-1 through
                                .wd-selector-3
                            </span>
                            <br />
                            You can combine these relationships to create specific 
                            styles depending on the document structure 
                        </p>
                        <p className="wd-selector-5">
                            To test this css styling concept based on document structure 
                            I have made a child selector to wd-selector-2 but is not tested 
                            to be a child of wd-selector-3
                        </p>
                    </div>
                </div>
            </div>
            <p id="wd-ai-cascade" className="wd-ai-cascade">
                This paragraph matches a tag rule, a class rule and an ID rule
                that each set a different background color.
            </p>
            <ForegroundColors />
            <BackgroundColors />
            <Borders />
            <Padding />
            <Margins />
            <BoxModel />
            <Corners />
            <Dimensions />
            <Display />
            <Positions />
            <Zindex />
            <Float />
            <GridLayout />
            <Flex />
            <MediaQueriesDemo />
            <ReactIconsSampler />
            <p>
                <a href="/labs/lab2/tailwind">Open Tailwind CSS lab</a>
            </p>
        </div>
    );
}