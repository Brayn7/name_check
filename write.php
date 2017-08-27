<?php 



   echo "start\n";


   // $local = file_get_contents('./docs/sdn.xml');

   // $xmlLocal = new SimpleXMLElement($local);

   // $localDate = strtotime($xmlLocal->publshInformation->Publish_Date);

   // // drop content stream
   // unset($local);
   // // drop xml instace to free space
   // unset($xmlLocal);

   // $incoming = file_get_contents('https://www.treasury.gov/ofac/downloads/sdn.xml');

   // $xmlIncoming = new SimpleXMLElement($incoming);

   // $IncomingDate = strtotime($xmlIncoming->publshInformation->Publish_Date);

   // // drop content stream
   // unset($incoming);   

   // if ($localDate !== $IncomingDate){
   //       // write to logfile the publish date
   //       $file = 'logfile.txt';
   //       // current content
   //       $oldDates = file_get_contents($file);
   //       // new content
   //       $newDate = date("m.d.Y", $IncomingDate);
   //       // prepend new content
   //       file_put_contents($file, $newDate . "\n" . $oldDates);

   //       // rewrite sdn.xml file
   //      file_put_contents('docs/sdn.xml', fopen('https://www.treasury.gov/ofac/downloads/sdn.xml', 'r'));

   //      DB::table('entries')->truncate();

   //      \Artisan::call('db:seed');

   //      \Artisan::call('scout:flush', ['model' => "App\Entry"]);

   //      \Artisan::call('scout:import', ['model'=> 'App\Entry']);


   // }
   // write to logfile



   echo 'done';


?>