using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CadastroPecas.Application.Contratos;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Http;
using CadastroPecas.Application.Dtos;

namespace CadastroPecas.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PecasController : ControllerBase
    {
        
        
        
        private readonly ICadastroPecasService _pecasService;

        public PecasController(ICadastroPecasService pecasService)
        {
            _pecasService = pecasService;
            
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var pecas = await _pecasService.GetAllPecasAsync();
                if (pecas ==null) return NoContent();
                return Ok(pecas);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar as Peças. Erro: {ex.Message}");
            }
            
        }
        [HttpGet("{id}")]
        public async Task<IActionResult>GetById(int id)
        {
            try
            {
                var peca = await _pecasService.GetPecaByIdAsync(id);
                if (peca ==null) return NoContent();
                return Ok(peca);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar a peça. Erro: {ex.Message}");
            }
            
        }
        
        [HttpPost]
        public async Task<IActionResult> Post(PecaDto model)
        {
            try
            {
                var peca = await _pecasService.AddPeca(model);
                if (peca ==null) return NoContent();
                return Ok(peca);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar inserir a peça. Erro: {ex.Message}");
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, PecaDto model)
        {
            try
            {
                var peca = await _pecasService.UpdatePeca(id, model);
                if (peca ==null) return NoContent();
                return Ok(peca);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar atualizar a peça. Erro: {ex.Message}");
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var peca = await _pecasService.GetPecaByIdAsync(id);
                if (peca ==null) return NoContent();

                return await _pecasService.DeletePeca(id) ? 
                Ok(new {message = "Deletado"}) : 
                throw new Exception("Ocorre um problema não específico ao tentar delatar a peça");
                
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar deletar a peça. Erro: {ex.Message}");
            }
        }
    }
}
