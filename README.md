### How to use this api

pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py migrate --database=users_db
python manage.py runserver

##### For creating new users:
Send a POST request to http://localhost:8000/users/

##### For getting a new token/login screen
Send a POST request to http://localhost:8000/api/token/ and copy the refresh and the access tokens
