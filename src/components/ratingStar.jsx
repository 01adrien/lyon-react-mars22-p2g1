/* eslint-disable react/no-array-index-key */
export default function RatingStar({ rate }) {
  const yellowStar = new Array(rate).fill('');
  const greyStar = new Array(5 - rate).fill('');

  return (
    <div className="text-xl pb-5 flex">
      {yellowStar.map((_, i) => (
        <p key={i} className="text-yellow-400">
          ★
        </p>
      ))}
      {greyStar.map((_, i) => (
        <p key={i} className="text-slate-400">
          ★
        </p>
      ))}
    </div>
  );
}