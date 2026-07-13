export interface Word {
  word: string;
  start: number;
  end: number;
}

export interface Verse {
  verseStart: number;
  verseEnd: number;
  speaker?: string;
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
    ],
    "subtitle": "🇬🇧 ● but in the meantime, check out this banger ● 🇬🇧"
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
    ],
    "subtitle": "🇷🇺 ● но тем временем, зацени этот разъёб ● 🇷🇺"
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
    ],
    "subtitle": "🇯🇵 ● その間に、この神曲でも聴いときな ● 🇯🇵"
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
    ],
    "subtitle": "🇧🇷 ● mas enquanto isso, pega a visão dessa pedrada ● 🇧🇷"
  },
  "Jessi (제시) - 눈누난나 (NUNU NANA.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 3.55,
        "verseEnd": 8.085,
        "words": [
          {
            "word": "I'm",
            "start": 3.55,
            "end": 3.796
          },
          {
            "word": "trying",
            "start": 3.796,
            "end": 4.201
          },
          {
            "word": "to",
            "start": 4.201,
            "end": 4.446
          },
          {
            "word": "give",
            "start": 4.446,
            "end": 4.69
          },
          {
            "word": "you",
            "start": 4.69,
            "end": 4.976
          },
          {
            "word": "something",
            "start": 4.976,
            "end": 5.465
          },
          {
            "word": "more",
            "start": 5.465,
            "end": 6.286
          },
          {
            "word": "I'm",
            "start": 6.286,
            "end": 6.489
          },
          {
            "word": "trying",
            "start": 6.489,
            "end": 6.734
          },
          {
            "word": "to",
            "start": 6.734,
            "end": 6.98
          },
          {
            "word": "give",
            "start": 6.98,
            "end": 7.264
          },
          {
            "word": "you",
            "start": 7.264,
            "end": 7.508
          },
          {
            "word": "something",
            "start": 7.508,
            "end": 7.8
          },
          {
            "word": "more",
            "start": 7.8,
            "end": 8.085
          }
        ]
      },
      {
        "verseStart": 8.085,
        "verseEnd": 10.976,
        "words": [
          {
            "word": "So",
            "start": 8.085,
            "end": 8.37
          },
          {
            "word": "come",
            "start": 8.37,
            "end": 8.653
          },
          {
            "word": "with",
            "start": 8.653,
            "end": 8.937
          },
          {
            "word": "me",
            "start": 8.937,
            "end": 9.224
          },
          {
            "word": "and",
            "start": 9.224,
            "end": 9.509
          },
          {
            "word": "fly",
            "start": 9.509,
            "end": 9.917
          },
          {
            "word": "away",
            "start": 9.917,
            "end": 10.976
          }
        ]
      },
      {
        "verseStart": 10.976,
        "verseEnd": 17.46,
        "words": [
          {
            "word": "Away",
            "start": 10.976,
            "end": 12.074
          },
          {
            "word": "away",
            "start": 12.074,
            "end": 13.214
          },
          {
            "word": "away",
            "start": 13.214,
            "end": 14.392
          },
          {
            "word": "away",
            "start": 14.392,
            "end": 17.46
          }
        ]
      },
      {
        "verseStart": 17.46,
        "verseEnd": 22.884,
        "words": [
          {
            "word": "그래서",
            "start": 17.46,
            "end": 18.115
          },
          {
            "word": "난",
            "start": 18.115,
            "end": 18.481
          },
          {
            "word": "눈누난나",
            "start": 18.481,
            "end": 22.884
          }
        ]
      },
      {
        "verseStart": 22.884,
        "verseEnd": 27.106,
        "words": [
          {
            "word": "눈누누난나",
            "start": 22.884,
            "end": 27.106
          }
        ]
      },
      {
        "verseStart": 27.106,
        "verseEnd": 29.503,
        "words": [
          {
            "word": "Put",
            "start": 27.106,
            "end": 27.351
          },
          {
            "word": "em",
            "start": 27.351,
            "end": 27.431
          },
          {
            "word": "up",
            "start": 27.431,
            "end": 27.64
          },
          {
            "word": "in",
            "start": 27.64,
            "end": 27.805
          },
          {
            "word": "the",
            "start": 27.805,
            "end": 28.09
          },
          {
            "word": "air",
            "start": 28.09,
            "end": 29.503
          }
        ]
      },
      {
        "verseStart": 29.503,
        "verseEnd": 30.853,
        "words": [
          {
            "word": "누나",
            "start": 29.503,
            "end": 29.828
          },
          {
            "word": "나나",
            "start": 29.828,
            "end": 30.853
          }
        ]
      },
      {
        "verseStart": 30.853,
        "verseEnd": 33.752,
        "words": [
          {
            "word": "Like",
            "start": 30.853,
            "end": 31.137
          },
          {
            "word": "this",
            "start": 31.137,
            "end": 31.465
          },
          {
            "word": "oh",
            "start": 31.465,
            "end": 31.753
          },
          {
            "word": "나나나",
            "start": 31.753,
            "end": 33.752
          }
        ]
      },
      {
        "verseStart": 33.752,
        "verseEnd": 35.482,
        "words": [
          {
            "word": "누나",
            "start": 33.752,
            "end": 34.37
          },
          {
            "word": "누나",
            "start": 34.37,
            "end": 35.482
          }
        ]
      },
      {
        "verseStart": 35.482,
        "verseEnd": 36.996,
        "words": [
          {
            "word": "에에에에이",
            "start": 35.482,
            "end": 36.996
          }
        ]
      },
      {
        "verseStart": 36.996,
        "verseEnd": 38.958,
        "words": [
          {
            "word": "나를",
            "start": 36.996,
            "end": 37.287
          },
          {
            "word": "지금",
            "start": 37.287,
            "end": 37.574
          },
          {
            "word": "원해",
            "start": 37.574,
            "end": 38.958
          }
        ]
      },
      {
        "verseStart": 38.958,
        "verseEnd": 40.166,
        "words": [
          {
            "word": "Gimme",
            "start": 38.958,
            "end": 39.249
          },
          {
            "word": "more",
            "start": 39.249,
            "end": 39.582
          },
          {
            "word": "gimme",
            "start": 39.582,
            "end": 39.876
          },
          {
            "word": "more",
            "start": 39.876,
            "end": 40.166
          }
        ]
      },
      {
        "verseStart": 40.166,
        "verseEnd": 41.331,
        "words": [
          {
            "word": "Gimme",
            "start": 40.166,
            "end": 40.458
          },
          {
            "word": "more",
            "start": 40.458,
            "end": 40.705
          },
          {
            "word": "gimme",
            "start": 40.705,
            "end": 41.039
          },
          {
            "word": "more",
            "start": 41.039,
            "end": 41.331
          }
        ]
      },
      {
        "verseStart": 41.331,
        "verseEnd": 43.533,
        "words": [
          {
            "word": "Baby",
            "start": 41.331,
            "end": 41.583
          },
          {
            "word": "baby",
            "start": 41.583,
            "end": 41.875
          },
          {
            "word": "yeah",
            "start": 41.875,
            "end": 42.041
          },
          {
            "word": "I",
            "start": 42.041,
            "end": 42.168
          },
          {
            "word": "want",
            "start": 42.168,
            "end": 42.416
          },
          {
            "word": "it",
            "start": 42.416,
            "end": 43.533
          }
        ]
      },
      {
        "verseStart": 43.533,
        "verseEnd": 46.127,
        "words": [
          {
            "word": "이리로",
            "start": 43.533,
            "end": 44.106
          },
          {
            "word": "이리로",
            "start": 44.106,
            "end": 44.717
          },
          {
            "word": "이리로",
            "start": 44.717,
            "end": 45.338
          },
          {
            "word": "이리",
            "start": 45.338,
            "end": 45.588
          },
          {
            "word": "온",
            "start": 45.588,
            "end": 46.127
          }
        ]
      },
      {
        "verseStart": 46.127,
        "verseEnd": 47.798,
        "words": [
          {
            "word": "유난",
            "start": 46.127,
            "end": 46.413
          },
          {
            "word": "떨지",
            "start": 46.413,
            "end": 46.698
          },
          {
            "word": "마",
            "start": 46.698,
            "end": 47.188
          },
          {
            "word": "그만",
            "start": 47.188,
            "end": 47.798
          }
        ]
      },
      {
        "verseStart": 47.798,
        "verseEnd": 50.147,
        "words": [
          {
            "word": "원한다면",
            "start": 47.798,
            "end": 48.507
          },
          {
            "word": "솔직해져",
            "start": 48.507,
            "end": 49.001
          },
          {
            "word": "봐",
            "start": 49.001,
            "end": 49.491
          },
          {
            "word": "too",
            "start": 49.491,
            "end": 49.614
          },
          {
            "word": "much",
            "start": 49.614,
            "end": 50.147
          }
        ]
      },
      {
        "verseStart": 50.147,
        "verseEnd": 52.347,
        "words": [
          {
            "word": "우",
            "start": 50.147,
            "end": 50.72
          },
          {
            "word": "baby",
            "start": 50.72,
            "end": 50.964
          },
          {
            "word": "와서",
            "start": 50.964,
            "end": 51.29
          },
          {
            "word": "가져가",
            "start": 51.29,
            "end": 52.347
          }
        ]
      },
      {
        "verseStart": 52.347,
        "verseEnd": 53.986,
        "words": [
          {
            "word": "I",
            "start": 52.347,
            "end": 52.593
          },
          {
            "word": "could",
            "start": 52.593,
            "end": 52.838
          },
          {
            "word": "give",
            "start": 52.838,
            "end": 53.001
          },
          {
            "word": "you",
            "start": 53.001,
            "end": 53.204
          },
          {
            "word": "everything",
            "start": 53.204,
            "end": 53.571
          },
          {
            "word": "anything",
            "start": 53.571,
            "end": 53.986
          }
        ]
      },
      {
        "verseStart": 53.986,
        "verseEnd": 55.846,
        "words": [
          {
            "word": "Baby",
            "start": 53.986,
            "end": 54.316
          },
          {
            "word": "can",
            "start": 54.316,
            "end": 54.562
          },
          {
            "word": "you",
            "start": 54.562,
            "end": 54.847
          },
          {
            "word": "handle",
            "start": 54.847,
            "end": 55.177
          },
          {
            "word": "it",
            "start": 55.177,
            "end": 55.846
          }
        ]
      },
      {
        "verseStart": 55.846,
        "verseEnd": 60.211,
        "words": [
          {
            "word": "뭐라",
            "start": 55.846,
            "end": 56.666
          },
          {
            "word": "하던",
            "start": 56.666,
            "end": 57.727
          },
          {
            "word": "still",
            "start": 57.727,
            "end": 57.89
          },
          {
            "word": "don't",
            "start": 57.89,
            "end": 58.058
          },
          {
            "word": "give",
            "start": 58.058,
            "end": 58.435
          },
          {
            "word": "a",
            "start": 58.435,
            "end": 58.808
          },
          {
            "word": "what",
            "start": 58.808,
            "end": 60.211
          }
        ]
      },
      {
        "verseStart": 60.211,
        "verseEnd": 64.98,
        "words": [
          {
            "word": "맘대로",
            "start": 60.211,
            "end": 62.584
          },
          {
            "word": "계속",
            "start": 62.584,
            "end": 63.035
          },
          {
            "word": "떠들어",
            "start": 63.035,
            "end": 63.525
          },
          {
            "word": "they",
            "start": 63.525,
            "end": 63.814
          },
          {
            "word": "talk",
            "start": 63.814,
            "end": 64.064
          },
          {
            "word": "about",
            "start": 64.064,
            "end": 64.315
          },
          {
            "word": "me",
            "start": 64.315,
            "end": 64.98
          }
        ]
      },
      {
        "verseStart": 64.98,
        "verseEnd": 72.253,
        "words": [
          {
            "word": "뭐라노",
            "start": 64.98,
            "end": 67.264
          },
          {
            "word": "뭐라카노",
            "start": 67.264,
            "end": 69.176
          },
          {
            "word": "F",
            "start": 69.176,
            "end": 69.463
          },
          {
            "word": "U",
            "start": 69.463,
            "end": 72.253
          }
        ]
      },
      {
        "verseStart": 72.253,
        "verseEnd": 77.169,
        "words": [
          {
            "word": "그래서",
            "start": 72.253,
            "end": 73.034
          },
          {
            "word": "난",
            "start": 73.034,
            "end": 73.366
          },
          {
            "word": "눈누난나",
            "start": 73.366,
            "end": 77.169
          }
        ]
      },
      {
        "verseStart": 77.169,
        "verseEnd": 81.892,
        "words": [
          {
            "word": "눈누누난나",
            "start": 77.169,
            "end": 81.892
          }
        ]
      },
      {
        "verseStart": 81.892,
        "verseEnd": 84.133,
        "words": [
          {
            "word": "Put",
            "start": 81.892,
            "end": 82.055
          },
          {
            "word": "em",
            "start": 82.055,
            "end": 82.137
          },
          {
            "word": "up",
            "start": 82.137,
            "end": 82.423
          },
          {
            "word": "in",
            "start": 82.423,
            "end": 82.586
          },
          {
            "word": "the",
            "start": 82.586,
            "end": 82.709
          },
          {
            "word": "air",
            "start": 82.709,
            "end": 84.133
          }
        ]
      },
      {
        "verseStart": 84.133,
        "verseEnd": 85.895,
        "words": [
          {
            "word": "누나",
            "start": 84.133,
            "end": 84.665
          },
          {
            "word": "나나",
            "start": 84.665,
            "end": 85.895
          }
        ]
      },
      {
        "verseStart": 85.895,
        "verseEnd": 88.682,
        "words": [
          {
            "word": "Like",
            "start": 85.895,
            "end": 86.186
          },
          {
            "word": "this",
            "start": 86.186,
            "end": 86.435
          },
          {
            "word": "oh",
            "start": 86.435,
            "end": 86.719
          },
          {
            "word": "나나나",
            "start": 86.719,
            "end": 88.682
          }
        ]
      },
      {
        "verseStart": 88.682,
        "verseEnd": 90.613,
        "words": [
          {
            "word": "누나",
            "start": 88.682,
            "end": 89.355
          },
          {
            "word": "누나",
            "start": 89.355,
            "end": 90.613
          }
        ]
      },
      {
        "verseStart": 90.613,
        "verseEnd": 93.108,
        "words": [
          {
            "word": "에에에에이",
            "start": 90.613,
            "end": 93.108
          }
        ]
      },
      {
        "verseStart": 93.108,
        "verseEnd": 95.236,
        "words": [
          {
            "word": "I'm",
            "start": 93.108,
            "end": 93.23
          },
          {
            "word": "still",
            "start": 93.23,
            "end": 93.556
          },
          {
            "word": "Jessi",
            "start": 93.556,
            "end": 93.928
          },
          {
            "word": "from",
            "start": 93.928,
            "end": 94.051
          },
          {
            "word": "the",
            "start": 94.051,
            "end": 94.338
          },
          {
            "word": "block",
            "start": 94.338,
            "end": 95.236
          }
        ]
      },
      {
        "verseStart": 95.236,
        "verseEnd": 97.095,
        "words": [
          {
            "word": "You",
            "start": 95.236,
            "end": 95.359
          },
          {
            "word": "know",
            "start": 95.359,
            "end": 95.485
          },
          {
            "word": "I",
            "start": 95.485,
            "end": 95.649
          },
          {
            "word": "got",
            "start": 95.649,
            "end": 95.772
          },
          {
            "word": "the",
            "start": 95.772,
            "end": 96.142
          },
          {
            "word": "keys",
            "start": 96.142,
            "end": 96.306
          },
          {
            "word": "to",
            "start": 96.306,
            "end": 96.43
          },
          {
            "word": "the",
            "start": 96.43,
            "end": 96.638
          },
          {
            "word": "lock",
            "start": 96.638,
            "end": 97.095
          }
        ]
      },
      {
        "verseStart": 97.095,
        "verseEnd": 99.136,
        "words": [
          {
            "word": "안",
            "start": 97.095,
            "end": 97.298
          },
          {
            "word": "봐",
            "start": 97.298,
            "end": 97.581
          },
          {
            "word": "남의",
            "start": 97.581,
            "end": 98.07
          },
          {
            "word": "눈치",
            "start": 98.07,
            "end": 98.274
          },
          {
            "word": "I",
            "start": 98.274,
            "end": 98.438
          },
          {
            "word": "just",
            "start": 98.438,
            "end": 98.683
          },
          {
            "word": "do",
            "start": 98.683,
            "end": 98.933
          },
          {
            "word": "me",
            "start": 98.933,
            "end": 99.136
          }
        ]
      },
      {
        "verseStart": 99.136,
        "verseEnd": 101.549,
        "words": [
          {
            "word": "날",
            "start": 99.136,
            "end": 99.299
          },
          {
            "word": "보기",
            "start": 99.299,
            "end": 99.873
          },
          {
            "word": "위해",
            "start": 99.873,
            "end": 100.16
          },
          {
            "word": "들어",
            "start": 100.16,
            "end": 100.445
          },
          {
            "word": "뒤꿈치",
            "start": 100.445,
            "end": 101.549
          }
        ]
      },
      {
        "verseStart": 101.549,
        "verseEnd": 103.815,
        "words": [
          {
            "word": "Wake",
            "start": 101.549,
            "end": 101.671
          },
          {
            "word": "up",
            "start": 101.671,
            "end": 102.203
          },
          {
            "word": "bless",
            "start": 102.203,
            "end": 102.698
          },
          {
            "word": "looking",
            "start": 102.698,
            "end": 103.269
          },
          {
            "word": "fresh",
            "start": 103.269,
            "end": 103.815
          }
        ]
      },
      {
        "verseStart": 103.815,
        "verseEnd": 106.176,
        "words": [
          {
            "word": "어딜",
            "start": 103.815,
            "end": 104.23
          },
          {
            "word": "가든",
            "start": 104.23,
            "end": 104.48
          },
          {
            "word": "flex",
            "start": 104.48,
            "end": 104.77
          },
          {
            "word": "got",
            "start": 104.77,
            "end": 104.897
          },
          {
            "word": "the",
            "start": 104.897,
            "end": 105.062
          },
          {
            "word": "S",
            "start": 105.062,
            "end": 105.314
          },
          {
            "word": "on",
            "start": 105.314,
            "end": 105.479
          },
          {
            "word": "my",
            "start": 105.479,
            "end": 105.604
          },
          {
            "word": "chest",
            "start": 105.604,
            "end": 106.176
          }
        ]
      },
      {
        "verseStart": 106.176,
        "verseEnd": 108.409,
        "words": [
          {
            "word": "싸이",
            "start": 106.176,
            "end": 106.705
          },
          {
            "word": "오빠",
            "start": 106.705,
            "end": 106.908
          },
          {
            "word": "말했지",
            "start": 106.908,
            "end": 107.236
          },
          {
            "word": "꼴리는",
            "start": 107.236,
            "end": 107.528
          },
          {
            "word": "대로",
            "start": 107.528,
            "end": 107.774
          },
          {
            "word": "해",
            "start": 107.774,
            "end": 108.409
          }
        ]
      },
      {
        "verseStart": 108.409,
        "verseEnd": 110.646,
        "words": [
          {
            "word": "No",
            "start": 108.409,
            "end": 108.572
          },
          {
            "word": "red",
            "start": 108.572,
            "end": 108.816
          },
          {
            "word": "lights",
            "start": 108.816,
            "end": 109.156
          },
          {
            "word": "올림픽대로",
            "start": 109.156,
            "end": 110.028
          },
          {
            "word": "aye",
            "start": 110.028,
            "end": 110.646
          }
        ]
      },
      {
        "verseStart": 110.646,
        "verseEnd": 115.186,
        "words": [
          {
            "word": "뭐라",
            "start": 110.646,
            "end": 111.83
          },
          {
            "word": "하던",
            "start": 111.83,
            "end": 112.734
          },
          {
            "word": "still",
            "start": 112.734,
            "end": 112.896
          },
          {
            "word": "don't",
            "start": 112.896,
            "end": 113.02
          },
          {
            "word": "give",
            "start": 113.02,
            "end": 113.471
          },
          {
            "word": "a",
            "start": 113.471,
            "end": 113.881
          },
          {
            "word": "what",
            "start": 113.881,
            "end": 115.186
          }
        ]
      },
      {
        "verseStart": 115.186,
        "verseEnd": 119.828,
        "words": [
          {
            "word": "맘대로",
            "start": 115.186,
            "end": 117.192
          },
          {
            "word": "계속",
            "start": 117.192,
            "end": 117.559
          },
          {
            "word": "떠들어",
            "start": 117.559,
            "end": 118.294
          },
          {
            "word": "they",
            "start": 118.294,
            "end": 118.619
          },
          {
            "word": "talk",
            "start": 118.619,
            "end": 118.877
          },
          {
            "word": "about",
            "start": 118.877,
            "end": 119.327
          },
          {
            "word": "me",
            "start": 119.327,
            "end": 119.828
          }
        ]
      },
      {
        "verseStart": 119.828,
        "verseEnd": 127.031,
        "words": [
          {
            "word": "뭐라노",
            "start": 119.828,
            "end": 122.084
          },
          {
            "word": "뭐라카노",
            "start": 122.084,
            "end": 124.13
          },
          {
            "word": "F",
            "start": 124.13,
            "end": 124.46
          },
          {
            "word": "U",
            "start": 124.46,
            "end": 127.031
          }
        ]
      },
      {
        "verseStart": 127.031,
        "verseEnd": 132.311,
        "words": [
          {
            "word": "그래서",
            "start": 127.031,
            "end": 127.936
          },
          {
            "word": "난",
            "start": 127.936,
            "end": 128.188
          },
          {
            "word": "눈누난나",
            "start": 128.188,
            "end": 132.311
          }
        ]
      },
      {
        "verseStart": 132.311,
        "verseEnd": 136.777,
        "words": [
          {
            "word": "눈누누난나",
            "start": 132.311,
            "end": 136.777
          }
        ]
      },
      {
        "verseStart": 136.777,
        "verseEnd": 138.996,
        "words": [
          {
            "word": "Put",
            "start": 136.777,
            "end": 136.899
          },
          {
            "word": "em",
            "start": 136.899,
            "end": 137.063
          },
          {
            "word": "up",
            "start": 137.063,
            "end": 137.308
          },
          {
            "word": "in",
            "start": 137.308,
            "end": 137.472
          },
          {
            "word": "the",
            "start": 137.472,
            "end": 137.594
          },
          {
            "word": "air",
            "start": 137.594,
            "end": 138.996
          }
        ]
      },
      {
        "verseStart": 138.996,
        "verseEnd": 140.766,
        "words": [
          {
            "word": "누나",
            "start": 138.996,
            "end": 139.572
          },
          {
            "word": "나나",
            "start": 139.572,
            "end": 140.766
          }
        ]
      },
      {
        "verseStart": 140.766,
        "verseEnd": 143.563,
        "words": [
          {
            "word": "Like",
            "start": 140.766,
            "end": 141.058
          },
          {
            "word": "this",
            "start": 141.058,
            "end": 141.314
          },
          {
            "word": "oh",
            "start": 141.314,
            "end": 141.6
          },
          {
            "word": "나나나",
            "start": 141.6,
            "end": 143.563
          }
        ]
      },
      {
        "verseStart": 143.563,
        "verseEnd": 145.258,
        "words": [
          {
            "word": "누나",
            "start": 143.563,
            "end": 144.104
          },
          {
            "word": "누나",
            "start": 144.104,
            "end": 145.258
          }
        ]
      },
      {
        "verseStart": 145.258,
        "verseEnd": 150.044,
        "words": [
          {
            "word": "에에에에이",
            "start": 145.258,
            "end": 150.044
          }
        ]
      },
      {
        "verseStart": 150.044,
        "verseEnd": 154.475,
        "words": [
          {
            "word": "I'm",
            "start": 150.044,
            "end": 150.368
          },
          {
            "word": "trying",
            "start": 150.368,
            "end": 150.612
          },
          {
            "word": "to",
            "start": 150.612,
            "end": 150.858
          },
          {
            "word": "give",
            "start": 150.858,
            "end": 151.062
          },
          {
            "word": "you",
            "start": 151.062,
            "end": 151.347
          },
          {
            "word": "something",
            "start": 151.347,
            "end": 151.631
          },
          {
            "word": "more",
            "start": 151.631,
            "end": 152.161
          },
          {
            "word": "I'm",
            "start": 152.161,
            "end": 152.449
          },
          {
            "word": "trying",
            "start": 152.449,
            "end": 152.698
          },
          {
            "word": "to",
            "start": 152.698,
            "end": 152.986
          },
          {
            "word": "give",
            "start": 152.986,
            "end": 153.279
          },
          {
            "word": "you",
            "start": 153.279,
            "end": 153.571
          },
          {
            "word": "something",
            "start": 153.571,
            "end": 153.863
          },
          {
            "word": "more",
            "start": 153.863,
            "end": 154.475
          }
        ]
      },
      {
        "verseStart": 154.475,
        "verseEnd": 157.171,
        "words": [
          {
            "word": "So",
            "start": 154.475,
            "end": 154.719
          },
          {
            "word": "come",
            "start": 154.719,
            "end": 155.004
          },
          {
            "word": "with",
            "start": 155.004,
            "end": 155.29
          },
          {
            "word": "me",
            "start": 155.29,
            "end": 155.579
          },
          {
            "word": "and",
            "start": 155.579,
            "end": 155.864
          },
          {
            "word": "fly",
            "start": 155.864,
            "end": 156.112
          },
          {
            "word": "away",
            "start": 156.112,
            "end": 157.171
          }
        ]
      },
      {
        "verseStart": 157.171,
        "verseEnd": 168.403,
        "words": [
          {
            "word": "Away",
            "start": 157.171,
            "end": 158.399
          },
          {
            "word": "away",
            "start": 158.399,
            "end": 159.455
          },
          {
            "word": "away",
            "start": 159.455,
            "end": 160.597
          },
          {
            "word": "away",
            "start": 160.597,
            "end": 168.403
          }
        ]
      },
      {
        "verseStart": 168.403,
        "verseEnd": 173.313,
        "words": [
          {
            "word": "그래서",
            "start": 168.403,
            "end": 168.934
          },
          {
            "word": "난",
            "start": 168.934,
            "end": 169.3
          },
          {
            "word": "눈누난나",
            "start": 169.3,
            "end": 170.16
          },
          {
            "word": "oh",
            "start": 170.16,
            "end": 170.322
          },
          {
            "word": "yeah",
            "start": 170.322,
            "end": 173.313
          }
        ]
      },
      {
        "verseStart": 173.313,
        "verseEnd": 177.921,
        "words": [
          {
            "word": "눈누누난나",
            "start": 173.313,
            "end": 174.426
          },
          {
            "word": "oh",
            "start": 174.426,
            "end": 174.676
          },
          {
            "word": "yeah",
            "start": 174.676,
            "end": 177.921
          }
        ]
      },
      {
        "verseStart": 177.921,
        "verseEnd": 180.186,
        "words": [
          {
            "word": "Put",
            "start": 177.921,
            "end": 178.044
          },
          {
            "word": "em",
            "start": 178.044,
            "end": 178.167
          },
          {
            "word": "up",
            "start": 178.167,
            "end": 178.451
          },
          {
            "word": "in",
            "start": 178.451,
            "end": 178.614
          },
          {
            "word": "the",
            "start": 178.614,
            "end": 178.696
          },
          {
            "word": "air",
            "start": 178.696,
            "end": 180.186
          }
        ]
      },
      {
        "verseStart": 180.186,
        "verseEnd": 181.782,
        "words": [
          {
            "word": "누나",
            "start": 180.186,
            "end": 180.718
          },
          {
            "word": "나나",
            "start": 180.718,
            "end": 181.782
          }
        ]
      },
      {
        "verseStart": 181.782,
        "verseEnd": 184.672,
        "words": [
          {
            "word": "Like",
            "start": 181.782,
            "end": 182.109
          },
          {
            "word": "this",
            "start": 182.109,
            "end": 182.433
          },
          {
            "word": "oh",
            "start": 182.433,
            "end": 182.718
          },
          {
            "word": "나나나",
            "start": 182.718,
            "end": 183.735
          },
          {
            "word": "yeah",
            "start": 183.735,
            "end": 184.672
          }
        ]
      },
      {
        "verseStart": 184.672,
        "verseEnd": 186.431,
        "words": [
          {
            "word": "누나",
            "start": 184.672,
            "end": 185.243
          },
          {
            "word": "누나",
            "start": 185.243,
            "end": 186.431
          }
        ]
      },
      {
        "verseStart": 186.431,
        "verseEnd": 188.431,
        "words": [
          {
            "word": "에에에에이",
            "start": 186.431,
            "end": 0
          }
        ]
      }
    ],
    "subtitle": "🇰🇷 ● 그동안 이 띵곡 한 번 들어봐 ● 🇰🇷"
  },
  "Yamê - Bécane.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 6.448,
        "verseEnd": 10.003,
        "words": [
          {
            "word": "Bitch ",
            "start": 6.448,
            "end": 6.57
          },
          {
            "word": "ça ",
            "start": 6.57,
            "end": 6.733
          },
          {
            "word": "fait ",
            "start": 6.733,
            "end": 6.814
          },
          {
            "word": "très ",
            "start": 6.814,
            "end": 6.937
          },
          {
            "word": "très ",
            "start": 6.937,
            "end": 7.059
          },
          {
            "word": "longtemps ",
            "start": 7.059,
            "end": 7.224
          },
          {
            "word": "que ",
            "start": 7.224,
            "end": 7.386
          },
          {
            "word": "j'y ",
            "start": 7.386,
            "end": 7.508
          },
          {
            "word": "pense ",
            "start": 7.508,
            "end": 7.672
          },
          {
            "word": "à ",
            "start": 7.672,
            "end": 7.798
          },
          {
            "word": "comment ",
            "start": 7.798,
            "end": 7.961
          },
          {
            "word": "se ",
            "start": 7.961,
            "end": 8.126
          },
          {
            "word": "mettre ",
            "start": 8.126,
            "end": 8.328
          },
          {
            "word": "bien, ",
            "start": 8.328,
            "end": 8.492
          },
          {
            "word": "moi ",
            "start": 8.492,
            "end": 8.736
          },
          {
            "word": "j'ai ",
            "start": 8.736,
            "end": 8.94
          },
          {
            "word": "pas ",
            "start": 8.94,
            "end": 9.104
          },
          {
            "word": "ton ",
            "start": 9.104,
            "end": 9.267
          },
          {
            "word": "élan",
            "start": 9.267,
            "end": 10.003
          }
        ]
      },
      {
        "verseStart": 10.003,
        "verseEnd": 13.909,
        "words": [
          {
            "word": "N'écoute ",
            "start": 10.003,
            "end": 10.166
          },
          {
            "word": "jamais ",
            "start": 10.166,
            "end": 10.328
          },
          {
            "word": "les \"",
            "start": 10.328,
            "end": 10.53
          },
          {
            "word": "on ",
            "start": 10.53,
            "end": 10.691
          },
          {
            "word": "dit\", ",
            "start": 10.691,
            "end": 11.34
          },
          {
            "word": "ceux ",
            "start": 11.34,
            "end": 11.504
          },
          {
            "word": "qui ",
            "start": 11.504,
            "end": 11.626
          },
          {
            "word": "jactent ",
            "start": 11.626,
            "end": 11.79
          },
          {
            "word": "n'ont ",
            "start": 11.79,
            "end": 11.953
          },
          {
            "word": "pas ",
            "start": 11.953,
            "end": 12.155
          },
          {
            "word": "vu ",
            "start": 12.155,
            "end": 12.32
          },
          {
            "word": "la ",
            "start": 12.32,
            "end": 12.485
          },
          {
            "word": "vie ",
            "start": 12.485,
            "end": 12.647
          },
          {
            "word": "au ",
            "start": 12.647,
            "end": 12.81
          },
          {
            "word": "travers ",
            "start": 12.81,
            "end": 12.973
          },
          {
            "word": "de ",
            "start": 12.973,
            "end": 13.136
          },
          {
            "word": "ton ",
            "start": 13.136,
            "end": 13.298
          },
          {
            "word": "monde",
            "start": 13.298,
            "end": 13.909
          }
        ]
      },
      {
        "verseStart": 13.909,
        "verseEnd": 17.871,
        "words": [
          {
            "word": "J'ai ",
            "start": 13.909,
            "end": 14.112
          },
          {
            "word": "beau ",
            "start": 14.112,
            "end": 14.275
          },
          {
            "word": "parler ",
            "start": 14.275,
            "end": 14.482
          },
          {
            "word": "dans ",
            "start": 14.482,
            "end": 14.651
          },
          {
            "word": "leur ",
            "start": 14.651,
            "end": 14.813
          },
          {
            "word": "langue ",
            "start": 14.813,
            "end": 15.017
          },
          {
            "word": "mais ",
            "start": 15.017,
            "end": 15.22
          },
          {
            "word": "faut ",
            "start": 15.22,
            "end": 15.384
          },
          {
            "word": "croire ",
            "start": 15.384,
            "end": 15.588
          },
          {
            "word": "qu'ils ",
            "start": 15.588,
            "end": 15.751
          },
          {
            "word": "n'entendent ",
            "start": 15.751,
            "end": 15.953
          },
          {
            "word": "que ",
            "start": 15.953,
            "end": 16.116
          },
          {
            "word": "le ",
            "start": 16.116,
            "end": 16.32
          },
          {
            "word": "langage ",
            "start": 16.32,
            "end": 16.487
          },
          {
            "word": "de ",
            "start": 16.487,
            "end": 16.69
          },
          {
            "word": "la ",
            "start": 16.69,
            "end": 17.014
          },
          {
            "word": "violence",
            "start": 17.014,
            "end": 17.871
          }
        ]
      },
      {
        "verseStart": 17.871,
        "verseEnd": 21.907,
        "words": [
          {
            "word": "J'me ",
            "start": 17.871,
            "end": 18.034
          },
          {
            "word": "faufile ",
            "start": 18.034,
            "end": 18.201
          },
          {
            "word": "en ",
            "start": 18.201,
            "end": 18.363
          },
          {
            "word": "bal ",
            "start": 18.363,
            "end": 18.566
          },
          {
            "word": "sans ",
            "start": 18.566,
            "end": 18.729
          },
          {
            "word": "les ",
            "start": 18.729,
            "end": 18.892
          },
          {
            "word": "mains, ",
            "start": 18.892,
            "end": 19.339
          },
          {
            "word": "tu ",
            "start": 19.339,
            "end": 19.501
          },
          {
            "word": "m'as ",
            "start": 19.501,
            "end": 19.623
          },
          {
            "word": "pas ",
            "start": 19.623,
            "end": 19.745
          },
          {
            "word": "vu ",
            "start": 19.745,
            "end": 19.908
          },
          {
            "word": "bégayer ",
            "start": 19.908,
            "end": 20.07
          },
          {
            "word": "quand ",
            "start": 20.07,
            "end": 20.234
          },
          {
            "word": "fallait ",
            "start": 20.234,
            "end": 20.397
          },
          {
            "word": "passer ",
            "start": 20.397,
            "end": 20.643
          },
          {
            "word": "le ",
            "start": 20.643,
            "end": 20.806
          },
          {
            "word": "lent",
            "start": 20.806,
            "end": 21.907
          }
        ]
      },
      {
        "verseStart": 21.907,
        "verseEnd": 25.831,
        "words": [
          {
            "word": "Sankara, ",
            "start": 21.907,
            "end": 22.448
          },
          {
            "word": "Cheikh ",
            "start": 22.448,
            "end": 22.773
          },
          {
            "word": "Anta, ",
            "start": 22.773,
            "end": 22.976
          },
          {
            "word": "négro, ",
            "start": 22.976,
            "end": 23.261
          },
          {
            "word": "j'ai ",
            "start": 23.261,
            "end": 23.545
          },
          {
            "word": "choisi ",
            "start": 23.545,
            "end": 23.668
          },
          {
            "word": "mes ",
            "start": 23.668,
            "end": 23.873
          },
          {
            "word": "modèles, ",
            "start": 23.873,
            "end": 24.162
          },
          {
            "word": "c'est ",
            "start": 24.162,
            "end": 24.365
          },
          {
            "word": "fiable ",
            "start": 24.365,
            "end": 24.528
          },
          {
            "word": "comme ",
            "start": 24.528,
            "end": 24.734
          },
          {
            "word": "un ",
            "start": 24.734,
            "end": 24.856
          },
          {
            "word": "moteur ",
            "start": 24.856,
            "end": 25.059
          },
          {
            "word": "allemand",
            "start": 25.059,
            "end": 25.831
          }
        ]
      },
      {
        "verseStart": 25.831,
        "verseEnd": 29.87,
        "words": [
          {
            "word": "En ",
            "start": 25.831,
            "end": 26.033
          },
          {
            "word": "indé', ",
            "start": 26.033,
            "end": 26.319
          },
          {
            "word": "sans ",
            "start": 26.319,
            "end": 26.484
          },
          {
            "word": "carats, ",
            "start": 26.484,
            "end": 26.648
          },
          {
            "word": "sans ",
            "start": 26.648,
            "end": 26.81
          },
          {
            "word": "chico, ",
            "start": 26.81,
            "end": 27.055
          },
          {
            "word": "oui ",
            "start": 27.055,
            "end": 27.258
          },
          {
            "word": "je ",
            "start": 27.258,
            "end": 27.461
          },
          {
            "word": "fais ",
            "start": 27.461,
            "end": 27.706
          },
          {
            "word": "quer-",
            "start": 27.706,
            "end": 27.912
          },
          {
            "word": "cro ",
            "start": 27.912,
            "end": 28.115
          },
          {
            "word": "bien ",
            "start": 28.115,
            "end": 28.281
          },
          {
            "word": "plus ",
            "start": 28.281,
            "end": 28.486
          },
          {
            "word": "que ",
            "start": 28.486,
            "end": 28.649
          },
          {
            "word": "les ",
            "start": 28.649,
            "end": 28.812
          },
          {
            "word": "grands ",
            "start": 28.812,
            "end": 28.975
          },
          {
            "word": "de ",
            "start": 28.975,
            "end": 29.178
          },
          {
            "word": "tes ",
            "start": 29.178,
            "end": 29.666
          },
          {
            "word": "grands",
            "start": 29.666,
            "end": 29.87
          }
        ]
      },
      {
        "verseStart": 29.87,
        "verseEnd": 33.556,
        "words": [
          {
            "word": "J'les ",
            "start": 29.87,
            "end": 29.993
          },
          {
            "word": "té-",
            "start": 29.993,
            "end": 30.158
          },
          {
            "word": "ma ",
            "start": 30.158,
            "end": 30.322
          },
          {
            "word": "pas, ",
            "start": 30.322,
            "end": 30.526
          },
          {
            "word": "ils ",
            "start": 30.526,
            "end": 30.73
          },
          {
            "word": "sont ",
            "start": 30.73,
            "end": 30.893
          },
          {
            "word": "pas ",
            "start": 30.893,
            "end": 31.056
          },
          {
            "word": "concentrés, ",
            "start": 31.056,
            "end": 31.301
          },
          {
            "word": "j'attends ",
            "start": 31.301,
            "end": 31.708
          },
          {
            "word": "pas ",
            "start": 31.708,
            "end": 31.924
          },
          {
            "word": "la ",
            "start": 31.924,
            "end": 32.127
          },
          {
            "word": "passe, ",
            "start": 32.127,
            "end": 32.331
          },
          {
            "word": "ils ",
            "start": 32.331,
            "end": 32.493
          },
          {
            "word": "peuvent ",
            "start": 32.493,
            "end": 32.697
          },
          {
            "word": "pas ",
            "start": 32.697,
            "end": 32.862
          },
          {
            "word": "centrer",
            "start": 32.862,
            "end": 33.556
          }
        ]
      },
      {
        "verseStart": 33.556,
        "verseEnd": 37.635,
        "words": [
          {
            "word": "J'suis ",
            "start": 33.556,
            "end": 33.924
          },
          {
            "word": "bantu, ",
            "start": 33.924,
            "end": 34.209
          },
          {
            "word": "me ",
            "start": 34.209,
            "end": 34.372
          },
          {
            "word": "parle ",
            "start": 34.372,
            "end": 34.535
          },
          {
            "word": "pas ",
            "start": 34.535,
            "end": 34.698
          },
          {
            "word": "de ",
            "start": 34.698,
            "end": 34.86
          },
          {
            "word": "basané, ",
            "start": 34.86,
            "end": 35.554
          },
          {
            "word": "on ",
            "start": 35.554,
            "end": 35.717
          },
          {
            "word": "n'est ",
            "start": 35.717,
            "end": 35.88
          },
          {
            "word": "pas ",
            "start": 35.88,
            "end": 36.089
          },
          {
            "word": "v'nus ",
            "start": 36.089,
            "end": 36.332
          },
          {
            "word": "ici ",
            "start": 36.332,
            "end": 36.495
          },
          {
            "word": "pour ",
            "start": 36.495,
            "end": 36.657
          },
          {
            "word": "se ",
            "start": 36.657,
            "end": 36.82
          },
          {
            "word": "pavaner",
            "start": 36.82,
            "end": 37.635
          }
        ]
      },
      {
        "verseStart": 37.635,
        "verseEnd": 41.177,
        "words": [
          {
            "word": "Remballe ",
            "start": 37.635,
            "end": 37.961
          },
          {
            "word": "ta ",
            "start": 37.961,
            "end": 38.165
          },
          {
            "word": "c, ",
            "start": 38.165,
            "end": 38.367
          },
          {
            "word": "j'ai ",
            "start": 38.367,
            "end": 38.53
          },
          {
            "word": "mes ",
            "start": 38.53,
            "end": 38.652
          },
          {
            "word": "cc",
            "start": 38.652,
            "end": 41.177
          }
        ]
      },
      {
        "verseStart": 41.177,
        "verseEnd": 45.173,
        "words": [
          {
            "word": "J'tourne ",
            "start": 41.177,
            "end": 41.421
          },
          {
            "word": "la ",
            "start": 41.421,
            "end": 41.788
          },
          {
            "word": "poignée, ",
            "start": 41.788,
            "end": 42.155
          },
          {
            "word": "j'froisse ",
            "start": 42.155,
            "end": 42.278
          },
          {
            "word": "le ",
            "start": 42.278,
            "end": 42.646
          },
          {
            "word": "temps",
            "start": 42.646,
            "end": 45.173
          }
        ]
      },
      {
        "verseStart": 45.173,
        "verseEnd": 48.574,
        "words": [
          {
            "word": "J'roule ",
            "start": 45.173,
            "end": 45.581
          },
          {
            "word": "comme ",
            "start": 45.581,
            "end": 45.704
          },
          {
            "word": "si ",
            "start": 45.704,
            "end": 46.112
          },
          {
            "word": "quelqu'un ",
            "start": 46.112,
            "end": 46.479
          },
          {
            "word": "m'attendait",
            "start": 46.479,
            "end": 48.574
          }
        ]
      },
      {
        "verseStart": 48.574,
        "verseEnd": 54.123,
        "words": [
          {
            "word": "J'cale ",
            "start": 48.574,
            "end": 49.268
          },
          {
            "word": "l'pétard ",
            "start": 49.268,
            "end": 49.553
          },
          {
            "word": "entre ",
            "start": 49.553,
            "end": 50.126
          },
          {
            "word": "mes ",
            "start": 50.126,
            "end": 50.37
          },
          {
            "word": "dents, ",
            "start": 50.37,
            "end": 52.248
          },
          {
            "word": "m'bah ",
            "start": 52.248,
            "end": 52.451
          },
          {
            "word": "ouais, ",
            "start": 52.451,
            "end": 53.224
          },
          {
            "word": "m'bah ",
            "start": 53.224,
            "end": 53.468
          },
          {
            "word": "ouais",
            "start": 53.468,
            "end": 54.123
          }
        ]
      },
      {
        "verseStart": 54.123,
        "verseEnd": 61.014,
        "words": [
          {
            "word": "J'sors ",
            "start": 54.123,
            "end": 54.246
          },
          {
            "word": "la ",
            "start": 54.246,
            "end": 54.53
          },
          {
            "word": "bécane, ",
            "start": 54.53,
            "end": 55.182
          },
          {
            "word": "di-",
            "start": 55.182,
            "end": 55.549
          },
          {
            "word": "di-",
            "start": 55.549,
            "end": 55.875
          },
          {
            "word": "di-",
            "start": 55.875,
            "end": 56.241
          },
          {
            "word": "da-",
            "start": 56.241,
            "end": 56.567
          },
          {
            "word": "da, ",
            "start": 56.567,
            "end": 58.074
          },
          {
            "word": "j'fume ",
            "start": 58.074,
            "end": 58.278
          },
          {
            "word": "la ",
            "start": 58.278,
            "end": 58.524
          },
          {
            "word": "beuh",
            "start": 58.524,
            "end": 61.014
          }
        ]
      },
      {
        "verseStart": 61.014,
        "verseEnd": 63.013,
        "words": [
          {
            "word": "J'm'en ",
            "start": 61.014,
            "end": 61.258
          },
          {
            "word": "bats ",
            "start": 61.258,
            "end": 61.503
          },
          {
            "word": "les ",
            "start": 61.503,
            "end": 61.791
          },
          {
            "word": "couilles ",
            "start": 61.791,
            "end": 61.913
          },
          {
            "word": "si ",
            "start": 61.913,
            "end": 61.995
          },
          {
            "word": "c'est ",
            "start": 61.995,
            "end": 62.117
          },
          {
            "word": "dangereux ",
            "start": 62.117,
            "end": 62.198
          },
          {
            "word": "sa ",
            "start": 62.198,
            "end": 62.402
          },
          {
            "word": "mère",
            "start": 62.402,
            "end": 63.013
          }
        ]
      },
      {
        "verseStart": 63.013,
        "verseEnd": 65.013,
        "words": [
          {
            "word": "J'vois ",
            "start": 63.013,
            "end": 63.176
          },
          {
            "word": "que ",
            "start": 63.176,
            "end": 63.42
          },
          {
            "word": "des ",
            "start": 63.42,
            "end": 63.623
          },
          {
            "word": "barreaux, ",
            "start": 63.623,
            "end": 63.827
          },
          {
            "word": "des ",
            "start": 63.827,
            "end": 64.071
          },
          {
            "word": "barreaux ",
            "start": 64.071,
            "end": 64.275
          },
          {
            "word": "en ",
            "start": 64.275,
            "end": 64.483
          },
          {
            "word": "fer",
            "start": 64.483,
            "end": 65.013
          }
        ]
      },
      {
        "verseStart": 65.013,
        "verseEnd": 69.907,
        "words": [
          {
            "word": "La ",
            "start": 65.013,
            "end": 65.135
          },
          {
            "word": "bécane ",
            "start": 65.135,
            "end": 65.257
          },
          {
            "word": "crie ",
            "start": 65.257,
            "end": 65.46
          },
          {
            "word": "et ",
            "start": 65.46,
            "end": 65.786
          },
          {
            "word": "j'sors ",
            "start": 65.786,
            "end": 65.908
          },
          {
            "word": "de ",
            "start": 65.908,
            "end": 66.233
          },
          {
            "word": "l'enfer ",
            "start": 66.233,
            "end": 68.026
          },
          {
            "word": "sur ",
            "start": 68.026,
            "end": 68.148
          },
          {
            "word": "un ",
            "start": 68.148,
            "end": 68.354
          },
          {
            "word": "gros ",
            "start": 68.354,
            "end": 68.685
          },
          {
            "word": "fer, ",
            "start": 68.685,
            "end": 69.174
          },
          {
            "word": "bah ",
            "start": 69.174,
            "end": 69.419
          },
          {
            "word": "ouais",
            "start": 69.419,
            "end": 69.907
          }
        ]
      },
      {
        "verseStart": 69.907,
        "verseEnd": 76.922,
        "words": [
          {
            "word": "J'sors ",
            "start": 69.907,
            "end": 70.07
          },
          {
            "word": "la ",
            "start": 70.07,
            "end": 70.437
          },
          {
            "word": "bécane, ",
            "start": 70.437,
            "end": 71.132
          },
          {
            "word": "di-",
            "start": 71.132,
            "end": 71.379
          },
          {
            "word": "di-",
            "start": 71.379,
            "end": 71.746
          },
          {
            "word": "di-",
            "start": 71.746,
            "end": 72.193
          },
          {
            "word": "didi, ",
            "start": 72.193,
            "end": 73.903
          },
          {
            "word": "j'fume ",
            "start": 73.903,
            "end": 74.19
          },
          {
            "word": "la ",
            "start": 74.19,
            "end": 74.434
          },
          {
            "word": "beuh, ",
            "start": 74.434,
            "end": 75.777
          },
          {
            "word": "hum",
            "start": 75.777,
            "end": 76.922
          }
        ]
      },
      {
        "verseStart": 76.922,
        "verseEnd": 78.846,
        "words": [
          {
            "word": "J'm'en ",
            "start": 76.922,
            "end": 77.094
          },
          {
            "word": "bats ",
            "start": 77.094,
            "end": 77.338
          },
          {
            "word": "les ",
            "start": 77.338,
            "end": 77.665
          },
          {
            "word": "couilles ",
            "start": 77.665,
            "end": 77.787
          },
          {
            "word": "si ",
            "start": 77.787,
            "end": 77.868
          },
          {
            "word": "c'est ",
            "start": 77.868,
            "end": 77.99
          },
          {
            "word": "dangereux ",
            "start": 77.99,
            "end": 78.112
          },
          {
            "word": "sa ",
            "start": 78.112,
            "end": 78.235
          },
          {
            "word": "mère",
            "start": 78.235,
            "end": 78.846
          }
        ]
      },
      {
        "verseStart": 78.846,
        "verseEnd": 80.885,
        "words": [
          {
            "word": "J'vois ",
            "start": 78.846,
            "end": 79.009
          },
          {
            "word": "que ",
            "start": 79.009,
            "end": 79.174
          },
          {
            "word": "des ",
            "start": 79.174,
            "end": 79.336
          },
          {
            "word": "barreaux, ",
            "start": 79.336,
            "end": 79.663
          },
          {
            "word": "des ",
            "start": 79.663,
            "end": 79.786
          },
          {
            "word": "barreaux ",
            "start": 79.786,
            "end": 79.948
          },
          {
            "word": "en ",
            "start": 79.948,
            "end": 80.356
          },
          {
            "word": "fer",
            "start": 80.356,
            "end": 80.885
          }
        ]
      },
      {
        "verseStart": 80.885,
        "verseEnd": 88.972,
        "words": [
          {
            "word": "La ",
            "start": 80.885,
            "end": 81.048
          },
          {
            "word": "bécane ",
            "start": 81.048,
            "end": 81.211
          },
          {
            "word": "crie ",
            "start": 81.211,
            "end": 81.415
          },
          {
            "word": "et ",
            "start": 81.415,
            "end": 81.619
          },
          {
            "word": "j'sors ",
            "start": 81.619,
            "end": 81.902
          },
          {
            "word": "de ",
            "start": 81.902,
            "end": 82.147
          },
          {
            "word": "l'enfer ",
            "start": 82.147,
            "end": 83.872
          },
          {
            "word": "sur ",
            "start": 83.872,
            "end": 83.995
          },
          {
            "word": "un ",
            "start": 83.995,
            "end": 84.157
          },
          {
            "word": "gros ",
            "start": 84.157,
            "end": 84.524
          },
          {
            "word": "fer, ",
            "start": 84.524,
            "end": 85.094
          },
          {
            "word": "bah ",
            "start": 85.094,
            "end": 85.296
          },
          {
            "word": "ouais, ",
            "start": 85.296,
            "end": 85.986
          },
          {
            "word": "bah ",
            "start": 85.986,
            "end": 86.23
          },
          {
            "word": "ouais",
            "start": 86.23,
            "end": 88.972
          }
        ]
      },
      {
        "verseStart": 88.972,
        "verseEnd": 92.525,
        "words": [
          {
            "word": "L'akra ",
            "start": 88.972,
            "end": 89.299
          },
          {
            "word": "aide ",
            "start": 89.299,
            "end": 89.585
          },
          {
            "word": "à ",
            "start": 89.585,
            "end": 89.788
          },
          {
            "word": "focaliser",
            "start": 89.788,
            "end": 92.525
          }
        ]
      },
      {
        "verseStart": 92.525,
        "verseEnd": 96.811,
        "words": [
          {
            "word": "La ",
            "start": 92.525,
            "end": 92.891
          },
          {
            "word": "haine ",
            "start": 92.891,
            "end": 93.176
          },
          {
            "word": "que ",
            "start": 93.176,
            "end": 93.298
          },
          {
            "word": "j'ressens ",
            "start": 93.298,
            "end": 93.582
          },
          {
            "word": "dans ",
            "start": 93.582,
            "end": 93.785
          },
          {
            "word": "mes ",
            "start": 93.785,
            "end": 93.99
          },
          {
            "word": "pensées, ",
            "start": 93.99,
            "end": 95.589
          },
          {
            "word": "hum",
            "start": 95.589,
            "end": 96.811
          }
        ]
      },
      {
        "verseStart": 96.811,
        "verseEnd": 101.627,
        "words": [
          {
            "word": "Dans ",
            "start": 96.811,
            "end": 97.055
          },
          {
            "word": "ce ",
            "start": 97.055,
            "end": 97.3
          },
          {
            "word": "business ",
            "start": 97.3,
            "end": 97.994
          },
          {
            "word": "balisé, ",
            "start": 97.994,
            "end": 99.995
          },
          {
            "word": "ah ",
            "start": 99.995,
            "end": 100.203
          },
          {
            "word": "ouais",
            "start": 100.203,
            "end": 101.627
          }
        ]
      },
      {
        "verseStart": 101.627,
        "verseEnd": 109.474,
        "words": [
          {
            "word": "J'sors ",
            "start": 101.627,
            "end": 101.79
          },
          {
            "word": "la ",
            "start": 101.79,
            "end": 101.995
          },
          {
            "word": "bécane-",
            "start": 101.995,
            "end": 103.507
          },
          {
            "word": "cane, ",
            "start": 103.507,
            "end": 105.183
          },
          {
            "word": "wou-",
            "start": 105.183,
            "end": 106.292
          },
          {
            "word": "ouh",
            "start": 106.292,
            "end": 109.474
          }
        ]
      },
      {
        "verseStart": 109.474,
        "verseEnd": 118.09,
        "words": [
          {
            "word": "Et ",
            "start": 109.474,
            "end": 109.596
          },
          {
            "word": "j'sors ",
            "start": 109.596,
            "end": 109.923
          },
          {
            "word": "la ",
            "start": 109.923,
            "end": 110.087
          },
          {
            "word": "bécane-",
            "start": 110.087,
            "end": 111.551
          },
          {
            "word": "cane, ",
            "start": 111.551,
            "end": 113.016
          },
          {
            "word": "wou-",
            "start": 113.016,
            "end": 114.161
          },
          {
            "word": "ou-",
            "start": 114.161,
            "end": 116.036
          },
          {
            "word": "ah-",
            "start": 116.036,
            "end": 117.027
          },
          {
            "word": "ah",
            "start": 117.027,
            "end": 118.09
          }
        ]
      },
      {
        "verseStart": 118.09,
        "verseEnd": 125.47,
        "words": [
          {
            "word": "Cane, ",
            "start": 118.09,
            "end": 118.824
          },
          {
            "word": "di-",
            "start": 118.824,
            "end": 119.195
          },
          {
            "word": "di-",
            "start": 119.195,
            "end": 119.562
          },
          {
            "word": "di-",
            "start": 119.562,
            "end": 119.929
          },
          {
            "word": "da-",
            "start": 119.929,
            "end": 120.256
          },
          {
            "word": "da, ",
            "start": 120.256,
            "end": 121.602
          },
          {
            "word": "j'fume ",
            "start": 121.602,
            "end": 121.849
          },
          {
            "word": "la ",
            "start": 121.849,
            "end": 122.093
          },
          {
            "word": "beuh",
            "start": 122.093,
            "end": 125.47
          }
        ]
      },
      {
        "verseStart": 125.47,
        "verseEnd": 133.513,
        "words": [
          {
            "word": "J'sors ",
            "start": 125.47,
            "end": 125.674
          },
          {
            "word": "la ",
            "start": 125.674,
            "end": 125.963
          },
          {
            "word": "bécane, ",
            "start": 125.963,
            "end": 126.781
          },
          {
            "word": "di-",
            "start": 126.781,
            "end": 127.106
          },
          {
            "word": "di-",
            "start": 127.106,
            "end": 127.432
          },
          {
            "word": "di-",
            "start": 127.432,
            "end": 127.798
          },
          {
            "word": "da-",
            "start": 127.798,
            "end": 128.123
          },
          {
            "word": "da, ",
            "start": 128.123,
            "end": 128.855
          },
          {
            "word": "ah ",
            "start": 128.855,
            "end": 129.184
          },
          {
            "word": "euh, ",
            "start": 129.184,
            "end": 129.801
          },
          {
            "word": "ah ",
            "start": 129.801,
            "end": 130.045
          },
          {
            "word": "euh",
            "start": 130.045,
            "end": 133.513
          }
        ]
      },
      {
        "verseStart": 133.513,
        "verseEnd": 140.363,
        "words": [
          {
            "word": "J'sors ",
            "start": 133.513,
            "end": 133.675
          },
          {
            "word": "la ",
            "start": 133.675,
            "end": 133.962
          },
          {
            "word": "bécane, ",
            "start": 133.962,
            "end": 134.616
          },
          {
            "word": "di-",
            "start": 134.616,
            "end": 134.982
          },
          {
            "word": "di-",
            "start": 134.982,
            "end": 135.35
          },
          {
            "word": "di-",
            "start": 135.35,
            "end": 135.714
          },
          {
            "word": "da-",
            "start": 135.714,
            "end": 136.079
          },
          {
            "word": "da, ",
            "start": 136.079,
            "end": 137.42
          },
          {
            "word": "j'fume ",
            "start": 137.42,
            "end": 137.663
          },
          {
            "word": "la ",
            "start": 137.663,
            "end": 137.914
          },
          {
            "word": "beuh, ",
            "start": 137.914,
            "end": 139.671
          },
          {
            "word": "han",
            "start": 139.671,
            "end": 140.363
          }
        ]
      },
      {
        "verseStart": 140.363,
        "verseEnd": 142.374,
        "words": [
          {
            "word": "J'm'en ",
            "start": 140.363,
            "end": 140.567
          },
          {
            "word": "bats ",
            "start": 140.567,
            "end": 140.771
          },
          {
            "word": "les ",
            "start": 140.771,
            "end": 140.933
          },
          {
            "word": "couilles ",
            "start": 140.933,
            "end": 141.179
          },
          {
            "word": "si ",
            "start": 141.179,
            "end": 141.301
          },
          {
            "word": "c'est ",
            "start": 141.301,
            "end": 141.423
          },
          {
            "word": "dangereux ",
            "start": 141.423,
            "end": 141.505
          },
          {
            "word": "sa ",
            "start": 141.505,
            "end": 141.71
          },
          {
            "word": "mère",
            "start": 141.71,
            "end": 142.374
          }
        ]
      },
      {
        "verseStart": 142.374,
        "verseEnd": 144.378,
        "words": [
          {
            "word": "J'vois ",
            "start": 142.374,
            "end": 142.538
          },
          {
            "word": "que ",
            "start": 142.538,
            "end": 142.703
          },
          {
            "word": "des ",
            "start": 142.703,
            "end": 142.907
          },
          {
            "word": "barreaux, ",
            "start": 142.907,
            "end": 143.192
          },
          {
            "word": "des ",
            "start": 143.192,
            "end": 143.314
          },
          {
            "word": "barreaux ",
            "start": 143.314,
            "end": 143.639
          },
          {
            "word": "en ",
            "start": 143.639,
            "end": 143.844
          },
          {
            "word": "fer",
            "start": 143.844,
            "end": 144.378
          }
        ]
      },
      {
        "verseStart": 144.378,
        "verseEnd": 149.302,
        "words": [
          {
            "word": "La ",
            "start": 144.378,
            "end": 144.541
          },
          {
            "word": "bécane ",
            "start": 144.541,
            "end": 144.704
          },
          {
            "word": "crie ",
            "start": 144.704,
            "end": 144.865
          },
          {
            "word": "et ",
            "start": 144.865,
            "end": 145.11
          },
          {
            "word": "j'sors ",
            "start": 145.11,
            "end": 145.314
          },
          {
            "word": "de ",
            "start": 145.314,
            "end": 145.558
          },
          {
            "word": "l'enfer ",
            "start": 145.558,
            "end": 147.267
          },
          {
            "word": "sur ",
            "start": 147.267,
            "end": 147.43
          },
          {
            "word": "un ",
            "start": 147.43,
            "end": 147.594
          },
          {
            "word": "gros ",
            "start": 147.594,
            "end": 147.96
          },
          {
            "word": "fer, ",
            "start": 147.96,
            "end": 148.529
          },
          {
            "word": "bah ",
            "start": 148.529,
            "end": 148.773
          },
          {
            "word": "ouais",
            "start": 148.773,
            "end": 149.302
          }
        ]
      },
      {
        "verseStart": 149.302,
        "verseEnd": 156.224,
        "words": [
          {
            "word": "J'sors ",
            "start": 149.302,
            "end": 149.465
          },
          {
            "word": "la ",
            "start": 149.465,
            "end": 149.587
          },
          {
            "word": "bécane, ",
            "start": 149.587,
            "end": 150.486
          },
          {
            "word": "di-",
            "start": 150.486,
            "end": 150.811
          },
          {
            "word": "di-",
            "start": 150.811,
            "end": 151.14
          },
          {
            "word": "di-",
            "start": 151.14,
            "end": 151.548
          },
          {
            "word": "didi, ",
            "start": 151.548,
            "end": 151.75
          },
          {
            "word": "didi-",
            "start": 151.75,
            "end": 153.499
          },
          {
            "word": "i-",
            "start": 153.499,
            "end": 153.702
          },
          {
            "word": "i, ",
            "start": 153.702,
            "end": 155.33
          },
          {
            "word": "han",
            "start": 155.33,
            "end": 156.224
          }
        ]
      },
      {
        "verseStart": 156.224,
        "verseEnd": 158.263,
        "words": [
          {
            "word": "J'm'en ",
            "start": 156.224,
            "end": 156.549
          },
          {
            "word": "bats ",
            "start": 156.549,
            "end": 156.712
          },
          {
            "word": "les ",
            "start": 156.712,
            "end": 156.998
          },
          {
            "word": "couilles ",
            "start": 156.998,
            "end": 157.121
          },
          {
            "word": "si ",
            "start": 157.121,
            "end": 157.203
          },
          {
            "word": "c'est ",
            "start": 157.203,
            "end": 157.324
          },
          {
            "word": "dangereux ",
            "start": 157.324,
            "end": 157.528
          },
          {
            "word": "sa ",
            "start": 157.528,
            "end": 157.65
          },
          {
            "word": "mère",
            "start": 157.65,
            "end": 158.263
          }
        ]
      },
      {
        "verseStart": 158.263,
        "verseEnd": 160.261,
        "words": [
          {
            "word": "J'vois ",
            "start": 158.263,
            "end": 158.385
          },
          {
            "word": "que ",
            "start": 158.385,
            "end": 158.631
          },
          {
            "word": "des ",
            "start": 158.631,
            "end": 158.794
          },
          {
            "word": "barreaux, ",
            "start": 158.794,
            "end": 159.079
          },
          {
            "word": "des ",
            "start": 159.079,
            "end": 159.201
          },
          {
            "word": "barreaux ",
            "start": 159.201,
            "end": 159.486
          },
          {
            "word": "en ",
            "start": 159.486,
            "end": 159.649
          },
          {
            "word": "fer",
            "start": 159.649,
            "end": 160.261
          }
        ]
      },
      {
        "verseStart": 160.261,
        "verseEnd": 172.91,
        "words": [
          {
            "word": "La ",
            "start": 160.261,
            "end": 160.425
          },
          {
            "word": "bécane ",
            "start": 160.425,
            "end": 160.588
          },
          {
            "word": "crie ",
            "start": 160.588,
            "end": 160.791
          },
          {
            "word": "et ",
            "start": 160.791,
            "end": 161.201
          },
          {
            "word": "j'sors ",
            "start": 161.201,
            "end": 161.444
          },
          {
            "word": "de ",
            "start": 161.444,
            "end": 161.688
          },
          {
            "word": "l'enfer ",
            "start": 161.688,
            "end": 163.236
          },
          {
            "word": "sur ",
            "start": 163.236,
            "end": 163.4
          },
          {
            "word": "un ",
            "start": 163.4,
            "end": 163.608
          },
          {
            "word": "gros ",
            "start": 163.608,
            "end": 163.974
          },
          {
            "word": "fer, ",
            "start": 163.974,
            "end": 164.421
          },
          {
            "word": "bah ",
            "start": 164.421,
            "end": 164.664
          },
          {
            "word": "ouais, ",
            "start": 164.664,
            "end": 165.32
          },
          {
            "word": "bah ",
            "start": 165.32,
            "end": 165.563
          },
          {
            "word": "ouais",
            "start": 165.563,
            "end": 172.91
          }
        ]
      },
      {
        "verseStart": 172.91,
        "verseEnd": 175.815,
        "words": [
          {
            "word": "Bah ",
            "start": 172.91,
            "end": 173.075
          },
          {
            "word": "ouais, ",
            "start": 173.075,
            "end": 173.572
          },
          {
            "word": "bah ",
            "start": 173.572,
            "end": 173.815
          },
          {
            "word": "ouais",
            "start": 173.815,
            "end": 0
          }
        ]
      }
    ],
    "subtitle": "🇫🇷 ● en attendant, écoute cette pépite ● 🇫🇷"
  },
  "Gabrielle - 5 fine frøkner.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 11.663,
        "verseEnd": 15.4,
        "words": [
          {
            "word": "Åh ",
            "start": 11.663,
            "end": 11.907
          },
          {
            "word": "hosianna, ",
            "start": 11.907,
            "end": 13.458
          },
          {
            "word": "Annotate ",
            "start": 13.458,
            "end": 13.579
          },
          {
            "word": "Hevenu ",
            "start": 13.579,
            "end": 14.28
          },
          {
            "word": "shalom",
            "start": 14.28,
            "end": 15.4
          }
        ]
      },
      {
        "verseStart": 15.4,
        "verseEnd": 19.322,
        "words": [
          {
            "word": "Fem ",
            "start": 15.4,
            "end": 15.85
          },
          {
            "word": "fine ",
            "start": 15.85,
            "end": 16.338
          },
          {
            "word": "frøkner ",
            "start": 16.338,
            "end": 17.602
          },
          {
            "word": "ska ",
            "start": 17.602,
            "end": 17.848
          },
          {
            "word": "aldri ",
            "start": 17.848,
            "end": 18.465
          },
          {
            "word": "dra ",
            "start": 18.465,
            "end": 18.751
          },
          {
            "word": "hjem",
            "start": 18.751,
            "end": 19.322
          }
        ]
      },
      {
        "verseStart": 19.322,
        "verseEnd": 22.647,
        "words": [
          {
            "word": "Lyden ",
            "start": 19.322,
            "end": 20.098
          },
          {
            "word": "av ",
            "start": 20.098,
            "end": 20.342
          },
          {
            "word": "noe ",
            "start": 20.342,
            "end": 21.075
          },
          {
            "word": "som ",
            "start": 21.075,
            "end": 21.323
          },
          {
            "word": "slipper ",
            "start": 21.323,
            "end": 21.855
          },
          {
            "word": "oss ",
            "start": 21.855,
            "end": 22.099
          },
          {
            "word": "fri",
            "start": 22.099,
            "end": 22.647
          }
        ]
      },
      {
        "verseStart": 22.647,
        "verseEnd": 27.673,
        "words": [
          {
            "word": "Vi ",
            "start": 22.647,
            "end": 22.854
          },
          {
            "word": "har'sje ",
            "start": 22.854,
            "end": 23.344
          },
          {
            "word": "penger ",
            "start": 23.344,
            "end": 23.874
          },
          {
            "word": "men ",
            "start": 23.874,
            "end": 24.12
          },
          {
            "word": "vi ",
            "start": 24.12,
            "end": 24.365
          },
          {
            "word": "eier ",
            "start": 24.365,
            "end": 24.813
          },
          {
            "word": "allting",
            "start": 24.813,
            "end": 27.673
          }
        ]
      },
      {
        "verseStart": 27.673,
        "verseEnd": 31.782,
        "words": [
          {
            "word": "Å ",
            "start": 27.673,
            "end": 27.796
          },
          {
            "word": "vi ",
            "start": 27.796,
            "end": 27.88
          },
          {
            "word": "trenger ",
            "start": 27.88,
            "end": 28.247
          },
          {
            "word": "ikke ",
            "start": 28.247,
            "end": 28.37
          },
          {
            "word": "verden, ",
            "start": 28.37,
            "end": 29.835
          },
          {
            "word": "for ",
            "start": 29.835,
            "end": 29.944
          },
          {
            "word": "meg ",
            "start": 29.944,
            "end": 30.029
          },
          {
            "word": "og ",
            "start": 30.029,
            "end": 30.153
          },
          {
            "word": "deg ",
            "start": 30.153,
            "end": 30.234
          },
          {
            "word": "e ",
            "start": 30.234,
            "end": 30.764
          },
          {
            "word": "verden",
            "start": 30.764,
            "end": 31.782
          }
        ]
      },
      {
        "verseStart": 31.782,
        "verseEnd": 35.338,
        "words": [
          {
            "word": "Vi ",
            "start": 31.782,
            "end": 31.904
          },
          {
            "word": "trenger ",
            "start": 31.904,
            "end": 31.986
          },
          {
            "word": "ikke ",
            "start": 31.986,
            "end": 32.068
          },
          {
            "word": "verden, ",
            "start": 32.068,
            "end": 33.702
          },
          {
            "word": "for ",
            "start": 33.702,
            "end": 33.824
          },
          {
            "word": "meg ",
            "start": 33.824,
            "end": 33.905
          },
          {
            "word": "og ",
            "start": 33.905,
            "end": 34.028
          },
          {
            "word": "deg ",
            "start": 34.028,
            "end": 34.11
          },
          {
            "word": "e ",
            "start": 34.11,
            "end": 34.234
          },
          {
            "word": "verden",
            "start": 34.234,
            "end": 35.338
          }
        ]
      },
      {
        "verseStart": 35.338,
        "verseEnd": 38.563,
        "words": [
          {
            "word": "Lyden ",
            "start": 35.338,
            "end": 36.113
          },
          {
            "word": "av ",
            "start": 36.113,
            "end": 36.318
          },
          {
            "word": "noe ",
            "start": 36.318,
            "end": 37.013
          },
          {
            "word": "som ",
            "start": 37.013,
            "end": 37.258
          },
          {
            "word": "slipper ",
            "start": 37.258,
            "end": 37.543
          },
          {
            "word": "oss ",
            "start": 37.543,
            "end": 37.904
          },
          {
            "word": "fri",
            "start": 37.904,
            "end": 38.563
          }
        ]
      },
      {
        "verseStart": 38.563,
        "verseEnd": 43.342,
        "words": [
          {
            "word": "Vi ",
            "start": 38.563,
            "end": 39.063
          },
          {
            "word": "har'sje ",
            "start": 39.063,
            "end": 39.269
          },
          {
            "word": "penger ",
            "start": 39.269,
            "end": 39.472
          },
          {
            "word": "men ",
            "start": 39.472,
            "end": 40.048
          },
          {
            "word": "vi ",
            "start": 40.048,
            "end": 40.292
          },
          {
            "word": "eier ",
            "start": 40.292,
            "end": 40.824
          },
          {
            "word": "allting",
            "start": 40.824,
            "end": 43.342
          }
        ]
      },
      {
        "verseStart": 43.342,
        "verseEnd": 46.663,
        "words": [
          {
            "word": "Du ",
            "start": 43.342,
            "end": 43.836
          },
          {
            "word": "får ",
            "start": 43.836,
            "end": 44.37
          },
          {
            "word": "meg ",
            "start": 44.37,
            "end": 44.899
          },
          {
            "word": "til ",
            "start": 44.899,
            "end": 45.144
          },
          {
            "word": "å ",
            "start": 45.144,
            "end": 45.401
          },
          {
            "word": "kjøre ",
            "start": 45.401,
            "end": 45.89
          },
          {
            "word": "meg ",
            "start": 45.89,
            "end": 46.176
          },
          {
            "word": "opp",
            "start": 46.176,
            "end": 46.663
          }
        ]
      },
      {
        "verseStart": 46.663,
        "verseEnd": 51.35,
        "words": [
          {
            "word": "Det ",
            "start": 46.663,
            "end": 46.826
          },
          {
            "word": "e ",
            "start": 46.826,
            "end": 46.949
          },
          {
            "word": "ingenting ",
            "start": 46.949,
            "end": 47.846
          },
          {
            "word": "som ",
            "start": 47.846,
            "end": 48.05
          },
          {
            "word": "kan ",
            "start": 48.05,
            "end": 48.333
          },
          {
            "word": "kjøre ",
            "start": 48.333,
            "end": 48.863
          },
          {
            "word": "meg ",
            "start": 48.863,
            "end": 49.392
          },
          {
            "word": "ned",
            "start": 49.392,
            "end": 51.35
          }
        ]
      },
      {
        "verseStart": 51.35,
        "verseEnd": 54.656,
        "words": [
          {
            "word": "Du ",
            "start": 51.35,
            "end": 51.882
          },
          {
            "word": "får ",
            "start": 51.882,
            "end": 52.423
          },
          {
            "word": "alt ",
            "start": 52.423,
            "end": 52.954
          },
          {
            "word": "til ",
            "start": 52.954,
            "end": 53.189
          },
          {
            "word": "å ",
            "start": 53.189,
            "end": 53.434
          },
          {
            "word": "sprenge ",
            "start": 53.434,
            "end": 53.921
          },
          {
            "word": "i ",
            "start": 53.921,
            "end": 54.167
          },
          {
            "word": "kok",
            "start": 54.167,
            "end": 54.656
          }
        ]
      },
      {
        "verseStart": 54.656,
        "verseEnd": 59.435,
        "words": [
          {
            "word": "D ",
            "start": 54.656,
            "end": 54.779
          },
          {
            "word": "e ",
            "start": 54.779,
            "end": 54.944
          },
          {
            "word": "ingen ",
            "start": 54.944,
            "end": 55.435
          },
          {
            "word": "andre ",
            "start": 55.435,
            "end": 55.883
          },
          {
            "word": "eg ",
            "start": 55.883,
            "end": 56.006
          },
          {
            "word": "heller ",
            "start": 56.006,
            "end": 56.371
          },
          {
            "word": "gjør ",
            "start": 56.371,
            "end": 56.615
          },
          {
            "word": "det ",
            "start": 56.615,
            "end": 56.859
          },
          {
            "word": "her ",
            "start": 56.859,
            "end": 57.395
          },
          {
            "word": "med",
            "start": 57.395,
            "end": 59.435
          }
        ]
      },
      {
        "verseStart": 59.435,
        "verseEnd": 62.824,
        "words": [
          {
            "word": "Fem ",
            "start": 59.435,
            "end": 59.888
          },
          {
            "word": "fine ",
            "start": 59.888,
            "end": 60.378
          },
          {
            "word": "frøkner ",
            "start": 60.378,
            "end": 60.896
          },
          {
            "word": "oppi ",
            "start": 60.896,
            "end": 61.385
          },
          {
            "word": "klubben, ",
            "start": 61.385,
            "end": 61.916
          },
          {
            "word": "vi ",
            "start": 61.916,
            "end": 62.329
          },
          {
            "word": "befaler",
            "start": 62.329,
            "end": 62.824
          }
        ]
      },
      {
        "verseStart": 62.824,
        "verseEnd": 66.656,
        "words": [
          {
            "word": "Sku ",
            "start": 62.824,
            "end": 63.068
          },
          {
            "word": "det ",
            "start": 63.068,
            "end": 63.353
          },
          {
            "word": "helt ",
            "start": 63.353,
            "end": 63.883
          },
          {
            "word": "opp ",
            "start": 63.883,
            "end": 64.128
          },
          {
            "word": "i ",
            "start": 64.128,
            "end": 64.374
          },
          {
            "word": "himmelen",
            "start": 64.374,
            "end": 66.656
          }
        ]
      },
      {
        "verseStart": 66.656,
        "verseEnd": 70.899,
        "words": [
          {
            "word": "Om ",
            "start": 66.656,
            "end": 66.904
          },
          {
            "word": "det ",
            "start": 66.904,
            "end": 67.151
          },
          {
            "word": "e ",
            "start": 67.151,
            "end": 67.398
          },
          {
            "word": "fem ",
            "start": 67.398,
            "end": 67.886
          },
          {
            "word": "fine ",
            "start": 67.886,
            "end": 68.415
          },
          {
            "word": "fyrer ",
            "start": 68.415,
            "end": 68.854
          },
          {
            "word": "spiller ",
            "start": 68.854,
            "end": 69.384
          },
          {
            "word": "ingen ",
            "start": 69.384,
            "end": 69.834
          },
          {
            "word": "rolle ",
            "start": 69.834,
            "end": 70.449
          },
          {
            "word": "på ",
            "start": 70.449,
            "end": 70.654
          },
          {
            "word": "det",
            "start": 70.654,
            "end": 70.899
          }
        ]
      },
      {
        "verseStart": 70.899,
        "verseEnd": 75.365,
        "words": [
          {
            "word": "Ingen ",
            "start": 70.899,
            "end": 71.358
          },
          {
            "word": "andre ",
            "start": 71.358,
            "end": 71.646
          },
          {
            "word": "eg ",
            "start": 71.646,
            "end": 71.89
          },
          {
            "word": "heller ",
            "start": 71.89,
            "end": 72.419
          },
          {
            "word": "gjør ",
            "start": 72.419,
            "end": 72.663
          },
          {
            "word": "det ",
            "start": 72.663,
            "end": 72.908
          },
          {
            "word": "her ",
            "start": 72.908,
            "end": 73.4
          },
          {
            "word": "med",
            "start": 73.4,
            "end": 75.365
          }
        ]
      },
      {
        "verseStart": 75.365,
        "verseEnd": 83.778,
        "words": [
          {
            "word": "Send ",
            "start": 75.365,
            "end": 75.731
          },
          {
            "word": "meg ",
            "start": 75.731,
            "end": 76.057
          },
          {
            "word": "den ",
            "start": 76.057,
            "end": 76.382
          },
          {
            "word": "derre ",
            "start": 76.382,
            "end": 77.118
          },
          {
            "word": "du ",
            "start": 77.118,
            "end": 77.404
          },
          {
            "word": "vet ",
            "start": 77.404,
            "end": 77.689
          },
          {
            "word": "som ",
            "start": 77.689,
            "end": 78.056
          },
          {
            "word": "får ",
            "start": 78.056,
            "end": 78.383
          },
          {
            "word": "oss ",
            "start": 78.383,
            "end": 78.713
          },
          {
            "word": "til ",
            "start": 78.713,
            "end": 79.038
          },
          {
            "word": "å ",
            "start": 79.038,
            "end": 79.322
          },
          {
            "word": "kjenne ",
            "start": 79.322,
            "end": 80.054
          },
          {
            "word": "det ",
            "start": 80.054,
            "end": 80.34
          },
          {
            "word": "brenner ",
            "start": 80.34,
            "end": 81.032
          },
          {
            "word": "i ",
            "start": 81.032,
            "end": 81.277
          },
          {
            "word": "hele ",
            "start": 81.277,
            "end": 81.901
          },
          {
            "word": "vår ",
            "start": 81.901,
            "end": 82.105
          },
          {
            "word": "kropp",
            "start": 82.105,
            "end": 83.778
          }
        ]
      },
      {
        "verseStart": 83.778,
        "verseEnd": 91.255,
        "words": [
          {
            "word": "Det ",
            "start": 83.778,
            "end": 84.049
          },
          {
            "word": "e ",
            "start": 84.049,
            "end": 84.215
          },
          {
            "word": "som ",
            "start": 84.215,
            "end": 84.346
          },
          {
            "word": "å ",
            "start": 84.346,
            "end": 84.551
          },
          {
            "word": "fly ",
            "start": 84.551,
            "end": 84.717
          },
          {
            "word": "over ",
            "start": 84.717,
            "end": 84.884
          },
          {
            "word": "hele ",
            "start": 84.884,
            "end": 85.047
          },
          {
            "word": "vår ",
            "start": 85.047,
            "end": 85.251
          },
          {
            "word": "by, ",
            "start": 85.251,
            "end": 85.535
          },
          {
            "word": "denne ",
            "start": 85.535,
            "end": 85.702
          },
          {
            "word": "sangen ",
            "start": 85.702,
            "end": 86.069
          },
          {
            "word": "va ",
            "start": 86.069,
            "end": 86.272
          },
          {
            "word": "fet ",
            "start": 86.272,
            "end": 86.477
          },
          {
            "word": "så ",
            "start": 86.477,
            "end": 86.685
          },
          {
            "word": "vi ",
            "start": 86.685,
            "end": 86.887
          },
          {
            "word": "satt ",
            "start": 86.887,
            "end": 87.051
          },
          {
            "word": "an ",
            "start": 87.051,
            "end": 87.215
          },
          {
            "word": "på ",
            "start": 87.215,
            "end": 87.582
          },
          {
            "word": "ny?, ",
            "start": 87.582,
            "end": 88.04
          },
          {
            "word": "Clubbidubbin, ",
            "start": 88.04,
            "end": 89.483
          },
          {
            "word": "mine ",
            "start": 89.483,
            "end": 89.688
          },
          {
            "word": "damer ",
            "start": 89.688,
            "end": 90.062
          },
          {
            "word": "e ",
            "start": 90.062,
            "end": 90.225
          },
          {
            "word": "så ",
            "start": 90.225,
            "end": 90.306
          },
          {
            "word": "stunning",
            "start": 90.306,
            "end": 91.255
          }
        ]
      },
      {
        "verseStart": 91.255,
        "verseEnd": 94.582,
        "words": [
          {
            "word": "Kanskje ",
            "start": 91.255,
            "end": 92.036
          },
          {
            "word": "vi ",
            "start": 92.036,
            "end": 92.325
          },
          {
            "word": "e ",
            "start": 92.325,
            "end": 92.662
          },
          {
            "word": "litt ",
            "start": 92.662,
            "end": 93.272
          },
          {
            "word": "ufyslige",
            "start": 93.272,
            "end": 94.582
          }
        ]
      },
      {
        "verseStart": 94.582,
        "verseEnd": 99.42,
        "words": [
          {
            "word": "Men ",
            "start": 94.582,
            "end": 94.869
          },
          {
            "word": "ka ",
            "start": 94.869,
            "end": 95.113
          },
          {
            "word": "gjør ",
            "start": 95.113,
            "end": 95.403
          },
          {
            "word": "det ",
            "start": 95.403,
            "end": 95.687
          },
          {
            "word": "når ",
            "start": 95.687,
            "end": 95.931
          },
          {
            "word": "det'sje ",
            "start": 95.931,
            "end": 96.422
          },
          {
            "word": "lenger ",
            "start": 96.422,
            "end": 96.667
          },
          {
            "word": "e ",
            "start": 96.667,
            "end": 97.29
          },
          {
            "word": "dag",
            "start": 97.29,
            "end": 99.42
          }
        ]
      },
      {
        "verseStart": 99.42,
        "verseEnd": 102.715,
        "words": [
          {
            "word": "Fem ",
            "start": 99.42,
            "end": 99.953
          },
          {
            "word": "fine ",
            "start": 99.953,
            "end": 100.396
          },
          {
            "word": "frøkner, ",
            "start": 100.396,
            "end": 101.372
          },
          {
            "word": "tre ",
            "start": 101.372,
            "end": 101.617
          },
          {
            "word": "på ",
            "start": 101.617,
            "end": 101.901
          },
          {
            "word": "en ",
            "start": 101.901,
            "end": 102.186
          },
          {
            "word": "rad",
            "start": 102.186,
            "end": 102.715
          }
        ]
      },
      {
        "verseStart": 102.715,
        "verseEnd": 107.381,
        "words": [
          {
            "word": "Dem ",
            "start": 102.715,
            "end": 102.96
          },
          {
            "word": "står ",
            "start": 102.96,
            "end": 103.165
          },
          {
            "word": "aleine ",
            "start": 103.165,
            "end": 103.817
          },
          {
            "word": "men ",
            "start": 103.817,
            "end": 104.145
          },
          {
            "word": "vi ",
            "start": 104.145,
            "end": 104.392
          },
          {
            "word": "gjør ",
            "start": 104.392,
            "end": 104.636
          },
          {
            "word": "det ",
            "start": 104.636,
            "end": 104.889
          },
          {
            "word": "ilag",
            "start": 104.889,
            "end": 107.381
          }
        ]
      },
      {
        "verseStart": 107.381,
        "verseEnd": 110.726,
        "words": [
          {
            "word": "Du ",
            "start": 107.381,
            "end": 107.872
          },
          {
            "word": "får ",
            "start": 107.872,
            "end": 108.385
          },
          {
            "word": "meg ",
            "start": 108.385,
            "end": 108.914
          },
          {
            "word": "til ",
            "start": 108.914,
            "end": 109.163
          },
          {
            "word": "å ",
            "start": 109.163,
            "end": 109.457
          },
          {
            "word": "kjøre ",
            "start": 109.457,
            "end": 109.907
          },
          {
            "word": "meg ",
            "start": 109.907,
            "end": 110.192
          },
          {
            "word": "opp",
            "start": 110.192,
            "end": 110.726
          }
        ]
      },
      {
        "verseStart": 110.726,
        "verseEnd": 115.361,
        "words": [
          {
            "word": "Det ",
            "start": 110.726,
            "end": 110.931
          },
          {
            "word": "e ",
            "start": 110.931,
            "end": 111.262
          },
          {
            "word": "ingenting ",
            "start": 111.262,
            "end": 111.88
          },
          {
            "word": "som ",
            "start": 111.88,
            "end": 112.127
          },
          {
            "word": "kan ",
            "start": 112.127,
            "end": 112.414
          },
          {
            "word": "kjøre ",
            "start": 112.414,
            "end": 112.865
          },
          {
            "word": "meg ",
            "start": 112.865,
            "end": 113.402
          },
          {
            "word": "ned",
            "start": 113.402,
            "end": 115.361
          }
        ]
      },
      {
        "verseStart": 115.361,
        "verseEnd": 118.66,
        "words": [
          {
            "word": "Du ",
            "start": 115.361,
            "end": 115.854
          },
          {
            "word": "får ",
            "start": 115.854,
            "end": 116.4
          },
          {
            "word": "alt ",
            "start": 116.4,
            "end": 116.901
          },
          {
            "word": "til ",
            "start": 116.901,
            "end": 117.147
          },
          {
            "word": "å ",
            "start": 117.147,
            "end": 117.433
          },
          {
            "word": "sprenge ",
            "start": 117.433,
            "end": 117.927
          },
          {
            "word": "i ",
            "start": 117.927,
            "end": 118.212
          },
          {
            "word": "kok",
            "start": 118.212,
            "end": 118.66
          }
        ]
      },
      {
        "verseStart": 118.66,
        "verseEnd": 123.428,
        "words": [
          {
            "word": "D ",
            "start": 118.66,
            "end": 118.741
          },
          {
            "word": "e ",
            "start": 118.741,
            "end": 118.947
          },
          {
            "word": "ingen ",
            "start": 118.947,
            "end": 119.411
          },
          {
            "word": "andre ",
            "start": 119.411,
            "end": 119.819
          },
          {
            "word": "eg ",
            "start": 119.819,
            "end": 119.986
          },
          {
            "word": "heller ",
            "start": 119.986,
            "end": 120.4
          },
          {
            "word": "gjør ",
            "start": 120.4,
            "end": 120.647
          },
          {
            "word": "det ",
            "start": 120.647,
            "end": 120.892
          },
          {
            "word": "her ",
            "start": 120.892,
            "end": 121.428
          },
          {
            "word": "med",
            "start": 121.428,
            "end": 123.428
          }
        ]
      },
      {
        "verseStart": 123.428,
        "verseEnd": 126.694,
        "words": [
          {
            "word": "Fem ",
            "start": 123.428,
            "end": 123.885
          },
          {
            "word": "fine ",
            "start": 123.885,
            "end": 124.394
          },
          {
            "word": "frøkner ",
            "start": 124.394,
            "end": 124.888
          },
          {
            "word": "oppi ",
            "start": 124.888,
            "end": 125.417
          },
          {
            "word": "klubben, ",
            "start": 125.417,
            "end": 125.867
          },
          {
            "word": "vi ",
            "start": 125.867,
            "end": 126.111
          },
          {
            "word": "befaler",
            "start": 126.111,
            "end": 126.694
          }
        ]
      },
      {
        "verseStart": 126.694,
        "verseEnd": 130.647,
        "words": [
          {
            "word": "Sku ",
            "start": 126.694,
            "end": 126.899
          },
          {
            "word": "det ",
            "start": 126.899,
            "end": 127.308
          },
          {
            "word": "helt ",
            "start": 127.308,
            "end": 127.471
          },
          {
            "word": "opp ",
            "start": 127.471,
            "end": 128.089
          },
          {
            "word": "i ",
            "start": 128.089,
            "end": 128.334
          },
          {
            "word": "himmelen",
            "start": 128.334,
            "end": 130.647
          }
        ]
      },
      {
        "verseStart": 130.647,
        "verseEnd": 134.867,
        "words": [
          {
            "word": "Om ",
            "start": 130.647,
            "end": 130.89
          },
          {
            "word": "det ",
            "start": 130.89,
            "end": 131.136
          },
          {
            "word": "e ",
            "start": 131.136,
            "end": 131.385
          },
          {
            "word": "fem ",
            "start": 131.385,
            "end": 131.873
          },
          {
            "word": "fine ",
            "start": 131.873,
            "end": 132.368
          },
          {
            "word": "fyrer ",
            "start": 132.368,
            "end": 132.653
          },
          {
            "word": "spiller ",
            "start": 132.653,
            "end": 133.186
          },
          {
            "word": "ingen ",
            "start": 133.186,
            "end": 133.845
          },
          {
            "word": "rolle ",
            "start": 133.845,
            "end": 134.092
          },
          {
            "word": "på ",
            "start": 134.092,
            "end": 134.541
          },
          {
            "word": "det",
            "start": 134.541,
            "end": 134.867
          }
        ]
      },
      {
        "verseStart": 134.867,
        "verseEnd": 139.337,
        "words": [
          {
            "word": "Ingen ",
            "start": 134.867,
            "end": 135.111
          },
          {
            "word": "andre ",
            "start": 135.111,
            "end": 135.566
          },
          {
            "word": "eg ",
            "start": 135.566,
            "end": 135.813
          },
          {
            "word": "heller ",
            "start": 135.813,
            "end": 136.343
          },
          {
            "word": "gjør ",
            "start": 136.343,
            "end": 136.628
          },
          {
            "word": "det ",
            "start": 136.628,
            "end": 136.873
          },
          {
            "word": "her ",
            "start": 136.873,
            "end": 137.368
          },
          {
            "word": "med",
            "start": 137.368,
            "end": 139.337
          }
        ]
      },
      {
        "verseStart": 139.337,
        "verseEnd": 142.655,
        "words": [
          {
            "word": "Fem ",
            "start": 139.337,
            "end": 139.87
          },
          {
            "word": "fine ",
            "start": 139.87,
            "end": 140.364
          },
          {
            "word": "frøkner ",
            "start": 140.364,
            "end": 140.895
          },
          {
            "word": "oppi ",
            "start": 140.895,
            "end": 141.426
          },
          {
            "word": "klubben, ",
            "start": 141.426,
            "end": 141.873
          },
          {
            "word": "vi ",
            "start": 141.873,
            "end": 142.122
          },
          {
            "word": "befaler",
            "start": 142.122,
            "end": 142.655
          }
        ]
      },
      {
        "verseStart": 142.655,
        "verseEnd": 146.581,
        "words": [
          {
            "word": "Sku ",
            "start": 142.655,
            "end": 142.982
          },
          {
            "word": "det ",
            "start": 142.982,
            "end": 143.348
          },
          {
            "word": "helt ",
            "start": 143.348,
            "end": 143.836
          },
          {
            "word": "opp ",
            "start": 143.836,
            "end": 144.085
          },
          {
            "word": "i ",
            "start": 144.085,
            "end": 144.373
          },
          {
            "word": "himmelen",
            "start": 144.373,
            "end": 146.581
          }
        ]
      },
      {
        "verseStart": 146.581,
        "verseEnd": 150.911,
        "words": [
          {
            "word": "Om ",
            "start": 146.581,
            "end": 146.867
          },
          {
            "word": "det ",
            "start": 146.867,
            "end": 147.152
          },
          {
            "word": "e ",
            "start": 147.152,
            "end": 147.402
          },
          {
            "word": "fem ",
            "start": 147.402,
            "end": 147.894
          },
          {
            "word": "fine ",
            "start": 147.894,
            "end": 148.388
          },
          {
            "word": "fyrer ",
            "start": 148.388,
            "end": 148.904
          },
          {
            "word": "spiller ",
            "start": 148.904,
            "end": 149.152
          },
          {
            "word": "ingen ",
            "start": 149.152,
            "end": 149.767
          },
          {
            "word": "rolle ",
            "start": 149.767,
            "end": 150.339
          },
          {
            "word": "på ",
            "start": 150.339,
            "end": 150.625
          },
          {
            "word": "det",
            "start": 150.625,
            "end": 150.911
          }
        ]
      },
      {
        "verseStart": 150.911,
        "verseEnd": 155.374,
        "words": [
          {
            "word": "Ingen ",
            "start": 150.911,
            "end": 151.325
          },
          {
            "word": "andre ",
            "start": 151.325,
            "end": 151.609
          },
          {
            "word": "eg ",
            "start": 151.609,
            "end": 151.896
          },
          {
            "word": "heller ",
            "start": 151.896,
            "end": 152.385
          },
          {
            "word": "gjør ",
            "start": 152.385,
            "end": 152.633
          },
          {
            "word": "det ",
            "start": 152.633,
            "end": 152.92
          },
          {
            "word": "her ",
            "start": 152.92,
            "end": 153.373
          },
          {
            "word": "med",
            "start": 153.373,
            "end": 155.374
          }
        ]
      },
      {
        "verseStart": 155.374,
        "verseEnd": 158.629,
        "words": [
          {
            "word": "Fem ",
            "start": 155.374,
            "end": 155.867
          },
          {
            "word": "fine ",
            "start": 155.867,
            "end": 156.401
          },
          {
            "word": "frøkner, ",
            "start": 156.401,
            "end": 157.344
          },
          {
            "word": "tre ",
            "start": 157.344,
            "end": 157.635
          },
          {
            "word": "på ",
            "start": 157.635,
            "end": 157.886
          },
          {
            "word": "en ",
            "start": 157.886,
            "end": 158.175
          },
          {
            "word": "rad",
            "start": 158.175,
            "end": 158.629
          }
        ]
      },
      {
        "verseStart": 158.629,
        "verseEnd": 163.362,
        "words": [
          {
            "word": "Dem ",
            "start": 158.629,
            "end": 158.874
          },
          {
            "word": "står ",
            "start": 158.874,
            "end": 159.124
          },
          {
            "word": "aleine ",
            "start": 159.124,
            "end": 159.911
          },
          {
            "word": "men ",
            "start": 159.911,
            "end": 160.16
          },
          {
            "word": "vi ",
            "start": 160.16,
            "end": 160.406
          },
          {
            "word": "gjør ",
            "start": 160.406,
            "end": 160.653
          },
          {
            "word": "det ",
            "start": 160.653,
            "end": 160.897
          },
          {
            "word": "ilag",
            "start": 160.897,
            "end": 163.362
          }
        ]
      },
      {
        "verseStart": 163.362,
        "verseEnd": 166.697,
        "words": [
          {
            "word": "Du ",
            "start": 163.362,
            "end": 163.854
          },
          {
            "word": "får ",
            "start": 163.854,
            "end": 164.428
          },
          {
            "word": "meg ",
            "start": 164.428,
            "end": 164.921
          },
          {
            "word": "til ",
            "start": 164.921,
            "end": 165.171
          },
          {
            "word": "å ",
            "start": 165.171,
            "end": 165.456
          },
          {
            "word": "kjøre ",
            "start": 165.456,
            "end": 165.897
          },
          {
            "word": "meg ",
            "start": 165.897,
            "end": 166.2
          },
          {
            "word": "opp",
            "start": 166.2,
            "end": 166.697
          }
        ]
      },
      {
        "verseStart": 166.697,
        "verseEnd": 171.344,
        "words": [
          {
            "word": "Det ",
            "start": 166.697,
            "end": 166.909
          },
          {
            "word": "e ",
            "start": 166.909,
            "end": 167.167
          },
          {
            "word": "ingenting ",
            "start": 167.167,
            "end": 167.862
          },
          {
            "word": "som ",
            "start": 167.862,
            "end": 168.148
          },
          {
            "word": "kan ",
            "start": 168.148,
            "end": 168.393
          },
          {
            "word": "kjøre ",
            "start": 168.393,
            "end": 168.887
          },
          {
            "word": "meg ",
            "start": 168.887,
            "end": 169.376
          },
          {
            "word": "ned",
            "start": 169.376,
            "end": 171.344
          }
        ]
      },
      {
        "verseStart": 171.344,
        "verseEnd": 174.673,
        "words": [
          {
            "word": "Du ",
            "start": 171.344,
            "end": 171.842
          },
          {
            "word": "får ",
            "start": 171.842,
            "end": 172.377
          },
          {
            "word": "alt ",
            "start": 172.377,
            "end": 172.909
          },
          {
            "word": "til ",
            "start": 172.909,
            "end": 173.153
          },
          {
            "word": "å ",
            "start": 173.153,
            "end": 173.441
          },
          {
            "word": "sprenge ",
            "start": 173.441,
            "end": 173.936
          },
          {
            "word": "i ",
            "start": 173.936,
            "end": 174.146
          },
          {
            "word": "kok",
            "start": 174.146,
            "end": 174.673
          }
        ]
      },
      {
        "verseStart": 174.673,
        "verseEnd": 179.367,
        "words": [
          {
            "word": "D ",
            "start": 174.673,
            "end": 174.8
          },
          {
            "word": "e ",
            "start": 174.8,
            "end": 174.965
          },
          {
            "word": "ingen ",
            "start": 174.965,
            "end": 175.376
          },
          {
            "word": "andre ",
            "start": 175.376,
            "end": 175.87
          },
          {
            "word": "eg ",
            "start": 175.87,
            "end": 176.033
          },
          {
            "word": "heller ",
            "start": 176.033,
            "end": 176.364
          },
          {
            "word": "gjør ",
            "start": 176.364,
            "end": 176.655
          },
          {
            "word": "det ",
            "start": 176.655,
            "end": 176.902
          },
          {
            "word": "her ",
            "start": 176.902,
            "end": 177.364
          },
          {
            "word": "med",
            "start": 177.364,
            "end": 179.367
          }
        ]
      },
      {
        "verseStart": 179.367,
        "verseEnd": 182.609,
        "words": [
          {
            "word": "Fem ",
            "start": 179.367,
            "end": 179.898
          },
          {
            "word": "fine ",
            "start": 179.898,
            "end": 180.355
          },
          {
            "word": "frøkner ",
            "start": 180.355,
            "end": 180.847
          },
          {
            "word": "oppi ",
            "start": 180.847,
            "end": 181.378
          },
          {
            "word": "klubben, ",
            "start": 181.378,
            "end": 181.867
          },
          {
            "word": "vi ",
            "start": 181.867,
            "end": 182.074
          },
          {
            "word": "befaler",
            "start": 182.074,
            "end": 182.609
          }
        ]
      },
      {
        "verseStart": 182.609,
        "verseEnd": 186.58,
        "words": [
          {
            "word": "Sku ",
            "start": 182.609,
            "end": 182.914
          },
          {
            "word": "det ",
            "start": 182.914,
            "end": 183.29
          },
          {
            "word": "helt ",
            "start": 183.29,
            "end": 183.504
          },
          {
            "word": "opp ",
            "start": 183.504,
            "end": 184.075
          },
          {
            "word": "i ",
            "start": 184.075,
            "end": 184.328
          },
          {
            "word": "himmelen",
            "start": 184.328,
            "end": 186.58
          }
        ]
      },
      {
        "verseStart": 186.58,
        "verseEnd": 190.927,
        "words": [
          {
            "word": "Om ",
            "start": 186.58,
            "end": 186.864
          },
          {
            "word": "det ",
            "start": 186.864,
            "end": 187.109
          },
          {
            "word": "e ",
            "start": 187.109,
            "end": 187.395
          },
          {
            "word": "fem ",
            "start": 187.395,
            "end": 187.847
          },
          {
            "word": "fine ",
            "start": 187.847,
            "end": 188.376
          },
          {
            "word": "fyrer ",
            "start": 188.376,
            "end": 188.873
          },
          {
            "word": "spiller ",
            "start": 188.873,
            "end": 189.327
          },
          {
            "word": "ingen ",
            "start": 189.327,
            "end": 189.819
          },
          {
            "word": "rolle ",
            "start": 189.819,
            "end": 190.391
          },
          {
            "word": "på ",
            "start": 190.391,
            "end": 190.635
          },
          {
            "word": "det",
            "start": 190.635,
            "end": 190.927
          }
        ]
      },
      {
        "verseStart": 190.927,
        "verseEnd": 195.309,
        "words": [
          {
            "word": "Ingen ",
            "start": 190.927,
            "end": 191.376
          },
          {
            "word": "andre ",
            "start": 191.376,
            "end": 191.621
          },
          {
            "word": "eg ",
            "start": 191.621,
            "end": 191.906
          },
          {
            "word": "heller ",
            "start": 191.906,
            "end": 192.401
          },
          {
            "word": "gjør ",
            "start": 192.401,
            "end": 192.609
          },
          {
            "word": "det ",
            "start": 192.609,
            "end": 192.896
          },
          {
            "word": "her ",
            "start": 192.896,
            "end": 193.345
          },
          {
            "word": "med",
            "start": 193.345,
            "end": 195.309
          }
        ]
      },
      {
        "verseStart": 195.309,
        "verseEnd": 198.668,
        "words": [
          {
            "word": "Fem ",
            "start": 195.309,
            "end": 195.8
          },
          {
            "word": "fine ",
            "start": 195.8,
            "end": 196.333
          },
          {
            "word": "frøkner ",
            "start": 196.333,
            "end": 196.906
          },
          {
            "word": "oppi ",
            "start": 196.906,
            "end": 197.355
          },
          {
            "word": "klubben, ",
            "start": 197.355,
            "end": 197.851
          },
          {
            "word": "vi ",
            "start": 197.851,
            "end": 198.095
          },
          {
            "word": "befaler",
            "start": 198.095,
            "end": 198.668
          }
        ]
      },
      {
        "verseStart": 198.668,
        "verseEnd": 202.59,
        "words": [
          {
            "word": "Sku ",
            "start": 198.668,
            "end": 198.914
          },
          {
            "word": "det ",
            "start": 198.914,
            "end": 199.288
          },
          {
            "word": "helt ",
            "start": 199.288,
            "end": 199.929
          },
          {
            "word": "opp ",
            "start": 199.929,
            "end": 200.172
          },
          {
            "word": "i ",
            "start": 200.172,
            "end": 200.627
          },
          {
            "word": "himmelen",
            "start": 200.627,
            "end": 202.59
          }
        ]
      },
      {
        "verseStart": 202.59,
        "verseEnd": 206.925,
        "words": [
          {
            "word": "Om ",
            "start": 202.59,
            "end": 202.877
          },
          {
            "word": "det ",
            "start": 202.877,
            "end": 203.123
          },
          {
            "word": "e ",
            "start": 203.123,
            "end": 203.408
          },
          {
            "word": "fem ",
            "start": 203.408,
            "end": 203.857
          },
          {
            "word": "fine ",
            "start": 203.857,
            "end": 204.389
          },
          {
            "word": "fyrer ",
            "start": 204.389,
            "end": 204.879
          },
          {
            "word": "spiller ",
            "start": 204.879,
            "end": 205.369
          },
          {
            "word": "ingen ",
            "start": 205.369,
            "end": 205.654
          },
          {
            "word": "rolle ",
            "start": 205.654,
            "end": 206.391
          },
          {
            "word": "på ",
            "start": 206.391,
            "end": 206.636
          },
          {
            "word": "det",
            "start": 206.636,
            "end": 206.925
          }
        ]
      },
      {
        "verseStart": 206.925,
        "verseEnd": 211.388,
        "words": [
          {
            "word": "Ingen ",
            "start": 206.925,
            "end": 207.331
          },
          {
            "word": "andre ",
            "start": 207.331,
            "end": 207.82
          },
          {
            "word": "eg ",
            "start": 207.82,
            "end": 208.025
          },
          {
            "word": "heller ",
            "start": 208.025,
            "end": 208.41
          },
          {
            "word": "gjør ",
            "start": 208.41,
            "end": 208.654
          },
          {
            "word": "det ",
            "start": 208.654,
            "end": 208.898
          },
          {
            "word": "her ",
            "start": 208.898,
            "end": 209.388
          },
          {
            "word": "med",
            "start": 209.388,
            "end": 0
          }
        ]
      }
    ],
    "subtitle": "🇳🇴 ● men i mellomtiden, sjekk ut denne bangeren ● 🇳🇴"
  },
  "Zaterdag.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 25.216,
        "verseEnd": 27.296,
        "words": [
          {
            "word": "Zoterdagavend ",
            "start": 25.216,
            "end": 26.071
          },
          {
            "word": "genne ",
            "start": 26.071,
            "end": 26.235
          },
          {
            "word": "kik ",
            "start": 26.235,
            "end": 26.563
          },
          {
            "word": "in '",
            "start": 26.563,
            "end": 26.728
          },
          {
            "word": "t ",
            "start": 26.728,
            "end": 26.971
          },
          {
            "word": "bad",
            "start": 26.971,
            "end": 27.296
          }
        ]
      },
      {
        "verseStart": 27.296,
        "verseEnd": 29.217,
        "words": [
          {
            "word": "Want ",
            "start": 27.296,
            "end": 27.419
          },
          {
            "word": "er ",
            "start": 27.419,
            "end": 27.623
          },
          {
            "word": "groeie ",
            "start": 27.623,
            "end": 27.826
          },
          {
            "word": "al ",
            "start": 27.826,
            "end": 27.99
          },
          {
            "word": "sjampionne ",
            "start": 27.99,
            "end": 28.152
          },
          {
            "word": "uit ",
            "start": 28.152,
            "end": 28.437
          },
          {
            "word": "me ",
            "start": 28.437,
            "end": 28.725
          },
          {
            "word": "gat",
            "start": 28.725,
            "end": 29.217
          }
        ]
      },
      {
        "verseStart": 29.217,
        "verseEnd": 31.342,
        "words": [
          {
            "word": "Mennen ",
            "start": 29.217,
            "end": 29.422
          },
          {
            "word": "okselgeur ",
            "start": 29.422,
            "end": 29.869
          },
          {
            "word": "is ",
            "start": 29.869,
            "end": 30.441
          },
          {
            "word": "nemie ",
            "start": 30.441,
            "end": 30.567
          },
          {
            "word": "te ",
            "start": 30.567,
            "end": 30.772
          },
          {
            "word": "doen",
            "start": 30.772,
            "end": 31.342
          }
        ]
      },
      {
        "verseStart": 31.342,
        "verseEnd": 33.346,
        "words": [
          {
            "word": "Ik ",
            "start": 31.342,
            "end": 31.464
          },
          {
            "word": "spoat ",
            "start": 31.464,
            "end": 31.668
          },
          {
            "word": "deodorant ",
            "start": 31.668,
            "end": 32.201
          },
          {
            "word": "in ",
            "start": 32.201,
            "end": 32.486
          },
          {
            "word": "elke ",
            "start": 32.486,
            "end": 32.65
          },
          {
            "word": "schoen",
            "start": 32.65,
            "end": 33.346
          }
        ]
      },
      {
        "verseStart": 33.346,
        "verseEnd": 35.471,
        "words": [
          {
            "word": "'",
            "start": 33.346,
            "end": 33.508
          },
          {
            "word": "k ",
            "start": 33.508,
            "end": 33.84
          },
          {
            "word": "Was ",
            "start": 33.84,
            "end": 34.004
          },
          {
            "word": "men ",
            "start": 34.004,
            "end": 34.127
          },
          {
            "word": "hoor ",
            "start": 34.127,
            "end": 34.332
          },
          {
            "word": "want '",
            "start": 34.332,
            "end": 34.536
          },
          {
            "word": "t ",
            "start": 34.536,
            "end": 34.699
          },
          {
            "word": "is ",
            "start": 34.699,
            "end": 34.984
          },
          {
            "word": "wee ",
            "start": 34.984,
            "end": 35.228
          },
          {
            "word": "vettig",
            "start": 35.228,
            "end": 35.471
          }
        ]
      },
      {
        "verseStart": 35.471,
        "verseEnd": 37.688,
        "words": [
          {
            "word": "Ik ",
            "start": 35.471,
            "end": 35.72
          },
          {
            "word": "zin ",
            "start": 35.72,
            "end": 35.845
          },
          {
            "word": "oept ",
            "start": 35.845,
            "end": 36.01
          },
          {
            "word": "uur, ",
            "start": 36.01,
            "end": 36.462
          },
          {
            "word": "twintig ",
            "start": 36.462,
            "end": 36.624
          },
          {
            "word": "uur ",
            "start": 36.624,
            "end": 36.909
          },
          {
            "word": "dertig",
            "start": 36.909,
            "end": 37.688
          }
        ]
      },
      {
        "verseStart": 37.688,
        "verseEnd": 39.816,
        "words": [
          {
            "word": "Da ",
            "start": 37.688,
            "end": 37.932
          },
          {
            "word": "is ",
            "start": 37.932,
            "end": 38.018
          },
          {
            "word": "dus ",
            "start": 38.018,
            "end": 38.183
          },
          {
            "word": "nog ",
            "start": 38.183,
            "end": 38.264
          },
          {
            "word": "taad ",
            "start": 38.264,
            "end": 38.467
          },
          {
            "word": "veu ",
            "start": 38.467,
            "end": 38.711
          },
          {
            "word": "wa ",
            "start": 38.711,
            "end": 38.873
          },
          {
            "word": "puiste ",
            "start": 38.873,
            "end": 39.118
          },
          {
            "word": "uit ",
            "start": 39.118,
            "end": 39.28
          },
          {
            "word": "te ",
            "start": 39.28,
            "end": 39.402
          },
          {
            "word": "pitse",
            "start": 39.402,
            "end": 39.816
          }
        ]
      },
      {
        "verseStart": 39.816,
        "verseEnd": 41.37,
        "words": [
          {
            "word": "En ",
            "start": 39.816,
            "end": 39.979
          },
          {
            "word": "binne ",
            "start": 39.979,
            "end": 40.223
          },
          {
            "word": "het ",
            "start": 40.223,
            "end": 40.347
          },
          {
            "word": "urreke ",
            "start": 40.347,
            "end": 40.718
          },
          {
            "word": "zenne ",
            "start": 40.718,
            "end": 41.084
          },
          {
            "word": "kik ",
            "start": 41.084,
            "end": 41.206
          },
          {
            "word": "ritse",
            "start": 41.206,
            "end": 41.37
          }
        ]
      },
      {
        "verseStart": 41.37,
        "verseEnd": 44.021,
        "words": [
          {
            "word": "Jo ",
            "start": 41.37,
            "end": 42.021
          },
          {
            "word": "zoterdagovend, ",
            "start": 42.021,
            "end": 42.88
          },
          {
            "word": "men ",
            "start": 42.88,
            "end": 43.004
          },
          {
            "word": "hoor ",
            "start": 43.004,
            "end": 43.166
          },
          {
            "word": "in ",
            "start": 43.166,
            "end": 43.289
          },
          {
            "word": "de ",
            "start": 43.289,
            "end": 43.369
          },
          {
            "word": "ploei",
            "start": 43.369,
            "end": 44.021
          }
        ]
      },
      {
        "verseStart": 44.021,
        "verseEnd": 45.889,
        "words": [
          {
            "word": "Op ",
            "start": 44.021,
            "end": 44.143
          },
          {
            "word": "en ",
            "start": 44.143,
            "end": 44.225
          },
          {
            "word": "top ",
            "start": 44.225,
            "end": 44.346
          },
          {
            "word": "in ",
            "start": 44.346,
            "end": 44.711
          },
          {
            "word": "kostum, ",
            "start": 44.711,
            "end": 44.996
          },
          {
            "word": "da ",
            "start": 44.996,
            "end": 45.158
          },
          {
            "word": "zirre ",
            "start": 45.158,
            "end": 45.321
          },
          {
            "word": "zoe",
            "start": 45.321,
            "end": 45.889
          }
        ]
      },
      {
        "verseStart": 45.889,
        "verseEnd": 48.22,
        "words": [
          {
            "word": "Ik ",
            "start": 45.889,
            "end": 46.053
          },
          {
            "word": "zen ",
            "start": 46.053,
            "end": 46.217
          },
          {
            "word": "de ",
            "start": 46.217,
            "end": 46.38
          },
          {
            "word": "playboy, ",
            "start": 46.38,
            "end": 47.111
          },
          {
            "word": "ik ",
            "start": 47.111,
            "end": 47.233
          },
          {
            "word": "weet ",
            "start": 47.233,
            "end": 47.355
          },
          {
            "word": "da ",
            "start": 47.355,
            "end": 47.483
          },
          {
            "word": "van ",
            "start": 47.483,
            "end": 47.607
          },
          {
            "word": "men ",
            "start": 47.607,
            "end": 47.771
          },
          {
            "word": "age",
            "start": 47.771,
            "end": 48.22
          }
        ]
      },
      {
        "verseStart": 48.22,
        "verseEnd": 50.309,
        "words": [
          {
            "word": "Mo ",
            "start": 48.22,
            "end": 48.341
          },
          {
            "word": "over ",
            "start": 48.341,
            "end": 48.505
          },
          {
            "word": "maan ",
            "start": 48.505,
            "end": 48.628
          },
          {
            "word": "witte ",
            "start": 48.628,
            "end": 48.795
          },
          {
            "word": "kase ",
            "start": 48.795,
            "end": 48.917
          },
          {
            "word": "moette ",
            "start": 48.917,
            "end": 49.412
          },
          {
            "word": "ga ",
            "start": 49.412,
            "end": 49.615
          },
          {
            "word": "zwage",
            "start": 49.615,
            "end": 50.309
          }
        ]
      },
      {
        "verseStart": 50.309,
        "verseEnd": 52.264,
        "words": [
          {
            "word": "Ik ",
            "start": 50.309,
            "end": 50.432
          },
          {
            "word": "bewonder ",
            "start": 50.432,
            "end": 50.676
          },
          {
            "word": "nog ",
            "start": 50.676,
            "end": 50.798
          },
          {
            "word": "ne ",
            "start": 50.798,
            "end": 50.921
          },
          {
            "word": "kie ",
            "start": 50.921,
            "end": 51.326
          },
          {
            "word": "mennen ",
            "start": 51.326,
            "end": 51.489
          },
          {
            "word": "age ",
            "start": 51.489,
            "end": 51.734
          },
          {
            "word": "kop",
            "start": 51.734,
            "end": 52.264
          }
        ]
      },
      {
        "verseStart": 52.264,
        "verseEnd": 54.388,
        "words": [
          {
            "word": "Veu ",
            "start": 52.264,
            "end": 52.428
          },
          {
            "word": "te ",
            "start": 52.428,
            "end": 52.55
          },
          {
            "word": "zien ",
            "start": 52.55,
            "end": 52.754
          },
          {
            "word": "is '",
            "start": 52.754,
            "end": 52.881
          },
          {
            "word": "t ",
            "start": 52.881,
            "end": 52.962
          },
          {
            "word": "goe ",
            "start": 52.962,
            "end": 53.084
          },
          {
            "word": "of ",
            "start": 53.084,
            "end": 53.328
          },
          {
            "word": "is '",
            "start": 53.328,
            "end": 53.492
          },
          {
            "word": "t ",
            "start": 53.492,
            "end": 53.818
          },
          {
            "word": "een ",
            "start": 53.818,
            "end": 53.941
          },
          {
            "word": "flop",
            "start": 53.941,
            "end": 54.388
          }
        ]
      },
      {
        "verseStart": 54.388,
        "verseEnd": 56.387,
        "words": [
          {
            "word": "'",
            "start": 54.388,
            "end": 54.55
          },
          {
            "word": "k ",
            "start": 54.55,
            "end": 54.672
          },
          {
            "word": "Zen ",
            "start": 54.672,
            "end": 54.795
          },
          {
            "word": "kleir ",
            "start": 54.795,
            "end": 55.002
          },
          {
            "word": "veu '",
            "start": 55.002,
            "end": 55.126
          },
          {
            "word": "t ",
            "start": 55.126,
            "end": 55.289
          },
          {
            "word": "kafee, ",
            "start": 55.289,
            "end": 55.533
          },
          {
            "word": "dus ",
            "start": 55.533,
            "end": 55.696
          },
          {
            "word": "goe ",
            "start": 55.696,
            "end": 55.94
          },
          {
            "word": "gezind",
            "start": 55.94,
            "end": 56.387
          }
        ]
      },
      {
        "verseStart": 56.387,
        "verseEnd": 58.432,
        "words": [
          {
            "word": "En ",
            "start": 56.387,
            "end": 56.55
          },
          {
            "word": "azzek ",
            "start": 56.55,
            "end": 56.795
          },
          {
            "word": "binnekoom ",
            "start": 56.795,
            "end": 57.043
          },
          {
            "word": "krakik ",
            "start": 57.043,
            "end": 57.41
          },
          {
            "word": "derekt ",
            "start": 57.41,
            "end": 57.696
          },
          {
            "word": "men ",
            "start": 57.696,
            "end": 57.98
          },
          {
            "word": "pint",
            "start": 57.98,
            "end": 58.432
          }
        ]
      },
      {
        "verseStart": 58.432,
        "verseEnd": 60.762,
        "words": [
          {
            "word": "Mo ",
            "start": 58.432,
            "end": 58.594
          },
          {
            "word": "zukte ",
            "start": 58.594,
            "end": 58.922
          },
          {
            "word": "nen ",
            "start": 58.922,
            "end": 59.085
          },
          {
            "word": "Bob ",
            "start": 59.085,
            "end": 59.494
          },
          {
            "word": "mook ",
            "start": 59.494,
            "end": 59.822
          },
          {
            "word": "ik ",
            "start": 59.822,
            "end": 59.943
          },
          {
            "word": "maa ",
            "start": 59.943,
            "end": 60.066
          },
          {
            "word": "uit ",
            "start": 60.066,
            "end": 60.188
          },
          {
            "word": "de ",
            "start": 60.188,
            "end": 60.309
          },
          {
            "word": "voete",
            "start": 60.309,
            "end": 60.762
          }
        ]
      },
      {
        "verseStart": 60.762,
        "verseEnd": 62.721,
        "words": [
          {
            "word": "Ik ",
            "start": 60.762,
            "end": 60.884
          },
          {
            "word": "drink ",
            "start": 60.884,
            "end": 60.966
          },
          {
            "word": "zoterdags ",
            "start": 60.966,
            "end": 61.088
          },
          {
            "word": "liever ",
            "start": 61.088,
            "end": 61.373
          },
          {
            "word": "e ",
            "start": 61.373,
            "end": 61.7
          },
          {
            "word": "stuk ",
            "start": 61.7,
            "end": 61.903
          },
          {
            "word": "in ",
            "start": 61.903,
            "end": 62.067
          },
          {
            "word": "men ",
            "start": 62.067,
            "end": 62.189
          },
          {
            "word": "kloete",
            "start": 62.189,
            "end": 62.721
          }
        ]
      },
      {
        "verseStart": 62.721,
        "verseEnd": 64.68,
        "words": [
          {
            "word": "Bob ",
            "start": 62.721,
            "end": 62.966
          },
          {
            "word": "hie ",
            "start": 62.966,
            "end": 63.089
          },
          {
            "word": "Bob ",
            "start": 63.089,
            "end": 63.294
          },
          {
            "word": "doo, ",
            "start": 63.294,
            "end": 63.783
          },
          {
            "word": "tes ",
            "start": 63.783,
            "end": 63.945
          },
          {
            "word": "allemoo ",
            "start": 63.945,
            "end": 64.272
          },
          {
            "word": "iet ",
            "start": 64.272,
            "end": 64.394
          },
          {
            "word": "vies",
            "start": 64.394,
            "end": 64.68
          }
        ]
      },
      {
        "verseStart": 64.68,
        "verseEnd": 66.521,
        "words": [
          {
            "word": "Azzek ",
            "start": 64.68,
            "end": 65.008
          },
          {
            "word": "oep ",
            "start": 65.008,
            "end": 65.257
          },
          {
            "word": "ne ",
            "start": 65.257,
            "end": 65.42
          },
          {
            "word": "boem ",
            "start": 65.42,
            "end": 65.704
          },
          {
            "word": "peir ",
            "start": 65.704,
            "end": 65.786
          },
          {
            "word": "komek ",
            "start": 65.786,
            "end": 65.907
          },
          {
            "word": "toch ",
            "start": 65.907,
            "end": 66.192
          },
          {
            "word": "oept ",
            "start": 66.192,
            "end": 66.395
          },
          {
            "word": "nies",
            "start": 66.395,
            "end": 66.521
          }
        ]
      },
      {
        "verseStart": 66.521,
        "verseEnd": 69.581,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 66.521,
            "end": 67.668
          },
          {
            "word": "Jupilerajee",
            "start": 67.668,
            "end": 69.581
          }
        ]
      },
      {
        "verseStart": 69.581,
        "verseEnd": 71.428,
        "words": [
          {
            "word": "Welle ",
            "start": 69.581,
            "end": 69.791
          },
          {
            "word": "gon ",
            "start": 69.791,
            "end": 69.913
          },
          {
            "word": "fieste ",
            "start": 69.913,
            "end": 70.035
          },
          {
            "word": "en ",
            "start": 70.035,
            "end": 70.201
          },
          {
            "word": "as ",
            "start": 70.201,
            "end": 70.322
          },
          {
            "word": "da ",
            "start": 70.322,
            "end": 70.484
          },
          {
            "word": "nog ",
            "start": 70.484,
            "end": 70.607
          },
          {
            "word": "ni ",
            "start": 70.607,
            "end": 70.932
          },
          {
            "word": "mag",
            "start": 70.932,
            "end": 71.428
          }
        ]
      },
      {
        "verseStart": 71.428,
        "verseEnd": 73.261,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 71.428,
            "end": 72.163
          },
          {
            "word": "Jupilerajee",
            "start": 72.163,
            "end": 73.261
          }
        ]
      },
      {
        "verseStart": 73.261,
        "verseEnd": 75.39,
        "words": [
          {
            "word": "Want ",
            "start": 73.261,
            "end": 73.424
          },
          {
            "word": "zoterdag ",
            "start": 73.424,
            "end": 73.915
          },
          {
            "word": "is '",
            "start": 73.915,
            "end": 74.366
          },
          {
            "word": "t ",
            "start": 74.366,
            "end": 74.53
          },
          {
            "word": "krapoelekesdag",
            "start": 74.53,
            "end": 75.39
          }
        ]
      },
      {
        "verseStart": 75.39,
        "verseEnd": 77.55,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 75.39,
            "end": 76.246
          },
          {
            "word": "Jupilerajee",
            "start": 76.246,
            "end": 77.55
          }
        ]
      },
      {
        "verseStart": 77.55,
        "verseEnd": 79.634,
        "words": [
          {
            "word": "Welle ",
            "start": 77.55,
            "end": 77.753
          },
          {
            "word": "gon ",
            "start": 77.753,
            "end": 77.875
          },
          {
            "word": "fieste ",
            "start": 77.875,
            "end": 78.043
          },
          {
            "word": "en ",
            "start": 78.043,
            "end": 78.368
          },
          {
            "word": "as ",
            "start": 78.368,
            "end": 78.49
          },
          {
            "word": "da ",
            "start": 78.49,
            "end": 78.611
          },
          {
            "word": "nog ",
            "start": 78.611,
            "end": 78.856
          },
          {
            "word": "ni ",
            "start": 78.856,
            "end": 79.019
          },
          {
            "word": "mag",
            "start": 79.019,
            "end": 79.634
          }
        ]
      },
      {
        "verseStart": 79.634,
        "verseEnd": 81.639,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 79.634,
            "end": 80.419
          },
          {
            "word": "Jupilerajee",
            "start": 80.419,
            "end": 81.639
          }
        ]
      },
      {
        "verseStart": 81.639,
        "verseEnd": 84.09,
        "words": [
          {
            "word": "Want ",
            "start": 81.639,
            "end": 81.721
          },
          {
            "word": "zoterdag ",
            "start": 81.721,
            "end": 82.536
          },
          {
            "word": "is '",
            "start": 82.536,
            "end": 82.617
          },
          {
            "word": "t ",
            "start": 82.617,
            "end": 82.862
          },
          {
            "word": "krapoelekesdag",
            "start": 82.862,
            "end": 84.09
          }
        ]
      },
      {
        "verseStart": 84.09,
        "verseEnd": 85.85,
        "words": [
          {
            "word": "Der ",
            "start": 84.09,
            "end": 84.213
          },
          {
            "word": "is ",
            "start": 84.213,
            "end": 84.377
          },
          {
            "word": "een ",
            "start": 84.377,
            "end": 84.499
          },
          {
            "word": "foaf, ",
            "start": 84.499,
            "end": 84.828
          },
          {
            "word": "do ",
            "start": 84.828,
            "end": 84.951
          },
          {
            "word": "gonnek ",
            "start": 84.951,
            "end": 85.235
          },
          {
            "word": "is ",
            "start": 85.235,
            "end": 85.396
          },
          {
            "word": "binne",
            "start": 85.396,
            "end": 85.85
          }
        ]
      },
      {
        "verseStart": 85.85,
        "verseEnd": 87.93,
        "words": [
          {
            "word": "Over ",
            "start": 85.85,
            "end": 85.973
          },
          {
            "word": "die ",
            "start": 85.973,
            "end": 86.176
          },
          {
            "word": "honderd ",
            "start": 86.176,
            "end": 86.299
          },
          {
            "word": "frank ",
            "start": 86.299,
            "end": 86.461
          },
          {
            "word": "inkom ",
            "start": 86.461,
            "end": 86.665
          },
          {
            "word": "moete ",
            "start": 86.665,
            "end": 86.991
          },
          {
            "word": "ni ",
            "start": 86.991,
            "end": 87.155
          },
          {
            "word": "beginne",
            "start": 87.155,
            "end": 87.93
          }
        ]
      },
      {
        "verseStart": 87.93,
        "verseEnd": 90.055,
        "words": [
          {
            "word": "Ha ",
            "start": 87.93,
            "end": 88.135
          },
          {
            "word": "hei ",
            "start": 88.135,
            "end": 88.379
          },
          {
            "word": "twie ",
            "start": 88.379,
            "end": 88.627
          },
          {
            "word": "oege ",
            "start": 88.627,
            "end": 88.872
          },
          {
            "word": "en ",
            "start": 88.872,
            "end": 89.076
          },
          {
            "word": "ik ",
            "start": 89.076,
            "end": 89.403
          },
          {
            "word": "twie ",
            "start": 89.403,
            "end": 89.566
          },
          {
            "word": "doame",
            "start": 89.566,
            "end": 90.055
          }
        ]
      },
      {
        "verseStart": 90.055,
        "verseEnd": 92.099,
        "words": [
          {
            "word": "Ik ",
            "start": 90.055,
            "end": 90.259
          },
          {
            "word": "koom ",
            "start": 90.259,
            "end": 90.382
          },
          {
            "word": "hie ",
            "start": 90.382,
            "end": 90.545
          },
          {
            "word": "ni ",
            "start": 90.545,
            "end": 90.666
          },
          {
            "word": "veu ",
            "start": 90.666,
            "end": 90.789
          },
          {
            "word": "de ",
            "start": 90.789,
            "end": 90.911
          },
          {
            "word": "foaf, ",
            "start": 90.911,
            "end": 91.073
          },
          {
            "word": "mo ",
            "start": 91.073,
            "end": 91.2
          },
          {
            "word": "veu ",
            "start": 91.2,
            "end": 91.367
          },
          {
            "word": "de ",
            "start": 91.367,
            "end": 91.53
          },
          {
            "word": "proame",
            "start": 91.53,
            "end": 92.099
          }
        ]
      },
      {
        "verseStart": 92.099,
        "verseEnd": 94.387,
        "words": [
          {
            "word": "Hilde ",
            "start": 92.099,
            "end": 92.222
          },
          {
            "word": "of ",
            "start": 92.222,
            "end": 92.426
          },
          {
            "word": "Hilda, ",
            "start": 92.426,
            "end": 93.161
          },
          {
            "word": "ik ",
            "start": 93.161,
            "end": 93.286
          },
          {
            "word": "schaar ",
            "start": 93.286,
            "end": 93.489
          },
          {
            "word": "ze ",
            "start": 93.489,
            "end": 93.611
          },
          {
            "word": "baa ",
            "start": 93.611,
            "end": 93.733
          },
          {
            "word": "de ",
            "start": 93.733,
            "end": 93.977
          },
          {
            "word": "kol",
            "start": 93.977,
            "end": 94.387
          }
        ]
      },
      {
        "verseStart": 94.387,
        "verseEnd": 96.231,
        "words": [
          {
            "word": "Het ",
            "start": 94.387,
            "end": 94.51
          },
          {
            "word": "spelt ",
            "start": 94.51,
            "end": 94.675
          },
          {
            "word": "veu ",
            "start": 94.675,
            "end": 94.842
          },
          {
            "word": "ma ",
            "start": 94.842,
            "end": 95.005
          },
          {
            "word": "allemoo ",
            "start": 95.005,
            "end": 95.453
          },
          {
            "word": "genne ",
            "start": 95.453,
            "end": 95.617
          },
          {
            "word": "rol",
            "start": 95.617,
            "end": 96.231
          }
        ]
      },
      {
        "verseStart": 96.231,
        "verseEnd": 98.397,
        "words": [
          {
            "word": "Nie ",
            "start": 96.231,
            "end": 96.361
          },
          {
            "word": "zoterdags ",
            "start": 96.361,
            "end": 96.934
          },
          {
            "word": "lig ",
            "start": 96.934,
            "end": 97.179
          },
          {
            "word": "ik ",
            "start": 97.179,
            "end": 97.341
          },
          {
            "word": "ni ",
            "start": 97.341,
            "end": 97.462
          },
          {
            "word": "in ",
            "start": 97.462,
            "end": 97.584
          },
          {
            "word": "maa ",
            "start": 97.584,
            "end": 97.868
          },
          {
            "word": "bed",
            "start": 97.868,
            "end": 98.397
          }
        ]
      },
      {
        "verseStart": 98.397,
        "verseEnd": 100.403,
        "words": [
          {
            "word": "En ",
            "start": 98.397,
            "end": 98.561
          },
          {
            "word": "oep ",
            "start": 98.561,
            "end": 98.848
          },
          {
            "word": "den ",
            "start": 98.848,
            "end": 98.969
          },
          {
            "word": "tellevies ",
            "start": 98.969,
            "end": 99.38
          },
          {
            "word": "is '",
            "start": 99.38,
            "end": 99.501
          },
          {
            "word": "t ",
            "start": 99.501,
            "end": 99.624
          },
          {
            "word": "ok ",
            "start": 99.624,
            "end": 99.707
          },
          {
            "word": "ni ",
            "start": 99.707,
            "end": 99.871
          },
          {
            "word": "vet",
            "start": 99.871,
            "end": 100.403
          }
        ]
      },
      {
        "verseStart": 100.403,
        "verseEnd": 102.198,
        "words": [
          {
            "word": "Ge ",
            "start": 100.403,
            "end": 100.689
          },
          {
            "word": "moet ",
            "start": 100.689,
            "end": 101.056
          },
          {
            "word": "ni ",
            "start": 101.056,
            "end": 101.179
          },
          {
            "word": "probere ",
            "start": 101.179,
            "end": 101.302
          },
          {
            "word": "van ",
            "start": 101.302,
            "end": 101.464
          },
          {
            "word": "het ",
            "start": 101.464,
            "end": 101.587
          },
          {
            "word": "maa ",
            "start": 101.587,
            "end": 101.912
          },
          {
            "word": "te ",
            "start": 101.912,
            "end": 102.035
          },
          {
            "word": "belette",
            "start": 102.035,
            "end": 102.198
          }
        ]
      },
      {
        "verseStart": 102.198,
        "verseEnd": 104.73,
        "words": [
          {
            "word": "Van ",
            "start": 102.198,
            "end": 103.058
          },
          {
            "word": "zoterdags ",
            "start": 103.058,
            "end": 103.181
          },
          {
            "word": "en ",
            "start": 103.181,
            "end": 103.384
          },
          {
            "word": "stapke ",
            "start": 103.384,
            "end": 103.547
          },
          {
            "word": "in ",
            "start": 103.547,
            "end": 103.709
          },
          {
            "word": "de ",
            "start": 103.709,
            "end": 103.871
          },
          {
            "word": "wereld ",
            "start": 103.871,
            "end": 104.12
          },
          {
            "word": "te ",
            "start": 104.12,
            "end": 104.283
          },
          {
            "word": "zette",
            "start": 104.283,
            "end": 104.73
          }
        ]
      },
      {
        "verseStart": 104.73,
        "verseEnd": 106.651,
        "words": [
          {
            "word": "Me ",
            "start": 104.73,
            "end": 104.853
          },
          {
            "word": "toeverwoter ",
            "start": 104.853,
            "end": 105.263
          },
          {
            "word": "van ",
            "start": 105.263,
            "end": 105.385
          },
          {
            "word": "den ",
            "start": 105.385,
            "end": 105.551
          },
          {
            "word": "interbrew",
            "start": 105.551,
            "end": 106.651
          }
        ]
      },
      {
        "verseStart": 106.651,
        "verseEnd": 108.896,
        "words": [
          {
            "word": "Of ",
            "start": 106.651,
            "end": 106.855
          },
          {
            "word": "de ",
            "start": 106.855,
            "end": 107.019
          },
          {
            "word": "nectar ",
            "start": 107.019,
            "end": 107.183
          },
          {
            "word": "van ",
            "start": 107.183,
            "end": 107.349
          },
          {
            "word": "den ",
            "start": 107.349,
            "end": 107.471
          },
          {
            "word": "hocht, ",
            "start": 107.471,
            "end": 107.755
          },
          {
            "word": "dadis ",
            "start": 107.755,
            "end": 107.959
          },
          {
            "word": "al ",
            "start": 107.959,
            "end": 108.081
          },
          {
            "word": "eve ",
            "start": 108.081,
            "end": 108.326
          },
          {
            "word": "goe",
            "start": 108.326,
            "end": 108.896
          }
        ]
      },
      {
        "verseStart": 108.896,
        "verseEnd": 110.98,
        "words": [
          {
            "word": "Eve ",
            "start": 108.896,
            "end": 109.059
          },
          {
            "word": "goe ",
            "start": 109.059,
            "end": 109.346
          },
          {
            "word": "veu ",
            "start": 109.346,
            "end": 109.467
          },
          {
            "word": "de ",
            "start": 109.467,
            "end": 109.59
          },
          {
            "word": "stress ",
            "start": 109.59,
            "end": 109.874
          },
          {
            "word": "en ",
            "start": 109.874,
            "end": 109.997
          },
          {
            "word": "den ",
            "start": 109.997,
            "end": 110.489
          },
          {
            "word": "dynamik",
            "start": 110.489,
            "end": 110.98
          }
        ]
      },
      {
        "verseStart": 110.98,
        "verseEnd": 112.977,
        "words": [
          {
            "word": "Veu ",
            "start": 110.98,
            "end": 111.101
          },
          {
            "word": "oeve ",
            "start": 111.101,
            "end": 111.223
          },
          {
            "word": "piston ",
            "start": 111.223,
            "end": 111.917
          },
          {
            "word": "en ",
            "start": 111.917,
            "end": 112.08
          },
          {
            "word": "den ",
            "start": 112.08,
            "end": 112.245
          },
          {
            "word": "ellentrik",
            "start": 112.245,
            "end": 112.977
          }
        ]
      },
      {
        "verseStart": 112.977,
        "verseEnd": 115.226,
        "words": [
          {
            "word": "Van ",
            "start": 112.977,
            "end": 113.14
          },
          {
            "word": "nor ",
            "start": 113.14,
            "end": 113.263
          },
          {
            "word": "haas ",
            "start": 113.263,
            "end": 113.511
          },
          {
            "word": "goon ",
            "start": 113.511,
            "end": 113.836
          },
          {
            "word": "moette ",
            "start": 113.836,
            "end": 114.043
          },
          {
            "word": "ma ",
            "start": 114.043,
            "end": 114.288
          },
          {
            "word": "direct ",
            "start": 114.288,
            "end": 114.533
          },
          {
            "word": "nog ",
            "start": 114.533,
            "end": 114.656
          },
          {
            "word": "ni ",
            "start": 114.656,
            "end": 114.82
          },
          {
            "word": "klappe",
            "start": 114.82,
            "end": 115.226
          }
        ]
      },
      {
        "verseStart": 115.226,
        "verseEnd": 117.428,
        "words": [
          {
            "word": "Ik ",
            "start": 115.226,
            "end": 115.349
          },
          {
            "word": "gen ",
            "start": 115.349,
            "end": 115.594
          },
          {
            "word": "jest ",
            "start": 115.594,
            "end": 115.715
          },
          {
            "word": "nog ",
            "start": 115.715,
            "end": 115.841
          },
          {
            "word": "wa ",
            "start": 115.841,
            "end": 116.004
          },
          {
            "word": "pinkes ",
            "start": 116.004,
            "end": 116.166
          },
          {
            "word": "in ",
            "start": 116.166,
            "end": 116.329
          },
          {
            "word": "men ",
            "start": 116.329,
            "end": 116.653
          },
          {
            "word": "kamezole ",
            "start": 116.653,
            "end": 116.775
          },
          {
            "word": "kappe",
            "start": 116.775,
            "end": 117.428
          }
        ]
      },
      {
        "verseStart": 117.428,
        "verseEnd": 119.468,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 117.428,
            "end": 118.209
          },
          {
            "word": "Jupilerajee",
            "start": 118.209,
            "end": 119.468
          }
        ]
      },
      {
        "verseStart": 119.468,
        "verseEnd": 121.593,
        "words": [
          {
            "word": "Welle ",
            "start": 119.468,
            "end": 119.63
          },
          {
            "word": "gon ",
            "start": 119.63,
            "end": 119.875
          },
          {
            "word": "fieste ",
            "start": 119.875,
            "end": 120.247
          },
          {
            "word": "en ",
            "start": 120.247,
            "end": 120.491
          },
          {
            "word": "as ",
            "start": 120.491,
            "end": 120.614
          },
          {
            "word": "da ",
            "start": 120.614,
            "end": 120.819
          },
          {
            "word": "nog ",
            "start": 120.819,
            "end": 120.983
          },
          {
            "word": "ni ",
            "start": 120.983,
            "end": 121.104
          },
          {
            "word": "mag",
            "start": 121.104,
            "end": 121.593
          }
        ]
      },
      {
        "verseStart": 121.593,
        "verseEnd": 123.593,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 121.593,
            "end": 122.658
          },
          {
            "word": "Jupilerajee",
            "start": 122.658,
            "end": 123.593
          }
        ]
      },
      {
        "verseStart": 123.593,
        "verseEnd": 125.671,
        "words": [
          {
            "word": "Want ",
            "start": 123.593,
            "end": 123.715
          },
          {
            "word": "zoterdag ",
            "start": 123.715,
            "end": 124.367
          },
          {
            "word": "is '",
            "start": 124.367,
            "end": 124.489
          },
          {
            "word": "t ",
            "start": 124.489,
            "end": 124.691
          },
          {
            "word": "krapoelekesdag",
            "start": 124.691,
            "end": 125.671
          }
        ]
      },
      {
        "verseStart": 125.671,
        "verseEnd": 127.682,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 125.671,
            "end": 126.535
          },
          {
            "word": "Jupilerajee",
            "start": 126.535,
            "end": 127.682
          }
        ]
      },
      {
        "verseStart": 127.682,
        "verseEnd": 129.975,
        "words": [
          {
            "word": "Welle ",
            "start": 127.682,
            "end": 127.804
          },
          {
            "word": "gon ",
            "start": 127.804,
            "end": 128.291
          },
          {
            "word": "fieste ",
            "start": 128.291,
            "end": 128.616
          },
          {
            "word": "en ",
            "start": 128.616,
            "end": 128.779
          },
          {
            "word": "as ",
            "start": 128.779,
            "end": 128.942
          },
          {
            "word": "da ",
            "start": 128.942,
            "end": 129.065
          },
          {
            "word": "nog ",
            "start": 129.065,
            "end": 129.228
          },
          {
            "word": "ni ",
            "start": 129.228,
            "end": 129.394
          },
          {
            "word": "mag",
            "start": 129.394,
            "end": 129.975
          }
        ]
      },
      {
        "verseStart": 129.975,
        "verseEnd": 131.85,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 129.975,
            "end": 130.751
          },
          {
            "word": "Jupilerajee",
            "start": 130.751,
            "end": 131.85
          }
        ]
      },
      {
        "verseStart": 131.85,
        "verseEnd": 134.01,
        "words": [
          {
            "word": "Want ",
            "start": 131.85,
            "end": 132.093
          },
          {
            "word": "zoterdag ",
            "start": 132.093,
            "end": 132.791
          },
          {
            "word": "is '",
            "start": 132.791,
            "end": 132.912
          },
          {
            "word": "t ",
            "start": 132.912,
            "end": 133.075
          },
          {
            "word": "krapoelekesdag",
            "start": 133.075,
            "end": 134.01
          }
        ]
      },
      {
        "verseStart": 134.01,
        "verseEnd": 136.053,
        "words": [
          {
            "word": "Het ",
            "start": 134.01,
            "end": 134.133
          },
          {
            "word": "broebelt ",
            "start": 134.133,
            "end": 134.418
          },
          {
            "word": "in ",
            "start": 134.418,
            "end": 134.54
          },
          {
            "word": "men ",
            "start": 134.54,
            "end": 134.785
          },
          {
            "word": "strop ",
            "start": 134.785,
            "end": 134.988
          },
          {
            "word": "en ",
            "start": 134.988,
            "end": 135.151
          },
          {
            "word": "alles ",
            "start": 135.151,
            "end": 135.483
          },
          {
            "word": "droat",
            "start": 135.483,
            "end": 136.053
          }
        ]
      },
      {
        "verseStart": 136.053,
        "verseEnd": 138.182,
        "words": [
          {
            "word": "Ik ",
            "start": 136.053,
            "end": 136.175
          },
          {
            "word": "moet ",
            "start": 136.175,
            "end": 136.461
          },
          {
            "word": "no ",
            "start": 136.461,
            "end": 136.581
          },
          {
            "word": "de ",
            "start": 136.581,
            "end": 136.708
          },
          {
            "word": "koer, ",
            "start": 136.708,
            "end": 137.033
          },
          {
            "word": "alles ",
            "start": 137.033,
            "end": 137.277
          },
          {
            "word": "moet ",
            "start": 137.277,
            "end": 137.606
          },
          {
            "word": "eroat",
            "start": 137.606,
            "end": 138.182
          }
        ]
      },
      {
        "verseStart": 138.182,
        "verseEnd": 140.191,
        "words": [
          {
            "word": "Ik ",
            "start": 138.182,
            "end": 138.263
          },
          {
            "word": "geubel ",
            "start": 138.263,
            "end": 138.509
          },
          {
            "word": "currywest ",
            "start": 138.509,
            "end": 139.002
          },
          {
            "word": "en ",
            "start": 139.002,
            "end": 139.332
          },
          {
            "word": "wa ",
            "start": 139.332,
            "end": 139.455
          },
          {
            "word": "soep ",
            "start": 139.455,
            "end": 139.659
          },
          {
            "word": "van ",
            "start": 139.659,
            "end": 139.781
          },
          {
            "word": "testrak",
            "start": 139.781,
            "end": 140.191
          }
        ]
      },
      {
        "verseStart": 140.191,
        "verseEnd": 142.391,
        "words": [
          {
            "word": "'",
            "start": 140.191,
            "end": 140.353
          },
          {
            "word": "t ",
            "start": 140.353,
            "end": 140.476
          },
          {
            "word": "Lei ",
            "start": 140.476,
            "end": 140.68
          },
          {
            "word": "allemoo ",
            "start": 140.68,
            "end": 140.923
          },
          {
            "word": "te ",
            "start": 140.923,
            "end": 141.086
          },
          {
            "word": "drave ",
            "start": 141.086,
            "end": 141.208
          },
          {
            "word": "in ",
            "start": 141.208,
            "end": 141.33
          },
          {
            "word": "de ",
            "start": 141.33,
            "end": 141.453
          },
          {
            "word": "GFT-",
            "start": 141.453,
            "end": 141.821
          },
          {
            "word": "bak",
            "start": 141.821,
            "end": 142.391
          }
        ]
      },
      {
        "verseStart": 142.391,
        "verseEnd": 144.605,
        "words": [
          {
            "word": "Azzek ",
            "start": 142.391,
            "end": 142.555
          },
          {
            "word": "paas '",
            "start": 142.555,
            "end": 142.844
          },
          {
            "word": "t ",
            "start": 142.844,
            "end": 143.005
          },
          {
            "word": "es ",
            "start": 143.005,
            "end": 143.09
          },
          {
            "word": "gedoon, ",
            "start": 143.09,
            "end": 143.334
          },
          {
            "word": "kraak ",
            "start": 143.334,
            "end": 143.501
          },
          {
            "word": "nog ",
            "start": 143.501,
            "end": 143.743
          },
          {
            "word": "een ",
            "start": 143.743,
            "end": 143.947
          },
          {
            "word": "drets ",
            "start": 143.947,
            "end": 144.07
          },
          {
            "word": "oep ",
            "start": 144.07,
            "end": 144.155
          },
          {
            "word": "men ",
            "start": 144.155,
            "end": 144.318
          },
          {
            "word": "hum",
            "start": 144.318,
            "end": 144.605
          }
        ]
      },
      {
        "verseStart": 144.605,
        "verseEnd": 146.407,
        "words": [
          {
            "word": "Ik ",
            "start": 144.605,
            "end": 144.728
          },
          {
            "word": "val ",
            "start": 144.728,
            "end": 144.89
          },
          {
            "word": "over ",
            "start": 144.89,
            "end": 145.053
          },
          {
            "word": "men ",
            "start": 145.053,
            "end": 145.257
          },
          {
            "word": "voete, ",
            "start": 145.257,
            "end": 145.462
          },
          {
            "word": "das ",
            "start": 145.462,
            "end": 145.585
          },
          {
            "word": "ni ",
            "start": 145.585,
            "end": 145.707
          },
          {
            "word": "het ",
            "start": 145.707,
            "end": 145.911
          },
          {
            "word": "slum",
            "start": 145.911,
            "end": 146.407
          }
        ]
      },
      {
        "verseStart": 146.407,
        "verseEnd": 148.651,
        "words": [
          {
            "word": "Het ",
            "start": 146.407,
            "end": 146.611
          },
          {
            "word": "weud ",
            "start": 146.611,
            "end": 146.937
          },
          {
            "word": "teveul, ",
            "start": 146.937,
            "end": 147.546
          },
          {
            "word": "ik ",
            "start": 147.546,
            "end": 147.669
          },
          {
            "word": "begin ",
            "start": 147.669,
            "end": 147.791
          },
          {
            "word": "het ",
            "start": 147.791,
            "end": 147.954
          },
          {
            "word": "te ",
            "start": 147.954,
            "end": 148.116
          },
          {
            "word": "vuule",
            "start": 148.116,
            "end": 148.651
          }
        ]
      },
      {
        "verseStart": 148.651,
        "verseEnd": 150.689,
        "words": [
          {
            "word": "Mo ",
            "start": 148.651,
            "end": 148.773
          },
          {
            "word": "jest ",
            "start": 148.773,
            "end": 148.895
          },
          {
            "word": "de ",
            "start": 148.895,
            "end": 149.017
          },
          {
            "word": "kotssmook ",
            "start": 149.017,
            "end": 149.302
          },
          {
            "word": "me ",
            "start": 149.302,
            "end": 149.425
          },
          {
            "word": "nog ",
            "start": 149.425,
            "end": 149.628
          },
          {
            "word": "e ",
            "start": 149.628,
            "end": 149.75
          },
          {
            "word": "pinke ",
            "start": 149.75,
            "end": 149.954
          },
          {
            "word": "wegspuule",
            "start": 149.954,
            "end": 150.689
          }
        ]
      },
      {
        "verseStart": 150.689,
        "verseEnd": 152.732,
        "words": [
          {
            "word": "En ",
            "start": 150.689,
            "end": 150.811
          },
          {
            "word": "ik ",
            "start": 150.811,
            "end": 151.095
          },
          {
            "word": "val ",
            "start": 151.095,
            "end": 151.381
          },
          {
            "word": "in '",
            "start": 151.381,
            "end": 151.544
          },
          {
            "word": "t ",
            "start": 151.544,
            "end": 151.788
          },
          {
            "word": "sloop ",
            "start": 151.788,
            "end": 151.91
          },
          {
            "word": "in ",
            "start": 151.91,
            "end": 152.033
          },
          {
            "word": "den ",
            "start": 152.033,
            "end": 152.364
          },
          {
            "word": "assenbak",
            "start": 152.364,
            "end": 152.732
          }
        ]
      },
      {
        "verseStart": 152.732,
        "verseEnd": 154.85,
        "words": [
          {
            "word": "Geft ",
            "start": 152.732,
            "end": 152.895
          },
          {
            "word": "na ",
            "start": 152.895,
            "end": 153.058
          },
          {
            "word": "toe, ",
            "start": 153.058,
            "end": 153.139
          },
          {
            "word": "ik ",
            "start": 153.139,
            "end": 153.343
          },
          {
            "word": "zen ",
            "start": 153.343,
            "end": 153.506
          },
          {
            "word": "agelek ",
            "start": 153.506,
            "end": 153.79
          },
          {
            "word": "toch ",
            "start": 153.79,
            "end": 154.197
          },
          {
            "word": "ne ",
            "start": 154.197,
            "end": 154.359
          },
          {
            "word": "krak",
            "start": 154.359,
            "end": 154.85
          }
        ]
      },
      {
        "verseStart": 154.85,
        "verseEnd": 156.852,
        "words": [
          {
            "word": "Ik ",
            "start": 154.85,
            "end": 155.013
          },
          {
            "word": "gen ",
            "start": 155.013,
            "end": 155.298
          },
          {
            "word": "no ",
            "start": 155.298,
            "end": 155.462
          },
          {
            "word": "mennen ",
            "start": 155.462,
            "end": 155.624
          },
          {
            "word": "toas ",
            "start": 155.624,
            "end": 155.747
          },
          {
            "word": "wo ",
            "start": 155.747,
            "end": 155.91
          },
          {
            "word": "de ",
            "start": 155.91,
            "end": 156.033
          },
          {
            "word": "stella ",
            "start": 156.033,
            "end": 156.322
          },
          {
            "word": "sto",
            "start": 156.322,
            "end": 156.852
          }
        ]
      },
      {
        "verseStart": 156.852,
        "verseEnd": 159.016,
        "words": [
          {
            "word": "Ge ",
            "start": 156.852,
            "end": 156.974
          },
          {
            "word": "wet ",
            "start": 156.974,
            "end": 157.137
          },
          {
            "word": "wel ",
            "start": 157.137,
            "end": 157.299
          },
          {
            "word": "wo ",
            "start": 157.299,
            "end": 157.467
          },
          {
            "word": "dien ",
            "start": 157.467,
            "end": 157.63
          },
          {
            "word": "oemgekapte ",
            "start": 157.63,
            "end": 158.16
          },
          {
            "word": "boem ",
            "start": 158.16,
            "end": 158.324
          },
          {
            "word": "sto",
            "start": 158.324,
            "end": 159.016
          }
        ]
      },
      {
        "verseStart": 159.016,
        "verseEnd": 161.172,
        "words": [
          {
            "word": "Ik ",
            "start": 159.016,
            "end": 159.138
          },
          {
            "word": "pak ",
            "start": 159.138,
            "end": 159.259
          },
          {
            "word": "den ",
            "start": 159.259,
            "end": 159.341
          },
          {
            "word": "trap ",
            "start": 159.341,
            "end": 159.585
          },
          {
            "word": "no ",
            "start": 159.585,
            "end": 159.709
          },
          {
            "word": "bove, ",
            "start": 159.709,
            "end": 159.752
          },
          {
            "word": "mo ",
            "start": 159.752,
            "end": 160.239
          },
          {
            "word": "ha ",
            "start": 160.239,
            "end": 160.401
          },
          {
            "word": "luipt ",
            "start": 160.401,
            "end": 160.562
          },
          {
            "word": "mier ",
            "start": 160.562,
            "end": 160.685
          },
          {
            "word": "no ",
            "start": 160.685,
            "end": 160.767
          },
          {
            "word": "benee",
            "start": 160.767,
            "end": 161.172
          }
        ]
      },
      {
        "verseStart": 161.172,
        "verseEnd": 163.33,
        "words": [
          {
            "word": "Daddis ",
            "start": 161.172,
            "end": 161.335
          },
          {
            "word": "al ",
            "start": 161.335,
            "end": 161.457
          },
          {
            "word": "van ",
            "start": 161.457,
            "end": 161.578
          },
          {
            "word": "veurige ",
            "start": 161.578,
            "end": 161.7
          },
          {
            "word": "zoterdag ",
            "start": 161.7,
            "end": 162.147
          },
          {
            "word": "gelee",
            "start": 162.147,
            "end": 163.33
          }
        ]
      },
      {
        "verseStart": 163.33,
        "verseEnd": 165.291,
        "words": [
          {
            "word": "Dat ",
            "start": 163.33,
            "end": 163.452
          },
          {
            "word": "den ",
            "start": 163.452,
            "end": 163.58
          },
          {
            "word": "trap ",
            "start": 163.58,
            "end": 163.743
          },
          {
            "word": "nemie ",
            "start": 163.743,
            "end": 163.905
          },
          {
            "word": "doe ",
            "start": 163.905,
            "end": 164.271
          },
          {
            "word": "wat ",
            "start": 164.271,
            "end": 164.434
          },
          {
            "word": "da ",
            "start": 164.434,
            "end": 164.677
          },
          {
            "word": "gaa ",
            "start": 164.677,
            "end": 164.8
          },
          {
            "word": "verwacht",
            "start": 164.8,
            "end": 165.291
          }
        ]
      },
      {
        "verseStart": 165.291,
        "verseEnd": 167.401,
        "words": [
          {
            "word": "Da ",
            "start": 165.291,
            "end": 165.414
          },
          {
            "word": "kunde ",
            "start": 165.414,
            "end": 165.785
          },
          {
            "word": "veu ",
            "start": 165.785,
            "end": 165.907
          },
          {
            "word": "hemme ",
            "start": 165.907,
            "end": 166.156
          },
          {
            "word": "oep ",
            "start": 166.156,
            "end": 166.503
          },
          {
            "word": "ne ",
            "start": 166.503,
            "end": 166.747
          },
          {
            "word": "zoterdagnacht",
            "start": 166.747,
            "end": 167.401
          }
        ]
      },
      {
        "verseStart": 167.401,
        "verseEnd": 169.771,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 167.401,
            "end": 168.342
          },
          {
            "word": "Jupilerajee",
            "start": 168.342,
            "end": 169.771
          }
        ]
      },
      {
        "verseStart": 169.771,
        "verseEnd": 171.685,
        "words": [
          {
            "word": "Welle ",
            "start": 169.771,
            "end": 169.853
          },
          {
            "word": "gon ",
            "start": 169.853,
            "end": 170.015
          },
          {
            "word": "fieste ",
            "start": 170.015,
            "end": 170.501
          },
          {
            "word": "en ",
            "start": 170.501,
            "end": 170.624
          },
          {
            "word": "as ",
            "start": 170.624,
            "end": 170.746
          },
          {
            "word": "da ",
            "start": 170.746,
            "end": 170.827
          },
          {
            "word": "nog ",
            "start": 170.827,
            "end": 170.989
          },
          {
            "word": "ni ",
            "start": 170.989,
            "end": 171.111
          },
          {
            "word": "mag",
            "start": 171.111,
            "end": 171.685
          }
        ]
      },
      {
        "verseStart": 171.685,
        "verseEnd": 173.721,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 171.685,
            "end": 172.46
          },
          {
            "word": "Jupilerajee",
            "start": 172.46,
            "end": 173.721
          }
        ]
      },
      {
        "verseStart": 173.721,
        "verseEnd": 175.921,
        "words": [
          {
            "word": "Want ",
            "start": 173.721,
            "end": 173.883
          },
          {
            "word": "zoterdag ",
            "start": 173.883,
            "end": 174.576
          },
          {
            "word": "is '",
            "start": 174.576,
            "end": 174.7
          },
          {
            "word": "t ",
            "start": 174.7,
            "end": 174.821
          },
          {
            "word": "krapoelekesdag",
            "start": 174.821,
            "end": 175.921
          }
        ]
      },
      {
        "verseStart": 175.921,
        "verseEnd": 177.854,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 175.921,
            "end": 176.741
          },
          {
            "word": "Jupilerajee",
            "start": 176.741,
            "end": 177.854
          }
        ]
      },
      {
        "verseStart": 177.854,
        "verseEnd": 180.141,
        "words": [
          {
            "word": "Welle ",
            "start": 177.854,
            "end": 178.058
          },
          {
            "word": "gon ",
            "start": 178.058,
            "end": 178.345
          },
          {
            "word": "fieste ",
            "start": 178.345,
            "end": 178.796
          },
          {
            "word": "en ",
            "start": 178.796,
            "end": 178.959
          },
          {
            "word": "as ",
            "start": 178.959,
            "end": 179.081
          },
          {
            "word": "da ",
            "start": 179.081,
            "end": 179.203
          },
          {
            "word": "nog ",
            "start": 179.203,
            "end": 179.448
          },
          {
            "word": "ni ",
            "start": 179.448,
            "end": 179.57
          },
          {
            "word": "mag",
            "start": 179.57,
            "end": 180.141
          }
        ]
      },
      {
        "verseStart": 180.141,
        "verseEnd": 182.105,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 180.141,
            "end": 180.923
          },
          {
            "word": "Jupilerajee",
            "start": 180.923,
            "end": 182.105
          }
        ]
      },
      {
        "verseStart": 182.105,
        "verseEnd": 184.272,
        "words": [
          {
            "word": "Want ",
            "start": 182.105,
            "end": 182.227
          },
          {
            "word": "zoterdag ",
            "start": 182.227,
            "end": 182.596
          },
          {
            "word": "is '",
            "start": 182.596,
            "end": 182.682
          },
          {
            "word": "t ",
            "start": 182.682,
            "end": 183.049
          },
          {
            "word": "krapoelekesdag",
            "start": 183.049,
            "end": 184.272
          }
        ]
      },
      {
        "verseStart": 184.272,
        "verseEnd": 186.272,
        "words": [
          {
            "word": "Joepiao, ",
            "start": 184.272,
            "end": 185.131
          },
          {
            "word": "Jupilerajee",
            "start": 185.131,
            "end": 186.272
          }
        ]
      },
      {
        "verseStart": 186.272,
        "verseEnd": 190.401,
        "words": [
          {
            "word": "Welle ",
            "start": 186.272,
            "end": 186.515
          },
          {
            "word": "gon ",
            "start": 186.515,
            "end": 186.759
          },
          {
            "word": "fieste ",
            "start": 186.759,
            "end": 187.211
          },
          {
            "word": "en ",
            "start": 187.211,
            "end": 187.334
          },
          {
            "word": "as ",
            "start": 187.334,
            "end": 187.497
          },
          {
            "word": "da ",
            "start": 187.497,
            "end": 187.742
          },
          {
            "word": "nog ",
            "start": 187.742,
            "end": 187.905
          },
          {
            "word": "ni ",
            "start": 187.905,
            "end": 187.987
          },
          {
            "word": "mag",
            "start": 187.987,
            "end": 190.401
          }
        ]
      },
      {
        "verseStart": 190.401,
        "verseEnd": 194.817,
        "words": [
          {
            "word": "Want ",
            "start": 190.401,
            "end": 190.77
          },
          {
            "word": "zoterdag ",
            "start": 190.77,
            "end": 190.934
          },
          {
            "word": "is '",
            "start": 190.934,
            "end": 191.426
          },
          {
            "word": "t ",
            "start": 191.426,
            "end": 191.593
          },
          {
            "word": "krapoelekesdag",
            "start": 191.593,
            "end": 194.817
          }
        ]
      },
      {
        "verseStart": 194.817,
        "verseEnd": 198.85,
        "words": [
          {
            "word": "Welle ",
            "start": 194.817,
            "end": 194.939
          },
          {
            "word": "gon ",
            "start": 194.939,
            "end": 195.187
          },
          {
            "word": "fieste ",
            "start": 195.187,
            "end": 195.525
          },
          {
            "word": "en ",
            "start": 195.525,
            "end": 195.651
          },
          {
            "word": "as ",
            "start": 195.651,
            "end": 195.814
          },
          {
            "word": "da ",
            "start": 195.814,
            "end": 195.982
          },
          {
            "word": "nog ",
            "start": 195.982,
            "end": 196.146
          },
          {
            "word": "ni ",
            "start": 196.146,
            "end": 196.27
          },
          {
            "word": "mag",
            "start": 196.27,
            "end": 198.85
          }
        ]
      },
      {
        "verseStart": 198.85,
        "verseEnd": 201.92,
        "words": [
          {
            "word": "Want ",
            "start": 198.85,
            "end": 199.055
          },
          {
            "word": "zoterdag ",
            "start": 199.055,
            "end": 199.629
          },
          {
            "word": "is '",
            "start": 199.629,
            "end": 199.751
          },
          {
            "word": "t ",
            "start": 199.751,
            "end": 199.92
          },
          {
            "word": "krapoelekesdag",
            "start": 199.92,
            "end": 0
          }
        ]
      }
    ]
  },
  "Joël Legendre à Soirée Canadienne.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 0.106,
        "verseEnd": 5.411,
        "words": [
          {
            "word": "<i>Maintenant </i>",
            "start": 0.106,
            "end": 0.269
          },
          {
            "word": "<i>on </i>",
            "start": 0.269,
            "end": 0.475
          },
          {
            "word": "<i>a </i>",
            "start": 0.475,
            "end": 0.72
          },
          {
            "word": "<i>un </i>",
            "start": 0.72,
            "end": 0.924
          },
          {
            "word": "<i>tout </i>",
            "start": 0.924,
            "end": 1.087
          },
          {
            "word": "<i>jeune </i>",
            "start": 1.087,
            "end": 1.25
          },
          {
            "word": "<i>homme, </i>",
            "start": 1.25,
            "end": 1.453
          },
          {
            "word": "<i>euh, </i>",
            "start": 1.453,
            "end": 1.983
          },
          {
            "word": "<i>qui </i>",
            "start": 1.983,
            "end": 2.106
          },
          {
            "word": "<i>est </i>",
            "start": 2.106,
            "end": 2.269
          },
          {
            "word": "<i>plein </i>",
            "start": 2.269,
            "end": 2.351
          },
          {
            "word": "<i>de </i>",
            "start": 2.351,
            "end": 2.472
          },
          {
            "word": "<i>vie, </i>",
            "start": 2.472,
            "end": 2.92
          },
          {
            "word": "<i>vous </i>",
            "start": 2.92,
            "end": 3.001
          },
          {
            "word": "<i>allez </i>",
            "start": 3.001,
            "end": 3.123
          },
          {
            "word": "<i>voir. </i>",
            "start": 3.123,
            "end": 3.818
          },
          {
            "word": "<i>C'est </i>",
            "start": 3.818,
            "end": 3.981
          },
          {
            "word": "<i>Joël </i>",
            "start": 3.981,
            "end": 4.347
          },
          {
            "word": "<i>Legendre. </i>",
            "start": 4.347,
            "end": 4.878
          },
          {
            "word": "<i>Bonsoir </i>",
            "start": 4.878,
            "end": 5.085
          },
          {
            "word": "<i>Joël.</i>",
            "start": 5.085,
            "end": 5.411
          }
        ],
        "speaker": "<i>Louis:</i>"
      },
      {
        "verseStart": 5.411,
        "verseEnd": 6.146,
        "words": [
          {
            "word": "<i>Bonsoir.</i>",
            "start": 5.411,
            "end": 6.146
          }
        ],
        "speaker": "<i>Joël:</i>"
      },
      {
        "verseStart": 6.146,
        "verseEnd": 16.325,
        "words": [
          {
            "word": "<i>La </i>",
            "start": 6.146,
            "end": 6.309
          },
          {
            "word": "<i>chanson </i>",
            "start": 6.309,
            "end": 6.472
          },
          {
            "word": "<i>qu'tu </i>",
            "start": 6.472,
            "end": 6.635
          },
          {
            "word": "<i>fais </i>",
            "start": 6.635,
            "end": 6.799
          },
          {
            "word": "<i>c'est </i>",
            "start": 6.799,
            "end": 7.17
          },
          {
            "word": "<i>une </i>",
            "start": 7.17,
            "end": 7.292
          },
          {
            "word": "<i>chanson </i>",
            "start": 7.292,
            "end": 7.416
          },
          {
            "word": "<i>folklorique </i>",
            "start": 7.416,
            "end": 8.359
          },
          {
            "word": "<i>mais </i>",
            "start": 8.359,
            "end": 8.522
          },
          {
            "word": "<i>qui </i>",
            "start": 8.522,
            "end": 8.644
          },
          {
            "word": "<i>a </i>",
            "start": 8.644,
            "end": 8.725
          },
          {
            "word": "<i>une </i>",
            "start": 8.725,
            "end": 8.848
          },
          {
            "word": "<i>allure </i>",
            "start": 8.848,
            "end": 9.052
          },
          {
            "word": "<i>de </i>",
            "start": 9.052,
            "end": 9.218
          },
          {
            "word": "<i>folklore </i>",
            "start": 9.218,
            "end": 9.955
          },
          {
            "word": "<i>contemporain. </i>",
            "start": 9.955,
            "end": 11.549
          },
          {
            "word": "<i>C'est </i>",
            "start": 11.549,
            "end": 11.715
          },
          {
            "word": "<i>l'allure </i>",
            "start": 11.715,
            "end": 11.842
          },
          {
            "word": "<i>qu'on </i>",
            "start": 11.842,
            "end": 12.009
          },
          {
            "word": "<i>lui </i>",
            "start": 12.009,
            "end": 12.093
          },
          {
            "word": "<i>a </i>",
            "start": 12.093,
            "end": 12.265
          },
          {
            "word": "<i>donnée, </i>",
            "start": 12.265,
            "end": 12.433
          },
          {
            "word": "<i>euh, </i>",
            "start": 12.433,
            "end": 13.289
          },
          {
            "word": "<i>avec </i>",
            "start": 13.289,
            "end": 13.455
          },
          {
            "word": "<i>une </i>",
            "start": 13.455,
            "end": 13.619
          },
          {
            "word": "<i>chanson </i>",
            "start": 13.619,
            "end": 14.113
          },
          {
            "word": "<i>fort </i>",
            "start": 14.113,
            "end": 14.235
          },
          {
            "word": "<i>populaire </i>",
            "start": 14.235,
            "end": 14.317
          },
          {
            "word": "<i>actuellement. </i>",
            "start": 14.317,
            "end": 14.603
          },
          {
            "word": "<i>C'est </i>",
            "start": 14.603,
            "end": 15.138
          },
          {
            "word": "<i>quoi </i>",
            "start": 15.138,
            "end": 15.261
          },
          {
            "word": "<i>déjà </i>",
            "start": 15.261,
            "end": 15.423
          },
          {
            "word": "<i>la </i>",
            "start": 15.423,
            "end": 15.59
          },
          {
            "word": "<i>chanson ?</i>",
            "start": 15.59,
            "end": 16.325
          }
        ],
        "speaker": "<i>Louis:</i>"
      },
      {
        "verseStart": 16.325,
        "verseEnd": 17.021,
        "words": [
          {
            "word": "<i>M'en </i>",
            "start": 16.325,
            "end": 16.448
          },
          {
            "word": "<i>revenant </i>",
            "start": 16.448,
            "end": 16.529
          },
          {
            "word": "<i>de </i>",
            "start": 16.529,
            "end": 16.653
          },
          {
            "word": "<i>Sainte-</i>",
            "start": 16.653,
            "end": 16.818
          },
          {
            "word": "<i>Hélène.</i>",
            "start": 16.818,
            "end": 17.021
          }
        ],
        "speaker": "<i>Joël:</i>"
      },
      {
        "verseStart": 17.021,
        "verseEnd": 22.538,
        "words": [
          {
            "word": "<i>Bon, </i>",
            "start": 17.021,
            "end": 17.78
          },
          {
            "word": "<i>on </i>",
            "start": 17.78,
            "end": 17.983
          },
          {
            "word": "<i>va </i>",
            "start": 17.983,
            "end": 18.065
          },
          {
            "word": "<i>revenir </i>",
            "start": 18.065,
            "end": 18.23
          },
          {
            "word": "<i>de </i>",
            "start": 18.23,
            "end": 18.315
          },
          {
            "word": "<i>Sainte-</i>",
            "start": 18.315,
            "end": 18.441
          },
          {
            "word": "<i>Hélène, </i>",
            "start": 18.441,
            "end": 18.562
          },
          {
            "word": "<i>mais </i>",
            "start": 18.562,
            "end": 18.645
          },
          {
            "word": "<i>on </i>",
            "start": 18.645,
            "end": 18.857
          },
          {
            "word": "<i>retournera </i>",
            "start": 18.857,
            "end": 19.022
          },
          {
            "word": "<i>à </i>",
            "start": 19.022,
            "end": 19.145
          },
          {
            "word": "<i>Sainte-</i>",
            "start": 19.145,
            "end": 19.43
          },
          {
            "word": "<i>Hélène </i>",
            "start": 19.43,
            "end": 19.675
          },
          {
            "word": "<i>après </i>",
            "start": 19.675,
            "end": 19.839
          },
          {
            "word": "<i>ça. </i>",
            "start": 19.839,
            "end": 20.615
          },
          {
            "word": "<i>On </i>",
            "start": 20.615,
            "end": 20.737
          },
          {
            "word": "<i>y </i>",
            "start": 20.737,
            "end": 21.107
          },
          {
            "word": "<i>va !</i>",
            "start": 21.107,
            "end": 22.538
          }
        ],
        "speaker": "<i>Louis:</i>"
      },
      {
        "verseStart": 22.538,
        "verseEnd": 24.264,
        "words": [
          {
            "word": "M'en ",
            "start": 22.538,
            "end": 22.745
          },
          {
            "word": "revenant ",
            "start": 22.745,
            "end": 22.868
          },
          {
            "word": "de ",
            "start": 22.868,
            "end": 22.95
          },
          {
            "word": "Sainte-",
            "start": 22.95,
            "end": 23.568
          },
          {
            "word": "Hélène",
            "start": 23.568,
            "end": 24.264
          }
        ]
      },
      {
        "verseStart": 24.264,
        "verseEnd": 26.16,
        "words": [
          {
            "word": "Ferme ",
            "start": 24.264,
            "end": 24.553
          },
          {
            "word": "donc ",
            "start": 24.553,
            "end": 24.675
          },
          {
            "word": "ta ",
            "start": 24.675,
            "end": 24.758
          },
          {
            "word": "boite, ",
            "start": 24.758,
            "end": 25.044
          },
          {
            "word": "laisse-",
            "start": 25.044,
            "end": 25.168
          },
          {
            "word": "moé ",
            "start": 25.168,
            "end": 25.334
          },
          {
            "word": "donc ",
            "start": 25.334,
            "end": 25.666
          },
          {
            "word": "chanter",
            "start": 25.666,
            "end": 26.16
          }
        ]
      },
      {
        "verseStart": 26.16,
        "verseEnd": 28.037,
        "words": [
          {
            "word": "(M'en ",
            "start": 26.16,
            "end": 26.446
          },
          {
            "word": "revenant ",
            "start": 26.446,
            "end": 26.936
          },
          {
            "word": "de ",
            "start": 26.936,
            "end": 27.14
          },
          {
            "word": "Sainte-",
            "start": 27.14,
            "end": 27.384
          },
          {
            "word": "Hélène)",
            "start": 27.384,
            "end": 28.037
          }
        ]
      },
      {
        "verseStart": 28.037,
        "verseEnd": 29.964,
        "words": [
          {
            "word": "(Ferme ",
            "start": 28.037,
            "end": 28.321
          },
          {
            "word": "donc ",
            "start": 28.321,
            "end": 28.485
          },
          {
            "word": "ta ",
            "start": 28.485,
            "end": 28.568
          },
          {
            "word": "boite, ",
            "start": 28.568,
            "end": 28.771
          },
          {
            "word": "laisse-",
            "start": 28.771,
            "end": 28.894
          },
          {
            "word": "moé ",
            "start": 28.894,
            "end": 29.017
          },
          {
            "word": "donc ",
            "start": 29.017,
            "end": 29.304
          },
          {
            "word": "chanter)",
            "start": 29.304,
            "end": 29.964
          }
        ]
      },
      {
        "verseStart": 29.964,
        "verseEnd": 31.526,
        "words": [
          {
            "word": "Trois ",
            "start": 29.964,
            "end": 30.213
          },
          {
            "word": "beaux ",
            "start": 30.213,
            "end": 30.336
          },
          {
            "word": "canards ",
            "start": 30.336,
            "end": 30.459
          },
          {
            "word": "s'en ",
            "start": 30.459,
            "end": 30.667
          },
          {
            "word": "vont ",
            "start": 30.667,
            "end": 31.074
          },
          {
            "word": "baignant",
            "start": 31.074,
            "end": 31.526
          }
        ]
      },
      {
        "verseStart": 31.526,
        "verseEnd": 32.934,
        "words": [
          {
            "word": "Touchez ",
            "start": 31.526,
            "end": 31.69
          },
          {
            "word": "haut, ",
            "start": 31.69,
            "end": 32.06
          },
          {
            "word": "touchez ",
            "start": 32.06,
            "end": 32.191
          },
          {
            "word": "bas, ",
            "start": 32.191,
            "end": 32.481
          },
          {
            "word": "touchez-",
            "start": 32.481,
            "end": 32.604
          },
          {
            "word": "y",
            "start": 32.604,
            "end": 32.934
          }
        ]
      },
      {
        "verseStart": 32.934,
        "verseEnd": 34.575,
        "words": [
          {
            "word": "Touchez-",
            "start": 32.934,
            "end": 33.056
          },
          {
            "word": "y ",
            "start": 33.056,
            "end": 33.138
          },
          {
            "word": "pas, ",
            "start": 33.138,
            "end": 33.382
          },
          {
            "word": "laissez ",
            "start": 33.382,
            "end": 33.505
          },
          {
            "word": "ça ",
            "start": 33.505,
            "end": 33.631
          },
          {
            "word": "là, ",
            "start": 33.631,
            "end": 33.753
          },
          {
            "word": "maman ",
            "start": 33.753,
            "end": 33.875
          },
          {
            "word": "veut ",
            "start": 33.875,
            "end": 34.122
          },
          {
            "word": "pas",
            "start": 34.122,
            "end": 34.575
          }
        ]
      },
      {
        "verseStart": 34.575,
        "verseEnd": 36.124,
        "words": [
          {
            "word": "J'la ",
            "start": 34.575,
            "end": 34.697
          },
          {
            "word": "dévire ",
            "start": 34.697,
            "end": 34.819
          },
          {
            "word": "de ",
            "start": 34.819,
            "end": 34.901
          },
          {
            "word": "bord, ",
            "start": 34.901,
            "end": 35.349
          },
          {
            "word": "pis ",
            "start": 35.349,
            "end": 35.47
          },
          {
            "word": "j'y ",
            "start": 35.47,
            "end": 35.838
          },
          {
            "word": "touche ",
            "start": 35.838,
            "end": 36.002
          },
          {
            "word": "encore",
            "start": 36.002,
            "end": 36.124
          }
        ]
      },
      {
        "verseStart": 36.124,
        "verseEnd": 38.293,
        "words": [
          {
            "word": "J'ai ",
            "start": 36.124,
            "end": 36.613
          },
          {
            "word": "vu ",
            "start": 36.613,
            "end": 36.735
          },
          {
            "word": "le ",
            "start": 36.735,
            "end": 36.86
          },
          {
            "word": "loup, ",
            "start": 36.86,
            "end": 37.186
          },
          {
            "word": "le ",
            "start": 37.186,
            "end": 37.308
          },
          {
            "word": "renard, ",
            "start": 37.308,
            "end": 37.431
          },
          {
            "word": "le ",
            "start": 37.431,
            "end": 37.675
          },
          {
            "word": "lièvre",
            "start": 37.675,
            "end": 38.293
          }
        ]
      },
      {
        "verseStart": 38.293,
        "verseEnd": 40.216,
        "words": [
          {
            "word": "J'ai ",
            "start": 38.293,
            "end": 38.618
          },
          {
            "word": "vu ",
            "start": 38.618,
            "end": 38.74
          },
          {
            "word": "le ",
            "start": 38.74,
            "end": 38.821
          },
          {
            "word": "loup, ",
            "start": 38.821,
            "end": 39.065
          },
          {
            "word": "le ",
            "start": 39.065,
            "end": 39.19
          },
          {
            "word": "renard ",
            "start": 39.19,
            "end": 39.516
          },
          {
            "word": "passer",
            "start": 39.516,
            "end": 40.216
          }
        ]
      },
      {
        "verseStart": 40.216,
        "verseEnd": 42.067,
        "words": [
          {
            "word": "(J'ai ",
            "start": 40.216,
            "end": 40.461
          },
          {
            "word": "vu ",
            "start": 40.461,
            "end": 40.584
          },
          {
            "word": "le ",
            "start": 40.584,
            "end": 40.706
          },
          {
            "word": "loup, ",
            "start": 40.706,
            "end": 40.91
          },
          {
            "word": "le ",
            "start": 40.91,
            "end": 41.077
          },
          {
            "word": "renard, ",
            "start": 41.077,
            "end": 41.371
          },
          {
            "word": "le ",
            "start": 41.371,
            "end": 41.657
          },
          {
            "word": "lièvre)",
            "start": 41.657,
            "end": 42.067
          }
        ]
      },
      {
        "verseStart": 42.067,
        "verseEnd": 43.92,
        "words": [
          {
            "word": "(J'ai ",
            "start": 42.067,
            "end": 42.312
          },
          {
            "word": "vu ",
            "start": 42.312,
            "end": 42.479
          },
          {
            "word": "le ",
            "start": 42.479,
            "end": 42.562
          },
          {
            "word": "loup, ",
            "start": 42.562,
            "end": 42.81
          },
          {
            "word": "le ",
            "start": 42.81,
            "end": 43.059
          },
          {
            "word": "renard ",
            "start": 43.059,
            "end": 43.267
          },
          {
            "word": "passer)",
            "start": 43.267,
            "end": 43.92
          }
        ]
      },
      {
        "verseStart": 43.92,
        "verseEnd": 45.763,
        "words": [
          {
            "word": "Trois ",
            "start": 43.92,
            "end": 44.164
          },
          {
            "word": "beaux ",
            "start": 44.164,
            "end": 44.329
          },
          {
            "word": "canards ",
            "start": 44.329,
            "end": 44.411
          },
          {
            "word": "s'en ",
            "start": 44.411,
            "end": 44.655
          },
          {
            "word": "vont ",
            "start": 44.655,
            "end": 45.065
          },
          {
            "word": "baignant",
            "start": 45.065,
            "end": 45.763
          }
        ]
      },
      {
        "verseStart": 45.763,
        "verseEnd": 47.691,
        "words": [
          {
            "word": "Ferme ",
            "start": 45.763,
            "end": 46.008
          },
          {
            "word": "donc ",
            "start": 46.008,
            "end": 46.131
          },
          {
            "word": "ta ",
            "start": 46.131,
            "end": 46.253
          },
          {
            "word": "boite, ",
            "start": 46.253,
            "end": 46.502
          },
          {
            "word": "laisse-",
            "start": 46.502,
            "end": 46.747
          },
          {
            "word": "moé ",
            "start": 46.747,
            "end": 46.991
          },
          {
            "word": "donc ",
            "start": 46.991,
            "end": 47.202
          },
          {
            "word": "chanter",
            "start": 47.202,
            "end": 47.691
          }
        ]
      },
      {
        "verseStart": 47.691,
        "verseEnd": 49.499,
        "words": [
          {
            "word": "(Trois ",
            "start": 47.691,
            "end": 47.895
          },
          {
            "word": "beaux ",
            "start": 47.895,
            "end": 48.27
          },
          {
            "word": "canards ",
            "start": 48.27,
            "end": 48.513
          },
          {
            "word": "s'en ",
            "start": 48.513,
            "end": 48.758
          },
          {
            "word": "vont ",
            "start": 48.758,
            "end": 48.961
          },
          {
            "word": "baignant)",
            "start": 48.961,
            "end": 49.499
          }
        ]
      },
      {
        "verseStart": 49.499,
        "verseEnd": 51.411,
        "words": [
          {
            "word": "(Ferme ",
            "start": 49.499,
            "end": 49.785
          },
          {
            "word": "donc ",
            "start": 49.785,
            "end": 49.907
          },
          {
            "word": "ta ",
            "start": 49.907,
            "end": 50.028
          },
          {
            "word": "boite, ",
            "start": 50.028,
            "end": 50.272
          },
          {
            "word": "laisse-",
            "start": 50.272,
            "end": 50.395
          },
          {
            "word": "moé ",
            "start": 50.395,
            "end": 50.476
          },
          {
            "word": "donc ",
            "start": 50.476,
            "end": 50.801
          },
          {
            "word": "chanter)",
            "start": 50.801,
            "end": 51.411
          }
        ]
      },
      {
        "verseStart": 51.411,
        "verseEnd": 53.122,
        "words": [
          {
            "word": "Le ",
            "start": 51.411,
            "end": 51.655
          },
          {
            "word": "fils ",
            "start": 51.655,
            "end": 51.777
          },
          {
            "word": "du ",
            "start": 51.777,
            "end": 51.9
          },
          {
            "word": "roi ",
            "start": 51.9,
            "end": 52.144
          },
          {
            "word": "s'en ",
            "start": 52.144,
            "end": 52.389
          },
          {
            "word": "va ",
            "start": 52.389,
            "end": 52.591
          },
          {
            "word": "chassant",
            "start": 52.591,
            "end": 53.122
          }
        ]
      },
      {
        "verseStart": 53.122,
        "verseEnd": 54.308,
        "words": [
          {
            "word": "Touchez ",
            "start": 53.122,
            "end": 53.325
          },
          {
            "word": "haut, ",
            "start": 53.325,
            "end": 53.615
          },
          {
            "word": "touchez ",
            "start": 53.615,
            "end": 53.697
          },
          {
            "word": "bas, ",
            "start": 53.697,
            "end": 54.022
          },
          {
            "word": "touchez-",
            "start": 54.022,
            "end": 54.145
          },
          {
            "word": "y",
            "start": 54.145,
            "end": 54.308
          }
        ]
      },
      {
        "verseStart": 54.308,
        "verseEnd": 56.071,
        "words": [
          {
            "word": "Touchez-",
            "start": 54.308,
            "end": 54.514
          },
          {
            "word": "y ",
            "start": 54.514,
            "end": 54.637
          },
          {
            "word": "pas, ",
            "start": 54.637,
            "end": 54.841
          },
          {
            "word": "laissez ",
            "start": 54.841,
            "end": 54.966
          },
          {
            "word": "ça ",
            "start": 54.966,
            "end": 55.089
          },
          {
            "word": "là, ",
            "start": 55.089,
            "end": 55.252
          },
          {
            "word": "maman ",
            "start": 55.252,
            "end": 55.537
          },
          {
            "word": "veut ",
            "start": 55.537,
            "end": 55.62
          },
          {
            "word": "pas",
            "start": 55.62,
            "end": 56.071
          }
        ]
      },
      {
        "verseStart": 56.071,
        "verseEnd": 57.92,
        "words": [
          {
            "word": "J'la ",
            "start": 56.071,
            "end": 56.192
          },
          {
            "word": "dévire ",
            "start": 56.192,
            "end": 56.318
          },
          {
            "word": "de ",
            "start": 56.318,
            "end": 56.44
          },
          {
            "word": "bord ",
            "start": 56.44,
            "end": 56.767
          },
          {
            "word": "pis ",
            "start": 56.767,
            "end": 56.89
          },
          {
            "word": "j'y ",
            "start": 56.89,
            "end": 56.972
          },
          {
            "word": "touche ",
            "start": 56.972,
            "end": 57.221
          },
          {
            "word": "encore",
            "start": 57.221,
            "end": 57.92
          }
        ]
      },
      {
        "verseStart": 57.92,
        "verseEnd": 59.84,
        "words": [
          {
            "word": "J'ai ",
            "start": 57.92,
            "end": 58.162
          },
          {
            "word": "vu ",
            "start": 58.162,
            "end": 58.286
          },
          {
            "word": "le ",
            "start": 58.286,
            "end": 58.409
          },
          {
            "word": "loup, ",
            "start": 58.409,
            "end": 58.655
          },
          {
            "word": "le ",
            "start": 58.655,
            "end": 58.776
          },
          {
            "word": "renard, ",
            "start": 58.776,
            "end": 59.143
          },
          {
            "word": "le ",
            "start": 59.143,
            "end": 59.309
          },
          {
            "word": "lièvre",
            "start": 59.309,
            "end": 59.84
          }
        ]
      },
      {
        "verseStart": 59.84,
        "verseEnd": 61.716,
        "words": [
          {
            "word": "J'ai ",
            "start": 59.84,
            "end": 60.084
          },
          {
            "word": "vu ",
            "start": 60.084,
            "end": 60.207
          },
          {
            "word": "le ",
            "start": 60.207,
            "end": 60.33
          },
          {
            "word": "loup, ",
            "start": 60.33,
            "end": 60.452
          },
          {
            "word": "le ",
            "start": 60.452,
            "end": 60.657
          },
          {
            "word": "renard ",
            "start": 60.657,
            "end": 60.943
          },
          {
            "word": "passer",
            "start": 60.943,
            "end": 61.716
          }
        ]
      },
      {
        "verseStart": 61.716,
        "verseEnd": 63.56,
        "words": [
          {
            "word": "(J'ai ",
            "start": 61.716,
            "end": 61.961
          },
          {
            "word": "vu ",
            "start": 61.961,
            "end": 62.083
          },
          {
            "word": "le ",
            "start": 62.083,
            "end": 62.207
          },
          {
            "word": "loup, ",
            "start": 62.207,
            "end": 62.411
          },
          {
            "word": "le ",
            "start": 62.411,
            "end": 62.533
          },
          {
            "word": "renard, ",
            "start": 62.533,
            "end": 62.905
          },
          {
            "word": "le ",
            "start": 62.905,
            "end": 63.109
          },
          {
            "word": "lièvre)",
            "start": 63.109,
            "end": 63.56
          }
        ]
      },
      {
        "verseStart": 63.56,
        "verseEnd": 65.414,
        "words": [
          {
            "word": "(J'ai ",
            "start": 63.56,
            "end": 63.811
          },
          {
            "word": "vu ",
            "start": 63.811,
            "end": 63.934
          },
          {
            "word": "le ",
            "start": 63.934,
            "end": 64.097
          },
          {
            "word": "loup, ",
            "start": 64.097,
            "end": 64.302
          },
          {
            "word": "le ",
            "start": 64.302,
            "end": 64.424
          },
          {
            "word": "renard ",
            "start": 64.424,
            "end": 64.88
          },
          {
            "word": "passer)",
            "start": 64.88,
            "end": 65.414
          }
        ]
      },
      {
        "verseStart": 65.414,
        "verseEnd": 67.318,
        "words": [
          {
            "word": "Le ",
            "start": 65.414,
            "end": 65.659
          },
          {
            "word": "fils ",
            "start": 65.659,
            "end": 65.821
          },
          {
            "word": "du ",
            "start": 65.821,
            "end": 65.945
          },
          {
            "word": "roi ",
            "start": 65.945,
            "end": 66.148
          },
          {
            "word": "s'en ",
            "start": 66.148,
            "end": 66.361
          },
          {
            "word": "va ",
            "start": 66.361,
            "end": 66.607
          },
          {
            "word": "chassant",
            "start": 66.607,
            "end": 67.318
          }
        ]
      },
      {
        "verseStart": 67.318,
        "verseEnd": 69.209,
        "words": [
          {
            "word": "Ferme ",
            "start": 67.318,
            "end": 67.528
          },
          {
            "word": "donc ",
            "start": 67.528,
            "end": 67.69
          },
          {
            "word": "ta ",
            "start": 67.69,
            "end": 67.933
          },
          {
            "word": "boite, ",
            "start": 67.933,
            "end": 68.099
          },
          {
            "word": "laisse-",
            "start": 68.099,
            "end": 68.221
          },
          {
            "word": "moé ",
            "start": 68.221,
            "end": 68.466
          },
          {
            "word": "donc ",
            "start": 68.466,
            "end": 68.634
          },
          {
            "word": "chanter",
            "start": 68.634,
            "end": 69.209
          }
        ]
      },
      {
        "verseStart": 69.209,
        "verseEnd": 71.053,
        "words": [
          {
            "word": "(Le ",
            "start": 69.209,
            "end": 69.413
          },
          {
            "word": "fils ",
            "start": 69.413,
            "end": 69.536
          },
          {
            "word": "du ",
            "start": 69.536,
            "end": 69.662
          },
          {
            "word": "roi ",
            "start": 69.662,
            "end": 69.866
          },
          {
            "word": "s'en ",
            "start": 69.866,
            "end": 70.113
          },
          {
            "word": "va ",
            "start": 70.113,
            "end": 70.398
          },
          {
            "word": "chassant)",
            "start": 70.398,
            "end": 71.053
          }
        ]
      },
      {
        "verseStart": 71.053,
        "verseEnd": 72.898,
        "words": [
          {
            "word": "(Ferme ",
            "start": 71.053,
            "end": 71.259
          },
          {
            "word": "donc ",
            "start": 71.259,
            "end": 71.422
          },
          {
            "word": "ta ",
            "start": 71.422,
            "end": 71.504
          },
          {
            "word": "boite, ",
            "start": 71.504,
            "end": 71.752
          },
          {
            "word": "laisse-",
            "start": 71.752,
            "end": 71.874
          },
          {
            "word": "moé ",
            "start": 71.874,
            "end": 71.996
          },
          {
            "word": "donc ",
            "start": 71.996,
            "end": 72.241
          },
          {
            "word": "chanter)",
            "start": 72.241,
            "end": 72.898
          }
        ]
      },
      {
        "verseStart": 72.898,
        "verseEnd": 74.578,
        "words": [
          {
            "word": "Avec ",
            "start": 72.898,
            "end": 73.145
          },
          {
            "word": "son ",
            "start": 73.145,
            "end": 73.392
          },
          {
            "word": "beau ",
            "start": 73.392,
            "end": 73.64
          },
          {
            "word": "fusil ",
            "start": 73.64,
            "end": 74.09
          },
          {
            "word": "d'argent",
            "start": 74.09,
            "end": 74.578
          }
        ]
      },
      {
        "verseStart": 74.578,
        "verseEnd": 75.805,
        "words": [
          {
            "word": "Touchez ",
            "start": 74.578,
            "end": 74.741
          },
          {
            "word": "haut, ",
            "start": 74.741,
            "end": 75.068
          },
          {
            "word": "touchez ",
            "start": 75.068,
            "end": 75.314
          },
          {
            "word": "bas, ",
            "start": 75.314,
            "end": 75.518
          },
          {
            "word": "touchez-",
            "start": 75.518,
            "end": 75.64
          },
          {
            "word": "y",
            "start": 75.64,
            "end": 75.805
          }
        ]
      },
      {
        "verseStart": 75.805,
        "verseEnd": 77.607,
        "words": [
          {
            "word": "Touchez-",
            "start": 75.805,
            "end": 76.05
          },
          {
            "word": "y ",
            "start": 76.05,
            "end": 76.214
          },
          {
            "word": "pas, ",
            "start": 76.214,
            "end": 76.417
          },
          {
            "word": "laissez ",
            "start": 76.417,
            "end": 76.539
          },
          {
            "word": "ça ",
            "start": 76.539,
            "end": 76.66
          },
          {
            "word": "là, ",
            "start": 76.66,
            "end": 76.783
          },
          {
            "word": "maman ",
            "start": 76.783,
            "end": 76.905
          },
          {
            "word": "veut ",
            "start": 76.905,
            "end": 77.149
          },
          {
            "word": "pas",
            "start": 77.149,
            "end": 77.607
          }
        ]
      },
      {
        "verseStart": 77.607,
        "verseEnd": 79.493,
        "words": [
          {
            "word": "J'la ",
            "start": 77.607,
            "end": 77.689
          },
          {
            "word": "dévire ",
            "start": 77.689,
            "end": 77.812
          },
          {
            "word": "de ",
            "start": 77.812,
            "end": 77.935
          },
          {
            "word": "bord, ",
            "start": 77.935,
            "end": 78.302
          },
          {
            "word": "pis ",
            "start": 78.302,
            "end": 78.424
          },
          {
            "word": "j'y ",
            "start": 78.424,
            "end": 78.506
          },
          {
            "word": "touche ",
            "start": 78.506,
            "end": 78.792
          },
          {
            "word": "encore",
            "start": 78.792,
            "end": 79.493
          }
        ]
      },
      {
        "verseStart": 79.493,
        "verseEnd": 81.33,
        "words": [
          {
            "word": "J'ai ",
            "start": 79.493,
            "end": 79.697
          },
          {
            "word": "vu ",
            "start": 79.697,
            "end": 79.82
          },
          {
            "word": "le ",
            "start": 79.82,
            "end": 79.942
          },
          {
            "word": "loup, ",
            "start": 79.942,
            "end": 80.187
          },
          {
            "word": "le ",
            "start": 80.187,
            "end": 80.391
          },
          {
            "word": "renard, ",
            "start": 80.391,
            "end": 80.638
          },
          {
            "word": "le ",
            "start": 80.638,
            "end": 80.841
          },
          {
            "word": "lièvre",
            "start": 80.841,
            "end": 81.33
          }
        ]
      },
      {
        "verseStart": 81.33,
        "verseEnd": 83.254,
        "words": [
          {
            "word": "J'ai ",
            "start": 81.33,
            "end": 81.575
          },
          {
            "word": "vu ",
            "start": 81.575,
            "end": 81.737
          },
          {
            "word": "le ",
            "start": 81.737,
            "end": 81.863
          },
          {
            "word": "loup, ",
            "start": 81.863,
            "end": 82.07
          },
          {
            "word": "le ",
            "start": 82.07,
            "end": 82.274
          },
          {
            "word": "renard ",
            "start": 82.274,
            "end": 82.519
          },
          {
            "word": "passer",
            "start": 82.519,
            "end": 83.254
          }
        ]
      },
      {
        "verseStart": 83.254,
        "verseEnd": 85.179,
        "words": [
          {
            "word": "(J'ai ",
            "start": 83.254,
            "end": 83.5
          },
          {
            "word": "vu ",
            "start": 83.5,
            "end": 83.626
          },
          {
            "word": "le ",
            "start": 83.626,
            "end": 83.748
          },
          {
            "word": "loup, ",
            "start": 83.748,
            "end": 83.992
          },
          {
            "word": "le ",
            "start": 83.992,
            "end": 84.237
          },
          {
            "word": "renard, ",
            "start": 84.237,
            "end": 84.44
          },
          {
            "word": "le ",
            "start": 84.44,
            "end": 84.687
          },
          {
            "word": "lièvre)",
            "start": 84.687,
            "end": 85.179
          }
        ]
      },
      {
        "verseStart": 85.179,
        "verseEnd": 86.977,
        "words": [
          {
            "word": "(J'ai ",
            "start": 85.179,
            "end": 85.383
          },
          {
            "word": "vu ",
            "start": 85.383,
            "end": 85.549
          },
          {
            "word": "le ",
            "start": 85.549,
            "end": 85.63
          },
          {
            "word": "loup, ",
            "start": 85.63,
            "end": 85.875
          },
          {
            "word": "le ",
            "start": 85.875,
            "end": 86.119
          },
          {
            "word": "renard ",
            "start": 86.119,
            "end": 86.323
          },
          {
            "word": "passer)",
            "start": 86.323,
            "end": 86.977
          }
        ]
      },
      {
        "verseStart": 86.977,
        "verseEnd": 88.859,
        "words": [
          {
            "word": "Avec ",
            "start": 86.977,
            "end": 87.22
          },
          {
            "word": "son ",
            "start": 87.22,
            "end": 87.466
          },
          {
            "word": "beau ",
            "start": 87.466,
            "end": 87.715
          },
          {
            "word": "fusil ",
            "start": 87.715,
            "end": 88.165
          },
          {
            "word": "d'argent",
            "start": 88.165,
            "end": 88.859
          }
        ]
      },
      {
        "verseStart": 88.859,
        "verseEnd": 90.741,
        "words": [
          {
            "word": "Ferme ",
            "start": 88.859,
            "end": 89.102
          },
          {
            "word": "donc ",
            "start": 89.102,
            "end": 89.226
          },
          {
            "word": "ta ",
            "start": 89.226,
            "end": 89.349
          },
          {
            "word": "boite, ",
            "start": 89.349,
            "end": 89.556
          },
          {
            "word": "laisse-",
            "start": 89.556,
            "end": 89.801
          },
          {
            "word": "moé ",
            "start": 89.801,
            "end": 90.045
          },
          {
            "word": "donc ",
            "start": 90.045,
            "end": 90.25
          },
          {
            "word": "chanter",
            "start": 90.25,
            "end": 90.741
          }
        ]
      },
      {
        "verseStart": 90.741,
        "verseEnd": 92.671,
        "words": [
          {
            "word": "(Avec ",
            "start": 90.741,
            "end": 90.987
          },
          {
            "word": "son ",
            "start": 90.987,
            "end": 91.232
          },
          {
            "word": "beau ",
            "start": 91.232,
            "end": 91.477
          },
          {
            "word": "fusil ",
            "start": 91.477,
            "end": 91.93
          },
          {
            "word": "d'argent)",
            "start": 91.93,
            "end": 92.671
          }
        ]
      },
      {
        "verseStart": 92.671,
        "verseEnd": 94.51,
        "words": [
          {
            "word": "(Ferme ",
            "start": 92.671,
            "end": 92.916
          },
          {
            "word": "donc ",
            "start": 92.916,
            "end": 93.04
          },
          {
            "word": "ta ",
            "start": 93.04,
            "end": 93.162
          },
          {
            "word": "boite, ",
            "start": 93.162,
            "end": 93.367
          },
          {
            "word": "laisse-",
            "start": 93.367,
            "end": 93.613
          },
          {
            "word": "moé ",
            "start": 93.613,
            "end": 93.818
          },
          {
            "word": "donc ",
            "start": 93.818,
            "end": 94.061
          },
          {
            "word": "chanter)",
            "start": 94.061,
            "end": 94.51
          }
        ]
      },
      {
        "verseStart": 94.51,
        "verseEnd": 96.191,
        "words": [
          {
            "word": "Visa ",
            "start": 94.51,
            "end": 94.754
          },
          {
            "word": "le ",
            "start": 94.754,
            "end": 95
          },
          {
            "word": "noir, ",
            "start": 95,
            "end": 95.246
          },
          {
            "word": "tua ",
            "start": 95.246,
            "end": 95.7
          },
          {
            "word": "le ",
            "start": 95.7,
            "end": 95.945
          },
          {
            "word": "blanc",
            "start": 95.945,
            "end": 96.191
          }
        ]
      },
      {
        "verseStart": 96.191,
        "verseEnd": 97.586,
        "words": [
          {
            "word": "Touchez ",
            "start": 96.191,
            "end": 96.397
          },
          {
            "word": "haut, ",
            "start": 96.397,
            "end": 96.687
          },
          {
            "word": "touchez ",
            "start": 96.687,
            "end": 96.931
          },
          {
            "word": "bas, ",
            "start": 96.931,
            "end": 97.137
          },
          {
            "word": "touchez-",
            "start": 97.137,
            "end": 97.34
          },
          {
            "word": "y",
            "start": 97.34,
            "end": 97.586
          }
        ]
      },
      {
        "verseStart": 97.586,
        "verseEnd": 99.226,
        "words": [
          {
            "word": "Touchez-",
            "start": 97.586,
            "end": 97.709
          },
          {
            "word": "y ",
            "start": 97.709,
            "end": 97.832
          },
          {
            "word": "pas, ",
            "start": 97.832,
            "end": 98.081
          },
          {
            "word": "laissez ",
            "start": 98.081,
            "end": 98.244
          },
          {
            "word": "ça ",
            "start": 98.244,
            "end": 98.407
          },
          {
            "word": "là, ",
            "start": 98.407,
            "end": 98.572
          },
          {
            "word": "maman ",
            "start": 98.572,
            "end": 98.694
          },
          {
            "word": "veut ",
            "start": 98.694,
            "end": 98.817
          },
          {
            "word": "pas",
            "start": 98.817,
            "end": 99.226
          }
        ]
      },
      {
        "verseStart": 99.226,
        "verseEnd": 101.074,
        "words": [
          {
            "word": "J'la ",
            "start": 99.226,
            "end": 99.349
          },
          {
            "word": "dévire ",
            "start": 99.349,
            "end": 99.431
          },
          {
            "word": "de ",
            "start": 99.431,
            "end": 99.555
          },
          {
            "word": "bord ",
            "start": 99.555,
            "end": 99.677
          },
          {
            "word": "pis ",
            "start": 99.677,
            "end": 99.964
          },
          {
            "word": "j'y ",
            "start": 99.964,
            "end": 100.13
          },
          {
            "word": "touche ",
            "start": 100.13,
            "end": 100.377
          },
          {
            "word": "encore",
            "start": 100.377,
            "end": 101.074
          }
        ]
      },
      {
        "verseStart": 101.074,
        "verseEnd": 102.995,
        "words": [
          {
            "word": "J'ai ",
            "start": 101.074,
            "end": 101.32
          },
          {
            "word": "vu ",
            "start": 101.32,
            "end": 101.442
          },
          {
            "word": "le ",
            "start": 101.442,
            "end": 101.564
          },
          {
            "word": "loup, ",
            "start": 101.564,
            "end": 101.769
          },
          {
            "word": "le ",
            "start": 101.769,
            "end": 101.891
          },
          {
            "word": "renard, ",
            "start": 101.891,
            "end": 102.013
          },
          {
            "word": "le ",
            "start": 102.013,
            "end": 102.502
          },
          {
            "word": "lièvre",
            "start": 102.502,
            "end": 102.995
          }
        ]
      },
      {
        "verseStart": 102.995,
        "verseEnd": 104.853,
        "words": [
          {
            "word": "J'ai ",
            "start": 102.995,
            "end": 103.2
          },
          {
            "word": "vu ",
            "start": 103.2,
            "end": 103.324
          },
          {
            "word": "le ",
            "start": 103.324,
            "end": 103.445
          },
          {
            "word": "loup, ",
            "start": 103.445,
            "end": 103.691
          },
          {
            "word": "le ",
            "start": 103.691,
            "end": 103.939
          },
          {
            "word": "renard ",
            "start": 103.939,
            "end": 104.146
          },
          {
            "word": "passer",
            "start": 104.146,
            "end": 104.853
          }
        ]
      },
      {
        "verseStart": 104.853,
        "verseEnd": 106.735,
        "words": [
          {
            "word": "(J'ai ",
            "start": 104.853,
            "end": 105.097
          },
          {
            "word": "vu ",
            "start": 105.097,
            "end": 105.221
          },
          {
            "word": "le ",
            "start": 105.221,
            "end": 105.344
          },
          {
            "word": "loup, ",
            "start": 105.344,
            "end": 105.588
          },
          {
            "word": "le ",
            "start": 105.588,
            "end": 105.875
          },
          {
            "word": "renard, ",
            "start": 105.875,
            "end": 106.119
          },
          {
            "word": "le ",
            "start": 106.119,
            "end": 106.322
          },
          {
            "word": "lièvre)",
            "start": 106.322,
            "end": 106.735
          }
        ]
      },
      {
        "verseStart": 106.735,
        "verseEnd": 109.886,
        "words": [
          {
            "word": "(J'ai ",
            "start": 106.735,
            "end": 106.985
          },
          {
            "word": "vu ",
            "start": 106.985,
            "end": 107.112
          },
          {
            "word": "le ",
            "start": 107.112,
            "end": 107.234
          },
          {
            "word": "loup, ",
            "start": 107.234,
            "end": 107.438
          },
          {
            "word": "le ",
            "start": 107.438,
            "end": 107.683
          },
          {
            "word": "renard ",
            "start": 107.683,
            "end": 107.886
          },
          {
            "word": "passer)",
            "start": 107.886,
            "end": 0
          }
        ]
      }
    ]
  },
  "LUCKHAOS - É a União Flasco.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 11.18,
        "verseEnd": 12.118,
        "words": [
          {
            "word": "ちゃ ",
            "start": 11.18,
            "end": 11.303
          },
          {
            "word": "ちゃ",
            "start": 11.303,
            "end": 11.425
          },
          {
            "word": "っと ",
            "start": 11.425,
            "end": 11.547
          },
          {
            "word": "や",
            "start": 11.547,
            "end": 11.629
          },
          {
            "word": "ろか",
            "start": 11.629,
            "end": 12.118
          }
        ],
        "speaker": "<i>Girl:</i>"
      },
      {
        "verseStart": 12.118,
        "verseEnd": 14.208,
        "words": [
          {
            "word": "É ",
            "start": 12.118,
            "end": 12.24
          },
          {
            "word": "a ",
            "start": 12.24,
            "end": 12.363
          },
          {
            "word": "união ",
            "start": 12.363,
            "end": 12.611
          },
          {
            "word": "Flasco, ",
            "start": 12.611,
            "end": 13.182
          },
          {
            "word": "mano, ",
            "start": 13.182,
            "end": 13.308
          },
          {
            "word": "é ",
            "start": 13.308,
            "end": 13.434
          },
          {
            "word": "sem ",
            "start": 13.434,
            "end": 13.597
          },
          {
            "word": "caô",
            "start": 13.597,
            "end": 14.208
          }
        ]
      },
      {
        "verseStart": 14.208,
        "verseEnd": 15.714,
        "words": [
          {
            "word": "Batendo ",
            "start": 14.208,
            "end": 14.33
          },
          {
            "word": "punheta ",
            "start": 14.33,
            "end": 14.98
          },
          {
            "word": "com ",
            "start": 14.98,
            "end": 15.103
          },
          {
            "word": "pau ",
            "start": 15.103,
            "end": 15.306
          },
          {
            "word": "no ",
            "start": 15.306,
            "end": 15.469
          },
          {
            "word": "ventilador",
            "start": 15.469,
            "end": 15.714
          }
        ]
      },
      {
        "verseStart": 15.714,
        "verseEnd": 17.757,
        "words": [
          {
            "word": "E ",
            "start": 15.714,
            "end": 15.877
          },
          {
            "word": "se ",
            "start": 15.877,
            "end": 15.999
          },
          {
            "word": "essa ",
            "start": 15.999,
            "end": 16.121
          },
          {
            "word": "mina ",
            "start": 16.121,
            "end": 16.286
          },
          {
            "word": "falar ",
            "start": 16.286,
            "end": 16.449
          },
          {
            "word": "merda, ",
            "start": 16.449,
            "end": 16.694
          },
          {
            "word": "vai ",
            "start": 16.694,
            "end": 16.898
          },
          {
            "word": "ficar ",
            "start": 16.898,
            "end": 17.102
          },
          {
            "word": "sem ",
            "start": 17.102,
            "end": 17.309
          },
          {
            "word": "cabelo",
            "start": 17.309,
            "end": 17.757
          }
        ]
      },
      {
        "verseStart": 17.757,
        "verseEnd": 19.775,
        "words": [
          {
            "word": "Eu ",
            "start": 17.757,
            "end": 17.882
          },
          {
            "word": "vou ",
            "start": 17.882,
            "end": 18.009
          },
          {
            "word": "raspar ",
            "start": 18.009,
            "end": 18.131
          },
          {
            "word": "a ",
            "start": 18.131,
            "end": 18.254
          },
          {
            "word": "cabeça ",
            "start": 18.254,
            "end": 18.457
          },
          {
            "word": "dela, ",
            "start": 18.457,
            "end": 18.624
          },
          {
            "word": "sem ",
            "start": 18.624,
            "end": 18.831
          },
          {
            "word": "usar ",
            "start": 18.831,
            "end": 19.118
          },
          {
            "word": "barbeador",
            "start": 19.118,
            "end": 19.775
          }
        ]
      },
      {
        "verseStart": 19.775,
        "verseEnd": 22.269,
        "words": [
          {
            "word": "É ",
            "start": 19.775,
            "end": 19.898
          },
          {
            "word": "a ",
            "start": 19.898,
            "end": 20.02
          },
          {
            "word": "união ",
            "start": 20.02,
            "end": 20.224
          },
          {
            "word": "Flasco, ",
            "start": 20.224,
            "end": 21.252
          },
          {
            "word": "Câmera ",
            "start": 21.252,
            "end": 21.659
          },
          {
            "word": "Privê",
            "start": 21.659,
            "end": 22.269
          }
        ]
      },
      {
        "verseStart": 22.269,
        "verseEnd": 23.834,
        "words": [
          {
            "word": "Tu ",
            "start": 22.269,
            "end": 22.392
          },
          {
            "word": "responde ",
            "start": 22.392,
            "end": 22.515
          },
          {
            "word": "o ",
            "start": 22.515,
            "end": 22.636
          },
          {
            "word": "chat ",
            "start": 22.636,
            "end": 22.759
          },
          {
            "word": "enquanto ",
            "start": 22.759,
            "end": 23.01
          },
          {
            "word": "eu ",
            "start": 23.01,
            "end": 23.256
          },
          {
            "word": "meto ",
            "start": 23.256,
            "end": 23.504
          },
          {
            "word": "ni ",
            "start": 23.504,
            "end": 23.708
          },
          {
            "word": "você",
            "start": 23.708,
            "end": 23.834
          }
        ]
      },
      {
        "verseStart": 23.834,
        "verseEnd": 25.838,
        "words": [
          {
            "word": "Magé ",
            "start": 23.834,
            "end": 23.956
          },
          {
            "word": "é ",
            "start": 23.956,
            "end": 24.083
          },
          {
            "word": "do ",
            "start": 24.083,
            "end": 24.246
          },
          {
            "word": "lado ",
            "start": 24.246,
            "end": 24.368
          },
          {
            "word": "da ",
            "start": 24.368,
            "end": 24.49
          },
          {
            "word": "minha ",
            "start": 24.49,
            "end": 24.612
          },
          {
            "word": "casa, ",
            "start": 24.612,
            "end": 24.694
          },
          {
            "word": "nessa ",
            "start": 24.694,
            "end": 24.859
          },
          {
            "word": "porra ",
            "start": 24.859,
            "end": 25.026
          },
          {
            "word": "caiu ",
            "start": 25.026,
            "end": 25.392
          },
          {
            "word": "ET",
            "start": 25.392,
            "end": 25.838
          }
        ]
      },
      {
        "verseStart": 25.838,
        "verseEnd": 27.837,
        "words": [
          {
            "word": "Se ",
            "start": 25.838,
            "end": 25.96
          },
          {
            "word": "eles ",
            "start": 25.96,
            "end": 26.082
          },
          {
            "word": "brotar ",
            "start": 26.082,
            "end": 26.204
          },
          {
            "word": "chei' ",
            "start": 26.204,
            "end": 26.326
          },
          {
            "word": "de ",
            "start": 26.326,
            "end": 26.49
          },
          {
            "word": "cutcharra, ",
            "start": 26.49,
            "end": 26.615
          },
          {
            "word": "eu ",
            "start": 26.615,
            "end": 26.818
          },
          {
            "word": "como ",
            "start": 26.818,
            "end": 27.023
          },
          {
            "word": "eles ",
            "start": 27.023,
            "end": 27.268
          },
          {
            "word": "e ",
            "start": 27.268,
            "end": 27.512
          },
          {
            "word": "você",
            "start": 27.512,
            "end": 27.837
          }
        ]
      },
      {
        "verseStart": 27.837,
        "verseEnd": 30.366,
        "words": [
          {
            "word": "É ",
            "start": 27.837,
            "end": 27.961
          },
          {
            "word": "a ",
            "start": 27.961,
            "end": 28.084
          },
          {
            "word": "união ",
            "start": 28.084,
            "end": 28.287
          },
          {
            "word": "Flasco, ",
            "start": 28.287,
            "end": 29.308
          },
          {
            "word": "vai ",
            "start": 29.308,
            "end": 29.511
          },
          {
            "word": "tomar ",
            "start": 29.511,
            "end": 29.633
          },
          {
            "word": "no ",
            "start": 29.633,
            "end": 29.795
          },
          {
            "word": "cu",
            "start": 29.795,
            "end": 30.366
          }
        ]
      },
      {
        "verseStart": 30.366,
        "verseEnd": 31.601,
        "words": [
          {
            "word": "Se ",
            "start": 30.366,
            "end": 30.488
          },
          {
            "word": "tu ",
            "start": 30.488,
            "end": 30.61
          },
          {
            "word": "é ",
            "start": 30.61,
            "end": 31.026
          },
          {
            "word": "Fluminense, ",
            "start": 31.026,
            "end": 31.149
          },
          {
            "word": "mano, ",
            "start": 31.149,
            "end": 31.23
          },
          {
            "word": "chupa ",
            "start": 31.23,
            "end": 31.351
          },
          {
            "word": "meu ",
            "start": 31.351,
            "end": 31.475
          },
          {
            "word": "piru",
            "start": 31.475,
            "end": 31.601
          }
        ]
      },
      {
        "verseStart": 31.601,
        "verseEnd": 33.925,
        "words": [
          {
            "word": "Só ",
            "start": 31.601,
            "end": 31.708
          },
          {
            "word": "tem ",
            "start": 31.708,
            "end": 31.834
          },
          {
            "word": "maluco ",
            "start": 31.834,
            "end": 32.002
          },
          {
            "word": "abafa-",
            "start": 32.002,
            "end": 32.208
          },
          {
            "word": "crack ",
            "start": 32.208,
            "end": 32.86
          },
          {
            "word": "nessa ",
            "start": 32.86,
            "end": 33.022
          },
          {
            "word": "porra ",
            "start": 33.022,
            "end": 33.476
          },
          {
            "word": "dessa ",
            "start": 33.476,
            "end": 33.639
          },
          {
            "word": "equipe",
            "start": 33.639,
            "end": 33.925
          }
        ]
      },
      {
        "verseStart": 33.925,
        "verseEnd": 36.057,
        "words": [
          {
            "word": "É ",
            "start": 33.925,
            "end": 34.09
          },
          {
            "word": "o ",
            "start": 34.09,
            "end": 34.253
          },
          {
            "word": "trem-",
            "start": 34.253,
            "end": 34.335
          },
          {
            "word": "bala ",
            "start": 34.335,
            "end": 34.539
          },
          {
            "word": "da ",
            "start": 34.539,
            "end": 34.706
          },
          {
            "word": "colina ",
            "start": 34.706,
            "end": 34.91
          },
          {
            "word": "carregando ",
            "start": 34.91,
            "end": 35.444
          },
          {
            "word": "AR-",
            "start": 35.444,
            "end": 35.772
          },
          {
            "word": "15",
            "start": 35.772,
            "end": 36.057
          }
        ]
      },
      {
        "verseStart": 36.057,
        "verseEnd": 38.308,
        "words": [
          {
            "word": "É ",
            "start": 36.057,
            "end": 36.18
          },
          {
            "word": "a ",
            "start": 36.18,
            "end": 36.304
          },
          {
            "word": "união ",
            "start": 36.304,
            "end": 36.47
          },
          {
            "word": "Flasco, ",
            "start": 36.47,
            "end": 37.082
          },
          {
            "word": "nova ",
            "start": 37.082,
            "end": 37.372
          },
          {
            "word": "Ordem ",
            "start": 37.372,
            "end": 37.616
          },
          {
            "word": "Mundial",
            "start": 37.616,
            "end": 38.308
          }
        ]
      },
      {
        "verseStart": 38.308,
        "verseEnd": 40.069,
        "words": [
          {
            "word": "Os ",
            "start": 38.308,
            "end": 38.553
          },
          {
            "word": "botafoguense ",
            "start": 38.553,
            "end": 38.883
          },
          {
            "word": "tudo ",
            "start": 38.883,
            "end": 39.213
          },
          {
            "word": "mamando ",
            "start": 39.213,
            "end": 39.458
          },
          {
            "word": "o ",
            "start": 39.458,
            "end": 39.661
          },
          {
            "word": "meu ",
            "start": 39.661,
            "end": 39.865
          },
          {
            "word": "pau",
            "start": 39.865,
            "end": 40.069
          }
        ]
      },
      {
        "verseStart": 40.069,
        "verseEnd": 42.08,
        "words": [
          {
            "word": "E, ",
            "start": 40.069,
            "end": 40.232
          },
          {
            "word": "pra ",
            "start": 40.232,
            "end": 40.355
          },
          {
            "word": "tu ",
            "start": 40.355,
            "end": 40.478
          },
          {
            "word": "namorar ",
            "start": 40.478,
            "end": 40.643
          },
          {
            "word": "comigo, ",
            "start": 40.643,
            "end": 41.013
          },
          {
            "word": "vai ",
            "start": 41.013,
            "end": 41.177
          },
          {
            "word": "ter ",
            "start": 41.177,
            "end": 41.341
          },
          {
            "word": "que ",
            "start": 41.341,
            "end": 41.504
          },
          {
            "word": "fazer ",
            "start": 41.504,
            "end": 41.708
          },
          {
            "word": "anal",
            "start": 41.708,
            "end": 42.08
          }
        ]
      },
      {
        "verseStart": 42.08,
        "verseEnd": 44.018,
        "words": [
          {
            "word": "E, ",
            "start": 42.08,
            "end": 42.201
          },
          {
            "word": "se ",
            "start": 42.201,
            "end": 42.369
          },
          {
            "word": "tiver ",
            "start": 42.369,
            "end": 42.491
          },
          {
            "word": "dor ",
            "start": 42.491,
            "end": 42.697
          },
          {
            "word": "de ",
            "start": 42.697,
            "end": 42.819
          },
          {
            "word": "barriga, ",
            "start": 42.819,
            "end": 42.941
          },
          {
            "word": "tu ",
            "start": 42.941,
            "end": 43.103
          },
          {
            "word": "vai ",
            "start": 43.103,
            "end": 43.266
          },
          {
            "word": "cagar ",
            "start": 43.266,
            "end": 43.434
          },
          {
            "word": "no ",
            "start": 43.434,
            "end": 43.683
          },
          {
            "word": "meu ",
            "start": 43.683,
            "end": 43.848
          },
          {
            "word": "pau",
            "start": 43.848,
            "end": 44.018
          }
        ]
      },
      {
        "verseStart": 44.018,
        "verseEnd": 46.514,
        "words": [
          {
            "word": "É ",
            "start": 44.018,
            "end": 44.181
          },
          {
            "word": "a ",
            "start": 44.181,
            "end": 44.347
          },
          {
            "word": "união ",
            "start": 44.347,
            "end": 44.515
          },
          {
            "word": "Flasco, ",
            "start": 44.515,
            "end": 45.494
          },
          {
            "word": "bota ",
            "start": 45.494,
            "end": 45.739
          },
          {
            "word": "o ",
            "start": 45.739,
            "end": 45.943
          },
          {
            "word": "Gabigol",
            "start": 45.943,
            "end": 46.514
          }
        ]
      },
      {
        "verseStart": 46.514,
        "verseEnd": 48.086,
        "words": [
          {
            "word": "Ribamar ",
            "start": 46.514,
            "end": 46.885
          },
          {
            "word": "cheirado, ",
            "start": 46.885,
            "end": 47.215
          },
          {
            "word": "nesse ",
            "start": 47.215,
            "end": 47.463
          },
          {
            "word": "jogo, ",
            "start": 47.463,
            "end": 47.708
          },
          {
            "word": "acelerou",
            "start": 47.708,
            "end": 48.086
          }
        ]
      },
      {
        "verseStart": 48.086,
        "verseEnd": 50.144,
        "words": [
          {
            "word": "Se ",
            "start": 48.086,
            "end": 48.251
          },
          {
            "word": "tem ",
            "start": 48.251,
            "end": 48.373
          },
          {
            "word": "traveco ",
            "start": 48.373,
            "end": 48.501
          },
          {
            "word": "nessa ",
            "start": 48.501,
            "end": 48.668
          },
          {
            "word": "festa, ",
            "start": 48.668,
            "end": 49.12
          },
          {
            "word": "por ",
            "start": 49.12,
            "end": 49.284
          },
          {
            "word": "que ",
            "start": 49.284,
            "end": 49.407
          },
          {
            "word": "ninguém ",
            "start": 49.407,
            "end": 49.733
          },
          {
            "word": "me ",
            "start": 49.733,
            "end": 49.937
          },
          {
            "word": "avisou?",
            "start": 49.937,
            "end": 50.144
          }
        ]
      },
      {
        "verseStart": 50.144,
        "verseEnd": 51.984,
        "words": [
          {
            "word": "O ",
            "start": 50.144,
            "end": 50.267
          },
          {
            "word": "meu ",
            "start": 50.267,
            "end": 50.43
          },
          {
            "word": "flow ",
            "start": 50.43,
            "end": 50.592
          },
          {
            "word": "tá ",
            "start": 50.592,
            "end": 50.714
          },
          {
            "word": "tipo ",
            "start": 50.714,
            "end": 50.796
          },
          {
            "word": "Ronaldo, ",
            "start": 50.796,
            "end": 50.919
          },
          {
            "word": "se ",
            "start": 50.919,
            "end": 51.122
          },
          {
            "word": "tem ",
            "start": 51.122,
            "end": 51.245
          },
          {
            "word": "bunda, ",
            "start": 51.245,
            "end": 51.448
          },
          {
            "word": "eu ",
            "start": 51.448,
            "end": 51.613
          },
          {
            "word": "meto ",
            "start": 51.613,
            "end": 51.821
          },
          {
            "word": "gol",
            "start": 51.821,
            "end": 51.984
          }
        ]
      },
      {
        "verseStart": 51.984,
        "verseEnd": 54.572,
        "words": [
          {
            "word": "É ",
            "start": 51.984,
            "end": 52.323
          },
          {
            "word": "a ",
            "start": 52.323,
            "end": 52.527
          },
          {
            "word": "união ",
            "start": 52.527,
            "end": 52.693
          },
          {
            "word": "Flasco, ",
            "start": 52.693,
            "end": 53.51
          },
          {
            "word": "puta ",
            "start": 53.51,
            "end": 53.795
          },
          {
            "word": "que ",
            "start": 53.795,
            "end": 54.04
          },
          {
            "word": "pariu",
            "start": 54.04,
            "end": 54.572
          }
        ]
      },
      {
        "verseStart": 54.572,
        "verseEnd": 56.245,
        "words": [
          {
            "word": "Tua ",
            "start": 54.572,
            "end": 54.695
          },
          {
            "word": "boca ",
            "start": 54.695,
            "end": 54.818
          },
          {
            "word": "é ",
            "start": 54.818,
            "end": 54.982
          },
          {
            "word": "um ",
            "start": 54.982,
            "end": 55.104
          },
          {
            "word": "colete ",
            "start": 55.104,
            "end": 55.266
          },
          {
            "word": "e ",
            "start": 55.266,
            "end": 55.43
          },
          {
            "word": "o ",
            "start": 55.43,
            "end": 55.593
          },
          {
            "word": "meu ",
            "start": 55.593,
            "end": 55.674
          },
          {
            "word": "pau ",
            "start": 55.674,
            "end": 55.797
          },
          {
            "word": "é ",
            "start": 55.797,
            "end": 55.96
          },
          {
            "word": "um ",
            "start": 55.96,
            "end": 56.123
          },
          {
            "word": "fuzil",
            "start": 56.123,
            "end": 56.245
          }
        ]
      },
      {
        "verseStart": 56.245,
        "verseEnd": 58.124,
        "words": [
          {
            "word": "Não ",
            "start": 56.245,
            "end": 56.368
          },
          {
            "word": "vem ",
            "start": 56.368,
            "end": 56.49
          },
          {
            "word": "falar ",
            "start": 56.49,
            "end": 56.616
          },
          {
            "word": "Inglês ",
            "start": 56.616,
            "end": 56.738
          },
          {
            "word": "pra ",
            "start": 56.738,
            "end": 56.861
          },
          {
            "word": "mim, ",
            "start": 56.861,
            "end": 56.983
          },
          {
            "word": "meu ",
            "start": 56.983,
            "end": 57.105
          },
          {
            "word": "mano, ",
            "start": 57.105,
            "end": 57.269
          },
          {
            "word": "eu ",
            "start": 57.269,
            "end": 57.432
          },
          {
            "word": "moro ",
            "start": 57.432,
            "end": 57.676
          },
          {
            "word": "no ",
            "start": 57.676,
            "end": 57.921
          },
          {
            "word": "Brasil",
            "start": 57.921,
            "end": 58.124
          }
        ]
      },
      {
        "verseStart": 58.124,
        "verseEnd": 60.17,
        "words": [
          {
            "word": "Eu ",
            "start": 58.124,
            "end": 58.287
          },
          {
            "word": "tô ",
            "start": 58.287,
            "end": 58.369
          },
          {
            "word": "embrazado ",
            "start": 58.369,
            "end": 58.617
          },
          {
            "word": "de ",
            "start": 58.617,
            "end": 58.78
          },
          {
            "word": "Skol ",
            "start": 58.78,
            "end": 58.944
          },
          {
            "word": "com ",
            "start": 58.944,
            "end": 59.147
          },
          {
            "word": "funk ",
            "start": 59.147,
            "end": 59.31
          },
          {
            "word": "do ",
            "start": 59.31,
            "end": 59.513
          },
          {
            "word": "Buffalo ",
            "start": 59.513,
            "end": 59.677
          },
          {
            "word": "Bill",
            "start": 59.677,
            "end": 60.17
          }
        ]
      },
      {
        "verseStart": 60.17,
        "verseEnd": 62.659,
        "words": [
          {
            "word": "É ",
            "start": 60.17,
            "end": 60.332
          },
          {
            "word": "a ",
            "start": 60.332,
            "end": 60.455
          },
          {
            "word": "união ",
            "start": 60.455,
            "end": 60.62
          },
          {
            "word": "Flasco, ",
            "start": 60.62,
            "end": 61.556
          },
          {
            "word": "tô ",
            "start": 61.556,
            "end": 61.801
          },
          {
            "word": "passando ",
            "start": 61.801,
            "end": 62.046
          },
          {
            "word": "o ",
            "start": 62.046,
            "end": 62.128
          },
          {
            "word": "aço",
            "start": 62.128,
            "end": 62.659
          }
        ]
      },
      {
        "verseStart": 62.659,
        "verseEnd": 64.29,
        "words": [
          {
            "word": "Se ",
            "start": 62.659,
            "end": 62.868
          },
          {
            "word": "tá ",
            "start": 62.868,
            "end": 63.111
          },
          {
            "word": "respirando, ",
            "start": 63.111,
            "end": 63.395
          },
          {
            "word": "eu ",
            "start": 63.395,
            "end": 63.517
          },
          {
            "word": "taco-",
            "start": 63.517,
            "end": 63.68
          },
          {
            "word": "lhe ",
            "start": 63.68,
            "end": 63.883
          },
          {
            "word": "o ",
            "start": 63.883,
            "end": 64.006
          },
          {
            "word": "vapo ",
            "start": 64.006,
            "end": 64.128
          },
          {
            "word": "vapo",
            "start": 64.128,
            "end": 64.29
          }
        ]
      },
      {
        "verseStart": 64.29,
        "verseEnd": 66.136,
        "words": [
          {
            "word": "E, ",
            "start": 64.29,
            "end": 64.412
          },
          {
            "word": "se ",
            "start": 64.412,
            "end": 64.577
          },
          {
            "word": "não '",
            "start": 64.577,
            "end": 64.743
          },
          {
            "word": "tiver ",
            "start": 64.743,
            "end": 64.866
          },
          {
            "word": "respirando, ",
            "start": 64.866,
            "end": 64.947
          },
          {
            "word": "eu ",
            "start": 64.947,
            "end": 65.112
          },
          {
            "word": "vejo ",
            "start": 65.112,
            "end": 65.276
          },
          {
            "word": "se ",
            "start": 65.276,
            "end": 65.439
          },
          {
            "word": "o ",
            "start": 65.439,
            "end": 65.562
          },
          {
            "word": "corpo ",
            "start": 65.562,
            "end": 65.684
          },
          {
            "word": "tá ",
            "start": 65.684,
            "end": 65.848
          },
          {
            "word": "quente",
            "start": 65.848,
            "end": 66.136
          }
        ]
      },
      {
        "verseStart": 66.136,
        "verseEnd": 68.075,
        "words": [
          {
            "word": "Rima ",
            "start": 66.136,
            "end": 66.344
          },
          {
            "word": "de ",
            "start": 66.344,
            "end": 66.634
          },
          {
            "word": "necrofilia, ",
            "start": 66.634,
            "end": 67.251
          },
          {
            "word": "um ",
            "start": 67.251,
            "end": 67.456
          },
          {
            "word": "salve ",
            "start": 67.456,
            "end": 67.579
          },
          {
            "word": "pro ",
            "start": 67.579,
            "end": 67.826
          },
          {
            "word": "presidente",
            "start": 67.826,
            "end": 68.075
          }
        ]
      },
      {
        "verseStart": 68.075,
        "verseEnd": 70.542,
        "words": [
          {
            "word": "É ",
            "start": 68.075,
            "end": 68.281
          },
          {
            "word": "a ",
            "start": 68.281,
            "end": 68.404
          },
          {
            "word": "união ",
            "start": 68.404,
            "end": 68.569
          },
          {
            "word": "Flasco, ",
            "start": 68.569,
            "end": 69.434
          },
          {
            "word": "RJ ",
            "start": 69.434,
            "end": 69.761
          },
          {
            "word": "até ",
            "start": 69.761,
            "end": 69.925
          },
          {
            "word": "o ",
            "start": 69.925,
            "end": 70.129
          },
          {
            "word": "Sul",
            "start": 70.129,
            "end": 70.542
          }
        ]
      },
      {
        "verseStart": 70.542,
        "verseEnd": 72.265,
        "words": [
          {
            "word": "E ",
            "start": 70.542,
            "end": 70.663
          },
          {
            "word": "se ",
            "start": 70.663,
            "end": 70.786
          },
          {
            "word": "me ",
            "start": 70.786,
            "end": 70.909
          },
          {
            "word": "chamar ",
            "start": 70.909,
            "end": 70.99
          },
          {
            "word": "de ",
            "start": 70.99,
            "end": 71.158
          },
          {
            "word": "gaúcho, ",
            "start": 71.158,
            "end": 71.283
          },
          {
            "word": "eu ",
            "start": 71.283,
            "end": 71.446
          },
          {
            "word": "vou ",
            "start": 71.446,
            "end": 71.569
          },
          {
            "word": "mandar ",
            "start": 71.569,
            "end": 71.692
          },
          {
            "word": "tomar ",
            "start": 71.692,
            "end": 71.816
          },
          {
            "word": "no ",
            "start": 71.816,
            "end": 72.143
          },
          {
            "word": "cu",
            "start": 72.143,
            "end": 72.265
          }
        ]
      },
      {
        "verseStart": 72.265,
        "verseEnd": 74.267,
        "words": [
          {
            "word": "Nóis ",
            "start": 72.265,
            "end": 72.428
          },
          {
            "word": "vai ",
            "start": 72.428,
            "end": 72.509
          },
          {
            "word": "forçar ",
            "start": 72.509,
            "end": 72.631
          },
          {
            "word": "união ",
            "start": 72.631,
            "end": 72.754
          },
          {
            "word": "Flasco ",
            "start": 72.754,
            "end": 73.288
          },
          {
            "word": "até ",
            "start": 73.288,
            "end": 73.45
          },
          {
            "word": "virar ",
            "start": 73.45,
            "end": 73.531
          },
          {
            "word": "Caneta ",
            "start": 73.531,
            "end": 73.818
          },
          {
            "word": "Azul",
            "start": 73.818,
            "end": 74.267
          }
        ]
      },
      {
        "verseStart": 74.267,
        "verseEnd": 76.358,
        "words": [
          {
            "word": "E, ",
            "start": 74.267,
            "end": 74.349
          },
          {
            "word": "se ",
            "start": 74.349,
            "end": 74.472
          },
          {
            "word": "vier ",
            "start": 74.472,
            "end": 74.595
          },
          {
            "word": "encher ",
            "start": 74.595,
            "end": 74.72
          },
          {
            "word": "meu ",
            "start": 74.72,
            "end": 74.842
          },
          {
            "word": "saco, ",
            "start": 74.842,
            "end": 75.209
          },
          {
            "word": "eu ",
            "start": 75.209,
            "end": 75.373
          },
          {
            "word": "vou ",
            "start": 75.373,
            "end": 75.495
          },
          {
            "word": "floodar ",
            "start": 75.495,
            "end": 75.617
          },
          {
            "word": "o ",
            "start": 75.617,
            "end": 75.744
          },
          {
            "word": "Vampeta ",
            "start": 75.744,
            "end": 75.907
          },
          {
            "word": "nu",
            "start": 75.907,
            "end": 76.358
          }
        ]
      },
      {
        "verseStart": 76.358,
        "verseEnd": 78.442,
        "words": [
          {
            "word": "União ",
            "start": 76.358,
            "end": 76.502
          },
          {
            "word": "Flasco, ",
            "start": 76.502,
            "end": 77.408
          },
          {
            "word": "as ",
            "start": 77.408,
            "end": 77.652
          },
          {
            "word": "k-",
            "start": 77.652,
            "end": 77.818
          },
          {
            "word": "popper ",
            "start": 77.818,
            "end": 77.982
          },
          {
            "word": "são ",
            "start": 77.982,
            "end": 78.108
          },
          {
            "word": "bonita",
            "start": 78.108,
            "end": 78.442
          }
        ]
      },
      {
        "verseStart": 78.442,
        "verseEnd": 80.381,
        "words": [
          {
            "word": "Pena ",
            "start": 78.442,
            "end": 78.565
          },
          {
            "word": "que ",
            "start": 78.565,
            "end": 78.729
          },
          {
            "word": "são ",
            "start": 78.729,
            "end": 78.893
          },
          {
            "word": "muito ",
            "start": 78.893,
            "end": 79.182
          },
          {
            "word": "chata, ",
            "start": 79.182,
            "end": 79.426
          },
          {
            "word": "até ",
            "start": 79.426,
            "end": 79.548
          },
          {
            "word": "parece ",
            "start": 79.548,
            "end": 79.678
          },
          {
            "word": "com ",
            "start": 79.678,
            "end": 80.174
          },
          {
            "word": "paulista",
            "start": 80.174,
            "end": 80.381
          }
        ]
      },
      {
        "verseStart": 80.381,
        "verseEnd": 82.441,
        "words": [
          {
            "word": "Fica ",
            "start": 80.381,
            "end": 80.508
          },
          {
            "word": "spammando ",
            "start": 80.508,
            "end": 80.711
          },
          {
            "word": "fancam ",
            "start": 80.711,
            "end": 81.33
          },
          {
            "word": "a ",
            "start": 81.33,
            "end": 81.493
          },
          {
            "word": "cada ",
            "start": 81.493,
            "end": 81.661
          },
          {
            "word": "post ",
            "start": 81.661,
            "end": 81.827
          },
          {
            "word": "que ",
            "start": 81.827,
            "end": 82.031
          },
          {
            "word": "tweeta",
            "start": 82.031,
            "end": 82.441
          }
        ]
      },
      {
        "verseStart": 82.441,
        "verseEnd": 84.396,
        "words": [
          {
            "word": "Eu ",
            "start": 82.441,
            "end": 82.604
          },
          {
            "word": "tô ",
            "start": 82.604,
            "end": 82.726
          },
          {
            "word": "ficando ",
            "start": 82.726,
            "end": 82.849
          },
          {
            "word": "muito ",
            "start": 82.849,
            "end": 82.976
          },
          {
            "word": "puto ",
            "start": 82.976,
            "end": 83.343
          },
          {
            "word": "e ",
            "start": 83.343,
            "end": 83.51
          },
          {
            "word": "sua ",
            "start": 83.51,
            "end": 83.635
          },
          {
            "word": "mãe ",
            "start": 83.635,
            "end": 83.758
          },
          {
            "word": "chupa ",
            "start": 83.758,
            "end": 83.964
          },
          {
            "word": "minha ",
            "start": 83.964,
            "end": 84.209
          },
          {
            "word": "pica",
            "start": 84.209,
            "end": 84.396
          }
        ]
      },
      {
        "verseStart": 84.396,
        "verseEnd": 86.651,
        "words": [
          {
            "word": "União ",
            "start": 84.396,
            "end": 84.687
          },
          {
            "word": "Flasco, ",
            "start": 84.687,
            "end": 85.512
          },
          {
            "word": "talarico ",
            "start": 85.512,
            "end": 85.918
          },
          {
            "word": "desde ",
            "start": 85.918,
            "end": 86.243
          },
          {
            "word": "cedo",
            "start": 86.243,
            "end": 86.651
          }
        ]
      },
      {
        "verseStart": 86.651,
        "verseEnd": 88.42,
        "words": [
          {
            "word": "O ",
            "start": 86.651,
            "end": 86.774
          },
          {
            "word": "que ",
            "start": 86.774,
            "end": 86.941
          },
          {
            "word": "eu ",
            "start": 86.941,
            "end": 87.068
          },
          {
            "word": "gosto ",
            "start": 87.068,
            "end": 87.189
          },
          {
            "word": "da ",
            "start": 87.189,
            "end": 87.312
          },
          {
            "word": "sua ",
            "start": 87.312,
            "end": 87.394
          },
          {
            "word": "mina ",
            "start": 87.394,
            "end": 87.558
          },
          {
            "word": "é ",
            "start": 87.558,
            "end": 87.68
          },
          {
            "word": "que ",
            "start": 87.68,
            "end": 87.802
          },
          {
            "word": "ela ",
            "start": 87.802,
            "end": 87.924
          },
          {
            "word": "não ",
            "start": 87.924,
            "end": 88.045
          },
          {
            "word": "tem ",
            "start": 88.045,
            "end": 88.167
          },
          {
            "word": "muito ",
            "start": 88.167,
            "end": 88.297
          },
          {
            "word": "peito",
            "start": 88.297,
            "end": 88.42
          }
        ]
      },
      {
        "verseStart": 88.42,
        "verseEnd": 90.436,
        "words": [
          {
            "word": "Eu ",
            "start": 88.42,
            "end": 88.542
          },
          {
            "word": "nunca ",
            "start": 88.542,
            "end": 88.706
          },
          {
            "word": "te ",
            "start": 88.706,
            "end": 89.076
          },
          {
            "word": "falei, ",
            "start": 89.076,
            "end": 89.323
          },
          {
            "word": "porque ",
            "start": 89.323,
            "end": 89.49
          },
          {
            "word": "tua ",
            "start": 89.49,
            "end": 89.616
          },
          {
            "word": "irmã ",
            "start": 89.616,
            "end": 89.74
          },
          {
            "word": "pediu ",
            "start": 89.74,
            "end": 89.944
          },
          {
            "word": "segredo",
            "start": 89.944,
            "end": 90.436
          }
        ]
      },
      {
        "verseStart": 90.436,
        "verseEnd": 92.534,
        "words": [
          {
            "word": "Mas ",
            "start": 90.436,
            "end": 90.602
          },
          {
            "word": "nóis ",
            "start": 90.602,
            "end": 90.724
          },
          {
            "word": "é ",
            "start": 90.724,
            "end": 90.846
          },
          {
            "word": "tipo ",
            "start": 90.846,
            "end": 91.174
          },
          {
            "word": "família, ",
            "start": 91.174,
            "end": 91.464
          },
          {
            "word": "só ",
            "start": 91.464,
            "end": 91.627
          },
          {
            "word": "que ",
            "start": 91.627,
            "end": 91.752
          },
          {
            "word": "de ",
            "start": 91.752,
            "end": 91.874
          },
          {
            "word": "pornô ",
            "start": 91.874,
            "end": 92.038
          },
          {
            "word": "de ",
            "start": 92.038,
            "end": 92.284
          },
          {
            "word": "incesto",
            "start": 92.284,
            "end": 92.534
          }
        ]
      },
      {
        "verseStart": 92.534,
        "verseEnd": 94.719,
        "words": [
          {
            "word": "União ",
            "start": 92.534,
            "end": 92.657
          },
          {
            "word": "Flasco, ",
            "start": 92.657,
            "end": 93.65
          },
          {
            "word": "Lucas ",
            "start": 93.65,
            "end": 93.853
          },
          {
            "word": "Hype ",
            "start": 93.853,
            "end": 94.1
          },
          {
            "word": "com ",
            "start": 94.1,
            "end": 94.268
          },
          {
            "word": "LUCKHAOS",
            "start": 94.268,
            "end": 94.719
          }
        ]
      },
      {
        "verseStart": 94.719,
        "verseEnd": 96.607,
        "words": [
          {
            "word": "Na ",
            "start": 94.719,
            "end": 94.968
          },
          {
            "word": "fila ",
            "start": 94.968,
            "end": 95.134
          },
          {
            "word": "do ",
            "start": 95.134,
            "end": 95.301
          },
          {
            "word": "banco, ",
            "start": 95.301,
            "end": 95.545
          },
          {
            "word": "todo ",
            "start": 95.545,
            "end": 95.708
          },
          {
            "word": "mundo ",
            "start": 95.708,
            "end": 96.034
          },
          {
            "word": "pega ",
            "start": 96.034,
            "end": 96.196
          },
          {
            "word": "o ",
            "start": 96.196,
            "end": 96.319
          },
          {
            "word": "pau",
            "start": 96.319,
            "end": 96.607
          }
        ]
      },
      {
        "verseStart": 96.607,
        "verseEnd": 98.508,
        "words": [
          {
            "word": "Boomer, ",
            "start": 96.607,
            "end": 97.148
          },
          {
            "word": "à ",
            "start": 97.148,
            "end": 97.31
          },
          {
            "word": "meia-",
            "start": 97.31,
            "end": 97.433
          },
          {
            "word": "noite, ",
            "start": 97.433,
            "end": 97.598
          },
          {
            "word": "tá ",
            "start": 97.598,
            "end": 97.761
          },
          {
            "word": "usando ",
            "start": 97.761,
            "end": 97.885
          },
          {
            "word": "plugue ",
            "start": 97.885,
            "end": 98.132
          },
          {
            "word": "anal",
            "start": 98.132,
            "end": 98.508
          }
        ]
      },
      {
        "verseStart": 98.508,
        "verseEnd": 100.603,
        "words": [
          {
            "word": "Suruba ",
            "start": 98.508,
            "end": 98.634
          },
          {
            "word": "na ",
            "start": 98.634,
            "end": 98.962
          },
          {
            "word": "quarentena, ",
            "start": 98.962,
            "end": 99.457
          },
          {
            "word": "geral ",
            "start": 99.457,
            "end": 99.826
          },
          {
            "word": "pelado ",
            "start": 99.826,
            "end": 100.075
          },
          {
            "word": "por ",
            "start": 100.075,
            "end": 100.359
          },
          {
            "word": "call",
            "start": 100.359,
            "end": 100.603
          }
        ]
      },
      {
        "verseStart": 100.603,
        "verseEnd": 102.932,
        "words": [
          {
            "word": "É ",
            "start": 100.603,
            "end": 100.727
          },
          {
            "word": "a ",
            "start": 100.727,
            "end": 100.852
          },
          {
            "word": "união ",
            "start": 100.852,
            "end": 100.975
          },
          {
            "word": "Flasco, ",
            "start": 100.975,
            "end": 101.629
          },
          {
            "word": "é ",
            "start": 101.629,
            "end": 101.955
          },
          {
            "word": "a ",
            "start": 101.955,
            "end": 102.241
          },
          {
            "word": "novidade",
            "start": 102.241,
            "end": 102.932
          }
        ]
      },
      {
        "verseStart": 102.932,
        "verseEnd": 104.58,
        "words": [
          {
            "word": "Eu ",
            "start": 102.932,
            "end": 103.177
          },
          {
            "word": "ressuscitei ",
            "start": 103.177,
            "end": 103.592
          },
          {
            "word": "e ",
            "start": 103.592,
            "end": 103.714
          },
          {
            "word": "trouxe ",
            "start": 103.714,
            "end": 103.922
          },
          {
            "word": "essa ",
            "start": 103.922,
            "end": 104.046
          },
          {
            "word": "merdapostagem",
            "start": 104.046,
            "end": 104.58
          }
        ]
      },
      {
        "verseStart": 104.58,
        "verseEnd": 106.676,
        "words": [
          {
            "word": "A ",
            "start": 104.58,
            "end": 104.784
          },
          {
            "word": "minha ",
            "start": 104.784,
            "end": 104.911
          },
          {
            "word": "piroca ",
            "start": 104.911,
            "end": 105.034
          },
          {
            "word": "é ",
            "start": 105.034,
            "end": 105.157
          },
          {
            "word": "o ",
            "start": 105.157,
            "end": 105.239
          },
          {
            "word": "porta-",
            "start": 105.239,
            "end": 105.361
          },
          {
            "word": "mala, ",
            "start": 105.361,
            "end": 105.687
          },
          {
            "word": "a ",
            "start": 105.687,
            "end": 105.811
          },
          {
            "word": "tua ",
            "start": 105.811,
            "end": 105.892
          },
          {
            "word": "bunda ",
            "start": 105.892,
            "end": 106.018
          },
          {
            "word": "é ",
            "start": 106.018,
            "end": 106.268
          },
          {
            "word": "bagagem",
            "start": 106.268,
            "end": 106.676
          }
        ]
      },
      {
        "verseStart": 106.676,
        "verseEnd": 108.568,
        "words": [
          {
            "word": "Tu ",
            "start": 106.676,
            "end": 106.843
          },
          {
            "word": "não ",
            "start": 106.843,
            "end": 106.964
          },
          {
            "word": "come ",
            "start": 106.964,
            "end": 107.093
          },
          {
            "word": "travesti, ",
            "start": 107.093,
            "end": 107.377
          },
          {
            "word": "mano, ",
            "start": 107.377,
            "end": 107.662
          },
          {
            "word": "isso ",
            "start": 107.662,
            "end": 107.868
          },
          {
            "word": "é ",
            "start": 107.868,
            "end": 108.075
          },
          {
            "word": "muita ",
            "start": 108.075,
            "end": 108.32
          },
          {
            "word": "viadagem",
            "start": 108.32,
            "end": 108.568
          }
        ]
      },
      {
        "verseStart": 108.568,
        "verseEnd": 111.026,
        "words": [
          {
            "word": "É ",
            "start": 108.568,
            "end": 108.774
          },
          {
            "word": "a ",
            "start": 108.774,
            "end": 108.896
          },
          {
            "word": "união ",
            "start": 108.896,
            "end": 109.019
          },
          {
            "word": "Flasco, ",
            "start": 109.019,
            "end": 109.996
          },
          {
            "word": "uh, ",
            "start": 109.996,
            "end": 110.241
          },
          {
            "word": "uh, ",
            "start": 110.241,
            "end": 110.49
          },
          {
            "word": "uh",
            "start": 110.49,
            "end": 111.026
          }
        ]
      },
      {
        "verseStart": 111.026,
        "verseEnd": 112.626,
        "words": [
          {
            "word": "Quem ",
            "start": 111.026,
            "end": 111.191
          },
          {
            "word": "tá ",
            "start": 111.191,
            "end": 111.316
          },
          {
            "word": "respirando ",
            "start": 111.316,
            "end": 111.73
          },
          {
            "word": "gosta ",
            "start": 111.73,
            "end": 111.852
          },
          {
            "word": "de ",
            "start": 111.852,
            "end": 111.974
          },
          {
            "word": "lamber ",
            "start": 111.974,
            "end": 112.096
          },
          {
            "word": "piru",
            "start": 112.096,
            "end": 112.626
          }
        ]
      },
      {
        "verseStart": 112.626,
        "verseEnd": 114.512,
        "words": [
          {
            "word": "Eu ",
            "start": 112.626,
            "end": 112.713
          },
          {
            "word": "tô ",
            "start": 112.713,
            "end": 112.836
          },
          {
            "word": "falando ",
            "start": 112.836,
            "end": 112.958
          },
          {
            "word": "muita ",
            "start": 112.958,
            "end": 113.08
          },
          {
            "word": "merda ",
            "start": 113.08,
            "end": 113.609
          },
          {
            "word": "nesse ",
            "start": 113.609,
            "end": 113.731
          },
          {
            "word": "beat ",
            "start": 113.731,
            "end": 113.896
          },
          {
            "word": "do ",
            "start": 113.896,
            "end": 114.225
          },
          {
            "word": "Haku",
            "start": 114.225,
            "end": 114.512
          }
        ]
      },
      {
        "verseStart": 114.512,
        "verseEnd": 116.53,
        "words": [
          {
            "word": "Se ",
            "start": 114.512,
            "end": 114.717
          },
          {
            "word": "a ",
            "start": 114.717,
            "end": 114.84
          },
          {
            "word": "tua ",
            "start": 114.84,
            "end": 114.921
          },
          {
            "word": "raba ",
            "start": 114.921,
            "end": 115.045
          },
          {
            "word": "é ",
            "start": 115.045,
            "end": 115.288
          },
          {
            "word": "uma ",
            "start": 115.288,
            "end": 115.459
          },
          {
            "word": "floresta, ",
            "start": 115.459,
            "end": 115.581
          },
          {
            "word": "meu ",
            "start": 115.581,
            "end": 115.704
          },
          {
            "word": "pau ",
            "start": 115.704,
            "end": 115.83
          },
          {
            "word": "é ",
            "start": 115.83,
            "end": 115.994
          },
          {
            "word": "o ",
            "start": 115.994,
            "end": 116.24
          },
          {
            "word": "Zoboomafoo",
            "start": 116.24,
            "end": 116.53
          }
        ]
      },
      {
        "verseStart": 116.53,
        "verseEnd": 119.067,
        "words": [
          {
            "word": "É ",
            "start": 116.53,
            "end": 116.774
          },
          {
            "word": "a ",
            "start": 116.774,
            "end": 117.025
          },
          {
            "word": "união ",
            "start": 117.025,
            "end": 117.273
          },
          {
            "word": "Flasco, ",
            "start": 117.273,
            "end": 118.047
          },
          {
            "word": "passei ",
            "start": 118.047,
            "end": 118.25
          },
          {
            "word": "Rexona",
            "start": 118.25,
            "end": 119.067
          }
        ]
      },
      {
        "verseStart": 119.067,
        "verseEnd": 120.629,
        "words": [
          {
            "word": "Eu ",
            "start": 119.067,
            "end": 119.191
          },
          {
            "word": "não ",
            "start": 119.191,
            "end": 119.314
          },
          {
            "word": "sou ",
            "start": 119.314,
            "end": 119.395
          },
          {
            "word": "boiola ",
            "start": 119.395,
            "end": 119.517
          },
          {
            "word": "pra ",
            "start": 119.517,
            "end": 119.642
          },
          {
            "word": "ficar ",
            "start": 119.642,
            "end": 119.805
          },
          {
            "word": "pickando ",
            "start": 119.805,
            "end": 120.218
          },
          {
            "word": "Sona",
            "start": 120.218,
            "end": 120.629
          }
        ]
      },
      {
        "verseStart": 120.629,
        "verseEnd": 122.652,
        "words": [
          {
            "word": "Se ",
            "start": 120.629,
            "end": 120.794
          },
          {
            "word": "a ",
            "start": 120.794,
            "end": 120.92
          },
          {
            "word": "tua ",
            "start": 120.92,
            "end": 121.125
          },
          {
            "word": "boca ",
            "start": 121.125,
            "end": 121.252
          },
          {
            "word": "é ",
            "start": 121.252,
            "end": 121.418
          },
          {
            "word": "um ",
            "start": 121.418,
            "end": 121.588
          },
          {
            "word": "forró, ",
            "start": 121.588,
            "end": 121.795
          },
          {
            "word": "a ",
            "start": 121.795,
            "end": 121.957
          },
          {
            "word": "minha ",
            "start": 121.957,
            "end": 122.121
          },
          {
            "word": "piroca ",
            "start": 122.121,
            "end": 122.285
          },
          {
            "word": "é ",
            "start": 122.285,
            "end": 122.407
          },
          {
            "word": "a ",
            "start": 122.407,
            "end": 122.529
          },
          {
            "word": "sanfona",
            "start": 122.529,
            "end": 122.652
          }
        ]
      },
      {
        "verseStart": 122.652,
        "verseEnd": 124.724,
        "words": [
          {
            "word": "A ",
            "start": 122.652,
            "end": 122.775
          },
          {
            "word": "xota ",
            "start": 122.775,
            "end": 122.896
          },
          {
            "word": "dessa ",
            "start": 122.896,
            "end": 123.019
          },
          {
            "word": "mina ",
            "start": 123.019,
            "end": 123.101
          },
          {
            "word": "é ",
            "start": 123.101,
            "end": 123.267
          },
          {
            "word": "verde, ",
            "start": 123.267,
            "end": 123.516
          },
          {
            "word": "eu ",
            "start": 123.516,
            "end": 123.722
          },
          {
            "word": "acho ",
            "start": 123.722,
            "end": 123.89
          },
          {
            "word": "que ",
            "start": 123.89,
            "end": 124.015
          },
          {
            "word": "eu ",
            "start": 124.015,
            "end": 124.141
          },
          {
            "word": "comi ",
            "start": 124.141,
            "end": 124.265
          },
          {
            "word": "a ",
            "start": 124.265,
            "end": 124.556
          },
          {
            "word": "Fiona",
            "start": 124.556,
            "end": 124.724
          }
        ]
      },
      {
        "verseStart": 124.724,
        "verseEnd": 127.101,
        "words": [
          {
            "word": "É ",
            "start": 124.724,
            "end": 124.845
          },
          {
            "word": "a ",
            "start": 124.845,
            "end": 125.091
          },
          {
            "word": "união ",
            "start": 125.091,
            "end": 125.258
          },
          {
            "word": "Flasco, ",
            "start": 125.258,
            "end": 126.038
          },
          {
            "word": "é ",
            "start": 126.038,
            "end": 126.284
          },
          {
            "word": "a ",
            "start": 126.284,
            "end": 126.489
          },
          {
            "word": "seleção",
            "start": 126.489,
            "end": 127.101
          }
        ]
      },
      {
        "verseStart": 127.101,
        "verseEnd": 128.756,
        "words": [
          {
            "word": "Batendo ",
            "start": 127.101,
            "end": 127.265
          },
          {
            "word": "punheta, ",
            "start": 127.265,
            "end": 127.836
          },
          {
            "word": "mas ",
            "start": 127.836,
            "end": 128
          },
          {
            "word": "eu ",
            "start": 128,
            "end": 128.122
          },
          {
            "word": "nem ",
            "start": 128.122,
            "end": 128.205
          },
          {
            "word": "tô ",
            "start": 128.205,
            "end": 128.332
          },
          {
            "word": "com ",
            "start": 128.332,
            "end": 128.585
          },
          {
            "word": "tesão",
            "start": 128.585,
            "end": 128.756
          }
        ]
      },
      {
        "verseStart": 128.756,
        "verseEnd": 130.703,
        "words": [
          {
            "word": "A ",
            "start": 128.756,
            "end": 128.922
          },
          {
            "word": "quarentena ",
            "start": 128.922,
            "end": 129.005
          },
          {
            "word": "tá ",
            "start": 129.005,
            "end": 129.131
          },
          {
            "word": "chatona ",
            "start": 129.131,
            "end": 129.253
          },
          {
            "word": "e ",
            "start": 129.253,
            "end": 129.635
          },
          {
            "word": "o ",
            "start": 129.635,
            "end": 129.841
          },
          {
            "word": "meu ",
            "start": 129.841,
            "end": 130.004
          },
          {
            "word": "pau ",
            "start": 130.004,
            "end": 130.166
          },
          {
            "word": "tá ",
            "start": 130.166,
            "end": 130.289
          },
          {
            "word": "na ",
            "start": 130.289,
            "end": 130.415
          },
          {
            "word": "minha ",
            "start": 130.415,
            "end": 130.578
          },
          {
            "word": "mão",
            "start": 130.578,
            "end": 130.703
          }
        ]
      },
      {
        "verseStart": 130.703,
        "verseEnd": 132.678,
        "words": [
          {
            "word": "Eu ",
            "start": 130.703,
            "end": 130.825
          },
          {
            "word": "tô ",
            "start": 130.825,
            "end": 130.949
          },
          {
            "word": "no ",
            "start": 130.949,
            "end": 131.071
          },
          {
            "word": "meio ",
            "start": 131.071,
            "end": 131.193
          },
          {
            "word": "da ",
            "start": 131.193,
            "end": 131.317
          },
          {
            "word": "aula ",
            "start": 131.317,
            "end": 131.481
          },
          {
            "word": "on-",
            "start": 131.481,
            "end": 131.644
          },
          {
            "word": "line ",
            "start": 131.644,
            "end": 131.77
          },
          {
            "word": "e ",
            "start": 131.77,
            "end": 131.892
          },
          {
            "word": "que ",
            "start": 131.892,
            "end": 132.014
          },
          {
            "word": "se ",
            "start": 132.014,
            "end": 132.178
          },
          {
            "word": "foda, ",
            "start": 132.178,
            "end": 132.342
          },
          {
            "word": "meu ",
            "start": 132.342,
            "end": 132.467
          },
          {
            "word": "irmão",
            "start": 132.467,
            "end": 132.678
          }
        ]
      },
      {
        "verseStart": 132.678,
        "verseEnd": 135.216,
        "words": [
          {
            "word": "É ",
            "start": 132.678,
            "end": 132.886
          },
          {
            "word": "a ",
            "start": 132.886,
            "end": 133.008
          },
          {
            "word": "união ",
            "start": 133.008,
            "end": 133.174
          },
          {
            "word": "Flasco, ",
            "start": 133.174,
            "end": 134.197
          },
          {
            "word": "mano, ",
            "start": 134.197,
            "end": 134.319
          },
          {
            "word": "eu ",
            "start": 134.319,
            "end": 134.483
          },
          {
            "word": "sou ",
            "start": 134.483,
            "end": 134.605
          },
          {
            "word": "real",
            "start": 134.605,
            "end": 135.216
          }
        ]
      },
      {
        "verseStart": 135.216,
        "verseEnd": 136.95,
        "words": [
          {
            "word": "Uma ",
            "start": 135.216,
            "end": 135.463
          },
          {
            "word": "track ",
            "start": 135.463,
            "end": 135.75
          },
          {
            "word": "inteira ",
            "start": 135.75,
            "end": 135.997
          },
          {
            "word": "só ",
            "start": 135.997,
            "end": 136.12
          },
          {
            "word": "falando ",
            "start": 136.12,
            "end": 136.243
          },
          {
            "word": "do ",
            "start": 136.243,
            "end": 136.489
          },
          {
            "word": "meu ",
            "start": 136.489,
            "end": 136.742
          },
          {
            "word": "pau",
            "start": 136.742,
            "end": 136.95
          }
        ]
      },
      {
        "verseStart": 136.95,
        "verseEnd": 138.841,
        "words": [
          {
            "word": "Eu ",
            "start": 136.95,
            "end": 137.075
          },
          {
            "word": "sou ",
            "start": 137.075,
            "end": 137.196
          },
          {
            "word": "o ",
            "start": 137.196,
            "end": 137.278
          },
          {
            "word": "melhor ",
            "start": 137.278,
            "end": 137.402
          },
          {
            "word": "do ",
            "start": 137.402,
            "end": 137.526
          },
          {
            "word": "shit-",
            "start": 137.526,
            "end": 137.648
          },
          {
            "word": "trap, ",
            "start": 137.648,
            "end": 137.771
          },
          {
            "word": "e ",
            "start": 137.771,
            "end": 137.898
          },
          {
            "word": "nunca ",
            "start": 137.898,
            "end": 138.061
          },
          {
            "word": "vai ",
            "start": 138.061,
            "end": 138.186
          },
          {
            "word": "ter ",
            "start": 138.186,
            "end": 138.434
          },
          {
            "word": "discussão",
            "start": 138.434,
            "end": 138.841
          }
        ]
      },
      {
        "verseStart": 138.841,
        "verseEnd": 140.813,
        "words": [
          {
            "word": "Esses ",
            "start": 138.841,
            "end": 139.003
          },
          {
            "word": "mano ",
            "start": 139.003,
            "end": 139.127
          },
          {
            "word": "pensa ",
            "start": 139.127,
            "end": 139.249
          },
          {
            "word": "em ",
            "start": 139.249,
            "end": 139.497
          },
          {
            "word": "dinheiro, ",
            "start": 139.497,
            "end": 139.782
          },
          {
            "word": "eu ",
            "start": 139.782,
            "end": 139.949
          },
          {
            "word": "penso ",
            "start": 139.949,
            "end": 140.071
          },
          {
            "word": "na ",
            "start": 140.071,
            "end": 140.235
          },
          {
            "word": "minha ",
            "start": 140.235,
            "end": 140.438
          },
          {
            "word": "diversão",
            "start": 140.438,
            "end": 140.813
          }
        ]
      },
      {
        "verseStart": 140.813,
        "verseEnd": 143.386,
        "words": [
          {
            "word": "É ",
            "start": 140.813,
            "end": 141.019
          },
          {
            "word": "a ",
            "start": 141.019,
            "end": 141.141
          },
          {
            "word": "união ",
            "start": 141.141,
            "end": 141.304
          },
          {
            "word": "Flasco, ",
            "start": 141.304,
            "end": 142.325
          },
          {
            "word": "esse ",
            "start": 142.325,
            "end": 142.446
          },
          {
            "word": "é ",
            "start": 142.446,
            "end": 142.568
          },
          {
            "word": "o ",
            "start": 142.568,
            "end": 142.731
          },
          {
            "word": "meu ",
            "start": 142.731,
            "end": 143.14
          },
          {
            "word": "momento",
            "start": 143.14,
            "end": 143.386
          }
        ]
      },
      {
        "verseStart": 143.386,
        "verseEnd": 144.812,
        "words": [
          {
            "word": "Piscando ",
            "start": 143.386,
            "end": 143.508
          },
          {
            "word": "o ",
            "start": 143.508,
            "end": 143.629
          },
          {
            "word": "meu ",
            "start": 143.629,
            "end": 143.712
          },
          {
            "word": "cu, ",
            "start": 143.712,
            "end": 143.834
          },
          {
            "word": "a ",
            "start": 143.834,
            "end": 143.956
          },
          {
            "word": "pica ",
            "start": 143.956,
            "end": 144.078
          },
          {
            "word": "faz ",
            "start": 144.078,
            "end": 144.201
          },
          {
            "word": "o ",
            "start": 144.201,
            "end": 144.365
          },
          {
            "word": "movimento",
            "start": 144.365,
            "end": 144.812
          }
        ]
      },
      {
        "verseStart": 144.812,
        "verseEnd": 146.986,
        "words": [
          {
            "word": "'Cê ",
            "start": 144.812,
            "end": 144.935
          },
          {
            "word": "pode ",
            "start": 144.935,
            "end": 145.059
          },
          {
            "word": "ter ",
            "start": 145.059,
            "end": 145.184
          },
          {
            "word": "várias ",
            "start": 145.184,
            "end": 145.51
          },
          {
            "word": "views, ",
            "start": 145.51,
            "end": 145.96
          },
          {
            "word": "mesmo ",
            "start": 145.96,
            "end": 146.083
          },
          {
            "word": "o ",
            "start": 146.083,
            "end": 146.205
          },
          {
            "word": "teu ",
            "start": 146.205,
            "end": 146.327
          },
          {
            "word": "som ",
            "start": 146.327,
            "end": 146.49
          },
          {
            "word": "sendo ",
            "start": 146.49,
            "end": 146.617
          },
          {
            "word": "sem ",
            "start": 146.617,
            "end": 146.781
          },
          {
            "word": "graça",
            "start": 146.781,
            "end": 146.986
          }
        ]
      },
      {
        "verseStart": 146.986,
        "verseEnd": 148.88,
        "words": [
          {
            "word": "Eu ",
            "start": 146.986,
            "end": 147.15
          },
          {
            "word": "sou ",
            "start": 147.15,
            "end": 147.273
          },
          {
            "word": "o ",
            "start": 147.273,
            "end": 147.401
          },
          {
            "word": "rei ",
            "start": 147.401,
            "end": 147.524
          },
          {
            "word": "do ",
            "start": 147.524,
            "end": 147.809
          },
          {
            "word": "underground ",
            "start": 147.809,
            "end": 147.973
          },
          {
            "word": "e ",
            "start": 147.973,
            "end": 148.095
          },
          {
            "word": "bato ",
            "start": 148.095,
            "end": 148.177
          },
          {
            "word": "punheta ",
            "start": 148.177,
            "end": 148.3
          },
          {
            "word": "na ",
            "start": 148.3,
            "end": 148.423
          },
          {
            "word": "praça",
            "start": 148.423,
            "end": 148.88
          }
        ]
      },
      {
        "verseStart": 148.88,
        "verseEnd": 151.332,
        "words": [
          {
            "word": "É ",
            "start": 148.88,
            "end": 149.002
          },
          {
            "word": "a ",
            "start": 149.002,
            "end": 149.124
          },
          {
            "word": "união ",
            "start": 149.124,
            "end": 149.332
          },
          {
            "word": "Flasco",
            "start": 149.332,
            "end": 0
          }
        ]
      }
    ]
  },
  "System Of A Down - Chop Suey!.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 0.25,
        "verseEnd": 5.25,
        "words": [
          {
            "word": "We're ",
            "start": 0,
            "end": 0
          },
          {
            "word": "rolling \"",
            "start": 0,
            "end": 0
          },
          {
            "word": "Suicide\"",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 46.24,
        "verseEnd": 51.24,
        "words": [
          {
            "word": "Wake ",
            "start": 0,
            "end": 0
          },
          {
            "word": "up (",
            "start": 0,
            "end": 0
          },
          {
            "word": "wake ",
            "start": 0,
            "end": 0
          },
          {
            "word": "up)",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 47.1,
        "verseEnd": 52.1,
        "words": [
          {
            "word": "Grab ",
            "start": 0,
            "end": 0
          },
          {
            "word": "a ",
            "start": 0,
            "end": 0
          },
          {
            "word": "brush ",
            "start": 0,
            "end": 0
          },
          {
            "word": "and ",
            "start": 0,
            "end": 0
          },
          {
            "word": "put ",
            "start": 0,
            "end": 0
          },
          {
            "word": "a ",
            "start": 0,
            "end": 0
          },
          {
            "word": "little ",
            "start": 0,
            "end": 0
          },
          {
            "word": "makeup",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 49.06,
        "verseEnd": 54.06,
        "words": [
          {
            "word": "Hide ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "scars ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "fade ",
            "start": 0,
            "end": 0
          },
          {
            "word": "away ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "shakeup",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 50.27,
        "verseEnd": 55.27,
        "words": [
          {
            "word": "(Hide ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "scars ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "fade ",
            "start": 0,
            "end": 0
          },
          {
            "word": "away ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "shakeup)",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 50.81,
        "verseEnd": 55.81,
        "words": [
          {
            "word": "Why'd ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "leave ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "keys ",
            "start": 0,
            "end": 0
          },
          {
            "word": "upon ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "table?",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 52.78,
        "verseEnd": 57.78,
        "words": [
          {
            "word": "Here ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "go, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "create ",
            "start": 0,
            "end": 0
          },
          {
            "word": "another ",
            "start": 0,
            "end": 0
          },
          {
            "word": "fable, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "wanted ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 54.85,
        "verseEnd": 59.85,
        "words": [
          {
            "word": "Grab ",
            "start": 0,
            "end": 0
          },
          {
            "word": "a ",
            "start": 0,
            "end": 0
          },
          {
            "word": "brush ",
            "start": 0,
            "end": 0
          },
          {
            "word": "and ",
            "start": 0,
            "end": 0
          },
          {
            "word": "put ",
            "start": 0,
            "end": 0
          },
          {
            "word": "a ",
            "start": 0,
            "end": 0
          },
          {
            "word": "little ",
            "start": 0,
            "end": 0
          },
          {
            "word": "makeup, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "wanted ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 56.51,
        "verseEnd": 61.51,
        "words": [
          {
            "word": "Hide ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "scars ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "fade ",
            "start": 0,
            "end": 0
          },
          {
            "word": "away ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "shakeup, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "wanted ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 58.43,
        "verseEnd": 63.43,
        "words": [
          {
            "word": "Why'd ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "leave ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "keys ",
            "start": 0,
            "end": 0
          },
          {
            "word": "upon ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "table? ",
            "start": 0,
            "end": 0
          },
          {
            "word": "You ",
            "start": 0,
            "end": 0
          },
          {
            "word": "wanted ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 60.51,
        "verseEnd": 65.50999999999999,
        "words": [
          {
            "word": "I ",
            "start": 0,
            "end": 0
          },
          {
            "word": "don't ",
            "start": 0,
            "end": 0
          },
          {
            "word": "think ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "trust",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 63.47,
        "verseEnd": 68.47,
        "words": [
          {
            "word": "In ",
            "start": 0,
            "end": 0
          },
          {
            "word": "my ",
            "start": 0,
            "end": 0
          },
          {
            "word": "self-",
            "start": 0,
            "end": 0
          },
          {
            "word": "righteous ",
            "start": 0,
            "end": 0
          },
          {
            "word": "suicide",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 71.09,
        "verseEnd": 76.09,
        "words": [
          {
            "word": "I ",
            "start": 0,
            "end": 0
          },
          {
            "word": "cry ",
            "start": 0,
            "end": 0
          },
          {
            "word": "when ",
            "start": 0,
            "end": 0
          },
          {
            "word": "angels ",
            "start": 0,
            "end": 0
          },
          {
            "word": "deserve ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "die!",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 85.99,
        "verseEnd": 90.99,
        "words": [
          {
            "word": "Wake ",
            "start": 0,
            "end": 0
          },
          {
            "word": "up (",
            "start": 0,
            "end": 0
          },
          {
            "word": "wake ",
            "start": 0,
            "end": 0
          },
          {
            "word": "up)",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 86.89,
        "verseEnd": 91.89,
        "words": [
          {
            "word": "Grab ",
            "start": 0,
            "end": 0
          },
          {
            "word": "a ",
            "start": 0,
            "end": 0
          },
          {
            "word": "brush ",
            "start": 0,
            "end": 0
          },
          {
            "word": "and ",
            "start": 0,
            "end": 0
          },
          {
            "word": "put ",
            "start": 0,
            "end": 0
          },
          {
            "word": "a ",
            "start": 0,
            "end": 0
          },
          {
            "word": "little ",
            "start": 0,
            "end": 0
          },
          {
            "word": "makeup",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 88.82,
        "verseEnd": 93.82,
        "words": [
          {
            "word": "Hide ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "scars ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "fade ",
            "start": 0,
            "end": 0
          },
          {
            "word": "away ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the...",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 89.63,
        "verseEnd": 94.63,
        "words": [
          {
            "word": "(Hide ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "scars ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "fade ",
            "start": 0,
            "end": 0
          },
          {
            "word": "away ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "shakeup)",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 90.88,
        "verseEnd": 95.88,
        "words": [
          {
            "word": "Why'd ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "leave ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "keys ",
            "start": 0,
            "end": 0
          },
          {
            "word": "upon ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "table?",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 92.45,
        "verseEnd": 97.45,
        "words": [
          {
            "word": "Here ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "go, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "create ",
            "start": 0,
            "end": 0
          },
          {
            "word": "another ",
            "start": 0,
            "end": 0
          },
          {
            "word": "fable, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "wanted ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 94.53999999999999,
        "verseEnd": 99.53999999999999,
        "words": [
          {
            "word": "Grab ",
            "start": 0,
            "end": 0
          },
          {
            "word": "a ",
            "start": 0,
            "end": 0
          },
          {
            "word": "brush ",
            "start": 0,
            "end": 0
          },
          {
            "word": "and ",
            "start": 0,
            "end": 0
          },
          {
            "word": "put ",
            "start": 0,
            "end": 0
          },
          {
            "word": "a ",
            "start": 0,
            "end": 0
          },
          {
            "word": "little ",
            "start": 0,
            "end": 0
          },
          {
            "word": "makeup, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "wanted ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 96.4,
        "verseEnd": 101.4,
        "words": [
          {
            "word": "Hide ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "scars ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "fade ",
            "start": 0,
            "end": 0
          },
          {
            "word": "away ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "shakeup, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "wanted ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 98.28999999999999,
        "verseEnd": 103.28999999999999,
        "words": [
          {
            "word": "Why'd ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "leave ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "keys ",
            "start": 0,
            "end": 0
          },
          {
            "word": "upon ",
            "start": 0,
            "end": 0
          },
          {
            "word": "the ",
            "start": 0,
            "end": 0
          },
          {
            "word": "table? ",
            "start": 0,
            "end": 0
          },
          {
            "word": "You ",
            "start": 0,
            "end": 0
          },
          {
            "word": "wanted ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 100.22,
        "verseEnd": 105.22,
        "words": [
          {
            "word": "I ",
            "start": 0,
            "end": 0
          },
          {
            "word": "don't ",
            "start": 0,
            "end": 0
          },
          {
            "word": "think ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "trust",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 103.18,
        "verseEnd": 108.18,
        "words": [
          {
            "word": "In ",
            "start": 0,
            "end": 0
          },
          {
            "word": "my ",
            "start": 0,
            "end": 0
          },
          {
            "word": "self-",
            "start": 0,
            "end": 0
          },
          {
            "word": "righteous ",
            "start": 0,
            "end": 0
          },
          {
            "word": "suicide",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 110.85,
        "verseEnd": 115.85,
        "words": [
          {
            "word": "I ",
            "start": 0,
            "end": 0
          },
          {
            "word": "cry ",
            "start": 0,
            "end": 0
          },
          {
            "word": "when ",
            "start": 0,
            "end": 0
          },
          {
            "word": "angels ",
            "start": 0,
            "end": 0
          },
          {
            "word": "deserve ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "die",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 118.52000000000001,
        "verseEnd": 123.52000000000001,
        "words": [
          {
            "word": "In ",
            "start": 0,
            "end": 0
          },
          {
            "word": "my ",
            "start": 0,
            "end": 0
          },
          {
            "word": "self-",
            "start": 0,
            "end": 0
          },
          {
            "word": "righteous ",
            "start": 0,
            "end": 0
          },
          {
            "word": "suicide",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 126.01,
        "verseEnd": 131.01,
        "words": [
          {
            "word": "I ",
            "start": 0,
            "end": 0
          },
          {
            "word": "cry ",
            "start": 0,
            "end": 0
          },
          {
            "word": "when ",
            "start": 0,
            "end": 0
          },
          {
            "word": "angels ",
            "start": 0,
            "end": 0
          },
          {
            "word": "deserve ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "die",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 140.72,
        "verseEnd": 145.72,
        "words": [
          {
            "word": "Father (",
            "start": 0,
            "end": 0
          },
          {
            "word": "father)",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 142.69,
        "verseEnd": 147.69,
        "words": [
          {
            "word": "Father (",
            "start": 0,
            "end": 0
          },
          {
            "word": "father)",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 144.67000000000002,
        "verseEnd": 149.67000000000002,
        "words": [
          {
            "word": "Father (",
            "start": 0,
            "end": 0
          },
          {
            "word": "father)",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 146.45,
        "verseEnd": 151.45,
        "words": [
          {
            "word": "Father (",
            "start": 0,
            "end": 0
          },
          {
            "word": "father)",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 148.54,
        "verseEnd": 153.54,
        "words": [
          {
            "word": "Father, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "into ",
            "start": 0,
            "end": 0
          },
          {
            "word": "your ",
            "start": 0,
            "end": 0
          },
          {
            "word": "hands ",
            "start": 0,
            "end": 0
          },
          {
            "word": "I ",
            "start": 0,
            "end": 0
          },
          {
            "word": "commend ",
            "start": 0,
            "end": 0
          },
          {
            "word": "my ",
            "start": 0,
            "end": 0
          },
          {
            "word": "spirit",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 152.21,
        "verseEnd": 157.21,
        "words": [
          {
            "word": "Father, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "into ",
            "start": 0,
            "end": 0
          },
          {
            "word": "your ",
            "start": 0,
            "end": 0
          },
          {
            "word": "hands",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 153.85,
        "verseEnd": 158.85,
        "words": [
          {
            "word": "Why ",
            "start": 0,
            "end": 0
          },
          {
            "word": "have ",
            "start": 0,
            "end": 0
          },
          {
            "word": "you ",
            "start": 0,
            "end": 0
          },
          {
            "word": "forsaken ",
            "start": 0,
            "end": 0
          },
          {
            "word": "me?",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 157.7,
        "verseEnd": 162.7,
        "words": [
          {
            "word": "In ",
            "start": 0,
            "end": 0
          },
          {
            "word": "your ",
            "start": 0,
            "end": 0
          },
          {
            "word": "eyes, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "forsaken ",
            "start": 0,
            "end": 0
          },
          {
            "word": "me",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 161.57999999999998,
        "verseEnd": 166.57999999999998,
        "words": [
          {
            "word": "In ",
            "start": 0,
            "end": 0
          },
          {
            "word": "your ",
            "start": 0,
            "end": 0
          },
          {
            "word": "thoughts, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "forsaken ",
            "start": 0,
            "end": 0
          },
          {
            "word": "me",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 165.36,
        "verseEnd": 170.36,
        "words": [
          {
            "word": "In ",
            "start": 0,
            "end": 0
          },
          {
            "word": "your ",
            "start": 0,
            "end": 0
          },
          {
            "word": "heart, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "forsaken ",
            "start": 0,
            "end": 0
          },
          {
            "word": "me, ",
            "start": 0,
            "end": 0
          },
          {
            "word": "oh",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 170.98,
        "verseEnd": 175.98,
        "words": [
          {
            "word": "Trust ",
            "start": 0,
            "end": 0
          },
          {
            "word": "in ",
            "start": 0,
            "end": 0
          },
          {
            "word": "my ",
            "start": 0,
            "end": 0
          },
          {
            "word": "self-",
            "start": 0,
            "end": 0
          },
          {
            "word": "righteous ",
            "start": 0,
            "end": 0
          },
          {
            "word": "suicide",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 180.04,
        "verseEnd": 185.04,
        "words": [
          {
            "word": "I ",
            "start": 0,
            "end": 0
          },
          {
            "word": "cry ",
            "start": 0,
            "end": 0
          },
          {
            "word": "when ",
            "start": 0,
            "end": 0
          },
          {
            "word": "angels ",
            "start": 0,
            "end": 0
          },
          {
            "word": "deserve ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "die",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 187.28,
        "verseEnd": 192.28,
        "words": [
          {
            "word": "In ",
            "start": 0,
            "end": 0
          },
          {
            "word": "my ",
            "start": 0,
            "end": 0
          },
          {
            "word": "self-",
            "start": 0,
            "end": 0
          },
          {
            "word": "righteous ",
            "start": 0,
            "end": 0
          },
          {
            "word": "suicide",
            "start": 0,
            "end": 0
          }
        ]
      },
      {
        "verseStart": 194.52,
        "verseEnd": 199.52,
        "words": [
          {
            "word": "I ",
            "start": 0,
            "end": 0
          },
          {
            "word": "cry ",
            "start": 0,
            "end": 0
          },
          {
            "word": "when ",
            "start": 0,
            "end": 0
          },
          {
            "word": "angels ",
            "start": 0,
            "end": 0
          },
          {
            "word": "deserve ",
            "start": 0,
            "end": 0
          },
          {
            "word": "to ",
            "start": 0,
            "end": 0
          },
          {
            "word": "die",
            "start": 0,
            "end": 0
          }
        ]
      }
    ]
  }
};
