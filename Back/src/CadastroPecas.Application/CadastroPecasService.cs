using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CadastroPecas.Application.Contratos;
using CadastroPecas.Application.Dtos;
using CadastroPecas.Domain;
using CadastroPecas.Persistence.Interfaces;

namespace CadastroPecas.Application
{
    public class CadastroPecasService : ICadastroPecasService
    {
        private readonly IGeralPersist _geralPersist;
        private readonly IPecasPersist _pecaPersist;
        private readonly IMapper _mapper;
        public CadastroPecasService(IGeralPersist geralPersist, 
                            IPecasPersist pecaPersist, 
                            IMapper mapper)
        {
            _pecaPersist = pecaPersist;
            _geralPersist = geralPersist;
            _mapper = mapper;
            
        }
        public async Task<PecaDto> AddPeca(PecaDto model)
        {
            
            try
            {
                var peca = _mapper.Map<Peca>(model);

                _geralPersist.Add<Peca>(peca);
                if (await _geralPersist.SaveChangesAsync())
                {
                    return _mapper.Map<PecaDto>(await _pecaPersist.GetPecaByIdAsync(peca.Id));
                }
                return null;
            }
            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }

        public async Task<bool> DeletePeca(int pecaId)
        {
            try
            {
                var peca = await _pecaPersist.GetPecaByIdAsync(pecaId);
                if (peca == null)throw new Exception("Peça para Delete não foi encontrado");
                

                _geralPersist.Delete<Peca>(peca);
                return await _geralPersist.SaveChangesAsync();
                
            }
            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }

        public async Task<PecaDto[]> GetAllPecasAsync()
        {
            try
            {
                var pecas = await _pecaPersist.GetAllPecasAsync();
                if (pecas == null) return null;
                var resultado =  _mapper.Map<PecaDto[]>(pecas);
                return resultado;
            }
            catch (Exception ex)
            {   
                throw new Exception(ex.Message);
            }
        }

        public async Task<PecaDto> GetPecaByIdAsync(int pecaId)
        {
            try
            {
                var peca = await _pecaPersist.GetPecaByIdAsync(pecaId);
                if (peca == null) return null;
                var resultado =  _mapper.Map<PecaDto>(peca);
                return resultado;
            }
            catch (Exception ex)
            {   
                throw new Exception(ex.Message);
            }
        }

        public async Task<PecaDto> UpdatePeca(int pecaId, PecaDto model)
        {
            
            try
            {
                var peca = await _pecaPersist.GetPecaByIdAsync(pecaId);
                if (peca == null)return null;
                
                model.Id = pecaId;
                
                _mapper.Map(model, peca);
                _geralPersist.Update<Peca>(peca);
                if (await _geralPersist.SaveChangesAsync())
                {
                    return _mapper.Map<PecaDto>(await _pecaPersist.GetPecaByIdAsync(peca.Id));
                }
                return null;
            }
            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }
    }
}