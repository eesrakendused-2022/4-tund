let fullName, birthYear, email, saveBtn, deleteBtn, loadBtn;

fullName = document.querySelector('#name');
birthYear = document.querySelector('#birthyear');
email = document.querySelector('#email');

saveBtn = document.querySelector('#save');
deleteBtn = document.querySelector('#delete');
loadBtn = document.querySelector('#load');

saveBtn.addEventListener('click', saveLocal);
deleteBtn.addEventListener('click', deleteLocal);
loadBtn.addEventListener('click', loadLocal);

function loadLocal(){
    fullName.value = localStorage.getItem('name');
    birthYear.value = localStorage.getItem('birthYear');
    email.value = localStorage.getItem('email');

    console.log(sessionStorage.getItem('name'), sessionStorage.getItem('birthYear'), sessionStorage.getItem('email'))
    console.log("cookie: " + document.cookie);

    const localData = JSON.parse(localStorage.getItem('personData'));

    document.querySelector('#data').innerHTML = 'Täisnimi: ' + localData.fullName + '<br> Sünniaasta: ' + localData.birthYear + '<br> E-posti aadress: ' + localData.email;

    document.querySelector('#data2').innerHTML = `Täisnimi: ${localData.fullName} <br> Sünniaasta: ${localData.birthYear} <br> E-posti aadress: ${localData.email}`;
}

function saveLocal(){
    localStorage.setItem('name', fullName.value);
    localStorage.setItem('birthYear', birthYear.value);
    localStorage.setItem('email', email.value);

    //Sessionstorage kustutakse peale brauseriakna sulgemist
    sessionStorage.setItem('name', fullName.value);
    sessionStorage.setItem('birthYear', birthYear.value);
    sessionStorage.setItem('email', email.value);

    document.cookie = "email="+email.value;

    let data = {
        fullName: fullName.value,
        birthYear: birthYear.value,
        email: email.value
    }

    localStorage.setItem('personData', JSON.stringify(data));
}

function deleteLocal(){
    localStorage.removeItem('name');
    localStorage.removeItem('birthYear');
    localStorage.removeItem('email');

    sessionStorage.removeItem('name');
    sessionStorage.removeItem('birthYear');
    sessionStorage.removeItem('email');
}