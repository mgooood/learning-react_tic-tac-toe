export default function Log({ turns }) {
  return (
    <div id='log'>
      {turns.length > 0 && <h5>Number of Turns: {turns.length}</h5>}
      <ol>
        {turns.map((turn) => {
          const { square, player } = turn;
          const { row, col } = square;
          return (
            <li
              key={`${row}${col}`}
            >{`Player ${player} selected square (${row}, ${col})`}</li>
          );
        })}
      </ol>
    </div>
  );
}
