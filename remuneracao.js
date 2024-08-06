/*
Este arquivo serve para requisitar especificamente a remuneração
*/

// Acessando especificamente a remuneração





export default async function buscarCPF(cpfsData) {


    cpfsData.forEach(async cpfPessoa => {
        const response = await fetch(`https://api.portaldatransparencia.gov.br/api-de-dados/servidores/remuneracao?cpf= ${cpfPessoa} &mesAno=202401&pagina=1`, {
            method: 'GET',
            headers: {
                "chave-api-dados": 'b3aff3829d5d54641225d4a7b8b04a35'
            },
        })
        const dadosEgresso = await response.json();

        if (dadosEgresso[0] != null) {
            console.log(dadosEgresso[0].remuneracoesDTO[0].remuneracaoBasicaBruta);
        }
    })
}

//buscarCPF(cpfs);