<?php

namespace Database\Seeders;

use App\Models\Plan;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'plans_uuid' => Plan::first()->uuid,
            'name' => 'Admin',
            'email' => 'admin@email.com',
            'role' => 'admin',
        ]);
    }
}
