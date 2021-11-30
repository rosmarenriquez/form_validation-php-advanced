<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Order</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-with, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="assign10.css">
  </head>
  <body>
    <br><br>
    <div class="format">
  <?php
    if (isset($_GET['confirm'])) {
      echo "The order has been confirmed!";
    }
    else if (isset($_GET['cancel'])) {
      echo "The order has been cancelled!";
    }
  ?>
  </div>
    <br><br><br>
    <a href="assign10.html">Purchase Again</a><br><br><br>
    <div class="foot3">
    <footer>
      <img src="mlb2.png" alt="mlb logo2">
    </footer>
  </div>
  </body>
</html>