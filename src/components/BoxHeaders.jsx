export default function BoxHeader({ displayForm, boxNumber }) {
  return (
    <div>
      <div className="text-center flex flex-col justify-around text-white color-bg rounded-b-xl h-32">
        <h1 className="text-3xl underline before:content-['📚'] after:content-['📚']">
          Boite à livres N°
          {boxNumber}
        </h1>
        <h3>14 rue saint Alexandre</h3>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={displayForm}
          className="color-bg hover:bg-blue-700 text-1xl text-white font-bold py-2 px-6 rounded m-5 border-black border"
        >
          deposer un livre
        </button>
      </div>
    </div>
  );
}
