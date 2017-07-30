<?php

use Illuminate\Database\Seeder;

class EntriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $xmlString = file_get_contents('./docs/sdn.xml');
      $xml = new SimpleXMLElement($xmlString);
      $entries = count($xml->sdnEntry);

      foreach ($xml->sdnEntry as $entry){
         DB::table('entries')->insert([
            'first_name' => isset($entry->firstName) ? $entry->firstName : "",
            'last_name' => isset($entry->lastName) ? $entry->lastName : "",
            'aka_first_name' => isset($entry->akaList->aka->firstName) ? $entry->akaList->aka->firstName : "",
            'aka_last_name' => isset($entry->akaList->aka->lastName) ? $entry->akaList->aka->lastName : "",
         ]);
            
      }
    }
}



