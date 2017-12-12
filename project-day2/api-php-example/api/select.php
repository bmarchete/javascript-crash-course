<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
 
$conexao = new PDO('mysql:host=localhost:3306;dbname=ajax', 'root', '');

$sql = "select * from aluno";

$query = $conexao->prepare($sql);


try{
    $query->execute();
    
    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);

}catch(Exception $e){
    echo json_encode($e->getMessage());
    
}



