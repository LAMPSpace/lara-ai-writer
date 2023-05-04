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
        Schema::create('documents', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->foreignUuid('templates_uuid')->constrained('templates', 'uuid');
            $table->foreignUuid('users_uuid')->constrained('users', 'uuid');
            $table->string('name', 255);
            $table->text('result')->nullable();
            $table->integer('words')->default(0);
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
        Schema::dropIfExists('documents');
    }
};
