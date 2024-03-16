const turma = {
    nomeDaTurma:  'TI 24'
}

const alunos = [
    {
        nome: 'Adão',
        cadeiras:  [
            {
                nome: 'DWII',
                nota: 8,
            },
            {
                nome: 'LP1',
                nota: 7.5,
            },
            {
                nome: 'Banco de Dados',
                nota: 9,
            },
            {
                nome: 'ASP',
                nota: 8.5,
            }
        ]

    },

    {
        nome: 'Eduardo',
        cadeiras:  [
            {
                nome: 'DWII',
                nota: 8.3,
            },
            {
                nome: 'LP1',
                nota: 8,
            },
            {
                nome: 'Banco de Dados',
                nota: 7.5,
            },
            {
                nome: 'ASP',
                nota: 7.9,
            }
        ]
    },
    {
        nome: 'juliano',
        cadeiras:  [
            {
                nome: 'DWII',
                nota: 7,
            },
            {
                nome: 'LP1',
                nota: 7.5,
            },
            {
                nome: 'Banco de Dados',
                nota: 8.5
            },
            {
                nome: 'ASP',
                nota: 9,
            }
        ]
    },
    {
        nome: 'davi',
        cadeiras:  [
            {
                nome: 'DWII',
                nota: 9,
            },
            {
                nome: 'LP1',
                nota: 8.5,
            },
            {
                nome: 'Banco de Dados',
                nota: 9.3
            },
            {
                nome: 'ASP',
                nota: 8,
            }
        ]
    },
        
    ]
   function gerarMedia(aluno){
    const cadeiras = aluno.cadeiras;
    let _nota = 0;
    for(let cadeira of cadeiras){
        const nota = cadeira.nota;
        _nota += nota;
    }
    _nota = _nota / cadeiras.length;
    aluno.mediaGeral = _nota;
    return aluno;
   }

   for (let aluno of alunos){
    gerarMedia(aluno);

   }
    function filtraMaiorMedia(_alunos){
        let maiorMedia = 0;
        let aluno;
        for(let aluno of _alunos){
            if(aluno.mediaGeral > maiorMedia){
                maiorMedia = aluno.mediaGeral;
                _aluno = aluno;
            
            }
        }
        console.log(_aluno);
        

    }
    
    filtraMaiorMedia(alunos);

   console.log(alunos);

   console.log(gerarMedia(alunos[0]))
   


