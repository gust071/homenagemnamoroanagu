// Data do início do namoro: 23 de março de 2025 às 19:00
const dataInicio = new Date(2025, 2, 23, 19, 0, 0); // Mês é 0-indexado (2 = março)

// Atualizar contador de dias
function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
}

// Carregar galeria de fotos
function carregarGaleria() {
    const galeriaGrid = document.getElementById('galeria-grid');
    
    // Lista de fotos (nomes dos arquivos)
    const fotos = [
        'foto1.jpeg',
        'foto2.jpeg',
        'foto3.jpeg',
        'foto4.jpeg',
        'foto5.jpeg',
        'foto6.jpeg',
        'foto7.jpeg',
        'foto8.jpeg'
    ];

    fotos.forEach((foto, index) => {
        const item = document.createElement('div');
        item.className = 'galeria-item';
        item.innerHTML = `
            <img src="fotos/${foto}" alt="Foto ${index + 1}" loading="lazy">
            <div class="galeria-overlay">
                <span class="galeria-overlay-text">💕</span>
            </div>
        `;
        
        item.addEventListener('click', () => abrirModal(foto, index + 1));
        galeriaGrid.appendChild(item);
    });
}

// Modal para visualizar fotos
function abrirModal(foto, numero) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');

    modal.style.display = 'block';
    modalImg.src = `fotos/${foto}`;
    modalCaption.textContent = `Memória ${numero}`;
}

// Fechar modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Event listeners para o modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', fecharModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });

    // Fechar com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fecharModal();
        }
    });
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Atualizar data atual no footer
function atualizarDataAtual() {
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
    const dataAtual = new Date().toLocaleDateString('pt-BR', opcoes);
    document.getElementById('data-atual').textContent = dataAtual;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    carregarGaleria();
    atualizarContador();
    atualizarDataAtual();

    // Atualizar contador a cada minuto
    setInterval(atualizarContador, 60000);
});
