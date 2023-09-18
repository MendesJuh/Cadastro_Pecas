using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CadastroPecas.Domain;


namespace CadastroPecas.Persistence.Interfaces
{
    public interface IPecasPersist
    {
        

        //Peca
        
        Task<Peca[]> GetAllPecasAsync();
        Task<Peca> GetPecaByIdAsync(int pecaId); 

        

    }
}