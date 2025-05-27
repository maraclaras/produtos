package com.cakedesigner.cakedesigner_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cakedesigner.cakedesigner_backend.model.Orcamento;
import com.cakedesigner.cakedesigner_backend.service.OrcamentoService;

@RestController
@RequestMapping("/api/orcamentos")
@CrossOrigin(origins = "*")
public class OrcamentoController {

    @Autowired
    private OrcamentoService orcamentoService;

    @PostMapping
    public Response criarOrcamento(@RequestBody Orcamento orcamento) {
        try {
            Orcamento novo = orcamentoService.salvar(orcamento);
            return new Response(true, "Orçamento criado com sucesso!");
        } catch (Exception e) {
            return new Response(false, "Erro ao criar orçamento: " + e.getMessage());
        }
    }

    static class Response {
        public boolean success;
        public String message;

        public Response(boolean success, String message) {
            this.success = success;
            this.message = message;
        }
    }
}
