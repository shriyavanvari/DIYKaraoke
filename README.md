### How to use this api

pip install -r requirements.txt
python manage.py makemigrations </br>
python manage.py migrate </br>
python manage.py migrate --database=users_db </br>
python manage.py runserver </br>

### End points:

1) ##### For creating new users:
Send a POST request to http://localhost:8000/users/

2) ##### For getting a new token/login screen
Send a POST request to http://localhost:8000/api/token/ and copy the refresh and the access tokens


3) To input listen_count for recommender system: http://127.0.0.1:8000/recsys/increase_listen_count/
	Call this API for 1) search a song 2) listen to a song 3) open the lyrics
	input: song_id

2) To input ratings (like=5, dislike-0): http://127.0.0.1:8000/recsys/rating/
	input: song_id
	Call this API for 1) favorite the song

3) To get popular recommendations: http://127.0.0.1:8000/recsys/get_recommendations/
	call this: on the homescreen, in the drop down
	input: n/a
	output: song_ids
	
	On song screen: 
	Drop down: recommend by popularity, latest release, similar songs
	
4) To get latest songs recommendations: http://127.0.0.1:8000/recsys/get_latest_songs/
	call this: on the homescreen, in the drop down
	input: n/a
	output: song_ids
	
5) To get item-based: http://127.0.0.1:8000/recsys/get_item_based/
	input: song_id
	output: song_ids

6) To get lyrics: http://127.0.0.1:8000/recsys/get_lyrics/
	input: song_id
	output: lyrics

	