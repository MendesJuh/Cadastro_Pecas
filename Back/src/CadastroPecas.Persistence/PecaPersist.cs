using System.Linq;
using System.Threading.Tasks;
using CadastroPecas.Domain;
using Microsoft.EntityFrameworkCore;
using CadastroPecas.Persistence.Interfaces;
using CadastroPecas.Persistence.Contexto;

namespace CadastroPecas.Persistence
{
    public class PecaPersist : IPecasPersist  
    {
        private readonly CadastroPecasContext _context;
        public PecaPersist(CadastroPecasContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;    
        }
        
        
        public async Task<Peca[]> GetAllPecasAsync()
        {
            IQueryable<Peca> query = _context.Pecas;
            


            query = query.OrderBy(e => e.Id);
            return await query.ToArrayAsync();
        }
        public async Task<Peca> GetPecaByIdAsync(int pecaId)
        {
            IQueryable<Peca> query = _context.Pecas;
         
           
            query = query.OrderBy(e => e.Id)
                        .Where(e => e.Id == pecaId);

            return await query.FirstOrDefaultAsync();
        }
        
    }
}