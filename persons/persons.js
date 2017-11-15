"use strict";

class Person {
    constructor(name) {
        this._name = name;
        this._friends = [];
        this._spouse = null;
    }

    sayHello() {
        var personType=this instanceof Men;
        var s = 'Hi, my name is ' + this._name;
        if (this._friends.length) {
            s = s + '\nMy friends:';
            for (var i = 0; i < this._friends.length; i++) {
                if (this._friends[i] instanceof Men === personType) {
                    s = s + "\n" + this._friends[i]._name + ' потенциальные любовник, не дай Бог!';
                } else {
                    s = s + "\n" + this._friends[i]._name + ' потенциальная любовница, а возможно и супруга!';
                }
            }
        }
        if (this._spouse) {
            if(this instanceof Men){
                s = s + "\nСупруга " + this._spouse._name;
            }else{
                s = s + "\nСупруг " + this._spouse._name;
            }

        }
        console.log(s);
    }
    setFriend(friend) {
        this._friends.push(friend);
        friend._friends.push(this);
    }
}

class Men extends Person {
    constructor(name) {
        super(name);
        this._footballTeam=[];
    }

    getMarry(person) {
        if (!this._spouse && person instanceof Women) {
            this._spouse = person;
            person._spouse=this;
        }
    }
    addToTeam(player){
        if(this._footballTeam.indexOf(player)<0 && player instanceof Men){
            this._footballTeam.push(player);
            player._footballTeam.push(this);
        }else{
            console.log('woman or yet play');
        }
    }

    showTeam(){
        var s='';
        for (var i=0;i<this._footballTeam.length;i++){
            s=s+" "+this._footballTeam[i]._name;
        }
        console.log('Team of '+ this._name+': '+s);
    }
}

class Women extends Person {
    constructor(name) {
        super(name);
        this._nailColor=null;
    }

    getMarry(person) {
        if (!this._spouse && person instanceof Men) {
            this._spouse = person;
            person._spouse=this;
        }
    }
    setNailColor(color){
        this._nailColor=color;
    }

    showNailColor(){
        console.log('Nail color: '+ this._nailColor);
    }
}

var ivan = new Men("ivan");
var petr = new Men("petr");
var andrei = new Men("andrei");
var olga = new Women("olga");
var anna = new Women("anna");
ivan.setFriend(petr);
ivan.setFriend(andrei);
ivan.setFriend(olga);
ivan.getMarry(andrei);
ivan.getMarry(anna);
ivan.getMarry(olga);
ivan.addToTeam(petr);
ivan.addToTeam(andrei);
ivan.addToTeam(anna);
ivan.addToTeam(olga);
ivan.showTeam();
ivan.sayHello();
petr.showTeam();
andrei.showTeam();
anna.setNailColor('red');
anna.showNailColor();
petr.sayHello();
anna.sayHello();