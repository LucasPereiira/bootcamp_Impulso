const alunos = [
{
    nome: 'João',
    nota: 5,
    turma: '18',
},
{
    nome: 'Sofia',
    nota: 9,
    turma: '18',
},
{
    nome: 'Paulo',
    nota: 6,
    turma: '2C'
},
{
    nome: 'Miguel',
    nota: 3,
    turma: '2C'
},
]


function aprovados(arr,media)
{
    let aprovados = [];

    for( let i = 0; i < arr.length; i++)
    {
        if(arr[i].nota >= media)
        {
            aprovados.push(arr[i].nome);
        }
    }

    return aprovados;
}

console.log(aprovados(alunos, 5));