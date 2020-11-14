function reqListener() {
    var html = this.responseText;
    var cpf = html.split('<dt>CPF</dt>')[1].split('<dd>')[1].split('</dd>')[0];
    console.log(cpf);
    insertCpfInputForm(cpf);
};

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open('get', 'https://universidade.bioslogus.com.br/user/profile.php?id=2');
oReq.send();

function insertCpfInputForm(cpf) {
    const inputFomr = document.querySelector('.quantumWizTextinputPaperinputInputArea input');
    inputFomr.value = cpf;
}
