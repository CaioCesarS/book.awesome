$(document).ready(() => {
    let url = document.location.href
    var id = url.substring(url.indexOf("=")+1,url.length);
    getDetail(id)
});

function getDetail(id) {
    let item = DATA.filter(e => e.id == id)[0]

    $('#image').attr('src', item.image)
    $('#name').text(item.name)
    $('#description').text(item.description)
    $('#author').text(item.author)
    $('#ctaButton').attr('href', item.url)
}