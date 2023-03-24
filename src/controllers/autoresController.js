import autores from '../models/Autor.js';

class AutorController {

    static listarAutores = (req, res) => {
        autores.find()
            .then(autores => { res.status(200).send(autores) })
            .catch(error => { res.status(500).send(`Erro ao encontrar Autor: ${error}`) })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id)
            .then(autor => { res.status(200).send(autor)})
            .catch(error => { res.status(400).send(`Autor não localizado: ${error}`)})

    }

    static cadatrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save()
            .then(autor => { res.status(201).send(autor) })
            .catch(error => { res.status(500).send(`Falha ao cadastrar o Autor: ${error}`) })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, { $set: req.body })
            .then(Autor => { res.status(200).send(`Autor ${Autor.nome} atualizado com sucesso!`) })
            .catch(error => { res.status(400).send(`Falha ao atualizar o Autor: ${error}`) })

    }

    static excluirAutor = (req, res) => {
        let id = req.params.id;
        autores.findByIdAndDelete(id)
            .then(res.status(200).send(`Autor com ID: ${id} excluído com sucesso!`))
            .catch(error => ( res.status(400).send(`Falha ao excluir o Autor: ${error}`)))
    }


}

export default AutorController;