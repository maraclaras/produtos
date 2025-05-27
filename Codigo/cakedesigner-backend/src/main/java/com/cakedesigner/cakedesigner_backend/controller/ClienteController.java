package com.cakedesigner.cakedesigner_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cakedesigner.cakedesigner_backend.model.Cliente;
import com.cakedesigner.cakedesigner_backend.service.ClienteService;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public Response cadastrar(@RequestBody Cliente cliente) {
        try {
            Cliente novo = clienteService.cadastrarCliente(cliente);
            return new Response(true, "Cliente cadastrado com sucesso");
        } catch (RuntimeException e) {
            return new Response(false, e.getMessage());
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

    @PostMapping("/login")
    public Response login(@RequestBody Cliente cliente) {
        try {
            Cliente autenticado = clienteService.autenticarCliente(cliente.getEmail(), cliente.getSenha());
            return new Response(true, "Login realizado com sucesso");
        } catch (RuntimeException e) {
            return new Response(false, e.getMessage());
        }
    }

}
