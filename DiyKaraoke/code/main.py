import pandas as pd
from sklearn.model_selection import train_test_split
import numpy as np
import time

# from sklearn.externals import joblib

givenSongID_From_FrontEnd = 'SOFVZRE12A8C139783'
songmetadata = pd.read_csv(r'Data/song_data.csv')
othersongdata = pd.read_fwf(r'Data/10000.txt')


def dataPreProcessing():
    # importing both the datasets
    songmetadata = pd.read_csv(r'Data/song_data.csv')
    # one of the file is a text file hence we import it with pd.read_fwf
    # fwf stands for fixed width file
    othersongdata = pd.read_fwf(r'Data/10000.txt')

    # naming the columns for the othersongdata
    othersongdata.columns = ['user_id', 'song_id', 'listen_count']

    # merging both the datasets and removing duplicates
    song_df = pd.merge(othersongdata, songmetadata.drop_duplicates(['song_id']), on="song_id", how="left")
    # writing the file in .csv to visualize in Tableau
    song_df.to_csv(r'Data/Processed_Data.csv', index=False)


def recommender_Popular_Playlist():
    songmetadata = pd.read_csv(r'Data/song_data.csv')
    songmetadata = pd.DataFrame(songmetadata)
    othersongdata.columns = ['user_id', 'song_id', 'listen_count']
    song_df = pd.merge(othersongdata, songmetadata.drop_duplicates(['song_id']), on="song_id", how="left")
    song_grouped = song_df.groupby(['title']).agg({"listen_count": "count"})
    grouped_sum = song_grouped['listen_count'].sum()

    # calculating the percent share of each song in listen count
    song_grouped['percentage'] = song_grouped['listen_count'].div(grouped_sum) * 100

    # sorting the dataset with respect to listen count
    song_grouped = song_grouped.sort_values(['listen_count'], ascending=True)
    song_df = song_df['listen_count'].astype(float)
    popular = song_grouped.sort_values(by='listen_count')

    # filtering the top ten songs in the dataset
    # popularsongs = popular[9517:9567]
    popularsongs = popular
    popularsongs = pd.DataFrame(popularsongs.reset_index())
    recommended_songs = popularsongs.sort_values('listen_count', ascending=False)
    return recommended_songs


def recommender_item_based_similar_songs(givenSongID_From_FrontEnd):
    songmetadata = pd.read_csv(r'Data/song_data.csv')
    othersongdata = pd.read_fwf(r'Data/10000.txt')
    othersongdata.columns = ['user_id', 'song_id', 'listen_count']
    song_df = pd.merge(othersongdata, songmetadata.drop_duplicates(['song_id']), on="song_id", how="left")
    song_grouped = pd.DataFrame(song_df.groupby('song_id')['listen_count'].count())
    song_grouped = pd.DataFrame(song_df.groupby('song_id')['listen_count'].count())
    song_df.astype({'listen_count': 'int32'}, {'song_id': 'str'}).dtypes
    song_df[song_df['song_id'] == givenSongID_From_FrontEnd]
    songs_crosstab = pd.pivot_table(song_df, values='listen_count', index='user_id', columns='song_id')
    songs_crosstab.head()
    predictor_song_ratings = songs_crosstab[givenSongID_From_FrontEnd]
    predictor_song_ratings[predictor_song_ratings >= 1]
    similar_songs = songs_crosstab.corrwith(predictor_song_ratings)
    corr_listened_song = pd.DataFrame(similar_songs, columns=['pearsonR'])
    corr_listened_song.dropna(inplace=True)
    predictor_corr_summary = corr_listened_song.join(song_grouped['listen_count'])
    predictor_corr_summary = predictor_corr_summary.sort_values('pearsonR', ascending=False)
    final_recommended_songs = predictor_corr_summary[predictor_corr_summary.pearsonR < 0.9999]
    final_recommended_songs.sort_values('pearsonR', ascending=False)
    final_recommended_songs = final_recommended_songs.reset_index()
    song_df_one = song_df.drop(['listen_count'], axis=1)
    similar_songs = pd.merge(final_recommended_songs, song_df_one.drop_duplicates(["song_id"]), on="song_id",
                             how="left")
    similar_songs = similar_songs.sort_values('pearsonR', ascending=False)
    return similar_songs.head(50)


if __name__ == '__main__':
    givenSongID_From_FrontEnd = 'SOFVZRE12A8C139783'

    dataPreProcessing()
    print(recommender_Popular_Playlist())
    # print(recommender_item_based_similar_songs(givenSongID_From_FrontEnd))
