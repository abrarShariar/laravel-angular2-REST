# laravel-angular2-REST
RESTful backend with Laravel 5.3 and Angular 2 as frontend


* The [ng2](https://github.com/abrarShariar/laravel-angular2-REST/tree/master/ng2) directory hosts the Angular 2 app

* Other directories/files in the project root belongs to Laravel (5.3)


## RESTful Backend with Laravel 5.3

* Some of the config files are not in the repo since they are kept as is out-of-the-box.

* Config your database:

```		
	./config/database.php
	./env
```


* Database schema is as follows:

```php
	Schema::create('employee', function (Blueprint $table) {
            $table->increments('id');     //primary key + auto increment
            $table->string('firstname');
            $table->string('lastname');
            $table->date('DOB');
            $table->string('description',100);
            $table->timestamps();       //'created_at' 'updated_at' cols
```


* Perform migration:

```sh
	php artisan migrate	
```


* [EmployeeTableSeeder](https://github.com/abrarShariar/laravel-angular2-REST/blob/master/database/seeds/EmployeeTableSeeder.php) defines the seeds for the database. For initial seeding:

```sh
	php artisan db:seed --class="EmployeeTableSeeder"
```


* Now run `php artisan serve` in the project root and you will be Up and Running !!


* API endpoints defined in [api.php](https://github.com/abrarShariar/laravel-angular2-REST/blob/master/routes/api.php)

```php
	/api/all		//get all employee data		
	/api/show/id=$id	//get specific employee data
```

* Web routes defined in [web.php](https://github.com/abrarShariar/laravel-angular2-REST/blob/master/routes/web.php)

```php
	/create			//create a new employee recored
				//authentication required
```


## Angular 2 Frontend

* routes defined [app.routing](https://github.com/abrarShariar/laravel-angular2-REST/blob/master/ng2/app/app.routing.ts)

```js
	/employee/all		//show all employee data
	/employee/add 		//add new employee
	/search			//search employee

``` 



## TO-DO

* FIX `/employee/add` in [ng2](https://github.com/abrarShariar/laravel-angular2-REST/tree/master/ng2)

* FIX http.post() in [AddEmployeeService](https://github.com/abrarShariar/laravel-angular2-REST/tree/master/ng2/app/services)


