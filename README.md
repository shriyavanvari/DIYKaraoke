Working on Git:


git clone https://github.com/shriyavanvari/DIYKaraoke.git  

cd DIYKaraoke

git fetch

git checkout Manasa

git add .

git commit -m "added changes"

git push origin Manasa 




To setup venv:

pip install dnspython  

pip install djongo 

pip3 install djangorestframework

python -m pip install Pillow




To run:

python manage.py makemigrations

python manage.py migrate

python manage.py runserver





End points:

1) To input listen_count for recommender system: http://127.0.0.1:8000/recsys/increase_listen_count/
	Call this API for 1) search a song 2) listen to a song 3) open the lyrics
	input: song_id

2) To input ratings (like=5, dislike-0): http://127.0.0.1:8000/recsys/rating/
	input: song_id
	Call this API for 1) favorite the song

3) To get recommendations: http://127.0.0.1:8000/recsys/get_recommendations/
	call this: on the homescreen, in the drop down
	input: n/a
	output: song_ids
	
	On song screen: 
	Drop down: recommend by popularity, latest release, similar songs
	
4) To get item-based: 
	input: song_id
	output: song_ids

5) To get lyrics: http://127.0.0.1:8000/recsys/get_lyrics/
	input: song_id
	output: lyrics




	Quick link: https://github.com/shriyavanvari/DIYKaraoke/tree/Manasa/DiyKaraoke/ ---> recsys
