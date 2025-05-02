function gerarCPF() {
    let n = [];
    for (let i = 0; i < 9; i++) {
      n.push(Math.floor(Math.random() * 10));
    }
  
    let d1 = n.reduce((acc, val, i) => acc + val * (10 - i), 0);
    d1 = 11 - (d1 % 11);
    d1 = d1 >= 10 ? 0 : d1;
  
    let d2 = n.concat(d1).reduce((acc, val, i) => acc + val * (11 - i), 0);
    d2 = 11 - (d2 % 11);
    d2 = d2 >= 10 ? 0 : d2;
  
    const cpf = [...n, d1, d2].join('');
    const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    document.getElementById('cpf').textContent = cpfFormatado;
  }
  
  function copiarCPF() {
    const cpf = document.getElementById('cpf').textContent;
    navigator.clipboard.writeText(cpf);
  }
  