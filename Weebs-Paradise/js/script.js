function search(url) {
    $('#anime-list').html('');
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        data: {
            'limit': '9',
            'q': $('#search-input').val()
        },
        success: function (result) {
            if (result.results != "") {
                let animes = result.results;
                $.each(animes, function (i, data) {
                    $('#anime-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                    <img class="card-img-top" src="`+ data.image_url + `" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">`+ data.title + `</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+ data.score + `</h6>
                        <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.mal_id + `">See Detail</a>
                    </div>
                    </div>
                    </div>`)
                });
                $('#search-input').val("");
            } else {
                $('#anime-list').html(`
                <div class="col">
                    <h1 class="text-center">`+ result.Error + `</h1>
                </div>`)
            }
        }
    });
}

function searchManga() {
    $('#manga-list').html('');
    $.ajax({
        url: 'https://api.jikan.moe/v3/search/manga',
        type: 'get',
        dataType: 'json',
        data: {
            'limit': '9',
            'q': $('#search-input').val()
        },
        success: function (result) {
            if (result.results != "") {
                let animes = result.results;
                $.each(animes, function (i, data) {
                    $('#manga-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                    <img class="card-img-top" src="`+ data.image_url + `" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">`+ data.title + `</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+ data.score + `</h6>
                        <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.mal_id + `">See Detail</a>
                    </div>
                    </div>
                    </div>`)
                });
                $('#search-input').val("");
            } else {
                $('#manga-list').html(`
                <div class="col">
                    <h1 class="text-center">`+ result.Error + `</h1>
                </div>`)
            }
        }
    });
}

function searchCharacter() {
    $('#character-list').html('');
    $.ajax({
        url: 'https://api.jikan.moe/v3/search/character',
        type: 'get',
        dataType: 'json',
        data: {
            'limit': '9',
            'q': $('#search-input').val()
        },
        success: function (result) {
            if (result.results != "") {
                let animes = result.results;
                $.each(animes, function (i, data) {
                    $('#character-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                    <img class="card-img-top" src="`+ data.image_url + `" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">`+ data.name + `</h5>
                        <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.mal_id + `">See Detail</a>
                    </div>
                    </div>
                    </div>`)
                });
                $('#search-input').val("");
            } else {
                $('#character-list').html(`
                <div class="col">
                    <h1 class="text-center">`+ result.Error + `</h1>
                </div>`)
            }
        }
    });
}

function searchStaff() {
    $('#staff-list').html('');
    $.ajax({
        url: 'https://api.jikan.moe/v3/search/people',
        type: 'get',
        dataType: 'json',
        data: {
            'limit': '9',
            'q': $('#search-input').val()
        },
        success: function (result) {
            if (result.results != "") {
                let animes = result.results;
                $.each(animes, function (i, data) {
                    $('#staff-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                    <img class="card-img-top" src="`+ data.image_url + `" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">`+ data.name + `</h5>
                        <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.mal_id + `">See Detail</a>
                    </div>
                    </div>
                    </div>`)
                });
                $('#search-input').val("");
            } else {
                $('#staff-list').html(`
                <div class="col">
                    <h1 class="text-center">`+ result.Error + `</h1>
                </div>`)
            }
        }
    });
}

$('#search-anime').on('click', function () {
    search("https://api.jikan.moe/v3/search/anime");
});

$('#search-anime').on('keyup', function (e) {
    if (e.keyCode === 13) {
        search("https://api.jikan.moe/v3/search/anime");
    }
});

$('#search-manga').on('click', function(){
    searchManga();
});

$('#search-manga').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchManga();
    }
});

$('#search-character').on('click', function(){
    searchCharacter();
});

$('#search-character').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchCharacter();
    }
});

$('#search-staff').on('click', function(){
    searchStaff();
});

$('#search-staff').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchStaff();
    }
});

