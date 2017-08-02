<?php

namespace App;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
   use Searchable;
   protected $table = 'entries';
}
