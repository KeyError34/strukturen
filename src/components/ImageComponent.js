import AustriaLakes from "../assets/images/Austria_10_largest_lakes.png";
const linkAustriaLakes  = "https://en.wikipedia.org/wiki/List_of_lakes_of_Austria"
function ImageComponent() {
  return (<a href={linkAustriaLakes}><img src={AustriaLakes} width="560" height="315" ></img></a>)
}
export default ImageComponent;
