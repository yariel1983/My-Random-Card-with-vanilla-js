/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';


// window.onload = function myFunction(){
//                         //alert('button1');
//                         //ARRAYS
//                         var letter = ['A', '2', '3', '4', '5', '6', '7', '8', '9','10 ','J', 'Q', 'K'];
//                         var figure = ['fas fa-heart lhurt fa-6x', 'fas fa-anchor lhurt fa-6x', 'fas fa-address-book black fa-6x', 'fas fa-ambulance black fa-6x'];
//                         //SELECT RANDOM Positions in Letter and Figure Array
//                         var randomLetter = Math.floor(Math.random() * letter.length);
//                         var randomFigure = Math.floor(Math.random() * figure.length);
//                         //Update text and icons
//                         document.getElementById("letter").innerHTML = letter[randomLetter];
//                         document.getElementById('sup').className = figure[randomFigure];
//                         document.getElementById('inf').className = figure[randomFigure] + ' rotate';
//                     };