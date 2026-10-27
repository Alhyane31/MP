<?php
// GET  /api/history.php?device_id=xxx&type=path   → 3 derniers items consultés
// POST /api/history.php  body: {"device_id":"xxx","type":"path","item_id":5}

require_once __DIR__ . '/config.php';

try {
    $db = getDB();

    // ── Lecture historique ────────────────────────────────────────────────────
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if (!isset($_GET['device_id'], $_GET['type'])) {
            sendError('Paramètres manquants : device_id et type requis', 400);
        }

        $deviceId = $_GET['device_id'];
        $type     = $_GET['type'];

        if ($type === 'path') {
            $stmt = $db->prepare(
                'SELECT p.* FROM Path p
                 INNER JOIN History h ON h.item_id = p.ID
                 WHERE h.device_id = ? AND h.type = "path"
                 ORDER BY h.accessed_at DESC
                 LIMIT 3'
            );
            $stmt->execute([$deviceId]);
            sendJson($stmt->fetchAll());
        }

        if ($type === 'agent') {
            $stmt = $db->prepare(
                'SELECT a.* FROM Agents a
                 INNER JOIN History h ON h.item_id = a.ID
                 WHERE h.device_id = ? AND h.type = "agent"
                 ORDER BY h.accessed_at DESC
                 LIMIT 3'
            );
            $stmt->execute([$deviceId]);
            sendJson($stmt->fetchAll());
        }

        sendError('Type invalide : utiliser "path" ou "agent"', 400);
    }

    // ── Enregistrement d'un accès ─────────────────────────────────────────────
    if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT') {
        $body = json_decode(file_get_contents('php://input'), true);

        if (!isset($body['device_id'], $body['type'], $body['item_id'])) {
            sendError('Paramètres manquants : device_id, type et item_id requis', 400);
        }

        $deviceId = $body['device_id'];
        $type     = $body['type'];
        $itemId   = (int) $body['item_id'];

        if (!in_array($type, ['path', 'agent'])) {
            sendError('Type invalide : utiliser "path" ou "agent"', 400);
        }

        // INSERT ou mise à jour si déjà consulté sur cet appareil
        $stmt = $db->prepare(
            'INSERT INTO History (device_id, type, item_id, accessed_at)
             VALUES (?, ?, ?, NOW())
             ON DUPLICATE KEY UPDATE accessed_at = NOW()'
        );
        $stmt->execute([$deviceId, $type, $itemId]);
        sendJson(['success' => true]);
    }

    sendError('Méthode non autorisée', 405);

} catch (PDOException $e) {
    sendError('Erreur base de données', 500);
}
