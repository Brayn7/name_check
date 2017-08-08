<?php 



   echo 'start';

   file_put_contents('./docs/sdn.xml', fopen('https://www.treasury.gov/ofac/downloads/sdn.xml', 'r'));

   echo 'done';
?>