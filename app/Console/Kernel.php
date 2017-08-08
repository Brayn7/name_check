<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\EntriesRecipientsCompare::class,
        Commands\SendWarningEmail::class,
        Commands\DatabaseRefresh::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
<<<<<<< HEAD
        $schedule->command('database:refresh')->sundays()->dailyAt(1)->withoutOverlapping();
        $schedule->command('compare:lists')->sundays()->dailyAt(1)->withoutOverlapping();
        $schedule->command('email:warning')->sundays()->dailyAt(1)->withoutOverlapping();
=======
        $schedule->command('compare:lists')->twiceDaily(1, 13);
>>>>>>> ebc6c6e86793c326c3e7aefa42eefa88632f3367
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
