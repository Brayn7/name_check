<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecipientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipients', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('flagged')->default(false);   
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('name'); 
            $table->string('type')->nullable();   
            $table->string('id_number')->nullable(); 
            $table->string('address')->nullable();   
            $table->string('city')->nullable();   
            $table->string('state_province')->nullable();    
            $table->string('country')->nullable();   

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipients');
    }
}
