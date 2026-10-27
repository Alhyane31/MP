<?php
// GET /api/agents.php                  → tous les agents
// GET /api/agents.php?ntab=42          → agents d'un numéro de tableau
// GET /api/agents.php?pathID=5         → agents liés à une pathologie (via PathTab)
// GET /api/agents.php?distinctNtab=1   → liste des NTAB distincts
// GET /api/agents.php?history=1        → 3 derniers agents consultés

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendError('Méthode non autorisée', 405);
}

try {
    $db = getDB();

    if (isset($_GET['ntab'])) {
        $stmt = $db->prepare('SELECT * FROM Agents WHERE NTAB = ?');
        $stmt->execute([$_GET['ntab']]);
        sendJson($stmt->fetchAll());
    }

    if (isset($_GET['pathID'])) {
        $stmt = $db->prepare(
            'SELECT * FROM Agents WHERE NTAB IN (SELECT PathTab.NTAB FROM PathTab WHERE IDPath = ?)'
        );
        $stmt->execute([(int) $_GET['pathID']]);
        sendJson($stmt->fetchAll());
    }

    if (isset($_GET['distinctNtab'])) {
        $stmt = $db->query('SELECT DISTINCT NTAB FROM Agents');
        sendJson($stmt->fetchAll(PDO::FETCH_ASSOC));
    }

    // Sans paramètre → tous les agents
    $stmt = $db->query('SELECT * FROM Agents');
    sendJson($stmt->fetchAll());

} catch (PDOException $e) {
    sendError('Erreur base de données', 500);
}
