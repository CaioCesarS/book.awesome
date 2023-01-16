$(document).ready(() => {
    showData()
});

function showData() {
    let list = $("#list");

    DATA.forEach((item)=>{
        let child = `<div class="col">
                        <div class="card h-100">
                            <img src="${item.image}" class="card-img-top rounded mx-auto d-block" style="max-width:200px;height:auto">
                            <div class="card-body" style="position:relative">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text" style="margin-bottom:50px">${item.description}</p>
                                <a href="${item.url}" target="_blanck" class="btn btn-primary text-end" style="position:absolute;bottom:16px;right:16px">Comprar agora</a>
                            </div>
                        </div>
                    </div>`

        list.append(child);
      })
}