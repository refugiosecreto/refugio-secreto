document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const cadastroForm = document.getElementById('cadastroForm');
    const agendamentoForm = document.getElementById('agendamentoForm');
    const mensagemForm = document.getElementById('mensagemForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login realizado com sucesso!');
            location.href = 'planos.html';
        });
    }

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cadastro realizado com sucesso!');
            location.href = 'login.html';
        });
    }

    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Agendamento confirmado!');
            location.href = 'chat.html';
        });
    }

    if (mensagemForm) {
        mensagemForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const mensagem = document.getElementById('mensagem').value;
            const mensagens = document.getElementById('mensagens');
            mensagens.innerHTML += `<p>Você: ${mensagem}</p>`;
            document.getElementById('mensagem').value = '';
        });
    }

    let timer;
    let seconds = 0;
    const timerElement = document.getElementById('timer');

    if (timerElement) {
        timer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
            if (seconds >= 1800) {
                clearInterval(timer);
                alert('Nosso tempo chegou ao fim, mas quero agradecer por ter confiado em mim. Foi uma honra te ouvir. Se sentir vontade de agendar outro momento, estarei aqui. Você não está só. Obrigada por existir.');
            }
        }, 1000);
    }
});