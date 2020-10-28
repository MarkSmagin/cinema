<?php
// Константы
define("CONSTANT", "Привет! <br>");
echo CONSTANT;

const CONSTANT1 = "Привет!x2 <br>";
echo CONSTANT1;

// Типы переменных
$i = 5; //integer

$b = TRUE; //boolean

$f = 1.2; //float

$s = "Привет"; //string

$a = [1, 2, 3, 4, 5]; //Array

// $o = new Object(); 
//Object

$n = NULL; //NULL

// Приведение типов
$test = "1"; //Переменная test сейчас строка

$test *= 2; //Переменная test сейчас целое число

$test = $test * 1.7; //Переменная test сейчас число с плавающей точкой

$test = NULL; //Переменная test сейчас равна NULL

$test[] = 1; //Переменная test сейчас массив с одним эллементом

$test = (object) 'Привет!'; //Переменная test сейчас объект
