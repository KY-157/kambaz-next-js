export default function TailwindFilters() {
    // The lab uses reactjs.jpg, while this example has been changed for personalization
    const src = "/images/maudlewiscat.jpg";
    return (
        <div>
            <h2>Blurs</h2>
            <div className="flex">
                <img className="blur-none w-1/4" src={src} alt="blur none" />
                <img className="blur-sm w-1/4" src={src} alt="blur sm" />
                <img className="blur-lg w-1/4" src={src} alt="blur lg" />
                <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
            </div>
            <h3>Grayscale and brightness</h3>
            <div id="wd-ai-filters" className="flex">
                <img className="grayscale w-1/4" src={src} alt="grayscale" />
                <img className="grayscale-0 w-1/4" src={src} alt="grayscale 0" />
                <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
                <img className="brightness-150 w-1/4" src={src} alt="brightness 150" />
            </div>
            <h3>Contrasts</h3>
            <div id="wd-my-filters" className="flex">
                <img className="contrast w-1/4" src={src} alt="contrast none" />
                <img className="contrast-50 w-1/4" src={src} alt="contrast 50" />
                <img className="contrast-20 w-1/4" src={src} alt="contrast 20" />
                <img className="contrast-0 w-1/4" src={src} alt="contrast 0" />
            </div>
        </div>
    );
}