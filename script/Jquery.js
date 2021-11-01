
const regexStd = /^.+/;
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

const $nom = $("#nom");
const $prenom = $("#prenom")
const $mail = $("#mail");
const $sendMessage = $("#sendMessage");

function validateEntry(dom, reg) {
    reg.test(dom.val()) ? dom.css({'background-color' : 'rgba(0,255,0,0.5)'}) : dom.css({'background-color' : 'rgba(255,0,0,0.5)'})
}

$nom.change (() => validateEntry($nom, regexStd))
$prenom.change (() => validateEntry($prenom, regexStd))
$mail.change (() => validateEntry($mail, regexEmail))


     

$sendMessage.submit(
    (e) => {
        alert("Ce formulaire est fictif 😅");
        e.preventDefault();
    } 
)