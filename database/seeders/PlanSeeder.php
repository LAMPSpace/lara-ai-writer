<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plan::factory()->create([
            'name' => 'Default',
            'description' => 'The plan\'s awesome description.',
            'trial_days' => NULL,
            'currency' => '',
            'amount_month' => 0,
            'amount_year' => 0,
            'visibility' => 1,
            'features' => json_encode(['words' => -1, 'documents' => -1, 'images' => -1, 'templates' => 1, 'data_export' => 1, 'api' => 1])
        ]);
    }
}
