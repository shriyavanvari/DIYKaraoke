import pandas as pd


# def recommender_item_based_similar_songs(givenSongID_From_FrontEnd):
#     song_grouped = pd.DataFrame(song_df.groupby('song_id')['listen_count'].count())
#     song_grouped = pd.DataFrame(song_df.groupby('song_id')['listen_count'].count())
#     songs_crosstab = pd.pivot_table(song_df, values='listen_count', index='user_id', columns='song_id')
#     songs_crosstab.head()
#     predictor_song_ratings = songs_crosstab[givenSongID_From_FrontEnd]
#     similar_songs = songs_crosstab.corrwith(predictor_song_ratings)
#     corr_listened_song = pd.DataFrame(similar_songs, columns=['pearsonR'])
#     corr_listened_song.dropna(inplace=True)
#     predictor_corr_summary = corr_listened_song.join(song_grouped['listen_count'])
#     predictor_corr_summary = predictor_corr_summary.sort_values('pearsonR', ascending=False)
#     final_recommended_songs = predictor_corr_summary[predictor_corr_summary.pearsonR < 0.9999]
#     final_recommended_songs.sort_values('pearsonR', ascending=False)
#     final_recommended_songs = final_recommended_songs.reset_index()
#     song_df_one = song_df.drop(['listen_count'], axis=1)
#     similar_songs = pd.merge(final_recommended_songs, song_df_one.drop_duplicates(["song_id"]), on="song_id",
#                              how="left")
#     similar_songs = similar_songs.sort_values('pearsonR', ascending=False)
#     return similar_songs.head(50)


# if __name__ == '__main__':
#     givenSongID_From_FrontEnd = '1'
#     print(recommender_item_based_similar_songs(givenSongID_From_FrontEnd))
