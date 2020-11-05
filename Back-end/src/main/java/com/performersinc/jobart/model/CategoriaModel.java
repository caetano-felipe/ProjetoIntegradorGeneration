package com.performersinc.jobart.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_categoria_servicos")
public class CategoriaModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 5, max = 100)
	private String nome_categoria;
	
	@NotNull
	@Size(min = 10, max = 1000)
	private String descricao_categoria;
	
	@NotNull
	@Size(min = 5, max = 100)
	private String ramo_categoria;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome_categoria() {
		return nome_categoria;
	}

	public void setNome_categoria(String nome_categoria) {
		this.nome_categoria = nome_categoria;
	}

	public String getDescricao_categoria() {
		return descricao_categoria;
	}

	public void setDescricao_categoria(String descricao_categoria) {
		this.descricao_categoria = descricao_categoria;
	}

	public String getRamo_categoria() {
		return ramo_categoria;
	}

	public void setRamo_categoria(String ramo_categoria) {
		this.ramo_categoria = ramo_categoria;
	}

}
