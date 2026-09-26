export default function Images() {
    return (
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img
                id="wd-starship"
                width="400px"
                alt="Starship"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img
                id="wd-teslabot"
                src="/images/teslabot.jpg"
                height="200px"
                alt="Tesla Bot (Optimus) humanoid robot"
            />
            <br />
            Another image from the internet:
            <br />
            <img
                id="wd-ai-image"
                src="https://images-assets.nasa.gov/image/PIA12235/PIA12235~medium.jpg"
                width="200px"
                alt="Nearside of the Moon"
            />
            <br />
            An image that matters to me:
            <br />
            <img    
                id="wd-your-image"
                src="/images/maudlewiscat.jpg"    
                height="300px"
                alt="Black Cat with Tulips and Apple Blossoms by Maud Lewis"
            />
        </div>
    );
}