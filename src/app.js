import { LightningElement } from 'lwc';

// importar a classe que vai ser utilizada para retornar os registros
// JS > Quando eu quiser chamar o metodo para buscar registros
// getAllAccounts 
// NomeClasse.MetodoDaClasse
import getAllAccounts from '@salesforce/apex/AccountDAO.queryAccounts';

export default class Tabela extends LightningElement {
    erros;
    // Declaro minha variavel data como Array ( Lista de Valores )
    listinha =  [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Website: 'VP of Engineering',
            Phone : '4545454545',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Website: 'VP of Engineering',
            Phone : '4545454545',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Website: 'VP of Engineering',
            Phone : '4545454545',
        },
    ];
    // colunas dentro do meu escopo do LWC
   
    // ConnectedCallBack > OnLoad > Ao carregar o component
    connectedCallback() {
		// this.chamaAsContaTudo();
	}

    // Criei uma função chamada chamaAsContaTudo
    chamaAsContaTudo() {
        // Chamando a classe APEX
        // arrow function
		getAllAccounts()
            //then > Se tudo correr bem
			.then(result => {
				console.log('Result',result);
                this.listinha = result;
			})
            //catch > Caso de algo de errado
			.catch(error => {
                this.erros = error;
                console.log('Erro foi', this.erros);
			});
	}

}