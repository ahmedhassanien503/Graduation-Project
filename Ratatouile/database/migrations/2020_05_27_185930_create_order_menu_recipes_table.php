<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderMenuRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_menu_recipes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->BigInteger('order_id')->unsigned();
            $table->BigInteger('menu_recipe_id')->unsigned();
            //foreign key order 
            $table->foreign('order_id')
            ->references('id')
            ->on('orders')
            ->onDelete('cascade');
            //foreign key menu_recipe
            $table->foreign('menu_recipe_id')
            ->references('id')
            ->on('menu_recipes')
            ->onDelete('cascade');
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
        Schema::dropIfExists('order_menu_recipes');
    }
}
