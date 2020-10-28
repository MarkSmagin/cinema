<?php

$name = 'Марк';
sayHello($name);
function sayHello($name){
    echo "Привет $name <br>";
}

class Person{
    public $name, $lastname, $city;

    private $age, $children;

    public function __construct($name, $lastname, $city, $age, $children)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->city = $city;
        $this->age = $age;
        $this->children = $children;
    }

    public function setChildren($children)
    {
        $this->children = $children;
    }

    public function getChildren()
    {
        return $this->children;
    }

    public function setAge($age)
    {
        $this->age = $age;
    }

    public function getAge()
    {
        return $this->age;
    }
    
    public function setCity($city)
    {
        $this->city = $city;
    }
}

class PersonContacts extends Person{
    private $email, $phone;

    public function __construct($name, $lastname, $city, $age, $children, $email, $phone)
    {
        parent::__construct($name, $lastname, $city, $age, $children);
        $this->email = $email;
        $this->phone = $phone;
    }

    public function setContacts($email, $phone)
    {
        $this->email = $email;
        $this->phone = $phone;
    }

    public function getContacts()
    {
        return $this->email;
        return $this->phone;
    }
}

$person = new Person('Иван', 'Петров', 'Москва', '32', '2');
$person = new PersonContacts('Иван', 'Петров', 'Москва', '32', '2', 'mail@email.com', '89998887766');
$person -> setAge('33');
$person -> setCity('Санкт-Петербург');

var_dump($person);
