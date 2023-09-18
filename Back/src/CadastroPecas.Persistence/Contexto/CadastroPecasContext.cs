using Microsoft.EntityFrameworkCore;
using CadastroPecas.Domain;

namespace CadastroPecas.Persistence.Contexto
{
    public class CadastroPecasContext: DbContext
    {
        public CadastroPecasContext(DbContextOptions<CadastroPecasContext> options): base(options)
        {
            
        }
        public DbSet<Peca> Pecas { get; set; }
        
        
    }
}