/* 
Este arquivo serve para requisitar os dados dos servidores federais.
Não há remuneração. A requisição para isto é feita no requestRemuneracao.js
*/

//Acessando os dados do governo federal sem a remuneração


export default async function buscarCPF(cpfsData) {

    cpfsData.forEach(async cpfPessoa => {
        const response = await fetch(`https://api.portaldatransparencia.gov.br/api-de-dados/servidores?cpf= ${cpfPessoa} &pagina=1`, {
            method: 'GET',
            headers: {
                "chave-api-dados": 'b3aff3829d5d54641225d4a7b8b04a35'
            },
        })
        const dadosEgresso = await response.json();

        if (dadosEgresso[0] != null) {
            console.log(dadosEgresso[0].servidor.pessoa.nome);
            console.log(dadosEgresso[0].servidor.pessoa.cpfFormatado);
            console.log(dadosEgresso[0].servidor.orgaoServidorLotacao.nome);
            console.log(dadosEgresso[0].fichasCargoEfetivo[0].dataIngressoOrgao);
            console.log(dadosEgresso[0].fichasCargoEfetivo[0].cargo);
        }
    })
}

//buscarCPF(cpfs);