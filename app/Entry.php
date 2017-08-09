<?php

namespace App;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
   use Searchable;
   
   protected $table = 'entries';

   public function toSearchableArray (){
      return [
         'id' => $this->id,
         'first_name' => $this->first_name, 
         'last_name' => $this->last_name, 
         'aka_first_name' => $this->aka_first_name, 
         'aka_last_name' => $this->aka_last_name, 
      ];
   }
}
