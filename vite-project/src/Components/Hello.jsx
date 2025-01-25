function Hello({ personDetails }) {
  return (
    <div>
      <h1>
        {personDetails.message} {personDetails.name} your seat number are
        {personDetails.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
