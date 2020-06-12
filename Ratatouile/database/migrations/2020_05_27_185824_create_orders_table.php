<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('description');
            $table->string('payment_method');
            $table->dateTime('date');
            $table->string('address');
            $table->integer('total_price');       
            //user_id of user who made the order 
            $table->foreignId('user_id')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');
            //chef_id of chef who will recieve the order
            $table->foreignId('chef_id')
            ->references('id')
            ->on('users')
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
        Schema::dropIfExists('orders');
    }
}
