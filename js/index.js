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

function detail(id) {
    let url = document.location.href.replace('index.html', '')
    url = `${url}detail.html?id=${id}`;
    window.location.replace(url);
}

function card(item) {
    return `<a onClick="detail(${item.id})">
        <div class="col">
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top rounded mx-auto d-block" style="max-width:200px;height:auto">
                <div class="card-body" style="position:relative">
                    <h5 class="card-title fw-bold">${item.name}</h5>
                    <span class="fw-bolder">por: <span class="text-muted fw-normal">${item.author}</span></span>
                    <p><span class="text-muted fw-normal">E-book</span></p>
                </div>
            </div>
        </div>
    </a>`
}