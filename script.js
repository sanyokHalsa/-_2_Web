// Використовуючи JS, HTML та СSS створити:
//     • Об’єкт для зберігання даних про фільм (Id, назва, режисер, URL-трейлеру, рік
// випуску, касові збори).
// • На основі об’єкту фільму створити новий об’єкт, який перевизначає метод
// toString().
// • Об’єкт для зберігання даних про колекцію фільмів, цей об’єкт повинен містити
// конструктор та метод для знаходження всіх фільмів вказаного режисера.
// • Відобразити дані про фільми вказаного режисера на сторінці.
class Film{
    constructor(id, name, director, url, year, earnings) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.url = url;
        this.year = year;
        this.earnings = earnings;
    }
}
let FilmTs = Object.create(Film);
FilmTs.toString = function (){
    return `ID: ${this.id} NAME: ${this.name} URL: ${this.url}`
}
class FilmStorage{
    constructor() {
        this.storage = [];
    }
    findByDirector(director){
        let res_arr = [];
        for(let film of this.storage){
            if(film.director == director){
                res_arr.push(film);
            }
        }
        return res_arr;
    }
    addFilms(film_Arr){
        for(let film of film_Arr){
            this.storage.push(film);
        }
    }
}
let Domion = new FilmStorage();
let film_1 = new Film(2323, "Опенгеймер","Крістофер Нолан","https://youtu.be/eZYD5NRum4A",2023, "Невідомо");
let film_2 = new Film(1542, "Берсерк", "Міура Кентаро", "https://youtu.be/pOXMt5O4Ly4", 1990, "Невідомо");
let film_3 = new Film(1843, "Дюнкерк", "Крістофер Нолан","https://youtu.be/2oTQSj5AL84",2017,527000000);
let film_4 = new Film(4242, "1917", "Сем Мендес","https://youtu.be/Q6A48-0zOLY", 2019,384919389);
let temp_film_arr = [film_1,film_2,film_3,film_4];
Domion.addFilms(temp_film_arr);

let RenderFilms = function (storage_name){
    document.querySelector(".film_holder").innerHTML = "";
    for(let film of storage_name.storage){
        document.querySelector(".film_holder").innerHTML += `<div class="card"><h2 class="film_name">${film.name}</h2><h3 class="director">${film.director}</h3><h3 class="earnings">${film.earnings}$</h3><h4 class="id">${film.year}</h4><a href=${film.url}>Трейлер</a></div>`;
    }
}
RenderFilms(Domion);

document.querySelector("#search_btn").addEventListener("click", ()=>{
    let res =  Domion.findByDirector(document.querySelector("#search_form").value);
    let f_s = document.querySelector(".found_holder")
    f_s.innerHTML = "";
    for(let film of res){
        f_s.innerHTML += `<div class="card"><h2 class="film_name">${film.name}</h2><h3 class="director">${film.director}</h3><h3 class="earnings">${film.earnings}$</h3><h4 class="id">${film.year}</h4><a href=${film.url}>Трейлер</a></div>`;
    }
})