<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Plan>
 */
class PlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'description' => 'The plan\'s awesome description.',
            'trial_days' => NULL,
            'currency' => '',
            'amount_month' => 0,
            'amount_year' => 0,
            'visibility' => 1,
            'features' => json_encode(['words' => -1, 'documents' => -1, 'images' => -1, 'templates' => 1, 'data_export' => 1, 'api' => 1])
        ];
    }
}
