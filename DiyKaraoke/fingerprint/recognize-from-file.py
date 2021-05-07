
import argparse
import os
# from itertools import zip_longest
from itertools import izip_longest
# from termcolor import colored

import libs.fingerprint as fingerprint
from libs.db_sqlite import SqliteDatabase
from libs.reader_file import FileReader


def grouper(iterable, n, fillvalue=None):
  args = [iter(iterable)] * n
  return (filter(None, values) for values
          in izip_longest(fillvalue=fillvalue, *args))


def find_matches(db, samples, Fs=fingerprint.DEFAULT_FS):
    hashes = fingerprint.fingerprint(samples, Fs=Fs)
    return return_matches(db, hashes)


def return_matches(db, hashes):
    mapper = {}
    for audio_hash, offset in hashes:
        mapper[audio_hash.upper()] = offset
    values = mapper.keys()

    for split_values in grouper(values,1000):
        # @todo move to db related files
        query = """
      SELECT upper(hash), song_fk, offset
      FROM fingerprints
      WHERE upper(hash) IN (%s)
    """
        query = query % ', '.join('?' * len(split_values))

        x = db.executeAll(query, split_values)
        matches_found = len(x)

        # if matches_found > 0:
        #     msg = '   ** found %d hash matches (step %d/%d)'
        #     print msg
        # else:
        #     msg = '   ** not matches found (step %d/%d)'
        #     print msg

        for audio_hash, sid, offset in x:
            yield sid, offset - mapper[audio_hash]


def align_matches(db, matches):
    diff_counter = {}
    largest = 0
    largest_count = 0
    song_id = -1

    for tup in matches:
        sid, diff = tup

        if diff not in diff_counter:
            diff_counter[diff] = {}

        if sid not in diff_counter[diff]:
            diff_counter[diff][sid] = 0

        diff_counter[diff][sid] += 1

        if diff_counter[diff][sid] > largest_count:
            largest = diff
            largest_count = diff_counter[diff][sid]
            song_id = sid

    songM = db.get_song_by_id(song_id)

    nseconds = round(float(largest) / fingerprint.DEFAULT_FS *
                     fingerprint.DEFAULT_WINDOW_SIZE *
                     fingerprint.DEFAULT_OVERLAP_RATIO, 5)

    return {
        "SONG_ID": song_id,
        "SONG_NAME": songM[1],
        "CONFIDENCE": largest_count,
        "OFFSET": int(largest),
        "OFFSET_SECS": nseconds
    }


def main():
    # parser = argparse.ArgumentParser(formatter_class=argparse.RawTextHelpFormatter)
    # parser.add_argument("-f", "--file", type=argparse.FileType("r"), required=True)
    # args = parser.parse_args()

    song = 'fingerprint/audio1.mp3'
    # args.file.close()

    r = FileReader(song)  # only get filename

    # get data,fs,file_hash,extension,songname,num_channels
    data = r.parse_audio()
    Fs = data["Fs"]

    db = SqliteDatabase()
    matches = []
    for channel in data['channels']:
        # TODO: Remove prints or change them into optional logging.
        matches.extend(find_matches(db, channel, Fs=Fs))

    total_matches_found = len(matches)


    if total_matches_found:
        song = align_matches(db, matches)
        print song['SONG_NAME']
        return song['SONG_NAME']
    else:
        return "No songs found"


#
# =======
# import os
# import sys
# import libs
# import libs.fingerprint as fingerprint
# import argparse
# from libs.reader_file import FileReader
# from argparse import RawTextHelpFormatter
# from itertools import zip_longest
# from termcolor import colored
# from libs.config import get_config
# from libs.reader_microphone import MicrophoneReader
# from libs.visualiser_console import VisualiserConsole as visual_peak
# from libs.visualiser_plot import VisualiserPlot as visual_plot
# from libs.db_sqlite import SqliteDatabase

# song = os.getcwd()+'/audio1.mp3'
# #seconds = 5
#
# r = FileReader(song) # only get filename
#
# #get data,fs,file_hash,extension,songname,num_channels
# data = r.parse_audio()
# Fs = data['Fs']
# num_channel = len(data['channels'])
#
# result = set()
# matches = []
# db = SqliteDatabase()
# #channel_amount = len(data)
#
# def grouper(iterable, n, fillvalue=None):
#   args = [iter(iterable)] * n
#   return (filter(None, values) for values
#           in izip_longest(fillvalue=fillvalue, *args))
#
# def find_matches(samples, Fs=fingerprint.DEFAULT_FS):
#   hashes = fingerprint.fingerprint(samples, Fs=Fs)
#   return return_matches(hashes)
#
#
# def return_matches(hashes):
#   mapper = {}
#   for hash, offset in hashes:
#     mapper[hash.upper()] = offset
#   values = mapper.keys()
#
#   for split_values in grouper(values, 1000):
#     # @todo move to db related files
#     query = """
#       SELECT upper(hash), song_fk, offset
#       FROM fingerprints
#       WHERE upper(hash) IN (%s)
#     """
#     query = query % ', '.join('?' * len(split_values))
#
#     x = db.executeAll(query, split_values)
#     matches_found = len(x)
#
#     if matches_found > 0:
#       msg = '   ** found %d hash matches (step %d/%d)'
#       print msg
#     else:
#       msg = '   ** not matches found (step %d/%d)'
#       print msg
#
#     for hash, sid, offset in x:
#       # (sid, db_offset - song_sampled_offset)
#       yield (sid, offset - mapper[hash])
#
#
# for channeln, channel in enumerate(data['channels']):
#   # TODO: Remove prints or change them into optional logging.
#   matches.extend(find_matches(channel))
#
#
# def align_matches(matches):
#   diff_counter = {}
#   largest = 0
#   largest_count = 0
#   song_id = -1
#   for tup in matches:
#     sid, diff = tup
#
#     if diff not in diff_counter:
#       diff_counter[diff] = {}
#
#     if sid not in diff_counter[diff]:
#       diff_counter[diff][sid] = 0
#
#     diff_counter[diff][sid] += 1
#
#     if diff_counter[diff][sid] > largest_count:
#       largest = diff
#       largest_count = diff_counter[diff][sid]
#       song_id = sid
#
#   songM = db.get_song_by_id(song_id)
#
#   nseconds = round(float(largest) / fingerprint.DEFAULT_FS *
#                    fingerprint.DEFAULT_WINDOW_SIZE *
#                    fingerprint.DEFAULT_OVERLAP_RATIO, 5)
#
#   return {
#     "SONG_ID": song_id,
#     "SONG_NAME": songM[1],
#     "CONFIDENCE": largest_count,
#     "OFFSET": int(largest),
#     "OFFSET_SECS": nseconds
#   }
#
#
# total_matches_found = len(matches)
#
# print('')
#
# if total_matches_found > 0:
#   msg = ' ** totally found %d hash matches'
#   print('total matches:',total_matches_found)
#
#   song = align_matches(matches)
#
#   msg = ' => song: %s (id=%d)\n'
#   msg += '    offset: %d (%d secs)\n'
#   msg += '    confidence: %d'
#
#   print(
#     song['SONG_NAME'], song['SONG_ID'],
#     song['OFFSET'], song['OFFSET_SECS'],
#     song['CONFIDENCE']
#   )
#   return song['SONG_NAME']
# else:
#   msg = ' ** not matches found at all'
#   print msg
# return msg

if __name__ == '__main__':
  main()
