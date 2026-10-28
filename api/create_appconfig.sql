-- Réglages de l'application (mise à jour, maintenance, liens) — à exécuter dans phpMyAdmin
-- Pour changer un réglage : onglet « Parcourir » de la table AppConfig, modifier la colonne `valeur`.

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS `AppConfig` (
  `cle`         VARCHAR(64)  NOT NULL,
  `valeur`      TEXT         NOT NULL,
  `description` VARCHAR(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`cle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `AppConfig` (`cle`, `valeur`, `description`) VALUES
  ('min_version',        '1.0.0', 'En dessous de cette version, mise à jour obligatoire (écran bloquant)'),
  ('latest_version',     '1.3.2', 'En dessous de cette version, mise à jour proposée (bouton « Plus tard »)'),
  ('maintenance',        '0',     '1 = application en maintenance, 0 = normale'),
  ('maintenance_msg_fr', '',      'Message de maintenance en français (vide = message par défaut)'),
  ('maintenance_msg_ar', '',      'Message de maintenance en arabe (vide = message par défaut)'),
  ('website_url',        'https://sandybrown-giraffe-796579.hostingersite.com/', 'Lien du bouton « Visitez le site web »'),
  ('store_ios',          'https://apps.apple.com/ma/app/tmp-maroc/id6743329745', 'Lien App Store'),
  ('store_android',      'https://play.google.com/store/apps/details?id=com.app.MP', 'Lien Google Play');
