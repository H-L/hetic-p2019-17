function random_artist_highlight() {
    var random = Math.ceil(Math.random() * 10)-5;
    console.log(random);
    var tableau = $('.programmation_container').children().toArray();

    tableau[2].addClass( "changed" );




}

random_artist_highlight();