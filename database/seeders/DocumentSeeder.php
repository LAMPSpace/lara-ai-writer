<?php

namespace Database\Seeders;

use App\Models\Template;
use App\Models\Document;
use App\Models\User;
use Illuminate\Database\Seeder;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $templates = Template::all();
        foreach ($templates as $template) {
            Document::factory()->count(3)->create([
                'templates_uuid' => $template->uuid,
                'users_uuid' => User::first()->uuid,
            ]);
        }
    }
}
