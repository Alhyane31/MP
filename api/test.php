<?php
// Fichier de test — À SUPPRIMER après vérification
require_once __DIR__ . '/config.php';

$tests = [];

// Test connexion BDD
try {
    $db = getDB();
    $tests['connexion_bdd'] = '✅ OK';
} catch (Exception $e) {
    $tests['connexion_bdd'] = '❌ ' . $e->getMessage();
}

// Test tables
$tables = ['PathType', 'Path', 'Agents', 'PathTab'];
foreach ($tables as $table) {
    try {
        $stmt = $db->query("SELECT COUNT(*) as total FROM `$table`");
        $row = $stmt->fetch();
        $tests["table_$table"] = '✅ ' . $row['total'] . ' lignes';
    } catch (Exception $e) {
        $tests["table_$table"] = '❌ Table introuvable';
    }
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($tests, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
