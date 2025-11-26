  const items = [
    {
      type: 'style',
      title: 'Western Cowboy Costume Set for Men',
      price: '$14.27',
      image: 'https://img.kwcdn.com/product/fancy/73727990-b439-406e-9fad-9f36d039da8a.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/avif',
      button: 'Buy',
      class: 'btn-buy',
      link: 'https://temu.to/k/ekfo9w2zbdu'
    },
    {
      type: 'style',
      title: '1pc Unisex Beige Cowboy Hat',
      price: '$4.77',
      image: 'https://img.kwcdn.com/product/fancy/bbf039ed-f89d-4466-b995-d79cbeabefed.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/avif',
      button: 'Buy',
      class: 'btn-buy',
      link: 'https://temu.to/k/ekr9sv006ng'
    },
    {
      type: 'gear',
      title: 'Polyester 120g Photography For Live Video Sketch Background Cloth',
      price: '$10.74',
      image: 'https://img.kwcdn.com/product/fancy/670ce401-5c32-4188-a930-5e91b474ea14.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/avif',
      button: 'Buy',
      class: 'btn-buy',
      link: 'https://temu.to/k/ekr9sv006ng'
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
