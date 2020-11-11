package com.performersinc.jobart.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.performersinc.jobart.model.CategoriaModel;

@Repository
public interface CategoriaRepository  extends JpaRepository<CategoriaModel, Long> {
	public List<CategoriaModel> findAllByNomeContainingIgnoreCase(String nome); 
}
