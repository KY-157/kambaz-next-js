export default function Tables() {
    return (
        <div id="wd-tables">
            <h4>Table Tag</h4>
            <table border={1} width="100%">
                <thead>
                    <tr>
                        <th>Quiz</th>
                        <th align="center">Topic</th>
                        <th align="center">Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td align="center">HTML</td>
                        <td align="center">2/3/21</td>
                        <td align="right">85</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td align="center">CSS</td>
                        <td align="center">2/10/21</td>
                        <td align="right">90</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td align="center">JavaScript</td>
                        <td align="center">2/17/21</td>
                        <td align="right">95</td>
                    </tr>
                    <tr>
                        <td>Q4</td>
                        <td align="center">DOM</td>
                        <td align="center">2/24/21</td>
                        <td align="right">88</td>
                    </tr>
                    <tr>
                        <td>Q5</td>
                        <td align="center">React Components</td>
                        <td align="center">3/3/21</td>
                        <td align="right">92</td>
                    </tr>
                    <tr>
                        <td>Q6</td>
                        <td align="center">State and Props</td>
                        <td align="center">3/10/21</td>
                        <td align="right">79</td>
                    </tr>
                    <tr>
                        <td>Q7</td>
                        <td align="center">React Hooks</td>
                        <td align="center">3/17/21</td>
                        <td align="right">84</td>
                    </tr>
                    <tr>
                        <td>Q8</td>
                        <td align="center">Routing</td>
                        <td align="center">3/24/21</td>
                        <td align="right">91</td>
                    </tr>
                    <tr>
                        <td>Q9</td>
                        <td align="center">Node.js</td>
                        <td align="center">3/31/21</td>
                        <td align="right">96</td>
                    </tr>
                    <tr>
                        <td>Q10</td>
                        <td align="center">MongoDB</td>
                        <td align="center">4/7/21</td>
                        <td align="right">90</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Average</td>
                        <td align="right">89</td>
                    </tr>
                </tfoot>
            </table>
            <div id="wd-your-table">
                <h4>Weekly Schedule</h4>
            <table border={1} width="100%">
                <thead>
                    <tr>
                        <th align="center">Day</th>
                        <th align="center">Activity</th>
                        <th align="center">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td align="center">Work</td>
                        <td align="right">08:00-16:00</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td align="center">Work</td>
                        <td align="right">08:00-15:00</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td align="center">CY5200 Lecture</td>
                        <td align="right">15:00-16:00</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td align="center">Work</td>
                        <td align="right">08:00-16:00</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td align="center">CS5610 Lecture</td>
                        <td align="right">18:00-21:00</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td align="center">Work</td>
                        <td align="right">08:00-16:00</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td align="center">Work</td>
                        <td align="right">08:00-16:00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td align="center"colSpan={3}>Overall = Tired</td>
                    </tr>
                </tfoot>
            </table>
            </div>
        </div>
        
    );
}