<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('templates', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->foreignUuid('categories_uuid')->constrained('categories', 'uuid');
            $table->string('name', 128)->unique();
            $table->string('route', 128);
            $table->string('icon', 128);
            $table->text('description')->nullable();
            $table->text('prompt')->nullable();
            $table->integer('views')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('templates');
    }
};
