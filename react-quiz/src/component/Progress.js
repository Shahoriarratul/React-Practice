function Progress({ index, numQuestions, points, maxPossiblePoint, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index}</strong>/{numQuestions}
      </p>
      <p>
        <strong> {points}</strong>/{maxPossiblePoint}
      </p>
    </header>
  );
}

export default Progress;
