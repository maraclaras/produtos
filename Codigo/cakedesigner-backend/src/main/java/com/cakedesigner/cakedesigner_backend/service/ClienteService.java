package com.cakedesigner.cakedesigner_backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cakedesigner.cakedesigner_backend.model.Cliente;
import com.cakedesigner.cakedesigner_backend.repository.ClienteRepository;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente cadastrarCliente(Cliente cliente) {
        if (clienteRepository.existsByEmail(cliente.getEmail())) {
            throw new RuntimeException("Email já cadastrado");
        }
        return clienteRepository.save(cliente);
    }

    public Cliente autenticarCliente(String email, String senha) {
        return clienteRepository.findByEmailAndSenha(email, senha)
                .orElseThrow(() -> new RuntimeException("Email ou senha inválidos"));
    }
    
}
