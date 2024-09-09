class Aluno {
    Nome;
    Idade;
    Nota;
    constructor (nome, idade, nota){
        this.Nome = nome;
        this.Idade = idade;
        this.Nota = nota;
    }
}
    let arrayAlunos = [];

    function CadastrarAluno(nome, idade, nota, arrayAlunos){

    const aluno = new Aluno (nome, idade, nota);
    
    
    if(arrayAlunos.some (x => x.Nome == nome)){
        this.arrayAlunos.push(aluno)
        return aluno
    } else {
        return false;
    }
}

function OrdernarPorNota(arrayAlunos){
    arrayAlunos.sort((a, b) => a.Nota - b.Nota)
    return arrayAlunos;
}

function OrdernarPorIdade(arrayAlunos){
    arrayAlunos.sort((a, b) => b.Idade - a.Idade)
    return arrayAlunos;
}

function OrdernarPorNome(arrayAlunos){
    arrayAlunos.sort((a,b) =>{
        const nomeA = a.Nome.toUpperCase();
        const nomeB = b.Nome.toUpperCase();

        if (nomeA < nomeB){
            return -1;
        } 
        if (nomeA > nomeB){
            return 1;
        }
        return 0;
    });
    return arrayAlunos;
}

function CalcularMedia(arrayAlunos){
    if (arrayAlunos.length === 0){
        return 0;
    }
    let somaNotas = 0;

    arrayAlunos.forEach((aluno) =>{
        somaNotas += Number(aluno.Nota)
    })

    const media = somaNotas / arrayAlunos.length;
    return media;
}





