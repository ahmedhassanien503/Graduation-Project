<?php

use Illuminate\Database\Seeder;
use seeds\UserTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //add admin username:admin , email: admin@gmail.com , password: password
        // is_admin => true
        // $this->call(UserTableSeeder::class);
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'),
            'is_admin'=>true,
        ]);
    }
}
