const languageButtons = document.querySelectorAll('.linguagem-selector button');
const seasonSelect = document.getElementById('season-select');
const seasons = document.querySelectorAll('.temporada');

// Função para mostrar/esconder temporadas e preencher o seletor com as opções adequadas
function filterSeasonOptions(language) {
    // Limpa as opções do seletor de temporadas
    seasonSelect.innerHTML = '';

    // Adiciona novas opções ao seletor de acordo com a linguagem escolhida
    seasons.forEach(season => {
        if (season.dataset.linguagem === language) {
            const option = document.createElement('option');
            option.value = season.id;
            option.text = season.querySelector('h2').textContent;
            seasonSelect.appendChild(option);
        }
    });

    // Selecione a primeira temporada disponível e exiba-a
    const firstOption = seasonSelect.options[0];
    if (firstOption) {
        showSeason(firstOption.value);
    }
}

// Função para mostrar a temporada escolhida
function showSeason(seasonId) {
    seasons.forEach(season => {
        season.style.display = season.id === seasonId ? 'block' : 'none';
    });

    // Foca no primeiro episódio da temporada
    const season = document.getElementById(seasonId);
    if (season) {
        const firstEpisode = season.querySelector('p'); // Aqui você pode ajustar para um link se necessário
        if (firstEpisode) {
            firstEpisode.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Event listeners para botões de idioma
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const language = button.dataset.linguagem;
        filterSeasonOptions(language);
    });
});

// Event listener para o seletor de temporadas
seasonSelect.addEventListener('change', (event) => {
    showSeason(event.target.value);
});

// Inicialmente, filtra as temporadas de acordo com o idioma 'legendado' ou 'dublado'
filterSeasonOptions('legendado'); // Ou 'dublado' se preferir
