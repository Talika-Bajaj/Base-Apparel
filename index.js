const input = document.getElementById('email');
const btn = document.getElementById('btn');

function validateEmail () {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.match(mailformat)) {
        console.log('right');
        document.getElementById('email').value = '';
    } else {
        console.log('wrong');
        document.getElementById('valid').style.display = 'block';
        input.style.borderColor = 'hsl(0, 93%, 68%)';
        document.getElementById('error').style.display = 'block';
        document.getElementById('btn').style.background = 'linear-gradient(135deg, rgb(255, 255, 255), rgb(250 186 186))';


    }
}

btn.addEventListener('click', validateEmail);