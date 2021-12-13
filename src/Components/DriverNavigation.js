export default function DriverNavigation({
  startOffset,
  setStartOffset,
  endOffset,
  setEndOffset,
  drivers,
}) {
  function prevButtonHandler() {
    setStartOffset(startOffset - 5);
    setEndOffset(endOffset - 5);
  }

  function nextButtonHandler() {
    setStartOffset(startOffset + 5);
    setEndOffset(endOffset + 5);
  }
  return (
    <div className="drivers__navigation">
      <button disabled={startOffset <= 0} onClick={prevButtonHandler}>
        Previous
      </button>
      <button
        disabled={endOffset >= drivers.length}
        onClick={nextButtonHandler}
      >
        Next
      </button>
    </div>
  );
}
