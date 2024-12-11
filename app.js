const express = require('express');
const app = express();
const PORT = 3000;

// Lista de produtos com detalhes
const produtos = [
    {
        id: 1,
        nome: "Smartphone X",
        categoria: "Eletrônicos",
        preco: 1999.99,
        em_estoque: true,
        detalhes: {
            marca: "TechBrand",
            cor: "Preto",
            armazenamento: "128GB"
        }
    },
    {
        id: 2,
        nome: "Notebook Pro",
        categoria: "Informática", 
        preco: 4500.00,
        em_estoque: true,
        detalhes: {
            marca: "InnovaTech",
            processador: "Intel Core i7",
            ram: "16GB"
        }
    },
    {
        id: 3,
        nome: "Fones de Ouvido Wireless",
        categoria: "Áudio",
        preco: 299.50,
        em_estoque: false,
        detalhes: {
            marca: "SoundWave",
            cor: "Branco",
            bluetooth: true
        }
    }
];

// Middleware para parsing de JSON
app.use(express.json());

// Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Rota para buscar um produto específico por ID
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ erro: "Produto não encontrado" });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});