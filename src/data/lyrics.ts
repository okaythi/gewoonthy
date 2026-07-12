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
        "verseStart": 28.57,
        "verseEnd": 32.37,
        "words": [
          {
            "word": "For ",
            "start": 28.57,
            "end": 28.915
          },
          {
            "word": "the ",
            "start": 28.915,
            "end": 29.261
          },
          {
            "word": "love ",
            "start": 29.261,
            "end": 29.606
          },
          {
            "word": "of ",
            "start": 29.606,
            "end": 29.952
          },
          {
            "word": "God ",
            "start": 29.952,
            "end": 30.297
          },
          {
            "word": ", ",
            "start": 30.297,
            "end": 30.643
          },
          {
            "word": "will ",
            "start": 30.643,
            "end": 30.988
          },
          {
            "word": "you ",
            "start": 30.988,
            "end": 31.334
          },
          {
            "word": "bite ",
            "start": 31.334,
            "end": 31.679
          },
          {
            "word": "your ",
            "start": 31.679,
            "end": 32.025
          },
          {
            "word": "tongue",
            "start": 32.025,
            "end": 32.37
          }
        ]
      },
      {
        "verseStart": 32.37,
        "verseEnd": 35.74,
        "words": [
          {
            "word": "Before ",
            "start": 32.37,
            "end": 32.851
          },
          {
            "word": "we ",
            "start": 32.851,
            "end": 33.333
          },
          {
            "word": "make ",
            "start": 33.333,
            "end": 33.814
          },
          {
            "word": "you ",
            "start": 33.814,
            "end": 34.296
          },
          {
            "word": "swallow ",
            "start": 34.296,
            "end": 34.777
          },
          {
            "word": "it ",
            "start": 34.777,
            "end": 35.259
          },
          {
            "word": "?",
            "start": 35.259,
            "end": 35.74
          }
        ]
      },
      {
        "verseStart": 35.74,
        "verseEnd": 41.97,
        "words": [
          {
            "word": "It's ",
            "start": 35.74,
            "end": 36.519
          },
          {
            "word": "moments ",
            "start": 36.519,
            "end": 37.297
          },
          {
            "word": "like ",
            "start": 37.297,
            "end": 38.076
          },
          {
            "word": "this ",
            "start": 38.076,
            "end": 38.855
          },
          {
            "word": "where ",
            "start": 38.855,
            "end": 39.634
          },
          {
            "word": "silence ",
            "start": 39.634,
            "end": 40.413
          },
          {
            "word": "is ",
            "start": 40.413,
            "end": 41.191
          },
          {
            "word": "golden",
            "start": 41.191,
            "end": 41.97
          }
        ]
      },
      {
        "verseStart": 41.97,
        "verseEnd": 42.87,
        "words": [
          {
            "word": "And ",
            "start": 41.97,
            "end": 42.195
          },
          {
            "word": "then ",
            "start": 42.195,
            "end": 42.42
          },
          {
            "word": "you ",
            "start": 42.42,
            "end": 42.645
          },
          {
            "word": "speak",
            "start": 42.645,
            "end": 42.87
          }
        ]
      },
      {
        "verseStart": 42.87,
        "verseEnd": 46.38,
        "words": [
          {
            "word": "No ",
            "start": 42.87,
            "end": 43.455
          },
          {
            "word": "one ",
            "start": 43.455,
            "end": 44.04
          },
          {
            "word": "wants ",
            "start": 44.04,
            "end": 44.625
          },
          {
            "word": "to ",
            "start": 44.625,
            "end": 45.21
          },
          {
            "word": "hear ",
            "start": 45.21,
            "end": 45.795
          },
          {
            "word": "you",
            "start": 45.795,
            "end": 46.38
          }
        ]
      },
      {
        "verseStart": 46.38,
        "verseEnd": 49.23,
        "words": [
          {
            "word": "No ",
            "start": 46.38,
            "end": 46.855
          },
          {
            "word": "one ",
            "start": 46.855,
            "end": 47.33
          },
          {
            "word": "wants ",
            "start": 47.33,
            "end": 47.805
          },
          {
            "word": "to ",
            "start": 47.805,
            "end": 48.28
          },
          {
            "word": "see ",
            "start": 48.28,
            "end": 48.755
          },
          {
            "word": "you",
            "start": 48.755,
            "end": 49.23
          }
        ]
      },
      {
        "verseStart": 49.23,
        "verseEnd": 53.23,
        "words": [
          {
            "word": "So ",
            "start": 49.23,
            "end": 49.594
          },
          {
            "word": "desperate ",
            "start": 49.594,
            "end": 49.957
          },
          {
            "word": "and ",
            "start": 49.957,
            "end": 50.321
          },
          {
            "word": "pathetic ",
            "start": 50.321,
            "end": 50.685
          },
          {
            "word": ", ",
            "start": 50.685,
            "end": 51.048
          },
          {
            "word": "I'm ",
            "start": 51.048,
            "end": 51.412
          },
          {
            "word": "begging ",
            "start": 51.412,
            "end": 51.775
          },
          {
            "word": "you ",
            "start": 51.775,
            "end": 52.139
          },
          {
            "word": "to ",
            "start": 52.139,
            "end": 52.503
          },
          {
            "word": "spare ",
            "start": 52.503,
            "end": 52.866
          },
          {
            "word": "me",
            "start": 52.866,
            "end": 53.23
          }
        ]
      },
      {
        "verseStart": 53.23,
        "verseEnd": 57.08,
        "words": [
          {
            "word": "The ",
            "start": 53.23,
            "end": 54
          },
          {
            "word": "pleasure ",
            "start": 54,
            "end": 54.77
          },
          {
            "word": "of ",
            "start": 54.77,
            "end": 55.54
          },
          {
            "word": "your ",
            "start": 55.54,
            "end": 56.31
          },
          {
            "word": "company",
            "start": 56.31,
            "end": 57.08
          }
        ]
      },
      {
        "verseStart": 57.08,
        "verseEnd": 64.06,
        "words": [
          {
            "word": "When ",
            "start": 57.08,
            "end": 57.88
          },
          {
            "word": "did ",
            "start": 57.88,
            "end": 58.68
          },
          {
            "word": "the ",
            "start": 58.68,
            "end": 59.48
          },
          {
            "word": "diamonds ",
            "start": 59.48,
            "end": 60.28
          },
          {
            "word": "leave ",
            "start": 60.28,
            "end": 61.08
          },
          {
            "word": "your ",
            "start": 61.08,
            "end": 61.88
          },
          {
            "word": "bones ",
            "start": 61.88,
            "end": 62.68
          },
          {
            "word": "?",
            "start": 62.68,
            "end": 63.48
          }
        ]
      },
      {
        "verseStart": 64.06,
        "verseEnd": 67.52,
        "words": [
          {
            "word": "I'm ",
            "start": 64.06,
            "end": 64.554
          },
          {
            "word": "burning ",
            "start": 64.554,
            "end": 65.049
          },
          {
            "word": "down ",
            "start": 65.049,
            "end": 65.543
          },
          {
            "word": "every ",
            "start": 65.543,
            "end": 66.037
          },
          {
            "word": "bridge ",
            "start": 66.037,
            "end": 66.531
          },
          {
            "word": "we ",
            "start": 66.531,
            "end": 67.026
          },
          {
            "word": "made",
            "start": 67.026,
            "end": 67.52
          }
        ]
      },
      {
        "verseStart": 67.52,
        "verseEnd": 71.07,
        "words": [
          {
            "word": "I'll ",
            "start": 67.52,
            "end": 67.914
          },
          {
            "word": "watch ",
            "start": 67.914,
            "end": 68.309
          },
          {
            "word": "you ",
            "start": 68.309,
            "end": 68.703
          },
          {
            "word": "choke ",
            "start": 68.703,
            "end": 69.098
          },
          {
            "word": "on ",
            "start": 69.098,
            "end": 69.492
          },
          {
            "word": "the ",
            "start": 69.492,
            "end": 69.887
          },
          {
            "word": "hearts ",
            "start": 69.887,
            "end": 70.281
          },
          {
            "word": "you ",
            "start": 70.281,
            "end": 70.676
          },
          {
            "word": "break",
            "start": 70.676,
            "end": 71.07
          }
        ]
      },
      {
        "verseStart": 71.07,
        "verseEnd": 74.22,
        "words": [
          {
            "word": "I'm ",
            "start": 71.07,
            "end": 71.52
          },
          {
            "word": "bleeding ",
            "start": 71.52,
            "end": 71.97
          },
          {
            "word": "out ",
            "start": 71.97,
            "end": 72.42
          },
          {
            "word": "every ",
            "start": 72.42,
            "end": 72.87
          },
          {
            "word": "word ",
            "start": 72.87,
            "end": 73.32
          },
          {
            "word": "you ",
            "start": 73.32,
            "end": 73.77
          },
          {
            "word": "said",
            "start": 73.77,
            "end": 74.22
          }
        ]
      },
      {
        "verseStart": 74.22,
        "verseEnd": 77.96000000000001,
        "words": [
          {
            "word": "Go ",
            "start": 74.22,
            "end": 74.754
          },
          {
            "word": "to ",
            "start": 74.754,
            "end": 75.289
          },
          {
            "word": "hell ",
            "start": 75.289,
            "end": 75.823
          },
          {
            "word": ", ",
            "start": 75.823,
            "end": 76.357
          },
          {
            "word": "for ",
            "start": 76.357,
            "end": 76.891
          },
          {
            "word": "heaven's ",
            "start": 76.891,
            "end": 77.426
          },
          {
            "word": "sake",
            "start": 77.426,
            "end": 77.96
          }
        ]
      },
      {
        "verseStart": 77.96000000000001,
        "verseEnd": 81.4,
        "words": [
          {
            "word": "I'm ",
            "start": 77.96,
            "end": 78.451
          },
          {
            "word": "burning ",
            "start": 78.451,
            "end": 78.943
          },
          {
            "word": "down ",
            "start": 78.943,
            "end": 79.434
          },
          {
            "word": "every ",
            "start": 79.434,
            "end": 79.926
          },
          {
            "word": "bridge ",
            "start": 79.926,
            "end": 80.417
          },
          {
            "word": "we ",
            "start": 80.417,
            "end": 80.909
          },
          {
            "word": "made",
            "start": 80.909,
            "end": 81.4
          }
        ]
      },
      {
        "verseStart": 81.4,
        "verseEnd": 84.97,
        "words": [
          {
            "word": "I'll ",
            "start": 81.4,
            "end": 81.797
          },
          {
            "word": "watch ",
            "start": 81.797,
            "end": 82.193
          },
          {
            "word": "you ",
            "start": 82.193,
            "end": 82.59
          },
          {
            "word": "choke ",
            "start": 82.59,
            "end": 82.987
          },
          {
            "word": "on ",
            "start": 82.987,
            "end": 83.383
          },
          {
            "word": "the ",
            "start": 83.383,
            "end": 83.78
          },
          {
            "word": "hearts ",
            "start": 83.78,
            "end": 84.177
          },
          {
            "word": "you ",
            "start": 84.177,
            "end": 84.573
          },
          {
            "word": "break",
            "start": 84.573,
            "end": 84.97
          }
        ]
      },
      {
        "verseStart": 84.97,
        "verseEnd": 88.13,
        "words": [
          {
            "word": "I'm ",
            "start": 84.97,
            "end": 85.421
          },
          {
            "word": "bleeding ",
            "start": 85.421,
            "end": 85.873
          },
          {
            "word": "out ",
            "start": 85.873,
            "end": 86.324
          },
          {
            "word": "every ",
            "start": 86.324,
            "end": 86.776
          },
          {
            "word": "word ",
            "start": 86.776,
            "end": 87.227
          },
          {
            "word": "you ",
            "start": 87.227,
            "end": 87.679
          },
          {
            "word": "said",
            "start": 87.679,
            "end": 88.13
          }
        ]
      },
      {
        "verseStart": 88.13,
        "verseEnd": 91.93,
        "words": [
          {
            "word": "Go ",
            "start": 88.13,
            "end": 88.673
          },
          {
            "word": "to ",
            "start": 88.673,
            "end": 89.216
          },
          {
            "word": "hell ",
            "start": 89.216,
            "end": 89.759
          },
          {
            "word": ", ",
            "start": 89.759,
            "end": 90.301
          },
          {
            "word": "for ",
            "start": 90.301,
            "end": 90.844
          },
          {
            "word": "heaven's ",
            "start": 90.844,
            "end": 91.387
          },
          {
            "word": "sake",
            "start": 91.387,
            "end": 91.93
          }
        ]
      },
      {
        "verseStart": 95.16,
        "verseEnd": 98.53,
        "words": [
          {
            "word": "Go ",
            "start": 95.16,
            "end": 95.641
          },
          {
            "word": "to ",
            "start": 95.641,
            "end": 96.123
          },
          {
            "word": "hell ",
            "start": 96.123,
            "end": 96.604
          },
          {
            "word": ", ",
            "start": 96.604,
            "end": 97.086
          },
          {
            "word": "for ",
            "start": 97.086,
            "end": 97.567
          },
          {
            "word": "heaven's ",
            "start": 97.567,
            "end": 98.049
          },
          {
            "word": "sake",
            "start": 98.049,
            "end": 98.53
          }
        ]
      },
      {
        "verseStart": 102.06,
        "verseEnd": 105.50999999999999,
        "words": [
          {
            "word": "No ",
            "start": 102.06,
            "end": 102.374
          },
          {
            "word": "one ",
            "start": 102.374,
            "end": 102.687
          },
          {
            "word": "wants ",
            "start": 102.687,
            "end": 103.001
          },
          {
            "word": "to ",
            "start": 103.001,
            "end": 103.315
          },
          {
            "word": "hear ",
            "start": 103.315,
            "end": 103.628
          },
          {
            "word": "you ",
            "start": 103.628,
            "end": 103.942
          },
          {
            "word": "( ",
            "start": 103.942,
            "end": 104.255
          },
          {
            "word": "save ",
            "start": 104.255,
            "end": 104.569
          },
          {
            "word": "your ",
            "start": 104.569,
            "end": 104.883
          },
          {
            "word": "breath ",
            "start": 104.883,
            "end": 105.196
          },
          {
            "word": ")",
            "start": 105.196,
            "end": 105.51
          }
        ]
      },
      {
        "verseStart": 105.50999999999999,
        "verseEnd": 108.39,
        "words": [
          {
            "word": "No ",
            "start": 105.51,
            "end": 105.99
          },
          {
            "word": "one ",
            "start": 105.99,
            "end": 106.47
          },
          {
            "word": "wants ",
            "start": 106.47,
            "end": 106.95
          },
          {
            "word": "to ",
            "start": 106.95,
            "end": 107.43
          },
          {
            "word": "see ",
            "start": 107.43,
            "end": 107.91
          },
          {
            "word": "you",
            "start": 107.91,
            "end": 108.39
          }
        ]
      },
      {
        "verseStart": 108.39,
        "verseEnd": 112.22999999999999,
        "words": [
          {
            "word": "So ",
            "start": 108.39,
            "end": 108.685
          },
          {
            "word": "desperate ",
            "start": 108.685,
            "end": 108.981
          },
          {
            "word": "and ",
            "start": 108.981,
            "end": 109.276
          },
          {
            "word": "pathetic ",
            "start": 109.276,
            "end": 109.572
          },
          {
            "word": ", ",
            "start": 109.572,
            "end": 109.867
          },
          {
            "word": "you ",
            "start": 109.867,
            "end": 110.162
          },
          {
            "word": "think ",
            "start": 110.162,
            "end": 110.458
          },
          {
            "word": "that ",
            "start": 110.458,
            "end": 110.753
          },
          {
            "word": "no ",
            "start": 110.753,
            "end": 111.048
          },
          {
            "word": "one ",
            "start": 111.048,
            "end": 111.344
          },
          {
            "word": "sees ",
            "start": 111.344,
            "end": 111.639
          },
          {
            "word": "this ",
            "start": 111.639,
            "end": 111.935
          },
          {
            "word": "?",
            "start": 111.935,
            "end": 112.23
          }
        ]
      },
      {
        "verseStart": 112.22999999999999,
        "verseEnd": 116.22,
        "words": [
          {
            "word": "I ",
            "start": 112.23,
            "end": 112.629
          },
          {
            "word": "think ",
            "start": 112.629,
            "end": 113.028
          },
          {
            "word": "it's ",
            "start": 113.028,
            "end": 113.427
          },
          {
            "word": "time ",
            "start": 113.427,
            "end": 113.826
          },
          {
            "word": "you ",
            "start": 113.826,
            "end": 114.225
          },
          {
            "word": "knew ",
            "start": 114.225,
            "end": 114.624
          },
          {
            "word": "the ",
            "start": 114.624,
            "end": 115.023
          },
          {
            "word": "truth ",
            "start": 115.023,
            "end": 115.422
          },
          {
            "word": ", ",
            "start": 115.422,
            "end": 115.821
          },
          {
            "word": "yeah",
            "start": 115.821,
            "end": 116.22
          }
        ]
      },
      {
        "verseStart": 116.22,
        "verseEnd": 119.77000000000001,
        "words": [
          {
            "word": "I'm ",
            "start": 116.22,
            "end": 116.727
          },
          {
            "word": "burning ",
            "start": 116.727,
            "end": 117.234
          },
          {
            "word": "down ",
            "start": 117.234,
            "end": 117.741
          },
          {
            "word": "every ",
            "start": 117.741,
            "end": 118.249
          },
          {
            "word": "bridge ",
            "start": 118.249,
            "end": 118.756
          },
          {
            "word": "we ",
            "start": 118.756,
            "end": 119.263
          },
          {
            "word": "made",
            "start": 119.263,
            "end": 119.77
          }
        ]
      },
      {
        "verseStart": 119.77000000000001,
        "verseEnd": 123.12,
        "words": [
          {
            "word": "I'll ",
            "start": 119.77,
            "end": 120.142
          },
          {
            "word": "watch ",
            "start": 120.142,
            "end": 120.514
          },
          {
            "word": "you ",
            "start": 120.514,
            "end": 120.887
          },
          {
            "word": "choke ",
            "start": 120.887,
            "end": 121.259
          },
          {
            "word": "on ",
            "start": 121.259,
            "end": 121.631
          },
          {
            "word": "the ",
            "start": 121.631,
            "end": 122.003
          },
          {
            "word": "hearts ",
            "start": 122.003,
            "end": 122.376
          },
          {
            "word": "you ",
            "start": 122.376,
            "end": 122.748
          },
          {
            "word": "break",
            "start": 122.748,
            "end": 123.12
          }
        ]
      },
      {
        "verseStart": 123.12,
        "verseEnd": 126.43,
        "words": [
          {
            "word": "I'm ",
            "start": 123.12,
            "end": 123.593
          },
          {
            "word": "bleeding ",
            "start": 123.593,
            "end": 124.066
          },
          {
            "word": "out ",
            "start": 124.066,
            "end": 124.539
          },
          {
            "word": "every ",
            "start": 124.539,
            "end": 125.011
          },
          {
            "word": "word ",
            "start": 125.011,
            "end": 125.484
          },
          {
            "word": "you ",
            "start": 125.484,
            "end": 125.957
          },
          {
            "word": "said",
            "start": 125.957,
            "end": 126.43
          }
        ]
      },
      {
        "verseStart": 126.43,
        "verseEnd": 130.15,
        "words": [
          {
            "word": "Go ",
            "start": 126.43,
            "end": 126.961
          },
          {
            "word": "to ",
            "start": 126.961,
            "end": 127.493
          },
          {
            "word": "hell ",
            "start": 127.493,
            "end": 128.024
          },
          {
            "word": ", ",
            "start": 128.024,
            "end": 128.556
          },
          {
            "word": "for ",
            "start": 128.556,
            "end": 129.087
          },
          {
            "word": "heaven's ",
            "start": 129.087,
            "end": 129.619
          },
          {
            "word": "sake",
            "start": 129.619,
            "end": 130.15
          }
        ]
      },
      {
        "verseStart": 130.15,
        "verseEnd": 133.63,
        "words": [
          {
            "word": "I'm ",
            "start": 130.15,
            "end": 130.647
          },
          {
            "word": "burning ",
            "start": 130.647,
            "end": 131.144
          },
          {
            "word": "down ",
            "start": 131.144,
            "end": 131.641
          },
          {
            "word": "every ",
            "start": 131.641,
            "end": 132.139
          },
          {
            "word": "bridge ",
            "start": 132.139,
            "end": 132.636
          },
          {
            "word": "we ",
            "start": 132.636,
            "end": 133.133
          },
          {
            "word": "made",
            "start": 133.133,
            "end": 133.63
          }
        ]
      },
      {
        "verseStart": 133.63,
        "verseEnd": 137.19,
        "words": [
          {
            "word": "I'll ",
            "start": 133.63,
            "end": 134.026
          },
          {
            "word": "watch ",
            "start": 134.026,
            "end": 134.421
          },
          {
            "word": "you ",
            "start": 134.421,
            "end": 134.817
          },
          {
            "word": "choke ",
            "start": 134.817,
            "end": 135.212
          },
          {
            "word": "on ",
            "start": 135.212,
            "end": 135.608
          },
          {
            "word": "the ",
            "start": 135.608,
            "end": 136.003
          },
          {
            "word": "hearts ",
            "start": 136.003,
            "end": 136.399
          },
          {
            "word": "you ",
            "start": 136.399,
            "end": 136.794
          },
          {
            "word": "break",
            "start": 136.794,
            "end": 137.19
          }
        ]
      },
      {
        "verseStart": 137.19,
        "verseEnd": 140.39,
        "words": [
          {
            "word": "I'm ",
            "start": 137.19,
            "end": 137.647
          },
          {
            "word": "bleeding ",
            "start": 137.647,
            "end": 138.104
          },
          {
            "word": "out ",
            "start": 138.104,
            "end": 138.561
          },
          {
            "word": "every ",
            "start": 138.561,
            "end": 139.019
          },
          {
            "word": "word ",
            "start": 139.019,
            "end": 139.476
          },
          {
            "word": "you ",
            "start": 139.476,
            "end": 139.933
          },
          {
            "word": "said",
            "start": 139.933,
            "end": 140.39
          }
        ]
      },
      {
        "verseStart": 140.39,
        "verseEnd": 143.99,
        "words": [
          {
            "word": "Go ",
            "start": 140.39,
            "end": 140.904
          },
          {
            "word": "to ",
            "start": 140.904,
            "end": 141.419
          },
          {
            "word": "hell ",
            "start": 141.419,
            "end": 141.933
          },
          {
            "word": ", ",
            "start": 141.933,
            "end": 142.447
          },
          {
            "word": "for ",
            "start": 142.447,
            "end": 142.961
          },
          {
            "word": "heaven's ",
            "start": 142.961,
            "end": 143.476
          },
          {
            "word": "sake",
            "start": 143.476,
            "end": 143.99
          }
        ]
      },
      {
        "verseStart": 143.99,
        "verseEnd": 152.02,
        "words": [
          {
            "word": "When ",
            "start": 143.99,
            "end": 144.79
          },
          {
            "word": "did ",
            "start": 144.79,
            "end": 145.59
          },
          {
            "word": "the ",
            "start": 145.59,
            "end": 146.39
          },
          {
            "word": "diamonds ",
            "start": 146.39,
            "end": 147.19
          },
          {
            "word": "leave ",
            "start": 147.19,
            "end": 147.99
          },
          {
            "word": "your ",
            "start": 147.99,
            "end": 148.79
          },
          {
            "word": "bones ",
            "start": 148.79,
            "end": 149.59
          },
          {
            "word": "?",
            "start": 149.59,
            "end": 150.39
          }
        ]
      },
      {
        "verseStart": 156.76,
        "verseEnd": 161.79,
        "words": [
          {
            "word": "Leave ",
            "start": 156.76,
            "end": 157.56
          },
          {
            "word": "your ",
            "start": 157.56,
            "end": 158.36
          },
          {
            "word": "bones",
            "start": 158.36,
            "end": 159.16
          }
        ]
      },
      {
        "verseStart": 168.36,
        "verseEnd": 171.93,
        "words": [
          {
            "word": "You're ",
            "start": 168.36,
            "end": 168.757
          },
          {
            "word": "not ",
            "start": 168.757,
            "end": 169.153
          },
          {
            "word": "a ",
            "start": 169.153,
            "end": 169.55
          },
          {
            "word": "shepherd ",
            "start": 169.55,
            "end": 169.947
          },
          {
            "word": ", ",
            "start": 169.947,
            "end": 170.343
          },
          {
            "word": "you're ",
            "start": 170.343,
            "end": 170.74
          },
          {
            "word": "just ",
            "start": 170.74,
            "end": 171.137
          },
          {
            "word": "a ",
            "start": 171.137,
            "end": 171.533
          },
          {
            "word": "sheep",
            "start": 171.533,
            "end": 171.93
          }
        ]
      },
      {
        "verseStart": 171.93,
        "verseEnd": 175.34,
        "words": [
          {
            "word": "A ",
            "start": 171.93,
            "end": 172.417
          },
          {
            "word": "combined ",
            "start": 172.417,
            "end": 172.904
          },
          {
            "word": "effort ",
            "start": 172.904,
            "end": 173.391
          },
          {
            "word": "of ",
            "start": 173.391,
            "end": 173.879
          },
          {
            "word": "everyone ",
            "start": 173.879,
            "end": 174.366
          },
          {
            "word": "you ",
            "start": 174.366,
            "end": 174.853
          },
          {
            "word": "meet",
            "start": 174.853,
            "end": 175.34
          }
        ]
      },
      {
        "verseStart": 175.34,
        "verseEnd": 178.64,
        "words": [
          {
            "word": "You're ",
            "start": 175.34,
            "end": 175.89
          },
          {
            "word": "all ",
            "start": 175.89,
            "end": 176.44
          },
          {
            "word": "flesh ",
            "start": 176.44,
            "end": 176.99
          },
          {
            "word": "with ",
            "start": 176.99,
            "end": 177.54
          },
          {
            "word": "no ",
            "start": 177.54,
            "end": 178.09
          },
          {
            "word": "bone",
            "start": 178.09,
            "end": 178.64
          }
        ]
      },
      {
        "verseStart": 178.64,
        "verseEnd": 184.15,
        "words": [
          {
            "word": "Feed ",
            "start": 178.64,
            "end": 179.064
          },
          {
            "word": "' ",
            "start": 179.064,
            "end": 179.488
          },
          {
            "word": "em ",
            "start": 179.488,
            "end": 179.912
          },
          {
            "word": "to ",
            "start": 179.912,
            "end": 180.335
          },
          {
            "word": "the ",
            "start": 180.335,
            "end": 180.759
          },
          {
            "word": "sharks ",
            "start": 180.759,
            "end": 181.183
          },
          {
            "word": "and ",
            "start": 181.183,
            "end": 181.607
          },
          {
            "word": "throw ",
            "start": 181.607,
            "end": 182.031
          },
          {
            "word": "' ",
            "start": 182.031,
            "end": 182.455
          },
          {
            "word": "em ",
            "start": 182.455,
            "end": 182.878
          },
          {
            "word": "to ",
            "start": 182.878,
            "end": 183.302
          },
          {
            "word": "the ",
            "start": 183.302,
            "end": 183.726
          },
          {
            "word": "wolves",
            "start": 183.726,
            "end": 184.15
          }
        ]
      },
      {
        "verseStart": 196.32,
        "verseEnd": 199.77,
        "words": [
          {
            "word": "I'm ",
            "start": 196.32,
            "end": 196.813
          },
          {
            "word": "burning ",
            "start": 196.813,
            "end": 197.306
          },
          {
            "word": "down ",
            "start": 197.306,
            "end": 197.799
          },
          {
            "word": "every ",
            "start": 197.799,
            "end": 198.291
          },
          {
            "word": "bridge ",
            "start": 198.291,
            "end": 198.784
          },
          {
            "word": "we ",
            "start": 198.784,
            "end": 199.277
          },
          {
            "word": "made",
            "start": 199.277,
            "end": 199.77
          }
        ]
      },
      {
        "verseStart": 199.77,
        "verseEnd": 203.18,
        "words": [
          {
            "word": "I'll ",
            "start": 199.77,
            "end": 200.149
          },
          {
            "word": "watch ",
            "start": 200.149,
            "end": 200.528
          },
          {
            "word": "you ",
            "start": 200.528,
            "end": 200.907
          },
          {
            "word": "choke ",
            "start": 200.907,
            "end": 201.286
          },
          {
            "word": "on ",
            "start": 201.286,
            "end": 201.664
          },
          {
            "word": "the ",
            "start": 201.664,
            "end": 202.043
          },
          {
            "word": "hearts ",
            "start": 202.043,
            "end": 202.422
          },
          {
            "word": "you ",
            "start": 202.422,
            "end": 202.801
          },
          {
            "word": "break",
            "start": 202.801,
            "end": 203.18
          }
        ]
      },
      {
        "verseStart": 203.18,
        "verseEnd": 206.4,
        "words": [
          {
            "word": "I'm ",
            "start": 203.18,
            "end": 203.64
          },
          {
            "word": "bleeding ",
            "start": 203.64,
            "end": 204.1
          },
          {
            "word": "out ",
            "start": 204.1,
            "end": 204.56
          },
          {
            "word": "every ",
            "start": 204.56,
            "end": 205.02
          },
          {
            "word": "word ",
            "start": 205.02,
            "end": 205.48
          },
          {
            "word": "you ",
            "start": 205.48,
            "end": 205.94
          },
          {
            "word": "said",
            "start": 205.94,
            "end": 206.4
          }
        ]
      },
      {
        "verseStart": 206.4,
        "verseEnd": 210.14,
        "words": [
          {
            "word": "Go ",
            "start": 206.4,
            "end": 206.934
          },
          {
            "word": "to ",
            "start": 206.934,
            "end": 207.469
          },
          {
            "word": "hell ",
            "start": 207.469,
            "end": 208.003
          },
          {
            "word": ", ",
            "start": 208.003,
            "end": 208.537
          },
          {
            "word": "for ",
            "start": 208.537,
            "end": 209.071
          },
          {
            "word": "heaven's ",
            "start": 209.071,
            "end": 209.606
          },
          {
            "word": "sake",
            "start": 209.606,
            "end": 210.14
          }
        ]
      },
      {
        "verseStart": 210.14,
        "verseEnd": 213.6,
        "words": [
          {
            "word": "I'm ",
            "start": 210.14,
            "end": 210.634
          },
          {
            "word": "burning ",
            "start": 210.634,
            "end": 211.129
          },
          {
            "word": "down ",
            "start": 211.129,
            "end": 211.623
          },
          {
            "word": "every ",
            "start": 211.623,
            "end": 212.117
          },
          {
            "word": "bridge ",
            "start": 212.117,
            "end": 212.611
          },
          {
            "word": "we ",
            "start": 212.611,
            "end": 213.106
          },
          {
            "word": "made",
            "start": 213.106,
            "end": 213.6
          }
        ]
      },
      {
        "verseStart": 213.6,
        "verseEnd": 217.17000000000002,
        "words": [
          {
            "word": "I'll ",
            "start": 213.6,
            "end": 213.997
          },
          {
            "word": "watch ",
            "start": 213.997,
            "end": 214.393
          },
          {
            "word": "you ",
            "start": 214.393,
            "end": 214.79
          },
          {
            "word": "choke ",
            "start": 214.79,
            "end": 215.187
          },
          {
            "word": "on ",
            "start": 215.187,
            "end": 215.583
          },
          {
            "word": "the ",
            "start": 215.583,
            "end": 215.98
          },
          {
            "word": "hearts ",
            "start": 215.98,
            "end": 216.377
          },
          {
            "word": "you ",
            "start": 216.377,
            "end": 216.773
          },
          {
            "word": "break",
            "start": 216.773,
            "end": 217.17
          }
        ]
      },
      {
        "verseStart": 217.17000000000002,
        "verseEnd": 220.36,
        "words": [
          {
            "word": "I'm ",
            "start": 217.17,
            "end": 217.626
          },
          {
            "word": "bleeding ",
            "start": 217.626,
            "end": 218.081
          },
          {
            "word": "out ",
            "start": 218.081,
            "end": 218.537
          },
          {
            "word": "every ",
            "start": 218.537,
            "end": 218.993
          },
          {
            "word": "word ",
            "start": 218.993,
            "end": 219.449
          },
          {
            "word": "you ",
            "start": 219.449,
            "end": 219.904
          },
          {
            "word": "said",
            "start": 219.904,
            "end": 220.36
          }
        ]
      },
      {
        "verseStart": 220.36,
        "verseEnd": 223.87,
        "words": [
          {
            "word": "Go ",
            "start": 220.36,
            "end": 220.861
          },
          {
            "word": "to ",
            "start": 220.861,
            "end": 221.363
          },
          {
            "word": "hell ",
            "start": 221.363,
            "end": 221.864
          },
          {
            "word": ", ",
            "start": 221.864,
            "end": 222.366
          },
          {
            "word": "for ",
            "start": 222.366,
            "end": 222.867
          },
          {
            "word": "heaven's ",
            "start": 222.867,
            "end": 223.369
          },
          {
            "word": "sake",
            "start": 223.369,
            "end": 223.87
          }
        ]
      },
      {
        "verseStart": 223.87,
        "verseEnd": 227.37,
        "words": [
          {
            "word": "Go ",
            "start": 223.87,
            "end": 224.37
          },
          {
            "word": "to ",
            "start": 224.37,
            "end": 224.87
          },
          {
            "word": "hell ",
            "start": 224.87,
            "end": 225.37
          },
          {
            "word": ", ",
            "start": 225.37,
            "end": 225.87
          },
          {
            "word": "for ",
            "start": 225.87,
            "end": 226.37
          },
          {
            "word": "heaven's ",
            "start": 226.37,
            "end": 226.87
          },
          {
            "word": "sake",
            "start": 226.87,
            "end": 227.37
          }
        ]
      },
      {
        "verseStart": 227.37,
        "verseEnd": 230.73,
        "words": [
          {
            "word": "Go ",
            "start": 227.37,
            "end": 227.85
          },
          {
            "word": "to ",
            "start": 227.85,
            "end": 228.33
          },
          {
            "word": "hell ",
            "start": 228.33,
            "end": 228.81
          },
          {
            "word": ", ",
            "start": 228.81,
            "end": 229.29
          },
          {
            "word": "for ",
            "start": 229.29,
            "end": 229.77
          },
          {
            "word": "heaven's ",
            "start": 229.77,
            "end": 230.25
          },
          {
            "word": "sake",
            "start": 230.25,
            "end": 230.73
          }
        ]
      },
      {
        "verseStart": 230.73,
        "verseEnd": 233.64,
        "words": [
          {
            "word": "Go ",
            "start": 230.73,
            "end": 231.146
          },
          {
            "word": "to ",
            "start": 231.146,
            "end": 231.561
          },
          {
            "word": "hell ",
            "start": 231.561,
            "end": 231.977
          },
          {
            "word": ", ",
            "start": 231.977,
            "end": 232.393
          },
          {
            "word": "for ",
            "start": 232.393,
            "end": 232.809
          },
          {
            "word": "heaven's ",
            "start": 232.809,
            "end": 233.224
          },
          {
            "word": "sake",
            "start": 233.224,
            "end": 233.64
          }
        ]
      }
    ]
  },
  "The Chemical Brothers - Eve Of Destruction.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 0.02,
        "verseEnd": 2.59,
        "words": [
          {
            "word": "The ",
            "start": 0.02,
            "end": 0.662
          },
          {
            "word": "eve ",
            "start": 0.662,
            "end": 1.305
          },
          {
            "word": "of ",
            "start": 1.305,
            "end": 1.947
          },
          {
            "word": "destruction",
            "start": 1.947,
            "end": 2.59
          }
        ]
      },
      {
        "verseStart": 2.59,
        "verseEnd": 6.96,
        "words": [
          {
            "word": "The ",
            "start": 2.59,
            "end": 3.39
          },
          {
            "word": "eve ",
            "start": 3.39,
            "end": 4.19
          },
          {
            "word": "of ",
            "start": 4.19,
            "end": 4.99
          },
          {
            "word": "destruction",
            "start": 4.99,
            "end": 5.79
          }
        ]
      },
      {
        "verseStart": 6.96,
        "verseEnd": 11.42,
        "words": [
          {
            "word": "The ",
            "start": 6.96,
            "end": 7.76
          },
          {
            "word": "eve ",
            "start": 7.76,
            "end": 8.56
          },
          {
            "word": "of ",
            "start": 8.56,
            "end": 9.36
          },
          {
            "word": "destruction",
            "start": 9.36,
            "end": 10.16
          }
        ]
      },
      {
        "verseStart": 11.42,
        "verseEnd": 14.23,
        "words": [
          {
            "word": "The ",
            "start": 11.42,
            "end": 12.123
          },
          {
            "word": "eve ",
            "start": 12.123,
            "end": 12.825
          },
          {
            "word": "of ",
            "start": 12.825,
            "end": 13.527
          },
          {
            "word": "destruction",
            "start": 13.527,
            "end": 14.23
          }
        ]
      },
      {
        "verseStart": 14.23,
        "verseEnd": 17.85,
        "words": [
          {
            "word": "The ",
            "start": 14.23,
            "end": 15.03
          },
          {
            "word": "eve ",
            "start": 15.03,
            "end": 15.83
          },
          {
            "word": "of ",
            "start": 15.83,
            "end": 16.63
          },
          {
            "word": "destruction",
            "start": 16.63,
            "end": 17.43
          }
        ]
      },
      {
        "verseStart": 17.85,
        "verseEnd": 21.6,
        "words": [
          {
            "word": "The ",
            "start": 17.85,
            "end": 18.65
          },
          {
            "word": "eve ",
            "start": 18.65,
            "end": 19.45
          },
          {
            "word": "of ",
            "start": 19.45,
            "end": 20.25
          },
          {
            "word": "destruction",
            "start": 20.25,
            "end": 21.05
          }
        ]
      },
      {
        "verseStart": 21.6,
        "verseEnd": 26.41,
        "words": [
          {
            "word": "The ",
            "start": 21.6,
            "end": 22.4
          },
          {
            "word": "eve ",
            "start": 22.4,
            "end": 23.2
          },
          {
            "word": "of ",
            "start": 23.2,
            "end": 24
          },
          {
            "word": "destruction",
            "start": 24,
            "end": 24.8
          }
        ]
      },
      {
        "verseStart": 26.41,
        "verseEnd": 30.44,
        "words": [
          {
            "word": "The ",
            "start": 26.41,
            "end": 26.813
          },
          {
            "word": "eve ",
            "start": 26.813,
            "end": 27.216
          },
          {
            "word": "of ",
            "start": 27.216,
            "end": 27.619
          },
          {
            "word": "destruction ",
            "start": 27.619,
            "end": 28.022
          },
          {
            "word": "( ",
            "start": 28.022,
            "end": 28.425
          },
          {
            "word": "Human ",
            "start": 28.425,
            "end": 28.828
          },
          {
            "word": "minds ",
            "start": 28.828,
            "end": 29.231
          },
          {
            "word": "are ",
            "start": 29.231,
            "end": 29.634
          },
          {
            "word": "simplified ",
            "start": 29.634,
            "end": 30.037
          },
          {
            "word": ")",
            "start": 30.037,
            "end": 30.44
          }
        ]
      },
      {
        "verseStart": 30.44,
        "verseEnd": 34.5,
        "words": [
          {
            "word": "The ",
            "start": 30.44,
            "end": 30.891
          },
          {
            "word": "eve ",
            "start": 30.891,
            "end": 31.342
          },
          {
            "word": "of ",
            "start": 31.342,
            "end": 31.793
          },
          {
            "word": "destruction ",
            "start": 31.793,
            "end": 32.244
          },
          {
            "word": "( ",
            "start": 32.244,
            "end": 32.696
          },
          {
            "word": "Sacrifice ",
            "start": 32.696,
            "end": 33.147
          },
          {
            "word": "is ",
            "start": 33.147,
            "end": 33.598
          },
          {
            "word": "justified ",
            "start": 33.598,
            "end": 34.049
          },
          {
            "word": ")",
            "start": 34.049,
            "end": 34.5
          }
        ]
      },
      {
        "verseStart": 34.5,
        "verseEnd": 38.04,
        "words": [
          {
            "word": "The ",
            "start": 34.5,
            "end": 34.854
          },
          {
            "word": "eve ",
            "start": 34.854,
            "end": 35.208
          },
          {
            "word": "of ",
            "start": 35.208,
            "end": 35.562
          },
          {
            "word": "destruction ",
            "start": 35.562,
            "end": 35.916
          },
          {
            "word": "( ",
            "start": 35.916,
            "end": 36.27
          },
          {
            "word": "Human ",
            "start": 36.27,
            "end": 36.624
          },
          {
            "word": "minds ",
            "start": 36.624,
            "end": 36.978
          },
          {
            "word": "are ",
            "start": 36.978,
            "end": 37.332
          },
          {
            "word": "simplified ",
            "start": 37.332,
            "end": 37.686
          },
          {
            "word": ")",
            "start": 37.686,
            "end": 38.04
          }
        ]
      },
      {
        "verseStart": 38.04,
        "verseEnd": 41.22,
        "words": [
          {
            "word": "The ",
            "start": 38.04,
            "end": 38.393
          },
          {
            "word": "eve ",
            "start": 38.393,
            "end": 38.747
          },
          {
            "word": "of ",
            "start": 38.747,
            "end": 39.1
          },
          {
            "word": "destruction ",
            "start": 39.1,
            "end": 39.453
          },
          {
            "word": "( ",
            "start": 39.453,
            "end": 39.807
          },
          {
            "word": "Sacrifice ",
            "start": 39.807,
            "end": 40.16
          },
          {
            "word": "is ",
            "start": 40.16,
            "end": 40.513
          },
          {
            "word": "justified ",
            "start": 40.513,
            "end": 40.867
          },
          {
            "word": ")",
            "start": 40.867,
            "end": 41.22
          }
        ]
      },
      {
        "verseStart": 41.22,
        "verseEnd": 45.07,
        "words": [
          {
            "word": "The ",
            "start": 41.22,
            "end": 41.605
          },
          {
            "word": "eve ",
            "start": 41.605,
            "end": 41.99
          },
          {
            "word": "of ",
            "start": 41.99,
            "end": 42.375
          },
          {
            "word": "destruction ",
            "start": 42.375,
            "end": 42.76
          },
          {
            "word": "( ",
            "start": 42.76,
            "end": 43.145
          },
          {
            "word": "Human ",
            "start": 43.145,
            "end": 43.53
          },
          {
            "word": "minds ",
            "start": 43.53,
            "end": 43.915
          },
          {
            "word": "are ",
            "start": 43.915,
            "end": 44.3
          },
          {
            "word": "simplified ",
            "start": 44.3,
            "end": 44.685
          },
          {
            "word": ")",
            "start": 44.685,
            "end": 45.07
          }
        ]
      },
      {
        "verseStart": 45.07,
        "verseEnd": 48.51,
        "words": [
          {
            "word": "The ",
            "start": 45.07,
            "end": 45.452
          },
          {
            "word": "eve ",
            "start": 45.452,
            "end": 45.834
          },
          {
            "word": "of ",
            "start": 45.834,
            "end": 46.217
          },
          {
            "word": "destruction ",
            "start": 46.217,
            "end": 46.599
          },
          {
            "word": "( ",
            "start": 46.599,
            "end": 46.981
          },
          {
            "word": "Sacrifice ",
            "start": 46.981,
            "end": 47.363
          },
          {
            "word": "is ",
            "start": 47.363,
            "end": 47.746
          },
          {
            "word": "justified ",
            "start": 47.746,
            "end": 48.128
          },
          {
            "word": ")",
            "start": 48.128,
            "end": 48.51
          }
        ]
      },
      {
        "verseStart": 48.51,
        "verseEnd": 51.93,
        "words": [
          {
            "word": "The ",
            "start": 48.51,
            "end": 48.852
          },
          {
            "word": "eve ",
            "start": 48.852,
            "end": 49.194
          },
          {
            "word": "of ",
            "start": 49.194,
            "end": 49.536
          },
          {
            "word": "destruction ",
            "start": 49.536,
            "end": 49.878
          },
          {
            "word": "( ",
            "start": 49.878,
            "end": 50.22
          },
          {
            "word": "Human ",
            "start": 50.22,
            "end": 50.562
          },
          {
            "word": "minds ",
            "start": 50.562,
            "end": 50.904
          },
          {
            "word": "are ",
            "start": 50.904,
            "end": 51.246
          },
          {
            "word": "simplified ",
            "start": 51.246,
            "end": 51.588
          },
          {
            "word": ")",
            "start": 51.588,
            "end": 51.93
          }
        ]
      },
      {
        "verseStart": 51.93,
        "verseEnd": 55.62,
        "words": [
          {
            "word": "The ",
            "start": 51.93,
            "end": 52.34
          },
          {
            "word": "eve ",
            "start": 52.34,
            "end": 52.75
          },
          {
            "word": "of ",
            "start": 52.75,
            "end": 53.16
          },
          {
            "word": "destruction ",
            "start": 53.16,
            "end": 53.57
          },
          {
            "word": "( ",
            "start": 53.57,
            "end": 53.98
          },
          {
            "word": "Sacrifice ",
            "start": 53.98,
            "end": 54.39
          },
          {
            "word": "is ",
            "start": 54.39,
            "end": 54.8
          },
          {
            "word": "justified ",
            "start": 54.8,
            "end": 55.21
          },
          {
            "word": ")",
            "start": 55.21,
            "end": 55.62
          }
        ]
      },
      {
        "verseStart": 55.62,
        "verseEnd": 59.73,
        "words": [
          {
            "word": "The ",
            "start": 55.62,
            "end": 56.031
          },
          {
            "word": "eve ",
            "start": 56.031,
            "end": 56.442
          },
          {
            "word": "of ",
            "start": 56.442,
            "end": 56.853
          },
          {
            "word": "destruction ",
            "start": 56.853,
            "end": 57.264
          },
          {
            "word": "( ",
            "start": 57.264,
            "end": 57.675
          },
          {
            "word": "Human ",
            "start": 57.675,
            "end": 58.086
          },
          {
            "word": "minds ",
            "start": 58.086,
            "end": 58.497
          },
          {
            "word": "are ",
            "start": 58.497,
            "end": 58.908
          },
          {
            "word": "simplified ",
            "start": 58.908,
            "end": 59.319
          },
          {
            "word": ")",
            "start": 59.319,
            "end": 59.73
          }
        ]
      },
      {
        "verseStart": 59.73,
        "verseEnd": 60.81,
        "words": [
          {
            "word": "The ",
            "start": 59.73,
            "end": 59.85
          },
          {
            "word": "eve ",
            "start": 59.85,
            "end": 59.97
          },
          {
            "word": "of ",
            "start": 59.97,
            "end": 60.09
          },
          {
            "word": "destruction ",
            "start": 60.09,
            "end": 60.21
          },
          {
            "word": "( ",
            "start": 60.21,
            "end": 60.33
          },
          {
            "word": "Sacrifice ",
            "start": 60.33,
            "end": 60.45
          },
          {
            "word": "is ",
            "start": 60.45,
            "end": 60.57
          },
          {
            "word": "justified ",
            "start": 60.57,
            "end": 60.69
          },
          {
            "word": ")",
            "start": 60.69,
            "end": 60.81
          }
        ]
      },
      {
        "verseStart": 60.81,
        "verseEnd": 82.24,
        "words": [
          {
            "word": "The ",
            "start": 60.81,
            "end": 61.61
          },
          {
            "word": "eve ",
            "start": 61.61,
            "end": 62.41
          },
          {
            "word": "of ",
            "start": 62.41,
            "end": 63.21
          },
          {
            "word": "destruction",
            "start": 63.21,
            "end": 64.01
          }
        ]
      },
      {
        "verseStart": 82.24,
        "verseEnd": 91.48,
        "words": [
          {
            "word": "Human ",
            "start": 82.24,
            "end": 83.04
          },
          {
            "word": "minds ",
            "start": 83.04,
            "end": 83.84
          },
          {
            "word": "are ",
            "start": 83.84,
            "end": 84.64
          },
          {
            "word": "simplified",
            "start": 84.64,
            "end": 85.44
          }
        ]
      },
      {
        "verseStart": 91.48,
        "verseEnd": 93.1,
        "words": [
          {
            "word": "We ",
            "start": 91.48,
            "end": 91.804
          },
          {
            "word": "can't ",
            "start": 91.804,
            "end": 92.128
          },
          {
            "word": "afford ",
            "start": 92.128,
            "end": 92.452
          },
          {
            "word": "the ",
            "start": 92.452,
            "end": 92.776
          },
          {
            "word": "water",
            "start": 92.776,
            "end": 93.1
          }
        ]
      },
      {
        "verseStart": 93.1,
        "verseEnd": 95.08,
        "words": [
          {
            "word": "Sacrifice ",
            "start": 93.1,
            "end": 93.76
          },
          {
            "word": "is ",
            "start": 93.76,
            "end": 94.42
          },
          {
            "word": "justified",
            "start": 94.42,
            "end": 95.08
          }
        ]
      },
      {
        "verseStart": 95.08,
        "verseEnd": 96.78,
        "words": [
          {
            "word": "Everyone ",
            "start": 95.08,
            "end": 95.42
          },
          {
            "word": "is ",
            "start": 95.42,
            "end": 95.76
          },
          {
            "word": "left ",
            "start": 95.76,
            "end": 96.1
          },
          {
            "word": "to ",
            "start": 96.1,
            "end": 96.44
          },
          {
            "word": "die",
            "start": 96.44,
            "end": 96.78
          }
        ]
      },
      {
        "verseStart": 96.78,
        "verseEnd": 99.05,
        "words": [
          {
            "word": "Human ",
            "start": 96.78,
            "end": 97.347
          },
          {
            "word": "minds ",
            "start": 97.347,
            "end": 97.915
          },
          {
            "word": "are ",
            "start": 97.915,
            "end": 98.483
          },
          {
            "word": "simplified",
            "start": 98.483,
            "end": 99.05
          }
        ]
      },
      {
        "verseStart": 99.05,
        "verseEnd": 100.84,
        "words": [
          {
            "word": "Keep ",
            "start": 99.05,
            "end": 99.306
          },
          {
            "word": "runnin ",
            "start": 99.306,
            "end": 99.561
          },
          {
            "word": "' ",
            "start": 99.561,
            "end": 99.817
          },
          {
            "word": ", ",
            "start": 99.817,
            "end": 100.073
          },
          {
            "word": "keep ",
            "start": 100.073,
            "end": 100.329
          },
          {
            "word": "runnin ",
            "start": 100.329,
            "end": 100.584
          },
          {
            "word": "'",
            "start": 100.584,
            "end": 100.84
          }
        ]
      },
      {
        "verseStart": 100.84,
        "verseEnd": 102.28999999999999,
        "words": [
          {
            "word": "Sacrifice ",
            "start": 100.84,
            "end": 101.323
          },
          {
            "word": "is ",
            "start": 101.323,
            "end": 101.807
          },
          {
            "word": "justified",
            "start": 101.807,
            "end": 102.29
          }
        ]
      },
      {
        "verseStart": 102.28999999999999,
        "verseEnd": 104.24000000000001,
        "words": [
          {
            "word": "Keep ",
            "start": 102.29,
            "end": 102.569
          },
          {
            "word": "runnin ",
            "start": 102.569,
            "end": 102.847
          },
          {
            "word": "' ",
            "start": 102.847,
            "end": 103.126
          },
          {
            "word": ", ",
            "start": 103.126,
            "end": 103.404
          },
          {
            "word": "keep ",
            "start": 103.404,
            "end": 103.683
          },
          {
            "word": "runnin ",
            "start": 103.683,
            "end": 103.961
          },
          {
            "word": "'",
            "start": 103.961,
            "end": 104.24
          }
        ]
      },
      {
        "verseStart": 104.24000000000001,
        "verseEnd": 108.11,
        "words": [
          {
            "word": "Maybe ",
            "start": 104.24,
            "end": 105.014
          },
          {
            "word": "I'll ",
            "start": 105.014,
            "end": 105.788
          },
          {
            "word": "find ",
            "start": 105.788,
            "end": 106.562
          },
          {
            "word": "a ",
            "start": 106.562,
            "end": 107.336
          },
          {
            "word": "friend",
            "start": 107.336,
            "end": 108.11
          }
        ]
      },
      {
        "verseStart": 108.11,
        "verseEnd": 111.99000000000001,
        "words": [
          {
            "word": "Maybe ",
            "start": 108.11,
            "end": 108.886
          },
          {
            "word": "I'll ",
            "start": 108.886,
            "end": 109.662
          },
          {
            "word": "find ",
            "start": 109.662,
            "end": 110.438
          },
          {
            "word": "a ",
            "start": 110.438,
            "end": 111.214
          },
          {
            "word": "friend",
            "start": 111.214,
            "end": 111.99
          }
        ]
      },
      {
        "verseStart": 111.99000000000001,
        "verseEnd": 115.85,
        "words": [
          {
            "word": "Maybe ",
            "start": 111.99,
            "end": 112.762
          },
          {
            "word": "I'll ",
            "start": 112.762,
            "end": 113.534
          },
          {
            "word": "find ",
            "start": 113.534,
            "end": 114.306
          },
          {
            "word": "a ",
            "start": 114.306,
            "end": 115.078
          },
          {
            "word": "friend",
            "start": 115.078,
            "end": 115.85
          }
        ]
      },
      {
        "verseStart": 115.85,
        "verseEnd": 134.82,
        "words": [
          {
            "word": "To ",
            "start": 115.85,
            "end": 116.65
          },
          {
            "word": "spend ",
            "start": 116.65,
            "end": 117.45
          },
          {
            "word": "the ",
            "start": 117.45,
            "end": 118.25
          },
          {
            "word": "weekend",
            "start": 118.25,
            "end": 119.05
          }
        ]
      },
      {
        "verseStart": 134.82,
        "verseEnd": 137.22,
        "words": [
          {
            "word": "Brothers ",
            "start": 134.82,
            "end": 135.42
          },
          {
            "word": "and ",
            "start": 135.42,
            "end": 136.02
          },
          {
            "word": "the ",
            "start": 136.02,
            "end": 136.62
          },
          {
            "word": "suicide",
            "start": 136.62,
            "end": 137.22
          }
        ]
      },
      {
        "verseStart": 137.22,
        "verseEnd": 141.34,
        "words": [
          {
            "word": "What's ",
            "start": 137.22,
            "end": 137.735
          },
          {
            "word": "to ",
            "start": 137.735,
            "end": 138.25
          },
          {
            "word": "try ",
            "start": 138.25,
            "end": 138.765
          },
          {
            "word": "out ",
            "start": 138.765,
            "end": 139.28
          },
          {
            "word": "? ",
            "start": 139.28,
            "end": 139.795
          },
          {
            "word": "Hear ",
            "start": 139.795,
            "end": 140.31
          },
          {
            "word": "me ",
            "start": 140.31,
            "end": 140.825
          },
          {
            "word": "now",
            "start": 140.825,
            "end": 141.34
          }
        ]
      },
      {
        "verseStart": 141.34,
        "verseEnd": 145.78,
        "words": [
          {
            "word": "He ",
            "start": 141.34,
            "end": 142.14
          },
          {
            "word": "guideline ",
            "start": 142.14,
            "end": 142.94
          },
          {
            "word": ", ",
            "start": 142.94,
            "end": 143.74
          },
          {
            "word": "he ",
            "start": 143.74,
            "end": 144.54
          },
          {
            "word": "guideline",
            "start": 144.54,
            "end": 145.34
          }
        ]
      },
      {
        "verseStart": 145.78,
        "verseEnd": 150.15,
        "words": [
          {
            "word": "Eve ",
            "start": 145.78,
            "end": 146.58
          },
          {
            "word": "of ",
            "start": 146.58,
            "end": 147.38
          },
          {
            "word": "destruction",
            "start": 147.38,
            "end": 148.18
          }
        ]
      },
      {
        "verseStart": 150.15,
        "verseEnd": 155.07999999999998,
        "words": [
          {
            "word": "Maybe ",
            "start": 150.15,
            "end": 150.95
          },
          {
            "word": "I'll ",
            "start": 150.95,
            "end": 151.75
          },
          {
            "word": "find ",
            "start": 151.75,
            "end": 152.55
          },
          {
            "word": "a ",
            "start": 152.55,
            "end": 153.35
          },
          {
            "word": "friend",
            "start": 153.35,
            "end": 154.15
          }
        ]
      },
      {
        "verseStart": 155.07999999999998,
        "verseEnd": 158.34,
        "words": [
          {
            "word": "Maybe ",
            "start": 155.08,
            "end": 155.732
          },
          {
            "word": "I'll ",
            "start": 155.732,
            "end": 156.384
          },
          {
            "word": "find ",
            "start": 156.384,
            "end": 157.036
          },
          {
            "word": "a ",
            "start": 157.036,
            "end": 157.688
          },
          {
            "word": "friend",
            "start": 157.688,
            "end": 158.34
          }
        ]
      },
      {
        "verseStart": 158.34,
        "verseEnd": 162.44,
        "words": [
          {
            "word": "Maybe ",
            "start": 158.34,
            "end": 159.14
          },
          {
            "word": "I'll ",
            "start": 159.14,
            "end": 159.94
          },
          {
            "word": "find ",
            "start": 159.94,
            "end": 160.74
          },
          {
            "word": "a ",
            "start": 160.74,
            "end": 161.54
          },
          {
            "word": "friend",
            "start": 161.54,
            "end": 162.34
          }
        ]
      },
      {
        "verseStart": 162.44,
        "verseEnd": 209.09,
        "words": [
          {
            "word": "To ",
            "start": 162.44,
            "end": 163.24
          },
          {
            "word": "spend ",
            "start": 163.24,
            "end": 164.04
          },
          {
            "word": "the ",
            "start": 164.04,
            "end": 164.84
          },
          {
            "word": "weekend",
            "start": 164.84,
            "end": 165.64
          }
        ]
      },
      {
        "verseStart": 209.09,
        "verseEnd": 222.89,
        "words": [
          {
            "word": "Maybe ",
            "start": 209.09,
            "end": 209.89
          },
          {
            "word": "I'll ",
            "start": 209.89,
            "end": 210.69
          },
          {
            "word": "find ",
            "start": 210.69,
            "end": 211.49
          },
          {
            "word": "a ",
            "start": 211.49,
            "end": 212.29
          },
          {
            "word": "friend",
            "start": 212.29,
            "end": 213.09
          }
        ]
      },
      {
        "verseStart": 222.89,
        "verseEnd": 227.25,
        "words": [
          {
            "word": "Maybe ",
            "start": 222.89,
            "end": 223.69
          },
          {
            "word": "I'll ",
            "start": 223.69,
            "end": 224.49
          },
          {
            "word": "find ",
            "start": 224.49,
            "end": 225.29
          },
          {
            "word": "a ",
            "start": 225.29,
            "end": 226.09
          },
          {
            "word": "friend",
            "start": 226.09,
            "end": 226.89
          }
        ]
      },
      {
        "verseStart": 227.25,
        "verseEnd": 230.94,
        "words": [
          {
            "word": "Maybe ",
            "start": 227.25,
            "end": 227.988
          },
          {
            "word": "I'll ",
            "start": 227.988,
            "end": 228.726
          },
          {
            "word": "find ",
            "start": 228.726,
            "end": 229.464
          },
          {
            "word": "a ",
            "start": 229.464,
            "end": 230.202
          },
          {
            "word": "friend",
            "start": 230.202,
            "end": 230.94
          }
        ]
      },
      {
        "verseStart": 230.94,
        "verseEnd": 234.41,
        "words": [
          {
            "word": "To ",
            "start": 230.94,
            "end": 231.74
          },
          {
            "word": "spend ",
            "start": 231.74,
            "end": 232.54
          },
          {
            "word": "the ",
            "start": 232.54,
            "end": 233.34
          },
          {
            "word": "weekend",
            "start": 233.34,
            "end": 234.14
          }
        ]
      },
      {
        "verseStart": 234.41,
        "verseEnd": 238.73,
        "words": [
          {
            "word": "The ",
            "start": 234.41,
            "end": 235.21
          },
          {
            "word": "eve ",
            "start": 235.21,
            "end": 236.01
          },
          {
            "word": "of ",
            "start": 236.01,
            "end": 236.81
          },
          {
            "word": "destruction",
            "start": 236.81,
            "end": 237.61
          }
        ]
      },
      {
        "verseStart": 238.73,
        "verseEnd": 242.56,
        "words": [
          {
            "word": "The ",
            "start": 238.73,
            "end": 239.53
          },
          {
            "word": "eve ",
            "start": 239.53,
            "end": 240.33
          },
          {
            "word": "of ",
            "start": 240.33,
            "end": 241.13
          },
          {
            "word": "destruction",
            "start": 241.13,
            "end": 241.93
          }
        ]
      },
      {
        "verseStart": 242.56,
        "verseEnd": 246.65,
        "words": [
          {
            "word": "The ",
            "start": 242.56,
            "end": 243.36
          },
          {
            "word": "eve ",
            "start": 243.36,
            "end": 244.16
          },
          {
            "word": "of ",
            "start": 244.16,
            "end": 244.96
          },
          {
            "word": "destruction",
            "start": 244.96,
            "end": 245.76
          }
        ]
      },
      {
        "verseStart": 246.65,
        "verseEnd": 250.55,
        "words": [
          {
            "word": "The ",
            "start": 246.65,
            "end": 247.45
          },
          {
            "word": "eve ",
            "start": 247.45,
            "end": 248.25
          },
          {
            "word": "of ",
            "start": 248.25,
            "end": 249.05
          },
          {
            "word": "destruction",
            "start": 249.05,
            "end": 249.85
          }
        ]
      },
      {
        "verseStart": 250.55,
        "verseEnd": 254.5,
        "words": [
          {
            "word": "The ",
            "start": 250.55,
            "end": 251.35
          },
          {
            "word": "eve ",
            "start": 251.35,
            "end": 252.15
          },
          {
            "word": "of ",
            "start": 252.15,
            "end": 252.95
          },
          {
            "word": "destruction",
            "start": 252.95,
            "end": 253.75
          }
        ]
      },
      {
        "verseStart": 254.5,
        "verseEnd": 258.36,
        "words": [
          {
            "word": "The ",
            "start": 254.5,
            "end": 255.3
          },
          {
            "word": "eve ",
            "start": 255.3,
            "end": 256.1
          },
          {
            "word": "of ",
            "start": 256.1,
            "end": 256.9
          },
          {
            "word": "destruction",
            "start": 256.9,
            "end": 257.7
          }
        ]
      },
      {
        "verseStart": 258.36,
        "verseEnd": 261.7,
        "words": [
          {
            "word": "The ",
            "start": 258.36,
            "end": 259.16
          },
          {
            "word": "eve ",
            "start": 259.16,
            "end": 259.96
          },
          {
            "word": "of ",
            "start": 259.96,
            "end": 260.76
          },
          {
            "word": "destruction",
            "start": 260.76,
            "end": 261.56
          }
        ]
      },
      {
        "verseStart": 261.7,
        "verseEnd": 265.69,
        "words": [
          {
            "word": "The ",
            "start": 261.7,
            "end": 262.5
          },
          {
            "word": "eve ",
            "start": 262.5,
            "end": 263.3
          },
          {
            "word": "of ",
            "start": 263.3,
            "end": 264.1
          },
          {
            "word": "destruction",
            "start": 264.1,
            "end": 264.9
          }
        ]
      }
    ]
  },
  "きゃりーぱみゅぱみゅ - きらきらキラー.mp4": {
    "globalOffset": 0,
    "lyricsData": [
      {
        "verseStart": 0.14,
        "verseEnd": 5.24,
        "words": [
          {
            "word": "L ",
            "start": 0.14,
            "end": 0.504
          },
          {
            "word": "- ",
            "start": 0.504,
            "end": 0.869
          },
          {
            "word": "U ",
            "start": 0.869,
            "end": 1.233
          },
          {
            "word": "- ",
            "start": 1.233,
            "end": 1.597
          },
          {
            "word": "C ",
            "start": 1.597,
            "end": 1.961
          },
          {
            "word": "- ",
            "start": 1.961,
            "end": 2.326
          },
          {
            "word": "K ",
            "start": 2.326,
            "end": 2.69
          },
          {
            "word": "L ",
            "start": 2.69,
            "end": 3.054
          },
          {
            "word": "- ",
            "start": 3.054,
            "end": 3.419
          },
          {
            "word": "U ",
            "start": 3.419,
            "end": 3.783
          },
          {
            "word": "- ",
            "start": 3.783,
            "end": 4.147
          },
          {
            "word": "C ",
            "start": 4.147,
            "end": 4.511
          },
          {
            "word": "- ",
            "start": 4.511,
            "end": 4.876
          },
          {
            "word": "K",
            "start": 4.876,
            "end": 5.24
          }
        ]
      },
      {
        "verseStart": 5.24,
        "verseEnd": 22.42,
        "words": [
          {
            "word": "L ",
            "start": 5.24,
            "end": 6.04
          },
          {
            "word": "- ",
            "start": 6.04,
            "end": 6.84
          },
          {
            "word": "U ",
            "start": 6.84,
            "end": 7.64
          },
          {
            "word": "- ",
            "start": 7.64,
            "end": 8.44
          },
          {
            "word": "C ",
            "start": 8.44,
            "end": 9.24
          },
          {
            "word": "- ",
            "start": 9.24,
            "end": 10.04
          },
          {
            "word": "K ",
            "start": 10.04,
            "end": 10.84
          },
          {
            "word": "L ",
            "start": 10.84,
            "end": 11.64
          },
          {
            "word": "- ",
            "start": 11.64,
            "end": 12.44
          },
          {
            "word": "U ",
            "start": 12.44,
            "end": 13.24
          },
          {
            "word": "- ",
            "start": 13.24,
            "end": 14.04
          },
          {
            "word": "C ",
            "start": 14.04,
            "end": 14.84
          },
          {
            "word": "- ",
            "start": 14.84,
            "end": 15.64
          },
          {
            "word": "K",
            "start": 15.64,
            "end": 16.44
          }
        ]
      },
      {
        "verseStart": 22.42,
        "verseEnd": 29.51,
        "words": [
          {
            "word": "正体 ",
            "start": 22.42,
            "end": 23.129
          },
          {
            "word": "は ",
            "start": 23.129,
            "end": 23.838
          },
          {
            "word": "誰 ",
            "start": 23.838,
            "end": 24.547
          },
          {
            "word": "も ",
            "start": 24.547,
            "end": 25.256
          },
          {
            "word": "知 ",
            "start": 25.256,
            "end": 25.965
          },
          {
            "word": "ら ",
            "start": 25.965,
            "end": 26.674
          },
          {
            "word": "ない ",
            "start": 26.674,
            "end": 27.383
          },
          {
            "word": "秘密 ",
            "start": 27.383,
            "end": 28.092
          },
          {
            "word": "の ",
            "start": 28.092,
            "end": 28.801
          },
          {
            "word": "ヒーロー",
            "start": 28.801,
            "end": 29.51
          }
        ]
      },
      {
        "verseStart": 29.51,
        "verseEnd": 35.6,
        "words": [
          {
            "word": "悪役 ",
            "start": 29.51,
            "end": 30.018
          },
          {
            "word": "の ",
            "start": 30.018,
            "end": 30.525
          },
          {
            "word": "よう ",
            "start": 30.525,
            "end": 31.033
          },
          {
            "word": "にし ",
            "start": 31.033,
            "end": 31.54
          },
          {
            "word": "て ",
            "start": 31.54,
            "end": 32.047
          },
          {
            "word": "も ",
            "start": 32.047,
            "end": 32.555
          },
          {
            "word": "みんな ",
            "start": 32.555,
            "end": 33.063
          },
          {
            "word": "は ",
            "start": 33.063,
            "end": 33.57
          },
          {
            "word": "ね ",
            "start": 33.57,
            "end": 34.078
          },
          {
            "word": "わか ",
            "start": 34.078,
            "end": 34.585
          },
          {
            "word": "って ",
            "start": 34.585,
            "end": 35.093
          },
          {
            "word": "る",
            "start": 35.093,
            "end": 35.6
          }
        ]
      },
      {
        "verseStart": 35.6,
        "verseEnd": 42.2,
        "words": [
          {
            "word": "マスク ",
            "start": 35.6,
            "end": 36.2
          },
          {
            "word": "に ",
            "start": 36.2,
            "end": 36.8
          },
          {
            "word": "隠 ",
            "start": 36.8,
            "end": 37.4
          },
          {
            "word": "さ ",
            "start": 37.4,
            "end": 38
          },
          {
            "word": "れ ",
            "start": 38,
            "end": 38.6
          },
          {
            "word": "た ",
            "start": 38.6,
            "end": 39.2
          },
          {
            "word": "強い ",
            "start": 39.2,
            "end": 39.8
          },
          {
            "word": "優 ",
            "start": 39.8,
            "end": 40.4
          },
          {
            "word": "し ",
            "start": 40.4,
            "end": 41
          },
          {
            "word": "さ ",
            "start": 41,
            "end": 41.6
          },
          {
            "word": "に",
            "start": 41.6,
            "end": 42.2
          }
        ]
      },
      {
        "verseStart": 42.2,
        "verseEnd": 46.73,
        "words": [
          {
            "word": "ずっと ",
            "start": 42.2,
            "end": 43
          },
          {
            "word": "憧 ",
            "start": 43,
            "end": 43.8
          },
          {
            "word": "れ ",
            "start": 43.8,
            "end": 44.6
          },
          {
            "word": "て",
            "start": 44.6,
            "end": 45.4
          }
        ]
      },
      {
        "verseStart": 46.73,
        "verseEnd": 58.01,
        "words": [
          {
            "word": "ざわめく ",
            "start": 46.73,
            "end": 47.53
          },
          {
            "word": "街 ",
            "start": 47.53,
            "end": 48.33
          },
          {
            "word": "の ",
            "start": 48.33,
            "end": 49.13
          },
          {
            "word": "空 ",
            "start": 49.13,
            "end": 49.93
          },
          {
            "word": "を ",
            "start": 49.93,
            "end": 50.73
          },
          {
            "word": "見上げる ",
            "start": 50.73,
            "end": 51.53
          },
          {
            "word": "( ",
            "start": 51.53,
            "end": 52.33
          },
          {
            "word": "きらきら ",
            "start": 52.33,
            "end": 53.13
          },
          {
            "word": "キラー ",
            "start": 53.13,
            "end": 53.93
          },
          {
            "word": ")",
            "start": 53.93,
            "end": 54.73
          }
        ]
      },
      {
        "verseStart": 58.01,
        "verseEnd": 59.57,
        "words": [
          {
            "word": "( ",
            "start": 58.01,
            "end": 58.183
          },
          {
            "word": "One ",
            "start": 58.183,
            "end": 58.357
          },
          {
            "word": ", ",
            "start": 58.357,
            "end": 58.53
          },
          {
            "word": "two ",
            "start": 58.53,
            "end": 58.703
          },
          {
            "word": ", ",
            "start": 58.703,
            "end": 58.877
          },
          {
            "word": "three ",
            "start": 58.877,
            "end": 59.05
          },
          {
            "word": ", ",
            "start": 59.05,
            "end": 59.223
          },
          {
            "word": "four ",
            "start": 59.223,
            "end": 59.397
          },
          {
            "word": ")",
            "start": 59.397,
            "end": 59.57
          }
        ]
      },
      {
        "verseStart": 59.57,
        "verseEnd": 62.45,
        "words": [
          {
            "word": "きらきら ",
            "start": 59.57,
            "end": 60.146
          },
          {
            "word": "キラー ",
            "start": 60.146,
            "end": 60.722
          },
          {
            "word": "ラッキー ",
            "start": 60.722,
            "end": 61.298
          },
          {
            "word": "ラッキー ",
            "start": 61.298,
            "end": 61.874
          },
          {
            "word": "ラッキー",
            "start": 61.874,
            "end": 62.45
          }
        ]
      },
      {
        "verseStart": 62.45,
        "verseEnd": 65.46,
        "words": [
          {
            "word": "未来 ",
            "start": 62.45,
            "end": 62.952
          },
          {
            "word": "は ",
            "start": 62.952,
            "end": 63.453
          },
          {
            "word": "ほら ",
            "start": 63.453,
            "end": 63.955
          },
          {
            "word": "ハッピー ",
            "start": 63.955,
            "end": 64.457
          },
          {
            "word": "ハッピー ",
            "start": 64.457,
            "end": 64.958
          },
          {
            "word": "ハッピー",
            "start": 64.958,
            "end": 65.46
          }
        ]
      },
      {
        "verseStart": 65.46,
        "verseEnd": 70.46000000000001,
        "words": [
          {
            "word": "空 ",
            "start": 65.46,
            "end": 66.174
          },
          {
            "word": "から ",
            "start": 66.174,
            "end": 66.889
          },
          {
            "word": "今 ",
            "start": 66.889,
            "end": 67.603
          },
          {
            "word": "きらきら ",
            "start": 67.603,
            "end": 68.317
          },
          {
            "word": "キラー ",
            "start": 68.317,
            "end": 69.031
          },
          {
            "word": "coming ",
            "start": 69.031,
            "end": 69.746
          },
          {
            "word": "now",
            "start": 69.746,
            "end": 70.46
          }
        ]
      },
      {
        "verseStart": 70.46000000000001,
        "verseEnd": 71.92,
        "words": [
          {
            "word": "( ",
            "start": 70.46,
            "end": 70.622
          },
          {
            "word": "One ",
            "start": 70.622,
            "end": 70.784
          },
          {
            "word": ", ",
            "start": 70.784,
            "end": 70.947
          },
          {
            "word": "two ",
            "start": 70.947,
            "end": 71.109
          },
          {
            "word": ", ",
            "start": 71.109,
            "end": 71.271
          },
          {
            "word": "three ",
            "start": 71.271,
            "end": 71.433
          },
          {
            "word": ", ",
            "start": 71.433,
            "end": 71.596
          },
          {
            "word": "four ",
            "start": 71.596,
            "end": 71.758
          },
          {
            "word": ")",
            "start": 71.758,
            "end": 71.92
          }
        ]
      },
      {
        "verseStart": 71.92,
        "verseEnd": 74.61,
        "words": [
          {
            "word": "きらきら ",
            "start": 71.92,
            "end": 72.458
          },
          {
            "word": "キラー ",
            "start": 72.458,
            "end": 72.996
          },
          {
            "word": "ハッピー ",
            "start": 72.996,
            "end": 73.534
          },
          {
            "word": "ハッピー ",
            "start": 73.534,
            "end": 74.072
          },
          {
            "word": "ハッピー",
            "start": 74.072,
            "end": 74.61
          }
        ]
      },
      {
        "verseStart": 74.61,
        "verseEnd": 77.5,
        "words": [
          {
            "word": "未来 ",
            "start": 74.61,
            "end": 75.092
          },
          {
            "word": "は ",
            "start": 75.092,
            "end": 75.573
          },
          {
            "word": "ほら ",
            "start": 75.573,
            "end": 76.055
          },
          {
            "word": "ラッキー ",
            "start": 76.055,
            "end": 76.537
          },
          {
            "word": "ラッキー ",
            "start": 76.537,
            "end": 77.018
          },
          {
            "word": "ラッキー",
            "start": 77.018,
            "end": 77.5
          }
        ]
      },
      {
        "verseStart": 77.5,
        "verseEnd": 82.78,
        "words": [
          {
            "word": "きらきら ",
            "start": 77.5,
            "end": 78.3
          },
          {
            "word": "キラー ",
            "start": 78.3,
            "end": 79.1
          },
          {
            "word": "ドキドキドキ ",
            "start": 79.1,
            "end": 79.9
          },
          {
            "word": "fall ",
            "start": 79.9,
            "end": 80.7
          },
          {
            "word": "in ",
            "start": 80.7,
            "end": 81.5
          },
          {
            "word": "love",
            "start": 81.5,
            "end": 82.3
          }
        ]
      },
      {
        "verseStart": 82.78,
        "verseEnd": 88.22,
        "words": [
          {
            "word": "きらきら ",
            "start": 82.78,
            "end": 83.58
          },
          {
            "word": "キラー ",
            "start": 83.58,
            "end": 84.38
          },
          {
            "word": "( ",
            "start": 84.38,
            "end": 85.18
          },
          {
            "word": "きらきら ",
            "start": 85.18,
            "end": 85.98
          },
          {
            "word": "キラー ",
            "start": 85.98,
            "end": 86.78
          },
          {
            "word": ")",
            "start": 86.78,
            "end": 87.58
          }
        ]
      },
      {
        "verseStart": 88.22,
        "verseEnd": 93.38,
        "words": [
          {
            "word": "きらきら ",
            "start": 88.22,
            "end": 89.02
          },
          {
            "word": "キラー ",
            "start": 89.02,
            "end": 89.82
          },
          {
            "word": "( ",
            "start": 89.82,
            "end": 90.62
          },
          {
            "word": "マジカルパワー ",
            "start": 90.62,
            "end": 91.42
          },
          {
            "word": ")",
            "start": 91.42,
            "end": 92.22
          }
        ]
      },
      {
        "verseStart": 93.38,
        "verseEnd": 95.96000000000001,
        "words": [
          {
            "word": "かんぜん ",
            "start": 93.38,
            "end": 94.18
          },
          {
            "word": "きらきら ",
            "start": 94.18,
            "end": 94.98
          },
          {
            "word": "キラー",
            "start": 94.98,
            "end": 95.78
          }
        ]
      },
      {
        "verseStart": 95.96000000000001,
        "verseEnd": 101.3,
        "words": [
          {
            "word": "L ",
            "start": 95.96,
            "end": 96.341
          },
          {
            "word": "- ",
            "start": 96.341,
            "end": 96.723
          },
          {
            "word": "U ",
            "start": 96.723,
            "end": 97.104
          },
          {
            "word": "- ",
            "start": 97.104,
            "end": 97.486
          },
          {
            "word": "C ",
            "start": 97.486,
            "end": 97.867
          },
          {
            "word": "- ",
            "start": 97.867,
            "end": 98.249
          },
          {
            "word": "K ",
            "start": 98.249,
            "end": 98.63
          },
          {
            "word": "L ",
            "start": 98.63,
            "end": 99.011
          },
          {
            "word": "- ",
            "start": 99.011,
            "end": 99.393
          },
          {
            "word": "U ",
            "start": 99.393,
            "end": 99.774
          },
          {
            "word": "- ",
            "start": 99.774,
            "end": 100.156
          },
          {
            "word": "C ",
            "start": 100.156,
            "end": 100.537
          },
          {
            "word": "- ",
            "start": 100.537,
            "end": 100.919
          },
          {
            "word": "K",
            "start": 100.919,
            "end": 101.3
          }
        ]
      },
      {
        "verseStart": 101.3,
        "verseEnd": 107.49000000000001,
        "words": [
          {
            "word": "L ",
            "start": 101.3,
            "end": 101.742
          },
          {
            "word": "- ",
            "start": 101.742,
            "end": 102.184
          },
          {
            "word": "U ",
            "start": 102.184,
            "end": 102.626
          },
          {
            "word": "- ",
            "start": 102.626,
            "end": 103.069
          },
          {
            "word": "C ",
            "start": 103.069,
            "end": 103.511
          },
          {
            "word": "- ",
            "start": 103.511,
            "end": 103.953
          },
          {
            "word": "K ",
            "start": 103.953,
            "end": 104.395
          },
          {
            "word": "L ",
            "start": 104.395,
            "end": 104.837
          },
          {
            "word": "- ",
            "start": 104.837,
            "end": 105.279
          },
          {
            "word": "U ",
            "start": 105.279,
            "end": 105.721
          },
          {
            "word": "- ",
            "start": 105.721,
            "end": 106.164
          },
          {
            "word": "C ",
            "start": 106.164,
            "end": 106.606
          },
          {
            "word": "- ",
            "start": 106.606,
            "end": 107.048
          },
          {
            "word": "K",
            "start": 107.048,
            "end": 107.49
          }
        ]
      },
      {
        "verseStart": 107.49000000000001,
        "verseEnd": 113.43,
        "words": [
          {
            "word": "どれ ",
            "start": 107.49,
            "end": 107.985
          },
          {
            "word": "だけ ",
            "start": 107.985,
            "end": 108.48
          },
          {
            "word": "追 ",
            "start": 108.48,
            "end": 108.975
          },
          {
            "word": "い ",
            "start": 108.975,
            "end": 109.47
          },
          {
            "word": "かけ ",
            "start": 109.47,
            "end": 109.965
          },
          {
            "word": "て ",
            "start": 109.965,
            "end": 110.46
          },
          {
            "word": "も ",
            "start": 110.46,
            "end": 110.955
          },
          {
            "word": "ヒント ",
            "start": 110.955,
            "end": 111.45
          },
          {
            "word": "さえ ",
            "start": 111.45,
            "end": 111.945
          },
          {
            "word": "く ",
            "start": 111.945,
            "end": 112.44
          },
          {
            "word": "れ ",
            "start": 112.44,
            "end": 112.935
          },
          {
            "word": "ない",
            "start": 112.935,
            "end": 113.43
          }
        ]
      },
      {
        "verseStart": 113.43,
        "verseEnd": 119.53,
        "words": [
          {
            "word": "お ",
            "start": 113.43,
            "end": 113.899
          },
          {
            "word": "口 ",
            "start": 113.899,
            "end": 114.368
          },
          {
            "word": "を ",
            "start": 114.368,
            "end": 114.838
          },
          {
            "word": "ギュッ ",
            "start": 114.838,
            "end": 115.307
          },
          {
            "word": "と ",
            "start": 115.307,
            "end": 115.776
          },
          {
            "word": "つぐむ ",
            "start": 115.776,
            "end": 116.245
          },
          {
            "word": "の ",
            "start": 116.245,
            "end": 116.715
          },
          {
            "word": "に ",
            "start": 116.715,
            "end": 117.184
          },
          {
            "word": "誰か ",
            "start": 117.184,
            "end": 117.653
          },
          {
            "word": "は ",
            "start": 117.653,
            "end": 118.122
          },
          {
            "word": "わ ",
            "start": 118.122,
            "end": 118.592
          },
          {
            "word": "から ",
            "start": 118.592,
            "end": 119.061
          },
          {
            "word": "ない",
            "start": 119.061,
            "end": 119.53
          }
        ]
      },
      {
        "verseStart": 119.53,
        "verseEnd": 126.18,
        "words": [
          {
            "word": "ああ ",
            "start": 119.53,
            "end": 120.135
          },
          {
            "word": "おんなじ ",
            "start": 120.135,
            "end": 120.739
          },
          {
            "word": "所 ",
            "start": 120.739,
            "end": 121.344
          },
          {
            "word": "に ",
            "start": 121.344,
            "end": 121.948
          },
          {
            "word": "傷 ",
            "start": 121.948,
            "end": 122.553
          },
          {
            "word": "を ",
            "start": 122.553,
            "end": 123.157
          },
          {
            "word": "負 ",
            "start": 123.157,
            "end": 123.762
          },
          {
            "word": "っ ",
            "start": 123.762,
            "end": 124.366
          },
          {
            "word": "た ",
            "start": 124.366,
            "end": 124.971
          },
          {
            "word": "キミ ",
            "start": 124.971,
            "end": 125.575
          },
          {
            "word": "に",
            "start": 125.575,
            "end": 126.18
          }
        ]
      },
      {
        "verseStart": 126.18,
        "verseEnd": 135.02,
        "words": [
          {
            "word": "気付 ",
            "start": 126.18,
            "end": 126.98
          },
          {
            "word": "い ",
            "start": 126.98,
            "end": 127.78
          },
          {
            "word": "て ",
            "start": 127.78,
            "end": 128.58
          },
          {
            "word": "しまう ",
            "start": 128.58,
            "end": 129.38
          },
          {
            "word": "なんて ",
            "start": 129.38,
            "end": 130.18
          },
          {
            "word": "ざわめく ",
            "start": 130.18,
            "end": 130.98
          },
          {
            "word": "心",
            "start": 130.98,
            "end": 131.78
          }
        ]
      },
      {
        "verseStart": 135.02,
        "verseEnd": 141.98,
        "words": [
          {
            "word": "空 ",
            "start": 135.02,
            "end": 135.82
          },
          {
            "word": "を ",
            "start": 135.82,
            "end": 136.62
          },
          {
            "word": "見上げる ",
            "start": 136.62,
            "end": 137.42
          },
          {
            "word": "( ",
            "start": 137.42,
            "end": 138.22
          },
          {
            "word": "きらきら ",
            "start": 138.22,
            "end": 139.02
          },
          {
            "word": "キラー ",
            "start": 139.02,
            "end": 139.82
          },
          {
            "word": ")",
            "start": 139.82,
            "end": 140.62
          }
        ]
      },
      {
        "verseStart": 141.98,
        "verseEnd": 143.57,
        "words": [
          {
            "word": "( ",
            "start": 141.98,
            "end": 142.157
          },
          {
            "word": "One ",
            "start": 142.157,
            "end": 142.333
          },
          {
            "word": ", ",
            "start": 142.333,
            "end": 142.51
          },
          {
            "word": "two ",
            "start": 142.51,
            "end": 142.687
          },
          {
            "word": ", ",
            "start": 142.687,
            "end": 142.863
          },
          {
            "word": "three ",
            "start": 142.863,
            "end": 143.04
          },
          {
            "word": ", ",
            "start": 143.04,
            "end": 143.217
          },
          {
            "word": "four ",
            "start": 143.217,
            "end": 143.393
          },
          {
            "word": ")",
            "start": 143.393,
            "end": 143.57
          }
        ]
      },
      {
        "verseStart": 143.57,
        "verseEnd": 146.5,
        "words": [
          {
            "word": "きらきら ",
            "start": 143.57,
            "end": 144.156
          },
          {
            "word": "キラー ",
            "start": 144.156,
            "end": 144.742
          },
          {
            "word": "ラッキー ",
            "start": 144.742,
            "end": 145.328
          },
          {
            "word": "ラッキー ",
            "start": 145.328,
            "end": 145.914
          },
          {
            "word": "ラッキー",
            "start": 145.914,
            "end": 146.5
          }
        ]
      },
      {
        "verseStart": 146.5,
        "verseEnd": 149.52,
        "words": [
          {
            "word": "未来 ",
            "start": 146.5,
            "end": 147.003
          },
          {
            "word": "は ",
            "start": 147.003,
            "end": 147.507
          },
          {
            "word": "ほら ",
            "start": 147.507,
            "end": 148.01
          },
          {
            "word": "ハッピー ",
            "start": 148.01,
            "end": 148.513
          },
          {
            "word": "ハッピー ",
            "start": 148.513,
            "end": 149.017
          },
          {
            "word": "ハッピー",
            "start": 149.017,
            "end": 149.52
          }
        ]
      },
      {
        "verseStart": 149.52,
        "verseEnd": 154.06,
        "words": [
          {
            "word": "空 ",
            "start": 149.52,
            "end": 150.169
          },
          {
            "word": "から ",
            "start": 150.169,
            "end": 150.817
          },
          {
            "word": "今 ",
            "start": 150.817,
            "end": 151.466
          },
          {
            "word": "きらきら ",
            "start": 151.466,
            "end": 152.114
          },
          {
            "word": "キラー ",
            "start": 152.114,
            "end": 152.763
          },
          {
            "word": "coming ",
            "start": 152.763,
            "end": 153.411
          },
          {
            "word": "now",
            "start": 153.411,
            "end": 154.06
          }
        ]
      },
      {
        "verseStart": 154.06,
        "verseEnd": 155.52,
        "words": [
          {
            "word": "( ",
            "start": 154.06,
            "end": 154.222
          },
          {
            "word": "One ",
            "start": 154.222,
            "end": 154.384
          },
          {
            "word": ", ",
            "start": 154.384,
            "end": 154.547
          },
          {
            "word": "two ",
            "start": 154.547,
            "end": 154.709
          },
          {
            "word": ", ",
            "start": 154.709,
            "end": 154.871
          },
          {
            "word": "three ",
            "start": 154.871,
            "end": 155.033
          },
          {
            "word": ", ",
            "start": 155.033,
            "end": 155.196
          },
          {
            "word": "four ",
            "start": 155.196,
            "end": 155.358
          },
          {
            "word": ")",
            "start": 155.358,
            "end": 155.52
          }
        ]
      },
      {
        "verseStart": 155.52,
        "verseEnd": 158.75,
        "words": [
          {
            "word": "きらきら ",
            "start": 155.52,
            "end": 156.166
          },
          {
            "word": "キラー ",
            "start": 156.166,
            "end": 156.812
          },
          {
            "word": "ハッピー ",
            "start": 156.812,
            "end": 157.458
          },
          {
            "word": "ハッピー ",
            "start": 157.458,
            "end": 158.104
          },
          {
            "word": "ハッピー",
            "start": 158.104,
            "end": 158.75
          }
        ]
      },
      {
        "verseStart": 158.75,
        "verseEnd": 161.57999999999998,
        "words": [
          {
            "word": "未来 ",
            "start": 158.75,
            "end": 159.222
          },
          {
            "word": "は ",
            "start": 159.222,
            "end": 159.693
          },
          {
            "word": "ほら ",
            "start": 159.693,
            "end": 160.165
          },
          {
            "word": "ラッキー ",
            "start": 160.165,
            "end": 160.637
          },
          {
            "word": "ラッキー ",
            "start": 160.637,
            "end": 161.108
          },
          {
            "word": "ラッキー",
            "start": 161.108,
            "end": 161.58
          }
        ]
      },
      {
        "verseStart": 161.57999999999998,
        "verseEnd": 166.59,
        "words": [
          {
            "word": "きらきら ",
            "start": 161.58,
            "end": 162.38
          },
          {
            "word": "キラー ",
            "start": 162.38,
            "end": 163.18
          },
          {
            "word": "ドキドキドキ ",
            "start": 163.18,
            "end": 163.98
          },
          {
            "word": "fall ",
            "start": 163.98,
            "end": 164.78
          },
          {
            "word": "in ",
            "start": 164.78,
            "end": 165.58
          },
          {
            "word": "love",
            "start": 165.58,
            "end": 166.38
          }
        ]
      },
      {
        "verseStart": 166.59,
        "verseEnd": 173.43,
        "words": [
          {
            "word": "きらきら ",
            "start": 166.59,
            "end": 167.39
          },
          {
            "word": "キラー ",
            "start": 167.39,
            "end": 168.19
          },
          {
            "word": "( ",
            "start": 168.19,
            "end": 168.99
          },
          {
            "word": "きらきら ",
            "start": 168.99,
            "end": 169.79
          },
          {
            "word": "キラー ",
            "start": 169.79,
            "end": 170.59
          },
          {
            "word": ")",
            "start": 170.59,
            "end": 171.39
          }
        ]
      },
      {
        "verseStart": 173.43,
        "verseEnd": 177.84,
        "words": [
          {
            "word": "きらきら ",
            "start": 173.43,
            "end": 174.23
          },
          {
            "word": "キラー ",
            "start": 174.23,
            "end": 175.03
          },
          {
            "word": "( ",
            "start": 175.03,
            "end": 175.83
          },
          {
            "word": "マジカルパワー ",
            "start": 175.83,
            "end": 176.63
          },
          {
            "word": ")",
            "start": 176.63,
            "end": 177.43
          }
        ]
      },
      {
        "verseStart": 177.84,
        "verseEnd": 179.99,
        "words": [
          {
            "word": "かんぜん ",
            "start": 177.84,
            "end": 178.557
          },
          {
            "word": "きらきら ",
            "start": 178.557,
            "end": 179.273
          },
          {
            "word": "キラー",
            "start": 179.273,
            "end": 179.99
          }
        ]
      },
      {
        "verseStart": 179.99,
        "verseEnd": 185.34,
        "words": [
          {
            "word": "L ",
            "start": 179.99,
            "end": 180.372
          },
          {
            "word": "- ",
            "start": 180.372,
            "end": 180.754
          },
          {
            "word": "U ",
            "start": 180.754,
            "end": 181.136
          },
          {
            "word": "- ",
            "start": 181.136,
            "end": 181.519
          },
          {
            "word": "C ",
            "start": 181.519,
            "end": 181.901
          },
          {
            "word": "- ",
            "start": 181.901,
            "end": 182.283
          },
          {
            "word": "K ",
            "start": 182.283,
            "end": 182.665
          },
          {
            "word": "L ",
            "start": 182.665,
            "end": 183.047
          },
          {
            "word": "- ",
            "start": 183.047,
            "end": 183.429
          },
          {
            "word": "U ",
            "start": 183.429,
            "end": 183.811
          },
          {
            "word": "- ",
            "start": 183.811,
            "end": 184.194
          },
          {
            "word": "C ",
            "start": 184.194,
            "end": 184.576
          },
          {
            "word": "- ",
            "start": 184.576,
            "end": 184.958
          },
          {
            "word": "K",
            "start": 184.958,
            "end": 185.34
          }
        ]
      },
      {
        "verseStart": 185.34,
        "verseEnd": 191.5,
        "words": [
          {
            "word": "L ",
            "start": 185.34,
            "end": 185.78
          },
          {
            "word": "- ",
            "start": 185.78,
            "end": 186.22
          },
          {
            "word": "U ",
            "start": 186.22,
            "end": 186.66
          },
          {
            "word": "- ",
            "start": 186.66,
            "end": 187.1
          },
          {
            "word": "C ",
            "start": 187.1,
            "end": 187.54
          },
          {
            "word": "- ",
            "start": 187.54,
            "end": 187.98
          },
          {
            "word": "K ",
            "start": 187.98,
            "end": 188.42
          },
          {
            "word": "L ",
            "start": 188.42,
            "end": 188.86
          },
          {
            "word": "- ",
            "start": 188.86,
            "end": 189.3
          },
          {
            "word": "U ",
            "start": 189.3,
            "end": 189.74
          },
          {
            "word": "- ",
            "start": 189.74,
            "end": 190.18
          },
          {
            "word": "C ",
            "start": 190.18,
            "end": 190.62
          },
          {
            "word": "- ",
            "start": 190.62,
            "end": 191.06
          },
          {
            "word": "K",
            "start": 191.06,
            "end": 191.5
          }
        ]
      },
      {
        "verseStart": 191.5,
        "verseEnd": 194.36,
        "words": [
          {
            "word": "きらきら ",
            "start": 191.5,
            "end": 192.072
          },
          {
            "word": "キラー ",
            "start": 192.072,
            "end": 192.644
          },
          {
            "word": "ラッキー ",
            "start": 192.644,
            "end": 193.216
          },
          {
            "word": "ラッキー ",
            "start": 193.216,
            "end": 193.788
          },
          {
            "word": "ラッキー",
            "start": 193.788,
            "end": 194.36
          }
        ]
      },
      {
        "verseStart": 194.36,
        "verseEnd": 197.54,
        "words": [
          {
            "word": "未来 ",
            "start": 194.36,
            "end": 194.89
          },
          {
            "word": "は ",
            "start": 194.89,
            "end": 195.42
          },
          {
            "word": "ほら ",
            "start": 195.42,
            "end": 195.95
          },
          {
            "word": "ハッピー ",
            "start": 195.95,
            "end": 196.48
          },
          {
            "word": "ハッピー ",
            "start": 196.48,
            "end": 197.01
          },
          {
            "word": "ハッピー",
            "start": 197.01,
            "end": 197.54
          }
        ]
      },
      {
        "verseStart": 197.54,
        "verseEnd": 201.96,
        "words": [
          {
            "word": "空 ",
            "start": 197.54,
            "end": 198.171
          },
          {
            "word": "から ",
            "start": 198.171,
            "end": 198.803
          },
          {
            "word": "今 ",
            "start": 198.803,
            "end": 199.434
          },
          {
            "word": "きらきら ",
            "start": 199.434,
            "end": 200.066
          },
          {
            "word": "キラー ",
            "start": 200.066,
            "end": 200.697
          },
          {
            "word": "coming ",
            "start": 200.697,
            "end": 201.329
          },
          {
            "word": "now",
            "start": 201.329,
            "end": 201.96
          }
        ]
      },
      {
        "verseStart": 201.96,
        "verseEnd": 203.46,
        "words": [
          {
            "word": "( ",
            "start": 201.96,
            "end": 202.127
          },
          {
            "word": "One ",
            "start": 202.127,
            "end": 202.293
          },
          {
            "word": ", ",
            "start": 202.293,
            "end": 202.46
          },
          {
            "word": "two ",
            "start": 202.46,
            "end": 202.627
          },
          {
            "word": ", ",
            "start": 202.627,
            "end": 202.793
          },
          {
            "word": "three ",
            "start": 202.793,
            "end": 202.96
          },
          {
            "word": ", ",
            "start": 202.96,
            "end": 203.127
          },
          {
            "word": "four ",
            "start": 203.127,
            "end": 203.293
          },
          {
            "word": ")",
            "start": 203.293,
            "end": 203.46
          }
        ]
      },
      {
        "verseStart": 203.46,
        "verseEnd": 206.4,
        "words": [
          {
            "word": "きらきら ",
            "start": 203.46,
            "end": 204.048
          },
          {
            "word": "キラー ",
            "start": 204.048,
            "end": 204.636
          },
          {
            "word": "ハッピー ",
            "start": 204.636,
            "end": 205.224
          },
          {
            "word": "ハッピー ",
            "start": 205.224,
            "end": 205.812
          },
          {
            "word": "ハッピー",
            "start": 205.812,
            "end": 206.4
          }
        ]
      },
      {
        "verseStart": 206.4,
        "verseEnd": 209.36,
        "words": [
          {
            "word": "未来 ",
            "start": 206.4,
            "end": 206.893
          },
          {
            "word": "は ",
            "start": 206.893,
            "end": 207.387
          },
          {
            "word": "ほら ",
            "start": 207.387,
            "end": 207.88
          },
          {
            "word": "ラッキー ",
            "start": 207.88,
            "end": 208.373
          },
          {
            "word": "ラッキー ",
            "start": 208.373,
            "end": 208.867
          },
          {
            "word": "ラッキー",
            "start": 208.867,
            "end": 209.36
          }
        ]
      },
      {
        "verseStart": 209.36,
        "verseEnd": 214.78,
        "words": [
          {
            "word": "きらきら ",
            "start": 209.36,
            "end": 210.16
          },
          {
            "word": "キラー ",
            "start": 210.16,
            "end": 210.96
          },
          {
            "word": "ドキドキドキ ",
            "start": 210.96,
            "end": 211.76
          },
          {
            "word": "fall ",
            "start": 211.76,
            "end": 212.56
          },
          {
            "word": "in ",
            "start": 212.56,
            "end": 213.36
          },
          {
            "word": "love",
            "start": 213.36,
            "end": 214.16
          }
        ]
      },
      {
        "verseStart": 214.78,
        "verseEnd": 220.77,
        "words": [
          {
            "word": "きらきら ",
            "start": 214.78,
            "end": 215.58
          },
          {
            "word": "キラー ",
            "start": 215.58,
            "end": 216.38
          },
          {
            "word": "( ",
            "start": 216.38,
            "end": 217.18
          },
          {
            "word": "きらきら ",
            "start": 217.18,
            "end": 217.98
          },
          {
            "word": "キラー ",
            "start": 217.98,
            "end": 218.78
          },
          {
            "word": ")",
            "start": 218.78,
            "end": 219.58
          }
        ]
      },
      {
        "verseStart": 220.77,
        "verseEnd": 224.94,
        "words": [
          {
            "word": "きらきら ",
            "start": 220.77,
            "end": 221.57
          },
          {
            "word": "キラー ",
            "start": 221.57,
            "end": 222.37
          },
          {
            "word": "( ",
            "start": 222.37,
            "end": 223.17
          },
          {
            "word": "マジカルパワー ",
            "start": 223.17,
            "end": 223.97
          },
          {
            "word": ")",
            "start": 223.97,
            "end": 224.77
          }
        ]
      },
      {
        "verseStart": 224.94,
        "verseEnd": 227.32999999999998,
        "words": [
          {
            "word": "かんぜん ",
            "start": 224.94,
            "end": 225.737
          },
          {
            "word": "きらきら ",
            "start": 225.737,
            "end": 226.533
          },
          {
            "word": "キラー",
            "start": 226.533,
            "end": 227.33
          }
        ]
      },
      {
        "verseStart": 227.32999999999998,
        "verseEnd": 233.47,
        "words": [
          {
            "word": "L ",
            "start": 227.33,
            "end": 227.769
          },
          {
            "word": "- ",
            "start": 227.769,
            "end": 228.207
          },
          {
            "word": "U ",
            "start": 228.207,
            "end": 228.646
          },
          {
            "word": "- ",
            "start": 228.646,
            "end": 229.084
          },
          {
            "word": "C ",
            "start": 229.084,
            "end": 229.523
          },
          {
            "word": "- ",
            "start": 229.523,
            "end": 229.961
          },
          {
            "word": "K ",
            "start": 229.961,
            "end": 230.4
          },
          {
            "word": "L ",
            "start": 230.4,
            "end": 230.839
          },
          {
            "word": "- ",
            "start": 230.839,
            "end": 231.277
          },
          {
            "word": "U ",
            "start": 231.277,
            "end": 231.716
          },
          {
            "word": "- ",
            "start": 231.716,
            "end": 232.154
          },
          {
            "word": "C ",
            "start": 232.154,
            "end": 232.593
          },
          {
            "word": "- ",
            "start": 232.593,
            "end": 233.031
          },
          {
            "word": "K",
            "start": 233.031,
            "end": 233.47
          }
        ]
      },
      {
        "verseStart": 233.47,
        "verseEnd": 239.59,
        "words": [
          {
            "word": "L ",
            "start": 233.47,
            "end": 233.907
          },
          {
            "word": "- ",
            "start": 233.907,
            "end": 234.344
          },
          {
            "word": "U ",
            "start": 234.344,
            "end": 234.781
          },
          {
            "word": "- ",
            "start": 234.781,
            "end": 235.219
          },
          {
            "word": "C ",
            "start": 235.219,
            "end": 235.656
          },
          {
            "word": "- ",
            "start": 235.656,
            "end": 236.093
          },
          {
            "word": "K ",
            "start": 236.093,
            "end": 236.53
          },
          {
            "word": "L ",
            "start": 236.53,
            "end": 236.967
          },
          {
            "word": "- ",
            "start": 236.967,
            "end": 237.404
          },
          {
            "word": "U ",
            "start": 237.404,
            "end": 237.841
          },
          {
            "word": "- ",
            "start": 237.841,
            "end": 238.279
          },
          {
            "word": "C ",
            "start": 238.279,
            "end": 238.716
          },
          {
            "word": "- ",
            "start": 238.716,
            "end": 239.153
          },
          {
            "word": "K",
            "start": 239.153,
            "end": 239.59
          }
        ]
      },
      {
        "verseStart": 239.59,
        "verseEnd": 245.04,
        "words": [
          {
            "word": "L ",
            "start": 239.59,
            "end": 239.979
          },
          {
            "word": "- ",
            "start": 239.979,
            "end": 240.369
          },
          {
            "word": "U ",
            "start": 240.369,
            "end": 240.758
          },
          {
            "word": "- ",
            "start": 240.758,
            "end": 241.147
          },
          {
            "word": "C ",
            "start": 241.147,
            "end": 241.536
          },
          {
            "word": "- ",
            "start": 241.536,
            "end": 241.926
          },
          {
            "word": "K ",
            "start": 241.926,
            "end": 242.315
          },
          {
            "word": "L ",
            "start": 242.315,
            "end": 242.704
          },
          {
            "word": "- ",
            "start": 242.704,
            "end": 243.094
          },
          {
            "word": "U ",
            "start": 243.094,
            "end": 243.483
          },
          {
            "word": "- ",
            "start": 243.483,
            "end": 243.872
          },
          {
            "word": "C ",
            "start": 243.872,
            "end": 244.261
          },
          {
            "word": "- ",
            "start": 244.261,
            "end": 244.651
          },
          {
            "word": "K",
            "start": 244.651,
            "end": 245.04
          }
        ]
      },
      {
        "verseStart": 245.04,
        "verseEnd": 248.04,
        "words": [
          {
            "word": "L ",
            "start": 245.04,
            "end": 245.254
          },
          {
            "word": "- ",
            "start": 245.254,
            "end": 245.469
          },
          {
            "word": "U ",
            "start": 245.469,
            "end": 245.683
          },
          {
            "word": "- ",
            "start": 245.683,
            "end": 245.897
          },
          {
            "word": "C ",
            "start": 245.897,
            "end": 246.111
          },
          {
            "word": "- ",
            "start": 246.111,
            "end": 246.326
          },
          {
            "word": "K ",
            "start": 246.326,
            "end": 246.54
          },
          {
            "word": "L ",
            "start": 246.54,
            "end": 246.754
          },
          {
            "word": "- ",
            "start": 246.754,
            "end": 246.969
          },
          {
            "word": "U ",
            "start": 246.969,
            "end": 247.183
          },
          {
            "word": "- ",
            "start": 247.183,
            "end": 247.397
          },
          {
            "word": "C ",
            "start": 247.397,
            "end": 247.611
          },
          {
            "word": "- ",
            "start": 247.611,
            "end": 247.826
          },
          {
            "word": "K",
            "start": 247.826,
            "end": 248.04
          }
        ]
      }
    ]
  }
};
