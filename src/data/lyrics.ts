export interface Word {
  word: string;
  start: number;
  end: number;
  furigana?: string;
}

export interface Verse {
  verseStart: number;
  verseEnd: number;
  speaker?: string;
  translation?: string;
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
        ],
        "translation": "Boo-hoo, boo-hoo"
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
        ],
        "translation": "Boo-hoo, boo-hoo"
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
        ],
        "translation": "I wrote to you and waited for you in the night (boo-hoo)"
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
        ],
        "translation": "You don't answer my calls anymore (boo-hoo)"
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
        ],
        "translation": "Every evening I leave a tooth under the pillow (boo-hoo)"
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
        ],
        "translation": "Begging the heavens to bring you back (boo-hoo)"
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
        ],
        "translation": "I was good, and I wasn't bad (boo-hoo)"
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
        ],
        "translation": "All my life, like a good girl, I lived by the rules (boo-hoo)"
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
        ],
        "translation": "I'm tired of crying, I'm tired of suffering (boo-hoo)"
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
        ],
        "translation": "Still won't be able to foresee my own death (boo-hoo)"
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
        ],
        "translation": "La-la-la-la-la-a-a-a"
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
        ],
        "translation": "La-la-la-la-la-a-a-a"
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
        ],
        "translation": "Mum told me: \"Listen to your husband\""
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
        ],
        "translation": "I'm not obedient, I make it worse"
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
        ],
        "translation": "I don't do it like dad ordered"
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
        ],
        "translation": "Instead of a star, I grab a grenade"
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
        ],
        "translation": "Mum told me: \"Listen to your husband\""
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
        ],
        "translation": "I'm not obedient, I make it worse"
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
        ],
        "translation": "I don't do it like dad ordered"
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
        ],
        "translation": "Instead of a star, I grab a grenade"
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
        ],
        "translation": "I'd like to hug you like back then"
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
        ],
        "translation": "But for that I'd have to dig up the body"
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
        ],
        "translation": "Your ice-cold bones are somewhere down at the bottom"
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
        ],
        "translation": "Flowers will sprout in this wept-over earth"
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
        ],
        "translation": "Boo-hoo, boo-hoo"
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
        ],
        "translation": "Boo-hoo, boo-hoo"
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
        ],
        "translation": "Your brains are splattered all over the wall (boo-hoo)"
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
        ],
        "translation": "Got really angry at you, you gotta forgive me (boo-hoo)"
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
        ],
        "translation": "For the hundredth time in my sleep I watch your end (boo-hoo)"
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
        ],
        "translation": "And it's really not that scary to die (boo-hoo)"
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
        ],
        "translation": "I was good, and I wasn't bad (boo-hoo)"
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
        ],
        "translation": "And all my life like a good girl, I lived by the rules (boo-hoo)"
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
        ],
        "translation": "I'm tired of crying, I'm tired of suffering (boo-hoo)"
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
        ],
        "translation": "Still won't be able to foresee my own death (boo-hoo)"
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
        ],
        "translation": "Mum told me: \"Listen to your husband\""
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
        ],
        "translation": "I'm not obedient, I make it worse"
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
        ],
        "translation": "I don't do it like dad ordered"
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
        ],
        "translation": "Instead of a star, I grab a grenade"
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
        ],
        "translation": "Mum told me: \"Listen to your husband\""
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
        ],
        "translation": "I'm not obedient, I make it worse"
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
        ],
        "translation": "I don't do it like dad ordered"
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
        ],
        "translation": "Instead of a star, I grab a grenade"
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
        ],
        "translation": "La-la-la-la-la-a-a-a"
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
        ],
        "translation": "La-la-la-la-la-a-a-a"
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
        ],
        "translation": "La-la-la-la-la-a-a-a"
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
        ],
        "translation": "La-la-la-la-la-a-a-a"
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
        ],
        "translation": "I'd like to hug you like back then"
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
        ],
        "translation": "But for that I'd have to dig up the body"
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
        ],
        "translation": "Your ice-cold bones are somewhere down at the bottom"
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
        ],
        "translation": "Flowers will sprout in this wept-over earth"
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
        "verseStart": 44.842,
        "verseEnd": 45.784,
        "words": [
          {
            "word": "Wake ",
            "start": 44.842,
            "end": 44.965
          },
          {
            "word": "up (",
            "start": 44.965,
            "end": 45.618
          },
          {
            "word": "wake ",
            "start": 45.618,
            "end": 45.7
          },
          {
            "word": "up)",
            "start": 45.7,
            "end": 45.784
          }
        ]
      },
      {
        "verseStart": 45.784,
        "verseEnd": 47.663,
        "words": [
          {
            "word": "Grab ",
            "start": 45.784,
            "end": 45.967
          },
          {
            "word": "a ",
            "start": 45.967,
            "end": 46.092
          },
          {
            "word": "brush ",
            "start": 46.092,
            "end": 46.174
          },
          {
            "word": "and ",
            "start": 46.174,
            "end": 46.255
          },
          {
            "word": "put ",
            "start": 46.255,
            "end": 46.423
          },
          {
            "word": "a ",
            "start": 46.423,
            "end": 46.547
          },
          {
            "word": "little ",
            "start": 46.547,
            "end": 46.964
          },
          {
            "word": "makeup",
            "start": 46.964,
            "end": 47.663
          }
        ]
      },
      {
        "verseStart": 47.663,
        "verseEnd": 48.563,
        "words": [
          {
            "word": "Hide ",
            "start": 47.663,
            "end": 47.788
          },
          {
            "word": "the ",
            "start": 47.788,
            "end": 47.869
          },
          {
            "word": "scars ",
            "start": 47.869,
            "end": 47.991
          },
          {
            "word": "to ",
            "start": 47.991,
            "end": 48.073
          },
          {
            "word": "fade ",
            "start": 48.073,
            "end": 48.195
          },
          {
            "word": "away ",
            "start": 48.195,
            "end": 48.317
          },
          {
            "word": "the ",
            "start": 48.317,
            "end": 48.44
          },
          {
            "word": "shakeup",
            "start": 48.44,
            "end": 48.563
          }
        ]
      },
      {
        "verseStart": 48.563,
        "verseEnd": 49.518,
        "words": [
          {
            "word": "(Hide ",
            "start": 48.563,
            "end": 48.69
          },
          {
            "word": "the ",
            "start": 48.69,
            "end": 48.772
          },
          {
            "word": "scars ",
            "start": 48.772,
            "end": 48.898
          },
          {
            "word": "to ",
            "start": 48.898,
            "end": 49.025
          },
          {
            "word": "fade ",
            "start": 49.025,
            "end": 49.147
          },
          {
            "word": "away ",
            "start": 49.147,
            "end": 49.271
          },
          {
            "word": "the ",
            "start": 49.271,
            "end": 49.395
          },
          {
            "word": "shakeup)",
            "start": 49.395,
            "end": 49.518
          }
        ]
      },
      {
        "verseStart": 49.518,
        "verseEnd": 51.379,
        "words": [
          {
            "word": "Why'd ",
            "start": 49.518,
            "end": 49.578
          },
          {
            "word": "you ",
            "start": 49.578,
            "end": 49.702
          },
          {
            "word": "leave ",
            "start": 49.702,
            "end": 49.824
          },
          {
            "word": "the ",
            "start": 49.824,
            "end": 49.906
          },
          {
            "word": "keys ",
            "start": 49.906,
            "end": 50.069
          },
          {
            "word": "upon ",
            "start": 50.069,
            "end": 50.191
          },
          {
            "word": "the ",
            "start": 50.191,
            "end": 50.394
          },
          {
            "word": "table?",
            "start": 50.394,
            "end": 51.379
          }
        ]
      },
      {
        "verseStart": 51.379,
        "verseEnd": 53.26,
        "words": [
          {
            "word": "Here ",
            "start": 51.379,
            "end": 51.501
          },
          {
            "word": "you ",
            "start": 51.501,
            "end": 51.664
          },
          {
            "word": "go, ",
            "start": 51.664,
            "end": 51.825
          },
          {
            "word": "create ",
            "start": 51.825,
            "end": 51.907
          },
          {
            "word": "another ",
            "start": 51.907,
            "end": 52.073
          },
          {
            "word": "fable, ",
            "start": 52.073,
            "end": 52.155
          },
          {
            "word": "you ",
            "start": 52.155,
            "end": 52.608
          },
          {
            "word": "wanted ",
            "start": 52.608,
            "end": 52.73
          },
          {
            "word": "to",
            "start": 52.73,
            "end": 53.26
          }
        ]
      },
      {
        "verseStart": 53.26,
        "verseEnd": 55.317,
        "words": [
          {
            "word": "Grab ",
            "start": 53.26,
            "end": 53.386
          },
          {
            "word": "a ",
            "start": 53.386,
            "end": 53.47
          },
          {
            "word": "brush ",
            "start": 53.47,
            "end": 53.596
          },
          {
            "word": "and ",
            "start": 53.596,
            "end": 53.723
          },
          {
            "word": "put ",
            "start": 53.723,
            "end": 53.846
          },
          {
            "word": "a ",
            "start": 53.846,
            "end": 53.97
          },
          {
            "word": "little ",
            "start": 53.97,
            "end": 54.093
          },
          {
            "word": "makeup, ",
            "start": 54.093,
            "end": 54.263
          },
          {
            "word": "you ",
            "start": 54.263,
            "end": 54.639
          },
          {
            "word": "wanted ",
            "start": 54.639,
            "end": 54.762
          },
          {
            "word": "to",
            "start": 54.762,
            "end": 55.317
          }
        ]
      },
      {
        "verseStart": 55.317,
        "verseEnd": 57.156,
        "words": [
          {
            "word": "Hide ",
            "start": 55.317,
            "end": 55.44
          },
          {
            "word": "the ",
            "start": 55.44,
            "end": 55.563
          },
          {
            "word": "scars ",
            "start": 55.563,
            "end": 55.77
          },
          {
            "word": "to ",
            "start": 55.77,
            "end": 55.933
          },
          {
            "word": "fade ",
            "start": 55.933,
            "end": 56.056
          },
          {
            "word": "away ",
            "start": 56.056,
            "end": 56.219
          },
          {
            "word": "the ",
            "start": 56.219,
            "end": 56.341
          },
          {
            "word": "shakeup, ",
            "start": 56.341,
            "end": 56.627
          },
          {
            "word": "you ",
            "start": 56.627,
            "end": 56.791
          },
          {
            "word": "wanted ",
            "start": 56.791,
            "end": 56.913
          },
          {
            "word": "to",
            "start": 56.913,
            "end": 57.156
          }
        ]
      },
      {
        "verseStart": 57.156,
        "verseEnd": 58.81,
        "words": [
          {
            "word": "Why'd ",
            "start": 57.156,
            "end": 57.279
          },
          {
            "word": "you ",
            "start": 57.279,
            "end": 57.406
          },
          {
            "word": "leave ",
            "start": 57.406,
            "end": 57.492
          },
          {
            "word": "the ",
            "start": 57.492,
            "end": 57.657
          },
          {
            "word": "keys ",
            "start": 57.657,
            "end": 57.78
          },
          {
            "word": "upon ",
            "start": 57.78,
            "end": 57.942
          },
          {
            "word": "the ",
            "start": 57.942,
            "end": 58.104
          },
          {
            "word": "table? ",
            "start": 58.104,
            "end": 58.431
          },
          {
            "word": "You ",
            "start": 58.431,
            "end": 58.558
          },
          {
            "word": "wanted ",
            "start": 58.558,
            "end": 58.684
          },
          {
            "word": "to",
            "start": 58.684,
            "end": 58.81
          }
        ]
      },
      {
        "verseStart": 58.81,
        "verseEnd": 61.927,
        "words": [
          {
            "word": "I ",
            "start": 58.81,
            "end": 59.101
          },
          {
            "word": "don't ",
            "start": 59.101,
            "end": 59.306
          },
          {
            "word": "think ",
            "start": 59.306,
            "end": 59.602
          },
          {
            "word": "you ",
            "start": 59.602,
            "end": 59.928
          },
          {
            "word": "trust",
            "start": 59.928,
            "end": 61.927
          }
        ]
      },
      {
        "verseStart": 61.927,
        "verseEnd": 69.657,
        "words": [
          {
            "word": "In ",
            "start": 61.927,
            "end": 63.979
          },
          {
            "word": "my ",
            "start": 63.979,
            "end": 65.858
          },
          {
            "word": "self-",
            "start": 65.858,
            "end": 66.183
          },
          {
            "word": "righteous ",
            "start": 66.183,
            "end": 66.837
          },
          {
            "word": "suicide",
            "start": 66.837,
            "end": 69.657
          }
        ]
      },
      {
        "verseStart": 69.657,
        "verseEnd": 84.523,
        "words": [
          {
            "word": "I ",
            "start": 69.657,
            "end": 71.504
          },
          {
            "word": "cry ",
            "start": 71.504,
            "end": 73.184
          },
          {
            "word": "when ",
            "start": 73.184,
            "end": 73.428
          },
          {
            "word": "angels ",
            "start": 73.428,
            "end": 74.122
          },
          {
            "word": "deserve ",
            "start": 74.122,
            "end": 74.818
          },
          {
            "word": "to ",
            "start": 74.818,
            "end": 75.267
          },
          {
            "word": "die!",
            "start": 75.267,
            "end": 84.523
          }
        ]
      },
      {
        "verseStart": 84.523,
        "verseEnd": 85.435,
        "words": [
          {
            "word": "Wake ",
            "start": 84.523,
            "end": 84.645
          },
          {
            "word": "up (",
            "start": 84.645,
            "end": 84.933
          },
          {
            "word": "wake ",
            "start": 84.933,
            "end": 85.058
          },
          {
            "word": "up)",
            "start": 85.058,
            "end": 85.435
          }
        ]
      },
      {
        "verseStart": 85.435,
        "verseEnd": 87.367,
        "words": [
          {
            "word": "Grab ",
            "start": 85.435,
            "end": 85.517
          },
          {
            "word": "a ",
            "start": 85.517,
            "end": 85.643
          },
          {
            "word": "brush ",
            "start": 85.643,
            "end": 85.725
          },
          {
            "word": "and ",
            "start": 85.725,
            "end": 85.852
          },
          {
            "word": "put ",
            "start": 85.852,
            "end": 85.934
          },
          {
            "word": "a ",
            "start": 85.934,
            "end": 86.057
          },
          {
            "word": "little ",
            "start": 86.057,
            "end": 86.301
          },
          {
            "word": "makeup",
            "start": 86.301,
            "end": 87.367
          }
        ]
      },
      {
        "verseStart": 87.367,
        "verseEnd": 88.184,
        "words": [
          {
            "word": "Hide ",
            "start": 87.367,
            "end": 87.49
          },
          {
            "word": "the ",
            "start": 87.49,
            "end": 87.572
          },
          {
            "word": "scars ",
            "start": 87.572,
            "end": 87.653
          },
          {
            "word": "to ",
            "start": 87.653,
            "end": 87.776
          },
          {
            "word": "fade ",
            "start": 87.776,
            "end": 87.897
          },
          {
            "word": "away ",
            "start": 87.897,
            "end": 88.061
          },
          {
            "word": "the...",
            "start": 88.061,
            "end": 88.184
          }
        ]
      },
      {
        "verseStart": 88.184,
        "verseEnd": 89.103,
        "words": [
          {
            "word": "(Hide ",
            "start": 88.184,
            "end": 88.265
          },
          {
            "word": "the ",
            "start": 88.265,
            "end": 88.387
          },
          {
            "word": "scars ",
            "start": 88.387,
            "end": 88.509
          },
          {
            "word": "to ",
            "start": 88.509,
            "end": 88.631
          },
          {
            "word": "fade ",
            "start": 88.631,
            "end": 88.714
          },
          {
            "word": "away ",
            "start": 88.714,
            "end": 88.839
          },
          {
            "word": "the ",
            "start": 88.839,
            "end": 88.965
          },
          {
            "word": "shakeup)",
            "start": 88.965,
            "end": 89.103
          }
        ]
      },
      {
        "verseStart": 89.103,
        "verseEnd": 91.19,
        "words": [
          {
            "word": "Why'd ",
            "start": 89.103,
            "end": 89.229
          },
          {
            "word": "you ",
            "start": 89.229,
            "end": 89.356
          },
          {
            "word": "leave ",
            "start": 89.356,
            "end": 89.437
          },
          {
            "word": "the ",
            "start": 89.437,
            "end": 89.816
          },
          {
            "word": "keys ",
            "start": 89.816,
            "end": 89.939
          },
          {
            "word": "upon ",
            "start": 89.939,
            "end": 90.063
          },
          {
            "word": "the ",
            "start": 90.063,
            "end": 90.23
          },
          {
            "word": "table?",
            "start": 90.23,
            "end": 91.19
          }
        ]
      },
      {
        "verseStart": 91.19,
        "verseEnd": 93.141,
        "words": [
          {
            "word": "Here ",
            "start": 91.19,
            "end": 91.312
          },
          {
            "word": "you ",
            "start": 91.312,
            "end": 91.476
          },
          {
            "word": "go, ",
            "start": 91.476,
            "end": 91.639
          },
          {
            "word": "create ",
            "start": 91.639,
            "end": 91.72
          },
          {
            "word": "another ",
            "start": 91.72,
            "end": 91.885
          },
          {
            "word": "fable, ",
            "start": 91.885,
            "end": 92.38
          },
          {
            "word": "you ",
            "start": 92.38,
            "end": 92.503
          },
          {
            "word": "wanted ",
            "start": 92.503,
            "end": 92.626
          },
          {
            "word": "to",
            "start": 92.626,
            "end": 93.141
          }
        ]
      },
      {
        "verseStart": 93.141,
        "verseEnd": 94.907,
        "words": [
          {
            "word": "Grab ",
            "start": 93.141,
            "end": 93.307
          },
          {
            "word": "a ",
            "start": 93.307,
            "end": 93.389
          },
          {
            "word": "brush ",
            "start": 93.389,
            "end": 93.553
          },
          {
            "word": "and ",
            "start": 93.553,
            "end": 93.68
          },
          {
            "word": "put ",
            "start": 93.68,
            "end": 93.803
          },
          {
            "word": "a ",
            "start": 93.803,
            "end": 93.927
          },
          {
            "word": "little ",
            "start": 93.927,
            "end": 94.294
          },
          {
            "word": "makeup, ",
            "start": 94.294,
            "end": 94.458
          },
          {
            "word": "you ",
            "start": 94.458,
            "end": 94.539
          },
          {
            "word": "wanted ",
            "start": 94.539,
            "end": 94.662
          },
          {
            "word": "to",
            "start": 94.662,
            "end": 94.907
          }
        ]
      },
      {
        "verseStart": 94.907,
        "verseEnd": 96.786,
        "words": [
          {
            "word": "Hide ",
            "start": 94.907,
            "end": 95.029
          },
          {
            "word": "the ",
            "start": 95.029,
            "end": 95.191
          },
          {
            "word": "scars ",
            "start": 95.191,
            "end": 95.314
          },
          {
            "word": "to ",
            "start": 95.314,
            "end": 95.436
          },
          {
            "word": "fade ",
            "start": 95.436,
            "end": 95.599
          },
          {
            "word": "away ",
            "start": 95.599,
            "end": 95.724
          },
          {
            "word": "the ",
            "start": 95.724,
            "end": 95.887
          },
          {
            "word": "shakeup, ",
            "start": 95.887,
            "end": 96.215
          },
          {
            "word": "you ",
            "start": 96.215,
            "end": 96.338
          },
          {
            "word": "wanted ",
            "start": 96.338,
            "end": 96.46
          },
          {
            "word": "to",
            "start": 96.46,
            "end": 96.786
          }
        ]
      },
      {
        "verseStart": 96.786,
        "verseEnd": 98.429,
        "words": [
          {
            "word": "Why'd ",
            "start": 96.786,
            "end": 96.91
          },
          {
            "word": "you ",
            "start": 96.91,
            "end": 97.032
          },
          {
            "word": "leave ",
            "start": 97.032,
            "end": 97.155
          },
          {
            "word": "the ",
            "start": 97.155,
            "end": 97.278
          },
          {
            "word": "keys ",
            "start": 97.278,
            "end": 97.4
          },
          {
            "word": "upon ",
            "start": 97.4,
            "end": 97.567
          },
          {
            "word": "the ",
            "start": 97.567,
            "end": 97.648
          },
          {
            "word": "table? ",
            "start": 97.648,
            "end": 98.057
          },
          {
            "word": "You ",
            "start": 98.057,
            "end": 98.181
          },
          {
            "word": "wanted ",
            "start": 98.181,
            "end": 98.305
          },
          {
            "word": "to",
            "start": 98.305,
            "end": 98.429
          }
        ]
      },
      {
        "verseStart": 98.429,
        "verseEnd": 101.627,
        "words": [
          {
            "word": "I ",
            "start": 98.429,
            "end": 98.684
          },
          {
            "word": "don't ",
            "start": 98.684,
            "end": 98.975
          },
          {
            "word": "think ",
            "start": 98.975,
            "end": 99.224
          },
          {
            "word": "you ",
            "start": 99.224,
            "end": 99.508
          },
          {
            "word": "trust",
            "start": 99.508,
            "end": 101.627
          }
        ]
      },
      {
        "verseStart": 101.627,
        "verseEnd": 109.303,
        "words": [
          {
            "word": "In ",
            "start": 101.627,
            "end": 103.505
          },
          {
            "word": "my ",
            "start": 103.505,
            "end": 105.424
          },
          {
            "word": "self-",
            "start": 105.424,
            "end": 105.752
          },
          {
            "word": "righteous ",
            "start": 105.752,
            "end": 106.403
          },
          {
            "word": "suicide",
            "start": 106.403,
            "end": 109.303
          }
        ]
      },
      {
        "verseStart": 109.303,
        "verseEnd": 116.867,
        "words": [
          {
            "word": "I ",
            "start": 109.303,
            "end": 111.231
          },
          {
            "word": "cry ",
            "start": 111.231,
            "end": 112.903
          },
          {
            "word": "when ",
            "start": 112.903,
            "end": 113.146
          },
          {
            "word": "angels ",
            "start": 113.146,
            "end": 113.797
          },
          {
            "word": "deserve ",
            "start": 113.797,
            "end": 114.495
          },
          {
            "word": "to ",
            "start": 114.495,
            "end": 114.99
          },
          {
            "word": "die",
            "start": 114.99,
            "end": 116.867
          }
        ]
      },
      {
        "verseStart": 116.867,
        "verseEnd": 124.311,
        "words": [
          {
            "word": "In ",
            "start": 116.867,
            "end": 118.756
          },
          {
            "word": "my ",
            "start": 118.756,
            "end": 120.546
          },
          {
            "word": "self-",
            "start": 120.546,
            "end": 120.79
          },
          {
            "word": "righteous ",
            "start": 120.79,
            "end": 121.451
          },
          {
            "word": "suicide",
            "start": 121.451,
            "end": 124.311
          }
        ]
      },
      {
        "verseStart": 124.311,
        "verseEnd": 139.25,
        "words": [
          {
            "word": "I ",
            "start": 124.311,
            "end": 126.109
          },
          {
            "word": "cry ",
            "start": 126.109,
            "end": 127.859
          },
          {
            "word": "when ",
            "start": 127.859,
            "end": 128.226
          },
          {
            "word": "angels ",
            "start": 128.226,
            "end": 128.716
          },
          {
            "word": "deserve ",
            "start": 128.716,
            "end": 129.367
          },
          {
            "word": "to ",
            "start": 129.367,
            "end": 129.856
          },
          {
            "word": "die",
            "start": 129.856,
            "end": 139.25
          }
        ]
      },
      {
        "verseStart": 139.25,
        "verseEnd": 141.123,
        "words": [
          {
            "word": "Father (",
            "start": 139.25,
            "end": 140.105
          },
          {
            "word": "father)",
            "start": 140.105,
            "end": 141.123
          }
        ]
      },
      {
        "verseStart": 141.123,
        "verseEnd": 142.929,
        "words": [
          {
            "word": "Father (",
            "start": 141.123,
            "end": 142.064
          },
          {
            "word": "father)",
            "start": 142.064,
            "end": 142.929
          }
        ]
      },
      {
        "verseStart": 142.929,
        "verseEnd": 144.727,
        "words": [
          {
            "word": "Father (",
            "start": 142.929,
            "end": 143.789
          },
          {
            "word": "father)",
            "start": 143.789,
            "end": 144.727
          }
        ]
      },
      {
        "verseStart": 144.727,
        "verseEnd": 146.605,
        "words": [
          {
            "word": "Father (",
            "start": 144.727,
            "end": 145.668
          },
          {
            "word": "father)",
            "start": 145.668,
            "end": 146.605
          }
        ]
      },
      {
        "verseStart": 146.605,
        "verseEnd": 150.489,
        "words": [
          {
            "word": "Father, ",
            "start": 146.605,
            "end": 147.43
          },
          {
            "word": "into ",
            "start": 147.43,
            "end": 147.553
          },
          {
            "word": "your ",
            "start": 147.553,
            "end": 148.082
          },
          {
            "word": "hands ",
            "start": 148.082,
            "end": 148.816
          },
          {
            "word": "I ",
            "start": 148.816,
            "end": 149.142
          },
          {
            "word": "commend ",
            "start": 149.142,
            "end": 149.672
          },
          {
            "word": "my ",
            "start": 149.672,
            "end": 149.917
          },
          {
            "word": "spirit",
            "start": 149.917,
            "end": 150.489
          }
        ]
      },
      {
        "verseStart": 150.489,
        "verseEnd": 152.214,
        "words": [
          {
            "word": "Father, ",
            "start": 150.489,
            "end": 151.071
          },
          {
            "word": "into ",
            "start": 151.071,
            "end": 151.563
          },
          {
            "word": "your ",
            "start": 151.563,
            "end": 151.767
          },
          {
            "word": "hands",
            "start": 151.767,
            "end": 152.214
          }
        ]
      },
      {
        "verseStart": 152.214,
        "verseEnd": 155.895,
        "words": [
          {
            "word": "Why ",
            "start": 152.214,
            "end": 152.626
          },
          {
            "word": "have ",
            "start": 152.626,
            "end": 153.08
          },
          {
            "word": "you ",
            "start": 153.08,
            "end": 153.529
          },
          {
            "word": "forsaken ",
            "start": 153.529,
            "end": 154.915
          },
          {
            "word": "me?",
            "start": 154.915,
            "end": 155.895
          }
        ]
      },
      {
        "verseStart": 155.895,
        "verseEnd": 159.655,
        "words": [
          {
            "word": "In ",
            "start": 155.895,
            "end": 156.262
          },
          {
            "word": "your ",
            "start": 156.262,
            "end": 156.709
          },
          {
            "word": "eyes, ",
            "start": 156.709,
            "end": 157.118
          },
          {
            "word": "forsaken ",
            "start": 157.118,
            "end": 158.589
          },
          {
            "word": "me",
            "start": 158.589,
            "end": 159.655
          }
        ]
      },
      {
        "verseStart": 159.655,
        "verseEnd": 163.37,
        "words": [
          {
            "word": "In ",
            "start": 159.655,
            "end": 160.028
          },
          {
            "word": "your ",
            "start": 160.028,
            "end": 160.522
          },
          {
            "word": "thoughts, ",
            "start": 160.522,
            "end": 161.09
          },
          {
            "word": "forsaken ",
            "start": 161.09,
            "end": 162.354
          },
          {
            "word": "me",
            "start": 162.354,
            "end": 163.37
          }
        ]
      },
      {
        "verseStart": 163.37,
        "verseEnd": 168.937,
        "words": [
          {
            "word": "In ",
            "start": 163.37,
            "end": 163.779
          },
          {
            "word": "your ",
            "start": 163.779,
            "end": 164.233
          },
          {
            "word": "heart, ",
            "start": 164.233,
            "end": 164.804
          },
          {
            "word": "forsaken ",
            "start": 164.804,
            "end": 167.014
          },
          {
            "word": "me, ",
            "start": 167.014,
            "end": 168.124
          },
          {
            "word": "oh",
            "start": 168.124,
            "end": 168.937
          }
        ]
      },
      {
        "verseStart": 168.937,
        "verseEnd": 178.235,
        "words": [
          {
            "word": "Trust ",
            "start": 168.937,
            "end": 170.937
          },
          {
            "word": "in ",
            "start": 170.937,
            "end": 172.691
          },
          {
            "word": "my ",
            "start": 172.691,
            "end": 174.487
          },
          {
            "word": "self-",
            "start": 174.487,
            "end": 174.772
          },
          {
            "word": "righteous ",
            "start": 174.772,
            "end": 175.423
          },
          {
            "word": "suicide",
            "start": 175.423,
            "end": 178.235
          }
        ]
      },
      {
        "verseStart": 178.235,
        "verseEnd": 185.388,
        "words": [
          {
            "word": "I ",
            "start": 178.235,
            "end": 180.072
          },
          {
            "word": "cry ",
            "start": 180.072,
            "end": 181.595
          },
          {
            "word": "when ",
            "start": 181.595,
            "end": 181.798
          },
          {
            "word": "angels ",
            "start": 181.798,
            "end": 182.618
          },
          {
            "word": "deserve ",
            "start": 182.618,
            "end": 183.147
          },
          {
            "word": "to ",
            "start": 183.147,
            "end": 183.309
          },
          {
            "word": "die",
            "start": 183.309,
            "end": 185.388
          }
        ]
      },
      {
        "verseStart": 185.388,
        "verseEnd": 192.478,
        "words": [
          {
            "word": "In ",
            "start": 185.388,
            "end": 187.104
          },
          {
            "word": "my ",
            "start": 187.104,
            "end": 189.004
          },
          {
            "word": "self-",
            "start": 189.004,
            "end": 189.289
          },
          {
            "word": "righteous ",
            "start": 189.289,
            "end": 189.902
          },
          {
            "word": "suicide",
            "start": 189.902,
            "end": 192.478
          }
        ]
      },
      {
        "verseStart": 192.478,
        "verseEnd": 200.282,
        "words": [
          {
            "word": "I ",
            "start": 192.478,
            "end": 194.349
          },
          {
            "word": "cry ",
            "start": 194.349,
            "end": 196.112
          },
          {
            "word": "when ",
            "start": 196.112,
            "end": 196.275
          },
          {
            "word": "angels ",
            "start": 196.275,
            "end": 196.971
          },
          {
            "word": "deserve ",
            "start": 196.971,
            "end": 197.791
          },
          {
            "word": "to ",
            "start": 197.791,
            "end": 198.282
          },
          {
            "word": "die",
            "start": 198.282,
            "end": 0
          }
        ]
      }
    ]
  },
  "Grafgravers - Van De G No De H.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 0,
        "verseEnd": 11.573,
        "speaker": "<i>West-flemish noises</i>",
        "words": []
      },
      {
        "verseStart": 11.573,
        "verseEnd": 13.037,
        "words": [
          {
            "word": "It ",
            "start": 11.573,
            "end": 12.182
          },
          {
            "word": "da ",
            "start": 12.182,
            "end": 12.346
          },
          {
            "word": "lam ",
            "start": 12.346,
            "end": 12.509
          },
          {
            "word": "ooi?",
            "start": 12.509,
            "end": 13.037
          }
        ]
      },
      {
        "verseStart": 13.037,
        "verseEnd": 14.426,
        "words": [
          {
            "word": "Bejoat ",
            "start": 13.037,
            "end": 13.202
          },
          {
            "word": "da ",
            "start": 13.202,
            "end": 13.366
          },
          {
            "word": "lam ",
            "start": 13.366,
            "end": 13.528
          },
          {
            "word": "it ",
            "start": 13.528,
            "end": 13.696
          },
          {
            "word": "ooi!",
            "start": 13.696,
            "end": 14.426
          }
        ]
      },
      {
        "verseStart": 14.426,
        "verseEnd": 15.615,
        "words": [
          {
            "word": "It ",
            "start": 14.426,
            "end": 14.629
          },
          {
            "word": "da ",
            "start": 14.629,
            "end": 14.792
          },
          {
            "word": "lam ",
            "start": 14.792,
            "end": 14.955
          },
          {
            "word": "ooi?",
            "start": 14.955,
            "end": 15.615
          }
        ]
      },
      {
        "verseStart": 15.615,
        "verseEnd": 17.046,
        "words": [
          {
            "word": "Bejoat ",
            "start": 15.615,
            "end": 15.777
          },
          {
            "word": "da ",
            "start": 15.777,
            "end": 15.98
          },
          {
            "word": "lam ",
            "start": 15.98,
            "end": 16.224
          },
          {
            "word": "it ",
            "start": 16.224,
            "end": 16.388
          },
          {
            "word": "ooi!",
            "start": 16.388,
            "end": 17.046
          }
        ]
      },
      {
        "verseStart": 17.046,
        "verseEnd": 18.065,
        "words": [
          {
            "word": "It ",
            "start": 17.046,
            "end": 17.208
          },
          {
            "word": "da ",
            "start": 17.208,
            "end": 17.373
          },
          {
            "word": "lam ",
            "start": 17.373,
            "end": 17.536
          },
          {
            "word": "ooi?",
            "start": 17.536,
            "end": 18.065
          }
        ]
      },
      {
        "verseStart": 18.065,
        "verseEnd": 19.925,
        "words": [
          {
            "word": "Bejoat ",
            "start": 18.065,
            "end": 18.21
          },
          {
            "word": "da ",
            "start": 18.21,
            "end": 18.456
          },
          {
            "word": "lam ",
            "start": 18.456,
            "end": 18.619
          },
          {
            "word": "it ",
            "start": 18.619,
            "end": 18.823
          },
          {
            "word": "ooi!",
            "start": 18.823,
            "end": 19.925
          }
        ]
      },
      {
        "verseStart": 19.925,
        "verseEnd": 22.254,
        "words": [
          {
            "word": "It ",
            "start": 19.925,
            "end": 20.048
          },
          {
            "word": "da ",
            "start": 20.048,
            "end": 20.211
          },
          {
            "word": "lam ",
            "start": 20.211,
            "end": 20.334
          },
          {
            "word": "ooi? ",
            "start": 20.334,
            "end": 20.705
          },
          {
            "word": "Bejoa ",
            "start": 20.705,
            "end": 20.868
          },
          {
            "word": "joa!",
            "start": 20.868,
            "end": 22.254
          }
        ]
      },
      {
        "verseStart": 22.254,
        "verseEnd": 23.23,
        "words": [
          {
            "word": "It ",
            "start": 22.254,
            "end": 22.416
          },
          {
            "word": "da ",
            "start": 22.416,
            "end": 22.619
          },
          {
            "word": "lam ",
            "start": 22.619,
            "end": 22.74
          },
          {
            "word": "ooi?",
            "start": 22.74,
            "end": 23.23
          }
        ]
      },
      {
        "verseStart": 23.23,
        "verseEnd": 24.826,
        "words": [
          {
            "word": "Bejoat ",
            "start": 23.23,
            "end": 23.393
          },
          {
            "word": "da ",
            "start": 23.393,
            "end": 23.597
          },
          {
            "word": "lam ",
            "start": 23.597,
            "end": 23.886
          },
          {
            "word": "it ",
            "start": 23.886,
            "end": 24.052
          },
          {
            "word": "ooi!",
            "start": 24.052,
            "end": 24.826
          }
        ]
      },
      {
        "verseStart": 24.826,
        "verseEnd": 25.769,
        "words": [
          {
            "word": "It ",
            "start": 24.826,
            "end": 24.99
          },
          {
            "word": "da ",
            "start": 24.99,
            "end": 25.194
          },
          {
            "word": "lam ",
            "start": 25.194,
            "end": 25.32
          },
          {
            "word": "ooi?",
            "start": 25.32,
            "end": 25.769
          }
        ]
      },
      {
        "verseStart": 25.769,
        "verseEnd": 27.45,
        "words": [
          {
            "word": "Bejoat ",
            "start": 25.769,
            "end": 26.182
          },
          {
            "word": "da ",
            "start": 26.182,
            "end": 26.306
          },
          {
            "word": "lam ",
            "start": 26.306,
            "end": 26.472
          },
          {
            "word": "it ",
            "start": 26.472,
            "end": 26.634
          },
          {
            "word": "ooi!",
            "start": 26.634,
            "end": 27.45
          }
        ]
      },
      {
        "verseStart": 27.45,
        "verseEnd": 28.391,
        "words": [
          {
            "word": "It ",
            "start": 27.45,
            "end": 27.613
          },
          {
            "word": "da ",
            "start": 27.613,
            "end": 27.775
          },
          {
            "word": "lam ",
            "start": 27.775,
            "end": 27.939
          },
          {
            "word": "ooi?",
            "start": 27.939,
            "end": 28.391
          }
        ]
      },
      {
        "verseStart": 28.391,
        "verseEnd": 30.019,
        "words": [
          {
            "word": "Bejoat ",
            "start": 28.391,
            "end": 28.717
          },
          {
            "word": "da ",
            "start": 28.717,
            "end": 28.883
          },
          {
            "word": "lam ",
            "start": 28.883,
            "end": 29.047
          },
          {
            "word": "it ",
            "start": 29.047,
            "end": 29.209
          },
          {
            "word": "ooi!",
            "start": 29.209,
            "end": 30.019
          }
        ]
      },
      {
        "verseStart": 30.019,
        "verseEnd": 32.105,
        "words": [
          {
            "word": "It ",
            "start": 30.019,
            "end": 30.181
          },
          {
            "word": "da ",
            "start": 30.181,
            "end": 30.385
          },
          {
            "word": "lam ",
            "start": 30.385,
            "end": 30.51
          },
          {
            "word": "ooi? ",
            "start": 30.51,
            "end": 31.006
          },
          {
            "word": "Bejoa ",
            "start": 31.006,
            "end": 31.413
          },
          {
            "word": "joa!",
            "start": 31.413,
            "end": 32.105
          }
        ]
      },
      {
        "verseStart": 32.105,
        "verseEnd": 34.884,
        "words": [
          {
            "word": "Van ",
            "start": 32.105,
            "end": 32.267
          },
          {
            "word": "de ",
            "start": 32.267,
            "end": 32.431
          },
          {
            "word": "G ",
            "start": 32.431,
            "end": 32.755
          },
          {
            "word": "node ",
            "start": 32.755,
            "end": 33.087
          },
          {
            "word": "H, ",
            "start": 33.087,
            "end": 33.417
          },
          {
            "word": "van ",
            "start": 33.417,
            "end": 33.62
          },
          {
            "word": "de ",
            "start": 33.62,
            "end": 33.742
          },
          {
            "word": "H ",
            "start": 33.742,
            "end": 34.066
          },
          {
            "word": "node ",
            "start": 34.066,
            "end": 34.394
          },
          {
            "word": "G",
            "start": 34.394,
            "end": 34.884
          }
        ]
      },
      {
        "verseStart": 34.884,
        "verseEnd": 37.275,
        "words": [
          {
            "word": "West-",
            "start": 34.884,
            "end": 35.008
          },
          {
            "word": "Vloandern ",
            "start": 35.008,
            "end": 35.542
          },
          {
            "word": "vanavond ",
            "start": 35.542,
            "end": 36.12
          },
          {
            "word": "doe ",
            "start": 36.12,
            "end": 36.244
          },
          {
            "word": "mor ",
            "start": 36.244,
            "end": 36.489
          },
          {
            "word": "ollemaole ",
            "start": 36.489,
            "end": 36.823
          },
          {
            "word": "mee!",
            "start": 36.823,
            "end": 37.275
          }
        ]
      },
      {
        "verseStart": 37.275,
        "verseEnd": 40.072,
        "words": [
          {
            "word": "Van ",
            "start": 37.275,
            "end": 37.443
          },
          {
            "word": "de ",
            "start": 37.443,
            "end": 37.566
          },
          {
            "word": "G ",
            "start": 37.566,
            "end": 37.932
          },
          {
            "word": "node ",
            "start": 37.932,
            "end": 38.299
          },
          {
            "word": "H, ",
            "start": 38.299,
            "end": 38.588
          },
          {
            "word": "van ",
            "start": 38.588,
            "end": 38.791
          },
          {
            "word": "de ",
            "start": 38.791,
            "end": 38.915
          },
          {
            "word": "H ",
            "start": 38.915,
            "end": 39.214
          },
          {
            "word": "node ",
            "start": 39.214,
            "end": 39.583
          },
          {
            "word": "G",
            "start": 39.583,
            "end": 40.072
          }
        ]
      },
      {
        "verseStart": 40.072,
        "verseEnd": 42.308,
        "words": [
          {
            "word": "West-",
            "start": 40.072,
            "end": 40.072
          },
          {
            "word": "Vloandern ",
            "start": 40.072,
            "end": 40.587
          },
          {
            "word": "vanavond ",
            "start": 40.587,
            "end": 41.242
          },
          {
            "word": "doe ",
            "start": 41.242,
            "end": 41.365
          },
          {
            "word": "mor ",
            "start": 41.365,
            "end": 41.57
          },
          {
            "word": "ollemaole ",
            "start": 41.57,
            "end": 41.936
          },
          {
            "word": "mee!",
            "start": 41.936,
            "end": 42.308
          }
        ]
      },
      {
        "verseStart": 42.308,
        "verseEnd": 44.976,
        "words": [
          {
            "word": "We ",
            "start": 42.308,
            "end": 42.43
          },
          {
            "word": "goan ",
            "start": 42.43,
            "end": 42.552
          },
          {
            "word": "van ",
            "start": 42.552,
            "end": 42.633
          },
          {
            "word": "de ",
            "start": 42.633,
            "end": 42.757
          },
          {
            "word": "G ",
            "start": 42.757,
            "end": 43.045
          },
          {
            "word": "no ",
            "start": 43.045,
            "end": 43.249
          },
          {
            "word": "de ",
            "start": 43.249,
            "end": 43.414
          },
          {
            "word": "H ",
            "start": 43.414,
            "end": 43.703
          },
          {
            "word": "van ",
            "start": 43.703,
            "end": 43.868
          },
          {
            "word": "de ",
            "start": 43.868,
            "end": 43.99
          },
          {
            "word": "A ",
            "start": 43.99,
            "end": 44.322
          },
          {
            "word": "no ",
            "start": 44.322,
            "end": 44.485
          },
          {
            "word": "de ",
            "start": 44.485,
            "end": 44.648
          },
          {
            "word": "B",
            "start": 44.648,
            "end": 44.976
          }
        ]
      },
      {
        "verseStart": 44.976,
        "verseEnd": 47.521,
        "words": [
          {
            "word": "Heelt ",
            "start": 44.976,
            "end": 45.182
          },
          {
            "word": "alfabet ",
            "start": 45.182,
            "end": 45.801
          },
          {
            "word": "bewerkt ",
            "start": 45.801,
            "end": 46.127
          },
          {
            "word": "up ",
            "start": 46.127,
            "end": 46.249
          },
          {
            "word": "uze ",
            "start": 46.249,
            "end": 46.579
          },
          {
            "word": "Graver ",
            "start": 46.579,
            "end": 47.027
          },
          {
            "word": "LP",
            "start": 47.027,
            "end": 47.521
          }
        ]
      },
      {
        "verseStart": 47.521,
        "verseEnd": 50.091,
        "words": [
          {
            "word": "Je ",
            "start": 47.521,
            "end": 47.685
          },
          {
            "word": "moet ",
            "start": 47.685,
            "end": 47.888
          },
          {
            "word": "niet ",
            "start": 47.888,
            "end": 48.051
          },
          {
            "word": "probeern ",
            "start": 48.051,
            "end": 48.46
          },
          {
            "word": "van ",
            "start": 48.46,
            "end": 48.703
          },
          {
            "word": "us ",
            "start": 48.703,
            "end": 48.825
          },
          {
            "word": "in ",
            "start": 48.825,
            "end": 48.988
          },
          {
            "word": "een ",
            "start": 48.988,
            "end": 49.111
          },
          {
            "word": "maatpak ",
            "start": 49.111,
            "end": 49.477
          },
          {
            "word": "te ",
            "start": 49.477,
            "end": 49.806
          },
          {
            "word": "steekn",
            "start": 49.806,
            "end": 50.091
          }
        ]
      },
      {
        "verseStart": 50.091,
        "verseEnd": 52.625,
        "words": [
          {
            "word": "Owe ",
            "start": 50.091,
            "end": 50.213
          },
          {
            "word": "de ",
            "start": 50.213,
            "end": 50.376
          },
          {
            "word": "maat ",
            "start": 50.376,
            "end": 50.742
          },
          {
            "word": "pakken, ",
            "start": 50.742,
            "end": 51.112
          },
          {
            "word": "komn ",
            "start": 51.112,
            "end": 51.356
          },
          {
            "word": "we ",
            "start": 51.356,
            "end": 51.482
          },
          {
            "word": "de ",
            "start": 51.482,
            "end": 51.644
          },
          {
            "word": "maatstaf ",
            "start": 51.644,
            "end": 52.173
          },
          {
            "word": "deurbreekn",
            "start": 52.173,
            "end": 52.625
          }
        ]
      },
      {
        "verseStart": 52.625,
        "verseEnd": 55.284,
        "words": [
          {
            "word": "Raakvlakken ",
            "start": 52.625,
            "end": 53.44
          },
          {
            "word": "smeedn, ",
            "start": 53.44,
            "end": 53.767
          },
          {
            "word": "doe ",
            "start": 53.767,
            "end": 54.012
          },
          {
            "word": "gieder ",
            "start": 54.012,
            "end": 54.257
          },
          {
            "word": "vanavond ",
            "start": 54.257,
            "end": 54.38
          },
          {
            "word": "mo ",
            "start": 54.38,
            "end": 54.871
          },
          {
            "word": "mee",
            "start": 54.871,
            "end": 55.284
          }
        ]
      },
      {
        "verseStart": 55.284,
        "verseEnd": 57.858,
        "words": [
          {
            "word": "Heel ",
            "start": 55.284,
            "end": 55.447
          },
          {
            "word": "de ",
            "start": 55.447,
            "end": 55.611
          },
          {
            "word": "zale ",
            "start": 55.611,
            "end": 56.222
          },
          {
            "word": "gezamenlijk ",
            "start": 56.222,
            "end": 56.711
          },
          {
            "word": "een ",
            "start": 56.711,
            "end": 56.833
          },
          {
            "word": "zalig ",
            "start": 56.833,
            "end": 57.45
          },
          {
            "word": "idee",
            "start": 57.45,
            "end": 57.858
          }
        ]
      },
      {
        "verseStart": 57.858,
        "verseEnd": 59.83,
        "words": [
          {
            "word": "Us ",
            "start": 57.858,
            "end": 58.029
          },
          {
            "word": "verhaal ",
            "start": 58.029,
            "end": 58.4
          },
          {
            "word": "is ",
            "start": 58.4,
            "end": 58.728
          },
          {
            "word": "gekneed, ",
            "start": 58.728,
            "end": 59.182
          },
          {
            "word": "aangenaam",
            "start": 59.182,
            "end": 59.83
          }
        ]
      },
      {
        "verseStart": 59.83,
        "verseEnd": 62.973,
        "words": [
          {
            "word": "5 ",
            "start": 59.83,
            "end": 60.195
          },
          {
            "word": "moppetappers ",
            "start": 60.195,
            "end": 60.769
          },
          {
            "word": "samen ",
            "start": 60.769,
            "end": 61.095
          },
          {
            "word": "rond ",
            "start": 61.095,
            "end": 61.299
          },
          {
            "word": "de ",
            "start": 61.299,
            "end": 61.461
          },
          {
            "word": "tafel ",
            "start": 61.461,
            "end": 61.827
          },
          {
            "word": "lik ",
            "start": 61.827,
            "end": 62.152
          },
          {
            "word": "HT&",
            "start": 62.152,
            "end": 62.645
          },
          {
            "word": "D",
            "start": 62.645,
            "end": 62.973
          }
        ]
      },
      {
        "verseStart": 62.973,
        "verseEnd": 65.665,
        "words": [
          {
            "word": "Wien ",
            "start": 62.973,
            "end": 63.341
          },
          {
            "word": "goat ",
            "start": 63.341,
            "end": 63.667
          },
          {
            "word": "er ",
            "start": 63.667,
            "end": 63.871
          },
          {
            "word": "ier ",
            "start": 63.871,
            "end": 64.034
          },
          {
            "word": "nu ",
            "start": 64.034,
            "end": 64.32
          },
          {
            "word": "mee ",
            "start": 64.32,
            "end": 64.482
          },
          {
            "word": "van ",
            "start": 64.482,
            "end": 64.646
          },
          {
            "word": "G ",
            "start": 64.646,
            "end": 64.971
          },
          {
            "word": "node ",
            "start": 64.971,
            "end": 65.299
          },
          {
            "word": "H",
            "start": 65.299,
            "end": 65.665
          }
        ]
      },
      {
        "verseStart": 65.665,
        "verseEnd": 68.136,
        "words": [
          {
            "word": "Tis ",
            "start": 65.665,
            "end": 65.665
          },
          {
            "word": "de ",
            "start": 65.665,
            "end": 65.731
          },
          {
            "word": "V ",
            "start": 65.731,
            "end": 66.219
          },
          {
            "word": "dubbel ",
            "start": 66.219,
            "end": 66.464
          },
          {
            "word": "R ",
            "start": 66.464,
            "end": 66.831
          },
          {
            "word": "E ",
            "start": 66.831,
            "end": 67.034
          },
          {
            "word": "were ",
            "start": 67.034,
            "end": 67.402
          },
          {
            "word": "reete ",
            "start": 67.402,
            "end": 67.688
          },
          {
            "word": "speciaal",
            "start": 67.688,
            "end": 68.136
          }
        ]
      },
      {
        "verseStart": 68.136,
        "verseEnd": 70.84,
        "words": [
          {
            "word": "Tis ",
            "start": 68.136,
            "end": 68.545
          },
          {
            "word": "osan ",
            "start": 68.545,
            "end": 68.882
          },
          {
            "word": "ol ",
            "start": 68.882,
            "end": 69.165
          },
          {
            "word": "vet ",
            "start": 69.165,
            "end": 69.491
          },
          {
            "word": "en ",
            "start": 69.491,
            "end": 69.653
          },
          {
            "word": "das ",
            "start": 69.653,
            "end": 69.816
          },
          {
            "word": "nie ",
            "start": 69.816,
            "end": 69.942
          },
          {
            "word": "mjeer ",
            "start": 69.942,
            "end": 70.226
          },
          {
            "word": "dan ",
            "start": 70.226,
            "end": 70.389
          },
          {
            "word": "normaal",
            "start": 70.389,
            "end": 70.84
          }
        ]
      },
      {
        "verseStart": 70.84,
        "verseEnd": 73.381,
        "words": [
          {
            "word": "Want ",
            "start": 70.84,
            "end": 71.046
          },
          {
            "word": "de ",
            "start": 71.046,
            "end": 71.212
          },
          {
            "word": "raps ",
            "start": 71.212,
            "end": 71.496
          },
          {
            "word": "zin ",
            "start": 71.496,
            "end": 71.659
          },
          {
            "word": "OHSNAP ",
            "start": 71.659,
            "end": 71.782
          },
          {
            "word": "lik ",
            "start": 71.782,
            "end": 72.275
          },
          {
            "word": "us ",
            "start": 72.275,
            "end": 72.485
          },
          {
            "word": "beeldmateriaal",
            "start": 72.485,
            "end": 73.381
          }
        ]
      },
      {
        "verseStart": 73.381,
        "verseEnd": 76.062,
        "words": [
          {
            "word": "Doe ",
            "start": 73.381,
            "end": 73.545
          },
          {
            "word": "mo ",
            "start": 73.545,
            "end": 73.709
          },
          {
            "word": "mee ",
            "start": 73.709,
            "end": 74.041
          },
          {
            "word": "in ",
            "start": 74.041,
            "end": 74.205
          },
          {
            "word": "de ",
            "start": 74.205,
            "end": 74.369
          },
          {
            "word": "zaal, ",
            "start": 74.369,
            "end": 74.736
          },
          {
            "word": "vodajt ",
            "start": 74.736,
            "end": 75.106
          },
          {
            "word": "weet ",
            "start": 75.106,
            "end": 75.392
          },
          {
            "word": "staom ",
            "start": 75.392,
            "end": 75.515
          },
          {
            "word": "in't ",
            "start": 75.515,
            "end": 75.682
          },
          {
            "word": "breed",
            "start": 75.682,
            "end": 76.062
          }
        ]
      },
      {
        "verseStart": 76.062,
        "verseEnd": 78.683,
        "words": [
          {
            "word": "''Uitgesmeeerd'' ",
            "start": 76.062,
            "end": 77.536
          },
          {
            "word": "up ",
            "start": 77.536,
            "end": 77.617
          },
          {
            "word": "je ",
            "start": 77.617,
            "end": 77.907
          },
          {
            "word": "breedbeeldkanaaal,",
            "start": 77.907,
            "end": 78.683
          }
        ]
      },
      {
        "verseStart": 78.683,
        "verseEnd": 82.153,
        "words": [
          {
            "word": "Want ",
            "start": 78.683,
            "end": 78.806
          },
          {
            "word": "men ",
            "start": 78.806,
            "end": 78.973
          },
          {
            "word": "tong ",
            "start": 78.973,
            "end": 79.262
          },
          {
            "word": "is ",
            "start": 79.262,
            "end": 79.425
          },
          {
            "word": "me ",
            "start": 79.425,
            "end": 79.587
          },
          {
            "word": "zweerd, ",
            "start": 79.587,
            "end": 79.956
          },
          {
            "word": "nis ",
            "start": 79.956,
            "end": 80.078
          },
          {
            "word": "gesmeed ",
            "start": 80.078,
            "end": 80.245
          },
          {
            "word": "in ",
            "start": 80.245,
            "end": 80.573
          },
          {
            "word": "het ",
            "start": 80.573,
            "end": 80.698
          },
          {
            "word": "heets ",
            "start": 80.698,
            "end": 80.82
          },
          {
            "word": "van ",
            "start": 80.82,
            "end": 81.271
          },
          {
            "word": "de ",
            "start": 81.271,
            "end": 81.434
          },
          {
            "word": "naald",
            "start": 81.434,
            "end": 82.153
          }
        ]
      },
      {
        "verseStart": 82.153,
        "verseEnd": 84.232,
        "words": [
          {
            "word": "in ",
            "start": 82.153,
            "end": 82.359
          },
          {
            "word": "het ",
            "start": 82.359,
            "end": 82.563
          },
          {
            "word": "edelste ",
            "start": 82.563,
            "end": 82.807
          },
          {
            "word": "edelmetaal. ",
            "start": 82.807,
            "end": 83.703
          },
          {
            "word": "ei !",
            "start": 83.703,
            "end": 84.232
          }
        ]
      },
      {
        "verseStart": 84.232,
        "verseEnd": 85.182,
        "words": [
          {
            "word": "It ",
            "start": 84.232,
            "end": 84.4
          },
          {
            "word": "da ",
            "start": 84.4,
            "end": 84.565
          },
          {
            "word": "lam ",
            "start": 84.565,
            "end": 84.731
          },
          {
            "word": "ooi?",
            "start": 84.731,
            "end": 85.182
          }
        ]
      },
      {
        "verseStart": 85.182,
        "verseEnd": 86.817,
        "words": [
          {
            "word": "Bejoat ",
            "start": 85.182,
            "end": 85.51
          },
          {
            "word": "da ",
            "start": 85.51,
            "end": 85.673
          },
          {
            "word": "lam ",
            "start": 85.673,
            "end": 85.838
          },
          {
            "word": "it ",
            "start": 85.838,
            "end": 86.002
          },
          {
            "word": "ooi!",
            "start": 86.002,
            "end": 86.817
          }
        ]
      },
      {
        "verseStart": 86.817,
        "verseEnd": 87.725,
        "words": [
          {
            "word": "It ",
            "start": 86.817,
            "end": 86.984
          },
          {
            "word": "da ",
            "start": 86.984,
            "end": 87.147
          },
          {
            "word": "lam ",
            "start": 87.147,
            "end": 87.311
          },
          {
            "word": "ooi?",
            "start": 87.311,
            "end": 87.725
          }
        ]
      },
      {
        "verseStart": 87.725,
        "verseEnd": 89.437,
        "words": [
          {
            "word": "Bejoat ",
            "start": 87.725,
            "end": 88.091
          },
          {
            "word": "da ",
            "start": 88.091,
            "end": 88.294
          },
          {
            "word": "lam ",
            "start": 88.294,
            "end": 88.457
          },
          {
            "word": "it ",
            "start": 88.457,
            "end": 88.579
          },
          {
            "word": "ooi",
            "start": 88.579,
            "end": 89.437
          }
        ]
      },
      {
        "verseStart": 89.437,
        "verseEnd": 90.295,
        "words": [
          {
            "word": "It ",
            "start": 89.437,
            "end": 89.602
          },
          {
            "word": "da ",
            "start": 89.602,
            "end": 89.765
          },
          {
            "word": "lam ",
            "start": 89.765,
            "end": 89.887
          },
          {
            "word": "ooi?",
            "start": 89.887,
            "end": 90.295
          }
        ]
      },
      {
        "verseStart": 90.295,
        "verseEnd": 91.955,
        "words": [
          {
            "word": "Bejoat ",
            "start": 90.295,
            "end": 90.676
          },
          {
            "word": "da ",
            "start": 90.676,
            "end": 90.843
          },
          {
            "word": "lam ",
            "start": 90.843,
            "end": 90.965
          },
          {
            "word": "it ",
            "start": 90.965,
            "end": 91.137
          },
          {
            "word": "ooi",
            "start": 91.137,
            "end": 91.955
          }
        ]
      },
      {
        "verseStart": 91.955,
        "verseEnd": 93.988,
        "words": [
          {
            "word": "It ",
            "start": 91.955,
            "end": 92.124
          },
          {
            "word": "da ",
            "start": 92.124,
            "end": 92.331
          },
          {
            "word": "lam ",
            "start": 92.331,
            "end": 92.454
          },
          {
            "word": "ooi? ",
            "start": 92.454,
            "end": 92.902
          },
          {
            "word": "Bejoat ",
            "start": 92.902,
            "end": 93.066
          },
          {
            "word": "joat!",
            "start": 93.066,
            "end": 93.988
          }
        ]
      },
      {
        "verseStart": 93.988,
        "verseEnd": 96.808,
        "words": [
          {
            "word": "Van ",
            "start": 93.988,
            "end": 94.152
          },
          {
            "word": "de ",
            "start": 94.152,
            "end": 94.361
          },
          {
            "word": "G ",
            "start": 94.361,
            "end": 94.688
          },
          {
            "word": "node ",
            "start": 94.688,
            "end": 95.013
          },
          {
            "word": "H, ",
            "start": 95.013,
            "end": 95.338
          },
          {
            "word": "van ",
            "start": 95.338,
            "end": 95.5
          },
          {
            "word": "de ",
            "start": 95.5,
            "end": 95.664
          },
          {
            "word": "H ",
            "start": 95.664,
            "end": 95.989
          },
          {
            "word": "node ",
            "start": 95.989,
            "end": 96.316
          },
          {
            "word": "G",
            "start": 96.316,
            "end": 96.808
          }
        ]
      },
      {
        "verseStart": 96.808,
        "verseEnd": 99.223,
        "words": [
          {
            "word": "West-",
            "start": 96.808,
            "end": 96.97
          },
          {
            "word": "Vloandern ",
            "start": 96.97,
            "end": 97.501
          },
          {
            "word": "vanavond ",
            "start": 97.501,
            "end": 97.947
          },
          {
            "word": "doe ",
            "start": 97.947,
            "end": 98.111
          },
          {
            "word": "mor ",
            "start": 98.111,
            "end": 98.281
          },
          {
            "word": "ollemaole ",
            "start": 98.281,
            "end": 98.814
          },
          {
            "word": "mee!",
            "start": 98.814,
            "end": 99.223
          }
        ]
      },
      {
        "verseStart": 99.223,
        "verseEnd": 102.012,
        "words": [
          {
            "word": "Van ",
            "start": 99.223,
            "end": 99.426
          },
          {
            "word": "de ",
            "start": 99.426,
            "end": 99.549
          },
          {
            "word": "G ",
            "start": 99.549,
            "end": 99.922
          },
          {
            "word": "node ",
            "start": 99.922,
            "end": 100.292
          },
          {
            "word": "H, ",
            "start": 100.292,
            "end": 100.581
          },
          {
            "word": "van ",
            "start": 100.581,
            "end": 100.743
          },
          {
            "word": "de ",
            "start": 100.743,
            "end": 100.906
          },
          {
            "word": "H ",
            "start": 100.906,
            "end": 101.193
          },
          {
            "word": "node ",
            "start": 101.193,
            "end": 101.524
          },
          {
            "word": "G",
            "start": 101.524,
            "end": 102.012
          }
        ]
      },
      {
        "verseStart": 102.012,
        "verseEnd": 104.389,
        "words": [
          {
            "word": "West-",
            "start": 102.012,
            "end": 102.135
          },
          {
            "word": "Vloandern ",
            "start": 102.135,
            "end": 102.667
          },
          {
            "word": "vanavond ",
            "start": 102.667,
            "end": 103.121
          },
          {
            "word": "doe ",
            "start": 103.121,
            "end": 103.284
          },
          {
            "word": "mor ",
            "start": 103.284,
            "end": 103.448
          },
          {
            "word": "ollemaole ",
            "start": 103.448,
            "end": 103.938
          },
          {
            "word": "mee!",
            "start": 103.938,
            "end": 104.389
          }
        ]
      },
      {
        "verseStart": 104.389,
        "verseEnd": 107.099,
        "words": [
          {
            "word": "Van ",
            "start": 104.389,
            "end": 104.593
          },
          {
            "word": "de ",
            "start": 104.593,
            "end": 104.761
          },
          {
            "word": "G ",
            "start": 104.761,
            "end": 105.087
          },
          {
            "word": "node ",
            "start": 105.087,
            "end": 105.294
          },
          {
            "word": "H ",
            "start": 105.294,
            "end": 105.623
          },
          {
            "word": "toet ",
            "start": 105.623,
            "end": 105.829
          },
          {
            "word": "de ",
            "start": 105.829,
            "end": 105.95
          },
          {
            "word": "A ",
            "start": 105.95,
            "end": 106.316
          },
          {
            "word": "C ",
            "start": 106.316,
            "end": 106.524
          },
          {
            "word": "A ",
            "start": 106.524,
            "end": 106.646
          },
          {
            "word": "B",
            "start": 106.646,
            "end": 107.099
          }
        ]
      },
      {
        "verseStart": 107.099,
        "verseEnd": 109.517,
        "words": [
          {
            "word": "Wen ",
            "start": 107.099,
            "end": 107.264
          },
          {
            "word": "mjeer ",
            "start": 107.264,
            "end": 107.589
          },
          {
            "word": "scherpe ",
            "start": 107.589,
            "end": 107.835
          },
          {
            "word": "lines ",
            "start": 107.835,
            "end": 108.166
          },
          {
            "word": "dan ",
            "start": 108.166,
            "end": 108.369
          },
          {
            "word": "een ",
            "start": 108.369,
            "end": 108.534
          },
          {
            "word": "HD-",
            "start": 108.534,
            "end": 109.026
          },
          {
            "word": "tv",
            "start": 109.026,
            "end": 109.517
          }
        ]
      },
      {
        "verseStart": 109.517,
        "verseEnd": 112.151,
        "words": [
          {
            "word": "Jacky ",
            "start": 109.517,
            "end": 109.725
          },
          {
            "word": "Chan ",
            "start": 109.725,
            "end": 110.179
          },
          {
            "word": "up ",
            "start": 110.179,
            "end": 110.345
          },
          {
            "word": "de ",
            "start": 110.345,
            "end": 110.508
          },
          {
            "word": "beats ",
            "start": 110.508,
            "end": 110.873
          },
          {
            "word": "uit ",
            "start": 110.873,
            "end": 111.042
          },
          {
            "word": "da ",
            "start": 111.042,
            "end": 111.412
          },
          {
            "word": "mad ",
            "start": 111.412,
            "end": 111.656
          },
          {
            "word": "atelier",
            "start": 111.656,
            "end": 112.151
          }
        ]
      },
      {
        "verseStart": 112.151,
        "verseEnd": 114.744,
        "words": [
          {
            "word": "Zet ",
            "start": 112.151,
            "end": 112.354
          },
          {
            "word": "ze ",
            "start": 112.354,
            "end": 112.481
          },
          {
            "word": "beats ",
            "start": 112.481,
            "end": 112.851
          },
          {
            "word": "up ",
            "start": 112.851,
            "end": 113.015
          },
          {
            "word": "repeat ",
            "start": 113.015,
            "end": 113.387
          },
          {
            "word": "en ",
            "start": 113.387,
            "end": 113.55
          },
          {
            "word": "krigt ",
            "start": 113.55,
            "end": 113.754
          },
          {
            "word": "A ",
            "start": 113.754,
            "end": 114.081
          },
          {
            "word": "D ",
            "start": 114.081,
            "end": 114.246
          },
          {
            "word": "H ",
            "start": 114.246,
            "end": 114.409
          },
          {
            "word": "D",
            "start": 114.409,
            "end": 114.744
          }
        ]
      },
      {
        "verseStart": 114.744,
        "verseEnd": 117.316,
        "words": [
          {
            "word": "Go ",
            "start": 114.744,
            "end": 114.947
          },
          {
            "word": "mo ",
            "start": 114.947,
            "end": 115.11
          },
          {
            "word": "meeej, ",
            "start": 115.11,
            "end": 115.395
          },
          {
            "word": "go ",
            "start": 115.395,
            "end": 115.561
          },
          {
            "word": "mo ",
            "start": 115.561,
            "end": 115.723
          },
          {
            "word": "meej, ",
            "start": 115.723,
            "end": 116.048
          },
          {
            "word": "up ",
            "start": 116.048,
            "end": 116.21
          },
          {
            "word": "een ",
            "start": 116.21,
            "end": 116.332
          },
          {
            "word": "graver ",
            "start": 116.332,
            "end": 116.826
          },
          {
            "word": "tournéé",
            "start": 116.826,
            "end": 117.316
          }
        ]
      },
      {
        "verseStart": 117.316,
        "verseEnd": 119.94,
        "words": [
          {
            "word": "General ",
            "start": 117.316,
            "end": 117.77
          },
          {
            "word": "in ",
            "start": 117.77,
            "end": 117.934
          },
          {
            "word": "de ",
            "start": 117.934,
            "end": 118.137
          },
          {
            "word": "zoale ",
            "start": 118.137,
            "end": 118.751
          },
          {
            "word": "een ",
            "start": 118.751,
            "end": 118.913
          },
          {
            "word": "tente ",
            "start": 118.913,
            "end": 119.328
          },
          {
            "word": "oft ",
            "start": 119.328,
            "end": 119.49
          },
          {
            "word": "café",
            "start": 119.49,
            "end": 119.94
          }
        ]
      },
      {
        "verseStart": 119.94,
        "verseEnd": 122.555,
        "words": [
          {
            "word": "5 ",
            "start": 119.94,
            "end": 120.39
          },
          {
            "word": "gangen ",
            "start": 120.39,
            "end": 120.675
          },
          {
            "word": "upt ",
            "start": 120.675,
            "end": 120.883
          },
          {
            "word": "menu, ",
            "start": 120.883,
            "end": 121.249
          },
          {
            "word": "tis ",
            "start": 121.249,
            "end": 121.453
          },
          {
            "word": "een ",
            "start": 121.453,
            "end": 121.776
          },
          {
            "word": "graver ",
            "start": 121.776,
            "end": 122.022
          },
          {
            "word": "diner",
            "start": 122.022,
            "end": 122.555
          }
        ]
      },
      {
        "verseStart": 122.555,
        "verseEnd": 125.233,
        "words": [
          {
            "word": "Dus ",
            "start": 122.555,
            "end": 122.725
          },
          {
            "word": "goan ",
            "start": 122.725,
            "end": 122.851
          },
          {
            "word": "oalt ",
            "start": 122.851,
            "end": 123.142
          },
          {
            "word": "den ",
            "start": 123.142,
            "end": 123.304
          },
          {
            "word": "LP ",
            "start": 123.304,
            "end": 123.754
          },
          {
            "word": "en ",
            "start": 123.754,
            "end": 123.916
          },
          {
            "word": "betaal ",
            "start": 123.916,
            "end": 124.369
          },
          {
            "word": "jen ",
            "start": 124.369,
            "end": 124.534
          },
          {
            "word": "entréé",
            "start": 124.534,
            "end": 125.233
          }
        ]
      },
      {
        "verseStart": 125.233,
        "verseEnd": 127.615,
        "words": [
          {
            "word": "We ",
            "start": 125.233,
            "end": 125.356
          },
          {
            "word": "bluvn ",
            "start": 125.356,
            "end": 125.483
          },
          {
            "word": "bezig ",
            "start": 125.483,
            "end": 125.812
          },
          {
            "word": "integraaal, ",
            "start": 125.812,
            "end": 126.305
          },
          {
            "word": "van ",
            "start": 126.305,
            "end": 126.467
          },
          {
            "word": "G ",
            "start": 126.467,
            "end": 126.916
          },
          {
            "word": "node ",
            "start": 126.916,
            "end": 127.083
          },
          {
            "word": "H",
            "start": 127.083,
            "end": 127.615
          }
        ]
      },
      {
        "verseStart": 127.615,
        "verseEnd": 130.233,
        "words": [
          {
            "word": "Asan ",
            "start": 127.615,
            "end": 127.863
          },
          {
            "word": "trakteern ",
            "start": 127.863,
            "end": 128.15
          },
          {
            "word": "is ",
            "start": 128.15,
            "end": 128.394
          },
          {
            "word": "nie ",
            "start": 128.394,
            "end": 128.516
          },
          {
            "word": "rendabel, ",
            "start": 128.516,
            "end": 128.888
          },
          {
            "word": "doamee ",
            "start": 128.888,
            "end": 129.254
          },
          {
            "word": "dame ",
            "start": 129.254,
            "end": 129.541
          },
          {
            "word": "vraagn",
            "start": 129.541,
            "end": 130.233
          }
        ]
      },
      {
        "verseStart": 130.233,
        "verseEnd": 132.727,
        "words": [
          {
            "word": "Voe ",
            "start": 130.233,
            "end": 130.481
          },
          {
            "word": "met ",
            "start": 130.481,
            "end": 130.848
          },
          {
            "word": "de ",
            "start": 130.848,
            "end": 131.213
          },
          {
            "word": "Gravers, ",
            "start": 131.213,
            "end": 131.664
          },
          {
            "word": "bezeetn ",
            "start": 131.664,
            "end": 131.827
          },
          {
            "word": "te ",
            "start": 131.827,
            "end": 132.276
          },
          {
            "word": "graavn",
            "start": 132.276,
            "end": 132.727
          }
        ]
      },
      {
        "verseStart": 132.727,
        "verseEnd": 135.313,
        "words": [
          {
            "word": "We ",
            "start": 132.727,
            "end": 132.892
          },
          {
            "word": "loatn ",
            "start": 132.892,
            "end": 133.142
          },
          {
            "word": "de '",
            "start": 133.142,
            "end": 133.346
          },
          {
            "word": "Ultra' ",
            "start": 133.346,
            "end": 133.51
          },
          {
            "word": "achterwege ",
            "start": 133.51,
            "end": 133.631
          },
          {
            "word": "toch ",
            "start": 133.631,
            "end": 134.124
          },
          {
            "word": "wordt ",
            "start": 134.124,
            "end": 134.33
          },
          {
            "word": "het ",
            "start": 134.33,
            "end": 134.453
          },
          {
            "word": "magnetisch ",
            "start": 134.453,
            "end": 134.742
          },
          {
            "word": "vanaavnd",
            "start": 134.742,
            "end": 135.313
          }
        ]
      },
      {
        "verseStart": 135.313,
        "verseEnd": 137.864,
        "words": [
          {
            "word": "Met ",
            "start": 135.313,
            "end": 135.539
          },
          {
            "word": "een ",
            "start": 135.539,
            "end": 135.704
          },
          {
            "word": "cohesiekracht ",
            "start": 135.704,
            "end": 135.988
          },
          {
            "word": "genaamd, ",
            "start": 135.988,
            "end": 136.967
          },
          {
            "word": "Fenomenaal !",
            "start": 136.967,
            "end": 137.864
          }
        ]
      },
      {
        "verseStart": 137.864,
        "verseEnd": 140.723,
        "words": [
          {
            "word": "Geld ",
            "start": 137.864,
            "end": 138.008
          },
          {
            "word": "stoa ",
            "start": 138.008,
            "end": 138.172
          },
          {
            "word": "nie ",
            "start": 138.172,
            "end": 138.337
          },
          {
            "word": "centraal ",
            "start": 138.337,
            "end": 138.907
          },
          {
            "word": "doamee ",
            "start": 138.907,
            "end": 139.071
          },
          {
            "word": "dame ",
            "start": 139.071,
            "end": 139.274
          },
          {
            "word": "noois ",
            "start": 139.274,
            "end": 139.602
          },
          {
            "word": "goan ",
            "start": 139.602,
            "end": 139.888
          },
          {
            "word": "ofhaakn",
            "start": 139.888,
            "end": 140.723
          }
        ]
      },
      {
        "verseStart": 140.723,
        "verseEnd": 143.183,
        "words": [
          {
            "word": "Met ",
            "start": 140.723,
            "end": 140.929
          },
          {
            "word": "op ",
            "start": 140.929,
            "end": 141.213
          },
          {
            "word": "te ",
            "start": 141.213,
            "end": 141.457
          },
          {
            "word": "geevn ",
            "start": 141.457,
            "end": 141.624
          },
          {
            "word": "goaj ",
            "start": 141.624,
            "end": 142.072
          },
          {
            "word": "der ",
            "start": 142.072,
            "end": 142.401
          },
          {
            "word": "nie ",
            "start": 142.401,
            "end": 142.687
          },
          {
            "word": "geraakn",
            "start": 142.687,
            "end": 143.183
          }
        ]
      },
      {
        "verseStart": 143.183,
        "verseEnd": 146.251,
        "words": [
          {
            "word": "Dus ",
            "start": 143.183,
            "end": 143.386
          },
          {
            "word": "iedereen ",
            "start": 143.386,
            "end": 143.508
          },
          {
            "word": "doe ",
            "start": 143.508,
            "end": 143.793
          },
          {
            "word": "mee ",
            "start": 143.793,
            "end": 143.955
          },
          {
            "word": "vanavond, ",
            "start": 143.955,
            "end": 144.53
          },
          {
            "word": "loat ",
            "start": 144.53,
            "end": 144.735
          },
          {
            "word": "het ",
            "start": 144.735,
            "end": 145.025
          },
          {
            "word": "explodeern, ",
            "start": 145.025,
            "end": 145.352
          },
          {
            "word": "WRAAAAAAAAAH !",
            "start": 145.352,
            "end": 146.251
          }
        ]
      },
      {
        "verseStart": 146.251,
        "verseEnd": 147.151,
        "words": [
          {
            "word": "It ",
            "start": 146.251,
            "end": 146.415
          },
          {
            "word": "da ",
            "start": 146.415,
            "end": 146.536
          },
          {
            "word": "lam ",
            "start": 146.536,
            "end": 146.702
          },
          {
            "word": "ooi?",
            "start": 146.702,
            "end": 147.151
          }
        ]
      },
      {
        "verseStart": 147.151,
        "verseEnd": 148.826,
        "words": [
          {
            "word": "Bejoat ",
            "start": 147.151,
            "end": 147.314
          },
          {
            "word": "da ",
            "start": 147.314,
            "end": 147.564
          },
          {
            "word": "lam ",
            "start": 147.564,
            "end": 147.81
          },
          {
            "word": "it ",
            "start": 147.81,
            "end": 148.013
          },
          {
            "word": "ooi!",
            "start": 148.013,
            "end": 148.826
          }
        ]
      },
      {
        "verseStart": 148.826,
        "verseEnd": 149.73,
        "words": [
          {
            "word": "It ",
            "start": 148.826,
            "end": 148.989
          },
          {
            "word": "da ",
            "start": 148.989,
            "end": 149.154
          },
          {
            "word": "lam ",
            "start": 149.154,
            "end": 149.321
          },
          {
            "word": "ooi?",
            "start": 149.321,
            "end": 149.73
          }
        ]
      },
      {
        "verseStart": 149.73,
        "verseEnd": 156.055,
        "words": [
          {
            "word": "Bejoat ",
            "start": 149.73,
            "end": 150.137
          },
          {
            "word": "da ",
            "start": 150.137,
            "end": 150.3
          },
          {
            "word": "lam ",
            "start": 150.3,
            "end": 150.462
          },
          {
            "word": "it ",
            "start": 150.462,
            "end": 150.585
          },
          {
            "word": "ooi",
            "start": 150.585,
            "end": 156.055
          }
        ]
      },
      {
        "verseStart": 156.055,
        "verseEnd": 158.87,
        "words": [
          {
            "word": "Van ",
            "start": 156.055,
            "end": 156.217
          },
          {
            "word": "de ",
            "start": 156.217,
            "end": 156.38
          },
          {
            "word": "G ",
            "start": 156.38,
            "end": 156.706
          },
          {
            "word": "node ",
            "start": 156.706,
            "end": 157.074
          },
          {
            "word": "H, ",
            "start": 157.074,
            "end": 157.399
          },
          {
            "word": "van ",
            "start": 157.399,
            "end": 157.561
          },
          {
            "word": "de ",
            "start": 157.561,
            "end": 157.684
          },
          {
            "word": "H ",
            "start": 157.684,
            "end": 158.01
          },
          {
            "word": "node ",
            "start": 158.01,
            "end": 158.337
          },
          {
            "word": "G",
            "start": 158.337,
            "end": 158.87
          }
        ]
      },
      {
        "verseStart": 158.87,
        "verseEnd": 161.206,
        "words": [
          {
            "word": "West-",
            "start": 158.87,
            "end": 159.034
          },
          {
            "word": "Vloandern ",
            "start": 159.034,
            "end": 159.529
          },
          {
            "word": "vanavond ",
            "start": 159.529,
            "end": 159.978
          },
          {
            "word": "doe ",
            "start": 159.978,
            "end": 160.141
          },
          {
            "word": "mor ",
            "start": 160.141,
            "end": 160.303
          },
          {
            "word": "ollemaole ",
            "start": 160.303,
            "end": 160.793
          },
          {
            "word": "mee!",
            "start": 160.793,
            "end": 161.206
          }
        ]
      },
      {
        "verseStart": 161.206,
        "verseEnd": 164.019,
        "words": [
          {
            "word": "Van ",
            "start": 161.206,
            "end": 161.409
          },
          {
            "word": "de ",
            "start": 161.409,
            "end": 161.532
          },
          {
            "word": "G ",
            "start": 161.532,
            "end": 161.9
          },
          {
            "word": "node ",
            "start": 161.9,
            "end": 162.51
          },
          {
            "word": "H, ",
            "start": 162.51,
            "end": 162.835
          },
          {
            "word": "van ",
            "start": 162.835,
            "end": 162.958
          },
          {
            "word": "de ",
            "start": 162.958,
            "end": 163.244
          },
          {
            "word": "H ",
            "start": 163.244,
            "end": 163.406
          },
          {
            "word": "node ",
            "start": 163.406,
            "end": 163.571
          },
          {
            "word": "G",
            "start": 163.571,
            "end": 164.019
          }
        ]
      },
      {
        "verseStart": 164.019,
        "verseEnd": 167.855,
        "words": [
          {
            "word": "West-",
            "start": 164.019,
            "end": 164.507
          },
          {
            "word": "Vloandern ",
            "start": 164.507,
            "end": 164.671
          },
          {
            "word": "vanavond ",
            "start": 164.671,
            "end": 164.837
          },
          {
            "word": "doe ",
            "start": 164.837,
            "end": 165.285
          },
          {
            "word": "mor ",
            "start": 165.285,
            "end": 165.53
          },
          {
            "word": "ollemaole ",
            "start": 165.53,
            "end": 165.855
          },
          {
            "word": "mee!",
            "start": 165.855,
            "end": 0
          }
        ]
      }
    ]
  },
  "INORI.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 1.921,
        "verseEnd": 3.403,
        "words": [
          {
            "word": "御",
            "start": 1.921,
            "end": 2.085,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 2.085,
            "end": 2.21,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 2.21,
            "end": 2.46
          },
          {
            "word": "合",
            "start": 2.46,
            "end": 2.586,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 2.586,
            "end": 2.74
          },
          {
            "word": "せ",
            "start": 2.74,
            "end": 2.979
          },
          {
            "word": "て",
            "start": 2.979,
            "end": 3.403
          }
        ]
      },
      {
        "verseStart": 3.403,
        "verseEnd": 4.999,
        "words": [
          {
            "word": "御",
            "start": 3.403,
            "end": 3.568,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 3.568,
            "end": 3.733,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 3.733,
            "end": 4.081
          },
          {
            "word": "合",
            "start": 4.081,
            "end": 4.209,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 4.209,
            "end": 4.374
          },
          {
            "word": "せ",
            "start": 4.374,
            "end": 4.583
          },
          {
            "word": "て",
            "start": 4.583,
            "end": 4.999
          }
        ]
      },
      {
        "verseStart": 4.999,
        "verseEnd": 6.601,
        "words": [
          {
            "word": "御",
            "start": 4.999,
            "end": 5.208,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 5.208,
            "end": 5.376,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 5.376,
            "end": 5.667
          },
          {
            "word": "合",
            "start": 5.667,
            "end": 5.833,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 5.833,
            "end": 6.003
          },
          {
            "word": "せ",
            "start": 6.003,
            "end": 6.226
          },
          {
            "word": "て",
            "start": 6.226,
            "end": 6.601
          }
        ]
      },
      {
        "verseStart": 6.601,
        "verseEnd": 8.211,
        "words": [
          {
            "word": "さ",
            "start": 6.601,
            "end": 6.809
          },
          {
            "word": "あ",
            "start": 6.809,
            "end": 7.018
          },
          {
            "word": "ご",
            "start": 7.018,
            "end": 7.307
          },
          {
            "word": "一",
            "start": 7.307,
            "end": 7.594,
            "furigana": "いっ"
          },
          {
            "word": "緒",
            "start": 7.594,
            "end": 7.799,
            "furigana": "しょ"
          },
          {
            "word": "に",
            "start": 7.799,
            "end": 8.211
          }
        ]
      },
      {
        "verseStart": 8.211,
        "verseEnd": 9.875,
        "words": [
          {
            "word": "御",
            "start": 8.211,
            "end": 8.422,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 8.422,
            "end": 8.631,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 8.631,
            "end": 8.961
          },
          {
            "word": "合",
            "start": 8.961,
            "end": 9.085,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 9.085,
            "end": 9.256
          },
          {
            "word": "せ",
            "start": 9.256,
            "end": 9.46
          },
          {
            "word": "て",
            "start": 9.46,
            "end": 9.875
          }
        ]
      },
      {
        "verseStart": 9.875,
        "verseEnd": 11.539,
        "words": [
          {
            "word": "御",
            "start": 9.875,
            "end": 10.087,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 10.087,
            "end": 10.293,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 10.293,
            "end": 10.583
          },
          {
            "word": "合",
            "start": 10.583,
            "end": 10.709,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 10.709,
            "end": 10.917
          },
          {
            "word": "せ",
            "start": 10.917,
            "end": 11.091
          },
          {
            "word": "て",
            "start": 11.091,
            "end": 11.539
          }
        ]
      },
      {
        "verseStart": 11.539,
        "verseEnd": 13.587,
        "words": [
          {
            "word": "ご",
            "start": 11.539,
            "end": 11.95
          },
          {
            "word": "唱",
            "start": 11.95,
            "end": 12.521,
            "furigana": "しょう"
          },
          {
            "word": "和",
            "start": 12.521,
            "end": 12.766,
            "furigana": "わ"
          },
          {
            "word": "く",
            "start": 12.766,
            "end": 12.97
          },
          {
            "word": "だ",
            "start": 12.97,
            "end": 13.174
          },
          {
            "word": "さ",
            "start": 13.174,
            "end": 13.338
          },
          {
            "word": "い",
            "start": 13.338,
            "end": 13.587
          }
        ]
      },
      {
        "verseStart": 13.587,
        "verseEnd": 15.15,
        "words": [
          {
            "word": "お",
            "start": 13.587,
            "end": 13.751
          },
          {
            "word": "可",
            "start": 13.751,
            "end": 13.914,
            "furigana": "か"
          },
          {
            "word": "哀",
            "start": 13.914,
            "end": 14.372,
            "furigana": "わい"
          },
          {
            "word": "想",
            "start": 14.372,
            "end": 14.739,
            "furigana": "そう"
          },
          {
            "word": "に",
            "start": 14.739,
            "end": 15.15
          }
        ]
      },
      {
        "verseStart": 15.15,
        "verseEnd": 21.668,
        "words": [
          {
            "word": "意",
            "start": 15.15,
            "end": 15.21,
            "furigana": "い"
          },
          {
            "word": "味",
            "start": 15.21,
            "end": 15.543,
            "furigana": "み"
          },
          {
            "word": "な",
            "start": 15.543,
            "end": 15.626
          },
          {
            "word": "し",
            "start": 15.626,
            "end": 15.708
          },
          {
            "word": "価",
            "start": 15.708,
            "end": 15.834,
            "furigana": "か"
          },
          {
            "word": "値",
            "start": 15.834,
            "end": 15.914,
            "furigana": "ち"
          },
          {
            "word": "な",
            "start": 15.914,
            "end": 16.036
          },
          {
            "word": "し",
            "start": 16.036,
            "end": 16.159
          },
          {
            "word": "魅",
            "start": 16.159,
            "end": 16.363,
            "furigana": "み"
          },
          {
            "word": "力",
            "start": 16.363,
            "end": 16.445,
            "furigana": "りょく"
          },
          {
            "word": "な",
            "start": 16.445,
            "end": 16.526
          },
          {
            "word": "し",
            "start": 16.526,
            "end": 16.607
          },
          {
            "word": "生",
            "start": 16.607,
            "end": 16.689,
            "furigana": "う"
          },
          {
            "word": "ま",
            "start": 16.689,
            "end": 16.774
          },
          {
            "word": "れ",
            "start": 16.774,
            "end": 16.897
          },
          {
            "word": "た",
            "start": 16.897,
            "end": 16.983
          },
          {
            "word": "時",
            "start": 16.983,
            "end": 17.023,
            "furigana": "じ"
          },
          {
            "word": "点",
            "start": 17.023,
            "end": 17.106,
            "furigana": "てん"
          },
          {
            "word": "で",
            "start": 17.106,
            "end": 17.188
          },
          {
            "word": "終",
            "start": 17.188,
            "end": 17.314,
            "furigana": "お"
          },
          {
            "word": "わ",
            "start": 17.314,
            "end": 17.355
          },
          {
            "word": "っ",
            "start": 17.355,
            "end": 17.436
          },
          {
            "word": "て",
            "start": 17.436,
            "end": 17.564
          },
          {
            "word": "る",
            "start": 17.564,
            "end": 21.668
          }
        ]
      },
      {
        "verseStart": 21.668,
        "verseEnd": 23.399,
        "words": [
          {
            "word": "そ",
            "start": 21.668,
            "end": 21.796
          },
          {
            "word": "ろ",
            "start": 21.796,
            "end": 21.877
          },
          {
            "word": "そ",
            "start": 21.877,
            "end": 21.962
          },
          {
            "word": "ろ",
            "start": 21.962,
            "end": 22.084
          },
          {
            "word": "人",
            "start": 22.084,
            "end": 22.332,
            "furigana": "にん"
          },
          {
            "word": "間",
            "start": 22.332,
            "end": 22.536,
            "furigana": "げん"
          },
          {
            "word": "や",
            "start": 22.536,
            "end": 22.658
          },
          {
            "word": "め",
            "start": 22.658,
            "end": 22.74
          },
          {
            "word": "ま",
            "start": 22.74,
            "end": 22.866
          },
          {
            "word": "し",
            "start": 22.866,
            "end": 22.989
          },
          {
            "word": "ょ",
            "start": 22.989,
            "end": 23.154
          },
          {
            "word": "か",
            "start": 23.154,
            "end": 23.399
          }
        ]
      },
      {
        "verseStart": 23.399,
        "verseEnd": 27.698,
        "words": [
          {
            "word": "そ",
            "start": 23.399,
            "end": 23.523
          },
          {
            "word": "ろ",
            "start": 23.523,
            "end": 23.646
          },
          {
            "word": "そ",
            "start": 23.646,
            "end": 23.729
          },
          {
            "word": "ろ",
            "start": 23.729,
            "end": 23.811
          },
          {
            "word": "人",
            "start": 23.811,
            "end": 24.017,
            "furigana": "にん"
          },
          {
            "word": "間",
            "start": 24.017,
            "end": 24.221,
            "furigana": "げん"
          },
          {
            "word": "や",
            "start": 24.221,
            "end": 24.301
          },
          {
            "word": "め",
            "start": 24.301,
            "end": 24.424
          },
          {
            "word": "ま",
            "start": 24.424,
            "end": 24.507
          },
          {
            "word": "し",
            "start": 24.507,
            "end": 24.588
          },
          {
            "word": "ょ",
            "start": 24.588,
            "end": 24.671
          },
          {
            "word": "か",
            "start": 24.671,
            "end": 27.698
          }
        ]
      },
      {
        "verseStart": 27.698,
        "verseEnd": 29.634,
        "words": [
          {
            "word": "通",
            "start": 27.698,
            "end": 27.825,
            "furigana": "とお"
          },
          {
            "word": "り",
            "start": 27.825,
            "end": 28.408
          },
          {
            "word": "ゃ",
            "start": 28.408,
            "end": 28.531
          },
          {
            "word": "ん",
            "start": 28.531,
            "end": 28.694
          },
          {
            "word": "せ",
            "start": 28.694,
            "end": 28.898
          },
          {
            "word": "通",
            "start": 28.898,
            "end": 29.02,
            "furigana": "とお"
          },
          {
            "word": "り",
            "start": 29.02,
            "end": 29.101
          },
          {
            "word": "ゃ",
            "start": 29.101,
            "end": 29.306
          },
          {
            "word": "ん",
            "start": 29.306,
            "end": 29.511
          },
          {
            "word": "せ",
            "start": 29.511,
            "end": 29.634
          }
        ]
      },
      {
        "verseStart": 29.634,
        "verseEnd": 31.604,
        "words": [
          {
            "word": "こ",
            "start": 29.634,
            "end": 29.717
          },
          {
            "word": "の",
            "start": 29.717,
            "end": 29.8
          },
          {
            "word": "世",
            "start": 29.8,
            "end": 30.05,
            "furigana": "よ"
          },
          {
            "word": "の",
            "start": 30.05,
            "end": 30.172
          },
          {
            "word": "終",
            "start": 30.172,
            "end": 30.253,
            "furigana": "お"
          },
          {
            "word": "わ",
            "start": 30.253,
            "end": 30.375
          },
          {
            "word": "り",
            "start": 30.375,
            "end": 30.501
          },
          {
            "word": "絶",
            "start": 30.501,
            "end": 30.583,
            "furigana": "ぜつ"
          },
          {
            "word": "望",
            "start": 30.583,
            "end": 30.705,
            "furigana": "ぼう"
          },
          {
            "word": "ル",
            "start": 30.705,
            "end": 30.951
          },
          {
            "word": "ー",
            "start": 30.951,
            "end": 31.156
          },
          {
            "word": "ト",
            "start": 31.156,
            "end": 31.604
          }
        ]
      },
      {
        "verseStart": 31.604,
        "verseEnd": 33,
        "words": [
          {
            "word": "通",
            "start": 31.604,
            "end": 31.77,
            "furigana": "とお"
          },
          {
            "word": "り",
            "start": 31.77,
            "end": 31.932
          },
          {
            "word": "ゃ",
            "start": 31.932,
            "end": 32.096
          },
          {
            "word": "ん",
            "start": 32.096,
            "end": 32.219
          },
          {
            "word": "せ",
            "start": 32.219,
            "end": 32.303
          },
          {
            "word": "通",
            "start": 32.303,
            "end": 32.426,
            "furigana": "とお"
          },
          {
            "word": "り",
            "start": 32.426,
            "end": 32.551
          },
          {
            "word": "ゃ",
            "start": 32.551,
            "end": 32.632
          },
          {
            "word": "ん",
            "start": 32.632,
            "end": 32.755
          },
          {
            "word": "せ",
            "start": 32.755,
            "end": 33
          }
        ]
      },
      {
        "verseStart": 33,
        "verseEnd": 34.793,
        "words": [
          {
            "word": "お",
            "start": 33,
            "end": 33.126
          },
          {
            "word": "先",
            "start": 33.126,
            "end": 33.292,
            "furigana": "さき"
          },
          {
            "word": "真",
            "start": 33.292,
            "end": 33.377,
            "furigana": "ま"
          },
          {
            "word": "っ",
            "start": 33.377,
            "end": 33.5
          },
          {
            "word": "暗",
            "start": 33.5,
            "end": 33.586,
            "furigana": "くら"
          },
          {
            "word": "死",
            "start": 33.586,
            "end": 33.71,
            "furigana": "し"
          },
          {
            "word": "に",
            "start": 33.71,
            "end": 33.835
          },
          {
            "word": "ゲ",
            "start": 33.835,
            "end": 33.968
          },
          {
            "word": "ー",
            "start": 33.968,
            "end": 34.133
          },
          {
            "word": "ル",
            "start": 34.133,
            "end": 34.336
          },
          {
            "word": "ー",
            "start": 34.336,
            "end": 34.5
          },
          {
            "word": "ト",
            "start": 34.5,
            "end": 34.793
          }
        ]
      },
      {
        "verseStart": 34.793,
        "verseEnd": 39.667,
        "words": [
          {
            "word": "羯",
            "start": 34.793,
            "end": 36.003,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 36.003,
            "end": 36.417,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 36.417,
            "end": 37.899,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 37.899,
            "end": 38.185,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 38.185,
            "end": 39.214,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 39.214,
            "end": 39.667,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 39.667,
        "verseEnd": 41.21,
        "words": [
          {
            "word": "諦",
            "start": 39.667,
            "end": 40.045,
            "furigana": "てい"
          },
          {
            "word": "諦",
            "start": 40.045,
            "end": 40.46,
            "furigana": "てい"
          },
          {
            "word": "諦",
            "start": 40.46,
            "end": 40.834,
            "furigana": "てい"
          },
          {
            "word": "諦",
            "start": 40.834,
            "end": 41.21,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 41.21,
        "verseEnd": 44.511,
        "words": [
          {
            "word": "羯",
            "start": 41.21,
            "end": 41.625,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 41.625,
            "end": 41.989,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 41.989,
            "end": 42.401,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 42.401,
            "end": 42.891,
            "furigana": "てい"
          },
          {
            "word": "波",
            "start": 42.891,
            "end": 43.055,
            "furigana": "は"
          },
          {
            "word": "羅",
            "start": 43.055,
            "end": 43.266,
            "furigana": "ら"
          },
          {
            "word": "羯",
            "start": 43.266,
            "end": 43.643,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 43.643,
            "end": 44.511,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 44.511,
        "verseEnd": 47.788,
        "words": [
          {
            "word": "羯",
            "start": 44.511,
            "end": 44.842,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 44.842,
            "end": 45.253,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 45.253,
            "end": 45.68,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 45.68,
            "end": 46.172,
            "furigana": "てい"
          },
          {
            "word": "波",
            "start": 46.172,
            "end": 46.337,
            "furigana": "は"
          },
          {
            "word": "羅",
            "start": 46.337,
            "end": 46.544,
            "furigana": "ら"
          },
          {
            "word": "羯",
            "start": 46.544,
            "end": 46.959,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 46.959,
            "end": 47.788,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 47.788,
        "verseEnd": 51.043,
        "words": [
          {
            "word": "羯",
            "start": 47.788,
            "end": 48.16,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 48.16,
            "end": 48.574,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 48.574,
            "end": 48.942,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 48.942,
            "end": 49.435,
            "furigana": "てい"
          },
          {
            "word": "波",
            "start": 49.435,
            "end": 49.599,
            "furigana": "は"
          },
          {
            "word": "羅",
            "start": 49.599,
            "end": 49.768,
            "furigana": "ら"
          },
          {
            "word": "羯",
            "start": 49.768,
            "end": 50.179,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 50.179,
            "end": 51.043,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 51.043,
        "verseEnd": 55.582,
        "words": [
          {
            "word": "羯",
            "start": 51.043,
            "end": 51.375,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 51.375,
            "end": 51.792,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 51.792,
            "end": 52.163,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 52.163,
            "end": 52.625,
            "furigana": "てい"
          },
          {
            "word": "波",
            "start": 52.625,
            "end": 52.836,
            "furigana": "は"
          },
          {
            "word": "羅",
            "start": 52.836,
            "end": 53.046,
            "furigana": "ら"
          },
          {
            "word": "羯",
            "start": 53.046,
            "end": 53.377,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 53.377,
            "end": 55.582,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 55.582,
        "verseEnd": 60.848,
        "words": [
          {
            "word": "才",
            "start": 55.582,
            "end": 55.832,
            "furigana": "さい"
          },
          {
            "word": "能",
            "start": 55.832,
            "end": 56.083,
            "furigana": "のう"
          },
          {
            "word": "レ",
            "start": 56.083,
            "end": 56.251
          },
          {
            "word": "ベ",
            "start": 56.251,
            "end": 56.377
          },
          {
            "word": "ル",
            "start": 56.377,
            "end": 56.459
          },
          {
            "word": "の",
            "start": 56.459,
            "end": 56.584
          },
          {
            "word": "社",
            "start": 56.584,
            "end": 56.916,
            "furigana": "しゃ"
          },
          {
            "word": "会",
            "start": 56.916,
            "end": 57.209,
            "furigana": "かい"
          },
          {
            "word": "不",
            "start": 57.209,
            "end": 57.375,
            "furigana": "ふ"
          },
          {
            "word": "適",
            "start": 57.375,
            "end": 57.54,
            "furigana": "てき"
          },
          {
            "word": "合",
            "start": 57.54,
            "end": 57.837,
            "furigana": "ごう"
          },
          {
            "word": "者",
            "start": 57.837,
            "end": 60.848,
            "furigana": "しゃ"
          }
        ]
      },
      {
        "verseStart": 60.848,
        "verseEnd": 62.548,
        "words": [
          {
            "word": "そ",
            "start": 60.848,
            "end": 60.97
          },
          {
            "word": "ろ",
            "start": 60.97,
            "end": 61.053
          },
          {
            "word": "そ",
            "start": 61.053,
            "end": 61.178
          },
          {
            "word": "ろ",
            "start": 61.178,
            "end": 61.261
          },
          {
            "word": "人",
            "start": 61.261,
            "end": 61.55,
            "furigana": "にん"
          },
          {
            "word": "間",
            "start": 61.55,
            "end": 61.759,
            "furigana": "げん"
          },
          {
            "word": "や",
            "start": 61.759,
            "end": 61.843
          },
          {
            "word": "め",
            "start": 61.843,
            "end": 61.928
          },
          {
            "word": "ま",
            "start": 61.928,
            "end": 62.011
          },
          {
            "word": "し",
            "start": 62.011,
            "end": 62.133
          },
          {
            "word": "ょ",
            "start": 62.133,
            "end": 62.219
          },
          {
            "word": "か",
            "start": 62.219,
            "end": 62.548
          }
        ]
      },
      {
        "verseStart": 62.548,
        "verseEnd": 67.46,
        "words": [
          {
            "word": "そ",
            "start": 62.548,
            "end": 62.629
          },
          {
            "word": "ろ",
            "start": 62.629,
            "end": 62.751
          },
          {
            "word": "そ",
            "start": 62.751,
            "end": 62.835
          },
          {
            "word": "ろ",
            "start": 62.835,
            "end": 62.96
          },
          {
            "word": "人",
            "start": 62.96,
            "end": 63.127,
            "furigana": "にん"
          },
          {
            "word": "間",
            "start": 63.127,
            "end": 63.334,
            "furigana": "げん"
          },
          {
            "word": "や",
            "start": 63.334,
            "end": 63.417
          },
          {
            "word": "め",
            "start": 63.417,
            "end": 63.542
          },
          {
            "word": "ま",
            "start": 63.542,
            "end": 63.626
          },
          {
            "word": "し",
            "start": 63.626,
            "end": 63.709
          },
          {
            "word": "ょ",
            "start": 63.709,
            "end": 63.793
          },
          {
            "word": "か",
            "start": 63.793,
            "end": 67.46
          }
        ]
      },
      {
        "verseStart": 67.46,
        "verseEnd": 69.058,
        "words": [
          {
            "word": "そ",
            "start": 67.46,
            "end": 67.542
          },
          {
            "word": "ろ",
            "start": 67.542,
            "end": 67.625
          },
          {
            "word": "そ",
            "start": 67.625,
            "end": 67.75
          },
          {
            "word": "ろ",
            "start": 67.75,
            "end": 67.837
          },
          {
            "word": "人",
            "start": 67.837,
            "end": 68.043,
            "furigana": "にん"
          },
          {
            "word": "間",
            "start": 68.043,
            "end": 68.268,
            "furigana": "げん"
          },
          {
            "word": "や",
            "start": 68.268,
            "end": 68.392
          },
          {
            "word": "め",
            "start": 68.392,
            "end": 68.477
          },
          {
            "word": "ま",
            "start": 68.477,
            "end": 68.561
          },
          {
            "word": "し",
            "start": 68.561,
            "end": 68.685
          },
          {
            "word": "ょ",
            "start": 68.685,
            "end": 68.768
          },
          {
            "word": "か",
            "start": 68.768,
            "end": 69.058
          }
        ]
      },
      {
        "verseStart": 69.058,
        "verseEnd": 73.549,
        "words": [
          {
            "word": "そ",
            "start": 69.058,
            "end": 69.186
          },
          {
            "word": "ろ",
            "start": 69.186,
            "end": 69.27
          },
          {
            "word": "そ",
            "start": 69.27,
            "end": 69.393
          },
          {
            "word": "ろ",
            "start": 69.393,
            "end": 69.476
          },
          {
            "word": "人",
            "start": 69.476,
            "end": 69.684,
            "furigana": "にん"
          },
          {
            "word": "間",
            "start": 69.684,
            "end": 69.853,
            "furigana": "げん"
          },
          {
            "word": "や",
            "start": 69.853,
            "end": 69.976
          },
          {
            "word": "め",
            "start": 69.976,
            "end": 70.102
          },
          {
            "word": "ま",
            "start": 70.102,
            "end": 70.227
          },
          {
            "word": "し",
            "start": 70.227,
            "end": 70.31
          },
          {
            "word": "ょ",
            "start": 70.31,
            "end": 70.392
          },
          {
            "word": "か",
            "start": 70.392,
            "end": 73.549
          }
        ]
      },
      {
        "verseStart": 73.549,
        "verseEnd": 75.21,
        "words": [
          {
            "word": "御",
            "start": 73.549,
            "end": 73.757,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 73.757,
            "end": 73.964,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 73.964,
            "end": 74.253
          },
          {
            "word": "合",
            "start": 74.253,
            "end": 74.378,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 74.378,
            "end": 74.547
          },
          {
            "word": "せ",
            "start": 74.547,
            "end": 74.796
          },
          {
            "word": "て",
            "start": 74.796,
            "end": 75.21
          }
        ]
      },
      {
        "verseStart": 75.21,
        "verseEnd": 76.874,
        "words": [
          {
            "word": "御",
            "start": 75.21,
            "end": 75.418,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 75.418,
            "end": 75.589,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 75.589,
            "end": 75.919
          },
          {
            "word": "合",
            "start": 75.919,
            "end": 76.045,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 76.045,
            "end": 76.21
          },
          {
            "word": "せ",
            "start": 76.21,
            "end": 76.417
          },
          {
            "word": "て",
            "start": 76.417,
            "end": 76.874
          }
        ]
      },
      {
        "verseStart": 76.874,
        "verseEnd": 78.445,
        "words": [
          {
            "word": "御",
            "start": 76.874,
            "end": 77.083,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 77.083,
            "end": 77.251,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 77.251,
            "end": 77.542
          },
          {
            "word": "合",
            "start": 77.542,
            "end": 77.709,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 77.709,
            "end": 77.874
          },
          {
            "word": "せ",
            "start": 77.874,
            "end": 78.043
          },
          {
            "word": "て",
            "start": 78.043,
            "end": 78.445
          }
        ]
      },
      {
        "verseStart": 78.445,
        "verseEnd": 80.146,
        "words": [
          {
            "word": "さ",
            "start": 78.445,
            "end": 78.65
          },
          {
            "word": "あ",
            "start": 78.65,
            "end": 78.858
          },
          {
            "word": "ご",
            "start": 78.858,
            "end": 79.147
          },
          {
            "word": "一",
            "start": 79.147,
            "end": 79.48,
            "furigana": "いっ"
          },
          {
            "word": "緒",
            "start": 79.48,
            "end": 79.694,
            "furigana": "しょ"
          },
          {
            "word": "に",
            "start": 79.694,
            "end": 80.146
          }
        ]
      },
      {
        "verseStart": 80.146,
        "verseEnd": 81.71,
        "words": [
          {
            "word": "御",
            "start": 80.146,
            "end": 80.355,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 80.355,
            "end": 80.518,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 80.518,
            "end": 80.847
          },
          {
            "word": "合",
            "start": 80.847,
            "end": 80.929,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 80.929,
            "end": 81.137
          },
          {
            "word": "せ",
            "start": 81.137,
            "end": 81.342
          },
          {
            "word": "て",
            "start": 81.342,
            "end": 81.71
          }
        ]
      },
      {
        "verseStart": 81.71,
        "verseEnd": 83.339,
        "words": [
          {
            "word": "御",
            "start": 81.71,
            "end": 81.921,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 81.921,
            "end": 82.13,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 82.13,
            "end": 82.42
          },
          {
            "word": "合",
            "start": 82.42,
            "end": 82.545,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 82.545,
            "end": 82.72
          },
          {
            "word": "せ",
            "start": 82.72,
            "end": 82.928
          },
          {
            "word": "て",
            "start": 82.928,
            "end": 83.339
          }
        ]
      },
      {
        "verseStart": 83.339,
        "verseEnd": 85.001,
        "words": [
          {
            "word": "御",
            "start": 83.339,
            "end": 83.587,
            "furigana": "お"
          },
          {
            "word": "手",
            "start": 83.587,
            "end": 83.792,
            "furigana": "て"
          },
          {
            "word": "を",
            "start": 83.792,
            "end": 84.086
          },
          {
            "word": "合",
            "start": 84.086,
            "end": 84.21,
            "furigana": "あ"
          },
          {
            "word": "わ",
            "start": 84.21,
            "end": 84.418
          },
          {
            "word": "せ",
            "start": 84.418,
            "end": 84.585
          },
          {
            "word": "て",
            "start": 84.585,
            "end": 85.001
          }
        ]
      },
      {
        "verseStart": 85.001,
        "verseEnd": 87.104,
        "words": [
          {
            "word": "ご",
            "start": 85.001,
            "end": 85.417
          },
          {
            "word": "唱",
            "start": 85.417,
            "end": 86.005,
            "furigana": "しょう"
          },
          {
            "word": "和",
            "start": 86.005,
            "end": 86.251,
            "furigana": "わ"
          },
          {
            "word": "く",
            "start": 86.251,
            "end": 86.414
          },
          {
            "word": "だ",
            "start": 86.414,
            "end": 86.627
          },
          {
            "word": "さ",
            "start": 86.627,
            "end": 86.839
          },
          {
            "word": "い",
            "start": 86.839,
            "end": 87.104
          }
        ]
      },
      {
        "verseStart": 87.104,
        "verseEnd": 88.708,
        "words": [
          {
            "word": "お",
            "start": 87.104,
            "end": 87.269
          },
          {
            "word": "可",
            "start": 87.269,
            "end": 87.476,
            "furigana": "か"
          },
          {
            "word": "哀",
            "start": 87.476,
            "end": 87.845,
            "furigana": "わい"
          },
          {
            "word": "想",
            "start": 87.845,
            "end": 88.254,
            "furigana": "そう"
          },
          {
            "word": "に",
            "start": 88.254,
            "end": 88.708
          }
        ]
      },
      {
        "verseStart": 88.708,
        "verseEnd": 90.292,
        "words": [
          {
            "word": "お",
            "start": 88.708,
            "end": 88.877
          },
          {
            "word": "可",
            "start": 88.877,
            "end": 89.086,
            "furigana": "か"
          },
          {
            "word": "哀",
            "start": 89.086,
            "end": 89.457,
            "furigana": "わい"
          },
          {
            "word": "想",
            "start": 89.457,
            "end": 89.917,
            "furigana": "そう"
          },
          {
            "word": "に",
            "start": 89.917,
            "end": 90.292
          }
        ]
      },
      {
        "verseStart": 90.292,
        "verseEnd": 93.551,
        "words": [
          {
            "word": "お",
            "start": 90.292,
            "end": 90.501
          },
          {
            "word": "可",
            "start": 90.501,
            "end": 90.71,
            "furigana": "か"
          },
          {
            "word": "哀",
            "start": 90.71,
            "end": 91.083,
            "furigana": "わい"
          },
          {
            "word": "想",
            "start": 91.083,
            "end": 91.543,
            "furigana": "そう"
          },
          {
            "word": "に",
            "start": 91.543,
            "end": 93.551
          }
        ]
      },
      {
        "verseStart": 93.551,
        "verseEnd": 95.21,
        "words": [
          {
            "word": "お",
            "start": 93.551,
            "end": 93.762
          },
          {
            "word": "可",
            "start": 93.762,
            "end": 93.969,
            "furigana": "か"
          },
          {
            "word": "哀",
            "start": 93.969,
            "end": 94.378,
            "furigana": "わい"
          },
          {
            "word": "想",
            "start": 94.378,
            "end": 94.755,
            "furigana": "そう"
          },
          {
            "word": "に",
            "start": 94.755,
            "end": 95.21
          }
        ]
      },
      {
        "verseStart": 95.21,
        "verseEnd": 96.834,
        "words": [
          {
            "word": "お",
            "start": 95.21,
            "end": 95.418
          },
          {
            "word": "可",
            "start": 95.418,
            "end": 95.584,
            "furigana": "か"
          },
          {
            "word": "哀",
            "start": 95.584,
            "end": 96.001,
            "furigana": "わい"
          },
          {
            "word": "想",
            "start": 96.001,
            "end": 96.421,
            "furigana": "そう"
          },
          {
            "word": "に",
            "start": 96.421,
            "end": 96.834
          }
        ]
      },
      {
        "verseStart": 96.834,
        "verseEnd": 99.944,
        "words": [
          {
            "word": "お",
            "start": 96.834,
            "end": 97
          },
          {
            "word": "可",
            "start": 97,
            "end": 97.212,
            "furigana": "か"
          },
          {
            "word": "哀",
            "start": 97.212,
            "end": 97.589,
            "furigana": "わい"
          },
          {
            "word": "想",
            "start": 97.589,
            "end": 97.959,
            "furigana": "そう"
          },
          {
            "word": "に",
            "start": 97.959,
            "end": 99.944
          }
        ]
      },
      {
        "verseStart": 99.944,
        "verseEnd": 103.328,
        "words": [
          {
            "word": "羯",
            "start": 99.944,
            "end": 100.405,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 100.405,
            "end": 100.818,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 100.818,
            "end": 101.227,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 101.227,
            "end": 101.686,
            "furigana": "てい"
          },
          {
            "word": "波",
            "start": 101.686,
            "end": 101.892,
            "furigana": "は"
          },
          {
            "word": "羅",
            "start": 101.892,
            "end": 102.058,
            "furigana": "ら"
          },
          {
            "word": "羯",
            "start": 102.058,
            "end": 102.467,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 102.467,
            "end": 103.328,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 103.328,
        "verseEnd": 106.587,
        "words": [
          {
            "word": "羯",
            "start": 103.328,
            "end": 103.659,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 103.659,
            "end": 104.073,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 104.073,
            "end": 104.442,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 104.442,
            "end": 104.933,
            "furigana": "てい"
          },
          {
            "word": "波",
            "start": 104.933,
            "end": 105.141,
            "furigana": "は"
          },
          {
            "word": "羅",
            "start": 105.141,
            "end": 105.35,
            "furigana": "ら"
          },
          {
            "word": "羯",
            "start": 105.35,
            "end": 105.684,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 105.684,
            "end": 106.587,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 106.587,
        "verseEnd": 109.845,
        "words": [
          {
            "word": "羯",
            "start": 106.587,
            "end": 106.926,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 106.926,
            "end": 107.347,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 107.347,
            "end": 107.716,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 107.716,
            "end": 108.211,
            "furigana": "てい"
          },
          {
            "word": "波",
            "start": 108.211,
            "end": 108.433,
            "furigana": "は"
          },
          {
            "word": "羅",
            "start": 108.433,
            "end": 108.646,
            "furigana": "ら"
          },
          {
            "word": "羯",
            "start": 108.646,
            "end": 109.014,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 109.014,
            "end": 109.845,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 109.845,
        "verseEnd": 118.172,
        "words": [
          {
            "word": "羯",
            "start": 109.845,
            "end": 110.214,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 110.214,
            "end": 110.628,
            "furigana": "てい"
          },
          {
            "word": "羯",
            "start": 110.628,
            "end": 110.998,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 110.998,
            "end": 111.502,
            "furigana": "てい"
          },
          {
            "word": "波",
            "start": 111.502,
            "end": 111.667,
            "furigana": "は"
          },
          {
            "word": "羅",
            "start": 111.667,
            "end": 111.876,
            "furigana": "ら"
          },
          {
            "word": "羯",
            "start": 111.876,
            "end": 112.25,
            "furigana": "ぎゃ"
          },
          {
            "word": "諦",
            "start": 112.25,
            "end": 118.172,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 118.172,
        "verseEnd": 126.196,
        "words": [
          {
            "word": "存",
            "start": 118.172,
            "end": 118.296,
            "furigana": "そん"
          },
          {
            "word": "在",
            "start": 118.296,
            "end": 118.422,
            "furigana": "ざい"
          },
          {
            "word": "自",
            "start": 118.422,
            "end": 118.545,
            "furigana": "じ"
          },
          {
            "word": "体",
            "start": 118.545,
            "end": 118.627,
            "furigana": "たい"
          },
          {
            "word": "が",
            "start": 118.627,
            "end": 118.751
          },
          {
            "word": "罪",
            "start": 118.751,
            "end": 118.959,
            "furigana": "つみ"
          },
          {
            "word": "深",
            "start": 118.959,
            "end": 119.084,
            "furigana": "ぶか"
          },
          {
            "word": "い",
            "start": 119.084,
            "end": 126.196
          }
        ]
      },
      {
        "verseStart": 126.196,
        "verseEnd": 129.007,
        "words": [
          {
            "word": "底",
            "start": 126.196,
            "end": 126.563,
            "furigana": "てい"
          },
          {
            "word": "辺",
            "start": 126.563,
            "end": 126.976,
            "furigana": "へん"
          },
          {
            "word": "廃",
            "start": 126.976,
            "end": 127.393,
            "furigana": "はい"
          },
          {
            "word": "人",
            "start": 127.393,
            "end": 127.804,
            "furigana": "じん"
          },
          {
            "word": "人",
            "start": 127.804,
            "end": 128.256,
            "furigana": "ひと"
          },
          {
            "word": "で",
            "start": 128.256,
            "end": 128.421
          },
          {
            "word": "な",
            "start": 128.421,
            "end": 128.631
          },
          {
            "word": "し",
            "start": 128.631,
            "end": 129.007
          }
        ]
      },
      {
        "verseStart": 129.007,
        "verseEnd": 132.694,
        "words": [
          {
            "word": "闇",
            "start": 129.007,
            "end": 129.213,
            "furigana": "やみ"
          },
          {
            "word": "堕",
            "start": 129.213,
            "end": 129.586,
            "furigana": "お"
          },
          {
            "word": "ち",
            "start": 129.586,
            "end": 129.792
          },
          {
            "word": "無",
            "start": 129.792,
            "end": 129.996,
            "furigana": "む"
          },
          {
            "word": "気",
            "start": 129.996,
            "end": 130.2,
            "furigana": "き"
          },
          {
            "word": "力",
            "start": 130.2,
            "end": 130.404,
            "furigana": "りょく"
          },
          {
            "word": "デ",
            "start": 130.404,
            "end": 130.648
          },
          {
            "word": "バ",
            "start": 130.648,
            "end": 130.852
          },
          {
            "word": "フ",
            "start": 130.852,
            "end": 131.298
          },
          {
            "word": "持",
            "start": 131.298,
            "end": 131.749,
            "furigana": "も"
          },
          {
            "word": "ち",
            "start": 131.749,
            "end": 132.694
          }
        ]
      },
      {
        "verseStart": 132.694,
        "verseEnd": 135.837,
        "words": [
          {
            "word": "人",
            "start": 132.694,
            "end": 133.102,
            "furigana": "にん"
          },
          {
            "word": "間",
            "start": 133.102,
            "end": 133.833,
            "furigana": "げん"
          },
          {
            "word": "失",
            "start": 133.833,
            "end": 134.04,
            "furigana": "しっ"
          },
          {
            "word": "格",
            "start": 134.04,
            "end": 134.204,
            "furigana": "かく"
          },
          {
            "word": "這",
            "start": 134.204,
            "end": 134.367,
            "furigana": "ほ"
          },
          {
            "word": "う",
            "start": 134.367,
            "end": 134.612
          },
          {
            "word": "這",
            "start": 134.612,
            "end": 134.775,
            "furigana": "ほ"
          },
          {
            "word": "う",
            "start": 134.775,
            "end": 135.02
          },
          {
            "word": "の",
            "start": 135.02,
            "end": 135.224
          },
          {
            "word": "体",
            "start": 135.224,
            "end": 135.837,
            "furigana": "てい"
          }
        ]
      },
      {
        "verseStart": 135.837,
        "verseEnd": 140.617,
        "words": [
          {
            "word": "最",
            "start": 135.837,
            "end": 136.287,
            "furigana": "さい"
          },
          {
            "word": "終",
            "start": 136.287,
            "end": 136.737,
            "furigana": "しゅう"
          },
          {
            "word": "宣",
            "start": 136.737,
            "end": 137.185,
            "furigana": "せん"
          },
          {
            "word": "告",
            "start": 137.185,
            "end": 137.39,
            "furigana": "こく"
          },
          {
            "word": "ご",
            "start": 137.39,
            "end": 137.594
          },
          {
            "word": "愁",
            "start": 137.594,
            "end": 138.167,
            "furigana": "しゅう"
          },
          {
            "word": "傷",
            "start": 138.167,
            "end": 138.617,
            "furigana": "しょう"
          },
          {
            "word": "様",
            "start": 138.617,
            "end": 0,
            "furigana": "さま"
          }
        ]
      }
    ]
  },
  "VIDEOCLUB - Roi.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 23.129,
        "verseEnd": 25.214,
        "words": [
          {
            "word": "T'en",
            "start": 23.129,
            "end": 23.252
          },
          {
            "word": "trouveras",
            "start": 23.252,
            "end": 23.374
          },
          {
            "word": "d'autres",
            "start": 23.374,
            "end": 23.577
          },
          {
            "word": "des",
            "start": 23.577,
            "end": 23.74
          },
          {
            "word": "mecs",
            "start": 23.74,
            "end": 24.065
          },
          {
            "word": "comme",
            "start": 24.065,
            "end": 24.187
          },
          {
            "word": "moi",
            "start": 24.187,
            "end": 25.214
          }
        ]
      },
      {
        "verseStart": 25.214,
        "verseEnd": 27.535,
        "words": [
          {
            "word": "Y'en",
            "start": 25.214,
            "end": 25.337
          },
          {
            "word": "aura",
            "start": 25.337,
            "end": 25.459
          },
          {
            "word": "plein",
            "start": 25.459,
            "end": 25.58
          },
          {
            "word": "des",
            "start": 25.58,
            "end": 25.864
          },
          {
            "word": "gars",
            "start": 25.864,
            "end": 26.026
          },
          {
            "word": "pour",
            "start": 26.026,
            "end": 26.312
          },
          {
            "word": "toi",
            "start": 26.312,
            "end": 27.535
          }
        ]
      },
      {
        "verseStart": 27.535,
        "verseEnd": 29.667,
        "words": [
          {
            "word": "Tes",
            "start": 27.535,
            "end": 27.668
          },
          {
            "word": "boucles",
            "start": 27.668,
            "end": 27.831
          },
          {
            "word": "brunes",
            "start": 27.831,
            "end": 28.075
          },
          {
            "word": "s'évaporent",
            "start": 28.075,
            "end": 29.667
          }
        ]
      },
      {
        "verseStart": 29.667,
        "verseEnd": 32.034,
        "words": [
          {
            "word": "Dans",
            "start": 29.667,
            "end": 29.83
          },
          {
            "word": "mon",
            "start": 29.83,
            "end": 29.912
          },
          {
            "word": "âme,",
            "start": 29.912,
            "end": 30.402
          },
          {
            "word": "dans",
            "start": 30.402,
            "end": 30.482
          },
          {
            "word": "mon",
            "start": 30.482,
            "end": 30.77
          },
          {
            "word": "corps",
            "start": 30.77,
            "end": 32.034
          }
        ]
      },
      {
        "verseStart": 32.034,
        "verseEnd": 34.197,
        "words": [
          {
            "word": "Je",
            "start": 32.034,
            "end": 32.157
          },
          {
            "word": "te",
            "start": 32.157,
            "end": 32.28
          },
          {
            "word": "cherche",
            "start": 32.28,
            "end": 32.567
          },
          {
            "word": "dans",
            "start": 32.567,
            "end": 32.691
          },
          {
            "word": "mes",
            "start": 32.691,
            "end": 32.854
          },
          {
            "word": "songes,",
            "start": 32.854,
            "end": 33.097
          },
          {
            "word": "je",
            "start": 33.097,
            "end": 33.219
          },
          {
            "word": "te",
            "start": 33.219,
            "end": 33.382
          },
          {
            "word": "traque",
            "start": 33.382,
            "end": 33.626
          },
          {
            "word": "dans",
            "start": 33.626,
            "end": 33.748
          },
          {
            "word": "mes",
            "start": 33.748,
            "end": 33.912
          },
          {
            "word": "rêves",
            "start": 33.912,
            "end": 34.197
          }
        ]
      },
      {
        "verseStart": 34.197,
        "verseEnd": 36.414,
        "words": [
          {
            "word": "À",
            "start": 34.197,
            "end": 34.323
          },
          {
            "word": "l'aube",
            "start": 34.323,
            "end": 34.45
          },
          {
            "word": "ou",
            "start": 34.45,
            "end": 34.616
          },
          {
            "word": "dans",
            "start": 34.616,
            "end": 34.738
          },
          {
            "word": "mon",
            "start": 34.738,
            "end": 34.86
          },
          {
            "word": "ombre,",
            "start": 34.86,
            "end": 34.941
          },
          {
            "word": "ère",
            "start": 34.941,
            "end": 35.307
          },
          {
            "word": "en",
            "start": 35.307,
            "end": 35.47
          },
          {
            "word": "vaine",
            "start": 35.47,
            "end": 35.714
          },
          {
            "word": "sur",
            "start": 35.714,
            "end": 35.922
          },
          {
            "word": "tes",
            "start": 35.922,
            "end": 36.044
          },
          {
            "word": "lèvres",
            "start": 36.044,
            "end": 36.414
          }
        ]
      },
      {
        "verseStart": 36.414,
        "verseEnd": 38.543,
        "words": [
          {
            "word": "Écorchant",
            "start": 36.414,
            "end": 36.905
          },
          {
            "word": "les",
            "start": 36.905,
            "end": 37.027
          },
          {
            "word": "abîmes",
            "start": 37.027,
            "end": 37.514
          },
          {
            "word": "de",
            "start": 37.514,
            "end": 37.636
          },
          {
            "word": "mon",
            "start": 37.636,
            "end": 37.801
          },
          {
            "word": "cœur",
            "start": 37.801,
            "end": 38.131
          },
          {
            "word": "écarlate",
            "start": 38.131,
            "end": 38.543
          }
        ]
      },
      {
        "verseStart": 38.543,
        "verseEnd": 40.789,
        "words": [
          {
            "word": "Tu",
            "start": 38.543,
            "end": 38.746
          },
          {
            "word": "n'es",
            "start": 38.746,
            "end": 38.869
          },
          {
            "word": "que",
            "start": 38.869,
            "end": 39.032
          },
          {
            "word": "le",
            "start": 39.032,
            "end": 39.194
          },
          {
            "word": "point",
            "start": 39.194,
            "end": 39.315
          },
          {
            "word": "fixe",
            "start": 39.315,
            "end": 39.518
          },
          {
            "word": "de",
            "start": 39.518,
            "end": 39.721
          },
          {
            "word": "mes",
            "start": 39.721,
            "end": 39.884
          },
          {
            "word": "songes",
            "start": 39.884,
            "end": 40.175
          },
          {
            "word": "disparates",
            "start": 40.175,
            "end": 40.789
          }
        ]
      },
      {
        "verseStart": 40.789,
        "verseEnd": 45.208,
        "words": [
          {
            "word": "Aime-moi",
            "start": 40.789,
            "end": 41.331
          },
          {
            "word": "dans",
            "start": 41.331,
            "end": 41.576
          },
          {
            "word": "la",
            "start": 41.576,
            "end": 41.738
          },
          {
            "word": "neige,",
            "start": 41.738,
            "end": 42.023
          },
          {
            "word": "aime-moi",
            "start": 42.023,
            "end": 42.147
          },
          {
            "word": "sous",
            "start": 42.147,
            "end": 42.472
          },
          {
            "word": "l'soleil,",
            "start": 42.472,
            "end": 43.045
          },
          {
            "word": "aime-moi",
            "start": 43.045,
            "end": 43.455
          },
          {
            "word": "la",
            "start": 43.455,
            "end": 43.617
          },
          {
            "word": "peau",
            "start": 43.617,
            "end": 43.739
          },
          {
            "word": "beige",
            "start": 43.739,
            "end": 44.185
          },
          {
            "word": "dans",
            "start": 44.185,
            "end": 44.307
          },
          {
            "word": "les",
            "start": 44.307,
            "end": 44.47
          },
          {
            "word": "fleurs",
            "start": 44.47,
            "end": 44.674
          },
          {
            "word": "de",
            "start": 44.674,
            "end": 44.8
          },
          {
            "word": "vermeilles",
            "start": 44.8,
            "end": 45.208
          }
        ]
      },
      {
        "verseStart": 45.208,
        "verseEnd": 47.338,
        "words": [
          {
            "word": "J'vois",
            "start": 45.208,
            "end": 45.373
          },
          {
            "word": "des",
            "start": 45.373,
            "end": 45.496
          },
          {
            "word": "gens",
            "start": 45.496,
            "end": 45.66
          },
          {
            "word": "qui",
            "start": 45.66,
            "end": 45.823
          },
          {
            "word": "courent",
            "start": 45.823,
            "end": 46.068
          },
          {
            "word": "nus,",
            "start": 46.068,
            "end": 46.354
          },
          {
            "word": "j'vois",
            "start": 46.354,
            "end": 46.517
          },
          {
            "word": "des",
            "start": 46.517,
            "end": 46.639
          },
          {
            "word": "gens",
            "start": 46.639,
            "end": 46.802
          },
          {
            "word": "qui",
            "start": 46.802,
            "end": 46.966
          },
          {
            "word": "m'sourient",
            "start": 46.966,
            "end": 47.338
          }
        ]
      },
      {
        "verseStart": 47.338,
        "verseEnd": 49.751,
        "words": [
          {
            "word": "Mais",
            "start": 47.338,
            "end": 47.543
          },
          {
            "word": "moi",
            "start": 47.543,
            "end": 47.708
          },
          {
            "word": "j'plane",
            "start": 47.708,
            "end": 47.873
          },
          {
            "word": "dans",
            "start": 47.873,
            "end": 47.994
          },
          {
            "word": "la",
            "start": 47.994,
            "end": 48.158
          },
          {
            "word": "rue,",
            "start": 48.158,
            "end": 48.489
          },
          {
            "word": "dans",
            "start": 48.489,
            "end": 48.651
          },
          {
            "word": "tes",
            "start": 48.651,
            "end": 48.814
          },
          {
            "word": "yeux,",
            "start": 48.814,
            "end": 49.018
          },
          {
            "word": "sous",
            "start": 49.018,
            "end": 49.181
          },
          {
            "word": "la",
            "start": 49.181,
            "end": 49.383
          },
          {
            "word": "pluie",
            "start": 49.383,
            "end": 49.751
          }
        ]
      },
      {
        "verseStart": 49.751,
        "verseEnd": 54.131,
        "words": [
          {
            "word": "Et",
            "start": 49.751,
            "end": 49.914
          },
          {
            "word": "je",
            "start": 49.914,
            "end": 50.036
          },
          {
            "word": "reste",
            "start": 50.036,
            "end": 50.24
          },
          {
            "word": "l'esprit",
            "start": 50.24,
            "end": 50.491
          },
          {
            "word": "de",
            "start": 50.491,
            "end": 50.657
          },
          {
            "word": "tes",
            "start": 50.657,
            "end": 50.779
          },
          {
            "word": "lointains",
            "start": 50.779,
            "end": 51.268
          },
          {
            "word": "souvenirs,",
            "start": 51.268,
            "end": 51.512
          },
          {
            "word": "dans",
            "start": 51.512,
            "end": 52.007
          },
          {
            "word": "mes",
            "start": 52.007,
            "end": 52.17
          },
          {
            "word": "songes",
            "start": 52.17,
            "end": 52.416
          },
          {
            "word": "ensevelis,",
            "start": 52.416,
            "end": 52.986
          },
          {
            "word": "tes",
            "start": 52.986,
            "end": 53.149
          },
          {
            "word": "larmes,",
            "start": 53.149,
            "end": 53.516
          },
          {
            "word": "tes",
            "start": 53.516,
            "end": 53.639
          },
          {
            "word": "rires",
            "start": 53.639,
            "end": 54.131
          }
        ]
      },
      {
        "verseStart": 54.131,
        "verseEnd": 56.501,
        "words": [
          {
            "word": "Tu",
            "start": 54.131,
            "end": 54.297
          },
          {
            "word": "es",
            "start": 54.297,
            "end": 54.46
          },
          {
            "word": "ma",
            "start": 54.46,
            "end": 54.665
          },
          {
            "word": "femme",
            "start": 54.665,
            "end": 54.871
          },
          {
            "word": "iconique,",
            "start": 54.871,
            "end": 55.361
          },
          {
            "word": "tu",
            "start": 55.361,
            "end": 55.482
          },
          {
            "word": "es",
            "start": 55.482,
            "end": 55.645
          },
          {
            "word": "mon",
            "start": 55.645,
            "end": 55.766
          },
          {
            "word": "rubis",
            "start": 55.766,
            "end": 55.972
          },
          {
            "word": "saphir",
            "start": 55.972,
            "end": 56.501
          }
        ]
      },
      {
        "verseStart": 56.501,
        "verseEnd": 58.949,
        "words": [
          {
            "word": "Je",
            "start": 56.501,
            "end": 56.663
          },
          {
            "word": "suis",
            "start": 56.663,
            "end": 56.785
          },
          {
            "word": "ta",
            "start": 56.785,
            "end": 56.907
          },
          {
            "word": "rose",
            "start": 56.907,
            "end": 57.11
          },
          {
            "word": "lyrique,",
            "start": 57.11,
            "end": 57.436
          },
          {
            "word": "je",
            "start": 57.436,
            "end": 57.639
          },
          {
            "word": "suis",
            "start": 57.639,
            "end": 57.802
          },
          {
            "word": "ces",
            "start": 57.802,
            "end": 57.924
          },
          {
            "word": "gens",
            "start": 57.924,
            "end": 58.085
          },
          {
            "word": "qui",
            "start": 58.085,
            "end": 58.248
          },
          {
            "word": "t'admirent",
            "start": 58.248,
            "end": 58.949
          }
        ]
      },
      {
        "verseStart": 58.949,
        "verseEnd": 68.013,
        "words": [
          {
            "word": "Aime-moi",
            "start": 58.949,
            "end": 59.235
          },
          {
            "word": "dans",
            "start": 59.235,
            "end": 60.094
          },
          {
            "word": "la",
            "start": 60.094,
            "end": 60.216
          },
          {
            "word": "neige,",
            "start": 60.216,
            "end": 60.991
          },
          {
            "word": "aime-moi",
            "start": 60.991,
            "end": 61.888
          },
          {
            "word": "sous",
            "start": 61.888,
            "end": 62.051
          },
          {
            "word": "le",
            "start": 62.051,
            "end": 62.294
          },
          {
            "word": "soleil,",
            "start": 62.294,
            "end": 63.047
          },
          {
            "word": "aime-moi",
            "start": 63.047,
            "end": 64.31
          },
          {
            "word": "la",
            "start": 64.31,
            "end": 64.512
          },
          {
            "word": "peau",
            "start": 64.512,
            "end": 64.715
          },
          {
            "word": "beige",
            "start": 64.715,
            "end": 65.454
          },
          {
            "word": "dans",
            "start": 65.454,
            "end": 65.616
          },
          {
            "word": "les",
            "start": 65.616,
            "end": 65.82
          },
          {
            "word": "fleurs",
            "start": 65.82,
            "end": 66.634
          },
          {
            "word": "de",
            "start": 66.634,
            "end": 66.801
          },
          {
            "word": "vermeilles",
            "start": 66.801,
            "end": 68.013
          }
        ]
      },
      {
        "verseStart": 68.013,
        "verseEnd": 76.491,
        "words": [
          {
            "word": "Aime-moi",
            "start": 68.013,
            "end": 68.745
          },
          {
            "word": "dans",
            "start": 68.745,
            "end": 68.95
          },
          {
            "word": "la",
            "start": 68.95,
            "end": 69.113
          },
          {
            "word": "neige,",
            "start": 69.113,
            "end": 69.889
          },
          {
            "word": "aime-moi",
            "start": 69.889,
            "end": 70.743
          },
          {
            "word": "sous",
            "start": 70.743,
            "end": 70.906
          },
          {
            "word": "le",
            "start": 70.906,
            "end": 71.111
          },
          {
            "word": "soleil,",
            "start": 71.111,
            "end": 72.214
          },
          {
            "word": "aime-moi",
            "start": 72.214,
            "end": 73.286
          },
          {
            "word": "la",
            "start": 73.286,
            "end": 73.492
          },
          {
            "word": "peau",
            "start": 73.492,
            "end": 73.695
          },
          {
            "word": "beige",
            "start": 73.695,
            "end": 74.512
          },
          {
            "word": "dans",
            "start": 74.512,
            "end": 74.679
          },
          {
            "word": "les",
            "start": 74.679,
            "end": 74.843
          },
          {
            "word": "fleurs",
            "start": 74.843,
            "end": 75.589
          },
          {
            "word": "de",
            "start": 75.589,
            "end": 75.793
          },
          {
            "word": "vermeilles",
            "start": 75.793,
            "end": 76.491
          }
        ]
      },
      {
        "verseStart": 76.491,
        "verseEnd": 80.754,
        "words": [
          {
            "word": "Des",
            "start": 76.491,
            "end": 76.721
          },
          {
            "word": "jours",
            "start": 76.721,
            "end": 76.847
          },
          {
            "word": "durant,",
            "start": 76.847,
            "end": 77.84
          },
          {
            "word": "fuyant",
            "start": 77.84,
            "end": 78.125
          },
          {
            "word": "la",
            "start": 78.125,
            "end": 78.248
          },
          {
            "word": "nuit,",
            "start": 78.248,
            "end": 78.535
          },
          {
            "word": "j'parcours",
            "start": 78.535,
            "end": 78.657
          },
          {
            "word": "ta",
            "start": 78.657,
            "end": 78.782
          },
          {
            "word": "peau,",
            "start": 78.782,
            "end": 79.768
          },
          {
            "word": "j'parcours",
            "start": 79.768,
            "end": 79.891
          },
          {
            "word": "la",
            "start": 79.891,
            "end": 80.305
          },
          {
            "word": "ville",
            "start": 80.305,
            "end": 80.754
          }
        ]
      },
      {
        "verseStart": 80.754,
        "verseEnd": 83.298,
        "words": [
          {
            "word": "La",
            "start": 80.754,
            "end": 80.923
          },
          {
            "word": "fumée",
            "start": 80.923,
            "end": 81.129
          },
          {
            "word": "suave",
            "start": 81.129,
            "end": 81.457
          },
          {
            "word": "de",
            "start": 81.457,
            "end": 81.621
          },
          {
            "word": "ta",
            "start": 81.621,
            "end": 81.743
          },
          {
            "word": "bouche,",
            "start": 81.743,
            "end": 81.988
          },
          {
            "word": "file,",
            "start": 81.988,
            "end": 82.192
          },
          {
            "word": "s'échappe",
            "start": 82.192,
            "end": 82.314
          },
          {
            "word": "de",
            "start": 82.314,
            "end": 82.641
          },
          {
            "word": "jours",
            "start": 82.641,
            "end": 82.805
          },
          {
            "word": "en",
            "start": 82.805,
            "end": 83.011
          },
          {
            "word": "jours",
            "start": 83.011,
            "end": 83.298
          }
        ]
      },
      {
        "verseStart": 83.298,
        "verseEnd": 85.596,
        "words": [
          {
            "word": "Quand",
            "start": 83.298,
            "end": 83.461
          },
          {
            "word": "je",
            "start": 83.461,
            "end": 83.584
          },
          {
            "word": "râle",
            "start": 83.584,
            "end": 83.747
          },
          {
            "word": "dans",
            "start": 83.747,
            "end": 83.874
          },
          {
            "word": "la",
            "start": 83.874,
            "end": 84.042
          },
          {
            "word": "nuit,",
            "start": 84.042,
            "end": 84.331
          },
          {
            "word": "je",
            "start": 84.331,
            "end": 84.496
          },
          {
            "word": "suis",
            "start": 84.496,
            "end": 84.659
          },
          {
            "word": "seule",
            "start": 84.659,
            "end": 84.823
          },
          {
            "word": "sous",
            "start": 84.823,
            "end": 85.067
          },
          {
            "word": "mes",
            "start": 85.067,
            "end": 85.23
          },
          {
            "word": "vices",
            "start": 85.23,
            "end": 85.596
          }
        ]
      },
      {
        "verseStart": 85.596,
        "verseEnd": 90.289,
        "words": [
          {
            "word": "Je",
            "start": 85.596,
            "end": 85.806
          },
          {
            "word": "t'aime",
            "start": 85.806,
            "end": 86.061
          },
          {
            "word": "quand",
            "start": 86.061,
            "end": 86.265
          },
          {
            "word": "il",
            "start": 86.265,
            "end": 86.591
          },
          {
            "word": "pleut",
            "start": 86.591,
            "end": 86.795
          },
          {
            "word": "tu",
            "start": 86.795,
            "end": 86.958
          },
          {
            "word": "es",
            "start": 86.958,
            "end": 87.081
          },
          {
            "word": "la",
            "start": 87.081,
            "end": 87.204
          },
          {
            "word": "nymphe",
            "start": 87.204,
            "end": 87.286
          },
          {
            "word": "de",
            "start": 87.286,
            "end": 87.491
          },
          {
            "word": "mes",
            "start": 87.491,
            "end": 87.655
          },
          {
            "word": "vœux,",
            "start": 87.655,
            "end": 87.984
          },
          {
            "word": "je",
            "start": 87.984,
            "end": 88.147
          },
          {
            "word": "t'embrasse",
            "start": 88.147,
            "end": 88.27
          },
          {
            "word": "dans",
            "start": 88.27,
            "end": 88.472
          },
          {
            "word": "mes",
            "start": 88.472,
            "end": 88.681
          },
          {
            "word": "rêves",
            "start": 88.681,
            "end": 89.051
          },
          {
            "word": "et",
            "start": 89.051,
            "end": 89.215
          },
          {
            "word": "je",
            "start": 89.215,
            "end": 89.378
          },
          {
            "word": "t'aime",
            "start": 89.378,
            "end": 89.546
          },
          {
            "word": "au",
            "start": 89.546,
            "end": 89.673
          },
          {
            "word": "bout",
            "start": 89.673,
            "end": 89.835
          },
          {
            "word": "des",
            "start": 89.835,
            "end": 90.003
          },
          {
            "word": "lèvres",
            "start": 90.003,
            "end": 90.289
          }
        ]
      },
      {
        "verseStart": 90.289,
        "verseEnd": 92.497,
        "words": [
          {
            "word": "Je",
            "start": 90.289,
            "end": 90.412
          },
          {
            "word": "déteste",
            "start": 90.412,
            "end": 90.615
          },
          {
            "word": "le",
            "start": 90.615,
            "end": 90.778
          },
          {
            "word": "gout",
            "start": 90.778,
            "end": 90.9
          },
          {
            "word": "mièvre",
            "start": 90.9,
            "end": 91.023
          },
          {
            "word": "de",
            "start": 91.023,
            "end": 91.348
          },
          {
            "word": "leurs",
            "start": 91.348,
            "end": 91.512
          },
          {
            "word": "bouches,",
            "start": 91.512,
            "end": 91.841
          },
          {
            "word": "de",
            "start": 91.841,
            "end": 92.046
          },
          {
            "word": "leurs",
            "start": 92.046,
            "end": 92.17
          },
          {
            "word": "rêves",
            "start": 92.17,
            "end": 92.497
          }
        ]
      },
      {
        "verseStart": 92.497,
        "verseEnd": 94.973,
        "words": [
          {
            "word": "Dans",
            "start": 92.497,
            "end": 92.664
          },
          {
            "word": "la",
            "start": 92.664,
            "end": 92.827
          },
          {
            "word": "nuit",
            "start": 92.827,
            "end": 92.952
          },
          {
            "word": "tu",
            "start": 92.952,
            "end": 93.074
          },
          {
            "word": "me",
            "start": 93.074,
            "end": 93.156
          },
          {
            "word": "regardes,",
            "start": 93.156,
            "end": 93.323
          },
          {
            "word": "sous",
            "start": 93.323,
            "end": 93.74
          },
          {
            "word": "les",
            "start": 93.74,
            "end": 93.903
          },
          {
            "word": "nuages",
            "start": 93.903,
            "end": 94.229
          },
          {
            "word": "je",
            "start": 94.229,
            "end": 94.351
          },
          {
            "word": "divague",
            "start": 94.351,
            "end": 94.973
          }
        ]
      },
      {
        "verseStart": 94.973,
        "verseEnd": 95.834,
        "words": [
          {
            "word": "Avec",
            "start": 94.973,
            "end": 95.096
          },
          {
            "word": "toi",
            "start": 95.096,
            "end": 95.263
          },
          {
            "word": "je",
            "start": 95.263,
            "end": 95.427
          },
          {
            "word": "suis",
            "start": 95.427,
            "end": 95.59
          },
          {
            "word": "roi",
            "start": 95.59,
            "end": 95.834
          }
        ]
      },
      {
        "verseStart": 95.834,
        "verseEnd": 96.694,
        "words": [
          {
            "word": "Toi",
            "start": 95.834,
            "end": 95.957
          },
          {
            "word": "je",
            "start": 95.957,
            "end": 96.081
          },
          {
            "word": "suis",
            "start": 96.081,
            "end": 96.204
          },
          {
            "word": "roi",
            "start": 96.204,
            "end": 96.694
          }
        ]
      },
      {
        "verseStart": 96.694,
        "verseEnd": 97.804,
        "words": [
          {
            "word": "Toi",
            "start": 96.694,
            "end": 96.979
          },
          {
            "word": "je",
            "start": 96.979,
            "end": 97.102
          },
          {
            "word": "suis",
            "start": 97.102,
            "end": 97.226
          },
          {
            "word": "roi",
            "start": 97.226,
            "end": 97.804
          }
        ]
      },
      {
        "verseStart": 97.804,
        "verseEnd": 112.221,
        "words": [
          {
            "word": "Toi",
            "start": 97.804,
            "end": 98.098
          },
          {
            "word": "je",
            "start": 98.098,
            "end": 98.261
          },
          {
            "word": "suis",
            "start": 98.261,
            "end": 98.423
          },
          {
            "word": "roi",
            "start": 98.423,
            "end": 112.221
          }
        ]
      },
      {
        "verseStart": 112.221,
        "verseEnd": 121.007,
        "words": [
          {
            "word": "Aime-moi",
            "start": 112.221,
            "end": 113.248
          },
          {
            "word": "dans",
            "start": 113.248,
            "end": 113.454
          },
          {
            "word": "la",
            "start": 113.454,
            "end": 113.623
          },
          {
            "word": "neige,",
            "start": 113.623,
            "end": 114.316
          },
          {
            "word": "aime-moi",
            "start": 114.316,
            "end": 115.141
          },
          {
            "word": "sous",
            "start": 115.141,
            "end": 115.324
          },
          {
            "word": "le",
            "start": 115.324,
            "end": 115.577
          },
          {
            "word": "soleil,",
            "start": 115.577,
            "end": 116.473
          },
          {
            "word": "aime-moi",
            "start": 116.473,
            "end": 117.618
          },
          {
            "word": "la",
            "start": 117.618,
            "end": 117.781
          },
          {
            "word": "peau",
            "start": 117.781,
            "end": 117.984
          },
          {
            "word": "beige",
            "start": 117.984,
            "end": 118.715
          },
          {
            "word": "dans",
            "start": 118.715,
            "end": 118.919
          },
          {
            "word": "les",
            "start": 118.919,
            "end": 119.456
          },
          {
            "word": "fleurs",
            "start": 119.456,
            "end": 119.945
          },
          {
            "word": "de",
            "start": 119.945,
            "end": 120.108
          },
          {
            "word": "vermeilles",
            "start": 120.108,
            "end": 121.007
          }
        ]
      },
      {
        "verseStart": 121.007,
        "verseEnd": 129.882,
        "words": [
          {
            "word": "Aime-moi",
            "start": 121.007,
            "end": 122.108
          },
          {
            "word": "dans",
            "start": 122.108,
            "end": 122.272
          },
          {
            "word": "la",
            "start": 122.272,
            "end": 122.476
          },
          {
            "word": "neige,",
            "start": 122.476,
            "end": 123.255
          },
          {
            "word": "aime-moi",
            "start": 123.255,
            "end": 123.989
          },
          {
            "word": "sous",
            "start": 123.989,
            "end": 124.195
          },
          {
            "word": "le",
            "start": 124.195,
            "end": 124.443
          },
          {
            "word": "soleil,",
            "start": 124.443,
            "end": 125.505
          },
          {
            "word": "aime-moi",
            "start": 125.505,
            "end": 126.534
          },
          {
            "word": "la",
            "start": 126.534,
            "end": 126.739
          },
          {
            "word": "peau",
            "start": 126.739,
            "end": 126.943
          },
          {
            "word": "beige",
            "start": 126.943,
            "end": 127.715
          },
          {
            "word": "dans",
            "start": 127.715,
            "end": 127.878
          },
          {
            "word": "les",
            "start": 127.878,
            "end": 128.206
          },
          {
            "word": "fleurs",
            "start": 128.206,
            "end": 128.817
          },
          {
            "word": "de",
            "start": 128.817,
            "end": 128.98
          },
          {
            "word": "vermeilles",
            "start": 128.98,
            "end": 129.882
          }
        ]
      },
      {
        "verseStart": 129.882,
        "verseEnd": 131.944,
        "words": [
          {
            "word": "J'suis",
            "start": 129.882,
            "end": 130.005
          },
          {
            "word": "un",
            "start": 130.005,
            "end": 130.176
          },
          {
            "word": "garçon",
            "start": 130.176,
            "end": 130.38
          },
          {
            "word": "de",
            "start": 130.38,
            "end": 130.544
          },
          {
            "word": "la",
            "start": 130.544,
            "end": 130.708
          },
          {
            "word": "nuit,",
            "start": 130.708,
            "end": 130.871
          },
          {
            "word": "moi",
            "start": 130.871,
            "end": 131.075
          },
          {
            "word": "je",
            "start": 131.075,
            "end": 131.243
          },
          {
            "word": "laisse",
            "start": 131.243,
            "end": 131.366
          },
          {
            "word": "tomber",
            "start": 131.366,
            "end": 131.531
          },
          {
            "word": "les",
            "start": 131.531,
            "end": 131.696
          },
          {
            "word": "filles",
            "start": 131.696,
            "end": 131.944
          }
        ]
      },
      {
        "verseStart": 131.944,
        "verseEnd": 138.6,
        "words": [
          {
            "word": "Je",
            "start": 131.944,
            "end": 132.05
          },
          {
            "word": "n'aime",
            "start": 132.05,
            "end": 132.214
          },
          {
            "word": "que",
            "start": 132.214,
            "end": 132.378
          },
          {
            "word": "tes",
            "start": 132.378,
            "end": 132.543
          },
          {
            "word": "bas",
            "start": 132.543,
            "end": 132.706
          },
          {
            "word": "résilles",
            "start": 132.706,
            "end": 133.074
          },
          {
            "word": "qui",
            "start": 133.074,
            "end": 133.237
          },
          {
            "word": "dans",
            "start": 133.237,
            "end": 133.401
          },
          {
            "word": "mes",
            "start": 133.401,
            "end": 133.564
          },
          {
            "word": "pensées",
            "start": 133.564,
            "end": 133.732
          },
          {
            "word": "grésillent",
            "start": 133.732,
            "end": 138.6
          }
        ]
      },
      {
        "verseStart": 138.6,
        "verseEnd": 140.826,
        "words": [
          {
            "word": "J'suis",
            "start": 138.6,
            "end": 138.766
          },
          {
            "word": "un",
            "start": 138.766,
            "end": 138.892
          },
          {
            "word": "garçon",
            "start": 138.892,
            "end": 139.058
          },
          {
            "word": "de",
            "start": 139.058,
            "end": 139.14
          },
          {
            "word": "la",
            "start": 139.14,
            "end": 139.263
          },
          {
            "word": "nuit,",
            "start": 139.263,
            "end": 139.716
          },
          {
            "word": "moi",
            "start": 139.716,
            "end": 139.838
          },
          {
            "word": "je",
            "start": 139.838,
            "end": 140.046
          },
          {
            "word": "laisse",
            "start": 140.046,
            "end": 140.21
          },
          {
            "word": "tomber",
            "start": 140.21,
            "end": 140.374
          },
          {
            "word": "les",
            "start": 140.374,
            "end": 140.537
          },
          {
            "word": "filles",
            "start": 140.537,
            "end": 140.826
          }
        ]
      },
      {
        "verseStart": 140.826,
        "verseEnd": 147.76,
        "words": [
          {
            "word": "Je",
            "start": 140.826,
            "end": 140.989
          },
          {
            "word": "n'aime",
            "start": 140.989,
            "end": 141.153
          },
          {
            "word": "que",
            "start": 141.153,
            "end": 141.276
          },
          {
            "word": "tes",
            "start": 141.276,
            "end": 141.403
          },
          {
            "word": "bas",
            "start": 141.403,
            "end": 141.529
          },
          {
            "word": "résilles",
            "start": 141.529,
            "end": 141.936
          },
          {
            "word": "qui",
            "start": 141.936,
            "end": 142.103
          },
          {
            "word": "dans",
            "start": 142.103,
            "end": 142.225
          },
          {
            "word": "mes",
            "start": 142.225,
            "end": 142.39
          },
          {
            "word": "pensées",
            "start": 142.39,
            "end": 142.557
          },
          {
            "word": "grésillent",
            "start": 142.557,
            "end": 147.76
          }
        ]
      },
      {
        "verseStart": 147.76,
        "verseEnd": 152.187,
        "words": [
          {
            "word": "Aime-moi",
            "start": 147.76,
            "end": 148.873
          },
          {
            "word": "dans",
            "start": 148.873,
            "end": 148.996
          },
          {
            "word": "la",
            "start": 148.996,
            "end": 149.205
          },
          {
            "word": "neige,",
            "start": 149.205,
            "end": 150.02
          },
          {
            "word": "aime-moi",
            "start": 150.02,
            "end": 150.957
          },
          {
            "word": "sous",
            "start": 150.957,
            "end": 151.079
          },
          {
            "word": "le",
            "start": 151.079,
            "end": 151.325
          },
          {
            "word": "soleil",
            "start": 151.325,
            "end": 152.187
          }
        ]
      },
      {
        "verseStart": 152.187,
        "verseEnd": 156.737,
        "words": [
          {
            "word": "Aime-moi",
            "start": 152.187,
            "end": 153.376
          },
          {
            "word": "la",
            "start": 153.376,
            "end": 153.499
          },
          {
            "word": "peau",
            "start": 153.499,
            "end": 153.663
          },
          {
            "word": "beige",
            "start": 153.663,
            "end": 154.485
          },
          {
            "word": "dans",
            "start": 154.485,
            "end": 154.649
          },
          {
            "word": "les",
            "start": 154.649,
            "end": 154.771
          },
          {
            "word": "fleurs",
            "start": 154.771,
            "end": 155.544
          },
          {
            "word": "de",
            "start": 155.544,
            "end": 155.667
          },
          {
            "word": "vermeille",
            "start": 155.667,
            "end": 156.737
          }
        ]
      },
      {
        "verseStart": 156.737,
        "verseEnd": 160.998,
        "words": [
          {
            "word": "Aime-moi",
            "start": 156.737,
            "end": 157.796
          },
          {
            "word": "dans",
            "start": 157.796,
            "end": 157.935
          },
          {
            "word": "la",
            "start": 157.935,
            "end": 158.18
          },
          {
            "word": "neige,",
            "start": 158.18,
            "end": 158.751
          },
          {
            "word": "aime-moi",
            "start": 158.751,
            "end": 159.611
          },
          {
            "word": "sous",
            "start": 159.611,
            "end": 159.774
          },
          {
            "word": "le",
            "start": 159.774,
            "end": 160.018
          },
          {
            "word": "soleil",
            "start": 160.018,
            "end": 160.998
          }
        ]
      },
      {
        "verseStart": 160.998,
        "verseEnd": 166.425,
        "words": [
          {
            "word": "Aime-moi",
            "start": 160.998,
            "end": 162.184
          },
          {
            "word": "la",
            "start": 162.184,
            "end": 162.307
          },
          {
            "word": "peau",
            "start": 162.307,
            "end": 162.55
          },
          {
            "word": "beige",
            "start": 162.55,
            "end": 163.201
          },
          {
            "word": "dans",
            "start": 163.201,
            "end": 163.364
          },
          {
            "word": "les",
            "start": 163.364,
            "end": 163.527
          },
          {
            "word": "fleurs",
            "start": 163.527,
            "end": 164.262
          },
          {
            "word": "de",
            "start": 164.262,
            "end": 164.425
          },
          {
            "word": "vermeille",
            "start": 164.425,
            "end": 0
          }
        ]
      }
    ]
  },
  "Kero Kero Bonito - Break.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 9.2,
        "verseEnd": 11.569,
        "words": [
          {
            "word": "I",
            "start": 9.2,
            "end": 9.525
          },
          {
            "word": "know",
            "start": 9.525,
            "end": 9.771
          },
          {
            "word": "it",
            "start": 9.771,
            "end": 10.098
          },
          {
            "word": "seems",
            "start": 10.098,
            "end": 10.425
          },
          {
            "word": "kinda",
            "start": 10.425,
            "end": 10.913
          },
          {
            "word": "tough",
            "start": 10.913,
            "end": 11.569
          }
        ]
      },
      {
        "verseStart": 11.569,
        "verseEnd": 14.14,
        "words": [
          {
            "word": "But",
            "start": 11.569,
            "end": 12.021
          },
          {
            "word": "really",
            "start": 12.021,
            "end": 12.266
          },
          {
            "word": "it's",
            "start": 12.266,
            "end": 12.591
          },
          {
            "word": "easy",
            "start": 12.591,
            "end": 13.162
          },
          {
            "word": "enough",
            "start": 13.162,
            "end": 14.14
          }
        ]
      },
      {
        "verseStart": 14.14,
        "verseEnd": 16.639,
        "words": [
          {
            "word": "For",
            "start": 14.14,
            "end": 14.467
          },
          {
            "word": "us",
            "start": 14.467,
            "end": 14.752
          },
          {
            "word": "to",
            "start": 14.752,
            "end": 15.039
          },
          {
            "word": "slow",
            "start": 15.039,
            "end": 15.325
          },
          {
            "word": "down",
            "start": 15.325,
            "end": 15.653
          },
          {
            "word": "the",
            "start": 15.653,
            "end": 15.983
          },
          {
            "word": "pace",
            "start": 15.983,
            "end": 16.639
          }
        ]
      },
      {
        "verseStart": 16.639,
        "verseEnd": 19.3,
        "words": [
          {
            "word": "So",
            "start": 16.639,
            "end": 17.047
          },
          {
            "word": "we",
            "start": 17.047,
            "end": 17.21
          },
          {
            "word": "can",
            "start": 17.21,
            "end": 17.373
          },
          {
            "word": "all",
            "start": 17.373,
            "end": 17.699
          },
          {
            "word": "go",
            "start": 17.699,
            "end": 17.947
          },
          {
            "word": "take",
            "start": 17.947,
            "end": 18.281
          },
          {
            "word": "a",
            "start": 18.281,
            "end": 18.607
          },
          {
            "word": "break",
            "start": 18.607,
            "end": 19.3
          }
        ]
      },
      {
        "verseStart": 19.3,
        "verseEnd": 24.205,
        "words": [
          {
            "word": "In",
            "start": 19.3,
            "end": 19.587
          },
          {
            "word": "fact,",
            "start": 19.587,
            "end": 19.873
          },
          {
            "word": "there’s",
            "start": 19.873,
            "end": 20.201
          },
          {
            "word": "not",
            "start": 20.201,
            "end": 20.774
          },
          {
            "word": "much",
            "start": 20.774,
            "end": 21.426
          },
          {
            "word": "better",
            "start": 21.426,
            "end": 22.038
          },
          {
            "word": "than",
            "start": 22.038,
            "end": 22.697
          },
          {
            "word": "nothing",
            "start": 22.697,
            "end": 23.352
          },
          {
            "word": "at",
            "start": 23.352,
            "end": 23.635
          },
          {
            "word": "all",
            "start": 23.635,
            "end": 24.205
          }
        ]
      },
      {
        "verseStart": 24.205,
        "verseEnd": 29.251,
        "words": [
          {
            "word": "And",
            "start": 24.205,
            "end": 24.552
          },
          {
            "word": "that's",
            "start": 24.552,
            "end": 24.878
          },
          {
            "word": "especially",
            "start": 24.878,
            "end": 26.068
          },
          {
            "word": "true",
            "start": 26.068,
            "end": 26.804
          },
          {
            "word": "when",
            "start": 26.804,
            "end": 27.052
          },
          {
            "word": "there",
            "start": 27.052,
            "end": 27.344
          },
          {
            "word": "is",
            "start": 27.344,
            "end": 27.644
          },
          {
            "word": "something",
            "start": 27.644,
            "end": 28.216
          },
          {
            "word": "to",
            "start": 28.216,
            "end": 28.502
          },
          {
            "word": "do",
            "start": 28.502,
            "end": 29.251
          }
        ]
      },
      {
        "verseStart": 29.251,
        "verseEnd": 30.201,
        "words": [
          {
            "word": "目",
            "start": 29.251,
            "end": 29.458,
            "furigana": "め"
          },
          {
            "word": "の",
            "start": 29.458,
            "end": 29.581
          },
          {
            "word": "前",
            "start": 29.581,
            "end": 29.79,
            "furigana": "まえ"
          },
          {
            "word": "を",
            "start": 29.79,
            "end": 30.201
          }
        ]
      },
      {
        "verseStart": 30.201,
        "verseEnd": 32.367,
        "words": [
          {
            "word": "ぐ",
            "start": 30.201,
            "end": 30.365
          },
          {
            "word": "る",
            "start": 30.365,
            "end": 30.49
          },
          {
            "word": "ぐ",
            "start": 30.49,
            "end": 30.618
          },
          {
            "word": "る",
            "start": 30.618,
            "end": 30.782
          },
          {
            "word": "世",
            "start": 30.782,
            "end": 30.869,
            "furigana": "せ"
          },
          {
            "word": "界",
            "start": 30.869,
            "end": 30.991,
            "furigana": "かい"
          },
          {
            "word": "が",
            "start": 30.991,
            "end": 31.115
          },
          {
            "word": "駆",
            "start": 31.115,
            "end": 31.24,
            "furigana": "か"
          },
          {
            "word": "け",
            "start": 31.24,
            "end": 31.407
          },
          {
            "word": "抜",
            "start": 31.407,
            "end": 31.654,
            "furigana": "ぬ"
          },
          {
            "word": "け",
            "start": 31.654,
            "end": 31.907
          },
          {
            "word": "る",
            "start": 31.907,
            "end": 32.367
          }
        ]
      },
      {
        "verseStart": 32.367,
        "verseEnd": 35.118,
        "words": [
          {
            "word": "で",
            "start": 32.367,
            "end": 32.634
          },
          {
            "word": "も",
            "start": 32.634,
            "end": 32.801
          },
          {
            "word": "私",
            "start": 32.801,
            "end": 33.213,
            "furigana": "わたし"
          },
          {
            "word": "は",
            "start": 33.213,
            "end": 33.337
          },
          {
            "word": "daydream",
            "start": 33.337,
            "end": 33.995
          },
          {
            "word": "夢",
            "start": 33.995,
            "end": 34.121,
            "furigana": "ゆめ"
          },
          {
            "word": "見",
            "start": 34.121,
            "end": 34.284,
            "furigana": "み"
          },
          {
            "word": "て",
            "start": 34.284,
            "end": 34.493
          },
          {
            "word": "る",
            "start": 34.493,
            "end": 35.118
          }
        ]
      },
      {
        "verseStart": 35.118,
        "verseEnd": 37.496,
        "words": [
          {
            "word": "Look",
            "start": 35.118,
            "end": 35.369
          },
          {
            "word": "out",
            "start": 35.369,
            "end": 35.702
          },
          {
            "word": "the",
            "start": 35.702,
            "end": 36.076
          },
          {
            "word": "window",
            "start": 36.076,
            "end": 36.412
          },
          {
            "word": "窓",
            "start": 36.412,
            "end": 36.789,
            "furigana": "まど"
          },
          {
            "word": "の",
            "start": 36.789,
            "end": 36.994
          },
          {
            "word": "外",
            "start": 36.994,
            "end": 37.496,
            "furigana": "そと"
          }
        ]
      },
      {
        "verseStart": 37.496,
        "verseEnd": 40.132,
        "words": [
          {
            "word": "Watching",
            "start": 37.496,
            "end": 38.164
          },
          {
            "word": "the",
            "start": 38.164,
            "end": 38.246
          },
          {
            "word": "world",
            "start": 38.246,
            "end": 38.581
          },
          {
            "word": "go",
            "start": 38.581,
            "end": 38.868
          },
          {
            "word": "by,",
            "start": 38.868,
            "end": 39.195
          },
          {
            "word": "goodbye",
            "start": 39.195,
            "end": 40.132
          }
        ]
      },
      {
        "verseStart": 40.132,
        "verseEnd": 42.666,
        "words": [
          {
            "word": "み",
            "start": 40.132,
            "end": 40.261
          },
          {
            "word": "ん",
            "start": 40.261,
            "end": 40.344
          },
          {
            "word": "な",
            "start": 40.344,
            "end": 40.471
          },
          {
            "word": "ど",
            "start": 40.471,
            "end": 40.68
          },
          {
            "word": "こ",
            "start": 40.68,
            "end": 40.802
          },
          {
            "word": "か",
            "start": 40.802,
            "end": 40.968
          },
          {
            "word": "へ",
            "start": 40.968,
            "end": 41.094
          },
          {
            "word": "向",
            "start": 41.094,
            "end": 41.264,
            "furigana": "む"
          },
          {
            "word": "か",
            "start": 41.264,
            "end": 41.39
          },
          {
            "word": "っ",
            "start": 41.39,
            "end": 41.553
          },
          {
            "word": "て",
            "start": 41.553,
            "end": 42.003
          },
          {
            "word": "る",
            "start": 42.003,
            "end": 42.666
          }
        ]
      },
      {
        "verseStart": 42.666,
        "verseEnd": 45.225,
        "words": [
          {
            "word": "で",
            "start": 42.666,
            "end": 42.915
          },
          {
            "word": "も",
            "start": 42.915,
            "end": 42.915
          },
          {
            "word": "か",
            "start": 42.915,
            "end": 43.001
          },
          {
            "word": "み",
            "start": 43.001,
            "end": 43.126
          },
          {
            "word": "が",
            "start": 43.126,
            "end": 43.208
          },
          {
            "word": "dancing",
            "start": 43.208,
            "end": 43.913
          },
          {
            "word": "in",
            "start": 43.913,
            "end": 44.198
          },
          {
            "word": "the",
            "start": 44.198,
            "end": 44.525
          },
          {
            "word": "wind",
            "start": 44.525,
            "end": 45.225
          }
        ]
      },
      {
        "verseStart": 45.225,
        "verseEnd": 47.671,
        "words": [
          {
            "word": "こ",
            "start": 45.225,
            "end": 45.346
          },
          {
            "word": "う",
            "start": 45.346,
            "end": 45.476
          },
          {
            "word": "い",
            "start": 45.476,
            "end": 45.557
          },
          {
            "word": "う",
            "start": 45.557,
            "end": 45.768
          },
          {
            "word": "時",
            "start": 45.768,
            "end": 46.176,
            "furigana": "とき"
          },
          {
            "word": "に",
            "start": 46.176,
            "end": 46.299
          },
          {
            "word": "思",
            "start": 46.299,
            "end": 46.505,
            "furigana": "おも"
          },
          {
            "word": "う",
            "start": 46.505,
            "end": 46.839
          },
          {
            "word": "ん",
            "start": 46.839,
            "end": 47.005
          },
          {
            "word": "だ",
            "start": 47.005,
            "end": 47.671
          }
        ]
      },
      {
        "verseStart": 47.671,
        "verseEnd": 50.394,
        "words": [
          {
            "word": "生",
            "start": 47.671,
            "end": 47.842,
            "furigana": "い"
          },
          {
            "word": "き",
            "start": 47.842,
            "end": 48.005
          },
          {
            "word": "て",
            "start": 48.005,
            "end": 48.173
          },
          {
            "word": "い",
            "start": 48.173,
            "end": 48.299
          },
          {
            "word": "て",
            "start": 48.299,
            "end": 48.422
          },
          {
            "word": "本",
            "start": 48.422,
            "end": 48.588,
            "furigana": "ほん"
          },
          {
            "word": "当",
            "start": 48.588,
            "end": 48.716,
            "furigana": "とう"
          },
          {
            "word": "に",
            "start": 48.716,
            "end": 48.841
          },
          {
            "word": "よ",
            "start": 48.841,
            "end": 49.008
          },
          {
            "word": "か",
            "start": 49.008,
            "end": 49.175
          },
          {
            "word": "っ",
            "start": 49.175,
            "end": 49.425
          },
          {
            "word": "た",
            "start": 49.425,
            "end": 50.394
          }
        ]
      },
      {
        "verseStart": 50.394,
        "verseEnd": 52.677,
        "words": [
          {
            "word": "幸",
            "start": 50.394,
            "end": 50.642,
            "furigana": "しあわ"
          },
          {
            "word": "せ",
            "start": 50.642,
            "end": 50.769
          },
          {
            "word": "気",
            "start": 50.769,
            "end": 50.852,
            "furigana": "き"
          },
          {
            "word": "分",
            "start": 50.852,
            "end": 51.061,
            "furigana": "ぶん"
          },
          {
            "word": "に",
            "start": 51.061,
            "end": 51.315
          },
          {
            "word": "な",
            "start": 51.315,
            "end": 51.441
          },
          {
            "word": "れ",
            "start": 51.441,
            "end": 51.565
          },
          {
            "word": "る",
            "start": 51.565,
            "end": 51.689
          },
          {
            "word": "ん",
            "start": 51.689,
            "end": 51.775
          },
          {
            "word": "だ",
            "start": 51.775,
            "end": 52.677
          }
        ]
      },
      {
        "verseStart": 52.677,
        "verseEnd": 55.227,
        "words": [
          {
            "word": "こ",
            "start": 52.677,
            "end": 52.881
          },
          {
            "word": "れ",
            "start": 52.881,
            "end": 53.003
          },
          {
            "word": "で",
            "start": 53.003,
            "end": 53.125
          },
          {
            "word": "い",
            "start": 53.125,
            "end": 53.25
          },
          {
            "word": "い",
            "start": 53.25,
            "end": 53.623
          },
          {
            "word": "気",
            "start": 53.623,
            "end": 53.955,
            "furigana": "き"
          },
          {
            "word": "が",
            "start": 53.955,
            "end": 54.118
          },
          {
            "word": "す",
            "start": 54.118,
            "end": 54.282
          },
          {
            "word": "る",
            "start": 54.282,
            "end": 54.53
          },
          {
            "word": "ん",
            "start": 54.53,
            "end": 54.612
          },
          {
            "word": "だ",
            "start": 54.612,
            "end": 55.227
          }
        ]
      },
      {
        "verseStart": 55.227,
        "verseEnd": 57.407,
        "words": [
          {
            "word": "I",
            "start": 55.227,
            "end": 55.515
          },
          {
            "word": "got",
            "start": 55.515,
            "end": 55.681
          },
          {
            "word": "a",
            "start": 55.681,
            "end": 55.806
          },
          {
            "word": "smile",
            "start": 55.806,
            "end": 56.141
          },
          {
            "word": "on",
            "start": 56.141,
            "end": 56.344
          },
          {
            "word": "my",
            "start": 56.344,
            "end": 56.466
          },
          {
            "word": "face",
            "start": 56.466,
            "end": 57.407
          }
        ]
      },
      {
        "verseStart": 57.407,
        "verseEnd": 60.132,
        "words": [
          {
            "word": "Cause",
            "start": 57.407,
            "end": 57.739
          },
          {
            "word": "now",
            "start": 57.739,
            "end": 58.025
          },
          {
            "word": "I'm",
            "start": 58.025,
            "end": 58.316
          },
          {
            "word": "taking",
            "start": 58.316,
            "end": 58.767
          },
          {
            "word": "a",
            "start": 58.767,
            "end": 58.891
          },
          {
            "word": "break",
            "start": 58.891,
            "end": 60.132
          }
        ]
      },
      {
        "verseStart": 60.132,
        "verseEnd": 62.688,
        "words": [
          {
            "word": "何",
            "start": 60.132,
            "end": 60.503,
            "furigana": "なに"
          },
          {
            "word": "も",
            "start": 60.503,
            "end": 60.709
          },
          {
            "word": "し",
            "start": 60.709,
            "end": 60.833
          },
          {
            "word": "な",
            "start": 60.833,
            "end": 60.96
          },
          {
            "word": "い",
            "start": 60.96,
            "end": 61.491
          },
          {
            "word": "こ",
            "start": 61.491,
            "end": 61.572
          },
          {
            "word": "の",
            "start": 61.572,
            "end": 61.741
          },
          {
            "word": "時",
            "start": 61.741,
            "end": 62.033,
            "furigana": "じ"
          },
          {
            "word": "間",
            "start": 62.033,
            "end": 62.688,
            "furigana": "かん"
          }
        ]
      },
      {
        "verseStart": 62.688,
        "verseEnd": 65.203,
        "words": [
          {
            "word": "今",
            "start": 62.688,
            "end": 62.81,
            "furigana": "いま"
          },
          {
            "word": "っ",
            "start": 62.81,
            "end": 62.938
          },
          {
            "word": "て",
            "start": 62.938,
            "end": 63.228
          },
          {
            "word": "い",
            "start": 63.228,
            "end": 63.355
          },
          {
            "word": "う",
            "start": 63.355,
            "end": 63.605
          },
          {
            "word": "こ",
            "start": 63.605,
            "end": 64.017
          },
          {
            "word": "の",
            "start": 64.017,
            "end": 64.139
          },
          {
            "word": "瞬",
            "start": 64.139,
            "end": 64.509,
            "furigana": "しゅん"
          },
          {
            "word": "間",
            "start": 64.509,
            "end": 65.203,
            "furigana": "かん"
          }
        ]
      },
      {
        "verseStart": 65.203,
        "verseEnd": 67.37,
        "words": [
          {
            "word": "ペ",
            "start": 65.203,
            "end": 65.333
          },
          {
            "word": "ー",
            "start": 65.333,
            "end": 65.415
          },
          {
            "word": "ス",
            "start": 65.415,
            "end": 65.54
          },
          {
            "word": "に",
            "start": 65.54,
            "end": 65.626
          },
          {
            "word": "ブ",
            "start": 65.626,
            "end": 65.751
          },
          {
            "word": "レ",
            "start": 65.751,
            "end": 65.873
          },
          {
            "word": "ー",
            "start": 65.873,
            "end": 66.081
          },
          {
            "word": "キ",
            "start": 66.081,
            "end": 66.374
          },
          {
            "word": "か",
            "start": 66.374,
            "end": 66.498
          },
          {
            "word": "け",
            "start": 66.498,
            "end": 66.96
          },
          {
            "word": "て",
            "start": 66.96,
            "end": 67.37
          }
        ]
      },
      {
        "verseStart": 67.37,
        "verseEnd": 69.214,
        "words": [
          {
            "word": "Let's",
            "start": 67.37,
            "end": 67.697
          },
          {
            "word": "slow",
            "start": 67.697,
            "end": 68.564
          },
          {
            "word": "down",
            "start": 68.564,
            "end": 69.214
          }
        ]
      },
      {
        "verseStart": 69.214,
        "verseEnd": 71.712,
        "words": [
          {
            "word": "I",
            "start": 69.214,
            "end": 69.541
          },
          {
            "word": "know",
            "start": 69.541,
            "end": 69.789
          },
          {
            "word": "it",
            "start": 69.789,
            "end": 70.119
          },
          {
            "word": "seems",
            "start": 70.119,
            "end": 70.449
          },
          {
            "word": "kinda",
            "start": 70.449,
            "end": 70.979
          },
          {
            "word": "tough",
            "start": 70.979,
            "end": 71.712
          }
        ]
      },
      {
        "verseStart": 71.712,
        "verseEnd": 74.189,
        "words": [
          {
            "word": "But",
            "start": 71.712,
            "end": 71.957
          },
          {
            "word": "really",
            "start": 71.957,
            "end": 72.287
          },
          {
            "word": "it's",
            "start": 72.287,
            "end": 72.578
          },
          {
            "word": "easy",
            "start": 72.578,
            "end": 73.197
          },
          {
            "word": "enough",
            "start": 73.197,
            "end": 74.189
          }
        ]
      },
      {
        "verseStart": 74.189,
        "verseEnd": 76.662,
        "words": [
          {
            "word": "For",
            "start": 74.189,
            "end": 74.479
          },
          {
            "word": "us",
            "start": 74.479,
            "end": 74.81
          },
          {
            "word": "to",
            "start": 74.81,
            "end": 75.096
          },
          {
            "word": "slow",
            "start": 75.096,
            "end": 75.423
          },
          {
            "word": "down",
            "start": 75.423,
            "end": 75.677
          },
          {
            "word": "the",
            "start": 75.677,
            "end": 76.007
          },
          {
            "word": "pace",
            "start": 76.007,
            "end": 76.662
          }
        ]
      },
      {
        "verseStart": 76.662,
        "verseEnd": 79.204,
        "words": [
          {
            "word": "So",
            "start": 76.662,
            "end": 77.038
          },
          {
            "word": "we",
            "start": 77.038,
            "end": 77.244
          },
          {
            "word": "can",
            "start": 77.244,
            "end": 77.37
          },
          {
            "word": "all",
            "start": 77.37,
            "end": 77.702
          },
          {
            "word": "go",
            "start": 77.702,
            "end": 77.914
          },
          {
            "word": "take",
            "start": 77.914,
            "end": 78.245
          },
          {
            "word": "a",
            "start": 78.245,
            "end": 78.579
          },
          {
            "word": "break",
            "start": 78.579,
            "end": 79.204
          }
        ]
      },
      {
        "verseStart": 79.204,
        "verseEnd": 84.249,
        "words": [
          {
            "word": "In",
            "start": 79.204,
            "end": 79.493
          },
          {
            "word": "fact,",
            "start": 79.493,
            "end": 79.746
          },
          {
            "word": "there's",
            "start": 79.746,
            "end": 80.081
          },
          {
            "word": "not",
            "start": 80.081,
            "end": 80.693
          },
          {
            "word": "much",
            "start": 80.693,
            "end": 81.304
          },
          {
            "word": "better",
            "start": 81.304,
            "end": 81.998
          },
          {
            "word": "than",
            "start": 81.998,
            "end": 82.624
          },
          {
            "word": "nothing",
            "start": 82.624,
            "end": 83.25
          },
          {
            "word": "at",
            "start": 83.25,
            "end": 83.542
          },
          {
            "word": "all",
            "start": 83.542,
            "end": 84.249
          }
        ]
      },
      {
        "verseStart": 84.249,
        "verseEnd": 86.753,
        "words": [
          {
            "word": "And",
            "start": 84.249,
            "end": 84.535
          },
          {
            "word": "that's",
            "start": 84.535,
            "end": 84.825
          },
          {
            "word": "especially",
            "start": 84.825,
            "end": 85.973
          },
          {
            "word": "true",
            "start": 85.973,
            "end": 86.753
          }
        ]
      },
      {
        "verseStart": 86.753,
        "verseEnd": 90.076,
        "words": [
          {
            "word": "When",
            "start": 86.753,
            "end": 87.004
          },
          {
            "word": "there",
            "start": 87.004,
            "end": 87.297
          },
          {
            "word": "is",
            "start": 87.297,
            "end": 87.588
          },
          {
            "word": "something",
            "start": 87.588,
            "end": 88.255
          },
          {
            "word": "to",
            "start": 88.255,
            "end": 88.545
          },
          {
            "word": "do",
            "start": 88.545,
            "end": 90.076
          }
        ]
      },
      {
        "verseStart": 90.076,
        "verseEnd": 95.158,
        "words": [
          {
            "word": "Just",
            "start": 90.076,
            "end": 90.405
          },
          {
            "word": "move",
            "start": 90.405,
            "end": 90.737
          },
          {
            "word": "very",
            "start": 90.737,
            "end": 91.189
          },
          {
            "word": "slowly",
            "start": 91.189,
            "end": 91.763
          },
          {
            "word": "to",
            "start": 91.763,
            "end": 91.967
          },
          {
            "word": "the",
            "start": 91.967,
            "end": 92.05
          },
          {
            "word": "beat",
            "start": 92.05,
            "end": 92.718
          },
          {
            "word": "(a-yo,",
            "start": 92.718,
            "end": 93.677
          },
          {
            "word": "a-a-yo-o)",
            "start": 93.677,
            "end": 95.158
          }
        ]
      },
      {
        "verseStart": 95.158,
        "verseEnd": 100.188,
        "words": [
          {
            "word": "Now",
            "start": 95.158,
            "end": 95.448
          },
          {
            "word": "get",
            "start": 95.448,
            "end": 95.777
          },
          {
            "word": "down",
            "start": 95.777,
            "end": 96.07
          },
          {
            "word": "and",
            "start": 96.07,
            "end": 96.401
          },
          {
            "word": "put",
            "start": 96.401,
            "end": 96.73
          },
          {
            "word": "up",
            "start": 96.73,
            "end": 96.976
          },
          {
            "word": "your",
            "start": 96.976,
            "end": 97.057
          },
          {
            "word": "feet",
            "start": 97.057,
            "end": 97.64
          },
          {
            "word": "(a-yo,",
            "start": 97.64,
            "end": 98.556
          },
          {
            "word": "a-a-yo-o)",
            "start": 98.556,
            "end": 100.188
          }
        ]
      },
      {
        "verseStart": 100.188,
        "verseEnd": 105.447,
        "words": [
          {
            "word": "If",
            "start": 100.188,
            "end": 100.407
          },
          {
            "word": "you",
            "start": 100.407,
            "end": 100.532
          },
          {
            "word": "like",
            "start": 100.532,
            "end": 100.704
          },
          {
            "word": "to",
            "start": 100.704,
            "end": 100.868
          },
          {
            "word": "lounge,",
            "start": 100.868,
            "end": 101.326
          },
          {
            "word": "relax,",
            "start": 101.326,
            "end": 101.658
          },
          {
            "word": "or",
            "start": 101.658,
            "end": 101.948
          },
          {
            "word": "flop",
            "start": 101.948,
            "end": 102.654
          },
          {
            "word": "(a-yo,",
            "start": 102.654,
            "end": 103.486
          },
          {
            "word": "a-a-yo-o)",
            "start": 103.486,
            "end": 105.447
          }
        ]
      },
      {
        "verseStart": 105.447,
        "verseEnd": 107.623,
        "words": [
          {
            "word": "Doesn't",
            "start": 105.447,
            "end": 105.613
          },
          {
            "word": "really",
            "start": 105.613,
            "end": 105.779
          },
          {
            "word": "matter",
            "start": 105.779,
            "end": 105.904
          },
          {
            "word": "when",
            "start": 105.904,
            "end": 106.149
          },
          {
            "word": "you're",
            "start": 106.149,
            "end": 106.515
          },
          {
            "word": "doing",
            "start": 106.515,
            "end": 106.964
          },
          {
            "word": "squat",
            "start": 106.964,
            "end": 107.623
          }
        ]
      },
      {
        "verseStart": 107.623,
        "verseEnd": 110.422,
        "words": [
          {
            "word": "(a-yo,",
            "start": 107.623,
            "end": 108.539
          },
          {
            "word": "a-a-yo-o)",
            "start": 108.539,
            "end": 110.422
          }
        ]
      },
      {
        "verseStart": 110.422,
        "verseEnd": 112.528,
        "words": [
          {
            "word": "空",
            "start": 110.422,
            "end": 110.627,
            "furigana": "そら"
          },
          {
            "word": "を",
            "start": 110.627,
            "end": 110.753
          },
          {
            "word": "見",
            "start": 110.753,
            "end": 110.877,
            "furigana": "み"
          },
          {
            "word": "上",
            "start": 110.877,
            "end": 111.045,
            "furigana": "あ"
          },
          {
            "word": "げ",
            "start": 111.045,
            "end": 111.254
          },
          {
            "word": "る",
            "start": 111.254,
            "end": 111.417
          },
          {
            "word": "満",
            "start": 111.417,
            "end": 111.95,
            "furigana": "まん"
          },
          {
            "word": "月",
            "start": 111.95,
            "end": 112.528,
            "furigana": "げつ"
          }
        ]
      },
      {
        "verseStart": 112.528,
        "verseEnd": 115.244,
        "words": [
          {
            "word": "星",
            "start": 112.528,
            "end": 112.937,
            "furigana": "ほし"
          },
          {
            "word": "っ",
            "start": 112.937,
            "end": 113.06
          },
          {
            "word": "て",
            "start": 113.06,
            "end": 113.184
          },
          {
            "word": "こ",
            "start": 113.184,
            "end": 113.305
          },
          {
            "word": "ん",
            "start": 113.305,
            "end": 113.551
          },
          {
            "word": "な",
            "start": 113.551,
            "end": 113.88
          },
          {
            "word": "に",
            "start": 113.88,
            "end": 114.047
          },
          {
            "word": "綺",
            "start": 114.047,
            "end": 114.172,
            "furigana": "き"
          },
          {
            "word": "麗",
            "start": 114.172,
            "end": 114.335,
            "furigana": "れい"
          },
          {
            "word": "な",
            "start": 114.335,
            "end": 114.499
          },
          {
            "word": "ん",
            "start": 114.499,
            "end": 114.792
          },
          {
            "word": "だ",
            "start": 114.792,
            "end": 115.244
          }
        ]
      },
      {
        "verseStart": 115.244,
        "verseEnd": 117.7,
        "words": [
          {
            "word": "こ",
            "start": 115.244,
            "end": 115.337
          },
          {
            "word": "う",
            "start": 115.337,
            "end": 115.46
          },
          {
            "word": "い",
            "start": 115.46,
            "end": 115.584
          },
          {
            "word": "う",
            "start": 115.584,
            "end": 115.712
          },
          {
            "word": "時",
            "start": 115.712,
            "end": 116.005,
            "furigana": "とき"
          },
          {
            "word": "に",
            "start": 116.005,
            "end": 116.381
          },
          {
            "word": "思",
            "start": 116.381,
            "end": 116.627,
            "furigana": "おも"
          },
          {
            "word": "う",
            "start": 116.627,
            "end": 116.755
          },
          {
            "word": "ん",
            "start": 116.755,
            "end": 117.04
          },
          {
            "word": "だ",
            "start": 117.04,
            "end": 117.7
          }
        ]
      },
      {
        "verseStart": 117.7,
        "verseEnd": 120.166,
        "words": [
          {
            "word": "生",
            "start": 117.7,
            "end": 117.986,
            "furigana": "い"
          },
          {
            "word": "き",
            "start": 117.986,
            "end": 118.11
          },
          {
            "word": "て",
            "start": 118.11,
            "end": 118.232
          },
          {
            "word": "る",
            "start": 118.232,
            "end": 118.313
          },
          {
            "word": "っ",
            "start": 118.313,
            "end": 118.765
          },
          {
            "word": "て",
            "start": 118.765,
            "end": 119.011
          },
          {
            "word": "不",
            "start": 119.011,
            "end": 119.136,
            "furigana": "ふ"
          },
          {
            "word": "思",
            "start": 119.136,
            "end": 119.303,
            "furigana": "し"
          },
          {
            "word": "議",
            "start": 119.303,
            "end": 120.166,
            "furigana": "ぎ"
          }
        ]
      },
      {
        "verseStart": 120.166,
        "verseEnd": 122.512,
        "words": [
          {
            "word": "Life",
            "start": 120.166,
            "end": 120.497
          },
          {
            "word": "is",
            "start": 120.497,
            "end": 120.704
          },
          {
            "word": "a",
            "start": 120.704,
            "end": 120.787
          },
          {
            "word": "race,",
            "start": 120.787,
            "end": 121.121
          },
          {
            "word": "that's",
            "start": 121.121,
            "end": 121.411
          },
          {
            "word": "what",
            "start": 121.411,
            "end": 121.699
          },
          {
            "word": "they",
            "start": 121.699,
            "end": 122.024
          },
          {
            "word": "say",
            "start": 122.024,
            "end": 122.512
          }
        ]
      },
      {
        "verseStart": 122.512,
        "verseEnd": 125.201,
        "words": [
          {
            "word": "So",
            "start": 122.512,
            "end": 122.638
          },
          {
            "word": "time",
            "start": 122.638,
            "end": 122.974
          },
          {
            "word": "out,",
            "start": 122.974,
            "end": 123.625
          },
          {
            "word": "and",
            "start": 123.625,
            "end": 123.926
          },
          {
            "word": "look",
            "start": 123.926,
            "end": 124.258
          },
          {
            "word": "around",
            "start": 124.258,
            "end": 125.201
          }
        ]
      },
      {
        "verseStart": 125.201,
        "verseEnd": 127.348,
        "words": [
          {
            "word": "立",
            "start": 125.201,
            "end": 125.488,
            "furigana": "た"
          },
          {
            "word": "ち",
            "start": 125.488,
            "end": 125.611
          },
          {
            "word": "止",
            "start": 125.611,
            "end": 125.736,
            "furigana": "ど"
          },
          {
            "word": "ま",
            "start": 125.736,
            "end": 125.858
          },
          {
            "word": "る",
            "start": 125.858,
            "end": 126.021
          },
          {
            "word": "と",
            "start": 126.021,
            "end": 126.311
          },
          {
            "word": "見",
            "start": 126.311,
            "end": 126.56,
            "furigana": "み"
          },
          {
            "word": "え",
            "start": 126.56,
            "end": 126.767
          },
          {
            "word": "て",
            "start": 126.767,
            "end": 126.934
          },
          {
            "word": "く",
            "start": 126.934,
            "end": 127.058
          },
          {
            "word": "る",
            "start": 127.058,
            "end": 127.348
          }
        ]
      },
      {
        "verseStart": 127.348,
        "verseEnd": 129.597,
        "words": [
          {
            "word": "I",
            "start": 127.348,
            "end": 127.682
          },
          {
            "word": "see",
            "start": 127.682,
            "end": 128.214
          },
          {
            "word": "it",
            "start": 128.214,
            "end": 128.501
          },
          {
            "word": "now",
            "start": 128.501,
            "end": 129.597
          }
        ]
      },
      {
        "verseStart": 129.597,
        "verseEnd": 133.467,
        "words": [
          {
            "word": "(Take",
            "start": 129.597,
            "end": 129.659
          },
          {
            "word": "a",
            "start": 129.659,
            "end": 129.826
          },
          {
            "word": "break!)",
            "start": 129.826,
            "end": 133.467
          }
        ]
      },
      {
        "verseStart": 133.467,
        "verseEnd": 136.581,
        "words": [
          {
            "word": "\"Hey,",
            "start": 133.467,
            "end": 133.636
          },
          {
            "word": "you've",
            "start": 133.636,
            "end": 133.8
          },
          {
            "word": "reached",
            "start": 133.8,
            "end": 133.922
          },
          {
            "word": "Gus",
            "start": 133.922,
            "end": 134.043
          },
          {
            "word": "and",
            "start": 134.043,
            "end": 134.492
          },
          {
            "word": "Jamie",
            "start": 134.492,
            "end": 134.777
          },
          {
            "word": "from",
            "start": 134.777,
            "end": 135.395
          },
          {
            "word": "KKB",
            "start": 135.395,
            "end": 136.581
          }
        ]
      },
      {
        "verseStart": 136.581,
        "verseEnd": 137.614,
        "words": [
          {
            "word": "We're",
            "start": 136.581,
            "end": 136.703
          },
          {
            "word": "recording",
            "start": 136.703,
            "end": 137.03
          },
          {
            "word": "right",
            "start": 137.03,
            "end": 137.238
          },
          {
            "word": "now",
            "start": 137.238,
            "end": 137.614
          }
        ]
      },
      {
        "verseStart": 137.614,
        "verseEnd": 140.542,
        "words": [
          {
            "word": "So",
            "start": 137.614,
            "end": 137.818
          },
          {
            "word": "leave",
            "start": 137.818,
            "end": 137.941
          },
          {
            "word": "your",
            "start": 137.941,
            "end": 138.066
          },
          {
            "word": "message",
            "start": 138.066,
            "end": 138.687
          },
          {
            "word": "after",
            "start": 138.687,
            "end": 139.142
          },
          {
            "word": "the",
            "start": 139.142,
            "end": 139.265
          },
          {
            "word": "beep\"",
            "start": 139.265,
            "end": 140.542
          }
        ]
      },
      {
        "verseStart": 140.542,
        "verseEnd": 143.227,
        "words": [
          {
            "word": "Yo,",
            "start": 140.542,
            "end": 141.044
          },
          {
            "word": "Gus",
            "start": 141.044,
            "end": 141.249
          },
          {
            "word": "and",
            "start": 141.249,
            "end": 141.539
          },
          {
            "word": "Jamie,",
            "start": 141.539,
            "end": 142.194
          },
          {
            "word": "it's",
            "start": 142.194,
            "end": 142.322
          },
          {
            "word": "Sarah",
            "start": 142.322,
            "end": 143.227
          }
        ]
      },
      {
        "verseStart": 143.227,
        "verseEnd": 146.221,
        "words": [
          {
            "word": "Just",
            "start": 143.227,
            "end": 143.432
          },
          {
            "word": "to",
            "start": 143.432,
            "end": 143.594
          },
          {
            "word": "let",
            "start": 143.594,
            "end": 143.717
          },
          {
            "word": "you",
            "start": 143.717,
            "end": 143.881
          },
          {
            "word": "know",
            "start": 143.881,
            "end": 144.165
          },
          {
            "word": "that",
            "start": 144.165,
            "end": 144.288
          },
          {
            "word": "I",
            "start": 144.288,
            "end": 144.369
          },
          {
            "word": "don't",
            "start": 144.369,
            "end": 144.491
          },
          {
            "word": "wanna",
            "start": 144.491,
            "end": 144.618
          },
          {
            "word": "do",
            "start": 144.618,
            "end": 144.784
          },
          {
            "word": "anything",
            "start": 144.784,
            "end": 145.234
          },
          {
            "word": "today",
            "start": 145.234,
            "end": 146.221
          }
        ]
      },
      {
        "verseStart": 146.221,
        "verseEnd": 149.182,
        "words": [
          {
            "word": "So",
            "start": 146.221,
            "end": 146.384
          },
          {
            "word": "I'll",
            "start": 146.384,
            "end": 146.588
          },
          {
            "word": "see",
            "start": 146.588,
            "end": 146.755
          },
          {
            "word": "you",
            "start": 146.755,
            "end": 146.921
          },
          {
            "word": "later,",
            "start": 146.921,
            "end": 147.662
          },
          {
            "word": "bye!",
            "start": 147.662,
            "end": 149.182
          }
        ]
      },
      {
        "verseStart": 149.182,
        "verseEnd": 151.639,
        "words": [
          {
            "word": "I",
            "start": 149.182,
            "end": 149.47
          },
          {
            "word": "know",
            "start": 149.47,
            "end": 149.763
          },
          {
            "word": "it",
            "start": 149.763,
            "end": 150.049
          },
          {
            "word": "seems",
            "start": 150.049,
            "end": 150.416
          },
          {
            "word": "kinda",
            "start": 150.416,
            "end": 150.985
          },
          {
            "word": "tough",
            "start": 150.985,
            "end": 151.639
          }
        ]
      },
      {
        "verseStart": 151.639,
        "verseEnd": 154.212,
        "words": [
          {
            "word": "But",
            "start": 151.639,
            "end": 151.926
          },
          {
            "word": "really",
            "start": 151.926,
            "end": 152.212
          },
          {
            "word": "it's",
            "start": 152.212,
            "end": 152.541
          },
          {
            "word": "easy",
            "start": 152.541,
            "end": 153.153
          },
          {
            "word": "enough",
            "start": 153.153,
            "end": 154.212
          }
        ]
      },
      {
        "verseStart": 154.212,
        "verseEnd": 156.655,
        "words": [
          {
            "word": "For",
            "start": 154.212,
            "end": 154.498
          },
          {
            "word": "us",
            "start": 154.498,
            "end": 154.751
          },
          {
            "word": "to",
            "start": 154.751,
            "end": 155.038
          },
          {
            "word": "slow",
            "start": 155.038,
            "end": 155.367
          },
          {
            "word": "down",
            "start": 155.367,
            "end": 155.699
          },
          {
            "word": "the",
            "start": 155.699,
            "end": 155.986
          },
          {
            "word": "pace",
            "start": 155.986,
            "end": 156.655
          }
        ]
      },
      {
        "verseStart": 156.655,
        "verseEnd": 159.091,
        "words": [
          {
            "word": "So",
            "start": 156.655,
            "end": 156.991
          },
          {
            "word": "we",
            "start": 156.991,
            "end": 157.2
          },
          {
            "word": "could",
            "start": 157.2,
            "end": 157.327
          },
          {
            "word": "all",
            "start": 157.327,
            "end": 157.616
          },
          {
            "word": "go",
            "start": 157.616,
            "end": 157.866
          },
          {
            "word": "take",
            "start": 157.866,
            "end": 158.19
          },
          {
            "word": "a",
            "start": 158.19,
            "end": 158.517
          },
          {
            "word": "break",
            "start": 158.517,
            "end": 159.091
          }
        ]
      },
      {
        "verseStart": 159.091,
        "verseEnd": 164.134,
        "words": [
          {
            "word": "In",
            "start": 159.091,
            "end": 159.381
          },
          {
            "word": "fact,",
            "start": 159.381,
            "end": 159.756
          },
          {
            "word": "there's",
            "start": 159.756,
            "end": 160
          },
          {
            "word": "not",
            "start": 160,
            "end": 160.617
          },
          {
            "word": "much",
            "start": 160.617,
            "end": 161.228
          },
          {
            "word": "better",
            "start": 161.228,
            "end": 161.881
          },
          {
            "word": "than",
            "start": 161.881,
            "end": 162.535
          },
          {
            "word": "nothing",
            "start": 162.535,
            "end": 163.154
          },
          {
            "word": "at",
            "start": 163.154,
            "end": 163.359
          },
          {
            "word": "all",
            "start": 163.359,
            "end": 164.134
          }
        ]
      },
      {
        "verseStart": 164.134,
        "verseEnd": 166.624,
        "words": [
          {
            "word": "And",
            "start": 164.134,
            "end": 164.426
          },
          {
            "word": "that's",
            "start": 164.426,
            "end": 164.683
          },
          {
            "word": "especially",
            "start": 164.683,
            "end": 165.958
          },
          {
            "word": "true",
            "start": 165.958,
            "end": 166.624
          }
        ]
      },
      {
        "verseStart": 166.624,
        "verseEnd": 170.126,
        "words": [
          {
            "word": "When",
            "start": 166.624,
            "end": 166.869
          },
          {
            "word": "there",
            "start": 166.869,
            "end": 167.543
          },
          {
            "word": "is",
            "start": 167.543,
            "end": 168.168
          },
          {
            "word": "something",
            "start": 168.168,
            "end": 168.413
          },
          {
            "word": "to",
            "start": 168.413,
            "end": 168.738
          },
          {
            "word": "do",
            "start": 168.738,
            "end": 170.126
          }
        ]
      },
      {
        "verseStart": 170.126,
        "verseEnd": 175.117,
        "words": [
          {
            "word": "Just",
            "start": 170.126,
            "end": 170.379
          },
          {
            "word": "move",
            "start": 170.379,
            "end": 170.671
          },
          {
            "word": "very",
            "start": 170.671,
            "end": 171.128
          },
          {
            "word": "slowly",
            "start": 171.128,
            "end": 171.714
          },
          {
            "word": "to",
            "start": 171.714,
            "end": 171.922
          },
          {
            "word": "the",
            "start": 171.922,
            "end": 172.047
          },
          {
            "word": "beat",
            "start": 172.047,
            "end": 172.658
          },
          {
            "word": "(a-yo,",
            "start": 172.658,
            "end": 173.598
          },
          {
            "word": "a-a-yo-o)",
            "start": 173.598,
            "end": 175.117
          }
        ]
      },
      {
        "verseStart": 175.117,
        "verseEnd": 180.167,
        "words": [
          {
            "word": "Now",
            "start": 175.117,
            "end": 175.405
          },
          {
            "word": "get",
            "start": 175.405,
            "end": 175.738
          },
          {
            "word": "down",
            "start": 175.738,
            "end": 176.026
          },
          {
            "word": "and",
            "start": 176.026,
            "end": 176.321
          },
          {
            "word": "put",
            "start": 176.321,
            "end": 176.658
          },
          {
            "word": "up",
            "start": 176.658,
            "end": 176.904
          },
          {
            "word": "your",
            "start": 176.904,
            "end": 177.028
          },
          {
            "word": "feet",
            "start": 177.028,
            "end": 177.65
          },
          {
            "word": "(a-yo,",
            "start": 177.65,
            "end": 178.553
          },
          {
            "word": "a-a-yo-o)",
            "start": 178.553,
            "end": 180.167
          }
        ]
      },
      {
        "verseStart": 180.167,
        "verseEnd": 185.118,
        "words": [
          {
            "word": "If",
            "start": 180.167,
            "end": 180.374
          },
          {
            "word": "you",
            "start": 180.374,
            "end": 180.497
          },
          {
            "word": "like",
            "start": 180.497,
            "end": 180.742
          },
          {
            "word": "to",
            "start": 180.742,
            "end": 180.824
          },
          {
            "word": "lounge,",
            "start": 180.824,
            "end": 181.313
          },
          {
            "word": "relax,",
            "start": 181.313,
            "end": 181.763
          },
          {
            "word": "or",
            "start": 181.763,
            "end": 182.012
          },
          {
            "word": "flop",
            "start": 182.012,
            "end": 182.583
          },
          {
            "word": "(a-yo,",
            "start": 182.583,
            "end": 183.602
          },
          {
            "word": "a-a-yo-o)",
            "start": 183.602,
            "end": 185.118
          }
        ]
      },
      {
        "verseStart": 185.118,
        "verseEnd": 190.516,
        "words": [
          {
            "word": "Doesn't",
            "start": 185.118,
            "end": 185.363
          },
          {
            "word": "really",
            "start": 185.363,
            "end": 185.689
          },
          {
            "word": "matter",
            "start": 185.689,
            "end": 186.056
          },
          {
            "word": "when",
            "start": 186.056,
            "end": 186.259
          },
          {
            "word": "you're",
            "start": 186.259,
            "end": 186.423
          },
          {
            "word": "doing",
            "start": 186.423,
            "end": 186.952
          },
          {
            "word": "squat",
            "start": 186.952,
            "end": 187.528
          },
          {
            "word": "(a-yo,",
            "start": 187.528,
            "end": 188.516
          },
          {
            "word": "a-yo)",
            "start": 188.516,
            "end": 0
          }
        ]
      }
    ]
  },
  "A Vida É Desafio.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 8.735,
        "verseEnd": 12.048,
        "translation": "I’ve always been a dreamer, that’s what keeps me alive",
        "words": [
          {
            "word": "Sempre",
            "start": 8.735,
            "end": 8.898
          },
          {
            "word": "fui",
            "start": 8.898,
            "end": 9.062
          },
          {
            "word": "sonhador,",
            "start": 9.062,
            "end": 10.201
          },
          {
            "word": "é",
            "start": 10.201,
            "end": 10.324
          },
          {
            "word": "isso",
            "start": 10.324,
            "end": 10.445
          },
          {
            "word": "que",
            "start": 10.445,
            "end": 10.656
          },
          {
            "word": "me",
            "start": 10.656,
            "end": 10.861
          },
          {
            "word": "mantém",
            "start": 10.861,
            "end": 11.108
          },
          {
            "word": "vivo",
            "start": 11.108,
            "end": 12.048
          }
        ]
      },
      {
        "verseStart": 12.048,
        "verseEnd": 16.755,
        "translation": "When I was a kid, my dream was to be a footballer, check it out",
        "words": [
          {
            "word": "Quando",
            "start": 12.048,
            "end": 12.252
          },
          {
            "word": "pivete,",
            "start": 12.252,
            "end": 13.228
          },
          {
            "word": "meu",
            "start": 13.228,
            "end": 13.392
          },
          {
            "word": "sonho",
            "start": 13.392,
            "end": 13.515
          },
          {
            "word": "era",
            "start": 13.515,
            "end": 13.686
          },
          {
            "word": "ser",
            "start": 13.686,
            "end": 13.851
          },
          {
            "word": "jogador",
            "start": 13.851,
            "end": 14.054
          },
          {
            "word": "de",
            "start": 14.054,
            "end": 14.466
          },
          {
            "word": "futebol,",
            "start": 14.466,
            "end": 15.696
          },
          {
            "word": "vai",
            "start": 15.696,
            "end": 15.858
          },
          {
            "word": "vendo",
            "start": 15.858,
            "end": 16.755
          }
        ]
      },
      {
        "verseStart": 16.755,
        "verseEnd": 20.206,
        "translation": "But the system restricts our lives in such a way",
        "words": [
          {
            "word": "Mas",
            "start": 16.755,
            "end": 17.003
          },
          {
            "word": "o",
            "start": 17.003,
            "end": 17.341
          },
          {
            "word": "sistema",
            "start": 17.341,
            "end": 17.585
          },
          {
            "word": "limita",
            "start": 17.585,
            "end": 18.155
          },
          {
            "word": "nossa",
            "start": 18.155,
            "end": 18.324
          },
          {
            "word": "vida",
            "start": 18.324,
            "end": 18.529
          },
          {
            "word": "de",
            "start": 18.529,
            "end": 18.776
          },
          {
            "word": "tal",
            "start": 18.776,
            "end": 19.061
          },
          {
            "word": "forma",
            "start": 19.061,
            "end": 20.206
          }
        ]
      },
      {
        "verseStart": 20.206,
        "verseEnd": 23.89,
        "translation": "That I had to make my choice: Dream or survive",
        "words": [
          {
            "word": "Que",
            "start": 20.206,
            "end": 20.328
          },
          {
            "word": "tive",
            "start": 20.328,
            "end": 20.497
          },
          {
            "word": "que",
            "start": 20.497,
            "end": 20.619
          },
          {
            "word": "fazer",
            "start": 20.619,
            "end": 20.783
          },
          {
            "word": "minha",
            "start": 20.783,
            "end": 20.948
          },
          {
            "word": "escolha:",
            "start": 20.948,
            "end": 21.888
          },
          {
            "word": "Sonhar",
            "start": 21.888,
            "end": 22.872
          },
          {
            "word": "ou",
            "start": 22.872,
            "end": 22.953
          },
          {
            "word": "sobreviver",
            "start": 22.953,
            "end": 23.89
          }
        ]
      },
      {
        "verseStart": 23.89,
        "verseEnd": 28.551,
        "translation": "Years went by and I dodged the vicious cycle",
        "words": [
          {
            "word": "Os",
            "start": 23.89,
            "end": 24.177
          },
          {
            "word": "anos",
            "start": 24.177,
            "end": 24.461
          },
          {
            "word": "se",
            "start": 24.461,
            "end": 24.706
          },
          {
            "word": "passaram",
            "start": 24.706,
            "end": 25.316
          },
          {
            "word": "e",
            "start": 25.316,
            "end": 25.484
          },
          {
            "word": "eu",
            "start": 25.484,
            "end": 25.645
          },
          {
            "word": "fui",
            "start": 25.645,
            "end": 25.937
          },
          {
            "word": "me",
            "start": 25.937,
            "end": 26.141
          },
          {
            "word": "esquivando",
            "start": 26.141,
            "end": 26.635
          },
          {
            "word": "do",
            "start": 26.635,
            "end": 26.84
          },
          {
            "word": "ciclo",
            "start": 26.84,
            "end": 27.209
          },
          {
            "word": "vicioso",
            "start": 27.209,
            "end": 28.551
          }
        ]
      },
      {
        "verseStart": 28.551,
        "verseEnd": 31.574,
        "translation": "However, capitalism forced me to be successful",
        "words": [
          {
            "word": "Porém,",
            "start": 28.551,
            "end": 28.878
          },
          {
            "word": "o",
            "start": 28.878,
            "end": 29.041
          },
          {
            "word": "capitalismo",
            "start": 29.041,
            "end": 29.205
          },
          {
            "word": "me",
            "start": 29.205,
            "end": 29.449
          },
          {
            "word": "obrigou",
            "start": 29.449,
            "end": 29.733
          },
          {
            "word": "a",
            "start": 29.733,
            "end": 30.065
          },
          {
            "word": "ser",
            "start": 30.065,
            "end": 30.228
          },
          {
            "word": "bem",
            "start": 30.228,
            "end": 30.473
          },
          {
            "word": "sucedido",
            "start": 30.473,
            "end": 31.574
          }
        ]
      },
      {
        "verseStart": 31.574,
        "verseEnd": 34.976,
        "translation": "I reckon every poor man's dream is to be rich",
        "words": [
          {
            "word": "Acredito",
            "start": 31.574,
            "end": 31.983
          },
          {
            "word": "que",
            "start": 31.983,
            "end": 32.307
          },
          {
            "word": "o",
            "start": 32.307,
            "end": 32.471
          },
          {
            "word": "sonho",
            "start": 32.471,
            "end": 32.715
          },
          {
            "word": "de",
            "start": 32.715,
            "end": 32.963
          },
          {
            "word": "todo",
            "start": 32.963,
            "end": 33.25
          },
          {
            "word": "pobre",
            "start": 33.25,
            "end": 33.496
          },
          {
            "word": "é",
            "start": 33.496,
            "end": 33.7
          },
          {
            "word": "ser",
            "start": 33.7,
            "end": 34.075
          },
          {
            "word": "rico",
            "start": 34.075,
            "end": 34.976
          }
        ]
      },
      {
        "verseStart": 34.976,
        "verseEnd": 36.975,
        "translation": "In pursuit of my dream of consumption",
        "words": [
          {
            "word": "Em",
            "start": 34.976,
            "end": 35.222
          },
          {
            "word": "busca",
            "start": 35.222,
            "end": 35.384
          },
          {
            "word": "do",
            "start": 35.384,
            "end": 35.548
          },
          {
            "word": "meu",
            "start": 35.548,
            "end": 35.711
          },
          {
            "word": "sonho",
            "start": 35.711,
            "end": 35.996
          },
          {
            "word": "de",
            "start": 35.996,
            "end": 36.159
          },
          {
            "word": "consumo",
            "start": 36.159,
            "end": 36.975
          }
        ]
      },
      {
        "verseStart": 36.975,
        "verseEnd": 40.827,
        "translation": "I tried to find a quick and easy fix for my problems:",
        "words": [
          {
            "word": "Procurei",
            "start": 36.975,
            "end": 37.139
          },
          {
            "word": "dar",
            "start": 37.139,
            "end": 37.261
          },
          {
            "word": "uma",
            "start": 37.261,
            "end": 37.465
          },
          {
            "word": "solução",
            "start": 37.465,
            "end": 37.629
          },
          {
            "word": "rápida",
            "start": 37.629,
            "end": 38.163
          },
          {
            "word": "e",
            "start": 38.163,
            "end": 38.327
          },
          {
            "word": "fácil",
            "start": 38.327,
            "end": 39.029
          },
          {
            "word": "pros",
            "start": 39.029,
            "end": 39.193
          },
          {
            "word": "meus",
            "start": 39.193,
            "end": 39.523
          },
          {
            "word": "problemas:",
            "start": 39.523,
            "end": 40.827
          }
        ]
      },
      {
        "verseStart": 40.827,
        "verseEnd": 42.743,
        "translation": "Crime",
        "words": [
          {
            "word": "O",
            "start": 40.827,
            "end": 41.278
          },
          {
            "word": "crime",
            "start": 41.278,
            "end": 42.743
          }
        ]
      },
      {
        "verseStart": 42.743,
        "verseEnd": 44.299,
        "translation": "But it’s cursed money",
        "words": [
          {
            "word": "Mas",
            "start": 42.743,
            "end": 42.866
          },
          {
            "word": "é",
            "start": 42.866,
            "end": 43.028
          },
          {
            "word": "um",
            "start": 43.028,
            "end": 43.275
          },
          {
            "word": "dinheiro",
            "start": 43.275,
            "end": 43.441
          },
          {
            "word": "amaldiçoado",
            "start": 43.441,
            "end": 44.299
          }
        ]
      },
      {
        "verseStart": 44.299,
        "verseEnd": 46.681,
        "translation": "The more I earned, the more I spent",
        "words": [
          {
            "word": "Quanto",
            "start": 44.299,
            "end": 44.463
          },
          {
            "word": "mais",
            "start": 44.463,
            "end": 44.626
          },
          {
            "word": "eu",
            "start": 44.626,
            "end": 44.789
          },
          {
            "word": "ganhava,",
            "start": 44.789,
            "end": 45.278
          },
          {
            "word": "mais",
            "start": 45.278,
            "end": 45.441
          },
          {
            "word": "eu",
            "start": 45.441,
            "end": 45.614
          },
          {
            "word": "gastava",
            "start": 45.614,
            "end": 46.681
          }
        ]
      },
      {
        "verseStart": 46.681,
        "verseEnd": 49.789,
        "translation": "Soon I was charged by the law of nature, blimey",
        "words": [
          {
            "word": "Logo",
            "start": 46.681,
            "end": 46.929
          },
          {
            "word": "fui",
            "start": 46.929,
            "end": 47.134
          },
          {
            "word": "cobrado",
            "start": 47.134,
            "end": 47.298
          },
          {
            "word": "pela",
            "start": 47.298,
            "end": 47.623
          },
          {
            "word": "lei",
            "start": 47.623,
            "end": 47.866
          },
          {
            "word": "da",
            "start": 47.866,
            "end": 48.111
          },
          {
            "word": "natureza,",
            "start": 48.111,
            "end": 48.68
          },
          {
            "word": "vish",
            "start": 48.68,
            "end": 49.789
          }
        ]
      },
      {
        "verseStart": 49.789,
        "verseEnd": 51.999,
        "translation": "14 years behind bars",
        "words": [
          {
            "word": "14",
            "start": 49.789,
            "end": 50.156
          },
          {
            "word": "anos",
            "start": 50.156,
            "end": 50.448
          },
          {
            "word": "de",
            "start": 50.448,
            "end": 50.653
          },
          {
            "word": "reclusão",
            "start": 50.653,
            "end": 51.999
          }
        ]
      },
      {
        "verseStart": 51.999,
        "verseEnd": 53.561,
        "translation": "The game is mad, the game is mad",
        "words": [
          {
            "word": "Barato",
            "start": 51.999,
            "end": 52.165
          },
          {
            "word": "é",
            "start": 52.165,
            "end": 52.33
          },
          {
            "word": "loco,",
            "start": 52.33,
            "end": 52.822
          },
          {
            "word": "barato",
            "start": 52.822,
            "end": 52.984
          },
          {
            "word": "é",
            "start": 52.984,
            "end": 53.191
          },
          {
            "word": "loco",
            "start": 53.191,
            "end": 53.561
          }
        ]
      },
      {
        "verseStart": 53.561,
        "verseEnd": 56.845,
        "translation": "You always gotta believe that the dream is possible",
        "words": [
          {
            "word": "É",
            "start": 53.561,
            "end": 53.769
          },
          {
            "word": "necessário",
            "start": 53.769,
            "end": 53.891
          },
          {
            "word": "sempre",
            "start": 53.891,
            "end": 54.511
          },
          {
            "word": "acreditar",
            "start": 54.511,
            "end": 55.204
          },
          {
            "word": "que",
            "start": 55.204,
            "end": 55.326
          },
          {
            "word": "o",
            "start": 55.326,
            "end": 55.53
          },
          {
            "word": "sonho",
            "start": 55.53,
            "end": 55.857
          },
          {
            "word": "é",
            "start": 55.857,
            "end": 56.066
          },
          {
            "word": "possível",
            "start": 56.066,
            "end": 56.845
          }
        ]
      },
      {
        "verseStart": 56.845,
        "verseEnd": 60.369,
        "translation": "That the sky's the limit and you, mate, are unbeatable",
        "words": [
          {
            "word": "Que",
            "start": 56.845,
            "end": 57.05
          },
          {
            "word": "o",
            "start": 57.05,
            "end": 57.213
          },
          {
            "word": "céu",
            "start": 57.213,
            "end": 57.499
          },
          {
            "word": "é",
            "start": 57.499,
            "end": 57.665
          },
          {
            "word": "o",
            "start": 57.665,
            "end": 57.827
          },
          {
            "word": "limite",
            "start": 57.827,
            "end": 58.154
          },
          {
            "word": "e",
            "start": 58.154,
            "end": 58.401
          },
          {
            "word": "você,",
            "start": 58.401,
            "end": 58.974
          },
          {
            "word": "truta,",
            "start": 58.974,
            "end": 59.178
          },
          {
            "word": "é",
            "start": 59.178,
            "end": 59.385
          },
          {
            "word": "imbatível",
            "start": 59.385,
            "end": 60.369
          }
        ]
      },
      {
        "verseStart": 60.369,
        "verseEnd": 63.607,
        "translation": "That the bad times will pass, it’s just a phase",
        "words": [
          {
            "word": "Que",
            "start": 60.369,
            "end": 60.532
          },
          {
            "word": "o",
            "start": 60.532,
            "end": 60.695
          },
          {
            "word": "tempo",
            "start": 60.695,
            "end": 60.942
          },
          {
            "word": "ruim",
            "start": 60.942,
            "end": 61.434
          },
          {
            "word": "vai",
            "start": 61.434,
            "end": 61.602
          },
          {
            "word": "passar,",
            "start": 61.602,
            "end": 62.095
          },
          {
            "word": "é",
            "start": 62.095,
            "end": 62.258
          },
          {
            "word": "só",
            "start": 62.258,
            "end": 62.543
          },
          {
            "word": "uma",
            "start": 62.543,
            "end": 62.911
          },
          {
            "word": "fase",
            "start": 62.911,
            "end": 63.607
          }
        ]
      },
      {
        "verseStart": 63.607,
        "verseEnd": 66.802,
        "translation": "That the suffering just feeds your courage",
        "words": [
          {
            "word": "Que",
            "start": 63.607,
            "end": 63.77
          },
          {
            "word": "o",
            "start": 63.77,
            "end": 63.934
          },
          {
            "word": "sofrimento",
            "start": 63.934,
            "end": 64.343
          },
          {
            "word": "alimenta",
            "start": 64.343,
            "end": 65.115
          },
          {
            "word": "mais",
            "start": 65.115,
            "end": 65.283
          },
          {
            "word": "a",
            "start": 65.283,
            "end": 65.487
          },
          {
            "word": "sua",
            "start": 65.487,
            "end": 65.653
          },
          {
            "word": "coragem",
            "start": 65.653,
            "end": 66.802
          }
        ]
      },
      {
        "verseStart": 66.802,
        "verseEnd": 69.391,
        "translation": "That your family needs you",
        "words": [
          {
            "word": "Que",
            "start": 66.802,
            "end": 66.964
          },
          {
            "word": "a",
            "start": 66.964,
            "end": 67.171
          },
          {
            "word": "sua",
            "start": 67.171,
            "end": 67.545
          },
          {
            "word": "família",
            "start": 67.545,
            "end": 68.075
          },
          {
            "word": "precisa",
            "start": 68.075,
            "end": 68.532
          },
          {
            "word": "de",
            "start": 68.532,
            "end": 68.694
          },
          {
            "word": "você",
            "start": 68.694,
            "end": 69.391
          }
        ]
      },
      {
        "verseStart": 69.391,
        "verseEnd": 73.149,
        "translation": "Side by side if you win, to back you up if you lose",
        "words": [
          {
            "word": "Lado",
            "start": 69.391,
            "end": 69.594
          },
          {
            "word": "a",
            "start": 69.594,
            "end": 69.763
          },
          {
            "word": "lado",
            "start": 69.763,
            "end": 70.131
          },
          {
            "word": "se",
            "start": 70.131,
            "end": 70.458
          },
          {
            "word": "ganhar",
            "start": 70.458,
            "end": 70.949
          },
          {
            "word": "pra",
            "start": 70.949,
            "end": 71.111
          },
          {
            "word": "te",
            "start": 71.111,
            "end": 71.644
          },
          {
            "word": "apoiar",
            "start": 71.644,
            "end": 72.092
          },
          {
            "word": "se",
            "start": 72.092,
            "end": 72.294
          },
          {
            "word": "perder",
            "start": 72.294,
            "end": 73.149
          }
        ]
      },
      {
        "verseStart": 73.149,
        "verseEnd": 75.86,
        "translation": "I speak of the love between a man, his son and his woman",
        "words": [
          {
            "word": "Falo",
            "start": 73.149,
            "end": 73.355
          },
          {
            "word": "do",
            "start": 73.355,
            "end": 73.564
          },
          {
            "word": "amor",
            "start": 73.564,
            "end": 74.141
          },
          {
            "word": "entre",
            "start": 74.141,
            "end": 74.304
          },
          {
            "word": "homem,",
            "start": 74.304,
            "end": 74.711
          },
          {
            "word": "filho",
            "start": 74.711,
            "end": 74.915
          },
          {
            "word": "e",
            "start": 74.915,
            "end": 75.079
          },
          {
            "word": "mulher",
            "start": 75.079,
            "end": 75.86
          }
        ]
      },
      {
        "verseStart": 75.86,
        "verseEnd": 79.43,
        "translation": "The only universal truth that keeps the faith",
        "words": [
          {
            "word": "A",
            "start": 75.86,
            "end": 76.108
          },
          {
            "word": "única",
            "start": 76.108,
            "end": 76.606
          },
          {
            "word": "verdade",
            "start": 76.606,
            "end": 77.096
          },
          {
            "word": "universal",
            "start": 77.096,
            "end": 77.586
          },
          {
            "word": "que",
            "start": 77.586,
            "end": 77.87
          },
          {
            "word": "mantém",
            "start": 77.87,
            "end": 78.445
          },
          {
            "word": "a",
            "start": 78.445,
            "end": 78.691
          },
          {
            "word": "fé",
            "start": 78.691,
            "end": 79.43
          }
        ]
      },
      {
        "verseStart": 79.43,
        "verseEnd": 82.265,
        "translation": "I look at the kids who are the future and hope",
        "words": [
          {
            "word": "Olho",
            "start": 79.43,
            "end": 79.633
          },
          {
            "word": "as",
            "start": 79.633,
            "end": 79.876
          },
          {
            "word": "crianças",
            "start": 79.876,
            "end": 80.739
          },
          {
            "word": "que",
            "start": 80.739,
            "end": 80.821
          },
          {
            "word": "é",
            "start": 80.821,
            "end": 81.069
          },
          {
            "word": "o",
            "start": 81.069,
            "end": 81.32
          },
          {
            "word": "futuro",
            "start": 81.32,
            "end": 81.487
          },
          {
            "word": "e",
            "start": 81.487,
            "end": 81.69
          },
          {
            "word": "esperança",
            "start": 81.69,
            "end": 82.265
          }
        ]
      },
      {
        "verseStart": 82.265,
        "verseEnd": 85.711,
        "translation": "Who don't yet know, don't feel what hate and greed are",
        "words": [
          {
            "word": "Que",
            "start": 82.265,
            "end": 82.433
          },
          {
            "word": "ainda",
            "start": 82.433,
            "end": 82.641
          },
          {
            "word": "não",
            "start": 82.641,
            "end": 82.803
          },
          {
            "word": "conhecem,",
            "start": 82.803,
            "end": 83.582
          },
          {
            "word": "não",
            "start": 83.582,
            "end": 83.744
          },
          {
            "word": "sentem",
            "start": 83.744,
            "end": 84.233
          },
          {
            "word": "o",
            "start": 84.233,
            "end": 84.395
          },
          {
            "word": "que",
            "start": 84.395,
            "end": 84.567
          },
          {
            "word": "é",
            "start": 84.567,
            "end": 84.73
          },
          {
            "word": "ódio",
            "start": 84.73,
            "end": 84.933
          },
          {
            "word": "e",
            "start": 84.933,
            "end": 85.137
          },
          {
            "word": "ganância",
            "start": 85.137,
            "end": 85.711
          }
        ]
      },
      {
        "verseStart": 85.711,
        "verseEnd": 88.633,
        "translation": "I see the rich man who fears losing his fortune",
        "words": [
          {
            "word": "Eu",
            "start": 85.711,
            "end": 85.916
          },
          {
            "word": "vejo",
            "start": 85.916,
            "end": 86.082
          },
          {
            "word": "o",
            "start": 86.082,
            "end": 86.288
          },
          {
            "word": "rico",
            "start": 86.288,
            "end": 86.782
          },
          {
            "word": "que",
            "start": 86.782,
            "end": 86.947
          },
          {
            "word": "teme",
            "start": 86.947,
            "end": 87.325
          },
          {
            "word": "perder",
            "start": 87.325,
            "end": 87.491
          },
          {
            "word": "a",
            "start": 87.491,
            "end": 87.693
          },
          {
            "word": "fortuna",
            "start": 87.693,
            "end": 88.633
          }
        ]
      },
      {
        "verseStart": 88.633,
        "verseEnd": 92.192,
        "translation": "While the unemployed brother, addicted, sinks",
        "words": [
          {
            "word": "Enquanto",
            "start": 88.633,
            "end": 89.046
          },
          {
            "word": "o",
            "start": 89.046,
            "end": 89.209
          },
          {
            "word": "mano",
            "start": 89.209,
            "end": 89.535
          },
          {
            "word": "desempregado,",
            "start": 89.535,
            "end": 90.472
          },
          {
            "word": "viciado,",
            "start": 90.472,
            "end": 91.295
          },
          {
            "word": "se",
            "start": 91.295,
            "end": 91.458
          },
          {
            "word": "afunda",
            "start": 91.458,
            "end": 92.192
          }
        ]
      },
      {
        "verseStart": 92.192,
        "verseEnd": 95.308,
        "translation": "I speak of the sick (brother), I speak of the healthy (then)",
        "words": [
          {
            "word": "Falo",
            "start": 92.192,
            "end": 92.356
          },
          {
            "word": "do",
            "start": 92.356,
            "end": 92.559
          },
          {
            "word": "enfermo,",
            "start": 92.559,
            "end": 93.259
          },
          {
            "word": "(irmão)",
            "start": 93.259,
            "end": 93.869
          },
          {
            "word": "falo",
            "start": 93.869,
            "end": 94.032
          },
          {
            "word": "do",
            "start": 94.032,
            "end": 94.197
          },
          {
            "word": "são",
            "start": 94.197,
            "end": 94.732
          },
          {
            "word": "(então)",
            "start": 94.732,
            "end": 95.308
          }
        ]
      },
      {
        "verseStart": 95.308,
        "verseEnd": 98.422,
        "translation": "I speak of the street, which to this mad big world",
        "words": [
          {
            "word": "Falo",
            "start": 95.308,
            "end": 95.471
          },
          {
            "word": "da",
            "start": 95.471,
            "end": 95.676
          },
          {
            "word": "rua",
            "start": 95.676,
            "end": 96.214
          },
          {
            "word": "que",
            "start": 96.214,
            "end": 96.459
          },
          {
            "word": "pra",
            "start": 96.459,
            "end": 96.663
          },
          {
            "word": "esse",
            "start": 96.663,
            "end": 96.989
          },
          {
            "word": "louco",
            "start": 96.989,
            "end": 97.567
          },
          {
            "word": "mundão",
            "start": 97.567,
            "end": 98.422
          }
        ]
      },
      {
        "verseStart": 98.422,
        "verseEnd": 101.748,
        "translation": "The path to the cure might just be the disease",
        "words": [
          {
            "word": "Que",
            "start": 98.422,
            "end": 98.625
          },
          {
            "word": "o",
            "start": 98.625,
            "end": 98.995
          },
          {
            "word": "caminho",
            "start": 98.995,
            "end": 99.328
          },
          {
            "word": "da",
            "start": 99.328,
            "end": 99.572
          },
          {
            "word": "cura",
            "start": 99.572,
            "end": 100.019
          },
          {
            "word": "pode",
            "start": 100.019,
            "end": 100.262
          },
          {
            "word": "ser",
            "start": 100.262,
            "end": 100.427
          },
          {
            "word": "a",
            "start": 100.427,
            "end": 100.631
          },
          {
            "word": "doença",
            "start": 100.631,
            "end": 101.748
          }
        ]
      },
      {
        "verseStart": 101.748,
        "verseEnd": 105.065,
        "translation": "That the path of forgiveness is sometimes the sentence",
        "words": [
          {
            "word": "Que",
            "start": 101.748,
            "end": 101.911
          },
          {
            "word": "o",
            "start": 101.911,
            "end": 102.115
          },
          {
            "word": "caminho",
            "start": 102.115,
            "end": 102.566
          },
          {
            "word": "do",
            "start": 102.566,
            "end": 102.77
          },
          {
            "word": "perdão",
            "start": 102.77,
            "end": 103.218
          },
          {
            "word": "às",
            "start": 103.218,
            "end": 103.382
          },
          {
            "word": "vezes",
            "start": 103.382,
            "end": 103.749
          },
          {
            "word": "é",
            "start": 103.749,
            "end": 103.994
          },
          {
            "word": "a",
            "start": 103.994,
            "end": 104.157
          },
          {
            "word": "sentença",
            "start": 104.157,
            "end": 105.065
          }
        ]
      },
      {
        "verseStart": 105.065,
        "verseEnd": 107.961,
        "translation": "Disagreement, beef and fake unity",
        "words": [
          {
            "word": "Desavença,",
            "start": 105.065,
            "end": 105.765
          },
          {
            "word": "treta",
            "start": 105.765,
            "end": 106.299
          },
          {
            "word": "e",
            "start": 106.299,
            "end": 106.668
          },
          {
            "word": "falsa",
            "start": 106.668,
            "end": 106.916
          },
          {
            "word": "união",
            "start": 106.916,
            "end": 107.961
          }
        ]
      },
      {
        "verseStart": 107.961,
        "verseEnd": 111.204,
        "translation": "Ambition is like a veil that blinds the brothers",
        "words": [
          {
            "word": "A",
            "start": 107.961,
            "end": 108.166
          },
          {
            "word": "ambição",
            "start": 108.166,
            "end": 108.779
          },
          {
            "word": "é",
            "start": 108.779,
            "end": 108.942
          },
          {
            "word": "como",
            "start": 108.942,
            "end": 109.23
          },
          {
            "word": "um",
            "start": 109.23,
            "end": 109.561
          },
          {
            "word": "véu",
            "start": 109.561,
            "end": 109.848
          },
          {
            "word": "que",
            "start": 109.848,
            "end": 110.011
          },
          {
            "word": "cega",
            "start": 110.011,
            "end": 110.174
          },
          {
            "word": "os",
            "start": 110.174,
            "end": 110.382
          },
          {
            "word": "irmão",
            "start": 110.382,
            "end": 111.204
          }
        ]
      },
      {
        "verseStart": 111.204,
        "verseEnd": 114.407,
        "translation": "Just like a car driven on the road of life",
        "words": [
          {
            "word": "Que",
            "start": 111.204,
            "end": 111.408
          },
          {
            "word": "nem",
            "start": 111.408,
            "end": 111.613
          },
          {
            "word": "um",
            "start": 111.613,
            "end": 111.818
          },
          {
            "word": "carro",
            "start": 111.818,
            "end": 112.268
          },
          {
            "word": "guiado",
            "start": 112.268,
            "end": 112.761
          },
          {
            "word": "na",
            "start": 112.761,
            "end": 112.968
          },
          {
            "word": "estrada",
            "start": 112.968,
            "end": 113.545
          },
          {
            "word": "da",
            "start": 113.545,
            "end": 113.709
          },
          {
            "word": "vida",
            "start": 113.709,
            "end": 114.407
          }
        ]
      },
      {
        "verseStart": 114.407,
        "verseEnd": 117.633,
        "translation": "Without headlights in the desert of lost darkness",
        "words": [
          {
            "word": "Sem",
            "start": 114.407,
            "end": 114.652
          },
          {
            "word": "farol",
            "start": 114.652,
            "end": 115.267
          },
          {
            "word": "no",
            "start": 115.267,
            "end": 115.471
          },
          {
            "word": "deserto",
            "start": 115.471,
            "end": 116.125
          },
          {
            "word": "das",
            "start": 116.125,
            "end": 116.288
          },
          {
            "word": "trevas",
            "start": 116.288,
            "end": 116.736
          },
          {
            "word": "perdidas",
            "start": 116.736,
            "end": 117.633
          }
        ]
      },
      {
        "verseStart": 117.633,
        "verseEnd": 120.713,
        "translation": "I was an orgy, drunk, crazy, but today I walk sober",
        "words": [
          {
            "word": "Eu",
            "start": 117.633,
            "end": 117.836
          },
          {
            "word": "fui",
            "start": 117.836,
            "end": 117.961
          },
          {
            "word": "orgia,",
            "start": 117.961,
            "end": 118.66
          },
          {
            "word": "ébrio,",
            "start": 118.66,
            "end": 118.946
          },
          {
            "word": "louco,",
            "start": 118.946,
            "end": 119.314
          },
          {
            "word": "mas",
            "start": 119.314,
            "end": 119.479
          },
          {
            "word": "hoje",
            "start": 119.479,
            "end": 119.893
          },
          {
            "word": "ando",
            "start": 119.893,
            "end": 120.055
          },
          {
            "word": "sóbrio",
            "start": 120.055,
            "end": 120.713
          }
        ]
      },
      {
        "verseStart": 120.713,
        "verseEnd": 123.89,
        "translation": "I put away the revolver when you speak to me of hate",
        "words": [
          {
            "word": "Guardo",
            "start": 120.713,
            "end": 120.963
          },
          {
            "word": "o",
            "start": 120.963,
            "end": 121.169
          },
          {
            "word": "revólver",
            "start": 121.169,
            "end": 121.622
          },
          {
            "word": "quando",
            "start": 121.622,
            "end": 121.954
          },
          {
            "word": "você",
            "start": 121.954,
            "end": 122.409
          },
          {
            "word": "me",
            "start": 122.409,
            "end": 122.783
          },
          {
            "word": "fala",
            "start": 122.783,
            "end": 123.029
          },
          {
            "word": "em",
            "start": 123.029,
            "end": 123.233
          },
          {
            "word": "ódio",
            "start": 123.233,
            "end": 123.89
          }
        ]
      },
      {
        "verseStart": 123.89,
        "verseEnd": 127.169,
        "translation": "I see the body, the mind, the soul, the spirit",
        "words": [
          {
            "word": "Eu",
            "start": 123.89,
            "end": 124.094
          },
          {
            "word": "vejo",
            "start": 124.094,
            "end": 124.258
          },
          {
            "word": "o",
            "start": 124.258,
            "end": 124.461
          },
          {
            "word": "corpo,",
            "start": 124.461,
            "end": 124.916
          },
          {
            "word": "a",
            "start": 124.916,
            "end": 125.079
          },
          {
            "word": "mente,",
            "start": 125.079,
            "end": 125.528
          },
          {
            "word": "a",
            "start": 125.528,
            "end": 125.692
          },
          {
            "word": "alma,",
            "start": 125.692,
            "end": 126.099
          },
          {
            "word": "o",
            "start": 126.099,
            "end": 126.223
          },
          {
            "word": "espírito",
            "start": 126.223,
            "end": 127.169
          }
        ]
      },
      {
        "verseStart": 127.169,
        "verseEnd": 130.22,
        "translation": "I hear the beat and what’s said there in the lyric chant",
        "words": [
          {
            "word": "Ouço",
            "start": 127.169,
            "end": 127.332
          },
          {
            "word": "o",
            "start": 127.332,
            "end": 127.497
          },
          {
            "word": "repente",
            "start": 127.497,
            "end": 127.95
          },
          {
            "word": "e",
            "start": 127.95,
            "end": 128.112
          },
          {
            "word": "o",
            "start": 128.112,
            "end": 128.276
          },
          {
            "word": "que",
            "start": 128.276,
            "end": 128.445
          },
          {
            "word": "diz",
            "start": 128.445,
            "end": 128.813
          },
          {
            "word": "lá",
            "start": 128.813,
            "end": 128.977
          },
          {
            "word": "no",
            "start": 128.977,
            "end": 129.185
          },
          {
            "word": "canto",
            "start": 129.185,
            "end": 129.434
          },
          {
            "word": "lírico",
            "start": 129.434,
            "end": 130.22
          }
        ]
      },
      {
        "verseStart": 130.22,
        "verseEnd": 133.257,
        "translation": "I speak of the brain and the heart",
        "words": [
          {
            "word": "Falo",
            "start": 130.22,
            "end": 130.423
          },
          {
            "word": "do",
            "start": 130.423,
            "end": 130.628
          },
          {
            "word": "cérebro",
            "start": 130.628,
            "end": 131.329
          },
          {
            "word": "e",
            "start": 131.329,
            "end": 131.534
          },
          {
            "word": "do",
            "start": 131.534,
            "end": 131.779
          },
          {
            "word": "coração",
            "start": 131.779,
            "end": 133.257
          }
        ]
      },
      {
        "verseStart": 133.257,
        "verseEnd": 136.616,
        "translation": "I see selfishness, prejudice from brother to brother",
        "words": [
          {
            "word": "Vejo",
            "start": 133.257,
            "end": 133.545
          },
          {
            "word": "egoísmo,",
            "start": 133.545,
            "end": 134.371
          },
          {
            "word": "preconceito",
            "start": 134.371,
            "end": 135.063
          },
          {
            "word": "de",
            "start": 135.063,
            "end": 135.226
          },
          {
            "word": "irmão",
            "start": 135.226,
            "end": 135.675
          },
          {
            "word": "pra",
            "start": 135.675,
            "end": 135.837
          },
          {
            "word": "irmão",
            "start": 135.837,
            "end": 136.616
          }
        ]
      },
      {
        "verseStart": 136.616,
        "verseEnd": 139.791,
        "translation": "Life isn't the problem, it's a battle, a challenge",
        "words": [
          {
            "word": "A",
            "start": 136.616,
            "end": 136.819
          },
          {
            "word": "vida",
            "start": 136.819,
            "end": 136.987
          },
          {
            "word": "não",
            "start": 136.987,
            "end": 137.191
          },
          {
            "word": "é",
            "start": 137.191,
            "end": 137.395
          },
          {
            "word": "o",
            "start": 137.395,
            "end": 137.61
          },
          {
            "word": "problema,",
            "start": 137.61,
            "end": 138.187
          },
          {
            "word": "é",
            "start": 138.187,
            "end": 138.308
          },
          {
            "word": "batalha,",
            "start": 138.308,
            "end": 138.886
          },
          {
            "word": "desafio",
            "start": 138.886,
            "end": 139.791
          }
        ]
      },
      {
        "verseStart": 139.791,
        "verseEnd": 142.988,
        "translation": "Every obstacle is a lesson, I announce",
        "words": [
          {
            "word": "Cada",
            "start": 139.791,
            "end": 139.957
          },
          {
            "word": "obstáculo",
            "start": 139.957,
            "end": 140.775
          },
          {
            "word": "é",
            "start": 140.775,
            "end": 141.02
          },
          {
            "word": "uma",
            "start": 141.02,
            "end": 141.305
          },
          {
            "word": "lição,",
            "start": 141.305,
            "end": 141.72
          },
          {
            "word": "eu",
            "start": 141.72,
            "end": 141.927
          },
          {
            "word": "anuncio",
            "start": 141.927,
            "end": 142.988
          }
        ]
      },
      {
        "verseStart": 142.988,
        "verseEnd": 146.179,
        "translation": "That's right, you can't stop",
        "words": [
          {
            "word": "É",
            "start": 142.988,
            "end": 143.113
          },
          {
            "word": "isso",
            "start": 143.113,
            "end": 143.316
          },
          {
            "word": "aí,",
            "start": 143.316,
            "end": 143.686
          },
          {
            "word": "você",
            "start": 143.686,
            "end": 144.133
          },
          {
            "word": "não",
            "start": 144.133,
            "end": 144.256
          },
          {
            "word": "pode",
            "start": 144.256,
            "end": 144.664
          },
          {
            "word": "parar",
            "start": 144.664,
            "end": 146.179
          }
        ]
      },
      {
        "verseStart": 146.179,
        "verseEnd": 149.214,
        "translation": "Wait for the bad times to come embrace you",
        "words": [
          {
            "word": "Esperar",
            "start": 146.179,
            "end": 146.885
          },
          {
            "word": "o",
            "start": 146.885,
            "end": 147.007
          },
          {
            "word": "tempo",
            "start": 147.007,
            "end": 147.415
          },
          {
            "word": "ruim",
            "start": 147.415,
            "end": 147.863
          },
          {
            "word": "vir",
            "start": 147.863,
            "end": 148.026
          },
          {
            "word": "te",
            "start": 148.026,
            "end": 148.274
          },
          {
            "word": "abraçar",
            "start": 148.274,
            "end": 149.214
          }
        ]
      },
      {
        "verseStart": 149.214,
        "verseEnd": 153.248,
        "translation": "Believe that dreaming is always necessary",
        "words": [
          {
            "word": "Acreditar",
            "start": 149.214,
            "end": 150.111
          },
          {
            "word": "que",
            "start": 150.111,
            "end": 150.315
          },
          {
            "word": "sonhar",
            "start": 150.315,
            "end": 150.86
          },
          {
            "word": "sempre",
            "start": 150.86,
            "end": 151.064
          },
          {
            "word": "é",
            "start": 151.064,
            "end": 151.268
          },
          {
            "word": "preciso",
            "start": 151.268,
            "end": 153.248
          }
        ]
      },
      {
        "verseStart": 153.248,
        "verseEnd": 154.756,
        "translation": "It's what keeps the brothers alive",
        "words": [
          {
            "word": "É",
            "start": 153.248,
            "end": 153.41
          },
          {
            "word": "o",
            "start": 153.41,
            "end": 153.615
          },
          {
            "word": "que",
            "start": 153.615,
            "end": 153.778
          },
          {
            "word": "mantém",
            "start": 153.778,
            "end": 153.94
          },
          {
            "word": "os",
            "start": 153.94,
            "end": 154.43
          },
          {
            "word": "irmãos",
            "start": 154.43,
            "end": 154.674
          },
          {
            "word": "vivos",
            "start": 154.674,
            "end": 154.756
          }
        ]
      },
      {
        "verseStart": 154.756,
        "verseEnd": 157.129,
        "translation": "Several families, several shacks",
        "words": [
          {
            "word": "Várias",
            "start": 154.756,
            "end": 155.454
          },
          {
            "word": "famílias,",
            "start": 155.454,
            "end": 156.025
          },
          {
            "word": "vários",
            "start": 156.025,
            "end": 156.519
          },
          {
            "word": "barracos",
            "start": 156.519,
            "end": 157.129
          }
        ]
      },
      {
        "verseStart": 157.129,
        "verseEnd": 158.807,
        "translation": "A pregnant girl",
        "words": [
          {
            "word": "Uma",
            "start": 157.129,
            "end": 157.293
          },
          {
            "word": "mina",
            "start": 157.293,
            "end": 158.028
          },
          {
            "word": "grávida",
            "start": 158.028,
            "end": 158.807
          }
        ]
      },
      {
        "verseStart": 158.807,
        "verseEnd": 161.223,
        "translation": "And the lad is locked up in there",
        "words": [
          {
            "word": "E",
            "start": 158.807,
            "end": 158.971
          },
          {
            "word": "o",
            "start": 158.971,
            "end": 159.215
          },
          {
            "word": "mano",
            "start": 159.215,
            "end": 159.547
          },
          {
            "word": "tá",
            "start": 159.547,
            "end": 159.832
          },
          {
            "word": "lá",
            "start": 159.832,
            "end": 160.53
          },
          {
            "word": "trancafiado",
            "start": 160.53,
            "end": 161.223
          }
        ]
      },
      {
        "verseStart": 161.223,
        "verseEnd": 164.207,
        "translation": "He dreams straight up of freedom",
        "words": [
          {
            "word": "Ele",
            "start": 161.223,
            "end": 161.631
          },
          {
            "word": "sonha",
            "start": 161.631,
            "end": 161.917
          },
          {
            "word": "na",
            "start": 161.917,
            "end": 162.206
          },
          {
            "word": "direta",
            "start": 162.206,
            "end": 162.858
          },
          {
            "word": "com",
            "start": 162.858,
            "end": 163.102
          },
          {
            "word": "a",
            "start": 163.102,
            "end": 163.347
          },
          {
            "word": "liberdade",
            "start": 163.347,
            "end": 164.207
          }
        ]
      },
      {
        "verseStart": 164.207,
        "verseEnd": 168.42,
        "translation": "He dreams of one day going back to the streets far from the wickedness",
        "words": [
          {
            "word": "Ele",
            "start": 164.207,
            "end": 164.495
          },
          {
            "word": "sonha",
            "start": 164.495,
            "end": 165.071
          },
          {
            "word": "em",
            "start": 165.071,
            "end": 165.235
          },
          {
            "word": "um",
            "start": 165.235,
            "end": 165.438
          },
          {
            "word": "dia",
            "start": 165.438,
            "end": 165.888
          },
          {
            "word": "voltar",
            "start": 165.888,
            "end": 166.092
          },
          {
            "word": "pra",
            "start": 166.092,
            "end": 166.418
          },
          {
            "word": "rua",
            "start": 166.418,
            "end": 166.907
          },
          {
            "word": "longe",
            "start": 166.907,
            "end": 167.233
          },
          {
            "word": "da",
            "start": 167.233,
            "end": 167.482
          },
          {
            "word": "maldade",
            "start": 167.482,
            "end": 168.42
          }
        ]
      },
      {
        "verseStart": 168.42,
        "verseEnd": 170.49,
        "translation": "In the big city it's like this",
        "words": [
          {
            "word": "Na",
            "start": 168.42,
            "end": 168.664
          },
          {
            "word": "cidade",
            "start": 168.664,
            "end": 169.075
          },
          {
            "word": "grande",
            "start": 169.075,
            "end": 169.58
          },
          {
            "word": "é",
            "start": 169.58,
            "end": 169.907
          },
          {
            "word": "assim",
            "start": 169.907,
            "end": 170.49
          }
        ]
      },
      {
        "verseStart": 170.49,
        "verseEnd": 174.551,
        "translation": "You expect good weather and all that comes is bad weather",
        "words": [
          {
            "word": "Você",
            "start": 170.49,
            "end": 170.735
          },
          {
            "word": "espera",
            "start": 170.735,
            "end": 171.109
          },
          {
            "word": "tempo",
            "start": 171.109,
            "end": 171.885
          },
          {
            "word": "bom",
            "start": 171.885,
            "end": 172.417
          },
          {
            "word": "e",
            "start": 172.417,
            "end": 172.58
          },
          {
            "word": "o",
            "start": 172.58,
            "end": 172.743
          },
          {
            "word": "que",
            "start": 172.743,
            "end": 172.906
          },
          {
            "word": "vem",
            "start": 172.906,
            "end": 173.19
          },
          {
            "word": "é",
            "start": 173.19,
            "end": 173.353
          },
          {
            "word": "só",
            "start": 173.353,
            "end": 173.522
          },
          {
            "word": "tempo",
            "start": 173.522,
            "end": 173.856
          },
          {
            "word": "ruim",
            "start": 173.856,
            "end": 174.551
          }
        ]
      },
      {
        "verseStart": 174.551,
        "verseEnd": 177.416,
        "translation": "In sports, in boxing or football",
        "words": [
          {
            "word": "No",
            "start": 174.551,
            "end": 174.673
          },
          {
            "word": "esporte,",
            "start": 174.673,
            "end": 175.368
          },
          {
            "word": "no",
            "start": 175.368,
            "end": 175.49
          },
          {
            "word": "boxe",
            "start": 175.49,
            "end": 175.982
          },
          {
            "word": "ou",
            "start": 175.982,
            "end": 176.144
          },
          {
            "word": "no",
            "start": 176.144,
            "end": 176.307
          },
          {
            "word": "futebol",
            "start": 176.307,
            "end": 177.416
          }
        ]
      },
      {
        "verseStart": 177.416,
        "verseEnd": 180.968,
        "translation": "Someone dreaming of a medal, their place in the sun, however",
        "words": [
          {
            "word": "Alguém",
            "start": 177.416,
            "end": 177.701
          },
          {
            "word": "sonhando",
            "start": 177.701,
            "end": 178.111
          },
          {
            "word": "com",
            "start": 178.111,
            "end": 178.518
          },
          {
            "word": "uma",
            "start": 178.518,
            "end": 178.887
          },
          {
            "word": "medalha",
            "start": 178.887,
            "end": 179.132
          },
          {
            "word": "o",
            "start": 179.132,
            "end": 179.254
          },
          {
            "word": "seu",
            "start": 179.254,
            "end": 179.457
          },
          {
            "word": "lugar",
            "start": 179.457,
            "end": 179.702
          },
          {
            "word": "ao",
            "start": 179.702,
            "end": 179.905
          },
          {
            "word": "sol,",
            "start": 179.905,
            "end": 180.353
          },
          {
            "word": "porém",
            "start": 180.353,
            "end": 180.968
          }
        ]
      },
      {
        "verseStart": 180.968,
        "verseEnd": 183.557,
        "translation": "What to do if the bloke didn't study",
        "words": [
          {
            "word": "Fazer",
            "start": 180.968,
            "end": 181.171
          },
          {
            "word": "o",
            "start": 181.171,
            "end": 181.335
          },
          {
            "word": "que",
            "start": 181.335,
            "end": 181.584
          },
          {
            "word": "se",
            "start": 181.584,
            "end": 181.952
          },
          {
            "word": "o",
            "start": 181.952,
            "end": 182.198
          },
          {
            "word": "maluco",
            "start": 182.198,
            "end": 182.445
          },
          {
            "word": "não",
            "start": 182.445,
            "end": 182.856
          },
          {
            "word": "estudou",
            "start": 182.856,
            "end": 183.557
          }
        ]
      },
      {
        "verseStart": 183.557,
        "verseEnd": 187.196,
        "translation": "500 years of Brazil and the Brazil here hasn't changed at all",
        "words": [
          {
            "word": "500",
            "start": 183.557,
            "end": 183.926
          },
          {
            "word": "anos",
            "start": 183.926,
            "end": 184.253
          },
          {
            "word": "de",
            "start": 184.253,
            "end": 184.498
          },
          {
            "word": "Brasil",
            "start": 184.498,
            "end": 184.905
          },
          {
            "word": "e",
            "start": 184.905,
            "end": 185.028
          },
          {
            "word": "o",
            "start": 185.028,
            "end": 185.232
          },
          {
            "word": "Brasil",
            "start": 185.232,
            "end": 185.801
          },
          {
            "word": "aqui",
            "start": 185.801,
            "end": 186.087
          },
          {
            "word": "nada",
            "start": 186.087,
            "end": 186.255
          },
          {
            "word": "mudou",
            "start": 186.255,
            "end": 187.196
          }
        ]
      },
      {
        "verseStart": 187.196,
        "verseEnd": 190.149,
        "translation": "Getting desperate, scene of a madman",
        "words": [
          {
            "word": "Desesperô",
            "start": 187.196,
            "end": 188.146
          },
          {
            "word": "aí,",
            "start": 188.146,
            "end": 188.801
          },
          {
            "word": "cena",
            "start": 188.801,
            "end": 188.966
          },
          {
            "word": "do",
            "start": 188.966,
            "end": 189.211
          },
          {
            "word": "louco",
            "start": 189.211,
            "end": 190.149
          }
        ]
      },
      {
        "verseStart": 190.149,
        "verseEnd": 193.62,
        "translation": "Invaded the market, powdered up, armed and then some",
        "words": [
          {
            "word": "Invadiu",
            "start": 190.149,
            "end": 190.271
          },
          {
            "word": "o",
            "start": 190.271,
            "end": 190.515
          },
          {
            "word": "mercado",
            "start": 190.515,
            "end": 191.049
          },
          {
            "word": "farinhado",
            "start": 191.049,
            "end": 191.742
          },
          {
            "word": "armado",
            "start": 191.742,
            "end": 192.188
          },
          {
            "word": "e",
            "start": 192.188,
            "end": 192.351
          },
          {
            "word": "mais",
            "start": 192.351,
            "end": 192.595
          },
          {
            "word": "um",
            "start": 192.595,
            "end": 192.967
          },
          {
            "word": "pouco",
            "start": 192.967,
            "end": 193.62
          }
        ]
      },
      {
        "verseStart": 193.62,
        "verseEnd": 196.736,
        "translation": "This is a reflection of our current reality",
        "words": [
          {
            "word": "Isso",
            "start": 193.62,
            "end": 193.785
          },
          {
            "word": "é",
            "start": 193.785,
            "end": 194.03
          },
          {
            "word": "reflexo",
            "start": 194.03,
            "end": 194.729
          },
          {
            "word": "da",
            "start": 194.729,
            "end": 194.935
          },
          {
            "word": "nossa",
            "start": 194.935,
            "end": 195.348
          },
          {
            "word": "atualidade",
            "start": 195.348,
            "end": 196.736
          }
        ]
      },
      {
        "verseStart": 196.736,
        "verseEnd": 199.896,
        "translation": "This is the ultimate mirror of reality",
        "words": [
          {
            "word": "Esse",
            "start": 196.736,
            "end": 196.903
          },
          {
            "word": "é",
            "start": 196.903,
            "end": 197.149
          },
          {
            "word": "o",
            "start": 197.149,
            "end": 197.362
          },
          {
            "word": "espelho",
            "start": 197.362,
            "end": 197.815
          },
          {
            "word": "derradeiro",
            "start": 197.815,
            "end": 198.385
          },
          {
            "word": "da",
            "start": 198.385,
            "end": 198.589
          },
          {
            "word": "realidade",
            "start": 198.589,
            "end": 199.896
          }
        ]
      },
      {
        "verseStart": 199.896,
        "verseEnd": 202.38,
        "translation": "It's no bullshit, chatter, or sweet talk",
        "words": [
          {
            "word": "Não",
            "start": 199.896,
            "end": 200.059
          },
          {
            "word": "é",
            "start": 200.059,
            "end": 200.262
          },
          {
            "word": "areia,",
            "start": 200.262,
            "end": 200.872
          },
          {
            "word": "conversa,",
            "start": 200.872,
            "end": 201.527
          },
          {
            "word": "xaveco",
            "start": 201.527,
            "end": 202.38
          }
        ]
      },
      {
        "verseStart": 202.38,
        "verseEnd": 206.271,
        "translation": "Because the dream of many in the ends is to open a pub",
        "words": [
          {
            "word": "Porque",
            "start": 202.38,
            "end": 202.584
          },
          {
            "word": "o",
            "start": 202.584,
            "end": 202.787
          },
          {
            "word": "sonho",
            "start": 202.787,
            "end": 202.991
          },
          {
            "word": "de",
            "start": 202.991,
            "end": 203.361
          },
          {
            "word": "vários",
            "start": 203.361,
            "end": 204.013
          },
          {
            "word": "na",
            "start": 204.013,
            "end": 204.176
          },
          {
            "word": "quebrada",
            "start": 204.176,
            "end": 204.665
          },
          {
            "word": "é",
            "start": 204.665,
            "end": 204.827
          },
          {
            "word": "abrir",
            "start": 204.827,
            "end": 205.202
          },
          {
            "word": "um",
            "start": 205.202,
            "end": 205.448
          },
          {
            "word": "boteco",
            "start": 205.448,
            "end": 206.271
          }
        ]
      },
      {
        "verseStart": 206.271,
        "verseEnd": 209.427,
        "translation": "Being an entrepreneur won't work, studying no way",
        "words": [
          {
            "word": "Ser",
            "start": 206.271,
            "end": 207.011
          },
          {
            "word": "empresário",
            "start": 207.011,
            "end": 207.339
          },
          {
            "word": "não",
            "start": 207.339,
            "end": 207.502
          },
          {
            "word": "dá,",
            "start": 207.502,
            "end": 207.869
          },
          {
            "word": "estudar",
            "start": 207.869,
            "end": 208.446
          },
          {
            "word": "nem",
            "start": 208.446,
            "end": 208.609
          },
          {
            "word": "pensar",
            "start": 208.609,
            "end": 209.427
          }
        ]
      },
      {
        "verseStart": 209.427,
        "verseEnd": 212.59,
        "translation": "Gotta graft or steal to sustain the brothers",
        "words": [
          {
            "word": "Tem",
            "start": 209.427,
            "end": 209.591
          },
          {
            "word": "que",
            "start": 209.591,
            "end": 209.757
          },
          {
            "word": "trampar",
            "start": 209.757,
            "end": 210.294
          },
          {
            "word": "ou",
            "start": 210.294,
            "end": 210.458
          },
          {
            "word": "ripar",
            "start": 210.458,
            "end": 210.99
          },
          {
            "word": "pros",
            "start": 210.99,
            "end": 211.154
          },
          {
            "word": "irmãos",
            "start": 211.154,
            "end": 211.77
          },
          {
            "word": "sustentar",
            "start": 211.77,
            "end": 212.59
          }
        ]
      },
      {
        "verseStart": 212.59,
        "verseEnd": 215.623,
        "translation": "Being a criminal here is way more practical",
        "words": [
          {
            "word": "Ser",
            "start": 212.59,
            "end": 212.834
          },
          {
            "word": "criminoso",
            "start": 212.834,
            "end": 213.246
          },
          {
            "word": "aqui",
            "start": 213.246,
            "end": 213.782
          },
          {
            "word": "é",
            "start": 213.782,
            "end": 214.272
          },
          {
            "word": "bem",
            "start": 214.272,
            "end": 214.517
          },
          {
            "word": "mais",
            "start": 214.517,
            "end": 214.764
          },
          {
            "word": "prático",
            "start": 214.764,
            "end": 215.623
          }
        ]
      },
      {
        "verseStart": 215.623,
        "verseEnd": 218.687,
        "translation": "Fast, sadistic, or simply a tactical scheme",
        "words": [
          {
            "word": "Rápido,",
            "start": 215.623,
            "end": 216.154
          },
          {
            "word": "sádico,",
            "start": 216.154,
            "end": 216.689
          },
          {
            "word": "ou",
            "start": 216.689,
            "end": 216.812
          },
          {
            "word": "simplesmente",
            "start": 216.812,
            "end": 217.543
          },
          {
            "word": "esquema",
            "start": 217.543,
            "end": 217.909
          },
          {
            "word": "tático",
            "start": 217.909,
            "end": 218.687
          }
        ]
      },
      {
        "verseStart": 218.687,
        "verseEnd": 221.836,
        "translation": "Is it instinct or conscience",
        "words": [
          {
            "word": "Será",
            "start": 218.687,
            "end": 219.303
          },
          {
            "word": "instinto",
            "start": 219.303,
            "end": 219.507
          },
          {
            "word": "ou",
            "start": 219.507,
            "end": 219.954
          },
          {
            "word": "consciência",
            "start": 219.954,
            "end": 221.836
          }
        ]
      },
      {
        "verseStart": 221.836,
        "verseEnd": 225.411,
        "translation": "Living between the dream or the shite of survival",
        "words": [
          {
            "word": "Viver",
            "start": 221.836,
            "end": 222.134
          },
          {
            "word": "entre",
            "start": 222.134,
            "end": 222.299
          },
          {
            "word": "o",
            "start": 222.299,
            "end": 222.466
          },
          {
            "word": "sonho",
            "start": 222.466,
            "end": 222.954
          },
          {
            "word": "ou",
            "start": 222.954,
            "end": 223.117
          },
          {
            "word": "a",
            "start": 223.117,
            "end": 223.365
          },
          {
            "word": "merda",
            "start": 223.365,
            "end": 223.813
          },
          {
            "word": "da",
            "start": 223.813,
            "end": 224.016
          },
          {
            "word": "sobrevivência",
            "start": 224.016,
            "end": 225.411
          }
        ]
      },
      {
        "verseStart": 225.411,
        "verseEnd": 227.501,
        "translation": "The learning was hard",
        "words": [
          {
            "word": "O",
            "start": 225.411,
            "end": 225.615
          },
          {
            "word": "aprendizado",
            "start": 225.615,
            "end": 226.11
          },
          {
            "word": "foi",
            "start": 226.11,
            "end": 226.314
          },
          {
            "word": "duro",
            "start": 226.314,
            "end": 227.501
          }
        ]
      },
      {
        "verseStart": 227.501,
        "verseEnd": 230.006,
        "translation": "And even faced with this setback I didn't stop dreaming",
        "words": [
          {
            "word": "E",
            "start": 227.501,
            "end": 227.626
          },
          {
            "word": "mesmo",
            "start": 227.626,
            "end": 227.789
          },
          {
            "word": "diante",
            "start": 227.789,
            "end": 227.953
          },
          {
            "word": "desse",
            "start": 227.953,
            "end": 228.081
          },
          {
            "word": "revés",
            "start": 228.081,
            "end": 228.777
          },
          {
            "word": "não",
            "start": 228.777,
            "end": 228.9
          },
          {
            "word": "parei",
            "start": 228.9,
            "end": 229.104
          },
          {
            "word": "de",
            "start": 229.104,
            "end": 229.347
          },
          {
            "word": "sonhar",
            "start": 229.347,
            "end": 230.006
          }
        ]
      },
      {
        "verseStart": 230.006,
        "verseEnd": 233.206,
        "translation": "I was persistent, because the weak don't reach the goal",
        "words": [
          {
            "word": "Fui",
            "start": 230.006,
            "end": 230.171
          },
          {
            "word": "persistente,",
            "start": 230.171,
            "end": 231.319
          },
          {
            "word": "porque",
            "start": 231.319,
            "end": 231.441
          },
          {
            "word": "o",
            "start": 231.441,
            "end": 231.609
          },
          {
            "word": "fraco",
            "start": 231.609,
            "end": 231.855
          },
          {
            "word": "não",
            "start": 231.855,
            "end": 232.018
          },
          {
            "word": "alcança",
            "start": 232.018,
            "end": 232.18
          },
          {
            "word": "a",
            "start": 232.18,
            "end": 232.383
          },
          {
            "word": "meta",
            "start": 232.383,
            "end": 233.206
          }
        ]
      },
      {
        "verseStart": 233.206,
        "verseEnd": 235.628,
        "translation": "Through rap I chased my losses",
        "words": [
          {
            "word": "Através",
            "start": 233.206,
            "end": 233.329
          },
          {
            "word": "do",
            "start": 233.329,
            "end": 233.491
          },
          {
            "word": "rap",
            "start": 233.491,
            "end": 234.024
          },
          {
            "word": "corri",
            "start": 234.024,
            "end": 234.476
          },
          {
            "word": "atrás",
            "start": 234.476,
            "end": 234.684
          },
          {
            "word": "do",
            "start": 234.684,
            "end": 234.888
          },
          {
            "word": "preju",
            "start": 234.888,
            "end": 235.628
          }
        ]
      },
      {
        "verseStart": 235.628,
        "verseEnd": 237.875,
        "translation": "And I could make my dream come true",
        "words": [
          {
            "word": "E",
            "start": 235.628,
            "end": 235.831
          },
          {
            "word": "pude",
            "start": 235.831,
            "end": 236.285
          },
          {
            "word": "realizar",
            "start": 236.285,
            "end": 236.612
          },
          {
            "word": "meu",
            "start": 236.612,
            "end": 236.775
          },
          {
            "word": "sonho",
            "start": 236.775,
            "end": 237.875
          }
        ]
      },
      {
        "verseStart": 237.875,
        "verseEnd": 244.292,
        "translation": "That's why I, Afro-X, never stop dreaming",
        "words": [
          {
            "word": "Por",
            "start": 237.875,
            "end": 237.981
          },
          {
            "word": "isso",
            "start": 237.981,
            "end": 238.147
          },
          {
            "word": "que",
            "start": 238.147,
            "end": 238.31
          },
          {
            "word": "eu,",
            "start": 238.31,
            "end": 239.049
          },
          {
            "word": "Afro-X,",
            "start": 239.049,
            "end": 240.311
          },
          {
            "word": "nunca",
            "start": 240.311,
            "end": 240.721
          },
          {
            "word": "deixo",
            "start": 240.721,
            "end": 240.925
          },
          {
            "word": "de",
            "start": 240.925,
            "end": 241.092
          },
          {
            "word": "sonhar",
            "start": 241.092,
            "end": 244.292
          }
        ]
      },
      {
        "verseStart": 244.292,
        "verseEnd": 247.017,
        "translation": "I knew paradise and I know hell",
        "words": [
          {
            "word": "Conheci",
            "start": 244.292,
            "end": 244.414
          },
          {
            "word": "o",
            "start": 244.414,
            "end": 244.537
          },
          {
            "word": "paraíso",
            "start": 244.537,
            "end": 245.191
          },
          {
            "word": "e",
            "start": 245.191,
            "end": 245.356
          },
          {
            "word": "eu",
            "start": 245.356,
            "end": 245.53
          },
          {
            "word": "conheço",
            "start": 245.53,
            "end": 245.775
          },
          {
            "word": "o",
            "start": 245.775,
            "end": 246.104
          },
          {
            "word": "inferno",
            "start": 246.104,
            "end": 247.017
          }
        ]
      },
      {
        "verseStart": 247.017,
        "verseEnd": 250.651,
        "translation": "I saw Jesus in beige trousers and the devil dressed in a suit",
        "words": [
          {
            "word": "Vi",
            "start": 247.017,
            "end": 247.18
          },
          {
            "word": "Jesus",
            "start": 247.18,
            "end": 247.343
          },
          {
            "word": "de",
            "start": 247.343,
            "end": 247.506
          },
          {
            "word": "calça",
            "start": 247.506,
            "end": 247.914
          },
          {
            "word": "bege",
            "start": 247.914,
            "end": 248.281
          },
          {
            "word": "e",
            "start": 248.281,
            "end": 248.485
          },
          {
            "word": "o",
            "start": 248.485,
            "end": 248.688
          },
          {
            "word": "diabo",
            "start": 248.688,
            "end": 249.095
          },
          {
            "word": "vestido",
            "start": 249.095,
            "end": 249.546
          },
          {
            "word": "de",
            "start": 249.546,
            "end": 249.751
          },
          {
            "word": "terno",
            "start": 249.751,
            "end": 250.651
          }
        ]
      },
      {
        "verseStart": 250.651,
        "verseEnd": 253.53,
        "translation": "In the modern world, people don't talk to each other",
        "words": [
          {
            "word": "No",
            "start": 250.651,
            "end": 250.857
          },
          {
            "word": "mundo",
            "start": 250.857,
            "end": 251.102
          },
          {
            "word": "moderno,",
            "start": 251.102,
            "end": 251.634
          },
          {
            "word": "as",
            "start": 251.634,
            "end": 251.842
          },
          {
            "word": "pessoas",
            "start": 251.842,
            "end": 252.004
          },
          {
            "word": "não",
            "start": 252.004,
            "end": 252.337
          },
          {
            "word": "se",
            "start": 252.337,
            "end": 252.628
          },
          {
            "word": "falam",
            "start": 252.628,
            "end": 253.53
          }
        ]
      },
      {
        "verseStart": 253.53,
        "verseEnd": 256.653,
        "translation": "On the contrary, they stay silent, step on each other, betray, kill",
        "words": [
          {
            "word": "Ao",
            "start": 253.53,
            "end": 253.698
          },
          {
            "word": "contrário,",
            "start": 253.698,
            "end": 254.07
          },
          {
            "word": "se",
            "start": 254.07,
            "end": 254.233
          },
          {
            "word": "calam,",
            "start": 254.233,
            "end": 254.642
          },
          {
            "word": "se",
            "start": 254.642,
            "end": 254.809
          },
          {
            "word": "pisam,",
            "start": 254.809,
            "end": 255.175
          },
          {
            "word": "se",
            "start": 255.175,
            "end": 255.297
          },
          {
            "word": "traem,",
            "start": 255.297,
            "end": 255.787
          },
          {
            "word": "se",
            "start": 255.787,
            "end": 255.914
          },
          {
            "word": "matam",
            "start": 255.914,
            "end": 256.653
          }
        ]
      },
      {
        "verseStart": 256.653,
        "verseEnd": 260.148,
        "translation": "I shuffle the cards of envy and treason",
        "words": [
          {
            "word": "Embaralho",
            "start": 256.653,
            "end": 256.977
          },
          {
            "word": "as",
            "start": 256.977,
            "end": 257.349
          },
          {
            "word": "cartas",
            "start": 257.349,
            "end": 257.716
          },
          {
            "word": "da",
            "start": 257.716,
            "end": 258.051
          },
          {
            "word": "inveja",
            "start": 258.051,
            "end": 258.382
          },
          {
            "word": "e",
            "start": 258.382,
            "end": 258.75
          },
          {
            "word": "da",
            "start": 258.75,
            "end": 258.954
          },
          {
            "word": "traição",
            "start": 258.954,
            "end": 260.148
          }
        ]
      },
      {
        "verseStart": 260.148,
        "verseEnd": 263.476,
        "translation": "Hearts, diamonds and a spade in hand",
        "words": [
          {
            "word": "Copa,",
            "start": 260.148,
            "end": 260.521
          },
          {
            "word": "ouro",
            "start": 260.521,
            "end": 261.183
          },
          {
            "word": "e",
            "start": 261.183,
            "end": 261.311
          },
          {
            "word": "uma",
            "start": 261.311,
            "end": 261.885
          },
          {
            "word": "espada",
            "start": 261.885,
            "end": 262.537
          },
          {
            "word": "na",
            "start": 262.537,
            "end": 262.66
          },
          {
            "word": "mão",
            "start": 262.66,
            "end": 263.476
          }
        ]
      },
      {
        "verseStart": 263.476,
        "verseEnd": 266.097,
        "translation": "What's good is for oneself and what's left is for the other",
        "words": [
          {
            "word": "O",
            "start": 263.476,
            "end": 263.604
          },
          {
            "word": "que",
            "start": 263.604,
            "end": 263.769
          },
          {
            "word": "é",
            "start": 263.769,
            "end": 263.932
          },
          {
            "word": "bom",
            "start": 263.932,
            "end": 264.053
          },
          {
            "word": "é",
            "start": 264.053,
            "end": 264.216
          },
          {
            "word": "pra",
            "start": 264.216,
            "end": 264.379
          },
          {
            "word": "si",
            "start": 264.379,
            "end": 264.542
          },
          {
            "word": "e",
            "start": 264.542,
            "end": 264.665
          },
          {
            "word": "o",
            "start": 264.665,
            "end": 264.828
          },
          {
            "word": "que",
            "start": 264.828,
            "end": 264.951
          },
          {
            "word": "sobra",
            "start": 264.951,
            "end": 265.073
          },
          {
            "word": "é",
            "start": 265.073,
            "end": 265.237
          },
          {
            "word": "do",
            "start": 265.237,
            "end": 265.606
          },
          {
            "word": "outro",
            "start": 265.606,
            "end": 266.097
          }
        ]
      },
      {
        "verseStart": 266.097,
        "verseEnd": 269.805,
        "translation": "Just like the sun that warms, but also rots the sewer",
        "words": [
          {
            "word": "Que",
            "start": 266.097,
            "end": 266.22
          },
          {
            "word": "nem",
            "start": 266.22,
            "end": 266.384
          },
          {
            "word": "o",
            "start": 266.384,
            "end": 266.506
          },
          {
            "word": "sol",
            "start": 266.506,
            "end": 266.751
          },
          {
            "word": "que",
            "start": 266.751,
            "end": 266.92
          },
          {
            "word": "aquece,",
            "start": 266.92,
            "end": 267.369
          },
          {
            "word": "mas",
            "start": 267.369,
            "end": 267.534
          },
          {
            "word": "também",
            "start": 267.534,
            "end": 268.111
          },
          {
            "word": "apodrece",
            "start": 268.111,
            "end": 268.728
          },
          {
            "word": "o",
            "start": 268.728,
            "end": 268.853
          },
          {
            "word": "esgoto",
            "start": 268.853,
            "end": 269.805
          }
        ]
      },
      {
        "verseStart": 269.805,
        "verseEnd": 272.046,
        "translation": "It's very crazy looking at people",
        "words": [
          {
            "word": "É",
            "start": 269.805,
            "end": 269.968
          },
          {
            "word": "muito",
            "start": 269.968,
            "end": 270.295
          },
          {
            "word": "louco",
            "start": 270.295,
            "end": 270.702
          },
          {
            "word": "olhar",
            "start": 270.702,
            "end": 271.028
          },
          {
            "word": "as",
            "start": 271.028,
            "end": 271.19
          },
          {
            "word": "pessoas",
            "start": 271.19,
            "end": 272.046
          }
        ]
      },
      {
        "verseStart": 272.046,
        "verseEnd": 276.126,
        "translation": "The bad attitude influences the good minority",
        "words": [
          {
            "word": "A",
            "start": 272.046,
            "end": 272.291
          },
          {
            "word": "atitude",
            "start": 272.291,
            "end": 272.657
          },
          {
            "word": "do",
            "start": 272.657,
            "end": 273.105
          },
          {
            "word": "mal",
            "start": 273.105,
            "end": 273.593
          },
          {
            "word": "influencia",
            "start": 273.593,
            "end": 274.489
          },
          {
            "word": "a",
            "start": 274.489,
            "end": 274.652
          },
          {
            "word": "minoria",
            "start": 274.652,
            "end": 275.347
          },
          {
            "word": "boa",
            "start": 275.347,
            "end": 276.126
          }
        ]
      },
      {
        "verseStart": 276.126,
        "verseEnd": 279.194,
        "translation": "Dying for nothing, what else? Killing for nothing, what else?",
        "words": [
          {
            "word": "Morrer",
            "start": 276.126,
            "end": 276.249
          },
          {
            "word": "à",
            "start": 276.249,
            "end": 276.493
          },
          {
            "word": "toa,",
            "start": 276.493,
            "end": 277.104
          },
          {
            "word": "que",
            "start": 277.104,
            "end": 277.267
          },
          {
            "word": "mais?",
            "start": 277.267,
            "end": 277.681
          },
          {
            "word": "Matar",
            "start": 277.681,
            "end": 277.888
          },
          {
            "word": "à",
            "start": 277.888,
            "end": 278.092
          },
          {
            "word": "toa,",
            "start": 278.092,
            "end": 278.58
          },
          {
            "word": "que",
            "start": 278.58,
            "end": 278.745
          },
          {
            "word": "mais?",
            "start": 278.745,
            "end": 279.194
          }
        ]
      },
      {
        "verseStart": 279.194,
        "verseEnd": 282.396,
        "translation": "Getting nicked for nothing, dreaming of a good score",
        "words": [
          {
            "word": "Ser",
            "start": 279.194,
            "end": 279.397
          },
          {
            "word": "presa",
            "start": 279.397,
            "end": 279.562
          },
          {
            "word": "à",
            "start": 279.562,
            "end": 279.727
          },
          {
            "word": "toa",
            "start": 279.727,
            "end": 280.306
          },
          {
            "word": ",",
            "start": 280.306,
            "end": 280.757
          },
          {
            "word": "sonhando",
            "start": 280.757,
            "end": 280.881
          },
          {
            "word": "com",
            "start": 280.881,
            "end": 281.089
          },
          {
            "word": "uma",
            "start": 281.089,
            "end": 281.253
          },
          {
            "word": "fita",
            "start": 281.253,
            "end": 281.415
          },
          {
            "word": "boa",
            "start": 281.415,
            "end": 282.396
          }
        ]
      },
      {
        "verseStart": 282.396,
        "verseEnd": 284.942,
        "translation": "Life flies by and the future catches up",
        "words": [
          {
            "word": "A",
            "start": 282.396,
            "end": 282.561
          },
          {
            "word": "vida",
            "start": 282.561,
            "end": 282.684
          },
          {
            "word": "voa",
            "start": 282.684,
            "end": 283.307
          },
          {
            "word": "e",
            "start": 283.307,
            "end": 283.389
          },
          {
            "word": "o",
            "start": 283.389,
            "end": 283.714
          },
          {
            "word": "futuro",
            "start": 283.714,
            "end": 283.88
          },
          {
            "word": "pega",
            "start": 283.88,
            "end": 284.942
          }
        ]
      },
      {
        "verseStart": 284.942,
        "verseEnd": 286.33,
        "translation": "Who stood firm, spoke",
        "words": [
          {
            "word": "Quem",
            "start": 284.942,
            "end": 285.105
          },
          {
            "word": "se",
            "start": 285.105,
            "end": 285.268
          },
          {
            "word": "firmô,",
            "start": 285.268,
            "end": 285.757
          },
          {
            "word": "falô",
            "start": 285.757,
            "end": 286.33
          }
        ]
      },
      {
        "verseStart": 286.33,
        "verseEnd": 288.802,
        "translation": "Who didn't win, gives up the game",
        "words": [
          {
            "word": "Quem",
            "start": 286.33,
            "end": 286.492
          },
          {
            "word": "não",
            "start": 286.492,
            "end": 286.656
          },
          {
            "word": "ganhou,",
            "start": 286.656,
            "end": 287.281
          },
          {
            "word": "o",
            "start": 287.281,
            "end": 287.446
          },
          {
            "word": "jogo",
            "start": 287.446,
            "end": 287.896
          },
          {
            "word": "entrega",
            "start": 287.896,
            "end": 288.802
          }
        ]
      },
      {
        "verseStart": 288.802,
        "verseEnd": 291.261,
        "translation": "Another fall among 15 million",
        "words": [
          {
            "word": "Mais",
            "start": 288.802,
            "end": 288.967
          },
          {
            "word": "um",
            "start": 288.967,
            "end": 289.293
          },
          {
            "word": "queda",
            "start": 289.293,
            "end": 289.745
          },
          {
            "word": "em",
            "start": 289.745,
            "end": 289.908
          },
          {
            "word": "15",
            "start": 289.908,
            "end": 290.362
          },
          {
            "word": "milhões",
            "start": 290.362,
            "end": 291.261
          }
        ]
      },
      {
        "verseStart": 291.261,
        "verseEnd": 295.148,
        "translation": "In the richest metropolis, its several contradictions",
        "words": [
          {
            "word": "Na",
            "start": 291.261,
            "end": 291.551
          },
          {
            "word": "mais",
            "start": 291.551,
            "end": 291.714
          },
          {
            "word": "rica",
            "start": 291.714,
            "end": 292.047
          },
          {
            "word": "metrópole,",
            "start": 292.047,
            "end": 292.859
          },
          {
            "word": "suas",
            "start": 292.859,
            "end": 293.265
          },
          {
            "word": "várias",
            "start": 293.265,
            "end": 293.591
          },
          {
            "word": "contradições",
            "start": 293.591,
            "end": 295.148
          }
        ]
      },
      {
        "verseStart": 295.148,
        "verseEnd": 299.358,
        "translation": "It's countless, unacceptable, relentless, inevitable",
        "words": [
          {
            "word": "É",
            "start": 295.148,
            "end": 295.27
          },
          {
            "word": "incontável,",
            "start": 295.27,
            "end": 296.34
          },
          {
            "word": "inaceitável,",
            "start": 296.34,
            "end": 297.439
          },
          {
            "word": "implacável,",
            "start": 297.439,
            "end": 298.255
          },
          {
            "word": "inevitável",
            "start": 298.255,
            "end": 299.358
          }
        ]
      },
      {
        "verseStart": 299.358,
        "verseEnd": 304.323,
        "translation": "Seeing the miserable side subjecting itself to crumbs, favours",
        "words": [
          {
            "word": "Ver",
            "start": 299.358,
            "end": 299.522
          },
          {
            "word": "o",
            "start": 299.522,
            "end": 299.772
          },
          {
            "word": "lado",
            "start": 299.772,
            "end": 300.305
          },
          {
            "word": "miserável",
            "start": 300.305,
            "end": 301.614
          },
          {
            "word": "se",
            "start": 301.614,
            "end": 301.778
          },
          {
            "word": "sujeitando",
            "start": 301.778,
            "end": 302.389
          },
          {
            "word": "com",
            "start": 302.389,
            "end": 302.592
          },
          {
            "word": "migalhas,",
            "start": 302.592,
            "end": 303.211
          },
          {
            "word": "favores",
            "start": 303.211,
            "end": 304.323
          }
        ]
      },
      {
        "verseStart": 304.323,
        "verseEnd": 307.778,
        "translation": "Dodging between nights of fear and horrors",
        "words": [
          {
            "word": "Se",
            "start": 304.323,
            "end": 304.824
          },
          {
            "word": "esquivando",
            "start": 304.824,
            "end": 305.231
          },
          {
            "word": "entre",
            "start": 305.231,
            "end": 305.683
          },
          {
            "word": "noite",
            "start": 305.683,
            "end": 306.218
          },
          {
            "word": "de",
            "start": 306.218,
            "end": 306.382
          },
          {
            "word": "medo",
            "start": 306.382,
            "end": 306.789
          },
          {
            "word": "e",
            "start": 306.789,
            "end": 306.953
          },
          {
            "word": "horrores",
            "start": 306.953,
            "end": 307.778
          }
        ]
      },
      {
        "verseStart": 307.778,
        "verseEnd": 310.233,
        "translation": "What's the deal, the beef, the scene?",
        "words": [
          {
            "word": "Qual",
            "start": 307.778,
            "end": 307.941
          },
          {
            "word": "é",
            "start": 307.941,
            "end": 308.145
          },
          {
            "word": "a",
            "start": 308.145,
            "end": 308.553
          },
          {
            "word": "fita,",
            "start": 308.553,
            "end": 308.757
          },
          {
            "word": "a",
            "start": 308.757,
            "end": 309.046
          },
          {
            "word": "treta,",
            "start": 309.046,
            "end": 309.414
          },
          {
            "word": "a",
            "start": 309.414,
            "end": 309.623
          },
          {
            "word": "cena?",
            "start": 309.623,
            "end": 310.233
          }
        ]
      },
      {
        "verseStart": 310.233,
        "verseEnd": 314.127,
        "translation": "We pray, we flee, it's always the same problems carrying on",
        "words": [
          {
            "word": "A",
            "start": 310.233,
            "end": 310.396
          },
          {
            "word": "gente",
            "start": 310.396,
            "end": 310.602
          },
          {
            "word": "reza,",
            "start": 310.602,
            "end": 310.767
          },
          {
            "word": "foge,",
            "start": 310.767,
            "end": 311.338
          },
          {
            "word": "continua",
            "start": 311.338,
            "end": 311.827
          },
          {
            "word": "sempre",
            "start": 311.827,
            "end": 312.276
          },
          {
            "word": "os",
            "start": 312.276,
            "end": 312.606
          },
          {
            "word": "mesmo",
            "start": 312.606,
            "end": 312.98
          },
          {
            "word": "problema",
            "start": 312.98,
            "end": 314.127
          }
        ]
      },
      {
        "verseStart": 314.127,
        "verseEnd": 316.747,
        "translation": "Women and money are always involved",
        "words": [
          {
            "word": "Mulher",
            "start": 314.127,
            "end": 314.292
          },
          {
            "word": "e",
            "start": 314.292,
            "end": 314.582
          },
          {
            "word": "dinheiro",
            "start": 314.582,
            "end": 315.072
          },
          {
            "word": "tá",
            "start": 315.072,
            "end": 315.281
          },
          {
            "word": "sempre",
            "start": 315.281,
            "end": 315.568
          },
          {
            "word": "envolvido",
            "start": 315.568,
            "end": 316.747
          }
        ]
      },
      {
        "verseStart": 316.747,
        "verseEnd": 320.478,
        "translation": "Vanity, ambition, ammo to create enemies",
        "words": [
          {
            "word": "Vaidade,",
            "start": 316.747,
            "end": 317.408
          },
          {
            "word": "ambição,",
            "start": 317.408,
            "end": 317.937
          },
          {
            "word": "munição",
            "start": 317.937,
            "end": 318.915
          },
          {
            "word": "pra",
            "start": 318.915,
            "end": 319.036
          },
          {
            "word": "criar",
            "start": 319.036,
            "end": 319.409
          },
          {
            "word": "inimigo",
            "start": 319.409,
            "end": 320.478
          }
        ]
      },
      {
        "verseStart": 320.478,
        "verseEnd": 322.775,
        "translation": "Since ancient times it was always like this",
        "words": [
          {
            "word": "Desde",
            "start": 320.478,
            "end": 320.725
          },
          {
            "word": "o",
            "start": 320.725,
            "end": 320.89
          },
          {
            "word": "povo",
            "start": 320.89,
            "end": 321.095
          },
          {
            "word": "antigo",
            "start": 321.095,
            "end": 321.424
          },
          {
            "word": "foi",
            "start": 321.424,
            "end": 321.71
          },
          {
            "word": "sempre",
            "start": 321.71,
            "end": 321.873
          },
          {
            "word": "assim",
            "start": 321.873,
            "end": 322.775
          }
        ]
      },
      {
        "verseStart": 322.775,
        "verseEnd": 326.305,
        "translation": "Who doesn't remember that Abel was killed by Cain",
        "words": [
          {
            "word": "Quem",
            "start": 322.775,
            "end": 322.979
          },
          {
            "word": "não",
            "start": 322.979,
            "end": 323.143
          },
          {
            "word": "se",
            "start": 323.143,
            "end": 323.388
          },
          {
            "word": "lembra",
            "start": 323.388,
            "end": 323.8
          },
          {
            "word": "que",
            "start": 323.8,
            "end": 324.005
          },
          {
            "word": "Abel",
            "start": 324.005,
            "end": 324.537
          },
          {
            "word": "foi",
            "start": 324.537,
            "end": 324.785
          },
          {
            "word": "morto",
            "start": 324.785,
            "end": 325.401
          },
          {
            "word": "por",
            "start": 325.401,
            "end": 325.607
          },
          {
            "word": "Caim",
            "start": 325.607,
            "end": 326.305
          }
        ]
      },
      {
        "verseStart": 326.305,
        "verseEnd": 329.993,
        "translation": "Anyway, I want to win without mugging anyone off",
        "words": [
          {
            "word": "Enfim,",
            "start": 326.305,
            "end": 326.716
          },
          {
            "word": "quero",
            "start": 326.716,
            "end": 327.087
          },
          {
            "word": "vencer",
            "start": 327.087,
            "end": 327.78
          },
          {
            "word": "sem",
            "start": 327.78,
            "end": 327.943
          },
          {
            "word": "pilantrar",
            "start": 327.943,
            "end": 328.841
          },
          {
            "word": "com",
            "start": 328.841,
            "end": 329.01
          },
          {
            "word": "ninguém",
            "start": 329.01,
            "end": 329.993
          }
        ]
      },
      {
        "verseStart": 329.993,
        "verseEnd": 333.117,
        "translation": "I want money without stepping on anyone's head",
        "words": [
          {
            "word": "Quero",
            "start": 329.993,
            "end": 330.409
          },
          {
            "word": "dinheiro",
            "start": 330.409,
            "end": 330.818
          },
          {
            "word": "sem",
            "start": 330.818,
            "end": 331.192
          },
          {
            "word": "pisar",
            "start": 331.192,
            "end": 331.522
          },
          {
            "word": "na",
            "start": 331.522,
            "end": 331.687
          },
          {
            "word": "cabeça",
            "start": 331.687,
            "end": 332.221
          },
          {
            "word": "de",
            "start": 332.221,
            "end": 332.384
          },
          {
            "word": "alguém",
            "start": 332.384,
            "end": 333.117
          }
        ]
      },
      {
        "verseStart": 333.117,
        "verseEnd": 335.975,
        "translation": "Right is right in war or in peace",
        "words": [
          {
            "word": "O",
            "start": 333.117,
            "end": 333.281
          },
          {
            "word": "certo",
            "start": 333.281,
            "end": 333.444
          },
          {
            "word": "é",
            "start": 333.444,
            "end": 333.652
          },
          {
            "word": "certo",
            "start": 333.652,
            "end": 334.262
          },
          {
            "word": "na",
            "start": 334.262,
            "end": 334.466
          },
          {
            "word": "guerra",
            "start": 334.466,
            "end": 334.874
          },
          {
            "word": "ou",
            "start": 334.874,
            "end": 335.077
          },
          {
            "word": "na",
            "start": 335.077,
            "end": 335.362
          },
          {
            "word": "paz",
            "start": 335.362,
            "end": 335.975
          }
        ]
      },
      {
        "verseStart": 335.975,
        "verseEnd": 339.144,
        "translation": "If it's a dream don't wake me up ever again",
        "words": [
          {
            "word": "Se",
            "start": 335.975,
            "end": 336.178
          },
          {
            "word": "for",
            "start": 336.178,
            "end": 336.341
          },
          {
            "word": "um",
            "start": 336.341,
            "end": 336.549
          },
          {
            "word": "sonho",
            "start": 336.549,
            "end": 336.761
          },
          {
            "word": "não",
            "start": 336.761,
            "end": 336.924
          },
          {
            "word": "me",
            "start": 336.924,
            "end": 337.211
          },
          {
            "word": "acorde",
            "start": 337.211,
            "end": 337.987
          },
          {
            "word": "nunca",
            "start": 337.987,
            "end": 338.152
          },
          {
            "word": "mais",
            "start": 338.152,
            "end": 339.144
          }
        ]
      },
      {
        "verseStart": 339.144,
        "verseEnd": 342.298,
        "translation": "Russian roulette, how much does it cost to cock it?",
        "words": [
          {
            "word": "Roleta",
            "start": 339.144,
            "end": 339.761
          },
          {
            "word": "russa,",
            "start": 339.761,
            "end": 340.622
          },
          {
            "word": "quanto",
            "start": 340.622,
            "end": 340.785
          },
          {
            "word": "custa",
            "start": 340.785,
            "end": 341.112
          },
          {
            "word": "engatilhar?",
            "start": 341.112,
            "end": 342.298
          }
        ]
      },
      {
        "verseStart": 342.298,
        "verseEnd": 345.884,
        "translation": "I'll pay double for you to believe in me",
        "words": [
          {
            "word": "Eu",
            "start": 342.298,
            "end": 342.546
          },
          {
            "word": "pago",
            "start": 342.546,
            "end": 342.963
          },
          {
            "word": "o",
            "start": 342.963,
            "end": 343.253
          },
          {
            "word": "dobro",
            "start": 343.253,
            "end": 343.62
          },
          {
            "word": "pra",
            "start": 343.62,
            "end": 343.787
          },
          {
            "word": "você",
            "start": 343.787,
            "end": 344.282
          },
          {
            "word": "em",
            "start": 344.282,
            "end": 344.569
          },
          {
            "word": "mim",
            "start": 344.569,
            "end": 344.814
          },
          {
            "word": "acreditar",
            "start": 344.814,
            "end": 345.884
          }
        ]
      },
      {
        "verseStart": 345.884,
        "verseEnd": 349.146,
        "translation": "That's right you can't stop",
        "words": [
          {
            "word": "É",
            "start": 345.884,
            "end": 346.048
          },
          {
            "word": "isso",
            "start": 346.048,
            "end": 346.253
          },
          {
            "word": "ai",
            "start": 346.253,
            "end": 346.661
          },
          {
            "word": "você",
            "start": 346.661,
            "end": 347.067
          },
          {
            "word": "não",
            "start": 347.067,
            "end": 347.189
          },
          {
            "word": "pode",
            "start": 347.189,
            "end": 347.557
          },
          {
            "word": "parar",
            "start": 347.557,
            "end": 349.146
          }
        ]
      },
      {
        "verseStart": 349.146,
        "verseEnd": 352.102,
        "translation": "Wait for the bad times to come embrace you",
        "words": [
          {
            "word": "Esperar",
            "start": 349.146,
            "end": 349.268
          },
          {
            "word": "o",
            "start": 349.268,
            "end": 349.765
          },
          {
            "word": "tempo",
            "start": 349.765,
            "end": 350.175
          },
          {
            "word": "ruim",
            "start": 350.175,
            "end": 350.338
          },
          {
            "word": "vir",
            "start": 350.338,
            "end": 350.873
          },
          {
            "word": "te",
            "start": 350.873,
            "end": 351.039
          },
          {
            "word": "abraçar",
            "start": 351.039,
            "end": 352.102
          }
        ]
      },
      {
        "verseStart": 352.102,
        "verseEnd": 356.244,
        "translation": "Believe that dreaming is always necessary",
        "words": [
          {
            "word": "Acreditar",
            "start": 352.102,
            "end": 353.132
          },
          {
            "word": "que",
            "start": 353.132,
            "end": 353.296
          },
          {
            "word": "sonhar",
            "start": 353.296,
            "end": 353.83
          },
          {
            "word": "sempre",
            "start": 353.83,
            "end": 354.243
          },
          {
            "word": "é",
            "start": 354.243,
            "end": 354.53
          },
          {
            "word": "preciso",
            "start": 354.53,
            "end": 356.244
          }
        ]
      },
      {
        "verseStart": 356.244,
        "verseEnd": 358.216,
        "translation": "It's what keeps the brothers alive",
        "words": [
          {
            "word": "É",
            "start": 356.244,
            "end": 356.368
          },
          {
            "word": "o",
            "start": 356.368,
            "end": 356.449
          },
          {
            "word": "que",
            "start": 356.449,
            "end": 356.531
          },
          {
            "word": "mantém",
            "start": 356.531,
            "end": 356.705
          },
          {
            "word": "os",
            "start": 356.705,
            "end": 357.195
          },
          {
            "word": "irmãos",
            "start": 357.195,
            "end": 357.932
          },
          {
            "word": "vivos",
            "start": 357.932,
            "end": 358.216
          }
        ]
      },
      {
        "verseStart": 358.216,
        "verseEnd": 360.72,
        "translation": "Usually when problems appear",
        "words": [
          {
            "word": "Geralmente",
            "start": 358.216,
            "end": 358.379
          },
          {
            "word": "quando",
            "start": 358.379,
            "end": 359.115
          },
          {
            "word": "os",
            "start": 359.115,
            "end": 359.322
          },
          {
            "word": "problemas",
            "start": 359.322,
            "end": 359.897
          },
          {
            "word": "aparecem",
            "start": 359.897,
            "end": 360.72
          }
        ]
      },
      {
        "verseStart": 360.72,
        "verseEnd": 362.697,
        "translation": "We're caught off guard right, ain't we?",
        "words": [
          {
            "word": "A",
            "start": 360.72,
            "end": 360.892
          },
          {
            "word": "gente",
            "start": 360.892,
            "end": 361.015
          },
          {
            "word": "está",
            "start": 361.015,
            "end": 361.31
          },
          {
            "word": "desprevenido",
            "start": 361.31,
            "end": 361.839
          },
          {
            "word": "né,",
            "start": 361.839,
            "end": 361.962
          },
          {
            "word": "não?",
            "start": 361.962,
            "end": 362.697
          }
        ]
      },
      {
        "verseStart": 362.697,
        "verseEnd": 364.782,
        "translation": "Wrong!",
        "words": [
          {
            "word": "Errado!",
            "start": 362.697,
            "end": 364.782
          }
        ]
      },
      {
        "verseStart": 364.782,
        "verseEnd": 367.911,
        "translation": "It's you who lost control of the situation",
        "words": [
          {
            "word": "É",
            "start": 364.782,
            "end": 365.028
          },
          {
            "word": "você",
            "start": 365.028,
            "end": 365.366
          },
          {
            "word": "que",
            "start": 365.366,
            "end": 365.53
          },
          {
            "word": "perdeu",
            "start": 365.53,
            "end": 365.694
          },
          {
            "word": "o",
            "start": 365.694,
            "end": 365.98
          },
          {
            "word": "controle",
            "start": 365.98,
            "end": 366.143
          },
          {
            "word": "da",
            "start": 366.143,
            "end": 366.43
          },
          {
            "word": "situação",
            "start": 366.43,
            "end": 367.911
          }
        ]
      },
      {
        "verseStart": 367.911,
        "verseEnd": 372.67,
        "translation": "Lost the ability to control the challenges",
        "words": [
          {
            "word": "Perdeu",
            "start": 367.911,
            "end": 368.156
          },
          {
            "word": "a",
            "start": 368.156,
            "end": 368.485
          },
          {
            "word": "capacidade",
            "start": 368.485,
            "end": 368.976
          },
          {
            "word": "de",
            "start": 368.976,
            "end": 369.346
          },
          {
            "word": "controlar",
            "start": 369.346,
            "end": 370.325
          },
          {
            "word": "os",
            "start": 370.325,
            "end": 370.533
          },
          {
            "word": "desafios",
            "start": 370.533,
            "end": 372.67
          }
        ]
      },
      {
        "verseStart": 372.67,
        "verseEnd": 375.116,
        "translation": "Especially when we run away from the lessons",
        "words": [
          {
            "word": "Principalmente",
            "start": 372.67,
            "end": 372.791
          },
          {
            "word": "quando",
            "start": 372.791,
            "end": 372.954
          },
          {
            "word": "a",
            "start": 372.954,
            "end": 373.081
          },
          {
            "word": "gente",
            "start": 373.081,
            "end": 373.489
          },
          {
            "word": "foge",
            "start": 373.489,
            "end": 373.897
          },
          {
            "word": "das",
            "start": 373.897,
            "end": 374.02
          },
          {
            "word": "lição",
            "start": 374.02,
            "end": 375.116
          }
        ]
      },
      {
        "verseStart": 375.116,
        "verseEnd": 378.158,
        "translation": "That life puts in front of us like this, you get me?",
        "words": [
          {
            "word": "Que",
            "start": 375.116,
            "end": 375.241
          },
          {
            "word": "a",
            "start": 375.241,
            "end": 375.365
          },
          {
            "word": "vida",
            "start": 375.365,
            "end": 375.531
          },
          {
            "word": "coloca",
            "start": 375.531,
            "end": 375.653
          },
          {
            "word": "na",
            "start": 375.653,
            "end": 375.781
          },
          {
            "word": "nossa",
            "start": 375.781,
            "end": 375.903
          },
          {
            "word": "frente",
            "start": 375.903,
            "end": 375.984
          },
          {
            "word": "assim,",
            "start": 375.984,
            "end": 376.437
          },
          {
            "word": "tá",
            "start": 376.437,
            "end": 376.725
          },
          {
            "word": "ligado?",
            "start": 376.725,
            "end": 378.158
          }
        ]
      },
      {
        "verseStart": 378.158,
        "verseEnd": 383.157,
        "translation": "You always think you're incapable of solving it",
        "words": [
          {
            "word": "Você",
            "start": 378.158,
            "end": 378.321
          },
          {
            "word": "se",
            "start": 378.321,
            "end": 378.403
          },
          {
            "word": "acha",
            "start": 378.403,
            "end": 380.383
          },
          {
            "word": "sempre",
            "start": 380.383,
            "end": 380.708
          },
          {
            "word": "incapaz",
            "start": 380.708,
            "end": 380.871
          },
          {
            "word": "de",
            "start": 380.871,
            "end": 381.487
          },
          {
            "word": "resolver",
            "start": 381.487,
            "end": 383.157
          }
        ]
      },
      {
        "verseStart": 383.157,
        "verseEnd": 385.703,
        "translation": "You bottle it, ya know?",
        "words": [
          {
            "word": "Se",
            "start": 383.157,
            "end": 383.279
          },
          {
            "word": "acovarda,",
            "start": 383.279,
            "end": 384.063
          },
          {
            "word": "morô?",
            "start": 384.063,
            "end": 385.703
          }
        ]
      },
      {
        "verseStart": 385.703,
        "verseEnd": 388.728,
        "translation": "Thought is the creative force",
        "words": [
          {
            "word": "O",
            "start": 385.703,
            "end": 385.912
          },
          {
            "word": "pensamento",
            "start": 385.912,
            "end": 386.366
          },
          {
            "word": "é",
            "start": 386.366,
            "end": 386.529
          },
          {
            "word": "a",
            "start": 386.529,
            "end": 386.651
          },
          {
            "word": "força",
            "start": 386.651,
            "end": 387.222
          },
          {
            "word": "criadora",
            "start": 387.222,
            "end": 388.728
          }
        ]
      },
      {
        "verseStart": 388.728,
        "verseEnd": 391.508,
        "translation": "Tomorrow is an illusion",
        "words": [
          {
            "word": "O",
            "start": 388.728,
            "end": 388.932
          },
          {
            "word": "amanha",
            "start": 388.932,
            "end": 389.584
          },
          {
            "word": "é",
            "start": 389.584,
            "end": 389.747
          },
          {
            "word": "ilusório",
            "start": 389.747,
            "end": 391.508
          }
        ]
      },
      {
        "verseStart": 391.508,
        "verseEnd": 393.273,
        "translation": "Because it doesn't exist yet",
        "words": [
          {
            "word": "Porque",
            "start": 391.508,
            "end": 391.631
          },
          {
            "word": "ainda",
            "start": 391.631,
            "end": 391.755
          },
          {
            "word": "não",
            "start": 391.755,
            "end": 392.006
          },
          {
            "word": "existe",
            "start": 392.006,
            "end": 393.273
          }
        ]
      },
      {
        "verseStart": 393.273,
        "verseEnd": 395.559,
        "translation": "Today is real",
        "words": [
          {
            "word": "O",
            "start": 393.273,
            "end": 393.395
          },
          {
            "word": "hoje",
            "start": 393.395,
            "end": 393.804
          },
          {
            "word": "é",
            "start": 393.804,
            "end": 394.254
          },
          {
            "word": "real",
            "start": 394.254,
            "end": 395.559
          }
        ]
      },
      {
        "verseStart": 395.559,
        "verseEnd": 398.629,
        "translation": "It's the reality you can interfere with",
        "words": [
          {
            "word": "É",
            "start": 395.559,
            "end": 395.722
          },
          {
            "word": "a",
            "start": 395.722,
            "end": 395.804
          },
          {
            "word": "realidade",
            "start": 395.804,
            "end": 395.928
          },
          {
            "word": "que",
            "start": 395.928,
            "end": 396.051
          },
          {
            "word": "você",
            "start": 396.051,
            "end": 396.133
          },
          {
            "word": "pode",
            "start": 396.133,
            "end": 396.911
          },
          {
            "word": "interferir",
            "start": 396.911,
            "end": 398.629
          }
        ]
      },
      {
        "verseStart": 398.629,
        "verseEnd": 401.328,
        "translation": "The opportunities for change",
        "words": [
          {
            "word": "As",
            "start": 398.629,
            "end": 398.955
          },
          {
            "word": "oportunidades",
            "start": 398.955,
            "end": 399.123
          },
          {
            "word": "de",
            "start": 399.123,
            "end": 400.102
          },
          {
            "word": "mudança",
            "start": 400.102,
            "end": 401.328
          }
        ]
      },
      {
        "verseStart": 401.328,
        "verseEnd": 403.21,
        "translation": "Are in the present",
        "words": [
          {
            "word": "Tá",
            "start": 401.328,
            "end": 401.45
          },
          {
            "word": "no",
            "start": 401.45,
            "end": 401.572
          },
          {
            "word": "presente",
            "start": 401.572,
            "end": 403.21
          }
        ]
      },
      {
        "verseStart": 403.21,
        "verseEnd": 405.626,
        "translation": "Don't wait for the future to change your life",
        "words": [
          {
            "word": "Não",
            "start": 403.21,
            "end": 403.332
          },
          {
            "word": "espere",
            "start": 403.332,
            "end": 403.537
          },
          {
            "word": "o",
            "start": 403.537,
            "end": 403.703
          },
          {
            "word": "futuro",
            "start": 403.703,
            "end": 403.911
          },
          {
            "word": "mudar",
            "start": 403.911,
            "end": 404.198
          },
          {
            "word": "sua",
            "start": 404.198,
            "end": 404.444
          },
          {
            "word": "vida",
            "start": 404.444,
            "end": 405.626
          }
        ]
      },
      {
        "verseStart": 405.626,
        "verseEnd": 409.682,
        "translation": "Because the future will be the consequence of the present",
        "words": [
          {
            "word": "Porque",
            "start": 405.626,
            "end": 405.748
          },
          {
            "word": "o",
            "start": 405.748,
            "end": 405.83
          },
          {
            "word": "futuro",
            "start": 405.83,
            "end": 405.953
          },
          {
            "word": "será",
            "start": 405.953,
            "end": 406.238
          },
          {
            "word": "a",
            "start": 406.238,
            "end": 406.569
          },
          {
            "word": "consequência",
            "start": 406.569,
            "end": 407.303
          },
          {
            "word": "do",
            "start": 407.303,
            "end": 407.469
          },
          {
            "word": "presente",
            "start": 407.469,
            "end": 409.682
          }
        ]
      },
      {
        "verseStart": 409.682,
        "verseEnd": 412.545,
        "translation": "Parasite today, a poor sod tomorrow",
        "words": [
          {
            "word": "Parasita",
            "start": 409.682,
            "end": 409.927
          },
          {
            "word": "hoje,",
            "start": 409.927,
            "end": 410.904
          },
          {
            "word": "um",
            "start": 410.904,
            "end": 411.069
          },
          {
            "word": "coitado",
            "start": 411.069,
            "end": 411.314
          },
          {
            "word": "amanhã",
            "start": 411.314,
            "end": 412.545
          }
        ]
      },
      {
        "verseStart": 412.545,
        "verseEnd": 416.465,
        "translation": "Hustle today, victory tomorrow",
        "words": [
          {
            "word": "Corrida",
            "start": 412.545,
            "end": 412.789
          },
          {
            "word": "hoje,",
            "start": 412.789,
            "end": 413.775
          },
          {
            "word": "vitória",
            "start": 413.775,
            "end": 414.142
          },
          {
            "word": "amanhã",
            "start": 414.142,
            "end": 416.465
          }
        ]
      },
      {
        "verseStart": 416.465,
        "verseEnd": 419.629,
        "translation": "Never forget that, brother",
        "words": [
          {
            "word": "Nunca",
            "start": 416.465,
            "end": 416.882
          },
          {
            "word": "esqueça",
            "start": 416.882,
            "end": 417.25
          },
          {
            "word": "disso,",
            "start": 417.25,
            "end": 417.629
          },
          {
            "word": "irmão",
            "start": 417.629,
            "end": 0
          }
        ]
      }
    ]
  }
};
