/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
import { useState } from 'react';
import IsbnCodeReader from './IsbnCodeReader';

export default function AddBookForm({
  notFound,
  changeForm,
  showForm,
  title,
  author,
  isbn,
  titleValue,
  isbnValue,
  authorValue,
  fetchBook,
  rate,
  condition,
  status,
  flashIsbn,
}) {
  const getRateFive = () => rate(5);
  const getRateFour = () => rate(4);
  const getRateThree = () => rate(3);
  const getRateTwo = () => rate(2);
  const getRateOne = () => rate(1);

  const [isQuitForm, setIsQuitForm] = useState(false);

  function quitForm() {
    setIsQuitForm(true);
    (function close() {
      setTimeout(showForm, 300);
    }());
  }

  return (
    <div className="books-form-container">
      <form
        className={isQuitForm ? 'abort-form add-book-form' : 'add-book-form'}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190406.png"
          alt="red-cross"
          className="quit-btn cursor-pointer mr-2 mt-1 w-12"
          onClick={quitForm}
        />
        {!status && notFound ? (
          <>
            <p className="text-red-500 animate-pulse underline text-xxs">
              INTROUVABLE
            </p>
            <p className="text-red-500 animate-pulse text-xxs">
              ↓ Merci de rentrer le livre a la main ↓
            </p>
          </>
        ) : (
          ''
        )}
        {notFound ? (
          <>
            <div>
              <p>Auteur</p>
              <input
                className="border w-2/3"
                value={authorValue}
                onChange={author}
                type="text"
                placeholder="auteur du livre"
                required
              />
            </div>
            <div>
              <p>Titre</p>
              <input
                className="border w-2/3"
                value={titleValue}
                onChange={title}
                type="text"
                placeholder="titre du livre"
                required
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="mb-2">ISBN</p>
              <input
                className="border w-2/3"
                value={isbnValue}
                onChange={isbn}
                type="text"
                placeholder="9782221123344"
                required
              />
            </div>
            <div className="isbn-reader">
              <IsbnCodeReader
                fps={60}
                qrbox={250}
                disableFlip={false}
                onDecode={(decodedText, decodedResult) => {
                  flashIsbn(decodedText);
                }}
              />
            </div>
          </>
        )}
        <div>
          <p className="mb-2">etat</p>
          <select onChange={condition} className="">
            <option value="2">bon</option>
            <option value="1">mauvais</option>
            <option value="3">excellent</option>
          </select>
        </div>
        <div>
          <p>note</p>
          <div className="rating rating2 m-2">
            <a href="#5" onClick={getRateFive}>
              ★
            </a>
            <a href="#4" onClick={getRateFour}>
              ★
            </a>
            <a href="#3" onClick={getRateThree}>
              ★
            </a>
            <a href="#2" onClick={getRateTwo}>
              ★
            </a>
            <a href="#1" onClick={getRateOne}>
              ★
            </a>
          </div>
        </div>
        <div className="m 46">
          <button
            type="button"
            onClick={fetchBook}
            className="color-bg hover:bg-blue-700 border-black border text-white font-bold py-1 px-3 rounded"
          >
            ajouter
          </button>
          <p
            onClick={changeForm}
            className="underline text-xs text-slate-500 cursor-pointer mb-10 mt-3"
          >
            {notFound ? 'saisie ISBN' : 'saisie manuelle'}
          </p>
        </div>
      </form>
    </div>
  );
}
