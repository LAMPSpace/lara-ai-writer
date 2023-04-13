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
        Schema::create('images', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->foreignUuid('users_uuid')->constrained('users', 'uuid');
            $table->string('name', 255);
            $table->string('style', 64)->nullable();
            $table->string('filter', 64)->nullable();
            $table->string('resolution', 16)->nullable();
            $table->text('result');
            $table->boolean('favorite')->default(false);
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
        Schema::dropIfExists('images');
    }
};
