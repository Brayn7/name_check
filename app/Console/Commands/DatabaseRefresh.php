<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DatabaseRefresh extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This downloads and rewrites the sdn.xml file in the docs folder. Then deletes the postgres entries database and re-migrates and re-seeds. Then the algolia database is flushed. Then the algolia database is re indexed with new database info.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // rewrite sdn.xml file
        file_put_contents('docs/sdn.xml', fopen('https://www.treasury.gov/ofac/downloads/sdn.xml', 'r'));

        DB::table('entries')->truncate();

        \Artisan::call('db:seed');

        \Artisan::call('scout:flush', ['model' => "App\Entry"]);

        \Artisan::call('scout:import', ['model'=> 'App\Entry']);
    }
}
