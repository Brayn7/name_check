<?php

namespace App\Http\Controllers;


use App\Recipient;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class RecipientsController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request ,$id){
        // \Artisan::call('compare:lists');
        $recipients = Recipient::where('user_id', '=', $id)->get();

        return response()->json($recipients);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $client = new Client(); //GuzzleHttp\Client
        $result = $client->get(url('/') . '/api/user', [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer '.$request->_token,
            ]
        ]);
        
        if ($result->getStatusCode() === 200){
            $recipient = new Recipient;
            $recipient->user_id = $request->id;
            $recipient->name = $request->name;
            $recipient->save();
            return response()->json(array(
                'status' => 200,
                'msg' => 'Recipient Added!',
                'style' => 'alert-success',
                ));
        } else {
            return response()->json(array(
                'status' => 403,
                'msg' => 'Something went wrong.',
                'style' => 'alert-warning',
                ));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Recipient  $recipient
     * @return \Illuminate\Http\Response
     */
    public function show(Recipient $recipient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Recipient  $recipient
     * @return \Illuminate\Http\Response
     */
    public function edit(Recipient $recipient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Recipient  $recipient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recipient $recipient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Recipient  $recipient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Recipient $recipient)
    {
        //
    }
}
