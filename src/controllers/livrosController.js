import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
            .then(livros => { res.status(200).send(livros)})
            .catch(error => { res.status(500).send(`Erro ao encontrar Livros: ${error}`)})
    }

    static cadatrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save()
            .then(livro => { res.status(201).send(livro) })
            .catch(error => { res.status(500).send(`Falha ao cadastrar o livro: ${error}`) } )
    }
}

export default LivroController;