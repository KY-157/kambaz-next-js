export default function VariablesAndConstants() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    const sampleSum = functionScoped + blockScoped;
    let yourLet = "Kelly";
    const yourConst = "Hi " + yourLet;
    return (
        <div id="wd-variables-and-constants">
            <h4>Variables and Constants</h4>
            functionScoped = {functionScoped}
            <br />
            blockScoped = {blockScoped}
            <br />
            constant1 = {constant1}
            <br />
            yourLet = {yourLet}
            <br />
            yourConst = {yourConst}
            <br />
            sampleSum = {sampleSum}
            <hr />
        </div>
    );
}