$('#anime-list').on('click', '.see-detail', function () { 
    console.log($(this).data('id')); 
    $.ajax({
        url: 'https://api.jikan.moe/v3/anime/' + $(this).data('id'),
        type: 'get',
        dataType: 'json',
        data: {

        },
        success: function (anime) {
            SGenre = "";
            let genre = anime.genres;
            $.each(genre, function(i, data){
                SGenre = SGenre + data.name + ", ";
            });
            SGenre = SGenre.substring(0, SGenre.length - 2);

            $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4"><img src="` + anime.image_url + `" class="img-fluid"></div>
                        <div class="col-md-8">
                        <ul class="list-group">
                        <li class="list-group-item"><h3>` + anime.title_english + `</h3> </li>
                        <li class="list-group-item"> Japanese : ` + anime.title_japanese + `</h3> </li>
                        <li class="list-group-item"> Synopsis : ` + anime.synopsis + `</h3> </li> 
                        <li class="list-group-item"> Score : ` + anime.score + `</h3> </li> 
                        <li class="list-group-item"> Rank : #` + anime.rank + `</h3> </li> 
                        <li class="list-group-item"> Genre : ` + SGenre + `.</h3> </li> 
                        </ul>
                      </div>
                    </div>
                </div>
            `);
        }
    });
});

$('#manga-list').on('click', '.see-detail', function () { 
    console.log($(this).data('id')); 
    $.ajax({
        url: 'https://api.jikan.moe/v3/manga/' + $(this).data('id'),
        type: 'get',
        dataType: 'json',
        data: {

        },
        success: function (manga) {
            SGenre = "";
            let genre = manga.genres;
            $.each(genre, function(i, data){
                SGenre = SGenre + data.name + ", ";
            });
            SGenre = SGenre.substring(0, SGenre.length - 2);

            $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4"><img src="` + manga.image_url + `" class="img-fluid"></div>
                        <div class="col-md-8">
                        <ul class="list-group">
                        <li class="list-group-item"><h3>` + manga.title_english + `</h3> </li>
                        <li class="list-group-item"> Japanese : ` + manga.title_japanese + `</h3> </li>
                        <li class="list-group-item"> Synopsis : ` + manga.synopsis + `</h3> </li> 
                        <li class="list-group-item"> Score : ` + manga.score + `</h3> </li> 
                        <li class="list-group-item"> Rank : #` + manga.rank + `</h3> </li> 
                        <li class="list-group-item"> Genre : ` + SGenre + `.</h3> </li> 
                        </ul>
                      </div>
                    </div>
                </div>
            `);
        }
    });
});

$('#character-list').on('click', '.see-detail', function () { 
    console.log($(this).data('id')); 
    $.ajax({
        url: 'https://api.jikan.moe/v3/character/' + $(this).data('id'),
        type: 'get',
        dataType: 'json',
        data: {

        },
        success: function (character) {
            $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4"><img src="` + character.image_url + `" class="img-fluid"></div>
                        <div class="col-md-8">
                        <ul class="list-group">
                        <li class="list-group-item"><h3>` + character.name + `</h3> </li>
                        <li class="list-group-item"> Japanese : ` + character.name_kanji + `</h3> </li>
                        <li class="list-group-item"> About : ` + character.about + `</h3> </li> 
                        <li class="list-group-item"> Favorite : ` + character.member_favorites + `</h3> </li>
                        </ul>
                      </div>
                    </div>
                </div>
            `);
        }
    });
});

$('#staff-list').on('click', '.see-detail', function () { 
    console.log($(this).data('id')); 
    $.ajax({
        url: 'https://api.jikan.moe/v3/person/' + $(this).data('id'),
        type: 'get',
        dataType: 'json',
        data: {

        },
        success: function (staff) {
            $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4"><img src="` + staff.image_url + `" class="img-fluid"></div>
                        <div class="col-md-8">
                        <ul class="list-group">
                        <li class="list-group-item"><h3>` + staff.name + `</h3> </li>
                        <li class="list-group-item"> Japanese : ` + staff.given_name + staff.family_name +`</h3> </li>
                        <li class="list-group-item"> About : ` + staff.about + `</h3> </li> 
                        <li class="list-group-item"> Favorite : ` + staff.member_favorites + `</h3> </li>
                        </ul>
                      </div>
                    </div>
                </div>
            `);
        }
    });
});