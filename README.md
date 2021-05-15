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
### Place your dataset

path/to/dataset/
 
 +- instruments/
 
 |    +- 01_foo_inst.wav
 
 |    +- 02_bar_inst.mp3
 
 |    +- ...
 
 +- mixtures/
 
 +- 01_foo_mix.wav
 
 +- 02_bar_mix.mp3
 
 +- ...
### Train a model
python train.py --dataset path/to/dataset --reduction_rate 0.5 --mixup_rate 0.5 --gpu 0

## Steps to generate Karaoke Track
python inference.py --input path/to/an/audio/file

## Steps to recognize song

### Recognize existing mp3 file:
python  recognize-from-file.py path/to/an/audio/file

### Recognize song playing on microphone:
python  recognize-from-microphone.py 

## Steps to run recommendation system module in the backend

### To setup venv:

pip install dnspython  

pip install djongo 

pip3 install djangorestframework

python -m pip install Pillow

### To run:

python manage.py makemigrations

python manage.py migrate

python manage.py runserver

## Steps to generate recommendations

Open the Song_Recommender.ipynb on Jupyter notebook and run

