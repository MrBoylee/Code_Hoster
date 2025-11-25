  const items = [
    {
      type: 'gear',
      title: 'West Background Music Pack Vol. 1',
      price: '$0.0',
      image: 'https://mrboylee.github.io/Mrboylee-Website-Images/Emberidge_Barhouse.jpg',
      button: 'Get for Free',
      class: 'btn-buy',
      link: 'https://your-download-link.com/free-music-pack'
    },
    {
      type: 'style',
      title: 'West Arsenal Mega Bundle (Sounds + BGs + Images)',
      price: '$14.99',
      image: 'https://mrboylee.github.io/Mrboylee-Website-Images/Thorncreek_Feather_Night.jpg',
      button: 'Buy',
      class: 'btn-buy',
      link: 'https://your-payment-link.com/buy-mega-bundle'
    }
    // Add more items with their links here
  ];

  const storeGrid = document.getElementById('storeGrid');
  const pagination = document.getElementById('pagination');
  let currentPage = 1;
  const itemsPerPage = 13;
  let currentFilter = 'all';

  function displayItems(page = 1) {
    storeGrid.innerHTML = '';
    let filteredItems = currentFilter === 'all' ? items : items.filter(item => item.type === currentFilter);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    filteredItems.slice(start, end).forEach(item => {
      storeGrid.innerHTML += `
        <div class="store-item">
          <img src="${item.image}" alt="Item Image">
          <div class="text">${item.title}</div>
          <div class="price">${item.price}</div>
          <a href="${item.link}" target="_blank" class="btn ${item.class}">${item.button}</a>
        </div>`;
    });

    displayPagination(totalPages, page);
  }

  function displayPagination(totalPages, current) {
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      if (i === current) btn.style.backgroundColor = '#aaa';
      btn.onclick = () => {
        currentPage = i;
        displayItems(i);
      };
      pagination.appendChild(btn);
    }
  }

  function filterItems(type) {
    currentFilter = type;
    currentPage = 1;
    displayItems(currentPage);
  }

  displayItems(currentPage);
