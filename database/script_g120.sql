-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb_g120
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb_g120
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb_g120` DEFAULT CHARACTER SET utf8 ;
USE `mydb_g120` ;

-- -----------------------------------------------------
-- Table `mydb_g120`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_g120`.`persona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `dni` VARCHAR(45) NULL,
  `sobreMi` VARCHAR(250) NULL,
  `fechaNac` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_g120`.`titulos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_g120`.`titulos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_g120`.`institucionEducativa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_g120`.`institucionEducativa` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_g120`.`educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_g120`.`educacion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `añoInicio` SMALLINT(4) NULL,
  `añoFin` SMALLINT(4) NULL,
  `idPersona` INT NOT NULL,
  `idTitulo` INT NOT NULL,
  `idInstitucion` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_educacion_persona_idx` (`idPersona` ASC) VISIBLE,
  INDEX `fk_educacion_titulos1_idx` (`idTitulo` ASC) VISIBLE,
  INDEX `fk_educacion_institucionEducativa1_idx` (`idInstitucion` ASC) VISIBLE,
  CONSTRAINT `fk_educacion_persona`
    FOREIGN KEY (`idPersona`)
    REFERENCES `mydb_g120`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_educacion_titulos1`
    FOREIGN KEY (`idTitulo`)
    REFERENCES `mydb_g120`.`titulos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_educacion_institucionEducativa1`
    FOREIGN KEY (`idInstitucion`)
    REFERENCES `mydb_g120`.`institucionEducativa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb_g120`.`institucionEducativa_has_titulos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_g120`.`institucionEducativa_has_titulos` (
  `idInstitucion` INT NOT NULL,
  `idTitulo` INT NOT NULL,
  PRIMARY KEY (`idInstitucion`, `idTitulo`),
  INDEX `fk_institucionEducativa_has_titulos_titulos1_idx` (`idTitulo` ASC) VISIBLE,
  INDEX `fk_institucionEducativa_has_titulos_institucionEducativa1_idx` (`idInstitucion` ASC) VISIBLE,
  CONSTRAINT `fk_institucionEducativa_has_titulos_institucionEducativa1`
    FOREIGN KEY (`idInstitucion`)
    REFERENCES `mydb_g120`.`institucionEducativa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_institucionEducativa_has_titulos_titulos1`
    FOREIGN KEY (`idTitulo`)
    REFERENCES `mydb_g120`.`titulos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
