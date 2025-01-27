export default function Message() {
  function handleClick() {
    alert("you clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Click for Message</button>
    </div>
  );
}
