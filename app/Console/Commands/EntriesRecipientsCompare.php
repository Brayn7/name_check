<?php

namespace App\Console\Commands;

// use \App\Entry;
// use \App\Recipient;
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
        $recipients = \App\Recipient::all();
        $matches = array();
        foreach($recipients as $recipient){
            $name = $recipient->first_name . " " . $recipient->last_name;
            $check = \App\Entry::search($name)->get();
            if (count($check) > 0){
                array_push($matches, $recipient);
            }
        }
        foreach($matches as $match){
              $recipient = new \App\Recipient;
              $recipient = $recipient::find($match->id);
              $recipient->flagged = TRUE;
              $recipient->save();
            }
        }
}
