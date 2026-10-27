<?php
// GET /api/pathtype.php
// Retourne tous les types de pathologies

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendError('Méthode non autorisée', 405);
}

try {
    $db = getDB();
    $stmt = $db->query('SELECT * FROM PathType');
    sendJson($stmt->fetchAll());
} catch (PDOException $e) {
    sendError('Erreur base de données', 500);
}
