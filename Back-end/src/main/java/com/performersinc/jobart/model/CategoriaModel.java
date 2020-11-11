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
	private String nome;
	
	@NotNull
	@Size(min = 10, max = 1000)
	private String descricao;
	
	@NotNull
	@Size(min = 5, max = 100)
	private String ramo;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome_categoria() {
		return nome;
	}

	public void setNome_categoria(String nome) {
		this.nome = nome;
	}

	public String getDescricao_categoria() {
		return descricao;
	}

	public void setDescricao_categoria(String descricao) {
		this.descricao = descricao;
	}

	public String getRamo_categoria() {
		return ramo;
	}

	public void setRamo_categoria(String ramo) {
		this.ramo = ramo;
	}

}
