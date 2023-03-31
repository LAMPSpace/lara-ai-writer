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
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->foreignUuid('plans_uuid')->constrained('plans', 'uuid');
            $table->string('name', 255);
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->enum('role', ['admin', 'user'])->default('user');
            $table->string('api_token', 80)
                ->nullable()
                ->unique()
                ->default(null);
            $table->string('locale')->default('en');
            $table->string('timezone', 64)->nullable();
            $table->text('billing_information')->nullable();
            $table->integer('tfa')->nullable();
            $table->string('tfa_code', 255)->nullable();
            $table->dateTime('tfa_code_create_at')->nullable();
            $table->smallInteger('default_variations')->nullable()->default(1);
            $table->double('default_creativity', 8, 2)->nullable()->default(0.5);
            $table->string('default_language', 16)->nullable()->default('en');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
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
};
