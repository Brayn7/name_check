<?php

use Illuminate\Database\Seeder;

class RecipientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $aliasesData = json_encode(array(
            "Muhammad",
            "ZAYDAN",
         ));
        factory('App\Recipient', 25)->create();
        DB::table('recipients')->insert([
            'user_id' => 1,
            'first_name' => 'Abu',
            'last_name' => 'ABBAS',
            'aliases' => $aliasesData,
         ]);
    }
}
