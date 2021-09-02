import { Haiku } from './js/haiku.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$('#haiku').submit(function(event) {
  event.preventDefault();
  const sentence1 = $('#line1').val();
  const sentence2 = $('#line2').val();
  const sentence3 = $('#line3').val();
  const userHaiku = new Haiku(sentence1, sentence2, sentence3);
  $('.output').html(userHaiku.checkHaiku());
});

  