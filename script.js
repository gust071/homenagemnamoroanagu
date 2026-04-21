// Data do início do namoro: 16 de março de 2025 às 10:01
const dataInicio = new Date(2025, 3, 28, 19, 0, 0); // Mês é 0-indexado (2 = março)

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
        'IMG_5440.jpeg',
        'IMG_5439.jpeg',
        'IMG_5392.jpeg',
        'IMG_5209.jpeg',
        'IMG_5082.jpeg',
        'IMG_5012.jpeg',
        'IMG_4991.jpeg',
        'IMG_4987.jpeg',
        'IMG_4978.jpeg',
        'IMG_4935.jpeg',
        'IMG_4663.jpeg',
        'IMG_4513.jpeg',
        'IMG_4461.jpeg',
        'IMG_4454.jpeg',
        'IMG_4397.jpeg',
        'IMG_4354.jpeg',
        'IMG_4321.jpeg',
        'IMG_4228.jpeg',
        'IMG_4173.jpeg',
        'IMG_4169.jpeg',
        'IMG_4148.jpeg',
        'IMG_4145.jpeg',
        'IMG_4103.jpeg',
        'IMG_4044.jpeg',
        'IMG_4042.jpeg',
        'IMG_4027.jpeg',
        'IMG_4013.jpeg',
        'IMG_3990.jpeg',
        'IMG_3940.jpeg',
        'IMG_3944.jpeg',
        'IMG_3870.jpeg',
        'IMG_3867.jpeg',
        'IMG_3856.jpeg',
        'IMG_3858.jpeg',
        'IMG_3749.jpeg',
        'IMG_3723.jpeg',
        'IMG_3718.jpeg',
        'c36029c2-23ae-4abb-adb4-7eea5cd9eef3.jpeg',
        'IMG_3665.jpeg',
        '3F685EF3-8F82-41AD-BF1E-26E9E089176D.jpeg',
        'IMG_3600.jpeg',
        'IMG_3596.jpeg',
        'IMG_3539.jpeg',
        'a4da6521-d006-4abc-a0c8-c8410999847c.jpeg',
        'IMG_3417.jpeg',
        'IMG_3416.jpeg',
        'IMG_3372.jpeg',
        'IMG_3371.jpeg',
        'IMG_3241.jpeg',
        'IMG_2947.jpeg'
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
