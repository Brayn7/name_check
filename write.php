<?php 



   $xmlString = file_get_contents('./docs/sdn.xml');
   $xml = new SimpleXMLElement($xmlString);
   $entries = count($xml->sdnEntry);

   var_dump(isset($xml->sdnEntry[3]->akaList->aka->lastName) ? "not null": "null");

?>