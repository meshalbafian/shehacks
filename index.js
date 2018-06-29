function search(){
    var keyword=$("#keyword").val();
    $.getJSON('https://www.playphrase.me/api/v1/phrases/search?q='+keyword, function(json)
    {
        var videosrc=json.phrases[0]['video-url'];
        $('#mp4video').attr('src', videosrc);
        $('#videoclip').get(0).load();
        $('#videoclip').get(0).play();
    });
}