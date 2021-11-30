<?php
$first = $_GET['first_name'];
$last = $_GET['last_name'];
$address = $_GET['address'];
$phone = $_GET['phone'];
$email = $_GET['email'];
$total = $_GET['total'];
$cardType = $_GET['card'];
$expdate = $_GET['exp_date'];
$cardNum = $_GET['credit_card'];
?>

<!DOCTYPE html>
<html lang="en">
      <head>
      <title>Order Cart</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="eidth=device-with, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="assign10.css">
      </head>
      <body>
        <header>
           <h1>Purchase Review</h1>
        </header>
                <div class="center_1">
                    <?php
                    echo "<p>Client Information</p>";
                        echo "Name: $first $last<br>";
                        echo "Address: $address<br>";
                        echo "Phone: $phone<br>";
                        echo "Email: $email<br>";
                        echo "<p>Purchase Information</p>";
                        echo "Item:<br>";
                        foreach ($_GET['item'] as $price) {
                          if ($price == 145) {
                            echo "Yankees Jersey ------- $ $price<br>";
                          }
                          else if ($price == 133) {
                                 echo "Boston Jersey ------- $ $price<br>";
                               }
                               else if ($price == 113) {
                                      echo "World Series ball game ------- $ $price<br>";
                                    }
                                    else if ($price == 50) {
                                           echo "Orioles Bat ------- $ $price<br/>";
                                         }
                                         else if ($price == 120) {
                                                echo "Dodgers Jersey ------- $ $price<br>";
                                              }
                                              else if ($price == 150) {
                                                     echo "Astros Jersey ------- $ $price<br>";
                                                   }
                        }
                        echo "Total price: $total<br>";
                        echo "<p>Payment Information</p>";
                        echo "Credit card number: " . "****", substr($cardNum, -4) . "<br>";
                        echo "Credit card type: $cardType<br>";
                        echo "Credit card expiration date: $expdate<br>";
                    ?>
                </div>
          <div class="center">
            <form id="purchased_form" action="assign10_a.php" method="get">
              <h2>Confirm Purchase?</h2>
              <button type="submit" name="confirm" value="Confirm" class="btn3"><span>Confirm</span></button>
              <button type="submit" name="cancel" value="Cancel" class="btn4"><span>Cancel</span></button>
              <br><br><br>
            </form>
          </div>
          <div class="foot2">
          <footer>
            <img src="https://www.teahub.io/photos/full/50-506291_mlb-major-league-baseball-logo-wallpaper-data-src.jpg" alt="mlb logo" class="image2">
          </footer>
                      </div>
      </body>
</html>