<?php
// GET /api/paths.php?pathTypeID=3      → pathologies d'un type
// GET /api/paths.php?ntab=42           → pathologies d'un numéro de tableau
// GET /api/paths.php?history=1         → 3 dernières pathologies consultées

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendError('Méthode non autorisée', 405);
}

try {
    $db = getDB();

    if (isset($_GET['pathTypeID'])) {
        $stmt = $db->prepare('SELECT * FROM Path WHERE PathTypeID = ?');
        $stmt->execute([(int) $_GET['pathTypeID']]);
        sendJson($stmt->fetchAll());
    }

    if (isset($_GET['ntab'])) {
        $stmt = $db->prepare(
            'SELECT * FROM Path WHERE id IN (SELECT IDPath FROM PathTab WHERE NTAB = ?)'
        );
        $stmt->execute([$_GET['ntab']]);
        sendJson($stmt->fetchAll());
    }

    if (isset($_GET['history'])) {
        $stmt = $db->query(
            'SELECT * FROM Path WHERE history IS NOT NULL ORDER BY history DESC LIMIT 3'
        );
        sendJson($stmt->fetchAll());
    }

    sendError('Paramètre manquant : pathTypeID, ntab ou history', 400);

} catch (PDOException $e) {
    sendError('Erreur base de données', 500);
}
