const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false
};


for (i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', "");
  b = prompt('На сколько оцените его?', "");
  
  if (a != null && b != null && a.length < 50 && b != '' && a != '') {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } 
  else {
    console.log('eror');
    i--;
  }
}

if (personalMovieDB.count < 10 && personalMovieDB.count > 0){
console.log("Мало фильмов смотришь");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
  console.log("Вы псих");
} else if (personalMovieDB.count === 0){
  console.log("Вы воопще фильмы не смотрите");
} else if (personalMovieDB.count < 0){
  console.log("Введено некорректное число");
} else {
  console.log("Eror");
}


console.log(personalMovieDB);