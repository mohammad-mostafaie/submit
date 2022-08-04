<?php

if ($_POST['Username'] == 'ali' && $_POST['psw'] == '222' && $_POST['age']=='25' ) {
    echo("wellcome ali");
}
else{
    echo ("username or password is false");
}


$file=fopen('text.txt','w');
fputs($file,$_POST['Username'].PHP_EOL );
fputs($file,$_POST['psw'].PHP_EOL);
fputs($file,$_POST['age'].PHP_EOL);

