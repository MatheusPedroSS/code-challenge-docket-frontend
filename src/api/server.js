import axios from 'axios';

async function insertCartorio (cartorio) {
    await axios.post('http://localhost:8080/cartorio', cartorio).then(() => (
        alert(`Cartorio ${cartorio.nome}, inserido com sucesso!`)
    ));
}

async function findAll() {
    const response = await axios.get('http://localhost:8080/cartorio').then(c => c.data);
    return response;
}

export {insertCartorio, findAll};