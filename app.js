// apikey : "x13e9GDThU0sWK7NEw96RDDRHi07cNie"

//get input values 


$('form').on("submit", function (e) {
    e.preventDefault();
    const keyword = $('input').val();
    getGif(keyword);
    $('input').val("")
})

async function getGif(keyword) {
    const apiKey = "x13e9GDThU0sWK7NEw96RDDRHi07cNie";
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}}&api_key=${apiKey}`);
    const url = res.data.data[Math.floor(Math.random() * 20)].images.fixed_height.url;
    $('#meme').append($('<img>').attr('src', url))
}

$('#remove').on("click", function (e) {
    $("#meme").empty();
})