using System.Threading.Tasks;
using CadastroPecas.Application.Dtos;

namespace CadastroPecas.Application.Contratos
{
    public interface ICadastroPecasService
    {
        Task<PecaDto> AddPeca(PecaDto model);
        Task<PecaDto> UpdatePeca(int pecaId, PecaDto model);
        Task<bool> DeletePeca(int pecaId);
        Task<PecaDto[]> GetAllPecasAsync();
        Task<PecaDto> GetPecaByIdAsync(int pecaId);

    }
}