<?php

date_default_timezone_set('America/Sao_Paulo');
error_reporting(E_ALL);
ini_set('display_errors', 1);

/*
 * Variaveis do Post
 */


$nome = $_POST['nome'];
// $empresa = $_POST['empresa'];
$email = $_POST['email'];


// print_r($_POST);
// exit;

/**
 * Configuração inicial
 * Este arquivo contém as variáveis necessárias
 * Para disparo seguro e confiável da mensagem
 * Troque as variáveis pelos dados corretos
 * Cabeçalhos adicionais aceitam email,nome (nessa ordem e formato)
 */

$nome_remetente = utf8_decode("Marketing Manager");
$email_remetente = "gmarion@marketingmanager.com.br";
$assunto = "Baixou Ebook - 5 passos | {$nome_remetente}";


$para = "gmarion@marketingmanager.com.br";
$nome_para = utf8_decode("Marketing Manager");


/**
 * Mensagens de erro e sucesso (alertas javascript)
 * Para quebra de linhas, inserir \\n
 */

$alert_sucesso = "Mensagem enviada com sucesso";
$alert_erro = "Houve um erro ao processar a mensagem, por favor, tente novamente";
$retorno_sucesso = "http://www.marketingmanager.com.br/materiais/ebooks/5-passos-facebook-instagram-ads/obrigado.html";

/**
 * Modelo em HTML que será
 * utilizado para envio da mensagem
 */

$template_email = "dist/plugins/samus__mail/public-templates/modelo-contato.html";

/**
 * Codificação do arquivo (template)
 * geralmente iso-8859-1 ou utf-8
 */

$charset = "iso-8859-1";

$erro = false;
$msgErro = array();



if (empty($nome)) {
    $erro = true;
    $msgErro[] = "O nome precisa ser preenchido";
}

// if (empty($empresa)) {
//     $erro = true;
//     $msgErro[] = "A empresa precisa ser preenchido";
// }

if (empty($email)) {
    $erro = true;
    $msgErro[] = "O e-mail precisa ser preenchido";
}

if ($erro) {

    echo '<h1>Houve algum problema ao enviar a mensagem</h1>';
    echo '<ul>';

    foreach ($msgErro as $valor):
        echo "<li>{$valor}</li>";
    endforeach;

    echo '</ul>';
    echo '<hr />';
    echo "<p><a href='javascript:history.go(-1);'>Tente novamente</a></p>";

    exit;
}

$variaveis = array(
    'nome' => $nome,
    // 'empresa' => $empresa,
    'email' => $email,
    'ip' => $_SERVER['REMOTE_ADDR'],
);

$mensagem = file_get_contents($template_email);
foreach($variaveis as $key => $value):
	$mensagem = str_replace('{'.$key.'}',$value,$mensagem);
endforeach;

$headers = 
	'From: '.$nome_remetente. ' <'.$email_remetente.'>' . "\r\n" .
	'Reply-To: '.$nome_remetente. ' <'.$email_remetente.'>' . "\r\n" .
	'MIME-Version: 1.1' . "\r\n" .
    'Content-type: text/html; charset=UTF-8' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

if(!mail($nome_para . '<'.$para.'>',$assunto,$mensagem,$headers)){
	echo $alert_erro;
}

?>

<script>
	alert('<?php echo $alert_sucesso; ?>');
	window.location.href = '<?php echo $retorno_sucesso; ?>';
</script>
