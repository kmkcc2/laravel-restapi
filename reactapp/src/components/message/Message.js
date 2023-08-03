import "./Message.css";

export default function Message(props) {
  return (
    //defined classes are error, warning and success
    <div className={"messageBar " + props.class}>
      <p>{props.info}</p>
    </div>
  );
}
export function showDialog(){
    document.querySelector(".messageBar").style.transform = "translateY(100px)";
}
