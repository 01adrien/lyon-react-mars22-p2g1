/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */
import vintage from '../assets/vintage.jpg';
import { useEffect, useState } from 'react';
import RatingStar from '../components/ratingStar';
import redHeart from '../assets/favorite_heart_red.svg';
import whiteHeart from '../assets/favorite_heart_white.svg';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../styles/favoriteBooks.css';

export default function FavoriteBooks() {
  let heart = redHeart;
  const [favoritesList, setFavoritesList] = useState([]);
  function handleClickDeleteBookFromFavorites(book) {
    const newFavoritesList = favoritesList.slice();
    localStorage.removeItem(book.id);
    setFavoritesList(newFavoritesList.filter((b) => b.id !== book.id));
    heart = whiteHeart;
    toast(
      `Vous avez supprimé de vos favoris :
           \n${book.title} de ${book.author}`,
      {
        position: 'top-center',
        icon: '📖',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }

  useEffect(() => {
    const booksFavsList = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      booksFavsList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    setFavoritesList(booksFavsList);
  }, []);

  return (
    <div className="favoriteBooks">
      <ToastContainer />
      <h2>Mes livres favoris</h2>
      {favoritesList.map((book) => (
        <div className="bookCard" key={book.id}>
          <Link to={`/bookdetail/${book.id}`}>
            <div className="bookContainer">
              <img
                src={
                  book.picture === null || book.picture === 'None'
                    ? vintage
                    : book.picture
                }
                alt={book.title}
              />
              <div className="bookDatas">
                <p className="title">{book.title}</p>
                <p className="author">{book.author}</p>
                <RatingStar
                  rate={book.note}
                  padding={'pb-2'}
                  size={'text-2xl'}
                />
              </div>
            </div>
          </Link>
          <button
            className="heart"
            type="button"
            onClick={() => handleClickDeleteBookFromFavorites(book)}
          >
            <img src={heart} alt={book.title} />
          </button>
        </div>
      ))}
    </div>
  );
}