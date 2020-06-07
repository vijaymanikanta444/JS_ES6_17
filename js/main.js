"use strict"
//2nd video
        // var a = 'test1';
        // let b = 'test2'
        // console.log(b);

        // function testvar(){
        //     var a=30;
        //     if(true){
        //         var a = 50;
        //         console.log(a);
        //     }
        //     console.log(a);
        // }

        // testvar();

        // function testlet(){
        //     let a = 30;
        //     if(true){
        //         let a = 50;
        //         console.log(a);
        //     }

        //     console.log(a);
        // }

        // testlet();


        // for(var i=0; i<10; i++){
        //     console.log(i);
        // }
        // console.log(i)

        // for(let i=0; i<10; i++){
        //     console.log(i);
        // }
        // console.log(i);

        // const colors = [];

        // colors.push('red');
        // colors.push('blue');

        // // colors = 'green'

        // console.log(colors);

//3rd video

        // class user{
        //     constructor(username, email, password){
        //         this.username = username;
        //         this.email = email;
        //         this.password =password;
        //     }
            
        //     static countUsers(){
        //         console.log('there are 50 users')
        //     }

        //     register(){
        //         console.log(this.username + ' is now registered');

        //     }
        // }

        // let bob = new user ('bob', 'bob@gmail', 'bobmarley');

        // console.log(bob);
        // bob.register();
        // user.countUsers();

        // class Member extends user{
        //     constructor(username, email, password, memberpackage){
        //         super(username, email, password);
        //         this.package = memberpackage;
        //     }

        //     getPackage(){
        //         console.log(this.username+' is subscribed to'+this.package+'package')

        //     }

        // }

        // let mike = new Member('mike', 'mike@gmail.com', '123456', 'standard');

        // mike.getPackage();

        // console.log(mike);

        // mike.register();

//4th video

        // let name = 'Vijay';

        // function  makeUpperCase(word){
        //     return word.toUpperCase();
        // }
        // let template = 
        // `<h1>${makeUpperCase('Hello')}, ${name}</h1>
        // <p>This is a simple template in JavaScript</p>`;

        // document.getElementById('template').innerHTML = template;

//5th video

        // let theString = 'Hello, my name is vijay and I love JS';


        // console.log(theString.startsWith('Hello'));
        // console.log(theString.endsWith('JS'));
        // console.log(theString.includes('love'));

        // //hex
        // console.log(0xff);
        // //binary
        // console.log(0b101011);
        // //octal
        // console.log(0o543);


        // console.log(Number.isFinite(Infinity));
        // console.log(Number.isFinite(5));
        // console.log(Number.isFinite(-5));
        // console.log(Number.isFinite(NaN));

        // console.log(Number.isNaN(-5));
        // console.log(Number.isNaN(0));
        // console.log(Number.isNaN(5));
        // console.log(Number.isNaN(NaN));

        // console.log(Number.isInteger(-5));
        // console.log(Number.isInteger(0));
        // console.log(Number.isInteger(5));
        // console.log(Number.isInteger(NaN));

//6th video

        /* function greet($greeting = 'Hello World'){
            console.log($greeting);
        }

        greet(); */

        // let args1 = [1,2,3];
        // let args2 = [4,5,6]
        // function test(){
        //     console.log(args1+','+args2);
        // }

        // // test.apply(null, args);

        // test(...args1,...args2);

//7th video

        /*let myArray = [11,22,34,65];
        let mySet = new Set(myArray);

        mySet.add(100);
        mySet.add('100');
        mySet.add({a:1, b:2});
        mySet.delete(100);
        // mySet.clear();
        mySet.add(100);

        // console.log(mySet.size);

        mySet.forEach(function(val){
            console.log(val);
        });



        let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
        myMap.set('c3','food');
        myMap.delete('a1');


        console.log(myMap.size);



        let carWeakSet = new WeakSet();

        let car1 = {
            make: 'Honda',
            model: 'Civic'
        }

        carWeakSet.add( car1 );

        let car2 = {
            make: 'Honda',
            model: 'City'
        }

        carWeakSet.add( car2 );
        carWeakSet.delete(car1);


        console.log(carWeakSet);



        let carWeakMap = new WeakMap();

        let key1 = {
            id:1
        }

        let car1 = {
            make: 'Honda',
            model: 'Civic'
        }


        let key2 = {
            id:2
        }

        let car2 = {
            make: 'Honda',
            model: 'City'
        }

        carWeakMap.set(key1, car1);
        carWeakMap.set(key2, car2)

        carWeakMap.delete(key1);

        console.log(carWeakMap);

        */

//8th video

        // var myPromise = Promise.resolve('foo');

        // myPromise.then((res)=> console.log(res));
        /*
        var myPromise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve(4), 2000);
        });

        myPromise.then((res) => {
            res +=3;
            console.log(res);
        });


        function getData(method, url){
            return new Promise(function(resolve, reject){
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.onload = function(){
                    if(this.status >= 200 && this.status < 300) {
                        resolve(xhr.response);
                    } else{
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                    }
                };
                xhr.onerror = function(){
                        reject({
                        status:this.status,
                        statusText: xhr.statusText
                    });
                };
                xhr.send();
            });

        }

        getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
            let todos = JSON.parse(data);
            let output = '';
            for(let todo of todos){
                    output += `
                        <li>
                            <h3>${todo.title}</h3>
                            <p>Completed: ${todo.completed}</p>
                        </li>
                    `;
            }
            document.getElementById('template').innerHTML = output ;
        }).catch(function(err){
            console.log(err);
        });
        
        */

//9th video

        // function *g1(){
        //     console.log('hello');
        //     yield 'Yield 1 Ran..';
        //     console.log('World');
        //     yield 'Yield 2 Ran..';

        //     return 'returned..';
        // }


        // var g = g1();

        // // console.log(g.next().value);
        // // console.log(g.next().value);
        // // console.log(g.next());

        // for(let val of g){
        //     console.log(val);

        // }