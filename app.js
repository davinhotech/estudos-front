document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    /
    if (email === 'usuario@email.com' && password === 'senha123') {
        alert('Login bem-sucedido! Redirecionando...');
    
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});

document.getElementById('forgotPassword').addEventListener('click', function (e) {
    e.preventDefault();
    
    alert('Link de recuperação de senha enviado para o seu email.');
});