package com.cakedesigner.cakedesigner_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cakedesigner.cakedesigner_backend.model.Orcamento;

public interface OrcamentoRepository extends JpaRepository<Orcamento, Integer> {
}
