using System;
using System.Collections.Generic;

namespace CadastroPecas.Domain
{
    public class Peca
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
    }
}