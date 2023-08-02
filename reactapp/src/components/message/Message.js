import "./Message.css";

export default function Message(props) {
  return (
    <div className={"messageBar " + props.class}>
      <p>{props.info}</p>
    </div>
  );
}
