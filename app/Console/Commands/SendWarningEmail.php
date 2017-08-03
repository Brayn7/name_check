<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Mail\Warning;


class SendWarningEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:warning';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Finds all recipients that have been flagged in database and sends a warning email to organization as to which names are now flagged.';

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
        $flaggedRecipients = \App\Recipient::where('flagged', '=', TRUE)->get();
        $collection = new \Illuminate\Support\Collection($flaggedRecipients);
        $collection = $collection->groupBy('user_id')->toArray();
        // $userIds = array_keys($collection)->sort('');
        $emails = array();
    
        foreach($collection as $userid => $values){
            $user = \App\User::find($userid);

            \Mail::to($user->email)->send(new Warning(json_encode($values)));
        }
    }
}
