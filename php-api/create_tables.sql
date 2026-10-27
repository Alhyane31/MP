-- Script de création des tables MySQL pour Hostinger
-- À exécuter dans phpMyAdmin

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- Types de pathologies
CREATE TABLE IF NOT EXISTS `PathType` (
  `ID`        INT          NOT NULL AUTO_INCREMENT,
  `LibelleFR` VARCHAR(255) NOT NULL,
  `LibelleAR` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Pathologies (sans colonne history — gérée dans History)
CREATE TABLE IF NOT EXISTS `Path` (
  `ID`         INT NOT NULL AUTO_INCREMENT,
  `LibelleFR`  TEXT NOT NULL,
  `LibelleAR`  TEXT NOT NULL,
  `PathTypeID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `idx_PathTypeID` (`PathTypeID`),
  CONSTRAINT `fk_path_type` FOREIGN KEY (`PathTypeID`) REFERENCES `PathType` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Agents pathogènes (sans colonne history — gérée dans History)
CREATE TABLE IF NOT EXISTS `Agents` (
  `ID`        INT NOT NULL AUTO_INCREMENT,
  `LibelleFR` TEXT NOT NULL,
  `LibelleAR` TEXT NOT NULL,
  `NTAB`      VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `idx_NTAB` (`NTAB`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table de liaison Path ↔ Agents (via NTAB)
CREATE TABLE IF NOT EXISTS `PathTab` (
  `ID`     INT NOT NULL AUTO_INCREMENT,
  `IDPath` INT NOT NULL,
  `NTAB`   VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `idx_IDPath` (`IDPath`),
  KEY `idx_NTAB`   (`NTAB`),
  CONSTRAINT `fk_pathtab_path` FOREIGN KEY (`IDPath`) REFERENCES `Path` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Historique par appareil
CREATE TABLE IF NOT EXISTS `History` (
  `id`          INT NOT NULL AUTO_INCREMENT,
  `device_id`   VARCHAR(64) NOT NULL,
  `type`        ENUM('path','agent') NOT NULL,
  `item_id`     INT NOT NULL,
  `accessed_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_device_item` (`device_id`, `type`, `item_id`),
  KEY `idx_device_date` (`device_id`, `type`, `accessed_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
