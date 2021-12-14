import "./DriverNavigation.scss";

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
        &lsaquo; Previous Page
      </button>
      <button
        disabled={endOffset >= drivers.length}
        onClick={nextButtonHandler}
      >
        Next Page &rsaquo;
      </button>
    </div>
  );
}
