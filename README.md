### How to use this api

pip install -r requirements.txt
python manage.py makemigrations </br>
python manage.py migrate </br>
python manage.py migrate --database=users_db </br>
python manage.py runserver </br>

##### For creating new users:
Send a POST request to http://localhost:8000/users/

##### For getting a new token/login screen
Send a POST request to http://localhost:8000/api/token/ and copy the refresh and the access tokens
