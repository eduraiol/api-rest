import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
            .then(livros => { res.status(200).send(livros) })
            .catch(error => { res.status(500).send(`Erro ao encontrar Livros: ${error}`) })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .then(livro => { res.status(200).send(livro)})
            .catch(error => { res.status(400).send(`Livro não localizado: ${error}`)})

    }

    static cadatrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save()
            .then(livro => { res.status(201).send(livro) })
            .catch(error => { res.status(500).send(`Falha ao cadastrar o livro: ${error}`) })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body })
            .then(livro => { res.status(200).send(`Livro ${livro.titulo} atualizado com sucesso!`) })
            .catch(error => { res.status(500).send(`Fala ao atualizar o livro: ${error}`) })

    }

    static deletarLivro = (req, res) => {
        let id = req.params.id;

        
    }
}

export default LivroController;