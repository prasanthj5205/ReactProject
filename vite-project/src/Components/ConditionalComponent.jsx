export default function ConditionalComponent() {
  var result = true;
  if (result) {
    return <h1>In if condition only</h1>;
  } else {
    return <h1> in else only</h1>;
  }
}
