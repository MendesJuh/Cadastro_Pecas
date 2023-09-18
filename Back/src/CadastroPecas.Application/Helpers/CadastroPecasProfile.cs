using AutoMapper;
using CadastroPecas.Application.Dtos;
using CadastroPecas.Domain;

namespace ProEventos.Application.Helpers
{
    public class CadastroPecasProfile : Profile
    {
        public CadastroPecasProfile()
        {
            CreateMap<Peca, PecaDto>().ReverseMap();
           
        }
    }
}