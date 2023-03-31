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
        Schema::create('plans', function (Blueprint $table) {
            $table->uuid('uuid')->primary();
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->integer('trial_days')->nullable();
            $table->string('currency', 12);
            $table->text('coupons')->nullable();
            $table->text('tax_rates')->nullable();
            $table->string('amount_month', 32)->default('0');
            $table->string('amount_year', 32)->default('0');
            $table->integer('visibility')->nullable();
            $table->integer('position')->default(0);
            $table->text('features')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('plans');
    }
};
