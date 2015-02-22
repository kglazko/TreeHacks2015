<?php
if(!file_put_contents(__DIR__.'/log.log','output:'.print_r($_REQUEST,true))){
die('doesnt work');
}



?>