 // Array de produtos
        const produtos = [
        {
            id: 1,
            nome: "Blush cremoso playing cupid-adorn",
            descricao: "Blush em creme com textura suave e acabamento natural.",
            preco: 31.42,
            imagem: "Blushcremoso.jpg",
            categoria: "Blush",
            destaque: true
        },
        {
            id: 2,
            nome: "Blush líquido Color Bloom com acabamento fosco-Love Cake",
            descricao: "Blush líquido com alta pigmentação e fácil de aplicar.",
            preco: 34.29,
            imagem: "Blushliquido.jpg",
            categoria: "Blush",
            destaque: true
        },
        {
            id: 3,
            nome: "Hello Kitty｜SHEGLAM Conjunto de coleção completa",
            descricao: "Conjunto com todos os produtos da linha. Edição limitada.",
            preco: 457.85,
            imagem: "Conjuntodecoleçãocompleta.jpg",
            categoria: "Kits",
            destaque: false
        },
        {
            id: 4,
            nome: "Manual de correção de ameaças triplas",
            descricao: "Trio de corretivos para diferentes tons e correções.",
            preco: 45.73,
            imagem: "corretivotriplo.jpg",
            categoria: "Corretivo",
            destaque: true
        },
        {
            id: 5,
            nome: " DomineBooster shine plumping lip Gloss-domine seu brilho",
            descricao: "Gloss labial com brilho intenso e efeito hidratante.",
            preco: 34.29,
            imagem: "Gloss-domine.jpg",
            categoria: "Lábios",
            destaque: false
        },
        {
            id: 6,
            nome: "Crystal Glaze Hidratante para os Lábios-Leite de Morango",
            descricao: "Hidratante labial com ação nutritiva e aroma suave.",
            preco: 34.29,
            imagem: "Hidratantelabios.jpg",
            categoria: "Lábios",
            destaque: false
        },
        {
            id: 7,
            nome: "Hydra Jelly Pocket Lip Jam-Guava Glow",
            descricao: "Gel facial hidratante com textura leve e refrescante.",
            preco: 34.29,
            imagem: "HydraJelly.jpg",
            categoria: "Skincare",
            destaque: false
        },
        {
            id: 8,
            nome: "Go go Glow ilumador body mist-gold",
            descricao: "Iluminador para corpo com brilho radiante e fixação prolongada.",
            preco: 45.73,
            imagem: "IluminadorBody.jpg",
            categoria: "Iluminador",
            destaque: true
        },
        {
            id: 9,
            nome: "Iluminador Líquido Glow Bloom-Vanilla Frost",
            descricao: "Iluminador líquido para realçar pontos estratégicos do rosto.",
            preco: 34.29,
            imagem: "IluminadorLiquido.jpg",
            categoria: "Iluminador",
            destaque: false
        },
        {
            id: 10,
            nome: "Pincel para base skinfinite",
            descricao: "Pincel profissional para aplicação uniforme da base.",
            preco: 45.90,
            imagem: "Pincelparabase.jpg",
            categoria: "Pincéis",
            destaque: true
        },
        {
            id: 11,
            nome: "Pó fixador para rosto e área dos olhos Insta-Ready Duo-Taro",
            descricao: "Pó translúcido para selar a maquiagem com acabamento suave.",
            preco: 48.60,
            imagem: "Pofixador.jpg",
            categoria: "Pó",
            destaque: false
        },
        {
            id: 12,
            nome: "Primer Hydro Slime",
            descricao: "Primer hidratante com textura gel e acabamento refrescante.",
            preco: 48.60,
            imagem: "PrimerHydroSlime.jpg",
            categoria: "Primer",
            destaque: true
        }
    ];

        // Elementos do HTML
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

        // Estado do carrinho
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        let cartVisible = false;

        // Renderizar os produtos
        function renderProducts(products) {
            productsContainer.innerHTML = '';
            
            products.forEach(produto => {
                const imagePath = getImageCode(produto.imagem);


                const isFavorite = localStorage.getItem(`fav_${produto.id}`) === 'true';
                
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
                            <button class="add-to-cart" data-id="${produto.id}">
                                <i class="fas fa-shopping-cart"></i> Adicionar
                            </button>
                            <button class="fav-btn ${isFavorite ? 'active' : ''}" data-id="${produto.id}">
                                <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                productsContainer.appendChild(productCard);
            });
            
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
            
            document.querySelectorAll('.fav-btn').forEach(button => {
                button.addEventListener('click', toggleFavorite);
            });
        }
        
        // Caminhos de imagem locais
        function getImageCode(imageName) {
            const imagePaths = {
                "Blushcremoso.jpg": "imgs/produtos/Blushcremoso.jpg",
                "Blushliquido.jpg": "imgs/produtos/Blushliquido.jpg",
                "Conjuntodecoleçãocompleta.jpg": "imgs/produtos/Conjuntodecoleçãocompleta.jpg",
                "corretivotriplo.jpg": "imgs/produtos/corretivotriplo.jpg",
                "Gloss-domine.jpg": "imgs/produtos/Gloss-domine.jpg",
                "Hidratantelabios.jpg": "imgs/produtos/Hidratantelabios.jpg",
                "HydraJelly.jpg": "imgs/produtos/HydraJelly.jpg",
                "IluminadorBody.jpg": "imgs/produtos/IluminadorBody.jpg",
                "IluminadorLiquido.jpg": "imgs/produtos/IluminadorLiquido.jpg",
                "Pincelparabase.jpg": "imgs/produtos/Pincelparabase.jpg",
                "Pofixador.jpg": "imgs/produtos/Pofixador.jpg",
                "PrimerHydroSlime.jpg": "imgs/produtos/PrimerHydroSlime.jpg"
            };

        // Retorna o caminho da imagem ou uma imagem padrão se não encontrar
        return imagePaths[imageName] || "images/imagem-padrao.jpg";
        }

        
        // Adicionar ao carrinho
        function addToCart(e) {
            const productId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
            const product = produtos.find(p => p.id === productId);
            
            if (!product) return;
            
            // Verifica se o produto já está no carrinho
            const existingItem = cartItems.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({
                    id: product.id,
                    nome: product.nome,
                    preco: product.preco,
                    imagem: product.imagem,
                    quantity: 1
                });
            }
            
            // Atualizar o localStorage
            localStorage.setItem('cart', JSON.stringify(cartItems));
            
            // Atualizar a interface
            updateCartUI();
            
            // Animação de feedback
            const button = e.target.closest('.add-to-cart');
            button.innerHTML = '<i class="fas fa-check"></i> Adicionado';
            button.style.backgroundColor = 'var(--success)';
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-shopping-cart"></i> Adicionar';
                button.style.backgroundColor = '';
            }, 2000);
        }
        
        // Favoritar produto
        function toggleFavorite(e) {
            const button = e.target.closest('.fav-btn');
            const productId = parseInt(button.getAttribute('data-id'));
            const icon = button.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                button.classList.add('active');
                localStorage.setItem(`fav_${productId}`, 'true');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                button.classList.remove('active');
                localStorage.setItem(`fav_${productId}`, 'false');
            }
        }
        
        // FAtualizar a interface do carrinho
        function updateCartUI() {
            // Atualizar contador
            const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = itemCount;
            
            // Atualizar preview do carrinho
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
                const itemTotal = item.preco * item.quantity;
                subtotal += itemTotal;
                
                const imagePath = getImageCode(item.imagem);
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${imagePath}" alt="${item.nome}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.nome}</div>
                        <div class="cart-item-price">R$ ${(item.preco * item.quantity).toFixed(2)}</div>
                        <div class="cart-item-quantity">Quantidade: ${item.quantity}</div>
                        <button class="remove-from-cart" data-id="${item.id}">Remover</button>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Adicionar event listeners para remover itens
            document.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', removeFromCart);
            });
            
            // Calcular frete (grátis acima de R$150)
            const shipping = subtotal > 150 ? 0 : 15;
            const total = subtotal + shipping;
            
            // Atualizar totais
            cartSubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;
            cartShipping.textContent = `R$ ${shipping.toFixed(2)}`;
            cartTotal.textContent = `R$ ${total.toFixed(2)}`;
        }
        
        // Função para remover item do carrinho
        function removeFromCart(e) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            cartItems = cartItems.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateCartUI();
        }
        
        // Função para filtrar produtos por categoria
        function filterProducts(category) {
            if (category === 'all') {
                renderProducts(produtos);
            } else {
                const filteredProducts = produtos.filter(produto => produto.categoria === category);
                renderProducts(filteredProducts);
            }
        }
        
        // Event Listeners
        cartIcon.addEventListener('click', () => {
            cartVisible = !cartVisible;
            cartPreview.classList.toggle('active', cartVisible);
        });
        
        checkoutBtn.addEventListener('click', () => {
            Swal.fire({
            title: "Compra finalizada com sucesso!",
            text: "Obrigado por comprar na Sheglam.",
            icon: "success"
            });
            cartItems = [];
            localStorage.removeItem('cart');
            updateCartUI();
            cartPreview.classList.remove('active');
        });
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover classe active de todos os botões
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adicionar classe active ao botão clicado
                button.classList.add('active');
                
                // Filtrar produtos
                const category = button.getAttribute('data-category');
                filterProducts(category);
            });
        });
        
        // Fechar carrinho ao clicar fora
        document.addEventListener('click', (e) => {
            if (!cartPreview.contains(e.target) && !cartIcon.contains(e.target) && cartVisible) {
                cartPreview.classList.remove('active');
                cartVisible = false;
            }
        });
        
        // Inicializar a página
        renderProducts(produtos);
        updateCartUI();