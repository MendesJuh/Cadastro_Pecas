using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CadastroPecas.Application.Dtos
{
    public class PecaDto
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
      
    }
}