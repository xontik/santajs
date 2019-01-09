<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSantajsListsTable extends Migration
{

    public function up()
    {
        Schema::create('santajs_lists', function(Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('name');
            $table->string('image');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->foreign('user_id')->references('id')->on('users');



        });
    }

    public function down()
    {
        Schema::drop('santajs-lists');
    }
}
