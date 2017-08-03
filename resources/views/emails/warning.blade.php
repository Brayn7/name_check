<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Name Check</title>
</head>
<body>
   <h1>Warning</h1>
   <p>We have found a match in your recipient list!</p>

   <h2>Potential Matches</h2>
   <?php 
      $people = json_decode($values);
      foreach ($people as $person) { ?>
        
      <p>{{$person->first_name}} {{$person->last_name}}</p>

      <?php } ?>
 
</body>
</html>