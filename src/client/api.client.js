export default{
    getFilms(){
        const fakeData = [];
        let test = {
            title: "Titre d'un film",
            description: "Description d'un film",
            note: 5,
            date: "12/12/2023",
            castings: ["Brad Pitt", "Angelina Jolie"]
        };
        for(let i = 0; i < 20; i++){
            test.picture = `https://picsum.photos/500/300?image=${i + 10}`;
            console.log(test.picture);
            fakeData.push(test);
        }
        return _fakeData(fakeData);
    },
    addFavorite(newFilm){
        const favoriteFilm = _getLocalStorageFavoriteFilms();
        favoriteFilm.push(newFilm);
        localStorage['favoriteFilms'] = JSON.stringify(newFilm);
    },
    getFavoriteFilms(){
        return _fakeData(_getLocalStorageFavoriteFilms());
    },
    getFilmDetails(){
        const fakeData = {
            title: "Titre d'un film",
            description: "Description d'un film",
            picture: "https://picsum.photos/500/300?image=45",
            note: 5,
            date: "12/12/2023",
            castings: ["Brad Pitt", "Angelina Jolie"]
        };
        return _fakeData(fakeData);
    },
    getActorDetails(){
        const fakeData = {
            name: "Brad",
            surname: "Pitt",
            age: "34",
            films: ["Titanic", "Harry Potter"]
        };
        return _fakeData(fakeData);
    }
}

function _getLocalStorageFavoriteFilms(){
    const localStorageFavoriteFilm = localStorage.getItem('favoriteFilms');
    return localStorageFavoriteFilm && JSON.parse(localStorageFavoriteFilm) || [] ;
}

function _fakeData(fakeDate){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(fakeDate);
        }, 300);
    });
}