$(document).ready(() => {
    showAllBooks()

    $("#search").keyup(() => {
        $("#search").val() == "" ? 
            showAllBooks() : searchBook()
    });
});

function showAllBooks() {
    let list = $("#list");
    list.empty();

    DATA.forEach((item)=>{
        let child = card(item)

        list.append(child);
    })
}

function searchBook() {
    let list = $("#list");
    list.empty();

    let search = $("#search").val()
    let books = DATA.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
    console.log(books)

    books.forEach((item)=>{
        let child = card(item)

        list.append(child);
    })
}

function card(item) {
    return `<div class="col">
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top rounded mx-auto d-block" style="max-width:200px;height:auto">
                    <div class="card-body" style="position:relative">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text" style="margin-bottom:50px">${item.description}</p>
                        <a href="${item.url}" target="_blanck" class="btn btn-primary text-end" style="position:absolute;bottom:16px;right:16px">Comprar agora</a>
                    </div>
                </div>
            </div>`
}