<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('recipe_name');
            $table->text('details');
            $table->string('image')-> nullable();  
            $table->integer('Serving')-> nullable();    
            $table->char('TakenTime', 100)-> nullable();
        //    flag: chef_recipe=1 , user_recipe=0
            $table->boolean('chef_recipe')->default(false);	
            $table->unsignedBigInteger('chef_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('chef_id')->references('id')->on('users');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
    }
}
