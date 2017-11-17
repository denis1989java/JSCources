"use strict";

function TPerson() {
    this._name = null;
    this._friends = [];
    this._spouse = null;
}


TPerson.prototype.sayHello=function () {
    var personType=this instanceof TMen;
    var s = 'Hi, my name is ' + this._name;
    if (this._friends.length) {
        s = s + '\nMy friends:';
        for (var i = 0; i < this._friends.length; i++) {
            if (this._friends[i] instanceof TMen === personType) {
                s = s + "\n" + this._friends[i]._name + ' потенциальные любовник, не дай Бог!';
            } else {
                s = s + "\n" + this._friends[i]._name + ' потенциальная любовница, а возможно и супруга!';
            }
        }
    }
    if (this._spouse) {
        if(this instanceof TMen){
            s = s + "\nСупруга " + this._spouse._name;
        }else{
            s = s + "\nСупруг " + this._spouse._name;
        }

    }
    console.log(s);
};

TPerson.prototype.setFriend=function (friend) {
    this._friends.push(friend);
    friend._friends.push(this);
};

function TMen(name) {
    TPerson.call(this);
    this._name=name;
    this._footballTeam=[];
    this.getMarry=function (person) {
        if (!this._spouse && person instanceof TWomen) {
            this._spouse = person;
            person._spouse=this;
        }
    };

    this.addToTeam=function (player) {
        if(this._footballTeam.indexOf(player)<0 && player instanceof TMen){
            this._footballTeam.push(player);
            player._footballTeam.push(this);
        }else{
            console.log('woman or yet play');
        }
    };
    this.showTeam=function () {
        var s='';
        for (var i=0;i<this._footballTeam.length;i++){
            s=s+" "+this._footballTeam[i]._name;
        }
        console.log('Team of '+ this._name+': '+s);
    }
}
TMen.prototype=Object.create(TPerson.prototype,this._name);
TMen.prototype.constructor=TMen;

function TWomen(name) {
    TPerson.call(this);
    this._nailColor=null;
    this._name=name;
    this.getMarry=function (person) {
        if (!this._spouse && person instanceof TMen) {
            this._spouse = person;
            person._spouse=this;
        }
    };
    this.setNailColor=function (color) {
        this._nailColor=color;

    };
    this.showNailColor=function () {
        console.log('Nail color of '+this._name+' is '+ this._nailColor);
    }
}

TWomen.prototype=Object.create(TPerson.prototype);
TWomen.prototype.constructor=TWomen;

var ivan = new TMen("ivan");
var petr = new TMen("petr");
var andrei = new TMen("andrei");
var olga = new TWomen("olga");
var anna = new TWomen("anna");
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
petr.setFriend(andrei);
petr.showTeam();
andrei.showTeam();
anna.setNailColor('red');
anna.showNailColor();
petr.sayHello();
andrei.sayHello();
anna.sayHello();