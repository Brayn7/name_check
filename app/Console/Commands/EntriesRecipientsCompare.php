<?php

namespace App\Console\Commands;

use App\Mail\Warning;
use Illuminate\Console\Command;

class EntriesRecipientsCompare extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'compare:lists';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'The compare:list command takes all the reipients and compares their first and last name to the snd_entries list with algolia fuzzy search then if there is a match flagged turns to true.';

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
        // get all recipients
        $recipients = \App\Recipient::all();
        // make a place to store matches
        $matches = array();
        // loop thru each person take first and last name
        // mash them together and send it off to algolia
        foreach($recipients as $recipient){
            $name = $recipient->name;
            // get algolia matches
            $check = \App\Entry::search($name)->get();
            // if there are any matches in the check
            // then push $recipient to $matches
            if (count($check) > 0){
                array_push($matches, $recipient);
            }
        }

        // loop thru matches and mark as flagged
        foreach($matches as $match){
              $recipient = new \App\Recipient;
              $recipient = $recipient::find($match->id);
              $recipient->flagged = TRUE;
              $recipient->save();
            }

        


        }
}
