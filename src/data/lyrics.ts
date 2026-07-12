export interface Word {
  word: string;
  start: number;
  end: number;
}

export interface Verse {
  verseStart: number;
  verseEnd: number;
  words: Word[];
}

export interface SongData {
  globalOffset: number;
  lyricsData: Verse[];
}

export const songsDictionary: Record<string, SongData> = {
  "Bring Me The Horizon - Go To Hell, For Heavens Sake.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 34.071,
        "verseEnd": 37.694,
        "words": [
          {
            "word": "For ",
            "start": 34.071,
            "end": 34.275
          },
          {
            "word": "the ",
            "start": 34.275,
            "end": 34.52
          },
          {
            "word": "love ",
            "start": 34.52,
            "end": 34.805
          },
          {
            "word": "of ",
            "start": 34.805,
            "end": 35.13
          },
          {
            "word": "God, ",
            "start": 35.13,
            "end": 35.74
          },
          {
            "word": "will ",
            "start": 35.74,
            "end": 35.983
          },
          {
            "word": "you ",
            "start": 35.983,
            "end": 36.186
          },
          {
            "word": "bite ",
            "start": 36.186,
            "end": 36.471
          },
          {
            "word": "your ",
            "start": 36.471,
            "end": 36.797
          },
          {
            "word": "tongue",
            "start": 36.797,
            "end": 37.694
          }
        ]
      },
      {
        "verseStart": 37.694,
        "verseEnd": 41.167,
        "words": [
          {
            "word": "Before ",
            "start": 37.694,
            "end": 37.938
          },
          {
            "word": "we ",
            "start": 37.938,
            "end": 38.142
          },
          {
            "word": "make ",
            "start": 38.142,
            "end": 38.388
          },
          {
            "word": "you ",
            "start": 38.388,
            "end": 38.632
          },
          {
            "word": "swallow ",
            "start": 38.632,
            "end": 38.876
          },
          {
            "word": "it?",
            "start": 38.876,
            "end": 41.167
          }
        ]
      },
      {
        "verseStart": 41.167,
        "verseEnd": 47.333,
        "words": [
          {
            "word": "It's ",
            "start": 41.167,
            "end": 41.41
          },
          {
            "word": "moments ",
            "start": 41.41,
            "end": 41.98
          },
          {
            "word": "like ",
            "start": 41.98,
            "end": 42.386
          },
          {
            "word": "this ",
            "start": 42.386,
            "end": 42.924
          },
          {
            "word": "where ",
            "start": 42.924,
            "end": 43.169
          },
          {
            "word": "silence ",
            "start": 43.169,
            "end": 43.779
          },
          {
            "word": "is ",
            "start": 43.779,
            "end": 44.064
          },
          {
            "word": "golden",
            "start": 44.064,
            "end": 47.333
          }
        ]
      },
      {
        "verseStart": 47.333,
        "verseEnd": 48.393,
        "words": [
          {
            "word": "And ",
            "start": 47.333,
            "end": 47.578
          },
          {
            "word": "then ",
            "start": 47.578,
            "end": 47.782
          },
          {
            "word": "you ",
            "start": 47.782,
            "end": 48.025
          },
          {
            "word": "speak",
            "start": 48.025,
            "end": 48.393
          }
        ]
      },
      {
        "verseStart": 48.393,
        "verseEnd": 51.902,
        "words": [
          {
            "word": "No ",
            "start": 48.393,
            "end": 48.724
          },
          {
            "word": "one ",
            "start": 48.724,
            "end": 48.926
          },
          {
            "word": "wants ",
            "start": 48.926,
            "end": 49.131
          },
          {
            "word": "to ",
            "start": 49.131,
            "end": 49.376
          },
          {
            "word": "hear ",
            "start": 49.376,
            "end": 49.904
          },
          {
            "word": "you",
            "start": 49.904,
            "end": 51.902
          }
        ]
      },
      {
        "verseStart": 51.902,
        "verseEnd": 54.759,
        "words": [
          {
            "word": "No ",
            "start": 51.902,
            "end": 52.105
          },
          {
            "word": "one ",
            "start": 52.105,
            "end": 52.31
          },
          {
            "word": "wants ",
            "start": 52.31,
            "end": 52.555
          },
          {
            "word": "to ",
            "start": 52.555,
            "end": 52.764
          },
          {
            "word": "see ",
            "start": 52.764,
            "end": 53.456
          },
          {
            "word": "you",
            "start": 53.456,
            "end": 54.759
          }
        ]
      },
      {
        "verseStart": 54.759,
        "verseEnd": 58.6,
        "words": [
          {
            "word": "So ",
            "start": 54.759,
            "end": 55.252
          },
          {
            "word": "desperate ",
            "start": 55.252,
            "end": 55.742
          },
          {
            "word": "and ",
            "start": 55.742,
            "end": 55.988
          },
          {
            "word": "pathetic, ",
            "start": 55.988,
            "end": 56.884
          },
          {
            "word": "I'm ",
            "start": 56.884,
            "end": 57.087
          },
          {
            "word": "begging ",
            "start": 57.087,
            "end": 57.494
          },
          {
            "word": "you ",
            "start": 57.494,
            "end": 57.7
          },
          {
            "word": "to ",
            "start": 57.7,
            "end": 57.948
          },
          {
            "word": "spare ",
            "start": 57.948,
            "end": 58.151
          },
          {
            "word": "me",
            "start": 58.151,
            "end": 58.6
          }
        ]
      },
      {
        "verseStart": 58.6,
        "verseEnd": 62.617,
        "words": [
          {
            "word": "The ",
            "start": 58.6,
            "end": 58.803
          },
          {
            "word": "pleasure ",
            "start": 58.803,
            "end": 59.267
          },
          {
            "word": "of ",
            "start": 59.267,
            "end": 59.471
          },
          {
            "word": "your ",
            "start": 59.471,
            "end": 59.721
          },
          {
            "word": "company",
            "start": 59.721,
            "end": 62.617
          }
        ]
      },
      {
        "verseStart": 62.617,
        "verseEnd": 69.516,
        "words": [
          {
            "word": "When ",
            "start": 62.617,
            "end": 63.112
          },
          {
            "word": "did ",
            "start": 63.112,
            "end": 63.568
          },
          {
            "word": "the ",
            "start": 63.568,
            "end": 64.015
          },
          {
            "word": "diamonds ",
            "start": 64.015,
            "end": 64.831
          },
          {
            "word": "leave ",
            "start": 64.831,
            "end": 65.242
          },
          {
            "word": "your ",
            "start": 65.242,
            "end": 65.934
          },
          {
            "word": "bones?",
            "start": 65.934,
            "end": 69.516
          }
        ]
      },
      {
        "verseStart": 69.516,
        "verseEnd": 72.99,
        "words": [
          {
            "word": "I'm ",
            "start": 69.516,
            "end": 69.68
          },
          {
            "word": "burning ",
            "start": 69.68,
            "end": 70.094
          },
          {
            "word": "down ",
            "start": 70.094,
            "end": 70.584
          },
          {
            "word": "every ",
            "start": 70.584,
            "end": 70.993
          },
          {
            "word": "bridge ",
            "start": 70.993,
            "end": 71.36
          },
          {
            "word": "we ",
            "start": 71.36,
            "end": 71.766
          },
          {
            "word": "made",
            "start": 71.766,
            "end": 72.99
          }
        ]
      },
      {
        "verseStart": 72.99,
        "verseEnd": 76.373,
        "words": [
          {
            "word": "I'll ",
            "start": 72.99,
            "end": 73.234
          },
          {
            "word": "watch ",
            "start": 73.234,
            "end": 73.436
          },
          {
            "word": "you ",
            "start": 73.436,
            "end": 73.684
          },
          {
            "word": "choke ",
            "start": 73.684,
            "end": 74.053
          },
          {
            "word": "on ",
            "start": 74.053,
            "end": 74.255
          },
          {
            "word": "the ",
            "start": 74.255,
            "end": 74.458
          },
          {
            "word": "hearts ",
            "start": 74.458,
            "end": 74.905
          },
          {
            "word": "you ",
            "start": 74.905,
            "end": 75.272
          },
          {
            "word": "break",
            "start": 75.272,
            "end": 76.373
          }
        ]
      },
      {
        "verseStart": 76.373,
        "verseEnd": 79.638,
        "words": [
          {
            "word": "I'm ",
            "start": 76.373,
            "end": 76.617
          },
          {
            "word": "bleeding ",
            "start": 76.617,
            "end": 76.985
          },
          {
            "word": "out ",
            "start": 76.985,
            "end": 77.514
          },
          {
            "word": "every ",
            "start": 77.514,
            "end": 77.717
          },
          {
            "word": "word ",
            "start": 77.717,
            "end": 78.248
          },
          {
            "word": "you ",
            "start": 78.248,
            "end": 78.66
          },
          {
            "word": "said",
            "start": 78.66,
            "end": 79.638
          }
        ]
      },
      {
        "verseStart": 79.638,
        "verseEnd": 83.394,
        "words": [
          {
            "word": "Go ",
            "start": 79.638,
            "end": 80.087
          },
          {
            "word": "to ",
            "start": 80.087,
            "end": 80.293
          },
          {
            "word": "hell, ",
            "start": 80.293,
            "end": 80.903
          },
          {
            "word": "for ",
            "start": 80.903,
            "end": 81.352
          },
          {
            "word": "heaven's ",
            "start": 81.352,
            "end": 82.088
          },
          {
            "word": "sake",
            "start": 82.088,
            "end": 83.394
          }
        ]
      },
      {
        "verseStart": 83.394,
        "verseEnd": 86.874,
        "words": [
          {
            "word": "I'm ",
            "start": 83.394,
            "end": 83.602
          },
          {
            "word": "burning ",
            "start": 83.602,
            "end": 83.97
          },
          {
            "word": "down ",
            "start": 83.97,
            "end": 84.498
          },
          {
            "word": "every ",
            "start": 84.498,
            "end": 84.91
          },
          {
            "word": "bridge ",
            "start": 84.91,
            "end": 85.315
          },
          {
            "word": "we ",
            "start": 85.315,
            "end": 85.766
          },
          {
            "word": "made",
            "start": 85.766,
            "end": 86.874
          }
        ]
      },
      {
        "verseStart": 86.874,
        "verseEnd": 90.308,
        "words": [
          {
            "word": "I'll ",
            "start": 86.874,
            "end": 87.077
          },
          {
            "word": "watch ",
            "start": 87.077,
            "end": 87.322
          },
          {
            "word": "you ",
            "start": 87.322,
            "end": 87.567
          },
          {
            "word": "choke ",
            "start": 87.567,
            "end": 87.933
          },
          {
            "word": "on ",
            "start": 87.933,
            "end": 88.177
          },
          {
            "word": "the ",
            "start": 88.177,
            "end": 88.381
          },
          {
            "word": "hearts ",
            "start": 88.381,
            "end": 88.79
          },
          {
            "word": "you ",
            "start": 88.79,
            "end": 89.197
          },
          {
            "word": "break",
            "start": 89.197,
            "end": 90.308
          }
        ]
      },
      {
        "verseStart": 90.308,
        "verseEnd": 93.754,
        "words": [
          {
            "word": "I'm ",
            "start": 90.308,
            "end": 90.554
          },
          {
            "word": "bleeding ",
            "start": 90.554,
            "end": 90.965
          },
          {
            "word": "out ",
            "start": 90.965,
            "end": 91.454
          },
          {
            "word": "every ",
            "start": 91.454,
            "end": 91.903
          },
          {
            "word": "word ",
            "start": 91.903,
            "end": 92.352
          },
          {
            "word": "you ",
            "start": 92.352,
            "end": 92.719
          },
          {
            "word": "said",
            "start": 92.719,
            "end": 93.754
          }
        ]
      },
      {
        "verseStart": 93.754,
        "verseEnd": 100.678,
        "words": [
          {
            "word": "Go ",
            "start": 93.754,
            "end": 94.044
          },
          {
            "word": "to ",
            "start": 94.044,
            "end": 94.247
          },
          {
            "word": "hell, ",
            "start": 94.247,
            "end": 94.822
          },
          {
            "word": "for ",
            "start": 94.822,
            "end": 95.274
          },
          {
            "word": "heaven's ",
            "start": 95.274,
            "end": 95.974
          },
          {
            "word": "sake",
            "start": 95.974,
            "end": 100.678
          }
        ]
      },
      {
        "verseStart": 100.678,
        "verseEnd": 107.535,
        "words": [
          {
            "word": "Go ",
            "start": 100.678,
            "end": 101.046
          },
          {
            "word": "to ",
            "start": 101.046,
            "end": 101.208
          },
          {
            "word": "hell, ",
            "start": 101.208,
            "end": 102.639
          },
          {
            "word": "for ",
            "start": 102.639,
            "end": 102.966
          },
          {
            "word": "heaven's ",
            "start": 102.966,
            "end": 103.74
          },
          {
            "word": "sake",
            "start": 103.74,
            "end": 107.535
          }
        ]
      },
      {
        "verseStart": 107.535,
        "verseEnd": 111.015,
        "words": [
          {
            "word": "No ",
            "start": 107.535,
            "end": 107.738
          },
          {
            "word": "one ",
            "start": 107.738,
            "end": 107.99
          },
          {
            "word": "wants ",
            "start": 107.99,
            "end": 108.196
          },
          {
            "word": "to ",
            "start": 108.196,
            "end": 108.448
          },
          {
            "word": "hear ",
            "start": 108.448,
            "end": 109.097
          },
          {
            "word": "you ( ",
            "start": 109.097,
            "end": 110.072
          },
          {
            "word": "save ",
            "start": 110.072,
            "end": 110.403
          },
          {
            "word": "your ",
            "start": 110.403,
            "end": 110.771
          },
          {
            "word": "breath)",
            "start": 110.771,
            "end": 111.015
          }
        ]
      },
      {
        "verseStart": 111.015,
        "verseEnd": 113.908,
        "words": [
          {
            "word": "No ",
            "start": 111.015,
            "end": 111.218
          },
          {
            "word": "one ",
            "start": 111.218,
            "end": 111.464
          },
          {
            "word": "wants ",
            "start": 111.464,
            "end": 111.668
          },
          {
            "word": "to ",
            "start": 111.668,
            "end": 111.913
          },
          {
            "word": "see ",
            "start": 111.913,
            "end": 112.485
          },
          {
            "word": "you",
            "start": 112.485,
            "end": 113.908
          }
        ]
      },
      {
        "verseStart": 113.908,
        "verseEnd": 117.724,
        "words": [
          {
            "word": "So ",
            "start": 113.908,
            "end": 114.364
          },
          {
            "word": "desperate ",
            "start": 114.364,
            "end": 114.853
          },
          {
            "word": "and ",
            "start": 114.853,
            "end": 115.056
          },
          {
            "word": "pathetic, ",
            "start": 115.056,
            "end": 115.956
          },
          {
            "word": "you ",
            "start": 115.956,
            "end": 116.171
          },
          {
            "word": "think ",
            "start": 116.171,
            "end": 116.377
          },
          {
            "word": "that ",
            "start": 116.377,
            "end": 116.625
          },
          {
            "word": "no ",
            "start": 116.625,
            "end": 116.827
          },
          {
            "word": "one ",
            "start": 116.827,
            "end": 117.071
          },
          {
            "word": "sees ",
            "start": 117.071,
            "end": 117.316
          },
          {
            "word": "this?",
            "start": 117.316,
            "end": 117.724
          }
        ]
      },
      {
        "verseStart": 117.724,
        "verseEnd": 121.654,
        "words": [
          {
            "word": "I ",
            "start": 117.724,
            "end": 117.969
          },
          {
            "word": "think ",
            "start": 117.969,
            "end": 118.213
          },
          {
            "word": "it's ",
            "start": 118.213,
            "end": 118.416
          },
          {
            "word": "time ",
            "start": 118.416,
            "end": 118.663
          },
          {
            "word": "you ",
            "start": 118.663,
            "end": 118.909
          },
          {
            "word": "knew ",
            "start": 118.909,
            "end": 119.24
          },
          {
            "word": "the ",
            "start": 119.24,
            "end": 119.49
          },
          {
            "word": "truth, ",
            "start": 119.49,
            "end": 120.513
          },
          {
            "word": "yeah",
            "start": 120.513,
            "end": 121.654
          }
        ]
      },
      {
        "verseStart": 121.654,
        "verseEnd": 125.129,
        "words": [
          {
            "word": "I'm ",
            "start": 121.654,
            "end": 121.898
          },
          {
            "word": "burning ",
            "start": 121.898,
            "end": 122.304
          },
          {
            "word": "down ",
            "start": 122.304,
            "end": 122.754
          },
          {
            "word": "every ",
            "start": 122.754,
            "end": 123.163
          },
          {
            "word": "bridge ",
            "start": 123.163,
            "end": 123.572
          },
          {
            "word": "we ",
            "start": 123.572,
            "end": 124.023
          },
          {
            "word": "made",
            "start": 124.023,
            "end": 125.129
          }
        ]
      },
      {
        "verseStart": 125.129,
        "verseEnd": 128.611,
        "words": [
          {
            "word": "I'll ",
            "start": 125.129,
            "end": 125.334
          },
          {
            "word": "watch ",
            "start": 125.334,
            "end": 125.581
          },
          {
            "word": "you ",
            "start": 125.581,
            "end": 125.828
          },
          {
            "word": "choke ",
            "start": 125.828,
            "end": 126.24
          },
          {
            "word": "on ",
            "start": 126.24,
            "end": 126.446
          },
          {
            "word": "the ",
            "start": 126.446,
            "end": 126.691
          },
          {
            "word": "hearts ",
            "start": 126.691,
            "end": 127.057
          },
          {
            "word": "you ",
            "start": 127.057,
            "end": 127.507
          },
          {
            "word": "break",
            "start": 127.507,
            "end": 128.611
          }
        ]
      },
      {
        "verseStart": 128.611,
        "verseEnd": 131.885,
        "words": [
          {
            "word": "I'm ",
            "start": 128.611,
            "end": 128.856
          },
          {
            "word": "bleeding ",
            "start": 128.856,
            "end": 129.267
          },
          {
            "word": "out ",
            "start": 129.267,
            "end": 129.755
          },
          {
            "word": "every ",
            "start": 129.755,
            "end": 130.124
          },
          {
            "word": "word ",
            "start": 130.124,
            "end": 130.572
          },
          {
            "word": "you ",
            "start": 130.572,
            "end": 130.981
          },
          {
            "word": "said",
            "start": 130.981,
            "end": 131.885
          }
        ]
      },
      {
        "verseStart": 131.885,
        "verseEnd": 135.599,
        "words": [
          {
            "word": "Go ",
            "start": 131.885,
            "end": 132.332
          },
          {
            "word": "to ",
            "start": 132.332,
            "end": 132.536
          },
          {
            "word": "hell, ",
            "start": 132.536,
            "end": 133.149
          },
          {
            "word": "for ",
            "start": 133.149,
            "end": 133.601
          },
          {
            "word": "heaven's ",
            "start": 133.601,
            "end": 134.17
          },
          {
            "word": "sake",
            "start": 134.17,
            "end": 135.599
          }
        ]
      },
      {
        "verseStart": 135.599,
        "verseEnd": 139.051,
        "words": [
          {
            "word": "I'm ",
            "start": 135.599,
            "end": 135.805
          },
          {
            "word": "burning ",
            "start": 135.805,
            "end": 136.253
          },
          {
            "word": "down ",
            "start": 136.253,
            "end": 136.701
          },
          {
            "word": "every ",
            "start": 136.701,
            "end": 137.112
          },
          {
            "word": "bridge ",
            "start": 137.112,
            "end": 137.529
          },
          {
            "word": "we ",
            "start": 137.529,
            "end": 137.978
          },
          {
            "word": "made",
            "start": 137.978,
            "end": 139.051
          }
        ]
      },
      {
        "verseStart": 139.051,
        "verseEnd": 142.521,
        "words": [
          {
            "word": "I'll ",
            "start": 139.051,
            "end": 139.335
          },
          {
            "word": "watch ",
            "start": 139.335,
            "end": 139.54
          },
          {
            "word": "you ",
            "start": 139.54,
            "end": 139.742
          },
          {
            "word": "choke ",
            "start": 139.742,
            "end": 140.15
          },
          {
            "word": "on ",
            "start": 140.15,
            "end": 140.353
          },
          {
            "word": "the ",
            "start": 140.353,
            "end": 140.601
          },
          {
            "word": "hearts ",
            "start": 140.601,
            "end": 140.967
          },
          {
            "word": "you ",
            "start": 140.967,
            "end": 141.415
          },
          {
            "word": "break",
            "start": 141.415,
            "end": 142.521
          }
        ]
      },
      {
        "verseStart": 142.521,
        "verseEnd": 145.795,
        "words": [
          {
            "word": "I'm ",
            "start": 142.521,
            "end": 142.766
          },
          {
            "word": "bleeding ",
            "start": 142.766,
            "end": 143.338
          },
          {
            "word": "out ",
            "start": 143.338,
            "end": 143.542
          },
          {
            "word": "every ",
            "start": 143.542,
            "end": 144.03
          },
          {
            "word": "word ",
            "start": 144.03,
            "end": 144.444
          },
          {
            "word": "you ",
            "start": 144.444,
            "end": 144.89
          },
          {
            "word": "said",
            "start": 144.89,
            "end": 145.795
          }
        ]
      },
      {
        "verseStart": 145.795,
        "verseEnd": 149.67,
        "words": [
          {
            "word": "Go ",
            "start": 145.795,
            "end": 146.246
          },
          {
            "word": "to ",
            "start": 146.246,
            "end": 146.492
          },
          {
            "word": "hell, ",
            "start": 146.492,
            "end": 147.06
          },
          {
            "word": "for ",
            "start": 147.06,
            "end": 147.466
          },
          {
            "word": "heaven's ",
            "start": 147.466,
            "end": 148.084
          },
          {
            "word": "sake",
            "start": 148.084,
            "end": 149.67
          }
        ]
      },
      {
        "verseStart": 149.67,
        "verseEnd": 162.305,
        "words": [
          {
            "word": "When ",
            "start": 149.67,
            "end": 150.084
          },
          {
            "word": "did ",
            "start": 150.084,
            "end": 150.533
          },
          {
            "word": "the ",
            "start": 150.533,
            "end": 150.739
          },
          {
            "word": "diamonds ",
            "start": 150.739,
            "end": 151.758
          },
          {
            "word": "leave ",
            "start": 151.758,
            "end": 152.166
          },
          {
            "word": "your ",
            "start": 152.166,
            "end": 152.755
          },
          {
            "word": "bones?",
            "start": 152.755,
            "end": 162.305
          }
        ]
      },
      {
        "verseStart": 162.305,
        "verseEnd": 173.929,
        "words": [
          {
            "word": "Leave ",
            "start": 162.305,
            "end": 162.709
          },
          {
            "word": "your ",
            "start": 162.709,
            "end": 163.16
          },
          {
            "word": "bones",
            "start": 163.16,
            "end": 173.929
          }
        ]
      },
      {
        "verseStart": 173.929,
        "verseEnd": 177.419,
        "words": [
          {
            "word": "You're ",
            "start": 173.929,
            "end": 174.092
          },
          {
            "word": "not ",
            "start": 174.092,
            "end": 174.296
          },
          {
            "word": "a ",
            "start": 174.296,
            "end": 174.503
          },
          {
            "word": "shepherd, ",
            "start": 174.503,
            "end": 175.612
          },
          {
            "word": "you're ",
            "start": 175.612,
            "end": 175.82
          },
          {
            "word": "just ",
            "start": 175.82,
            "end": 176.031
          },
          {
            "word": "a ",
            "start": 176.031,
            "end": 176.275
          },
          {
            "word": "sheep",
            "start": 176.275,
            "end": 177.419
          }
        ]
      },
      {
        "verseStart": 177.419,
        "verseEnd": 180.848,
        "words": [
          {
            "word": "A ",
            "start": 177.419,
            "end": 177.623
          },
          {
            "word": "combined ",
            "start": 177.623,
            "end": 177.988
          },
          {
            "word": "effort ",
            "start": 177.988,
            "end": 178.643
          },
          {
            "word": "of ",
            "start": 178.643,
            "end": 178.887
          },
          {
            "word": "everyone ",
            "start": 178.887,
            "end": 179.538
          },
          {
            "word": "you ",
            "start": 179.538,
            "end": 179.741
          },
          {
            "word": "meet",
            "start": 179.741,
            "end": 180.848
          }
        ]
      },
      {
        "verseStart": 180.848,
        "verseEnd": 184.05,
        "words": [
          {
            "word": "You're ",
            "start": 180.848,
            "end": 181.052
          },
          {
            "word": "all ",
            "start": 181.052,
            "end": 181.422
          },
          {
            "word": "flesh ",
            "start": 181.422,
            "end": 182.493
          },
          {
            "word": "with ",
            "start": 182.493,
            "end": 182.696
          },
          {
            "word": "no ",
            "start": 182.696,
            "end": 183.189
          },
          {
            "word": "bone",
            "start": 183.189,
            "end": 184.05
          }
        ]
      },
      {
        "verseStart": 184.05,
        "verseEnd": 201.662,
        "words": [
          {
            "word": "Feed ' ",
            "start": 184.05,
            "end": 184.254
          },
          {
            "word": "em ",
            "start": 184.254,
            "end": 184.503
          },
          {
            "word": "to ",
            "start": 184.503,
            "end": 184.749
          },
          {
            "word": "the ",
            "start": 184.749,
            "end": 184.956
          },
          {
            "word": "sharks ",
            "start": 184.956,
            "end": 185.571
          },
          {
            "word": "and ",
            "start": 185.571,
            "end": 185.775
          },
          {
            "word": "throw ' ",
            "start": 185.775,
            "end": 185.988
          },
          {
            "word": "em ",
            "start": 185.988,
            "end": 186.191
          },
          {
            "word": "to ",
            "start": 186.191,
            "end": 186.396
          },
          {
            "word": "the ",
            "start": 186.396,
            "end": 186.605
          },
          {
            "word": "wolves",
            "start": 186.605,
            "end": 201.662
          }
        ]
      },
      {
        "verseStart": 201.662,
        "verseEnd": 205.138,
        "words": [
          {
            "word": "I'm ",
            "start": 201.662,
            "end": 201.865
          },
          {
            "word": "burning ",
            "start": 201.865,
            "end": 202.318
          },
          {
            "word": "down ",
            "start": 202.318,
            "end": 202.726
          },
          {
            "word": "every ",
            "start": 202.726,
            "end": 203.171
          },
          {
            "word": "bridge ",
            "start": 203.171,
            "end": 203.583
          },
          {
            "word": "we ",
            "start": 203.583,
            "end": 203.989
          },
          {
            "word": "made",
            "start": 203.989,
            "end": 205.138
          }
        ]
      },
      {
        "verseStart": 205.138,
        "verseEnd": 208.616,
        "words": [
          {
            "word": "I'll ",
            "start": 205.138,
            "end": 205.383
          },
          {
            "word": "watch ",
            "start": 205.383,
            "end": 205.587
          },
          {
            "word": "you ",
            "start": 205.587,
            "end": 205.832
          },
          {
            "word": "choke ",
            "start": 205.832,
            "end": 206.245
          },
          {
            "word": "on ",
            "start": 206.245,
            "end": 206.653
          },
          {
            "word": "the ",
            "start": 206.653,
            "end": 207.1
          },
          {
            "word": "hearts ",
            "start": 207.1,
            "end": 207.511
          },
          {
            "word": "you ",
            "start": 207.511,
            "end": 207.801
          },
          {
            "word": "break",
            "start": 207.801,
            "end": 208.616
          }
        ]
      },
      {
        "verseStart": 208.616,
        "verseEnd": 211.821,
        "words": [
          {
            "word": "I'm ",
            "start": 208.616,
            "end": 208.821
          },
          {
            "word": "bleeding ",
            "start": 208.821,
            "end": 209.23
          },
          {
            "word": "out ",
            "start": 209.23,
            "end": 209.721
          },
          {
            "word": "every ",
            "start": 209.721,
            "end": 210.09
          },
          {
            "word": "word ",
            "start": 210.09,
            "end": 210.539
          },
          {
            "word": "you ",
            "start": 210.539,
            "end": 210.952
          },
          {
            "word": "said",
            "start": 210.952,
            "end": 211.821
          }
        ]
      },
      {
        "verseStart": 211.821,
        "verseEnd": 215.544,
        "words": [
          {
            "word": "Go ",
            "start": 211.821,
            "end": 212.351
          },
          {
            "word": "to ",
            "start": 212.351,
            "end": 212.562
          },
          {
            "word": "hell, ",
            "start": 212.562,
            "end": 213.132
          },
          {
            "word": "for ",
            "start": 213.132,
            "end": 213.579
          },
          {
            "word": "heaven's ",
            "start": 213.579,
            "end": 214.194
          },
          {
            "word": "sake",
            "start": 214.194,
            "end": 215.544
          }
        ]
      },
      {
        "verseStart": 215.544,
        "verseEnd": 219.068,
        "words": [
          {
            "word": "I'm ",
            "start": 215.544,
            "end": 215.75
          },
          {
            "word": "burning ",
            "start": 215.75,
            "end": 216.161
          },
          {
            "word": "down ",
            "start": 216.161,
            "end": 216.654
          },
          {
            "word": "every ",
            "start": 216.654,
            "end": 217.069
          },
          {
            "word": "bridge ",
            "start": 217.069,
            "end": 217.475
          },
          {
            "word": "we ",
            "start": 217.475,
            "end": 217.845
          },
          {
            "word": "made",
            "start": 217.845,
            "end": 219.068
          }
        ]
      },
      {
        "verseStart": 219.068,
        "verseEnd": 222.541,
        "words": [
          {
            "word": "I'll ",
            "start": 219.068,
            "end": 219.271
          },
          {
            "word": "watch ",
            "start": 219.271,
            "end": 219.518
          },
          {
            "word": "you ",
            "start": 219.518,
            "end": 219.724
          },
          {
            "word": "choke ",
            "start": 219.724,
            "end": 220.133
          },
          {
            "word": "on ",
            "start": 220.133,
            "end": 220.376
          },
          {
            "word": "the ",
            "start": 220.376,
            "end": 220.62
          },
          {
            "word": "hearts ",
            "start": 220.62,
            "end": 220.99
          },
          {
            "word": "you ",
            "start": 220.99,
            "end": 221.438
          },
          {
            "word": "break",
            "start": 221.438,
            "end": 222.541
          }
        ]
      },
      {
        "verseStart": 222.541,
        "verseEnd": 225.777,
        "words": [
          {
            "word": "I'm ",
            "start": 222.541,
            "end": 222.709
          },
          {
            "word": "bleeding ",
            "start": 222.709,
            "end": 223.161
          },
          {
            "word": "out ",
            "start": 223.161,
            "end": 223.65
          },
          {
            "word": "every ",
            "start": 223.65,
            "end": 224.096
          },
          {
            "word": "word ",
            "start": 224.096,
            "end": 224.468
          },
          {
            "word": "you ",
            "start": 224.468,
            "end": 224.916
          },
          {
            "word": "said",
            "start": 224.916,
            "end": 225.777
          }
        ]
      },
      {
        "verseStart": 225.777,
        "verseEnd": 229.219,
        "words": [
          {
            "word": "Go ",
            "start": 225.777,
            "end": 226.227
          },
          {
            "word": "to ",
            "start": 226.227,
            "end": 226.431
          },
          {
            "word": "hell, ",
            "start": 226.431,
            "end": 227.046
          },
          {
            "word": "for ",
            "start": 227.046,
            "end": 227.496
          },
          {
            "word": "heaven's ",
            "start": 227.496,
            "end": 228.11
          },
          {
            "word": "sake",
            "start": 228.11,
            "end": 229.219
          }
        ]
      },
      {
        "verseStart": 229.219,
        "verseEnd": 232.69,
        "words": [
          {
            "word": "Go ",
            "start": 229.219,
            "end": 229.713
          },
          {
            "word": "to ",
            "start": 229.713,
            "end": 229.923
          },
          {
            "word": "hell, ",
            "start": 229.923,
            "end": 230.532
          },
          {
            "word": "for ",
            "start": 230.532,
            "end": 231.021
          },
          {
            "word": "heaven's ",
            "start": 231.021,
            "end": 231.631
          },
          {
            "word": "sake",
            "start": 231.631,
            "end": 232.69
          }
        ]
      },
      {
        "verseStart": 232.69,
        "verseEnd": 236.09,
        "words": [
          {
            "word": "Go ",
            "start": 232.69,
            "end": 233.224
          },
          {
            "word": "to ",
            "start": 233.224,
            "end": 233.428
          },
          {
            "word": "hell, ",
            "start": 233.428,
            "end": 234.084
          },
          {
            "word": "for ",
            "start": 234.084,
            "end": 234.489
          },
          {
            "word": "heaven's ",
            "start": 234.489,
            "end": 235.142
          },
          {
            "word": "sake",
            "start": 235.142,
            "end": 236.09
          }
        ]
      },
      {
        "verseStart": 236.09,
        "verseEnd": 240.579,
        "words": [
          {
            "word": "Go ",
            "start": 236.09,
            "end": 236.703
          },
          {
            "word": "to ",
            "start": 236.703,
            "end": 236.908
          },
          {
            "word": "hell, ",
            "start": 236.908,
            "end": 237.52
          },
          {
            "word": "for ",
            "start": 237.52,
            "end": 237.928
          },
          {
            "word": "heaven's ",
            "start": 237.928,
            "end": 238.579
          },
          {
            "word": "sake",
            "start": 238.579,
            "end": 233.64
          }
        ]
      }
    ]
  },
  "IC3PEAK - Boo-Hoo.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 2.275,
        "verseEnd": 8.196,
        "words": [
          {
            "word": "Плак- ",
            "start": 2.275,
            "end": 2.561
          },
          {
            "word": "плак, ",
            "start": 2.561,
            "end": 5.331
          },
          {
            "word": "плак- ",
            "start": 5.331,
            "end": 5.615
          },
          {
            "word": "плак",
            "start": 5.615,
            "end": 8.196
          }
        ]
      },
      {
        "verseStart": 8.196,
        "verseEnd": 12.068,
        "words": [
          {
            "word": "Плак- ",
            "start": 8.196,
            "end": 8.523
          },
          {
            "word": "плак, ",
            "start": 8.523,
            "end": 11.416
          },
          {
            "word": "плак- ",
            "start": 11.416,
            "end": 11.741
          },
          {
            "word": "плак",
            "start": 11.741,
            "end": 12.068
          }
        ]
      },
      {
        "verseStart": 12.068,
        "verseEnd": 15.206,
        "words": [
          {
            "word": "Я ",
            "start": 12.068,
            "end": 12.354
          },
          {
            "word": "тебе ",
            "start": 12.354,
            "end": 12.721
          },
          {
            "word": "писала ",
            "start": 12.721,
            "end": 12.924
          },
          {
            "word": "и ",
            "start": 12.924,
            "end": 13.331
          },
          {
            "word": "ждала ",
            "start": 13.331,
            "end": 13.658
          },
          {
            "word": "тебя ",
            "start": 13.658,
            "end": 14.147
          },
          {
            "word": "в ",
            "start": 14.147,
            "end": 14.392
          },
          {
            "word": "ночи ( ",
            "start": 14.392,
            "end": 14.636
          },
          {
            "word": "плак- ",
            "start": 14.636,
            "end": 14.881
          },
          {
            "word": "плак)",
            "start": 14.881,
            "end": 15.206
          }
        ]
      },
      {
        "verseStart": 15.206,
        "verseEnd": 18.14,
        "words": [
          {
            "word": "Ты ",
            "start": 15.206,
            "end": 15.452
          },
          {
            "word": "не ",
            "start": 15.452,
            "end": 15.777
          },
          {
            "word": "отвечаешь ",
            "start": 15.777,
            "end": 16.305
          },
          {
            "word": "больше ",
            "start": 16.305,
            "end": 16.671
          },
          {
            "word": "на ",
            "start": 16.671,
            "end": 16.915
          },
          {
            "word": "мои ",
            "start": 16.915,
            "end": 17.2
          },
          {
            "word": "звонки ( ",
            "start": 17.2,
            "end": 17.449
          },
          {
            "word": "плак- ",
            "start": 17.449,
            "end": 17.815
          },
          {
            "word": "плак)",
            "start": 17.815,
            "end": 18.14
          }
        ]
      },
      {
        "verseStart": 18.14,
        "verseEnd": 21.071,
        "words": [
          {
            "word": "Каждый ",
            "start": 18.14,
            "end": 18.629
          },
          {
            "word": "вечер ",
            "start": 18.629,
            "end": 18.873
          },
          {
            "word": "оставляю ",
            "start": 18.873,
            "end": 19.281
          },
          {
            "word": "под ",
            "start": 19.281,
            "end": 19.606
          },
          {
            "word": "подушкой ",
            "start": 19.606,
            "end": 19.809
          },
          {
            "word": "зуб ( ",
            "start": 19.809,
            "end": 20.299
          },
          {
            "word": "плак- ",
            "start": 20.299,
            "end": 20.502
          },
          {
            "word": "плак)",
            "start": 20.502,
            "end": 21.071
          }
        ]
      },
      {
        "verseStart": 21.071,
        "verseEnd": 24.215,
        "words": [
          {
            "word": "Умоляю ",
            "start": 21.071,
            "end": 21.77
          },
          {
            "word": "небеса ",
            "start": 21.77,
            "end": 21.974
          },
          {
            "word": "назад ",
            "start": 21.974,
            "end": 22.505
          },
          {
            "word": "тебя ",
            "start": 22.505,
            "end": 22.708
          },
          {
            "word": "вернуть ( ",
            "start": 22.708,
            "end": 23.404
          },
          {
            "word": "плак- ",
            "start": 23.404,
            "end": 23.81
          },
          {
            "word": "плак)",
            "start": 23.81,
            "end": 24.215
          }
        ]
      },
      {
        "verseStart": 24.215,
        "verseEnd": 27.359,
        "words": [
          {
            "word": "Я ",
            "start": 24.215,
            "end": 24.42
          },
          {
            "word": "была ",
            "start": 24.42,
            "end": 24.745
          },
          {
            "word": "хорошей, ",
            "start": 24.745,
            "end": 25.32
          },
          {
            "word": "а ",
            "start": 25.32,
            "end": 25.525
          },
          {
            "word": "плохой ",
            "start": 25.525,
            "end": 25.729
          },
          {
            "word": "я ",
            "start": 25.729,
            "end": 25.972
          },
          {
            "word": "не ",
            "start": 25.972,
            "end": 26.175
          },
          {
            "word": "была ( ",
            "start": 26.175,
            "end": 26.421
          },
          {
            "word": "плак- ",
            "start": 26.421,
            "end": 27.033
          },
          {
            "word": "плак)",
            "start": 27.033,
            "end": 27.359
          }
        ]
      },
      {
        "verseStart": 27.359,
        "verseEnd": 30.543,
        "words": [
          {
            "word": "Я ",
            "start": 27.359,
            "end": 27.565
          },
          {
            "word": "всю ",
            "start": 27.565,
            "end": 27.894
          },
          {
            "word": "жизнь, ",
            "start": 27.894,
            "end": 28.34
          },
          {
            "word": "как ",
            "start": 28.34,
            "end": 28.707
          },
          {
            "word": "паинька, ",
            "start": 28.707,
            "end": 29.074
          },
          {
            "word": "по ",
            "start": 29.074,
            "end": 29.403
          },
          {
            "word": "правилам ",
            "start": 29.403,
            "end": 29.606
          },
          {
            "word": "жила ( ",
            "start": 29.606,
            "end": 30.096
          },
          {
            "word": "плак- ",
            "start": 30.096,
            "end": 30.339
          },
          {
            "word": "плак)",
            "start": 30.339,
            "end": 30.543
          }
        ]
      },
      {
        "verseStart": 30.543,
        "verseEnd": 33.359,
        "words": [
          {
            "word": "Надоело ",
            "start": 30.543,
            "end": 30.91
          },
          {
            "word": "плакать, ",
            "start": 30.91,
            "end": 31.235
          },
          {
            "word": "надоело ",
            "start": 31.235,
            "end": 31.522
          },
          {
            "word": "мне ",
            "start": 31.522,
            "end": 31.888
          },
          {
            "word": "страдать ( ",
            "start": 31.888,
            "end": 32.545
          },
          {
            "word": "плак- ",
            "start": 32.545,
            "end": 32.952
          },
          {
            "word": "плак)",
            "start": 32.952,
            "end": 33.359
          }
        ]
      },
      {
        "verseStart": 33.359,
        "verseEnd": 36.97,
        "words": [
          {
            "word": "Всё ",
            "start": 33.359,
            "end": 33.729
          },
          {
            "word": "равно ",
            "start": 33.729,
            "end": 34.095
          },
          {
            "word": "не ",
            "start": 34.095,
            "end": 34.503
          },
          {
            "word": "выйдет ",
            "start": 34.503,
            "end": 34.707
          },
          {
            "word": "свою ",
            "start": 34.707,
            "end": 34.912
          },
          {
            "word": "смерть ",
            "start": 34.912,
            "end": 35.201
          },
          {
            "word": "предугадать ( ",
            "start": 35.201,
            "end": 35.77
          },
          {
            "word": "плак- ",
            "start": 35.77,
            "end": 36.177
          },
          {
            "word": "плак)",
            "start": 36.177,
            "end": 36.97
          }
        ]
      },
      {
        "verseStart": 36.97,
        "verseEnd": 42.78,
        "words": [
          {
            "word": "Ла- ",
            "start": 36.97,
            "end": 37.423
          },
          {
            "word": "ла- ",
            "start": 37.423,
            "end": 37.79
          },
          {
            "word": "ла- ",
            "start": 37.79,
            "end": 38.854
          },
          {
            "word": "ла- ",
            "start": 38.854,
            "end": 39.84
          },
          {
            "word": "ла- ",
            "start": 39.84,
            "end": 40.165
          },
          {
            "word": "а- ",
            "start": 40.165,
            "end": 40.532
          },
          {
            "word": "а- ",
            "start": 40.532,
            "end": 41.634
          },
          {
            "word": "а",
            "start": 41.634,
            "end": 42.78
          }
        ]
      },
      {
        "verseStart": 42.78,
        "verseEnd": 48.416,
        "words": [
          {
            "word": "Ла- ",
            "start": 42.78,
            "end": 43.433
          },
          {
            "word": "ла- ",
            "start": 43.433,
            "end": 43.926
          },
          {
            "word": "ла- ",
            "start": 43.926,
            "end": 44.617
          },
          {
            "word": "ла- ",
            "start": 44.617,
            "end": 44.78
          },
          {
            "word": "ла- ",
            "start": 44.78,
            "end": 45.797
          },
          {
            "word": "а- ",
            "start": 45.797,
            "end": 46.494
          },
          {
            "word": "а- ",
            "start": 46.494,
            "end": 47.025
          },
          {
            "word": "а",
            "start": 47.025,
            "end": 48.416
          }
        ]
      },
      {
        "verseStart": 48.416,
        "verseEnd": 51.436,
        "words": [
          {
            "word": "Мама ",
            "start": 48.416,
            "end": 48.823
          },
          {
            "word": "говорила ",
            "start": 48.823,
            "end": 49.645
          },
          {
            "word": "мне: \" ",
            "start": 49.645,
            "end": 49.93
          },
          {
            "word": "Слушайся ",
            "start": 49.93,
            "end": 50.744
          },
          {
            "word": "мужа\"",
            "start": 50.744,
            "end": 51.436
          }
        ]
      },
      {
        "verseStart": 51.436,
        "verseEnd": 54.554,
        "words": [
          {
            "word": "Я ",
            "start": 51.436,
            "end": 51.643
          },
          {
            "word": "не ",
            "start": 51.643,
            "end": 51.932
          },
          {
            "word": "послушна, ",
            "start": 51.932,
            "end": 52.957
          },
          {
            "word": "я ",
            "start": 52.957,
            "end": 53.12
          },
          {
            "word": "делаю ",
            "start": 53.12,
            "end": 53.533
          },
          {
            "word": "хуже",
            "start": 53.533,
            "end": 54.554
          }
        ]
      },
      {
        "verseStart": 54.554,
        "verseEnd": 57.661,
        "words": [
          {
            "word": "Делаю ",
            "start": 54.554,
            "end": 54.965
          },
          {
            "word": "не ",
            "start": 54.965,
            "end": 55.295
          },
          {
            "word": "так, ",
            "start": 55.295,
            "end": 55.702
          },
          {
            "word": "как ",
            "start": 55.702,
            "end": 56.068
          },
          {
            "word": "наказывал ",
            "start": 56.068,
            "end": 56.807
          },
          {
            "word": "папа",
            "start": 56.807,
            "end": 57.661
          }
        ]
      },
      {
        "verseStart": 57.661,
        "verseEnd": 60.606,
        "words": [
          {
            "word": "Вместо ",
            "start": 57.661,
            "end": 58.314
          },
          {
            "word": "звезды ",
            "start": 58.314,
            "end": 59.011
          },
          {
            "word": "я ",
            "start": 59.011,
            "end": 59.255
          },
          {
            "word": "хватаю ",
            "start": 59.255,
            "end": 59.747
          },
          {
            "word": "гранату",
            "start": 59.747,
            "end": 60.606
          }
        ]
      },
      {
        "verseStart": 60.606,
        "verseEnd": 63.56,
        "words": [
          {
            "word": "Мама ",
            "start": 60.606,
            "end": 61.102
          },
          {
            "word": "говорила ",
            "start": 61.102,
            "end": 61.715
          },
          {
            "word": "мне: \" ",
            "start": 61.715,
            "end": 62.126
          },
          {
            "word": "Слушайся ",
            "start": 62.126,
            "end": 62.616
          },
          {
            "word": "мужа\"",
            "start": 62.616,
            "end": 63.56
          }
        ]
      },
      {
        "verseStart": 63.56,
        "verseEnd": 66.708,
        "words": [
          {
            "word": "Я ",
            "start": 63.56,
            "end": 63.764
          },
          {
            "word": "не ",
            "start": 63.764,
            "end": 64.091
          },
          {
            "word": "послушна, ",
            "start": 64.091,
            "end": 65.072
          },
          {
            "word": "я ",
            "start": 65.072,
            "end": 65.281
          },
          {
            "word": "делаю ",
            "start": 65.281,
            "end": 65.608
          },
          {
            "word": "хуже",
            "start": 65.608,
            "end": 66.708
          }
        ]
      },
      {
        "verseStart": 66.708,
        "verseEnd": 69.693,
        "words": [
          {
            "word": "Делаю ",
            "start": 66.708,
            "end": 67.076
          },
          {
            "word": "не ",
            "start": 67.076,
            "end": 67.45
          },
          {
            "word": "так, ",
            "start": 67.45,
            "end": 67.859
          },
          {
            "word": "как ",
            "start": 67.859,
            "end": 68.224
          },
          {
            "word": "наказывал ",
            "start": 68.224,
            "end": 68.957
          },
          {
            "word": "папа",
            "start": 68.957,
            "end": 69.693
          }
        ]
      },
      {
        "verseStart": 69.693,
        "verseEnd": 72.958,
        "words": [
          {
            "word": "Вместо ",
            "start": 69.693,
            "end": 70.141
          },
          {
            "word": "звезды ",
            "start": 70.141,
            "end": 70.957
          },
          {
            "word": "я ",
            "start": 70.957,
            "end": 71.615
          },
          {
            "word": "хватаю ",
            "start": 71.615,
            "end": 71.9
          },
          {
            "word": "гранату",
            "start": 71.9,
            "end": 72.958
          }
        ]
      },
      {
        "verseStart": 72.958,
        "verseEnd": 78.927,
        "words": [
          {
            "word": "Я ",
            "start": 72.958,
            "end": 73.244
          },
          {
            "word": "хотела ",
            "start": 73.244,
            "end": 74.113
          },
          {
            "word": "бы ",
            "start": 74.113,
            "end": 74.605
          },
          {
            "word": "тебя, ",
            "start": 74.605,
            "end": 75.012
          },
          {
            "word": "как ",
            "start": 75.012,
            "end": 76.399
          },
          {
            "word": "тогда, ",
            "start": 76.399,
            "end": 77.132
          },
          {
            "word": "обнять",
            "start": 77.132,
            "end": 78.927
          }
        ]
      },
      {
        "verseStart": 78.927,
        "verseEnd": 84.883,
        "words": [
          {
            "word": "Но ",
            "start": 78.927,
            "end": 79.335
          },
          {
            "word": "для ",
            "start": 79.335,
            "end": 80.236
          },
          {
            "word": "этого ",
            "start": 80.236,
            "end": 81.175
          },
          {
            "word": "придётся ",
            "start": 81.175,
            "end": 82.071
          },
          {
            "word": "тело ",
            "start": 82.071,
            "end": 82.844
          },
          {
            "word": "раскопать",
            "start": 82.844,
            "end": 84.883
          }
        ]
      },
      {
        "verseStart": 84.883,
        "verseEnd": 91.015,
        "words": [
          {
            "word": "Твои ",
            "start": 84.883,
            "end": 85.702
          },
          {
            "word": "кости ",
            "start": 85.702,
            "end": 86.482
          },
          {
            "word": "ледяные ",
            "start": 86.482,
            "end": 87.95
          },
          {
            "word": "где- ",
            "start": 87.95,
            "end": 88.321
          },
          {
            "word": "то ",
            "start": 88.321,
            "end": 88.647
          },
          {
            "word": "там ",
            "start": 88.647,
            "end": 89.054
          },
          {
            "word": "на ",
            "start": 89.054,
            "end": 89.422
          },
          {
            "word": "дне",
            "start": 89.422,
            "end": 91.015
          }
        ]
      },
      {
        "verseStart": 91.015,
        "verseEnd": 99.312,
        "words": [
          {
            "word": "Прорастут ",
            "start": 91.015,
            "end": 92.611
          },
          {
            "word": "цветы ",
            "start": 92.611,
            "end": 93.797
          },
          {
            "word": "в ",
            "start": 93.797,
            "end": 94.162
          },
          {
            "word": "этой ",
            "start": 94.162,
            "end": 94.652
          },
          {
            "word": "оплаканной ",
            "start": 94.652,
            "end": 95.226
          },
          {
            "word": "земле",
            "start": 95.226,
            "end": 99.312
          }
        ]
      },
      {
        "verseStart": 99.312,
        "verseEnd": 105.437,
        "words": [
          {
            "word": "Плак- ",
            "start": 99.312,
            "end": 99.638
          },
          {
            "word": "плак, ",
            "start": 99.638,
            "end": 102.499
          },
          {
            "word": "плак- ",
            "start": 102.499,
            "end": 102.824
          },
          {
            "word": "плак",
            "start": 102.824,
            "end": 105.437
          }
        ]
      },
      {
        "verseStart": 105.437,
        "verseEnd": 109.236,
        "words": [
          {
            "word": "Плак- ",
            "start": 105.437,
            "end": 105.766
          },
          {
            "word": "плак, ",
            "start": 105.766,
            "end": 108.544
          },
          {
            "word": "плак- ",
            "start": 108.544,
            "end": 108.91
          },
          {
            "word": "плак",
            "start": 108.91,
            "end": 109.236
          }
        ]
      },
      {
        "verseStart": 109.236,
        "verseEnd": 112.303,
        "words": [
          {
            "word": "Растекаются ",
            "start": 109.236,
            "end": 110.039
          },
          {
            "word": "по ",
            "start": 110.039,
            "end": 110.417
          },
          {
            "word": "всей ",
            "start": 110.417,
            "end": 110.786
          },
          {
            "word": "стене ",
            "start": 110.786,
            "end": 111.192
          },
          {
            "word": "твои ",
            "start": 111.192,
            "end": 111.478
          },
          {
            "word": "мозги ( ",
            "start": 111.478,
            "end": 111.648
          },
          {
            "word": "плак- ",
            "start": 111.648,
            "end": 111.976
          },
          {
            "word": "плак)",
            "start": 111.976,
            "end": 112.303
          }
        ]
      },
      {
        "verseStart": 112.303,
        "verseEnd": 115.338,
        "words": [
          {
            "word": "Очень ",
            "start": 112.303,
            "end": 112.924
          },
          {
            "word": "разозлилась ",
            "start": 112.924,
            "end": 113.454
          },
          {
            "word": "на ",
            "start": 113.454,
            "end": 113.74
          },
          {
            "word": "тебя, ",
            "start": 113.74,
            "end": 113.944
          },
          {
            "word": "ты ",
            "start": 113.944,
            "end": 114.27
          },
          {
            "word": "уж ",
            "start": 114.27,
            "end": 114.521
          },
          {
            "word": "прости ( ",
            "start": 114.521,
            "end": 114.686
          },
          {
            "word": "плак- ",
            "start": 114.686,
            "end": 115.053
          },
          {
            "word": "плак)",
            "start": 115.053,
            "end": 115.338
          }
        ]
      },
      {
        "verseStart": 115.338,
        "verseEnd": 118.406,
        "words": [
          {
            "word": "Сотый ",
            "start": 115.338,
            "end": 115.745
          },
          {
            "word": "раз ",
            "start": 115.745,
            "end": 116.072
          },
          {
            "word": "во ",
            "start": 116.072,
            "end": 116.316
          },
          {
            "word": "сне ",
            "start": 116.316,
            "end": 116.563
          },
          {
            "word": "я ",
            "start": 116.563,
            "end": 116.809
          },
          {
            "word": "наблюдаю ",
            "start": 116.809,
            "end": 117.054
          },
          {
            "word": "твой ",
            "start": 117.054,
            "end": 117.468
          },
          {
            "word": "конец ( ",
            "start": 117.468,
            "end": 117.713
          },
          {
            "word": "плак- ",
            "start": 117.713,
            "end": 118.038
          },
          {
            "word": "плак)",
            "start": 118.038,
            "end": 118.406
          }
        ]
      },
      {
        "verseStart": 118.406,
        "verseEnd": 121.475,
        "words": [
          {
            "word": "И ",
            "start": 118.406,
            "end": 118.65
          },
          {
            "word": "не ",
            "start": 118.65,
            "end": 118.855
          },
          {
            "word": "так ",
            "start": 118.855,
            "end": 119.101
          },
          {
            "word": "уж ",
            "start": 119.101,
            "end": 119.469
          },
          {
            "word": "страшно, ",
            "start": 119.469,
            "end": 119.755
          },
          {
            "word": "в ",
            "start": 119.755,
            "end": 119.964
          },
          {
            "word": "самом ",
            "start": 119.964,
            "end": 120.085
          },
          {
            "word": "деле, ",
            "start": 120.085,
            "end": 120.33
          },
          {
            "word": "умереть ( ",
            "start": 120.33,
            "end": 120.701
          },
          {
            "word": "плак- ",
            "start": 120.701,
            "end": 121.066
          },
          {
            "word": "плак)",
            "start": 121.066,
            "end": 121.475
          }
        ]
      },
      {
        "verseStart": 121.475,
        "verseEnd": 124.507,
        "words": [
          {
            "word": "Я ",
            "start": 121.475,
            "end": 121.683
          },
          {
            "word": "была ",
            "start": 121.683,
            "end": 122.05
          },
          {
            "word": "хорошей, ",
            "start": 122.05,
            "end": 122.463
          },
          {
            "word": "а ",
            "start": 122.463,
            "end": 122.669
          },
          {
            "word": "плохой ",
            "start": 122.669,
            "end": 122.872
          },
          {
            "word": "я ",
            "start": 122.872,
            "end": 123.035
          },
          {
            "word": "не ",
            "start": 123.035,
            "end": 123.242
          },
          {
            "word": "была ( ",
            "start": 123.242,
            "end": 123.693
          },
          {
            "word": "плак- ",
            "start": 123.693,
            "end": 124.1
          },
          {
            "word": "плак)",
            "start": 124.1,
            "end": 124.507
          }
        ]
      },
      {
        "verseStart": 124.507,
        "verseEnd": 127.418,
        "words": [
          {
            "word": "И ",
            "start": 124.507,
            "end": 124.712
          },
          {
            "word": "всю ",
            "start": 124.712,
            "end": 124.916
          },
          {
            "word": "жизнь ",
            "start": 124.916,
            "end": 125.12
          },
          {
            "word": "как ",
            "start": 125.12,
            "end": 125.324
          },
          {
            "word": "паинька, ",
            "start": 125.324,
            "end": 125.813
          },
          {
            "word": "по ",
            "start": 125.813,
            "end": 126.102
          },
          {
            "word": "правилам ",
            "start": 126.102,
            "end": 126.393
          },
          {
            "word": "жила ( ",
            "start": 126.393,
            "end": 126.686
          },
          {
            "word": "плак- ",
            "start": 126.686,
            "end": 127.052
          },
          {
            "word": "плак)",
            "start": 127.052,
            "end": 127.418
          }
        ]
      },
      {
        "verseStart": 127.418,
        "verseEnd": 130.444,
        "words": [
          {
            "word": "Надоело ",
            "start": 127.418,
            "end": 127.907
          },
          {
            "word": "плакать, ",
            "start": 127.907,
            "end": 128.359
          },
          {
            "word": "надоело ",
            "start": 128.359,
            "end": 128.891
          },
          {
            "word": "мне ",
            "start": 128.891,
            "end": 129.095
          },
          {
            "word": "страдать ( ",
            "start": 129.095,
            "end": 129.341
          },
          {
            "word": "плак- ",
            "start": 129.341,
            "end": 129.873
          },
          {
            "word": "плак)",
            "start": 129.873,
            "end": 130.444
          }
        ]
      },
      {
        "verseStart": 130.444,
        "verseEnd": 133.717,
        "words": [
          {
            "word": "Всё ",
            "start": 130.444,
            "end": 130.893
          },
          {
            "word": "равно ",
            "start": 130.893,
            "end": 131.302
          },
          {
            "word": "не ",
            "start": 131.302,
            "end": 131.631
          },
          {
            "word": "выйдет ",
            "start": 131.631,
            "end": 131.834
          },
          {
            "word": "свою ",
            "start": 131.834,
            "end": 132.001
          },
          {
            "word": "смерть ",
            "start": 132.001,
            "end": 132.368
          },
          {
            "word": "предугадать ( ",
            "start": 132.368,
            "end": 132.857
          },
          {
            "word": "плак- ",
            "start": 132.857,
            "end": 133.27
          },
          {
            "word": "плак)",
            "start": 133.27,
            "end": 133.717
          }
        ]
      },
      {
        "verseStart": 133.717,
        "verseEnd": 136.696,
        "words": [
          {
            "word": "Мама ",
            "start": 133.717,
            "end": 134.003
          },
          {
            "word": "говорила ",
            "start": 134.003,
            "end": 134.493
          },
          {
            "word": "мне: \" ",
            "start": 134.493,
            "end": 134.982
          },
          {
            "word": "Слушайся ",
            "start": 134.982,
            "end": 135.39
          },
          {
            "word": "мужа\"",
            "start": 135.39,
            "end": 136.696
          }
        ]
      },
      {
        "verseStart": 136.696,
        "verseEnd": 139.577,
        "words": [
          {
            "word": "Я ",
            "start": 136.696,
            "end": 136.86
          },
          {
            "word": "не ",
            "start": 136.86,
            "end": 137.063
          },
          {
            "word": "послушна, ",
            "start": 137.063,
            "end": 137.983
          },
          {
            "word": "я ",
            "start": 137.983,
            "end": 138.186
          },
          {
            "word": "делаю ",
            "start": 138.186,
            "end": 138.682
          },
          {
            "word": "хуже",
            "start": 138.682,
            "end": 139.577
          }
        ]
      },
      {
        "verseStart": 139.577,
        "verseEnd": 142.641,
        "words": [
          {
            "word": "Делаю ",
            "start": 139.577,
            "end": 140.27
          },
          {
            "word": "не ",
            "start": 140.27,
            "end": 140.433
          },
          {
            "word": "так, ",
            "start": 140.433,
            "end": 140.845
          },
          {
            "word": "как ",
            "start": 140.845,
            "end": 141.252
          },
          {
            "word": "наказывал ",
            "start": 141.252,
            "end": 141.904
          },
          {
            "word": "папа",
            "start": 141.904,
            "end": 142.641
          }
        ]
      },
      {
        "verseStart": 142.641,
        "verseEnd": 145.761,
        "words": [
          {
            "word": "Вместо ",
            "start": 142.641,
            "end": 143.103
          },
          {
            "word": "звезды ",
            "start": 143.103,
            "end": 143.794
          },
          {
            "word": "я ",
            "start": 143.794,
            "end": 144.168
          },
          {
            "word": "хватаю ",
            "start": 144.168,
            "end": 144.576
          },
          {
            "word": "гранату",
            "start": 144.576,
            "end": 145.761
          }
        ]
      },
      {
        "verseStart": 145.761,
        "verseEnd": 148.669,
        "words": [
          {
            "word": "Мама ",
            "start": 145.761,
            "end": 146.09
          },
          {
            "word": "говорила ",
            "start": 146.09,
            "end": 146.911
          },
          {
            "word": "мне: \" ",
            "start": 146.911,
            "end": 147.321
          },
          {
            "word": "Слушайся ",
            "start": 147.321,
            "end": 147.972
          },
          {
            "word": "мужа\"",
            "start": 147.972,
            "end": 148.669
          }
        ]
      },
      {
        "verseStart": 148.669,
        "verseEnd": 151.73,
        "words": [
          {
            "word": "Я ",
            "start": 148.669,
            "end": 148.832
          },
          {
            "word": "не ",
            "start": 148.832,
            "end": 149.202
          },
          {
            "word": "послушна, ",
            "start": 149.202,
            "end": 150.14
          },
          {
            "word": "я ",
            "start": 150.14,
            "end": 150.344
          },
          {
            "word": "делаю ",
            "start": 150.344,
            "end": 150.751
          },
          {
            "word": "хуже",
            "start": 150.751,
            "end": 151.73
          }
        ]
      },
      {
        "verseStart": 151.73,
        "verseEnd": 154.798,
        "words": [
          {
            "word": "Делаю ",
            "start": 151.73,
            "end": 152.427
          },
          {
            "word": "не ",
            "start": 152.427,
            "end": 152.592
          },
          {
            "word": "так, ",
            "start": 152.592,
            "end": 153.003
          },
          {
            "word": "как ",
            "start": 153.003,
            "end": 153.409
          },
          {
            "word": "наказывал ",
            "start": 153.409,
            "end": 153.736
          },
          {
            "word": "папа",
            "start": 153.736,
            "end": 154.798
          }
        ]
      },
      {
        "verseStart": 154.798,
        "verseEnd": 158.178,
        "words": [
          {
            "word": "Вместо ",
            "start": 154.798,
            "end": 155.247
          },
          {
            "word": "звезды ",
            "start": 155.247,
            "end": 156.021
          },
          {
            "word": "я ",
            "start": 156.021,
            "end": 156.467
          },
          {
            "word": "хватаю ",
            "start": 156.467,
            "end": 156.792
          },
          {
            "word": "гранату",
            "start": 156.792,
            "end": 158.178
          }
        ]
      },
      {
        "verseStart": 158.178,
        "verseEnd": 161.295,
        "words": [
          {
            "word": "Ла- ",
            "start": 158.178,
            "end": 158.79
          },
          {
            "word": "ла- ",
            "start": 158.79,
            "end": 158.96
          },
          {
            "word": "ла- ",
            "start": 158.96,
            "end": 159.368
          },
          {
            "word": "ла- ",
            "start": 159.368,
            "end": 160.064
          },
          {
            "word": "ла- ",
            "start": 160.064,
            "end": 160.234
          },
          {
            "word": "а- ",
            "start": 160.234,
            "end": 160.602
          },
          {
            "word": "а- ",
            "start": 160.602,
            "end": 160.968
          },
          {
            "word": "а",
            "start": 160.968,
            "end": 161.295
          }
        ]
      },
      {
        "verseStart": 161.295,
        "verseEnd": 164.403,
        "words": [
          {
            "word": "Ла- ",
            "start": 161.295,
            "end": 161.911
          },
          {
            "word": "ла- ",
            "start": 161.911,
            "end": 162.033
          },
          {
            "word": "ла- ",
            "start": 162.033,
            "end": 162.445
          },
          {
            "word": "ла- ",
            "start": 162.445,
            "end": 163.26
          },
          {
            "word": "ла- ",
            "start": 163.26,
            "end": 163.341
          },
          {
            "word": "а- ",
            "start": 163.341,
            "end": 163.708
          },
          {
            "word": "а- ",
            "start": 163.708,
            "end": 164.075
          },
          {
            "word": "а",
            "start": 164.075,
            "end": 164.403
          }
        ]
      },
      {
        "verseStart": 164.403,
        "verseEnd": 167.36,
        "words": [
          {
            "word": "Ла- ",
            "start": 164.403,
            "end": 164.939
          },
          {
            "word": "ла- ",
            "start": 164.939,
            "end": 165.061
          },
          {
            "word": "ла- ",
            "start": 165.061,
            "end": 165.511
          },
          {
            "word": "ла- ",
            "start": 165.511,
            "end": 166.086
          },
          {
            "word": "ла- ",
            "start": 166.086,
            "end": 166.249
          },
          {
            "word": "а- ",
            "start": 166.249,
            "end": 166.657
          },
          {
            "word": "а- ",
            "start": 166.657,
            "end": 166.988
          },
          {
            "word": "а",
            "start": 166.988,
            "end": 167.36
          }
        ]
      },
      {
        "verseStart": 167.36,
        "verseEnd": 170.104,
        "words": [
          {
            "word": "Ла- ",
            "start": 167.36,
            "end": 168.013
          },
          {
            "word": "ла- ",
            "start": 168.013,
            "end": 168.177
          },
          {
            "word": "ла- ",
            "start": 168.177,
            "end": 168.546
          },
          {
            "word": "ла- ",
            "start": 168.546,
            "end": 169.121
          },
          {
            "word": "ла- ",
            "start": 169.121,
            "end": 169.243
          },
          {
            "word": "а- ",
            "start": 169.243,
            "end": 169.57
          },
          {
            "word": "а- ",
            "start": 169.57,
            "end": 169.897
          },
          {
            "word": "а",
            "start": 169.897,
            "end": 170.104
          }
        ]
      },
      {
        "verseStart": 170.104,
        "verseEnd": 176.112,
        "words": [
          {
            "word": "Я ",
            "start": 170.104,
            "end": 170.433
          },
          {
            "word": "хотела ",
            "start": 170.433,
            "end": 171.251
          },
          {
            "word": "бы ",
            "start": 171.251,
            "end": 171.619
          },
          {
            "word": "тебя, ",
            "start": 171.619,
            "end": 172.354
          },
          {
            "word": "как ",
            "start": 172.354,
            "end": 173.744
          },
          {
            "word": "тогда, ",
            "start": 173.744,
            "end": 174.321
          },
          {
            "word": "обнять",
            "start": 174.321,
            "end": 176.112
          }
        ]
      },
      {
        "verseStart": 176.112,
        "verseEnd": 182.193,
        "words": [
          {
            "word": "Но ",
            "start": 176.112,
            "end": 176.605
          },
          {
            "word": "для ",
            "start": 176.605,
            "end": 177.383
          },
          {
            "word": "этого ",
            "start": 177.383,
            "end": 178.442
          },
          {
            "word": "придётся ",
            "start": 178.442,
            "end": 179.867
          },
          {
            "word": "тело ",
            "start": 179.867,
            "end": 180.071
          },
          {
            "word": "раскопать",
            "start": 180.071,
            "end": 182.193
          }
        ]
      },
      {
        "verseStart": 182.193,
        "verseEnd": 188.161,
        "words": [
          {
            "word": "Твои ",
            "start": 182.193,
            "end": 182.93
          },
          {
            "word": "кости ",
            "start": 182.93,
            "end": 183.75
          },
          {
            "word": "ледяные ",
            "start": 183.75,
            "end": 185.219
          },
          {
            "word": "где- ",
            "start": 185.219,
            "end": 185.545
          },
          {
            "word": "то ",
            "start": 185.545,
            "end": 185.953
          },
          {
            "word": "там ",
            "start": 185.953,
            "end": 186.363
          },
          {
            "word": "на ",
            "start": 186.363,
            "end": 186.773
          },
          {
            "word": "дне",
            "start": 186.773,
            "end": 188.161
          }
        ]
      },
      {
        "verseStart": 188.161,
        "verseEnd": 194.461,
        "words": [
          {
            "word": "Прорастут ",
            "start": 188.161,
            "end": 189.712
          },
          {
            "word": "цветы ",
            "start": 189.712,
            "end": 190.857
          },
          {
            "word": "в ",
            "start": 190.857,
            "end": 191.31
          },
          {
            "word": "этой ",
            "start": 191.31,
            "end": 191.636
          },
          {
            "word": "оплаканной ",
            "start": 191.636,
            "end": 192.461
          },
          {
            "word": "земле",
            "start": 192.461,
            "end": 193.14
          }
        ]
      }
    ]
  },
  "きゃりーぱみゅぱみゅ - きらきらキラー.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 0.393,
        "verseEnd": 6.274,
        "words": [
          {
            "word": "L- ",
            "start": 0.393,
            "end": 0.686
          },
          {
            "word": "U- ",
            "start": 0.686,
            "end": 1.052
          },
          {
            "word": "C- ",
            "start": 1.052,
            "end": 1.38
          },
          {
            "word": "K ",
            "start": 1.38,
            "end": 3.261
          },
          {
            "word": "L- ",
            "start": 3.261,
            "end": 3.587
          },
          {
            "word": "U- ",
            "start": 3.587,
            "end": 3.994
          },
          {
            "word": "C- ",
            "start": 3.994,
            "end": 4.361
          },
          {
            "word": "K",
            "start": 4.361,
            "end": 6.274
          }
        ]
      },
      {
        "verseStart": 6.274,
        "verseEnd": 24.231,
        "words": [
          {
            "word": "L- ",
            "start": 6.274,
            "end": 6.641
          },
          {
            "word": "U- ",
            "start": 6.641,
            "end": 7.049
          },
          {
            "word": "C- ",
            "start": 7.049,
            "end": 7.456
          },
          {
            "word": "K ",
            "start": 7.456,
            "end": 9.288
          },
          {
            "word": "L- ",
            "start": 9.288,
            "end": 9.654
          },
          {
            "word": "U- ",
            "start": 9.654,
            "end": 10.021
          },
          {
            "word": "C- ",
            "start": 10.021,
            "end": 10.428
          },
          {
            "word": "K",
            "start": 10.428,
            "end": 24.231
          }
        ]
      },
      {
        "verseStart": 24.231,
        "verseEnd": 30.27,
        "words": [
          {
            "word": "正体 ",
            "start": 24.231,
            "end": 24.922
          },
          {
            "word": "は ",
            "start": 24.922,
            "end": 25.491
          },
          {
            "word": "誰 ",
            "start": 25.491,
            "end": 25.943
          },
          {
            "word": "も ",
            "start": 25.943,
            "end": 26.147
          },
          {
            "word": "知 ",
            "start": 26.147,
            "end": 26.352
          },
          {
            "word": "ら ",
            "start": 26.352,
            "end": 26.556
          },
          {
            "word": "ない ",
            "start": 26.556,
            "end": 26.887
          },
          {
            "word": "秘密 ",
            "start": 26.887,
            "end": 27.945
          },
          {
            "word": "の ",
            "start": 27.945,
            "end": 28.761
          },
          {
            "word": "ヒーロー",
            "start": 28.761,
            "end": 30.27
          }
        ]
      },
      {
        "verseStart": 30.27,
        "verseEnd": 36.241,
        "words": [
          {
            "word": "悪役 ",
            "start": 30.27,
            "end": 30.839
          },
          {
            "word": "の ",
            "start": 30.839,
            "end": 31.083
          },
          {
            "word": "よう ",
            "start": 31.083,
            "end": 31.945
          },
          {
            "word": "にし ",
            "start": 31.945,
            "end": 32.351
          },
          {
            "word": "て ",
            "start": 32.351,
            "end": 32.514
          },
          {
            "word": "も ",
            "start": 32.514,
            "end": 32.963
          },
          {
            "word": "みんな ",
            "start": 32.963,
            "end": 33.619
          },
          {
            "word": "は ",
            "start": 33.619,
            "end": 33.984
          },
          {
            "word": "ね ",
            "start": 33.984,
            "end": 34.596
          },
          {
            "word": "わか ",
            "start": 34.596,
            "end": 35.049
          },
          {
            "word": "って ",
            "start": 35.049,
            "end": 35.456
          },
          {
            "word": "る",
            "start": 35.456,
            "end": 36.241
          }
        ]
      },
      {
        "verseStart": 36.241,
        "verseEnd": 43.118,
        "words": [
          {
            "word": "マスク ",
            "start": 36.241,
            "end": 37.341
          },
          {
            "word": "に ",
            "start": 37.341,
            "end": 37.602
          },
          {
            "word": "隠 ",
            "start": 37.602,
            "end": 38.256
          },
          {
            "word": "さ ",
            "start": 38.256,
            "end": 38.666
          },
          {
            "word": "れ ",
            "start": 38.666,
            "end": 39.236
          },
          {
            "word": "た ",
            "start": 39.236,
            "end": 40.173
          },
          {
            "word": "強い ",
            "start": 40.173,
            "end": 40.827
          },
          {
            "word": "優 ",
            "start": 40.827,
            "end": 41.398
          },
          {
            "word": "し ",
            "start": 41.398,
            "end": 41.682
          },
          {
            "word": "さ ",
            "start": 41.682,
            "end": 42.251
          },
          {
            "word": "に",
            "start": 42.251,
            "end": 43.118
          }
        ]
      },
      {
        "verseStart": 43.118,
        "verseEnd": 48.251,
        "words": [
          {
            "word": "ずっと ",
            "start": 43.118,
            "end": 43.81
          },
          {
            "word": "憧 ",
            "start": 43.81,
            "end": 44.38
          },
          {
            "word": "れ ",
            "start": 44.38,
            "end": 45.12
          },
          {
            "word": "て",
            "start": 45.12,
            "end": 48.251
          }
        ]
      },
      {
        "verseStart": 48.251,
        "verseEnd": 58.771,
        "words": [
          {
            "word": "ざわめく ",
            "start": 48.251,
            "end": 49.762
          },
          {
            "word": "街 ",
            "start": 49.762,
            "end": 50.333
          },
          {
            "word": "の ",
            "start": 50.333,
            "end": 51.27
          },
          {
            "word": "空 ",
            "start": 51.27,
            "end": 52.612
          },
          {
            "word": "を ",
            "start": 52.612,
            "end": 52.775
          },
          {
            "word": "見上げる ( ",
            "start": 52.775,
            "end": 55.381
          },
          {
            "word": "きらきら ",
            "start": 55.381,
            "end": 56.848
          },
          {
            "word": "キラー)",
            "start": 56.848,
            "end": 58.771
          }
        ]
      },
      {
        "verseStart": 58.771,
        "verseEnd": 60.121,
        "words": [
          {
            "word": "(One, ",
            "start": 58.771,
            "end": 59.184
          },
          {
            "word": "two, ",
            "start": 59.184,
            "end": 59.551
          },
          {
            "word": "three, ",
            "start": 59.551,
            "end": 59.918
          },
          {
            "word": "four)",
            "start": 59.918,
            "end": 60.121
          }
        ]
      },
      {
        "verseStart": 60.121,
        "verseEnd": 63.022,
        "words": [
          {
            "word": "きらきら ",
            "start": 60.121,
            "end": 60.976
          },
          {
            "word": "キラー ",
            "start": 60.976,
            "end": 61.544
          },
          {
            "word": "ラッキー ",
            "start": 61.544,
            "end": 62.031
          },
          {
            "word": "ラッキー ",
            "start": 62.031,
            "end": 62.439
          },
          {
            "word": "ラッキー",
            "start": 62.439,
            "end": 63.022
          }
        ]
      },
      {
        "verseStart": 63.022,
        "verseEnd": 66.002,
        "words": [
          {
            "word": "未来 ",
            "start": 63.022,
            "end": 63.797
          },
          {
            "word": "は ",
            "start": 63.797,
            "end": 64.002
          },
          {
            "word": "ほら ",
            "start": 64.002,
            "end": 64.572
          },
          {
            "word": "ハッピー ",
            "start": 64.572,
            "end": 65.104
          },
          {
            "word": "ハッピー ",
            "start": 65.104,
            "end": 65.514
          },
          {
            "word": "ハッピー",
            "start": 65.514,
            "end": 66.002
          }
        ]
      },
      {
        "verseStart": 66.002,
        "verseEnd": 70.782,
        "words": [
          {
            "word": "空 ",
            "start": 66.002,
            "end": 66.571
          },
          {
            "word": "から ",
            "start": 66.571,
            "end": 66.941
          },
          {
            "word": "今 ",
            "start": 66.941,
            "end": 67.471
          },
          {
            "word": "きらきら ",
            "start": 67.471,
            "end": 68.448
          },
          {
            "word": "キラー ",
            "start": 68.448,
            "end": 68.992
          },
          {
            "word": "coming ",
            "start": 68.992,
            "end": 69.521
          },
          {
            "word": "now",
            "start": 69.521,
            "end": 70.782
          }
        ]
      },
      {
        "verseStart": 70.782,
        "verseEnd": 72.125,
        "words": [
          {
            "word": "(One, ",
            "start": 70.782,
            "end": 71.15
          },
          {
            "word": "two, ",
            "start": 71.15,
            "end": 71.516
          },
          {
            "word": "three, ",
            "start": 71.516,
            "end": 71.922
          },
          {
            "word": "four)",
            "start": 71.922,
            "end": 72.125
          }
        ]
      },
      {
        "verseStart": 72.125,
        "verseEnd": 75.001,
        "words": [
          {
            "word": "きらきら ",
            "start": 72.125,
            "end": 72.908
          },
          {
            "word": "キラー ",
            "start": 72.908,
            "end": 73.575
          },
          {
            "word": "ハッピー ",
            "start": 73.575,
            "end": 74.146
          },
          {
            "word": "ハッピー ",
            "start": 74.146,
            "end": 74.553
          },
          {
            "word": "ハッピー",
            "start": 74.553,
            "end": 75.001
          }
        ]
      },
      {
        "verseStart": 75.001,
        "verseEnd": 77.95,
        "words": [
          {
            "word": "未来 ",
            "start": 75.001,
            "end": 75.743
          },
          {
            "word": "は ",
            "start": 75.743,
            "end": 75.948
          },
          {
            "word": "ほら ",
            "start": 75.948,
            "end": 76.482
          },
          {
            "word": "ラッキー ",
            "start": 76.482,
            "end": 77.012
          },
          {
            "word": "ラッキー ",
            "start": 77.012,
            "end": 77.42
          },
          {
            "word": "ラッキー",
            "start": 77.42,
            "end": 77.95
          }
        ]
      },
      {
        "verseStart": 77.95,
        "verseEnd": 83.43,
        "words": [
          {
            "word": "きらきら ",
            "start": 77.95,
            "end": 78.81
          },
          {
            "word": "キラー ",
            "start": 78.81,
            "end": 79.422
          },
          {
            "word": "ドキドキドキ ",
            "start": 79.422,
            "end": 81.015
          },
          {
            "word": "fall ",
            "start": 81.015,
            "end": 81.425
          },
          {
            "word": "in ",
            "start": 81.425,
            "end": 81.629
          },
          {
            "word": "love",
            "start": 81.629,
            "end": 83.43
          }
        ]
      },
      {
        "verseStart": 83.43,
        "verseEnd": 89.411,
        "words": [
          {
            "word": "きらきら ",
            "start": 83.43,
            "end": 84.124
          },
          {
            "word": "キラー ( ",
            "start": 84.124,
            "end": 85.026
          },
          {
            "word": "きらきら ",
            "start": 85.026,
            "end": 85.72
          },
          {
            "word": "キラー)",
            "start": 85.72,
            "end": 89.411
          }
        ]
      },
      {
        "verseStart": 89.411,
        "verseEnd": 93.868,
        "words": [
          {
            "word": "きらきら ",
            "start": 89.411,
            "end": 90.145
          },
          {
            "word": "キラー ( ",
            "start": 90.145,
            "end": 90.812
          },
          {
            "word": "マジカルパワー)",
            "start": 90.812,
            "end": 93.868
          }
        ]
      },
      {
        "verseStart": 93.868,
        "verseEnd": 96.192,
        "words": [
          {
            "word": "かんぜん ",
            "start": 93.868,
            "end": 94.6
          },
          {
            "word": "きらきら ",
            "start": 94.6,
            "end": 95.742
          },
          {
            "word": "キラー",
            "start": 95.742,
            "end": 96.192
          }
        ]
      },
      {
        "verseStart": 96.192,
        "verseEnd": 102.192,
        "words": [
          {
            "word": "L- ",
            "start": 96.192,
            "end": 96.561
          },
          {
            "word": "U- ",
            "start": 96.561,
            "end": 96.93
          },
          {
            "word": "C- ",
            "start": 96.93,
            "end": 97.305
          },
          {
            "word": "K ",
            "start": 97.305,
            "end": 99.217
          },
          {
            "word": "L- ",
            "start": 99.217,
            "end": 99.542
          },
          {
            "word": "U- ",
            "start": 99.542,
            "end": 99.907
          },
          {
            "word": "C- ",
            "start": 99.907,
            "end": 100.316
          },
          {
            "word": "K",
            "start": 100.316,
            "end": 102.192
          }
        ]
      },
      {
        "verseStart": 102.192,
        "verseEnd": 108.194,
        "words": [
          {
            "word": "L- ",
            "start": 102.192,
            "end": 102.56
          },
          {
            "word": "U- ",
            "start": 102.56,
            "end": 102.977
          },
          {
            "word": "C- ",
            "start": 102.977,
            "end": 103.347
          },
          {
            "word": "K ",
            "start": 103.347,
            "end": 105.224
          },
          {
            "word": "L- ",
            "start": 105.224,
            "end": 105.549
          },
          {
            "word": "U- ",
            "start": 105.549,
            "end": 105.916
          },
          {
            "word": "C- ",
            "start": 105.916,
            "end": 106.322
          },
          {
            "word": "K",
            "start": 106.322,
            "end": 108.194
          }
        ]
      },
      {
        "verseStart": 108.194,
        "verseEnd": 114.23,
        "words": [
          {
            "word": "どれ ",
            "start": 108.194,
            "end": 108.734
          },
          {
            "word": "だけ ",
            "start": 108.734,
            "end": 109.509
          },
          {
            "word": "追 ",
            "start": 109.509,
            "end": 109.794
          },
          {
            "word": "い ",
            "start": 109.794,
            "end": 110.655
          },
          {
            "word": "かけ ",
            "start": 110.655,
            "end": 110.778
          },
          {
            "word": "て ",
            "start": 110.778,
            "end": 110.994
          },
          {
            "word": "も ",
            "start": 110.994,
            "end": 111.28
          },
          {
            "word": "ヒント ",
            "start": 111.28,
            "end": 111.771
          },
          {
            "word": "さえ ",
            "start": 111.771,
            "end": 112.587
          },
          {
            "word": "く ",
            "start": 112.587,
            "end": 112.75
          },
          {
            "word": "れ ",
            "start": 112.75,
            "end": 113.156
          },
          {
            "word": "ない",
            "start": 113.156,
            "end": 114.23
          }
        ]
      },
      {
        "verseStart": 114.23,
        "verseEnd": 120.189,
        "words": [
          {
            "word": "お ",
            "start": 114.23,
            "end": 114.436
          },
          {
            "word": "口 ",
            "start": 114.436,
            "end": 114.885
          },
          {
            "word": "を ",
            "start": 114.885,
            "end": 115.291
          },
          {
            "word": "ギュッ ",
            "start": 115.291,
            "end": 115.616
          },
          {
            "word": "と ",
            "start": 115.616,
            "end": 115.906
          },
          {
            "word": "つぐむ ",
            "start": 115.906,
            "end": 116.11
          },
          {
            "word": "の ",
            "start": 116.11,
            "end": 116.519
          },
          {
            "word": "に ",
            "start": 116.519,
            "end": 116.847
          },
          {
            "word": "誰か ",
            "start": 116.847,
            "end": 117.582
          },
          {
            "word": "は ",
            "start": 117.582,
            "end": 118.502
          },
          {
            "word": "わ ",
            "start": 118.502,
            "end": 118.707
          },
          {
            "word": "から ",
            "start": 118.707,
            "end": 119.242
          },
          {
            "word": "ない",
            "start": 119.242,
            "end": 120.189
          }
        ]
      },
      {
        "verseStart": 120.189,
        "verseEnd": 127.182,
        "words": [
          {
            "word": "ああ ",
            "start": 120.189,
            "end": 121.02
          },
          {
            "word": "おんなじ ",
            "start": 121.02,
            "end": 122.121
          },
          {
            "word": "所 ",
            "start": 122.121,
            "end": 122.457
          },
          {
            "word": "に ",
            "start": 122.457,
            "end": 124.124
          },
          {
            "word": "傷 ",
            "start": 124.124,
            "end": 124.651
          },
          {
            "word": "を ",
            "start": 124.651,
            "end": 124.857
          },
          {
            "word": "負 ",
            "start": 124.857,
            "end": 125.304
          },
          {
            "word": "っ ",
            "start": 125.304,
            "end": 125.549
          },
          {
            "word": "た ",
            "start": 125.549,
            "end": 125.834
          },
          {
            "word": "キミ ",
            "start": 125.834,
            "end": 126.244
          },
          {
            "word": "に",
            "start": 126.244,
            "end": 127.182
          }
        ]
      },
      {
        "verseStart": 127.182,
        "verseEnd": 135.332,
        "words": [
          {
            "word": "気付 ",
            "start": 127.182,
            "end": 127.671
          },
          {
            "word": "い ",
            "start": 127.671,
            "end": 127.877
          },
          {
            "word": "て ",
            "start": 127.877,
            "end": 128.166
          },
          {
            "word": "しまう ",
            "start": 128.166,
            "end": 128.696
          },
          {
            "word": "なんて ",
            "start": 128.696,
            "end": 132.266
          },
          {
            "word": "ざわめく ",
            "start": 132.266,
            "end": 133.74
          },
          {
            "word": "心",
            "start": 133.74,
            "end": 135.332
          }
        ]
      },
      {
        "verseStart": 135.332,
        "verseEnd": 142.576,
        "words": [
          {
            "word": "空 ",
            "start": 135.332,
            "end": 136.646
          },
          {
            "word": "を ",
            "start": 136.646,
            "end": 136.81
          },
          {
            "word": "見上げる ( ",
            "start": 136.81,
            "end": 139.219
          },
          {
            "word": "きらきら ",
            "start": 139.219,
            "end": 140.864
          },
          {
            "word": "キラー)",
            "start": 140.864,
            "end": 142.576
          }
        ]
      },
      {
        "verseStart": 142.576,
        "verseEnd": 143.969,
        "words": [
          {
            "word": "(One, ",
            "start": 142.576,
            "end": 142.986
          },
          {
            "word": "two, ",
            "start": 142.986,
            "end": 143.352
          },
          {
            "word": "three, ",
            "start": 143.352,
            "end": 143.805
          },
          {
            "word": "four)",
            "start": 143.805,
            "end": 143.969
          }
        ]
      },
      {
        "verseStart": 143.969,
        "verseEnd": 146.911,
        "words": [
          {
            "word": "きらきら ",
            "start": 143.969,
            "end": 144.787
          },
          {
            "word": "キラー ",
            "start": 144.787,
            "end": 145.233
          },
          {
            "word": "ラッキー ",
            "start": 145.233,
            "end": 145.885
          },
          {
            "word": "ラッキー ",
            "start": 145.885,
            "end": 146.292
          },
          {
            "word": "ラッキー",
            "start": 146.292,
            "end": 146.911
          }
        ]
      },
      {
        "verseStart": 146.911,
        "verseEnd": 149.815,
        "words": [
          {
            "word": "未来 ",
            "start": 146.911,
            "end": 147.772
          },
          {
            "word": "は ",
            "start": 147.772,
            "end": 147.897
          },
          {
            "word": "ほら ",
            "start": 147.897,
            "end": 148.47
          },
          {
            "word": "ハッピー ",
            "start": 148.47,
            "end": 148.998
          },
          {
            "word": "ハッピー ",
            "start": 148.998,
            "end": 149.364
          },
          {
            "word": "ハッピー",
            "start": 149.364,
            "end": 149.815
          }
        ]
      },
      {
        "verseStart": 149.815,
        "verseEnd": 154.727,
        "words": [
          {
            "word": "空 ",
            "start": 149.815,
            "end": 150.427
          },
          {
            "word": "から ",
            "start": 150.427,
            "end": 150.754
          },
          {
            "word": "今 ",
            "start": 150.754,
            "end": 151.323
          },
          {
            "word": "きらきら ",
            "start": 151.323,
            "end": 151.989
          },
          {
            "word": "キラー ",
            "start": 151.989,
            "end": 152.803
          },
          {
            "word": "coming ",
            "start": 152.803,
            "end": 153.375
          },
          {
            "word": "now",
            "start": 153.375,
            "end": 154.727
          }
        ]
      },
      {
        "verseStart": 154.727,
        "verseEnd": 155.992,
        "words": [
          {
            "word": "(One, ",
            "start": 154.727,
            "end": 155.055
          },
          {
            "word": "two, ",
            "start": 155.055,
            "end": 155.423
          },
          {
            "word": "three, ",
            "start": 155.423,
            "end": 155.83
          },
          {
            "word": "four)",
            "start": 155.83,
            "end": 155.992
          }
        ]
      },
      {
        "verseStart": 155.992,
        "verseEnd": 158.891,
        "words": [
          {
            "word": "きらきら ",
            "start": 155.992,
            "end": 156.522
          },
          {
            "word": "キラー ",
            "start": 156.522,
            "end": 157.298
          },
          {
            "word": "ハッピー ",
            "start": 157.298,
            "end": 157.868
          },
          {
            "word": "ハッピー ",
            "start": 157.868,
            "end": 158.238
          },
          {
            "word": "ハッピー",
            "start": 158.238,
            "end": 158.891
          }
        ]
      },
      {
        "verseStart": 158.891,
        "verseEnd": 161.857,
        "words": [
          {
            "word": "未来 ",
            "start": 158.891,
            "end": 159.747
          },
          {
            "word": "は ",
            "start": 159.747,
            "end": 159.912
          },
          {
            "word": "ほら ",
            "start": 159.912,
            "end": 160.453
          },
          {
            "word": "ラッキー ",
            "start": 160.453,
            "end": 160.92
          },
          {
            "word": "ラッキー ",
            "start": 160.92,
            "end": 161.327
          },
          {
            "word": "ラッキー",
            "start": 161.327,
            "end": 161.857
          }
        ]
      },
      {
        "verseStart": 161.857,
        "verseEnd": 167.427,
        "words": [
          {
            "word": "きらきら ",
            "start": 161.857,
            "end": 162.84
          },
          {
            "word": "キラー ",
            "start": 162.84,
            "end": 163.369
          },
          {
            "word": "ドキドキドキ ",
            "start": 163.369,
            "end": 164.927
          },
          {
            "word": "fall ",
            "start": 164.927,
            "end": 165.374
          },
          {
            "word": "in ",
            "start": 165.374,
            "end": 165.58
          },
          {
            "word": "love",
            "start": 165.58,
            "end": 167.427
          }
        ]
      },
      {
        "verseStart": 167.427,
        "verseEnd": 173.343,
        "words": [
          {
            "word": "きらきら ",
            "start": 167.427,
            "end": 168.085
          },
          {
            "word": "キラー ( ",
            "start": 168.085,
            "end": 168.861
          },
          {
            "word": "きらきら ",
            "start": 168.861,
            "end": 169.594
          },
          {
            "word": "キラー)",
            "start": 169.594,
            "end": 173.343
          }
        ]
      },
      {
        "verseStart": 173.343,
        "verseEnd": 177.879,
        "words": [
          {
            "word": "きらきら ",
            "start": 173.343,
            "end": 174.04
          },
          {
            "word": "キラー ( ",
            "start": 174.04,
            "end": 174.817
          },
          {
            "word": "マジカルパワー)",
            "start": 174.817,
            "end": 177.879
          }
        ]
      },
      {
        "verseStart": 177.879,
        "verseEnd": 180.204,
        "words": [
          {
            "word": "かんぜん ",
            "start": 177.879,
            "end": 178.614
          },
          {
            "word": "きらきら ",
            "start": 178.614,
            "end": 179.756
          },
          {
            "word": "キラー",
            "start": 179.756,
            "end": 180.204
          }
        ]
      },
      {
        "verseStart": 180.204,
        "verseEnd": 186.191,
        "words": [
          {
            "word": "L- ",
            "start": 180.204,
            "end": 180.529
          },
          {
            "word": "U- ",
            "start": 180.529,
            "end": 180.936
          },
          {
            "word": "C- ",
            "start": 180.936,
            "end": 181.302
          },
          {
            "word": "K ",
            "start": 181.302,
            "end": 183.173
          },
          {
            "word": "L- ",
            "start": 183.173,
            "end": 183.538
          },
          {
            "word": "U- ",
            "start": 183.538,
            "end": 183.905
          },
          {
            "word": "C- ",
            "start": 183.905,
            "end": 184.275
          },
          {
            "word": "K",
            "start": 184.275,
            "end": 186.191
          }
        ]
      },
      {
        "verseStart": 186.191,
        "verseEnd": 191.953,
        "words": [
          {
            "word": "L- ",
            "start": 186.191,
            "end": 186.561
          },
          {
            "word": "U- ",
            "start": 186.561,
            "end": 186.936
          },
          {
            "word": "C- ",
            "start": 186.936,
            "end": 187.269
          },
          {
            "word": "K ",
            "start": 187.269,
            "end": 189.141
          },
          {
            "word": "L- ",
            "start": 189.141,
            "end": 189.471
          },
          {
            "word": "U- ",
            "start": 189.471,
            "end": 189.837
          },
          {
            "word": "C- ",
            "start": 189.837,
            "end": 190.201
          },
          {
            "word": "K",
            "start": 190.201,
            "end": 191.953
          }
        ]
      },
      {
        "verseStart": 191.953,
        "verseEnd": 194.891,
        "words": [
          {
            "word": "きらきら ",
            "start": 191.953,
            "end": 193.466
          },
          {
            "word": "キラー ",
            "start": 193.466,
            "end": 193.67
          },
          {
            "word": "ラッキー ",
            "start": 193.67,
            "end": 193.954
          },
          {
            "word": "ラッキー ",
            "start": 193.954,
            "end": 194.362
          },
          {
            "word": "ラッキー",
            "start": 194.362,
            "end": 194.891
          }
        ]
      },
      {
        "verseStart": 194.891,
        "verseEnd": 198.074,
        "words": [
          {
            "word": "未来 ",
            "start": 194.891,
            "end": 195.749
          },
          {
            "word": "は ",
            "start": 195.749,
            "end": 195.914
          },
          {
            "word": "ほら ",
            "start": 195.914,
            "end": 196.446
          },
          {
            "word": "ハッピー ",
            "start": 196.446,
            "end": 196.984
          },
          {
            "word": "ハッピー ",
            "start": 196.984,
            "end": 197.351
          },
          {
            "word": "ハッピー",
            "start": 197.351,
            "end": 198.074
          }
        ]
      },
      {
        "verseStart": 198.074,
        "verseEnd": 202.739,
        "words": [
          {
            "word": "空 ",
            "start": 198.074,
            "end": 198.488
          },
          {
            "word": "から ",
            "start": 198.488,
            "end": 198.853
          },
          {
            "word": "今 ",
            "start": 198.853,
            "end": 199.383
          },
          {
            "word": "きらきら ",
            "start": 199.383,
            "end": 199.911
          },
          {
            "word": "キラー ",
            "start": 199.911,
            "end": 200.807
          },
          {
            "word": "coming ",
            "start": 200.807,
            "end": 201.341
          },
          {
            "word": "now",
            "start": 201.341,
            "end": 202.739
          }
        ]
      },
      {
        "verseStart": 202.739,
        "verseEnd": 204.009,
        "words": [
          {
            "word": "(One, ",
            "start": 202.739,
            "end": 203.065
          },
          {
            "word": "two, ",
            "start": 203.065,
            "end": 203.478
          },
          {
            "word": "three, ",
            "start": 203.478,
            "end": 203.845
          },
          {
            "word": "four)",
            "start": 203.845,
            "end": 204.009
          }
        ]
      },
      {
        "verseStart": 204.009,
        "verseEnd": 206.873,
        "words": [
          {
            "word": "きらきら ",
            "start": 204.009,
            "end": 204.872
          },
          {
            "word": "キラー ",
            "start": 204.872,
            "end": 205.407
          },
          {
            "word": "ハッピー ",
            "start": 205.407,
            "end": 205.855
          },
          {
            "word": "ハッピー ",
            "start": 205.855,
            "end": 206.262
          },
          {
            "word": "ハッピー",
            "start": 206.262,
            "end": 206.873
          }
        ]
      },
      {
        "verseStart": 206.873,
        "verseEnd": 210.073,
        "words": [
          {
            "word": "未来 ",
            "start": 206.873,
            "end": 207.666
          },
          {
            "word": "は ",
            "start": 207.666,
            "end": 207.849
          },
          {
            "word": "ほら ",
            "start": 207.849,
            "end": 208.466
          },
          {
            "word": "ラッキー ",
            "start": 208.466,
            "end": 209
          },
          {
            "word": "ラッキー ",
            "start": 209,
            "end": 209.365
          },
          {
            "word": "ラッキー",
            "start": 209.365,
            "end": 210.073
          }
        ]
      },
      {
        "verseStart": 210.073,
        "verseEnd": 215.414,
        "words": [
          {
            "word": "きらきら ",
            "start": 210.073,
            "end": 210.601
          },
          {
            "word": "キラー ",
            "start": 210.601,
            "end": 211.538
          },
          {
            "word": "ドキドキドキ ",
            "start": 211.538,
            "end": 212.719
          },
          {
            "word": "fall ",
            "start": 212.719,
            "end": 213.373
          },
          {
            "word": "in ",
            "start": 213.373,
            "end": 213.494
          },
          {
            "word": "love",
            "start": 213.494,
            "end": 215.414
          }
        ]
      },
      {
        "verseStart": 215.414,
        "verseEnd": 221.201,
        "words": [
          {
            "word": "きらきら ",
            "start": 215.414,
            "end": 216.151
          },
          {
            "word": "キラー ( ",
            "start": 216.151,
            "end": 216.924
          },
          {
            "word": "きらきら ",
            "start": 216.924,
            "end": 217.621
          },
          {
            "word": "キラー)",
            "start": 217.621,
            "end": 221.201
          }
        ]
      },
      {
        "verseStart": 221.201,
        "verseEnd": 225.897,
        "words": [
          {
            "word": "きらきら ",
            "start": 221.201,
            "end": 222.018
          },
          {
            "word": "キラー ( ",
            "start": 222.018,
            "end": 222.878
          },
          {
            "word": "マジカルパワー)",
            "start": 222.878,
            "end": 225.897
          }
        ]
      },
      {
        "verseStart": 225.897,
        "verseEnd": 228.184,
        "words": [
          {
            "word": "かんぜん ",
            "start": 225.897,
            "end": 226.632
          },
          {
            "word": "きらきら ",
            "start": 226.632,
            "end": 227.69
          },
          {
            "word": "キラー",
            "start": 227.69,
            "end": 228.184
          }
        ]
      },
      {
        "verseStart": 228.184,
        "verseEnd": 234.183,
        "words": [
          {
            "word": "L- ",
            "start": 228.184,
            "end": 228.515
          },
          {
            "word": "U- ",
            "start": 228.515,
            "end": 228.882
          },
          {
            "word": "C- ",
            "start": 228.882,
            "end": 229.248
          },
          {
            "word": "K ",
            "start": 229.248,
            "end": 231.207
          },
          {
            "word": "L- ",
            "start": 231.207,
            "end": 231.533
          },
          {
            "word": "U- ",
            "start": 231.533,
            "end": 231.945
          },
          {
            "word": "C- ",
            "start": 231.945,
            "end": 232.271
          },
          {
            "word": "K",
            "start": 232.271,
            "end": 234.183
          }
        ]
      },
      {
        "verseStart": 234.183,
        "verseEnd": 240.167,
        "words": [
          {
            "word": "L- ",
            "start": 234.183,
            "end": 234.55
          },
          {
            "word": "U- ",
            "start": 234.55,
            "end": 235
          },
          {
            "word": "C- ",
            "start": 235,
            "end": 235.335
          },
          {
            "word": "K ",
            "start": 235.335,
            "end": 237.186
          },
          {
            "word": "L- ",
            "start": 237.186,
            "end": 237.596
          },
          {
            "word": "U- ",
            "start": 237.596,
            "end": 237.962
          },
          {
            "word": "C- ",
            "start": 237.962,
            "end": 238.287
          },
          {
            "word": "K",
            "start": 238.287,
            "end": 240.167
          }
        ]
      },
      {
        "verseStart": 240.167,
        "verseEnd": 246.574,
        "words": [
          {
            "word": "L- ",
            "start": 240.167,
            "end": 240.575
          },
          {
            "word": "U- ",
            "start": 240.575,
            "end": 240.945
          },
          {
            "word": "C- ",
            "start": 240.945,
            "end": 241.311
          },
          {
            "word": "K ",
            "start": 241.311,
            "end": 243.226
          },
          {
            "word": "L- ",
            "start": 243.226,
            "end": 243.552
          },
          {
            "word": "U- ",
            "start": 243.552,
            "end": 243.958
          },
          {
            "word": "C- ",
            "start": 243.958,
            "end": 244.324
          },
          {
            "word": "K",
            "start": 244.324,
            "end": 246.574
          }
        ]
      },
      {
        "verseStart": 246.574,
        "verseEnd": 252.3,
        "words": [
          {
            "word": "L- ",
            "start": 246.574,
            "end": 246.86
          },
          {
            "word": "U- ",
            "start": 246.86,
            "end": 247.148
          },
          {
            "word": "C- ",
            "start": 247.148,
            "end": 247.434
          },
          {
            "word": "K ",
            "start": 247.434,
            "end": 249.234
          },
          {
            "word": "L- ",
            "start": 249.234,
            "end": 249.56
          },
          {
            "word": "U- ",
            "start": 249.56,
            "end": 249.93
          },
          {
            "word": "C- ",
            "start": 249.93,
            "end": 250.3
          },
          {
            "word": "K",
            "start": 250.3,
            "end": 248.04
          }
        ]
      }
    ]
  },
  "MARTELIN - SÓ FÉ.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 1.695,
        "verseEnd": 2.469,
        "words": [
          {
            "word": "Fé",
            "start": 1.695,
            "end": 1.858
          },
          {
            "word": "fé",
            "start": 1.858,
            "end": 2.469
          }
        ]
      },
      {
        "verseStart": 2.469,
        "verseEnd": 6.062,
        "words": [
          {
            "word": "Hahaha",
            "start": 2.469,
            "end": 2.919
          },
          {
            "word": "aquele",
            "start": 2.919,
            "end": 3.898
          },
          {
            "word": "jeitão",
            "start": 3.898,
            "end": 6.062
          }
        ]
      },
      {
        "verseStart": 6.062,
        "verseEnd": 9.698,
        "words": [
          {
            "word": "Tropa",
            "start": 6.062,
            "end": 6.632
          },
          {
            "word": "tá",
            "start": 6.632,
            "end": 6.839
          },
          {
            "word": "na",
            "start": 6.839,
            "end": 7.166
          },
          {
            "word": "pista",
            "start": 7.166,
            "end": 7.614
          },
          {
            "word": "ainda",
            "start": 7.614,
            "end": 8.063
          },
          {
            "word": "Yeah",
            "start": 8.063,
            "end": 8.597
          },
          {
            "word": "uh",
            "start": 8.597,
            "end": 9.087
          },
          {
            "word": "yeah",
            "start": 9.087,
            "end": 9.373
          },
          {
            "word": "uh",
            "start": 9.373,
            "end": 9.698
          }
        ]
      },
      {
        "verseStart": 9.698,
        "verseEnd": 12.516,
        "words": [
          {
            "word": "Peitou",
            "start": 9.698,
            "end": 9.902
          },
          {
            "word": "o",
            "start": 9.902,
            "end": 10.066
          },
          {
            "word": "trem",
            "start": 10.066,
            "end": 10.229
          },
          {
            "word": "ficou",
            "start": 10.229,
            "end": 10.351
          },
          {
            "word": "fudido",
            "start": 10.351,
            "end": 10.761
          },
          {
            "word": "Yeah",
            "start": 10.761,
            "end": 11.09
          },
          {
            "word": "uh",
            "start": 11.09,
            "end": 11.417
          },
          {
            "word": "yeah",
            "start": 11.417,
            "end": 11.825
          },
          {
            "word": "uh",
            "start": 11.825,
            "end": 12.516
          }
        ]
      },
      {
        "verseStart": 12.516,
        "verseEnd": 13.619,
        "words": [
          {
            "word": "TrickNyck",
            "start": 12.516,
            "end": 12.68
          },
          {
            "word": "é",
            "start": 12.68,
            "end": 12.846
          },
          {
            "word": "muito",
            "start": 12.846,
            "end": 12.969
          },
          {
            "word": "jugg",
            "start": 12.969,
            "end": 13.335
          },
          {
            "word": "jugg",
            "start": 13.335,
            "end": 13.619
          }
        ]
      },
      {
        "verseStart": 13.619,
        "verseEnd": 14.026,
        "words": [
          {
            "word": "Huh",
            "start": 13.619,
            "end": 14.026
          }
        ]
      },
      {
        "verseStart": 14.026,
        "verseEnd": 15.871,
        "words": [
          {
            "word": "Ela",
            "start": 14.026,
            "end": 14.31
          },
          {
            "word": "joga",
            "start": 14.31,
            "end": 14.475
          },
          {
            "word": "meu",
            "start": 14.475,
            "end": 14.68
          },
          {
            "word": "vulgo",
            "start": 14.68,
            "end": 15.016
          },
          {
            "word": "no",
            "start": 15.016,
            "end": 15.138
          },
          {
            "word": "Google",
            "start": 15.138,
            "end": 15.871
          }
        ]
      },
      {
        "verseStart": 15.871,
        "verseEnd": 17.464,
        "words": [
          {
            "word": "A",
            "start": 15.871,
            "end": 15.994
          },
          {
            "word": "minha",
            "start": 15.994,
            "end": 16.117
          },
          {
            "word": "bag",
            "start": 16.117,
            "end": 16.443
          },
          {
            "word": "tá",
            "start": 16.443,
            "end": 16.566
          },
          {
            "word": "cheia",
            "start": 16.566,
            "end": 16.85
          },
          {
            "word": "de",
            "start": 16.85,
            "end": 16.973
          },
          {
            "word": "fumo",
            "start": 16.973,
            "end": 17.464
          }
        ]
      },
      {
        "verseStart": 17.464,
        "verseEnd": 19.178,
        "words": [
          {
            "word": "Esses",
            "start": 17.464,
            "end": 17.749
          },
          {
            "word": "polícia",
            "start": 17.749,
            "end": 18.116
          },
          {
            "word": "tão",
            "start": 18.116,
            "end": 18.279
          },
          {
            "word": "ficando",
            "start": 18.279,
            "end": 18.605
          },
          {
            "word": "puto",
            "start": 18.605,
            "end": 19.178
          }
        ]
      },
      {
        "verseStart": 19.178,
        "verseEnd": 21.183,
        "words": [
          {
            "word": "Porque",
            "start": 19.178,
            "end": 19.3
          },
          {
            "word": "faço",
            "start": 19.3,
            "end": 19.424
          },
          {
            "word": "nota",
            "start": 19.424,
            "end": 19.587
          },
          {
            "word": "e",
            "start": 19.587,
            "end": 19.874
          },
          {
            "word": "nem",
            "start": 19.874,
            "end": 20.161
          },
          {
            "word": "sou",
            "start": 20.161,
            "end": 20.288
          },
          {
            "word": "vagabundo",
            "start": 20.288,
            "end": 21.183
          }
        ]
      },
      {
        "verseStart": 21.183,
        "verseEnd": 22.249,
        "words": [
          {
            "word": "Yo",
            "start": 21.183,
            "end": 21.346
          },
          {
            "word": "não",
            "start": 21.346,
            "end": 21.468
          },
          {
            "word": "fecho",
            "start": 21.468,
            "end": 21.671
          },
          {
            "word": "com",
            "start": 21.671,
            "end": 21.875
          },
          {
            "word": "bote",
            "start": 21.875,
            "end": 22.249
          }
        ]
      },
      {
        "verseStart": 22.249,
        "verseEnd": 23.967,
        "words": [
          {
            "word": "Desde",
            "start": 22.249,
            "end": 22.535
          },
          {
            "word": "novin",
            "start": 22.535,
            "end": 22.903
          },
          {
            "word": "não",
            "start": 22.903,
            "end": 23.026
          },
          {
            "word": "gosto",
            "start": 23.026,
            "end": 23.149
          },
          {
            "word": "de",
            "start": 23.149,
            "end": 23.316
          },
          {
            "word": "X",
            "start": 23.316,
            "end": 23.479
          },
          {
            "word": "9",
            "start": 23.479,
            "end": 23.967
          }
        ]
      },
      {
        "verseStart": 23.967,
        "verseEnd": 25.693,
        "words": [
          {
            "word": "Minha",
            "start": 23.967,
            "end": 24.257
          },
          {
            "word": "humildade",
            "start": 24.257,
            "end": 24.665
          },
          {
            "word": "é",
            "start": 24.665,
            "end": 24.791
          },
          {
            "word": "o",
            "start": 24.791,
            "end": 24.995
          },
          {
            "word": "meu",
            "start": 24.995,
            "end": 25.158
          },
          {
            "word": "ponto",
            "start": 25.158,
            "end": 25.281
          },
          {
            "word": "forte",
            "start": 25.281,
            "end": 25.693
          }
        ]
      },
      {
        "verseStart": 25.693,
        "verseEnd": 28.21,
        "words": [
          {
            "word": "Na",
            "start": 25.693,
            "end": 25.86
          },
          {
            "word": "visão",
            "start": 25.86,
            "end": 26.025
          },
          {
            "word": "da",
            "start": 26.025,
            "end": 26.153
          },
          {
            "word": "área",
            "start": 26.153,
            "end": 26.318
          },
          {
            "word": "pros",
            "start": 26.318,
            "end": 26.485
          },
          {
            "word": "cria",
            "start": 26.485,
            "end": 26.651
          },
          {
            "word": "tu",
            "start": 26.651,
            "end": 26.82
          },
          {
            "word": "é",
            "start": 26.82,
            "end": 26.984
          },
          {
            "word": "loki",
            "start": 26.984,
            "end": 27.35
          },
          {
            "word": "ha",
            "start": 27.35,
            "end": 27.553
          },
          {
            "word": "ha",
            "start": 27.553,
            "end": 28.21
          }
        ]
      },
      {
        "verseStart": 28.21,
        "verseEnd": 29.144,
        "words": [
          {
            "word": "De",
            "start": 28.21,
            "end": 28.331
          },
          {
            "word": "cartão",
            "start": 28.331,
            "end": 28.615
          },
          {
            "word": "clonado",
            "start": 28.615,
            "end": 29.144
          }
        ]
      },
      {
        "verseStart": 29.144,
        "verseEnd": 30.909,
        "words": [
          {
            "word": "Meu",
            "start": 29.144,
            "end": 29.267
          },
          {
            "word": "bonde",
            "start": 29.267,
            "end": 29.434
          },
          {
            "word": "tá",
            "start": 29.434,
            "end": 29.596
          },
          {
            "word": "todo",
            "start": 29.596,
            "end": 29.883
          },
          {
            "word": "gastando",
            "start": 29.883,
            "end": 30.252
          },
          {
            "word": "na",
            "start": 30.252,
            "end": 30.419
          },
          {
            "word": "vida",
            "start": 30.419,
            "end": 30.909
          }
        ]
      },
      {
        "verseStart": 30.909,
        "verseEnd": 32.602,
        "words": [
          {
            "word": "Fumando",
            "start": 30.909,
            "end": 31.28
          },
          {
            "word": "flores",
            "start": 31.28,
            "end": 31.615
          },
          {
            "word": "vivendo",
            "start": 31.615,
            "end": 32.069
          },
          {
            "word": "conquista",
            "start": 32.069,
            "end": 32.602
          }
        ]
      },
      {
        "verseStart": 32.602,
        "verseEnd": 35.139,
        "words": [
          {
            "word": "O",
            "start": 32.602,
            "end": 32.806
          },
          {
            "word": "meu",
            "start": 32.806,
            "end": 32.969
          },
          {
            "word": "bordão",
            "start": 32.969,
            "end": 33.3
          },
          {
            "word": "é",
            "start": 33.3,
            "end": 33.424
          },
          {
            "word": "tropa",
            "start": 33.424,
            "end": 33.588
          },
          {
            "word": "tá",
            "start": 33.588,
            "end": 33.75
          },
          {
            "word": "na",
            "start": 33.75,
            "end": 33.952
          },
          {
            "word": "pista",
            "start": 33.952,
            "end": 34.399
          },
          {
            "word": "huh",
            "start": 34.399,
            "end": 35.139
          }
        ]
      },
      {
        "verseStart": 35.139,
        "verseEnd": 36.933,
        "words": [
          {
            "word": "Que",
            "start": 35.139,
            "end": 35.344
          },
          {
            "word": "aqui",
            "start": 35.344,
            "end": 35.506
          },
          {
            "word": "no",
            "start": 35.506,
            "end": 35.669
          },
          {
            "word": "Rio",
            "start": 35.669,
            "end": 35.953
          },
          {
            "word": "é",
            "start": 35.953,
            "end": 36.117
          },
          {
            "word": "escroto",
            "start": 36.117,
            "end": 36.933
          }
        ]
      },
      {
        "verseStart": 36.933,
        "verseEnd": 38.648,
        "words": [
          {
            "word": "Ter",
            "start": 36.933,
            "end": 37.056
          },
          {
            "word": "cria",
            "start": 37.056,
            "end": 37.3
          },
          {
            "word": "de",
            "start": 37.3,
            "end": 37.423
          },
          {
            "word": "cabelo",
            "start": 37.423,
            "end": 37.833
          },
          {
            "word": "roxo",
            "start": 37.833,
            "end": 38.648
          }
        ]
      },
      {
        "verseStart": 38.648,
        "verseEnd": 39.964,
        "words": [
          {
            "word": "Nós",
            "start": 38.648,
            "end": 38.77
          },
          {
            "word": "é",
            "start": 38.77,
            "end": 38.933
          },
          {
            "word": "platinado",
            "start": 38.933,
            "end": 39.138
          },
          {
            "word": "ou",
            "start": 39.138,
            "end": 39.304
          },
          {
            "word": "luzes",
            "start": 39.304,
            "end": 39.964
          }
        ]
      },
      {
        "verseStart": 39.964,
        "verseEnd": 42.178,
        "words": [
          {
            "word": "212",
            "start": 39.964,
            "end": 40.456
          },
          {
            "word": "nosso",
            "start": 40.456,
            "end": 40.831
          },
          {
            "word": "perfume",
            "start": 40.831,
            "end": 41.161
          },
          {
            "word": "otário",
            "start": 41.161,
            "end": 42.178
          }
        ]
      },
      {
        "verseStart": 42.178,
        "verseEnd": 43.941,
        "words": [
          {
            "word": "Tenho",
            "start": 42.178,
            "end": 42.422
          },
          {
            "word": "skunk",
            "start": 42.422,
            "end": 42.709
          },
          {
            "word": "grego",
            "start": 42.709,
            "end": 43.044
          },
          {
            "word": "dentro",
            "start": 43.044,
            "end": 43.247
          },
          {
            "word": "do",
            "start": 43.247,
            "end": 43.532
          },
          {
            "word": "slick",
            "start": 43.532,
            "end": 43.941
          }
        ]
      },
      {
        "verseStart": 43.941,
        "verseEnd": 45.545,
        "words": [
          {
            "word": "No",
            "start": 43.941,
            "end": 44.103
          },
          {
            "word": "cap",
            "start": 44.103,
            "end": 44.267
          },
          {
            "word": "no",
            "start": 44.267,
            "end": 44.428
          },
          {
            "word": "cap",
            "start": 44.428,
            "end": 44.715
          },
          {
            "word": "corte",
            "start": 44.715,
            "end": 44.924
          },
          {
            "word": "disfarçado",
            "start": 44.924,
            "end": 45.545
          }
        ]
      },
      {
        "verseStart": 45.545,
        "verseEnd": 47.463,
        "words": [
          {
            "word": "Que",
            "start": 45.545,
            "end": 45.713
          },
          {
            "word": "eu",
            "start": 45.713,
            "end": 46.047
          },
          {
            "word": "uso",
            "start": 46.047,
            "end": 46.213
          },
          {
            "word": "Lacoste",
            "start": 46.213,
            "end": 46.505
          },
          {
            "word": "nós",
            "start": 46.505,
            "end": 46.631
          },
          {
            "word": "é",
            "start": 46.631,
            "end": 46.838
          },
          {
            "word": "de",
            "start": 46.838,
            "end": 47.006
          },
          {
            "word": "nikiti",
            "start": 47.006,
            "end": 47.463
          }
        ]
      },
      {
        "verseStart": 47.463,
        "verseEnd": 49.181,
        "words": [
          {
            "word": "Sou",
            "start": 47.463,
            "end": 47.667
          },
          {
            "word": "chefe",
            "start": 47.667,
            "end": 47.83
          },
          {
            "word": "sou",
            "start": 47.83,
            "end": 48.033
          },
          {
            "word": "chefe",
            "start": 48.033,
            "end": 48.196
          },
          {
            "word": "sou",
            "start": 48.196,
            "end": 48.404
          },
          {
            "word": "menor",
            "start": 48.404,
            "end": 48.692
          },
          {
            "word": "bolado",
            "start": 48.692,
            "end": 49.181
          }
        ]
      },
      {
        "verseStart": 49.181,
        "verseEnd": 50.927,
        "words": [
          {
            "word": "Tenho",
            "start": 49.181,
            "end": 49.39
          },
          {
            "word": "uma",
            "start": 49.39,
            "end": 49.636
          },
          {
            "word": "amiga",
            "start": 49.636,
            "end": 49.843
          },
          {
            "word": "que",
            "start": 49.843,
            "end": 50.051
          },
          {
            "word": "é",
            "start": 50.051,
            "end": 50.465
          },
          {
            "word": "ninfomaníaca",
            "start": 50.465,
            "end": 50.927
          }
        ]
      },
      {
        "verseStart": 50.927,
        "verseEnd": 52.611,
        "words": [
          {
            "word": "Sempre",
            "start": 50.927,
            "end": 51.092
          },
          {
            "word": "me",
            "start": 51.092,
            "end": 51.302
          },
          {
            "word": "liga",
            "start": 51.302,
            "end": 51.51
          },
          {
            "word": "quando",
            "start": 51.51,
            "end": 51.756
          },
          {
            "word": "quer",
            "start": 51.756,
            "end": 51.959
          },
          {
            "word": "foder",
            "start": 51.959,
            "end": 52.611
          }
        ]
      },
      {
        "verseStart": 52.611,
        "verseEnd": 54.369,
        "words": [
          {
            "word": "Sabe",
            "start": 52.611,
            "end": 52.857
          },
          {
            "word": "que",
            "start": 52.857,
            "end": 53.061
          },
          {
            "word": "eu",
            "start": 53.061,
            "end": 53.265
          },
          {
            "word": "amo",
            "start": 53.265,
            "end": 53.51
          },
          {
            "word": "a",
            "start": 53.51,
            "end": 53.717
          },
          {
            "word": "vida",
            "start": 53.717,
            "end": 54.043
          },
          {
            "word": "bandida",
            "start": 54.043,
            "end": 54.369
          }
        ]
      },
      {
        "verseStart": 54.369,
        "verseEnd": 56.047,
        "words": [
          {
            "word": "Nós",
            "start": 54.369,
            "end": 54.572
          },
          {
            "word": "fode",
            "start": 54.572,
            "end": 54.697
          },
          {
            "word": "fumando",
            "start": 54.697,
            "end": 54.905
          },
          {
            "word": "e",
            "start": 54.905,
            "end": 55.23
          },
          {
            "word": "usando",
            "start": 55.23,
            "end": 55.433
          },
          {
            "word": "MD",
            "start": 55.433,
            "end": 56.047
          }
        ]
      },
      {
        "verseStart": 56.047,
        "verseEnd": 57.807,
        "words": [
          {
            "word": "Há",
            "start": 56.047,
            "end": 56.296
          },
          {
            "word": "muito",
            "start": 56.296,
            "end": 56.462
          },
          {
            "word": "tempo",
            "start": 56.462,
            "end": 56.666
          },
          {
            "word": "que",
            "start": 56.666,
            "end": 56.87
          },
          {
            "word": "eu",
            "start": 56.87,
            "end": 57.035
          },
          {
            "word": "não",
            "start": 57.035,
            "end": 57.238
          },
          {
            "word": "fico",
            "start": 57.238,
            "end": 57.442
          },
          {
            "word": "triste",
            "start": 57.442,
            "end": 57.807
          }
        ]
      },
      {
        "verseStart": 57.807,
        "verseEnd": 59.611,
        "words": [
          {
            "word": "Pra",
            "start": 57.807,
            "end": 57.977
          },
          {
            "word": "sair",
            "start": 57.977,
            "end": 58.184
          },
          {
            "word": "da",
            "start": 58.184,
            "end": 58.347
          },
          {
            "word": "bad",
            "start": 58.347,
            "end": 58.551
          },
          {
            "word": "eu",
            "start": 58.551,
            "end": 58.836
          },
          {
            "word": "bebo",
            "start": 58.836,
            "end": 59.04
          },
          {
            "word": "whisky",
            "start": 59.04,
            "end": 59.611
          }
        ]
      },
      {
        "verseStart": 59.611,
        "verseEnd": 60.895,
        "words": [
          {
            "word": "Corto",
            "start": 59.611,
            "end": 59.815
          },
          {
            "word": "o",
            "start": 59.815,
            "end": 60.019
          },
          {
            "word": "cabelo",
            "start": 60.019,
            "end": 60.269
          },
          {
            "word": "pro",
            "start": 60.269,
            "end": 60.478
          },
          {
            "word": "baile",
            "start": 60.478,
            "end": 60.895
          }
        ]
      },
      {
        "verseStart": 60.895,
        "verseEnd": 63.116,
        "words": [
          {
            "word": "Eu",
            "start": 60.895,
            "end": 61.103
          },
          {
            "word": "fumo",
            "start": 61.103,
            "end": 61.309
          },
          {
            "word": "paki",
            "start": 61.309,
            "end": 61.56
          },
          {
            "word": "e",
            "start": 61.56,
            "end": 61.809
          },
          {
            "word": "uso",
            "start": 61.809,
            "end": 62.017
          },
          {
            "word": "bico",
            "start": 62.017,
            "end": 62.222
          },
          {
            "word": "verde",
            "start": 62.222,
            "end": 63.116
          }
        ]
      },
      {
        "verseStart": 63.116,
        "verseEnd": 64.876,
        "words": [
          {
            "word": "Se",
            "start": 63.116,
            "end": 63.36
          },
          {
            "word": "ela",
            "start": 63.36,
            "end": 63.564
          },
          {
            "word": "quer",
            "start": 63.564,
            "end": 63.775
          },
          {
            "word": "só",
            "start": 63.775,
            "end": 64.019
          },
          {
            "word": "fé",
            "start": 64.019,
            "end": 64.223
          },
          {
            "word": "só",
            "start": 64.223,
            "end": 64.427
          },
          {
            "word": "fé",
            "start": 64.427,
            "end": 64.876
          }
        ]
      },
      {
        "verseStart": 64.876,
        "verseEnd": 66.484,
        "words": [
          {
            "word": "Se",
            "start": 64.876,
            "end": 64.997
          },
          {
            "word": "ela",
            "start": 64.997,
            "end": 65.079
          },
          {
            "word": "não",
            "start": 65.079,
            "end": 65.329
          },
          {
            "word": "quer",
            "start": 65.329,
            "end": 65.533
          },
          {
            "word": "já",
            "start": 65.533,
            "end": 65.737
          },
          {
            "word": "é",
            "start": 65.737,
            "end": 65.941
          },
          {
            "word": "já",
            "start": 65.941,
            "end": 66.191
          },
          {
            "word": "é",
            "start": 66.191,
            "end": 66.484
          }
        ]
      },
      {
        "verseStart": 66.484,
        "verseEnd": 68.152,
        "words": [
          {
            "word": "Tropa",
            "start": 66.484,
            "end": 66.768
          },
          {
            "word": "tá",
            "start": 66.768,
            "end": 66.89
          },
          {
            "word": "na",
            "start": 66.89,
            "end": 67.013
          },
          {
            "word": "pista",
            "start": 67.013,
            "end": 67.461
          },
          {
            "word": "sempre",
            "start": 67.461,
            "end": 67.705
          },
          {
            "word": "trajada",
            "start": 67.705,
            "end": 68.152
          }
        ]
      },
      {
        "verseStart": 68.152,
        "verseEnd": 70.087,
        "words": [
          {
            "word": "Marola",
            "start": 68.152,
            "end": 68.527
          },
          {
            "word": "no",
            "start": 68.527,
            "end": 68.693
          },
          {
            "word": "baile",
            "start": 68.693,
            "end": 69.067
          },
          {
            "word": "de",
            "start": 69.067,
            "end": 69.312
          },
          {
            "word": "XRE",
            "start": 69.312,
            "end": 70.087
          }
        ]
      },
      {
        "verseStart": 70.087,
        "verseEnd": 71.767,
        "words": [
          {
            "word": "Tem",
            "start": 70.087,
            "end": 70.209
          },
          {
            "word": "whisky",
            "start": 70.209,
            "end": 70.417
          },
          {
            "word": "Buchanan's",
            "start": 70.417,
            "end": 70.743
          },
          {
            "word": "pros",
            "start": 70.743,
            "end": 70.988
          },
          {
            "word": "cria",
            "start": 70.988,
            "end": 71.237
          },
          {
            "word": "do",
            "start": 71.237,
            "end": 71.359
          },
          {
            "word": "morro",
            "start": 71.359,
            "end": 71.767
          }
        ]
      },
      {
        "verseStart": 71.767,
        "verseEnd": 73.564,
        "words": [
          {
            "word": "Garrafa",
            "start": 71.767,
            "end": 71.971
          },
          {
            "word": "verde",
            "start": 71.971,
            "end": 72.219
          },
          {
            "word": "e",
            "start": 72.219,
            "end": 72.504
          },
          {
            "word": "o",
            "start": 72.504,
            "end": 72.747
          },
          {
            "word": "gelo",
            "start": 72.747,
            "end": 72.91
          },
          {
            "word": "de",
            "start": 72.91,
            "end": 73.115
          },
          {
            "word": "coco",
            "start": 73.115,
            "end": 73.564
          }
        ]
      },
      {
        "verseStart": 73.564,
        "verseEnd": 75.243,
        "words": [
          {
            "word": "Nós",
            "start": 73.564,
            "end": 73.848
          },
          {
            "word": "marola",
            "start": 73.848,
            "end": 74.174
          },
          {
            "word": "quando",
            "start": 74.174,
            "end": 74.341
          },
          {
            "word": "nós",
            "start": 74.341,
            "end": 74.503
          },
          {
            "word": "vai",
            "start": 74.503,
            "end": 74.666
          },
          {
            "word": "no",
            "start": 74.666,
            "end": 74.831
          },
          {
            "word": "shopping",
            "start": 74.831,
            "end": 75.243
          }
        ]
      },
      {
        "verseStart": 75.243,
        "verseEnd": 77.076,
        "words": [
          {
            "word": "Na",
            "start": 75.243,
            "end": 75.409
          },
          {
            "word": "visão",
            "start": 75.409,
            "end": 75.573
          },
          {
            "word": "da",
            "start": 75.573,
            "end": 75.741
          },
          {
            "word": "Nike",
            "start": 75.741,
            "end": 75.951
          },
          {
            "word": "ou",
            "start": 75.951,
            "end": 76.118
          },
          {
            "word": "traje",
            "start": 76.118,
            "end": 76.285
          },
          {
            "word": "da",
            "start": 76.285,
            "end": 76.543
          },
          {
            "word": "Lacoste",
            "start": 76.543,
            "end": 77.076
          }
        ]
      },
      {
        "verseStart": 77.076,
        "verseEnd": 78.774,
        "words": [
          {
            "word": "Se",
            "start": 77.076,
            "end": 77.286
          },
          {
            "word": "ela",
            "start": 77.286,
            "end": 77.541
          },
          {
            "word": "quer",
            "start": 77.541,
            "end": 77.745
          },
          {
            "word": "só",
            "start": 77.745,
            "end": 77.953
          },
          {
            "word": "fé",
            "start": 77.953,
            "end": 78.157
          },
          {
            "word": "só",
            "start": 78.157,
            "end": 78.367
          },
          {
            "word": "fé",
            "start": 78.367,
            "end": 78.774
          }
        ]
      },
      {
        "verseStart": 78.774,
        "verseEnd": 80.584,
        "words": [
          {
            "word": "Se",
            "start": 78.774,
            "end": 78.936
          },
          {
            "word": "ela",
            "start": 78.936,
            "end": 79.018
          },
          {
            "word": "não",
            "start": 79.018,
            "end": 79.222
          },
          {
            "word": "quer",
            "start": 79.222,
            "end": 79.467
          },
          {
            "word": "já",
            "start": 79.467,
            "end": 79.714
          },
          {
            "word": "é",
            "start": 79.714,
            "end": 79.88
          },
          {
            "word": "já",
            "start": 79.88,
            "end": 80.128
          },
          {
            "word": "é",
            "start": 80.128,
            "end": 80.584
          }
        ]
      },
      {
        "verseStart": 80.584,
        "verseEnd": 82.671,
        "words": [
          {
            "word": "Yeah",
            "start": 80.584,
            "end": 81.443
          },
          {
            "word": "yeah",
            "start": 81.443,
            "end": 81.855
          },
          {
            "word": "yeah",
            "start": 81.855,
            "end": 82.671
          }
        ]
      },
      {
        "verseStart": 82.671,
        "verseEnd": 84.044,
        "words": [
          {
            "word": "Uh",
            "start": 82.671,
            "end": 82.875
          },
          {
            "word": "só",
            "start": 82.875,
            "end": 83.123
          },
          {
            "word": "fé",
            "start": 83.123,
            "end": 83.333
          },
          {
            "word": "só",
            "start": 83.333,
            "end": 83.593
          },
          {
            "word": "fé",
            "start": 83.593,
            "end": 84.044
          }
        ]
      },
      {
        "verseStart": 84.044,
        "verseEnd": 85.712,
        "words": [
          {
            "word": "Se",
            "start": 84.044,
            "end": 84.209
          },
          {
            "word": "ela",
            "start": 84.209,
            "end": 84.293
          },
          {
            "word": "quer",
            "start": 84.293,
            "end": 84.502
          },
          {
            "word": "só",
            "start": 84.502,
            "end": 84.831
          },
          {
            "word": "fé",
            "start": 84.831,
            "end": 85.044
          },
          {
            "word": "só",
            "start": 85.044,
            "end": 85.336
          },
          {
            "word": "fé",
            "start": 85.336,
            "end": 85.712
          }
        ]
      },
      {
        "verseStart": 85.712,
        "verseEnd": 87.372,
        "words": [
          {
            "word": "Se",
            "start": 85.712,
            "end": 85.836
          },
          {
            "word": "ela",
            "start": 85.836,
            "end": 85.961
          },
          {
            "word": "não",
            "start": 85.961,
            "end": 86.21
          },
          {
            "word": "quer",
            "start": 86.21,
            "end": 86.419
          },
          {
            "word": "já",
            "start": 86.419,
            "end": 86.67
          },
          {
            "word": "é",
            "start": 86.67,
            "end": 86.837
          },
          {
            "word": "já",
            "start": 86.837,
            "end": 87.087
          },
          {
            "word": "é",
            "start": 87.087,
            "end": 87.372
          }
        ]
      },
      {
        "verseStart": 87.372,
        "verseEnd": 89.01,
        "words": [
          {
            "word": "Tropa",
            "start": 87.372,
            "end": 87.66
          },
          {
            "word": "tá",
            "start": 87.66,
            "end": 87.783
          },
          {
            "word": "na",
            "start": 87.783,
            "end": 87.906
          },
          {
            "word": "pista",
            "start": 87.906,
            "end": 88.316
          },
          {
            "word": "sempre",
            "start": 88.316,
            "end": 88.644
          },
          {
            "word": "trajada",
            "start": 88.644,
            "end": 89.01
          }
        ]
      },
      {
        "verseStart": 89.01,
        "verseEnd": 90.854,
        "words": [
          {
            "word": "Marola",
            "start": 89.01,
            "end": 89.466
          },
          {
            "word": "no",
            "start": 89.466,
            "end": 89.632
          },
          {
            "word": "baile",
            "start": 89.632,
            "end": 89.917
          },
          {
            "word": "de",
            "start": 89.917,
            "end": 90.079
          },
          {
            "word": "XRE",
            "start": 90.079,
            "end": 90.854
          }
        ]
      },
      {
        "verseStart": 90.854,
        "verseEnd": 92.611,
        "words": [
          {
            "word": "Foda",
            "start": 90.854,
            "end": 91.058
          },
          {
            "word": "se",
            "start": 91.058,
            "end": 91.222
          },
          {
            "word": "a",
            "start": 91.222,
            "end": 91.428
          },
          {
            "word": "Bape",
            "start": 91.428,
            "end": 91.631
          },
          {
            "word": "tô",
            "start": 91.631,
            "end": 91.835
          },
          {
            "word": "de",
            "start": 91.835,
            "end": 92.079
          },
          {
            "word": "Cyclone",
            "start": 92.079,
            "end": 92.611
          }
        ]
      },
      {
        "verseStart": 92.611,
        "verseEnd": 94.416,
        "words": [
          {
            "word": "Ela",
            "start": 92.611,
            "end": 92.776
          },
          {
            "word": "sabe",
            "start": 92.776,
            "end": 92.903
          },
          {
            "word": "que",
            "start": 92.903,
            "end": 93.069
          },
          {
            "word": "eu",
            "start": 93.069,
            "end": 93.231
          },
          {
            "word": "não",
            "start": 93.231,
            "end": 93.437
          },
          {
            "word": "sou",
            "start": 93.437,
            "end": 93.64
          },
          {
            "word": "de",
            "start": 93.64,
            "end": 93.885
          },
          {
            "word": "bobeira",
            "start": 93.885,
            "end": 94.416
          }
        ]
      },
      {
        "verseStart": 94.416,
        "verseEnd": 95.726,
        "words": [
          {
            "word": "No",
            "start": 94.416,
            "end": 94.619
          },
          {
            "word": "slick",
            "start": 94.619,
            "end": 94.865
          },
          {
            "word": "tem",
            "start": 94.865,
            "end": 95.194
          },
          {
            "word": "ice",
            "start": 95.194,
            "end": 95.726
          }
        ]
      },
      {
        "verseStart": 95.726,
        "verseEnd": 97.886,
        "words": [
          {
            "word": "Até",
            "start": 95.726,
            "end": 95.971
          },
          {
            "word": "de",
            "start": 95.971,
            "end": 96.216
          },
          {
            "word": "chefe",
            "start": 96.216,
            "end": 96.42
          },
          {
            "word": "só",
            "start": 96.42,
            "end": 96.624
          },
          {
            "word": "coloquei",
            "start": 96.624,
            "end": 97.071
          },
          {
            "word": "molha",
            "start": 97.071,
            "end": 97.275
          },
          {
            "word": "ceda",
            "start": 97.275,
            "end": 97.886
          }
        ]
      },
      {
        "verseStart": 97.886,
        "verseEnd": 99.606,
        "words": [
          {
            "word": "De",
            "start": 97.886,
            "end": 98.131
          },
          {
            "word": "Lacoste",
            "start": 98.131,
            "end": 98.334
          },
          {
            "word": "de",
            "start": 98.334,
            "end": 98.869
          },
          {
            "word": "Lacoste",
            "start": 98.869,
            "end": 99.606
          }
        ]
      },
      {
        "verseStart": 99.606,
        "verseEnd": 101.432,
        "words": [
          {
            "word": "De",
            "start": 99.606,
            "end": 99.77
          },
          {
            "word": "Lacoste",
            "start": 99.77,
            "end": 100.517
          },
          {
            "word": "de",
            "start": 100.517,
            "end": 100.639
          },
          {
            "word": "La",
            "start": 100.639,
            "end": 100.766
          },
          {
            "word": "la",
            "start": 100.766,
            "end": 101.432
          }
        ]
      },
      {
        "verseStart": 101.432,
        "verseEnd": 103.109,
        "words": [
          {
            "word": "De",
            "start": 101.432,
            "end": 101.595
          },
          {
            "word": "Lacoste",
            "start": 101.595,
            "end": 102.253
          },
          {
            "word": "de",
            "start": 102.253,
            "end": 102.417
          },
          {
            "word": "Lacoste",
            "start": 102.417,
            "end": 103.109
          }
        ]
      },
      {
        "verseStart": 103.109,
        "verseEnd": 104.795,
        "words": [
          {
            "word": "De",
            "start": 103.109,
            "end": 103.314
          },
          {
            "word": "Lacoste",
            "start": 103.314,
            "end": 103.978
          },
          {
            "word": "de",
            "start": 103.978,
            "end": 104.14
          },
          {
            "word": "La",
            "start": 104.14,
            "end": 104.267
          },
          {
            "word": "la",
            "start": 104.267,
            "end": 104.795
          }
        ]
      },
      {
        "verseStart": 104.795,
        "verseEnd": 106.607,
        "words": [
          {
            "word": "Gostou",
            "start": 104.795,
            "end": 104.999
          },
          {
            "word": "do",
            "start": 104.999,
            "end": 105.166
          },
          {
            "word": "meu",
            "start": 105.166,
            "end": 105.37
          },
          {
            "word": "Air",
            "start": 105.37,
            "end": 105.537
          },
          {
            "word": "Max",
            "start": 105.537,
            "end": 105.866
          },
          {
            "word": "97",
            "start": 105.866,
            "end": 106.607
          }
        ]
      },
      {
        "verseStart": 106.607,
        "verseEnd": 108.347,
        "words": [
          {
            "word": "Tô",
            "start": 106.607,
            "end": 106.729
          },
          {
            "word": "virando",
            "start": 106.729,
            "end": 107.191
          },
          {
            "word": "chefe",
            "start": 107.191,
            "end": 107.648
          },
          {
            "word": "labe",
            "start": 107.648,
            "end": 108.347
          }
        ]
      },
      {
        "verseStart": 108.347,
        "verseEnd": 110.034,
        "words": [
          {
            "word": "Na",
            "start": 108.347,
            "end": 108.51
          },
          {
            "word": "praia",
            "start": 108.51,
            "end": 108.672
          },
          {
            "word": "da",
            "start": 108.672,
            "end": 108.795
          },
          {
            "word": "Barra",
            "start": 108.795,
            "end": 109.172
          },
          {
            "word": "de",
            "start": 109.172,
            "end": 109.458
          },
          {
            "word": "Juliet",
            "start": 109.458,
            "end": 110.034
          }
        ]
      },
      {
        "verseStart": 110.034,
        "verseEnd": 111.882,
        "words": [
          {
            "word": "Fumando",
            "start": 110.034,
            "end": 110.653
          },
          {
            "word": "paki",
            "start": 110.653,
            "end": 111.109
          },
          {
            "word": "com",
            "start": 111.109,
            "end": 111.231
          },
          {
            "word": "a",
            "start": 111.231,
            "end": 111.353
          },
          {
            "word": "lady",
            "start": 111.353,
            "end": 111.882
          }
        ]
      },
      {
        "verseStart": 111.882,
        "verseEnd": 113.554,
        "words": [
          {
            "word": "De",
            "start": 111.882,
            "end": 112.086
          },
          {
            "word": "Lacoste",
            "start": 112.086,
            "end": 112.699
          },
          {
            "word": "de",
            "start": 112.699,
            "end": 112.821
          },
          {
            "word": "Lacoste",
            "start": 112.821,
            "end": 113.554
          }
        ]
      },
      {
        "verseStart": 113.554,
        "verseEnd": 115.323,
        "words": [
          {
            "word": "De",
            "start": 113.554,
            "end": 113.717
          },
          {
            "word": "Lacoste",
            "start": 113.717,
            "end": 114.45
          },
          {
            "word": "de",
            "start": 114.45,
            "end": 114.572
          },
          {
            "word": "La",
            "start": 114.572,
            "end": 114.737
          },
          {
            "word": "la",
            "start": 114.737,
            "end": 115.323
          }
        ]
      },
      {
        "verseStart": 115.323,
        "verseEnd": 117.072,
        "words": [
          {
            "word": "De",
            "start": 115.323,
            "end": 115.452
          },
          {
            "word": "Lacoste",
            "start": 115.452,
            "end": 116.202
          },
          {
            "word": "de",
            "start": 116.202,
            "end": 116.324
          },
          {
            "word": "Lacoste",
            "start": 116.324,
            "end": 117.072
          }
        ]
      },
      {
        "verseStart": 117.072,
        "verseEnd": 118.751,
        "words": [
          {
            "word": "De",
            "start": 117.072,
            "end": 117.237
          },
          {
            "word": "Lacoste",
            "start": 117.237,
            "end": 117.358
          },
          {
            "word": "de",
            "start": 117.358,
            "end": 117.85
          },
          {
            "word": "La",
            "start": 117.85,
            "end": 118.099
          },
          {
            "word": "la",
            "start": 118.099,
            "end": 118.751
          }
        ]
      },
      {
        "verseStart": 118.751,
        "verseEnd": 120.559,
        "words": [
          {
            "word": "Se",
            "start": 118.751,
            "end": 118.997
          },
          {
            "word": "ela",
            "start": 118.997,
            "end": 119.245
          },
          {
            "word": "quer",
            "start": 119.245,
            "end": 119.494
          },
          {
            "word": "só",
            "start": 119.494,
            "end": 119.698
          },
          {
            "word": "fé",
            "start": 119.698,
            "end": 119.903
          },
          {
            "word": "só",
            "start": 119.903,
            "end": 120.108
          },
          {
            "word": "fé",
            "start": 120.108,
            "end": 120.559
          }
        ]
      },
      {
        "verseStart": 120.559,
        "verseEnd": 122.906,
        "words": [
          {
            "word": "Se",
            "start": 120.559,
            "end": 120.681
          },
          {
            "word": "ela",
            "start": 120.681,
            "end": 120.762
          },
          {
            "word": "não",
            "start": 120.762,
            "end": 121.007
          },
          {
            "word": "quer",
            "start": 121.007,
            "end": 121.252
          },
          {
            "word": "já",
            "start": 121.252,
            "end": 121.419
          },
          {
            "word": "é",
            "start": 121.419,
            "end": 121.626
          },
          {
            "word": "já",
            "start": 121.626,
            "end": 121.83
          },
          {
            "word": "é",
            "start": 121.83,
            "end": 122.906
          }
        ]
      },
      {
        "verseStart": 122.906,
        "verseEnd": 125.758,
        "words": [
          {
            "word": "Yeah",
            "start": 122.906,
            "end": 123.109
          },
          {
            "word": "yeah",
            "start": 123.109,
            "end": 123.314
          },
          {
            "word": "yeah",
            "start": 123.314,
            "end": 125.758
          }
        ]
      },
      {
        "verseStart": 125.758,
        "verseEnd": 127.458,
        "words": [
          {
            "word": "Se",
            "start": 125.758,
            "end": 125.963
          },
          {
            "word": "ela",
            "start": 125.963,
            "end": 126.21
          },
          {
            "word": "quer",
            "start": 126.21,
            "end": 126.418
          },
          {
            "word": "só",
            "start": 126.418,
            "end": 126.629
          },
          {
            "word": "fé",
            "start": 126.629,
            "end": 126.876
          },
          {
            "word": "só",
            "start": 126.876,
            "end": 127.082
          },
          {
            "word": "fé",
            "start": 127.082,
            "end": 127.458
          }
        ]
      },
      {
        "verseStart": 127.458,
        "verseEnd": 129.102,
        "words": [
          {
            "word": "Se",
            "start": 127.458,
            "end": 127.584
          },
          {
            "word": "ela",
            "start": 127.584,
            "end": 127.709
          },
          {
            "word": "não",
            "start": 127.709,
            "end": 127.912
          },
          {
            "word": "quer",
            "start": 127.912,
            "end": 128.117
          },
          {
            "word": "já",
            "start": 128.117,
            "end": 128.362
          },
          {
            "word": "é",
            "start": 128.362,
            "end": 128.565
          },
          {
            "word": "já",
            "start": 128.565,
            "end": 128.772
          },
          {
            "word": "é",
            "start": 128.772,
            "end": 129.102
          }
        ]
      },
      {
        "verseStart": 129.102,
        "verseEnd": 130.799,
        "words": [
          {
            "word": "Tropa",
            "start": 129.102,
            "end": 129.398
          },
          {
            "word": "tá",
            "start": 129.398,
            "end": 129.525
          },
          {
            "word": "na",
            "start": 129.525,
            "end": 129.648
          },
          {
            "word": "pista",
            "start": 129.648,
            "end": 130.063
          },
          {
            "word": "sempre",
            "start": 130.063,
            "end": 130.348
          },
          {
            "word": "trajada",
            "start": 130.348,
            "end": 130.799
          }
        ]
      },
      {
        "verseStart": 130.799,
        "verseEnd": 132.603,
        "words": [
          {
            "word": "Marola",
            "start": 130.799,
            "end": 130.963
          },
          {
            "word": "no",
            "start": 130.963,
            "end": 131.256
          },
          {
            "word": "baile",
            "start": 131.256,
            "end": 131.668
          },
          {
            "word": "de",
            "start": 131.668,
            "end": 131.79
          },
          {
            "word": "XRE",
            "start": 131.79,
            "end": 132.603
          }
        ]
      },
      {
        "verseStart": 132.603,
        "verseEnd": 134.08,
        "words": [
          {
            "word": "Peitou",
            "start": 132.603,
            "end": 132.888
          },
          {
            "word": "o",
            "start": 132.888,
            "end": 133.134
          },
          {
            "word": "trem",
            "start": 133.134,
            "end": 133.423
          },
          {
            "word": "ficou",
            "start": 133.423,
            "end": 133.586
          },
          {
            "word": "fudido",
            "start": 133.586,
            "end": 134.08
          }
        ]
      },
      {
        "verseStart": 134.08,
        "verseEnd": 138.605,
        "words": [
          {
            "word": "Aquele",
            "start": 134.08,
            "end": 134.202
          },
          {
            "word": "jeitão",
            "start": 134.202,
            "end": 135.016
          },
          {
            "word": "Muita",
            "start": 135.016,
            "end": 135.18
          },
          {
            "word": "fé",
            "start": 135.18,
            "end": 138.605
          }
        ]
      },
      {
        "verseStart": 138.605,
        "verseEnd": 140.767,
        "words": [
          {
            "word": "Só",
            "start": 138.605,
            "end": 138.767
          },
          {
            "word": "fé",
            "start": 138.767,
            "end": 0
          }
        ]
      }
    ]
  }
};
