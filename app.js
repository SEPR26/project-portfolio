let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Напишите ответ правильно. Сколько фильмов вы уже посмотрели", '');

  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false
};


function rememberMyFilms() {
  for (i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', "");
    b = prompt('На сколько оцените его?', "");

    if (a != null && b != null && a.length < 50 && b != '' && a != '') {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log('eror');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log("Мало фильмов смотришь");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы псих");
  } else if (personalMovieDB.count === 0) {
    console.log("Вы воопще фильмы не смотрите");
  } else if (personalMovieDB.count < 0) {
    console.log("Введено некорректное число");
  } else {
    console.log("Eror");
  }
}

detectPersonalLevel();

let showMyDB = (hidden) => {
  if (!hidden) {
    console.log(personalMovieDB);
  }
};

showMyDB(personalMovieDB.privat);

let writeYourGenders = () => {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genders[i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
  }
};

writeYourGenders();