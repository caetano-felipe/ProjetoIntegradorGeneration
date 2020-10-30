CREATE TABLE `tb_categoria_servicos` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome_categoria` varchar(255) NOT NULL,
	`descricao_categoria` varchar(255) NOT NULL,
	`ramo_categoria` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `cliente` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome_cliente` varchar(255) NOT NULL,
	`email_cliente` varchar(255) NOT NULL,
	`senha_cliente` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_prestador_servicos` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome_prestador_servicos` varchar(255) NOT NULL,
	`tipo_servicos` varchar(255) NOT NULL,
	`valor_hora_prestador_servicos` DECIMAL(10,2) NOT NULL,
	`localidade_prestador_servicos` varchar(255) NOT NULL,
	`categoria_servicos_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_prestador_servicos` ADD CONSTRAINT `tb_prestador_servicos_fk0` FOREIGN KEY (`categoria_servicos_id`) REFERENCES `tb_categoria_servicos`(`id`);

