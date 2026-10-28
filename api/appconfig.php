<?php
// GET /api/appconfig.php
// Retourne les réglages de l'application sous forme d'objet { cle: valeur }
// (mise à jour nécessaire, maintenance, liens site / stores)

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendError('Méthode non autorisée', 405);
}

try {
    $db = getDB();
    $stmt = $db->query('SELECT cle, valeur FROM AppConfig');
    $config = [];
    foreach ($stmt->fetchAll() as $row) {
        $config[$row['cle']] = $row['valeur'];
    }
    header('Cache-Control: no-store');
    sendJson((object) $config);
} catch (PDOException $e) {
    sendError('Erreur base de données', 500);
}
