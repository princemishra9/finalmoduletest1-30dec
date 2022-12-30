function submitForm(){
    var firstname = document.getElementById('firstname');
    var Lastname = document.getElementById('Lastname');
    var Email = document.getElementById('Email');

    if (firstname.value === '' | Lastname.value==='' | Email.value===''){
        
    }else {
        document.getElementById('message').style.opacity = '1';
    }
}