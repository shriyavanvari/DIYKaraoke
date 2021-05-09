# DIYKaraoke :Karaoke Track Genearion, Song Recognition, Song Recommendation and Lyrics Synchronization

## Steps to run Django server

cd Backend 
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver <your public ip>

## Steps to run  React Native client

cd Frontend
npm install expo-cli
expo start

## Steps to train Karaoke Generation Module
cd Machine Learning Modules/ Karaoke Generation

##Steps to generate Karaoke Track

## Steps to recognize song

### Recognize existing mp3 file:
python  recognize-from-file.py <mp3 song>

### Recognize song playing on microphone:
python  recognize-from-microphone.py <mp3 song>

## Steps to generate recommendations

Open the Song_Recommender.ipynb on Jupyter notebook and run

