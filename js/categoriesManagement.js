// const catalogId=document.getElementById("catalogId");
// const catalogName=document.getElementById("catalogName");
// const priority=document.getElementById("priority");
// const description=document.getElementById("description");

let index=1;
function getDataCatalog(event){
    event.preventDefault();
    const status = document.querySelector("input[type='radio']:checked");

    //tao object de lay data tu o input
    let newCatalog={
        catalogId:catalogId.value,
        catalogName:catalogName.value,
        priority:priority.value,
        description:description.value,
        status:status.value
    }
    document.getElementById("listCatalog").innerHTML+=
        `
            <tr>
                <td>${index++}</td>
                <td>${newCatalog.catalogId}</td>
                <td>${newCatalog.catalogName}</td>
                <td>${newCatalog.priority}</td>
                <td>${newCatalog.description}</td>
                <td>${newCatalog.status}</td>
                <td>
                    <button class="btn btn-primary">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>
        `
        resetFormCatalogInfo();
}
function resetFormCatalogInfo() {
    catalogId.value = "";
    catalogName.value = "";
    priority.value = "";
    description.value = "";
    active.checked = true;
   
}