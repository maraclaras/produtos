package com.cakedesigner.cakedesigner_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cakedesigner.cakedesigner_backend.model.Cliente;


public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    boolean existsByEmail(String email);
    Optional<Cliente> findByEmailAndSenha(String email, String senha);
}
