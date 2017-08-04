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
        // get Recipients that have been flagged
        $flaggedRecipients = \App\Recipient::where('flagged', '=', TRUE)->get();
        // turn into a collection
        $collection = new \Illuminate\Support\Collection($flaggedRecipients);
        // group by user id
        $collection = $collection->groupBy('user_id')->toArray();
        // loop thru collection
        foreach($collection as $userid => $values){
            // grab user based on id
            $user = \App\User::find($userid);
            // mail to the users email and send it off to the Mail Warning php
            // pass the email the flagged persons
            \Mail::to($user->email)->send(new Warning(json_encode($values)));
        }
    }
}
