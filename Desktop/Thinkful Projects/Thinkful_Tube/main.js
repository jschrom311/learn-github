const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/search";
function getDataFromApi(searchTerm, callback) {
    var query = {
        part: 'snippet',
        key: "AIzaSyAbmxlTomU6l61ZBgF3pzXXaGzodxAqB5s",
        maxResults: 6,
        type: 'video',
        q: searchTerm
    }
    $.getJSON(YOUTUBE_URL, query, callback);
}
function displayData(results) {
    console.log(results)
    let html= ' ';
    for (let i=0; i<results.items.length; i++){
        let item = results.items[i]
        console.log(item.id.videoId)
        html +='<iframe src="https://www.youtube.com/embed/' + item.id.videoId + '" frameborder="0" allowfullscreen></iframe>'
        //$('.search-results').append(html);//
    }
    $('.search-results').html(html)
}

$("form").submit(function(event){
    event.preventDefault();
    //$('.search-results').html('')//
    let query = $("input.user-search-input").val()
    getDataFromApi(query, displayData);
});