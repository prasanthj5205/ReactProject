export default function ConditionalComponent() {
  var result = true;
  if (result) {
    return <h1>In if condition</h1>;
  } else {
    return <h1> in else</h1>;
  }
}
