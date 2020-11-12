package com.performersinc.jobart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.performersinc.jobart.model.ProdutoModel;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoModel, Long> {
	public List<ProdutoModel> findAllByNomeContainingIgnoreCase(String nome);
	public List<ProdutoModel> findAllByTipoContainingIgnoreCase(String tipo);
	
}
