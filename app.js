const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Напишите ответ правильно. Сколько фильмов вы уже посмотрели", '');
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
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
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введие ваши любимые жанры через запятую`).toLowerCase();

      if (genres === '' || genres == null) {
        console.log("Вы ввели некорректные данные, или воопще их не ввели");
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i+1} - это ${item}`);
    });
  }
};