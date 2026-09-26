export default function AnchorTag() {
    return (
        <>
            <h4>Anchor Tag</h4>
            Please{" "}
            <a href="https://www.lipsum.com" id="wd-lipsum">
                click here
            </a>{" "}
            to get dummy text
            <br />
            <a href="https://github.com/jannunzi" id="wd-github">
                GitHub
            </a>
            <br />
            <a href="https://ceramicartsnetwork.org/" id="wd-your-link">
                Ceramic Arts Network
            </a>
            <br />
            <a 
                href="https://github.com/KY-157" 
                id="wd-your-github"
                target="_blank"
                rel="noreferrer"
            >
                Kelly Yuzichuk's GitHub
            </a>
            <br />
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
                id="wd-ai-link"
            >
                MDN: table element
            </a>
        </>
    );
}