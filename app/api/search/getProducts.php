<?php
include '../../db/db_connect.php';

header('Content-Type: application/json');

$keyword = $_GET['keyword'] ?? '';

if (!$keyword) {
  echo json_encode(['error' => 'No keyword provided']);
  exit;
}

$keyword = "%{$keyword}%";

try {
  // 商品と商品画像を結合し、さらに販売状態を取得
  $stmt = $pdo->prepare("
    SELECT p.*, pi.path AS productImagePath, 
           (CASE WHEN p.status_id = 261 THEN true ELSE false END) AS isSold
    FROM PRODUCT p
    LEFT JOIN PRODUCT_IMAGE pi ON p.product_id = pi.product_id AND pi.order = 1
    WHERE p.product_name LIKE :keyword
    ORDER BY p.datetime DESC
  ");
  $stmt->execute(['keyword' => $keyword]);
  $products = $stmt->fetchAll();

  $formattedProducts = [];
  foreach ($products as $product) {
    $formattedProducts[] = [
      'productId' => $product['product_id'],
      'product' => [
        'productName' => $product['product_name'],
        'productImagePath' => $product['productImagePath'],
        'price' => $product['price'],
        'isSold' => $product['isSold'],
        'date' => $product['datetime']
      ]
    ];
  }

  echo json_encode($formattedProducts);
} catch (\PDOException $e) {
  echo json_encode(['error' => $e->getMessage()]);
}
