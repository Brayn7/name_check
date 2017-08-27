<?php 



   echo 'start';

   $file = 'logfile.txt';

   $old = file_get_contents($file);

   $new = "new";

   file_put_contents($file, $new . "\n" . $old);

   echo 'done';


?>