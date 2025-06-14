// Array de produtos
const  produtos = [
        {
            id: 1,
            nome: "Blush cremoso playing cupid-adorn",
            descricao: "Blush em creme com textura suave e acabamento natural.",
            preco: 31.42,
            imagem: "Blushcremoso.jpg",
            categoria: "Blush",
            destaque: true,
            promocao: false,
        },
        {
            id: 2,
            nome: "Blush líquido Color Bloom com acabamento fosco-Love Cake",
            descricao: "Blush líquido com alta pigmentação e fácil de aplicar.",
            preco: 34.29,
            imagem: "Blushliquido.jpg",
            categoria: "Blush",
            destaque: true,
            promocao: true,
        },
        {
            id: 3,
            nome: "Hello Kitty｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 457.85,
            imagem: "Conjuntodecoleçãocompleta.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 4,
            nome: "Manual de correção de ameaças triplas",
            descricao: "Trio de corretivos para diferentes tons e correções.",
            preco: 45.73,
            imagem: "corretivotriplo.jpg",
            categoria: "Corretivo",
            destaque: true,
            promocao: true,
        },
        {
            id: 5,
            nome: " DomineBooster shine plumping lip Gloss-domine seu brilho",
            descricao: "Gloss labial com brilho intenso e efeito hidratante.",
            preco: 34.29,
            imagem: "Gloss-domine.jpg",
            categoria: "Lábios",
            destaque: false,
            promocao: true,
        },
        {
            id: 6,
            nome: "Crystal Glaze Hidratante para os Lábios-Leite de Morango",
            descricao: "Hidratante labial com ação nutritiva e aroma suave.",
            preco: 34.29,
            imagem: "Hidratantelabios.jpg",
            categoria: "Lábios",
            destaque: false,
            promocao: true,
        },
        {
            id: 7,
            nome: "Hydra Jelly Pocket Lip Jam-Guava Glow",
            descricao: "Gel facial hidratante com textura leve e refrescante.",
            preco: 34.29,
            imagem: "HydraJelly.jpg",
            categoria: "Skincare",
            destaque: false,
            promocao: true,
        },
        {
            id: 8,
            nome: "Go go Glow ilumador body mist-gold",
            descricao: "Iluminador para corpo com brilho radiante e fixação prolongada.",
            preco: 45.73,
            imagem: "IluminadorBody.jpg",
            categoria: "Iluminador",
            destaque: true,
            promocao: false,
        },
        {
            id: 9,
            nome: "Iluminador Líquido Glow Bloom-Vanilla Frost",
            descricao: "Iluminador líquido para realçar pontos estratégicos do rosto.",
            preco: 34.29,
            imagem: "IluminadorLiquido.jpg",
            categoria: "Iluminador",
            destaque: false,
            promocao: true,
        },
        {
            id: 10,
            nome: "Pincel para base skinfinite",
            descricao: "Pincel profissional para aplicação uniforme da base.",
            preco: 45.90,
            imagem: "Pincelparabase.jpg",
            categoria: "Pincéis",
            destaque: true,
            promocao: false,
        },
        {
            id: 11,
            nome: "Pó fixador para rosto e área dos olhos Insta-Ready Duo-Taro",
            descricao: "Pó translúcido para selar a maquiagem com acabamento suave.",
            preco: 48.60,
            imagem: "Pofixador.jpg",
            categoria: "Pó",
            destaque: false,
            promocao: false,
        },
        {
            id: 12,
            nome: "Primer Hydro Slime",
            descricao: "Primer hidratante com textura gel e acabamento refrescante.",
            preco: 48.60,
            imagem: "HydraJelly.jpg",
            categoria: "Primer",
            destaque: true,
            promocao: true,
        },
        {
            id: 13,
            nome: "The Powerpuff Girls ｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 453.10,
            imagem: "ConjuntodecoleçãocompletaMS.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 14,
            nome: "Rick and Morty ｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 589.33,
            imagem: "ConjuntodecoleçãocompletaRM.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 15,
            nome: "Ember Rose ｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 422.52,
            imagem: "ConjuntodecoleçãocompletaEB.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: true,
        },
        {
            id: 16,
            nome: "Harry Potter™ ｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 350.24,
            imagem: "ConjuntodecoleçãocompletaHP.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 17,
            nome: "Harley Quinn｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 433.64,
            imagem: "ConjuntodecoleçãocompletaH.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 18,
            nome: "Crimson Butterfly｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 283.51,
            imagem: "ConjuntodecoleçãocompletaCB.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 19,
            nome: "Ursinhos Carinhosos｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 389.16,
            imagem: "ConjuntodecoleçãocompletaUC.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 20,
            nome: "Chroma Zone｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 216.79,
            imagem: "ConjuntodecoleçãocompletaC.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 21,
            nome: "Willy Wonka｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 272.39,
            imagem: "ConjuntodecoleçãocompletaWK.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 22,
            nome: "Frida Kahlo｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 216.79,
            imagem: "ConjuntodecoleçãocompletaF.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        },
        {
            id: 23,
            nome: "Hora da Aventura｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 216.79,
            imagem: "ConjuntodecoleçãocompletaHA.jpg",
            categoria: "Kits",
            destaque: false,
            promocao: false,
        }
    ];

const productsContainer = document.getElementById('products-container');
const cartCount = document.querySelector('.cart-count');
const cartPreview = document.getElementById('cart-preview');
const cartIcon = document.getElementById('cart-icon');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartShipping = document.getElementById('cart-shipping');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryButtons = document.querySelectorAll('.category-btn');

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
let cartVisible = false;

function getImageCode(imageName) {
  return `imgs/produtos/${imageName}`;
}

function renderProducts(products) {
  productsContainer.innerHTML = '';
  products.forEach(produto => {
    if (!produto.promocao) return;
    const imagePath = getImageCode(produto.imagem);
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-img">
        <img src="${imagePath}" alt="${produto.nome}">
        ${produto.destaque ? '<div class="product-badge">Destaque</div>' : ''}
      </div>
      <div class="product-info">
        <h3 class="product-title">${produto.nome}</h3>
        <p class="product-desc">${produto.descricao}</p>
        <p class="product-price">R$ ${produto.preco.toFixed(2)}</p>
        <div class="product-actions">
          <button class="add-to-cart" data-id="${produto.id}"><i class="fas fa-shopping-cart"></i> Adicionar</button>
        </div>
      </div>`;
    productsContainer.appendChild(productCard);
  });
  document.querySelectorAll('.add-to-cart').forEach(button => button.addEventListener('click', addToCart));
}

function addToCart(e) {
  const productId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
  const product = produtos.find(p => p.id === productId);
  const existingItem = cartItems.find(item => item.id === productId);
  if (existingItem) existingItem.quantity += 1;
  else cartItems.push({ ...product, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cartItems));
  updateCartUI();
  const button = e.target.closest('.add-to-cart');
  button.innerHTML = '<i class="fas fa-check"></i> Adicionado';
  button.style.backgroundColor = 'var(--success)';
  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-shopping-cart"></i> Adicionar';
    button.style.backgroundColor = '';
  }, 2000);
}

function updateCartUI() {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = itemCount;
  cartItemsContainer.innerHTML = '';
  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
    cartSubtotal.textContent = 'R$ 0,00';
    cartShipping.textContent = 'R$ 0,00';
    cartTotal.textContent = 'R$ 0,00';
    return;
  }
  let subtotal = 0;
  cartItems.forEach(item => {
    subtotal += item.preco * item.quantity;
    const imagePath = getImageCode(item.imagem);
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-img"><img src="${imagePath}" alt="${item.nome}"></div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.nome}</div>
        <div class="cart-item-price">R$ ${(item.preco * item.quantity).toFixed(2)}</div>
        <div class="cart-item-quantity">Quantidade: ${item.quantity}</div>
        <button class="remove-from-cart" data-id="${item.id}">Remover</button>
      </div>`;
    cartItemsContainer.appendChild(cartItem);
  });
  document.querySelectorAll('.remove-from-cart').forEach(button => button.addEventListener('click', removeFromCart));
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;
  cartSubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;
  cartShipping.textContent = `R$ ${shipping.toFixed(2)}`;
  cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

function removeFromCart(e) {
  const productId = parseInt(e.target.getAttribute('data-id'));
  cartItems = cartItems.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  updateCartUI();
}

cartIcon.addEventListener('click', () => {
  cartVisible = !cartVisible;
  cartPreview.classList.toggle('active', cartVisible);
});

checkoutBtn.addEventListener('click', () => {
  Swal.fire({ title: "Compra finalizada com sucesso!", text: "Obrigado por comprar na Sheglam.", icon: "success" });
  cartItems = [];
  localStorage.removeItem('cart');
  updateCartUI();
  cartPreview.classList.remove('active');
});

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const selectedCategory = button.getAttribute('data-category');
    const filtered = produtos.filter(produto => produto.promocao && (selectedCategory === 'all' || produto.categoria === selectedCategory));
    renderProducts(filtered);
  });
});

document.addEventListener('click', e => {
  if (!cartPreview.contains(e.target) && !cartIcon.contains(e.target) && cartVisible) {
    cartPreview.classList.remove('active');
    cartVisible = false;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const produtosEmPromocao = produtos.filter(p => p.promocao === true);
  renderProducts(produtosEmPromocao);
  updateCartUI();
});
