<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Document>
 */
class DocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $result = $this->faker->text();

        return [
            'name' => $this->faker->text(255),
            'result' => $result,
            'words' => count(explode(' ', $result)),
            'favorite' => $this->faker->randomElement([true, false])
        ];
    }
}
