<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeasonRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('season_recipes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();


            $table->BigInteger('season_id')->unsigned();

            $table->BigInteger('recipe_id')->unsigned();

            $table->foreign('season_id')->references('id')->on('seasons')->onDelete('cascade');

            $table->foreign('recipe_id')->references('id')->on('recipes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('season_recipes');
    }
}
