"use client";

export default function YourForm() {
    return (
        <div id="wd-your-forms">
            <h4>Your Form</h4>
            <form
                id="wd-your-form"
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <h5>Text Fields</h5>
                <label htmlFor="wd-your-first-name">First name: </label>
                <input
                    type="text"
                    placeholder="Jane"
                    defaultValue="Kelly"
                    title="KELLY"
                    id="wd-your-first-name"
                />
                <br />
                <label htmlFor="wd-your-last-name">Last name: </label>
                <input
                    type="text"
                    placeholder="Doe"
                    defaultValue="Yuzichuk"
                    title="YUZICHUK"
                    id="wd-your-last-name"
                />
                <br />
                <label htmlFor="wd-your-studentID">StudentID: </label>
                <input
                    type="number"
                    defaultValue="003180514"
                    id="wd-your-studentID"
                />
                <br />

                <h5>Text Area</h5>
                <label htmlFor="wd-your-bio">Biography: </label>
                <br />
                <textarea
                    id="wd-your-bio"
                    cols={30}
                    rows={10}
                    defaultValue="I am a cybersecurity graduate student taking this course to learn more about web development. 
                    I hope to apply these new skills towards future projects."
                />
                <br />

                <h5 id="wd-your-radio-buttons">Radio Buttons</h5>
                <label>Class standing:</label>
                <br />
                <input
                    type="radio"
                    name="wd-your-standing"
                    id="wd-your-standing-freshman"
                />
                <label htmlFor="wd-your-standing-freshman">Freshman</label>
                <br />
                <input
                    type="radio"
                    name="wd-your-standing"
                    id="wd-your-standing-sophomore"
                />
                <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
                <br />
                <input
                    type="radio"
                    name="wd-your-standing"
                    id="wd-your-standing-junior"
                />
                <label htmlFor="wd-your-standing-junior">Junior</label>
                <br />
                <input
                    type="radio"
                    name="wd-your-standing"
                    id="wd-your-standing-senior"
                />
                <label htmlFor="wd-your-standing-senior">Senior</label>
                <br />
                <input
                    type="radio"
                    name="wd-your-standing"
                    id="wd-your-standing-graduate"
                    defaultChecked
                />
                <label htmlFor="wd-your-standing-graduate">Graduate</label>
                <br />
                <label>Enrollment status:</label>
                <br />
                <input
                    type="radio"
                    name="wd-your-enrollment"
                    id="wd-your-enrollment-full-time"
                />
                <label htmlFor="wd-your-enrollment-full-time">Full-time</label>
                <br />
                <input
                    type="radio"
                    name="wd-your-enrollment"
                    id="wd-your-enrollment-part-time"
                    defaultChecked
                />
                <label htmlFor="wd-your-enrollment-part-time">Part-time</label>
                <br />

                <h5 id="wd-your-checkboxes">Checkboxes</h5>
                <label>Favorite Hobby Interests:</label>
                <br />
                <input
                    type="checkbox"
                    name="wd-your-interests"
                    id="wd-your-interest-pottery"
                    defaultChecked
                />
                <label htmlFor="wd-your-interest-pottery">Pottery</label>
                <br />
                <input
                    type="checkbox"
                    name="wd-your-interests"
                    id="wd-your-interest-crocheting"
                    defaultChecked
                />
                <label htmlFor="wd-your-interest-crocheting">Crocheting</label>
                <br />
                <input
                    type="checkbox"
                    name="wd-your-interests"
                    id="wd-your-interest-birdwatching"
                />
                <label htmlFor="wd-your-interest-birdwatching">Birdwatching</label>
                <br />
                <input
                    type="checkbox"
                    name="wd-your-interests"
                    id="wd-your-interest-Painting"
                    defaultChecked
                />
                <label htmlFor="wd-your-interest-Painting">Painting</label>
                <br />

                <h5 id="wd-your-dropdowns">Dropdowns</h5>
                <label htmlFor="wd-your-select-one-major">Major: </label>
                <br />
                <select id="wd-your-select-one-major" defaultValue="CY">
                    <option value="CS">Computer Science</option>
                    <option value="DS">Data Science</option>
                    <option value="IS">Information Science</option>
                    <option value="CY">Cybersecurity</option>
                </select>
                <br />
                <label htmlFor="wd-your-select-many-topics">
                    Web Development topics you want to learn:{" "}
                </label>
                <br />
                <select
                    multiple
                    id="wd-your-select-many-topics"
                    defaultValue={["JS", "CSS"]}
                >
                    <option value="JS">JavaScript</option>
                    <option value="CSS">CSS</option>
                    <option value="JSON">JSON</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="HTML">HTML</option>
                </select>
                <br />

                <h5>Typed Fields</h5>
                <label htmlFor="wd-your-email">Email: </label>
                <input
                    type="email"
                    placeholder="jane@northeastern.edu"
                    defaultValue="yuzichuk.k@northeastern.edu"
                    id="wd-your-email"
                />
                <br />
                <label htmlFor="wd-your-graduation-year">
                    Graduation year:{" "}
                </label>
                <input
                    type="number"
                    placeholder="2028"
                    defaultValue="2027"
                    min={2027}
                    max={2029}
                    id="wd-your-graduation-year"
                />
                <br />
                <label htmlFor="wd-your-dob">Date of birth: </label>
                <input
                    type="date"
                    defaultValue="2000-04-15"
                    min="1990-01-01"
                    max="2004-01-01"
                    id="wd-your-dob"
                />
                <br />
                <label htmlFor="wd-your-excitement">
                    How excited you are for this course (0-10):{" "}
                </label>
                <input
                    type="range"
                    defaultValue="9"
                    min="0"
                    max="10"
                    id="wd-your-excitement"
                />
                <br />

                <h5>Buttons</h5>
                <button id="wd-html-your-button-save" type="submit">
                    Save
                </button>
                <button id="wd-html-your-button-cancel" type="button">
                    Cancel
                </button>
            </form>
        </div>
    );
}
