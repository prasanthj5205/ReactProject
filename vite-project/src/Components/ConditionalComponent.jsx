export default function ConditionalComponent() {
  var result = true;
  var sample = <h1>In if condition only</h1>;
  if (result) {
    return sample;
  } else {
    return <h1> in else only</h1>;
  }
}
