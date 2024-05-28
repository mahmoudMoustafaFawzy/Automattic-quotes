    
var cartona =[];


// ---------local storage------------
if(localStorage.getItem("store")!=null) {
    cartona= JSON.parse(localStorage.getItem("store"))
    display()
}

// --------catch data-----------
function newSite() {
    var newWibSite=
    {
        siteName:document.getElementById('siteNameId').value,
        siteURL : document.getElementById('siteURLId').value,
    }

if (newWibSite.siteName === "" |newWibSite.siteURL === ""|document.getElementById("siteNameId").classList.contains("is-invalid")|document.getElementById("siteURLId").classList.contains("is-invalid")) {
    overlayId.classList.replace("visually-hidden", "visible")
    display()
}
else {
    cartona.push(newWibSite)
    display()
    clear()
}
localStorage.setItem("store",JSON.stringify(cartona));

}
// --------display-----------
function display() {
    var kobaia="";
    for(var i = 0 ; i < cartona.length ; i++) {
        kobaia +=
        `<tr>
        <td>${i+1} </td>
        <td>'${cartona[i].siteName} '</td>
        <td><a class="text-decoration-none"  target="_blank" href="${cartona[i].siteURL} "><button class="btn btn-success" ><i class="fa-solid fa-eye pe-2"></i>visit</button></a></td>
        <td> <button onclick="Delete(${i})" class="btn btn-danger" ><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`
    }

    document.getElementById("tbodyId").innerHTML = kobaia
    clear()
}


// --------delete------------
function Delete(pIndex) {
    cartona.splice(pIndex,1);
    localStorage.setItem("store",JSON.stringify(cartona));
    display()
}



// --------clear------------
function clear() {
    document.getElementById('siteNameId').value = ""
    document.getElementById('siteURLId').value= ""
    document.getElementById ("siteNameId").classList.remove("is-valid")
    document.getElementById ("siteNameId").classList.remove("is-invalid")
    document.getElementById ("siteURLId").classList.remove("is-valid")
    document.getElementById ("siteURLId").classList.remove("is-invalid")
}

// -----------validation-----------
var pNameRegex = /^(^[a-zA-Z\s0-9]{3,})$/

function valid(nameValue ){
    if(pNameRegex.test(nameValue))
        {
            document.getElementById ("siteNameId").classList.add("is-valid")
            document.getElementById ("siteNameId").classList.remove("is-invalid")
        }
        else
        {
            document.getElementById ("siteNameId").classList.add("is-invalid")
            document.getElementById ("siteNameId").classList.remove("is-valid")
        }
}




var pURLRegex = /([.][a-zA-Z]{2,})$/
function validURL(URLValue ){
    if(pURLRegex.test(URLValue))
        {
            document.getElementById ("siteURLId").classList.add("is-valid")
            document.getElementById ("siteURLId").classList.remove("is-invalid")
        }
        else
        {
            document.getElementById ("siteURLId").classList.add("is-invalid")
            document.getElementById ("siteURLId").classList.remove("is-valid")
        }
}

// -----------close validation-------------
function closePopup() {

    overlayId.classList.replace("visible", "visually-hidden")

};