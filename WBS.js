   const tabs = document.querySelectorAll('.season-tab');

    const episodes = document.querySelectorAll('.episode-card');

    function showSeason(season) {

      // Save selection

      localStorage.setItem('selectedSeason', season);

      tabs.forEach(tab => {

        tab.classList.toggle('active', tab.dataset.season === season);

      });

      episodes.forEach(ep => {

        ep.classList.toggle('show', ep.dataset.season === season);

      });

    }

    // On load

    const savedSeason = localStorage.getItem('selectedSeason') || '1';

    showSeason(savedSeason);

    tabs.forEach(tab => {

      tab.addEventListener('click', () => {

        showSeason(tab.dataset.season);

      });

    });
