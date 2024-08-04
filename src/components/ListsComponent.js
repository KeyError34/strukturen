import Weorthersee from "../assets/images/Weorthersee.jpg";
import Traunsee from "../assets/images/Traunsee.jpg";
import Achensee from "../assets/images/Achensee.jpg";
const linkWeorthersee =
  "https://ru.wikipedia.org/wiki/%D0%92%D1%91%D1%80%D1%82%D0%B5%D1%80-%D0%97%D0%B5";
const linkTraunsee =
  "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D1%83%D0%BD%D0%B7%D0%B5";
const linkAchensee = "https://ru.wikipedia.org/wiki/%D0%90%D1%85%D0%B5%D0%BD%D0%B7%D0%B5"
function ListsComponent() {
  return (
    <div>
      <ol>
        <li>
         
          <h3>Wörthersee</h3>
          <a href={linkWeorthersee}>
            <img src={Weorthersee} width="560" height="315"></img>
          </a>
        </li>
        <li>
       
          <h3>Traunsee</h3>
          <a href={linkTraunsee}>
            <img src={Traunsee} width="560" height="315"></img>
          </a>
        </li>
        <li>
        <h3>Achensee</h3>
          <a href={linkAchensee}>
            <img src={Achensee} width="560" height="315"></img>
          </a>
        </li>
      </ol>
      <ul>
        <li><b>The Wörthersee</b> , occasionally also Wörther See ( Slovene: Vrbsko jezero ), is the largest lake in Carinthia and at the same time, due to its climatic location, one of the warmest Alpine lakes.</li>
        <li><b>The Traunsee</b> is a lake in the Upper Austrian Salzkammergut on the northern edge of the Northern Limestone Alps at an altitude of 423  m above sea level. The Traun flows through it lengthwise from Ebensee am Traunsee in the south to Gmunden in the north. The Traunsee is the fourth largest Austrian lake at 24.35 km² and the deepest lake in Austria at 191 m. The catchment area of ​​1417 km² is the largest of all Austrian lakes. The Traunsee, owned by the Austrian Federal Forests, is an important tourist destination in Upper Austria.</li>
        <li><b>The Achensee</b> is located north of Jenbach in Tyrol , 380 m above the Inn Valley . Together with the Achen Valley, it forms the border between the Karwendel Mountains in the west and the Brandenberg Alps in the east.

The Achensee is the largest lake in Tyrol , with a depth of up to 133 m . It has excellent water quality (almost drinking water level ) and visibility of up to ten meters underwater. Its water temperature is low, as is typical for a mountain lake, and rarely exceeds 20 °C. The Achensee is sometimes referred to as the Tyrolean Sea due to its size and the wind conditions that are ideal for sailors and surfers .

Lakeside towns include the holiday resorts of Pertisau , Haus Seespitz (former hotel), Maurach and Buchau in the south, which belong to the municipality of Eben am Achensee, and the municipality of Achenkirch with the districts Scholastika (hotel) and Achenseehof (beach resort) in the north.</li>
      </ul>
    </div>
  );
}
export default ListsComponent;
