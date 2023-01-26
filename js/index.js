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
    let books = DATA.filter(e => 
        e.name.toLowerCase().includes(search.toLowerCase()) || 
        e.author.toLowerCase().includes(search.toLowerCase()))

    books.forEach((item)=>{
        let child = card(item)

        list.append(child);
    })
}

function shortDescription(description) {
    return description.length  > 250 ? `${description.substring(0, 250)}...` : description
}

function card(item) {
    return `<div class="col">
                <a href="${item.url}" target="_blank">
                    <div class="card h-100">
                        <img src="${item.image}" class="card-img-top rounded mx-auto d-block" style="max-width:250px;height:auto">
                        <div class="card-body" style="position:relative">
                            <h5 class="card-title fw-bold">${item.name}</h5>
                            <span class="fw-bolder">por: <span class="text-muted fw-normal">${item.author}</span></span>
                            <p class="card-text" style="margin-bottom:50px">${shortDescription(item.description)}</p>
                        </div>
                    </div>
                </a>
            </div>`
}