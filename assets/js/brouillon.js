$.each(pl.playlists, function (key, value) {

    // Créer une playlist button
    var elem_plBtn = $("<button></button>");
    elem_plBtn.html(value.title);
    elem_plBtn.attr("data-key", key);
    elem_playlistsBtns.append(elem_plBtn);

    // Créer la playlist Track list
    var elem_plTracksList = $("<div></div>");

    if (key > 0) {
        elem_plTracksList.css({ display: "none" });
        // elem.plTracksList.hide();

    }

    // Injection du titre de la playlist
    var elem_plTracksList_h3 = $("<h3></h3>");
    elem_plTracksList_h3.html(value.title);

    elem_plTracksList.append(elem_plTracksList_h3);

    // Injection de la liste des tracks
    var elem_ul = $("<ul></ul>");
    elem_plTracksList.append(elem_ul);

    // Boucle sur la liste des tracks
    $.each(value.tracks, function (key_1, track) {
        // console.log(track);
        var li_track = $("<li></li>");
        var div_artist = $("<div></div>");
        var div_title = $("<div></div>");

        div_artist.html(track.artist);
        div_title.html(track.title);

        li_track.append(div_artist);
        li_track.append(div_title);
        elem_ul.append(li_track);
    });
