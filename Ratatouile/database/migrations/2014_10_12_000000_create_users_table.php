<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
<<<<<<< HEAD
            $table->string('work_place');
            $table->string('image')->nullable();
            $table->boolean('is_chef')->default(false);
            $table->boolean('is_banned')->default(false);
            $table->boolean('is_admin')->default(false);
=======
            $table->boolean('is_admin')->default(false);
            $table->boolean('is_chef')->default(false);
            $table->string('image')->nullable();
>>>>>>> c08874dafe81accf8da41c5331ce203ffd0c6ec8
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
