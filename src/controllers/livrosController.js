import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
            .then(livros => { res.status(200).json(livros)})
            .catch(error => { console.log("Erro ao encontrar Livros", error)})
    }

}

export default LivroController;