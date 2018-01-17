/* Create a cache object */
var cache = new LastFMCache();

/* Create a LastFM object */
var lastfm = new LastFM({
    apiKey    : apiKey,
    apiSecret : apiSecret,
    cache     : cache
});

setInterval(getRecentTrackPerUser, refreshRate);
initPage();

function getRecentTrackPerUser()
{
    users.forEach(function(username){
        lastfm.user.getRecentTracks({user: username, limit: 1, extended: 1}, {success: function(data){

            var timestamp = typeof(data.recenttracks.track[0].date) !== "undefined" ? data.recenttracks.track["0"].date.uts : Math.floor(Date.now() / 1000);

            var track = {
                timestamp: timestamp,
                artist: data.recenttracks.track["0"].artist.name,
                name: data.recenttracks.track["0"].name,
                image: data.recenttracks.track["0"].image[3]["#text"],
            }

            if(track.image == "" && (typeof(data.recenttracks.track["0"].artist.image[3]) !== "undefined")){
                track.image = data.recenttracks.track["0"].artist.image[3]["#text"];
            }

            if(track.image == ""){
                track.image = "http://via.placeholder.com/300x300?text=No+album";
            }

            addLastPlayedTrack(track, username, true);

            if(typeof(data.recenttracks.track[0]["@attr"]) === "undefined"){
                hideNowPlayed(username)
            }
        }, error: function(code, message){
            /* Show error message. */
        }});
    });
}

function getLast10TracksPerUser()
{
    users.forEach(function(username){
        lastfm.user.getRecentTracks({user: username, limit: 100, extended: 1}, {success: function(data){

            // we load the last played track in another function, so shift it from the array.
            data.recenttracks.track.shift();

            // we reverse the array to make sure to rende the oldest one as first, so it will be at the bottom.
            data.recenttracks.track.reverse();

            data.recenttracks.track.forEach(function(trackData){
                // todo: do no add last track?
                if(typeof(trackData["@attr"]) === "undefined"){
                    var timestamp = typeof(trackData.date) !== "undefined" ? trackData.date.uts : Math.floor(Date.now() / 1000);

                    var track = {
                        timestamp: timestamp,
                        artist: trackData.artist.name,
                        name: trackData.name,
                        image: trackData.image[3]["#text"],
                    }

                    if(track.image == "" && typeof(trackData.artist.image[3]) !== "undefined"){
                            track.image = trackData.artist.image[3]["#text"];
                    }

                    if(track.image == "") {
                        track.image = "http://via.placeholder.com/300x300?text=No+album";
                    }

                    addLastPlayedTrack(track, username, false);
                }
            })


        }, error: function(code, message){
            /* Show error message. */
        }});
    });
}

function loadUser(username){
    lastfm.user.getInfo({user: username}, {success: function(data){
        var image = data.user.image[2]["#text"];
        if(image == ""){
            image = "http://www.handige-weetjes.nl/wp-content/uploads/2013/03/Anoniem-bellen.png";
        }

        userData = {
            image: image,
            url: data.user.url,
            name : data.user.name
        }

        renderUserBlock(username, userData);
    }, error: function(code, message){
        /* Show error message. */
    }});
}

function getLastPlayedTracks(username)
{
    var localStorageTracks = localStorage.getItem('tracksFrom' + username);
    if(typeof(localStorageTracks) != "undefined"){
        var lastPlayed = JSON.parse(localStorageTracks);
        if(lastPlayed == null){
            var lastPlayed = [];
        }
    } else {
        var lastPlayed = [];
    }

    return lastPlayed;
}

function addLastPlayedTrack(track, username, currentPlay)
{
    var lastPlayedTracks = getLastPlayedTracks(username);

    var addable = true;
    if(typeof(lastPlayedTracks[0]) != "undefined")
    {
        var lastPlayedTrack = lastPlayedTracks[0];
        if(lastPlayedTrack.artist == track.artist && lastPlayedTrack.name == track.name){
            addable = false;
        }

        var lastPlayedTrack = lastPlayedTracks[1];
        if(typeof(lastPlayedTrack) !== "undefined" && lastPlayedTrack.artist == track.artist && lastPlayedTrack.name == track.name){
            addable = false;
        }
    }

    if(addable){
        lastPlayedTracks.unshift(track);

        localStorage.setItem('tracksFrom' + username, JSON.stringify(lastPlayedTracks));

        if(currentPlay){
            hideCurrentPlayedTrack();
            renderCurrentPlayedTrack(track, username);
        }
        renderTrack(track, username);
    }
}

function clearLastPlayedTracks()
{
    users.forEach(function(username){
        localStorage.removeItem('tracksFrom' + username);
    });
}

function initPage()
{
    clearLastPlayedTracks();

    users.forEach(function(username){
        loadUser(username);
    });

    setTimeout(getLast10TracksPerUser, 1000);
    setTimeout(getRecentTrackPerUser, 2500);

}

function renderUserBlock(username, userData){

    var objectClone = $('#user-template').prop('outerHTML');

    var objectClone = objectClone.replace("{{username}}", username );
    var objectClone = objectClone.replace("{{username}}", username );
    var objectClone = objectClone.replace("{{username}}", username );
    var objectClone = objectClone.replace("{{userimage}}", userData.image );
    var objectClone = objectClone.replace("{{userurl}}", userData.url );
    var objectClone = objectClone.replace("user-template", username );
    var objectClone = objectClone.replace('style="display:none"', '' );

    $('#users').append(objectClone);
}

function renderTrack(track, username){
    var objectClone = $('#track-template').prop('outerHTML');

    var date = new Date(track.timestamp * 1000);
    var dateTime = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear() + " ";
    dateTime += date.getHours() + ":" + (date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes() )


    objectClone = objectClone.replace("{{titel}}", track.name );
    objectClone = objectClone.replace("{{artist}}", track.artist );
    objectClone = objectClone.replace("{{image-src}}", track.image );
    objectClone = objectClone.replace("{{searchQuery}}", (track.artist + " - " + track.name).replace(/ /g,"%20") );
    objectClone = objectClone.replace("{{datetime}}", dateTime);
    objectClone = objectClone.replace('style="display:none"', '' );
    objectClone = objectClone.replace("track-template", 'track' );

    $('#tracks-' + username).prepend(objectClone);
}

function renderCurrentPlayedTrack(track, username){
    var objectClone = $('#current-track-template').prop('outerHTML');

    var objectClone = objectClone.replace("{{titel}}", track.name );
    var objectClone = objectClone.replace("{{artist}}", track.artist );
    var objectClone = objectClone.replace("{{image-src}}", track.image );
    var objectClone = objectClone.replace("{{username}}", username );
    var objectClone = objectClone.replace('style="display:none"', '' );
    var objectClone = objectClone.replace("current-track-template", 'current-track-' + username );

    hideCurrentPlayedTrack(username)
    $('#current-tracks-' + username).prepend(objectClone);
}

function hideCurrentPlayedTrack(username){
    $('#current-track-' + username).remove();

}

function hideNowPlayed(username){
    $('#nowplaying-' + username).remove();

}
