<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
 $nome = htmlentities($_REQUEST['nome'], ENT_QUOTES );

//print_r($_REQUEST);

$conexao = new PDO('mysql:host=localhost:3306;dbname=ajax', 'root', '');

$sql = "insert into aluno (nome) values(:nome)";

$query = $conexao->prepare($sql);
$query->bindParam(':nome', $nome);

try{
    $query->execute();
    echo json_encode('Ok');

}catch(Exception $e){
    echo json_encode($e->getMessage());
    
}



