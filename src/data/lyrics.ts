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
            "end": 28.95
          },
          {
            "word": "the ",
            "start": 28.95,
            "end": 29.33
          },
          {
            "word": "love ",
            "start": 29.33,
            "end": 29.71
          },
          {
            "word": "of ",
            "start": 29.71,
            "end": 30.09
          },
          {
            "word": "God, ",
            "start": 30.09,
            "end": 30.47
          },
          {
            "word": "will ",
            "start": 30.47,
            "end": 30.85
          },
          {
            "word": "you ",
            "start": 30.85,
            "end": 31.23
          },
          {
            "word": "bite ",
            "start": 31.23,
            "end": 31.61
          },
          {
            "word": "your ",
            "start": 31.61,
            "end": 31.99
          },
          {
            "word": "tongue",
            "start": 31.99,
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
            "end": 32.932
          },
          {
            "word": "we ",
            "start": 32.932,
            "end": 33.493
          },
          {
            "word": "make ",
            "start": 33.493,
            "end": 34.055
          },
          {
            "word": "you ",
            "start": 34.055,
            "end": 34.617
          },
          {
            "word": "swallow ",
            "start": 34.617,
            "end": 35.178
          },
          {
            "word": "it?",
            "start": 35.178,
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
            "end": 49.63
          },
          {
            "word": "desperate ",
            "start": 49.63,
            "end": 50.03
          },
          {
            "word": "and ",
            "start": 50.03,
            "end": 50.43
          },
          {
            "word": "pathetic, ",
            "start": 50.43,
            "end": 50.83
          },
          {
            "word": "I'm ",
            "start": 50.83,
            "end": 51.23
          },
          {
            "word": "begging ",
            "start": 51.23,
            "end": 51.63
          },
          {
            "word": "you ",
            "start": 51.63,
            "end": 52.03
          },
          {
            "word": "to ",
            "start": 52.03,
            "end": 52.43
          },
          {
            "word": "spare ",
            "start": 52.43,
            "end": 52.83
          },
          {
            "word": "me",
            "start": 52.83,
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
            "word": "bones?",
            "start": 61.88,
            "end": 62.68
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
            "end": 74.843
          },
          {
            "word": "to ",
            "start": 74.843,
            "end": 75.467
          },
          {
            "word": "hell, ",
            "start": 75.467,
            "end": 76.09
          },
          {
            "word": "for ",
            "start": 76.09,
            "end": 76.713
          },
          {
            "word": "heaven's ",
            "start": 76.713,
            "end": 77.337
          },
          {
            "word": "sake",
            "start": 77.337,
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
            "end": 88.763
          },
          {
            "word": "to ",
            "start": 88.763,
            "end": 89.397
          },
          {
            "word": "hell, ",
            "start": 89.397,
            "end": 90.03
          },
          {
            "word": "for ",
            "start": 90.03,
            "end": 90.663
          },
          {
            "word": "heaven's ",
            "start": 90.663,
            "end": 91.297
          },
          {
            "word": "sake",
            "start": 91.297,
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
            "end": 95.722
          },
          {
            "word": "to ",
            "start": 95.722,
            "end": 96.283
          },
          {
            "word": "hell, ",
            "start": 96.283,
            "end": 96.845
          },
          {
            "word": "for ",
            "start": 96.845,
            "end": 97.407
          },
          {
            "word": "heaven's ",
            "start": 97.407,
            "end": 97.968
          },
          {
            "word": "sake",
            "start": 97.968,
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
            "end": 102.443
          },
          {
            "word": "one ",
            "start": 102.443,
            "end": 102.827
          },
          {
            "word": "wants ",
            "start": 102.827,
            "end": 103.21
          },
          {
            "word": "to ",
            "start": 103.21,
            "end": 103.593
          },
          {
            "word": "hear ",
            "start": 103.593,
            "end": 103.977
          },
          {
            "word": "you ( ",
            "start": 103.977,
            "end": 104.36
          },
          {
            "word": "save ",
            "start": 104.36,
            "end": 104.743
          },
          {
            "word": "your ",
            "start": 104.743,
            "end": 105.127
          },
          {
            "word": "breath)",
            "start": 105.127,
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
            "end": 108.739
          },
          {
            "word": "desperate ",
            "start": 108.739,
            "end": 109.088
          },
          {
            "word": "and ",
            "start": 109.088,
            "end": 109.437
          },
          {
            "word": "pathetic, ",
            "start": 109.437,
            "end": 109.786
          },
          {
            "word": "you ",
            "start": 109.786,
            "end": 110.135
          },
          {
            "word": "think ",
            "start": 110.135,
            "end": 110.485
          },
          {
            "word": "that ",
            "start": 110.485,
            "end": 110.834
          },
          {
            "word": "no ",
            "start": 110.834,
            "end": 111.183
          },
          {
            "word": "one ",
            "start": 111.183,
            "end": 111.532
          },
          {
            "word": "sees ",
            "start": 111.532,
            "end": 111.881
          },
          {
            "word": "this?",
            "start": 111.881,
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
            "end": 112.673
          },
          {
            "word": "think ",
            "start": 112.673,
            "end": 113.117
          },
          {
            "word": "it's ",
            "start": 113.117,
            "end": 113.56
          },
          {
            "word": "time ",
            "start": 113.56,
            "end": 114.003
          },
          {
            "word": "you ",
            "start": 114.003,
            "end": 114.447
          },
          {
            "word": "knew ",
            "start": 114.447,
            "end": 114.89
          },
          {
            "word": "the ",
            "start": 114.89,
            "end": 115.333
          },
          {
            "word": "truth, ",
            "start": 115.333,
            "end": 115.777
          },
          {
            "word": "yeah",
            "start": 115.777,
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
            "end": 127.05
          },
          {
            "word": "to ",
            "start": 127.05,
            "end": 127.67
          },
          {
            "word": "hell, ",
            "start": 127.67,
            "end": 128.29
          },
          {
            "word": "for ",
            "start": 128.29,
            "end": 128.91
          },
          {
            "word": "heaven's ",
            "start": 128.91,
            "end": 129.53
          },
          {
            "word": "sake",
            "start": 129.53,
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
            "end": 140.99
          },
          {
            "word": "to ",
            "start": 140.99,
            "end": 141.59
          },
          {
            "word": "hell, ",
            "start": 141.59,
            "end": 142.19
          },
          {
            "word": "for ",
            "start": 142.19,
            "end": 142.79
          },
          {
            "word": "heaven's ",
            "start": 142.79,
            "end": 143.39
          },
          {
            "word": "sake",
            "start": 143.39,
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
            "word": "bones?",
            "start": 148.79,
            "end": 149.59
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
            "end": 168.806
          },
          {
            "word": "not ",
            "start": 168.806,
            "end": 169.252
          },
          {
            "word": "a ",
            "start": 169.252,
            "end": 169.699
          },
          {
            "word": "shepherd, ",
            "start": 169.699,
            "end": 170.145
          },
          {
            "word": "you're ",
            "start": 170.145,
            "end": 170.591
          },
          {
            "word": "just ",
            "start": 170.591,
            "end": 171.038
          },
          {
            "word": "a ",
            "start": 171.038,
            "end": 171.484
          },
          {
            "word": "sheep",
            "start": 171.484,
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
            "word": "Feed ' ",
            "start": 178.64,
            "end": 179.141
          },
          {
            "word": "em ",
            "start": 179.141,
            "end": 179.642
          },
          {
            "word": "to ",
            "start": 179.642,
            "end": 180.143
          },
          {
            "word": "the ",
            "start": 180.143,
            "end": 180.644
          },
          {
            "word": "sharks ",
            "start": 180.644,
            "end": 181.145
          },
          {
            "word": "and ",
            "start": 181.145,
            "end": 181.645
          },
          {
            "word": "throw ' ",
            "start": 181.645,
            "end": 182.146
          },
          {
            "word": "em ",
            "start": 182.146,
            "end": 182.647
          },
          {
            "word": "to ",
            "start": 182.647,
            "end": 183.148
          },
          {
            "word": "the ",
            "start": 183.148,
            "end": 183.649
          },
          {
            "word": "wolves",
            "start": 183.649,
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
            "end": 207.023
          },
          {
            "word": "to ",
            "start": 207.023,
            "end": 207.647
          },
          {
            "word": "hell, ",
            "start": 207.647,
            "end": 208.27
          },
          {
            "word": "for ",
            "start": 208.27,
            "end": 208.893
          },
          {
            "word": "heaven's ",
            "start": 208.893,
            "end": 209.517
          },
          {
            "word": "sake",
            "start": 209.517,
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
            "end": 220.945
          },
          {
            "word": "to ",
            "start": 220.945,
            "end": 221.53
          },
          {
            "word": "hell, ",
            "start": 221.53,
            "end": 222.115
          },
          {
            "word": "for ",
            "start": 222.115,
            "end": 222.7
          },
          {
            "word": "heaven's ",
            "start": 222.7,
            "end": 223.285
          },
          {
            "word": "sake",
            "start": 223.285,
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
            "end": 224.453
          },
          {
            "word": "to ",
            "start": 224.453,
            "end": 225.037
          },
          {
            "word": "hell, ",
            "start": 225.037,
            "end": 225.62
          },
          {
            "word": "for ",
            "start": 225.62,
            "end": 226.203
          },
          {
            "word": "heaven's ",
            "start": 226.203,
            "end": 226.787
          },
          {
            "word": "sake",
            "start": 226.787,
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
            "end": 227.93
          },
          {
            "word": "to ",
            "start": 227.93,
            "end": 228.49
          },
          {
            "word": "hell, ",
            "start": 228.49,
            "end": 229.05
          },
          {
            "word": "for ",
            "start": 229.05,
            "end": 229.61
          },
          {
            "word": "heaven's ",
            "start": 229.61,
            "end": 230.17
          },
          {
            "word": "sake",
            "start": 230.17,
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
            "end": 231.215
          },
          {
            "word": "to ",
            "start": 231.215,
            "end": 231.7
          },
          {
            "word": "hell, ",
            "start": 231.7,
            "end": 232.185
          },
          {
            "word": "for ",
            "start": 232.185,
            "end": 232.67
          },
          {
            "word": "heaven's ",
            "start": 232.67,
            "end": 233.155
          },
          {
            "word": "sake",
            "start": 233.155,
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
        "verseStart": 2.32,
        "verseEnd": 8.27,
        "words": [
          {
            "word": "Плак- ",
            "start": 2.32,
            "end": 3.12
          },
          {
            "word": "плак, ",
            "start": 3.12,
            "end": 3.92
          },
          {
            "word": "плак- ",
            "start": 3.92,
            "end": 4.72
          },
          {
            "word": "плак",
            "start": 4.72,
            "end": 5.52
          }
        ]
      },
      {
        "verseStart": 8.27,
        "verseEnd": 12.21,
        "words": [
          {
            "word": "Плак- ",
            "start": 8.27,
            "end": 9.07
          },
          {
            "word": "плак, ",
            "start": 9.07,
            "end": 9.87
          },
          {
            "word": "плак- ",
            "start": 9.87,
            "end": 10.67
          },
          {
            "word": "плак",
            "start": 10.67,
            "end": 11.47
          }
        ]
      },
      {
        "verseStart": 12.21,
        "verseEnd": 15.15,
        "words": [
          {
            "word": "Я ",
            "start": 12.21,
            "end": 12.504
          },
          {
            "word": "тебе ",
            "start": 12.504,
            "end": 12.798
          },
          {
            "word": "писала ",
            "start": 12.798,
            "end": 13.092
          },
          {
            "word": "и ",
            "start": 13.092,
            "end": 13.386
          },
          {
            "word": "ждала ",
            "start": 13.386,
            "end": 13.68
          },
          {
            "word": "тебя ",
            "start": 13.68,
            "end": 13.974
          },
          {
            "word": "в ",
            "start": 13.974,
            "end": 14.268
          },
          {
            "word": "ночи ( ",
            "start": 14.268,
            "end": 14.562
          },
          {
            "word": "плак- ",
            "start": 14.562,
            "end": 14.856
          },
          {
            "word": "плак)",
            "start": 14.856,
            "end": 15.15
          }
        ]
      },
      {
        "verseStart": 15.15,
        "verseEnd": 18.28,
        "words": [
          {
            "word": "Ты ",
            "start": 15.15,
            "end": 15.498
          },
          {
            "word": "не ",
            "start": 15.498,
            "end": 15.846
          },
          {
            "word": "отвечаешь ",
            "start": 15.846,
            "end": 16.193
          },
          {
            "word": "больше ",
            "start": 16.193,
            "end": 16.541
          },
          {
            "word": "на ",
            "start": 16.541,
            "end": 16.889
          },
          {
            "word": "мои ",
            "start": 16.889,
            "end": 17.237
          },
          {
            "word": "звонки ( ",
            "start": 17.237,
            "end": 17.584
          },
          {
            "word": "плак- ",
            "start": 17.584,
            "end": 17.932
          },
          {
            "word": "плак)",
            "start": 17.932,
            "end": 18.28
          }
        ]
      },
      {
        "verseStart": 18.28,
        "verseEnd": 21.43,
        "words": [
          {
            "word": "Каждый ",
            "start": 18.28,
            "end": 18.674
          },
          {
            "word": "вечер ",
            "start": 18.674,
            "end": 19.068
          },
          {
            "word": "оставляю ",
            "start": 19.068,
            "end": 19.461
          },
          {
            "word": "под ",
            "start": 19.461,
            "end": 19.855
          },
          {
            "word": "подушкой ",
            "start": 19.855,
            "end": 20.249
          },
          {
            "word": "зуб ( ",
            "start": 20.249,
            "end": 20.642
          },
          {
            "word": "плак- ",
            "start": 20.642,
            "end": 21.036
          },
          {
            "word": "плак)",
            "start": 21.036,
            "end": 21.43
          }
        ]
      },
      {
        "verseStart": 21.43,
        "verseEnd": 24.49,
        "words": [
          {
            "word": "Умоляю ",
            "start": 21.43,
            "end": 21.867
          },
          {
            "word": "небеса ",
            "start": 21.867,
            "end": 22.304
          },
          {
            "word": "назад ",
            "start": 22.304,
            "end": 22.741
          },
          {
            "word": "тебя ",
            "start": 22.741,
            "end": 23.179
          },
          {
            "word": "вернуть ( ",
            "start": 23.179,
            "end": 23.616
          },
          {
            "word": "плак- ",
            "start": 23.616,
            "end": 24.053
          },
          {
            "word": "плак)",
            "start": 24.053,
            "end": 24.49
          }
        ]
      },
      {
        "verseStart": 24.49,
        "verseEnd": 27.45,
        "words": [
          {
            "word": "Я ",
            "start": 24.49,
            "end": 24.786
          },
          {
            "word": "была ",
            "start": 24.786,
            "end": 25.082
          },
          {
            "word": "хорошей, ",
            "start": 25.082,
            "end": 25.378
          },
          {
            "word": "а ",
            "start": 25.378,
            "end": 25.674
          },
          {
            "word": "плохой ",
            "start": 25.674,
            "end": 25.97
          },
          {
            "word": "я ",
            "start": 25.97,
            "end": 26.266
          },
          {
            "word": "не ",
            "start": 26.266,
            "end": 26.562
          },
          {
            "word": "была ( ",
            "start": 26.562,
            "end": 26.858
          },
          {
            "word": "плак- ",
            "start": 26.858,
            "end": 27.154
          },
          {
            "word": "плак)",
            "start": 27.154,
            "end": 27.45
          }
        ]
      },
      {
        "verseStart": 27.45,
        "verseEnd": 30.46,
        "words": [
          {
            "word": "Я ",
            "start": 27.45,
            "end": 27.751
          },
          {
            "word": "всю ",
            "start": 27.751,
            "end": 28.052
          },
          {
            "word": "жизнь, ",
            "start": 28.052,
            "end": 28.353
          },
          {
            "word": "как ",
            "start": 28.353,
            "end": 28.654
          },
          {
            "word": "паинька, ",
            "start": 28.654,
            "end": 28.955
          },
          {
            "word": "по ",
            "start": 28.955,
            "end": 29.256
          },
          {
            "word": "правилам ",
            "start": 29.256,
            "end": 29.557
          },
          {
            "word": "жила ( ",
            "start": 29.557,
            "end": 29.858
          },
          {
            "word": "плак- ",
            "start": 29.858,
            "end": 30.159
          },
          {
            "word": "плак)",
            "start": 30.159,
            "end": 30.46
          }
        ]
      },
      {
        "verseStart": 30.46,
        "verseEnd": 33.51,
        "words": [
          {
            "word": "Надоело ",
            "start": 30.46,
            "end": 30.896
          },
          {
            "word": "плакать, ",
            "start": 30.896,
            "end": 31.331
          },
          {
            "word": "надоело ",
            "start": 31.331,
            "end": 31.767
          },
          {
            "word": "мне ",
            "start": 31.767,
            "end": 32.203
          },
          {
            "word": "страдать ( ",
            "start": 32.203,
            "end": 32.639
          },
          {
            "word": "плак- ",
            "start": 32.639,
            "end": 33.074
          },
          {
            "word": "плак)",
            "start": 33.074,
            "end": 33.51
          }
        ]
      },
      {
        "verseStart": 33.51,
        "verseEnd": 36.88,
        "words": [
          {
            "word": "Всё ",
            "start": 33.51,
            "end": 33.884
          },
          {
            "word": "равно ",
            "start": 33.884,
            "end": 34.259
          },
          {
            "word": "не ",
            "start": 34.259,
            "end": 34.633
          },
          {
            "word": "выйдет ",
            "start": 34.633,
            "end": 35.008
          },
          {
            "word": "свою ",
            "start": 35.008,
            "end": 35.382
          },
          {
            "word": "смерть ",
            "start": 35.382,
            "end": 35.757
          },
          {
            "word": "предугадать ( ",
            "start": 35.757,
            "end": 36.131
          },
          {
            "word": "плак- ",
            "start": 36.131,
            "end": 36.506
          },
          {
            "word": "плак)",
            "start": 36.506,
            "end": 36.88
          }
        ]
      },
      {
        "verseStart": 36.88,
        "verseEnd": 40.08,
        "words": [
          {
            "word": "Ла- ",
            "start": 36.88,
            "end": 37.28
          },
          {
            "word": "ла- ",
            "start": 37.28,
            "end": 37.68
          },
          {
            "word": "ла- ",
            "start": 37.68,
            "end": 38.08
          },
          {
            "word": "ла- ",
            "start": 38.08,
            "end": 38.48
          },
          {
            "word": "ла- ",
            "start": 38.48,
            "end": 38.88
          },
          {
            "word": "а- ",
            "start": 38.88,
            "end": 39.28
          },
          {
            "word": "а- ",
            "start": 39.28,
            "end": 39.68
          },
          {
            "word": "а",
            "start": 39.68,
            "end": 40.08
          }
        ]
      },
      {
        "verseStart": 40.08,
        "verseEnd": 43.19,
        "words": [
          {
            "word": "Ла- ",
            "start": 40.08,
            "end": 40.469
          },
          {
            "word": "ла- ",
            "start": 40.469,
            "end": 40.858
          },
          {
            "word": "ла- ",
            "start": 40.858,
            "end": 41.246
          },
          {
            "word": "ла- ",
            "start": 41.246,
            "end": 41.635
          },
          {
            "word": "ла- ",
            "start": 41.635,
            "end": 42.024
          },
          {
            "word": "а- ",
            "start": 42.024,
            "end": 42.412
          },
          {
            "word": "а- ",
            "start": 42.412,
            "end": 42.801
          },
          {
            "word": "а",
            "start": 42.801,
            "end": 43.19
          }
        ]
      },
      {
        "verseStart": 43.19,
        "verseEnd": 46.01,
        "words": [
          {
            "word": "Ла- ",
            "start": 43.19,
            "end": 43.542
          },
          {
            "word": "ла- ",
            "start": 43.542,
            "end": 43.895
          },
          {
            "word": "ла- ",
            "start": 43.895,
            "end": 44.247
          },
          {
            "word": "ла- ",
            "start": 44.247,
            "end": 44.6
          },
          {
            "word": "ла- ",
            "start": 44.6,
            "end": 44.953
          },
          {
            "word": "а- ",
            "start": 44.953,
            "end": 45.305
          },
          {
            "word": "а- ",
            "start": 45.305,
            "end": 45.657
          },
          {
            "word": "а",
            "start": 45.657,
            "end": 46.01
          }
        ]
      },
      {
        "verseStart": 46.01,
        "verseEnd": 48.9,
        "words": [
          {
            "word": "Ла- ",
            "start": 46.01,
            "end": 46.371
          },
          {
            "word": "ла- ",
            "start": 46.371,
            "end": 46.733
          },
          {
            "word": "ла- ",
            "start": 46.733,
            "end": 47.094
          },
          {
            "word": "ла- ",
            "start": 47.094,
            "end": 47.455
          },
          {
            "word": "ла- ",
            "start": 47.455,
            "end": 47.816
          },
          {
            "word": "а- ",
            "start": 47.816,
            "end": 48.177
          },
          {
            "word": "а- ",
            "start": 48.177,
            "end": 48.539
          },
          {
            "word": "а",
            "start": 48.539,
            "end": 48.9
          }
        ]
      },
      {
        "verseStart": 48.9,
        "verseEnd": 51.62,
        "words": [
          {
            "word": "Мама ",
            "start": 48.9,
            "end": 49.444
          },
          {
            "word": "говорила ",
            "start": 49.444,
            "end": 49.988
          },
          {
            "word": "мне: \" ",
            "start": 49.988,
            "end": 50.532
          },
          {
            "word": "Слушайся ",
            "start": 50.532,
            "end": 51.076
          },
          {
            "word": "мужа\"",
            "start": 51.076,
            "end": 51.62
          }
        ]
      },
      {
        "verseStart": 51.62,
        "verseEnd": 54.79,
        "words": [
          {
            "word": "Я ",
            "start": 51.62,
            "end": 52.148
          },
          {
            "word": "не ",
            "start": 52.148,
            "end": 52.677
          },
          {
            "word": "послушна, ",
            "start": 52.677,
            "end": 53.205
          },
          {
            "word": "я ",
            "start": 53.205,
            "end": 53.733
          },
          {
            "word": "делаю ",
            "start": 53.733,
            "end": 54.262
          },
          {
            "word": "хуже",
            "start": 54.262,
            "end": 54.79
          }
        ]
      },
      {
        "verseStart": 54.79,
        "verseEnd": 57.86,
        "words": [
          {
            "word": "Делаю ",
            "start": 54.79,
            "end": 55.302
          },
          {
            "word": "не ",
            "start": 55.302,
            "end": 55.813
          },
          {
            "word": "так, ",
            "start": 55.813,
            "end": 56.325
          },
          {
            "word": "как ",
            "start": 56.325,
            "end": 56.837
          },
          {
            "word": "наказывал ",
            "start": 56.837,
            "end": 57.348
          },
          {
            "word": "папа",
            "start": 57.348,
            "end": 57.86
          }
        ]
      },
      {
        "verseStart": 57.86,
        "verseEnd": 60.92,
        "words": [
          {
            "word": "Вместо ",
            "start": 57.86,
            "end": 58.472
          },
          {
            "word": "звезды ",
            "start": 58.472,
            "end": 59.084
          },
          {
            "word": "я ",
            "start": 59.084,
            "end": 59.696
          },
          {
            "word": "хватаю ",
            "start": 59.696,
            "end": 60.308
          },
          {
            "word": "гранату",
            "start": 60.308,
            "end": 60.92
          }
        ]
      },
      {
        "verseStart": 60.92,
        "verseEnd": 63.83,
        "words": [
          {
            "word": "Мама ",
            "start": 60.92,
            "end": 61.502
          },
          {
            "word": "говорила ",
            "start": 61.502,
            "end": 62.084
          },
          {
            "word": "мне: \" ",
            "start": 62.084,
            "end": 62.666
          },
          {
            "word": "Слушайся ",
            "start": 62.666,
            "end": 63.248
          },
          {
            "word": "мужа\"",
            "start": 63.248,
            "end": 63.83
          }
        ]
      },
      {
        "verseStart": 63.83,
        "verseEnd": 66.85,
        "words": [
          {
            "word": "Я ",
            "start": 63.83,
            "end": 64.333
          },
          {
            "word": "не ",
            "start": 64.333,
            "end": 64.837
          },
          {
            "word": "послушна, ",
            "start": 64.837,
            "end": 65.34
          },
          {
            "word": "я ",
            "start": 65.34,
            "end": 65.843
          },
          {
            "word": "делаю ",
            "start": 65.843,
            "end": 66.347
          },
          {
            "word": "хуже",
            "start": 66.347,
            "end": 66.85
          }
        ]
      },
      {
        "verseStart": 66.85,
        "verseEnd": 70,
        "words": [
          {
            "word": "Делаю ",
            "start": 66.85,
            "end": 67.375
          },
          {
            "word": "не ",
            "start": 67.375,
            "end": 67.9
          },
          {
            "word": "так, ",
            "start": 67.9,
            "end": 68.425
          },
          {
            "word": "как ",
            "start": 68.425,
            "end": 68.95
          },
          {
            "word": "наказывал ",
            "start": 68.95,
            "end": 69.475
          },
          {
            "word": "папа",
            "start": 69.475,
            "end": 70
          }
        ]
      },
      {
        "verseStart": 70,
        "verseEnd": 73.21000000000001,
        "words": [
          {
            "word": "Вместо ",
            "start": 70,
            "end": 70.642
          },
          {
            "word": "звезды ",
            "start": 70.642,
            "end": 71.284
          },
          {
            "word": "я ",
            "start": 71.284,
            "end": 71.926
          },
          {
            "word": "хватаю ",
            "start": 71.926,
            "end": 72.568
          },
          {
            "word": "гранату",
            "start": 72.568,
            "end": 73.21
          }
        ]
      },
      {
        "verseStart": 73.21000000000001,
        "verseEnd": 79.03999999999999,
        "words": [
          {
            "word": "Я ",
            "start": 73.21,
            "end": 74.01
          },
          {
            "word": "хотела ",
            "start": 74.01,
            "end": 74.81
          },
          {
            "word": "бы ",
            "start": 74.81,
            "end": 75.61
          },
          {
            "word": "тебя, ",
            "start": 75.61,
            "end": 76.41
          },
          {
            "word": "как ",
            "start": 76.41,
            "end": 77.21
          },
          {
            "word": "тогда, ",
            "start": 77.21,
            "end": 78.01
          },
          {
            "word": "обнять",
            "start": 78.01,
            "end": 78.81
          }
        ]
      },
      {
        "verseStart": 79.03999999999999,
        "verseEnd": 85,
        "words": [
          {
            "word": "Но ",
            "start": 79.04,
            "end": 79.84
          },
          {
            "word": "для ",
            "start": 79.84,
            "end": 80.64
          },
          {
            "word": "этого ",
            "start": 80.64,
            "end": 81.44
          },
          {
            "word": "придётся ",
            "start": 81.44,
            "end": 82.24
          },
          {
            "word": "тело ",
            "start": 82.24,
            "end": 83.04
          },
          {
            "word": "раскопать",
            "start": 83.04,
            "end": 83.84
          }
        ]
      },
      {
        "verseStart": 85,
        "verseEnd": 91.24,
        "words": [
          {
            "word": "Твои ",
            "start": 85,
            "end": 85.78
          },
          {
            "word": "кости ",
            "start": 85.78,
            "end": 86.56
          },
          {
            "word": "ледяные ",
            "start": 86.56,
            "end": 87.34
          },
          {
            "word": "где- ",
            "start": 87.34,
            "end": 88.12
          },
          {
            "word": "то ",
            "start": 88.12,
            "end": 88.9
          },
          {
            "word": "там ",
            "start": 88.9,
            "end": 89.68
          },
          {
            "word": "на ",
            "start": 89.68,
            "end": 90.46
          },
          {
            "word": "дне",
            "start": 90.46,
            "end": 91.24
          }
        ]
      },
      {
        "verseStart": 91.24,
        "verseEnd": 99.42,
        "words": [
          {
            "word": "Прорастут ",
            "start": 91.24,
            "end": 92.04
          },
          {
            "word": "цветы ",
            "start": 92.04,
            "end": 92.84
          },
          {
            "word": "в ",
            "start": 92.84,
            "end": 93.64
          },
          {
            "word": "этой ",
            "start": 93.64,
            "end": 94.44
          },
          {
            "word": "оплаканной ",
            "start": 94.44,
            "end": 95.24
          },
          {
            "word": "земле",
            "start": 95.24,
            "end": 96.04
          }
        ]
      },
      {
        "verseStart": 99.42,
        "verseEnd": 105.57,
        "words": [
          {
            "word": "Плак- ",
            "start": 99.42,
            "end": 100.22
          },
          {
            "word": "плак, ",
            "start": 100.22,
            "end": 101.02
          },
          {
            "word": "плак- ",
            "start": 101.02,
            "end": 101.82
          },
          {
            "word": "плак",
            "start": 101.82,
            "end": 102.62
          }
        ]
      },
      {
        "verseStart": 105.57,
        "verseEnd": 109.50999999999999,
        "words": [
          {
            "word": "Плак- ",
            "start": 105.57,
            "end": 106.37
          },
          {
            "word": "плак, ",
            "start": 106.37,
            "end": 107.17
          },
          {
            "word": "плак- ",
            "start": 107.17,
            "end": 107.97
          },
          {
            "word": "плак",
            "start": 107.97,
            "end": 108.77
          }
        ]
      },
      {
        "verseStart": 109.50999999999999,
        "verseEnd": 112.43,
        "words": [
          {
            "word": "Растекаются ",
            "start": 109.51,
            "end": 109.875
          },
          {
            "word": "по ",
            "start": 109.875,
            "end": 110.24
          },
          {
            "word": "всей ",
            "start": 110.24,
            "end": 110.605
          },
          {
            "word": "стене ",
            "start": 110.605,
            "end": 110.97
          },
          {
            "word": "твои ",
            "start": 110.97,
            "end": 111.335
          },
          {
            "word": "мозги ( ",
            "start": 111.335,
            "end": 111.7
          },
          {
            "word": "плак- ",
            "start": 111.7,
            "end": 112.065
          },
          {
            "word": "плак)",
            "start": 112.065,
            "end": 112.43
          }
        ]
      },
      {
        "verseStart": 112.43,
        "verseEnd": 115.42,
        "words": [
          {
            "word": "Очень ",
            "start": 112.43,
            "end": 112.762
          },
          {
            "word": "разозлилась ",
            "start": 112.762,
            "end": 113.094
          },
          {
            "word": "на ",
            "start": 113.094,
            "end": 113.427
          },
          {
            "word": "тебя, ",
            "start": 113.427,
            "end": 113.759
          },
          {
            "word": "ты ",
            "start": 113.759,
            "end": 114.091
          },
          {
            "word": "уж ",
            "start": 114.091,
            "end": 114.423
          },
          {
            "word": "прости ( ",
            "start": 114.423,
            "end": 114.756
          },
          {
            "word": "плак- ",
            "start": 114.756,
            "end": 115.088
          },
          {
            "word": "плак)",
            "start": 115.088,
            "end": 115.42
          }
        ]
      },
      {
        "verseStart": 115.42,
        "verseEnd": 118.53,
        "words": [
          {
            "word": "Сотый ",
            "start": 115.42,
            "end": 115.731
          },
          {
            "word": "раз ",
            "start": 115.731,
            "end": 116.042
          },
          {
            "word": "во ",
            "start": 116.042,
            "end": 116.353
          },
          {
            "word": "сне ",
            "start": 116.353,
            "end": 116.664
          },
          {
            "word": "я ",
            "start": 116.664,
            "end": 116.975
          },
          {
            "word": "наблюдаю ",
            "start": 116.975,
            "end": 117.286
          },
          {
            "word": "твой ",
            "start": 117.286,
            "end": 117.597
          },
          {
            "word": "конец ( ",
            "start": 117.597,
            "end": 117.908
          },
          {
            "word": "плак- ",
            "start": 117.908,
            "end": 118.219
          },
          {
            "word": "плак)",
            "start": 118.219,
            "end": 118.53
          }
        ]
      },
      {
        "verseStart": 118.53,
        "verseEnd": 121.61,
        "words": [
          {
            "word": "И ",
            "start": 118.53,
            "end": 118.81
          },
          {
            "word": "не ",
            "start": 118.81,
            "end": 119.09
          },
          {
            "word": "так ",
            "start": 119.09,
            "end": 119.37
          },
          {
            "word": "уж ",
            "start": 119.37,
            "end": 119.65
          },
          {
            "word": "страшно, ",
            "start": 119.65,
            "end": 119.93
          },
          {
            "word": "в ",
            "start": 119.93,
            "end": 120.21
          },
          {
            "word": "самом ",
            "start": 120.21,
            "end": 120.49
          },
          {
            "word": "деле, ",
            "start": 120.49,
            "end": 120.77
          },
          {
            "word": "умереть ( ",
            "start": 120.77,
            "end": 121.05
          },
          {
            "word": "плак- ",
            "start": 121.05,
            "end": 121.33
          },
          {
            "word": "плак)",
            "start": 121.33,
            "end": 121.61
          }
        ]
      },
      {
        "verseStart": 121.61,
        "verseEnd": 124.44,
        "words": [
          {
            "word": "Я ",
            "start": 121.61,
            "end": 121.893
          },
          {
            "word": "была ",
            "start": 121.893,
            "end": 122.176
          },
          {
            "word": "хорошей, ",
            "start": 122.176,
            "end": 122.459
          },
          {
            "word": "а ",
            "start": 122.459,
            "end": 122.742
          },
          {
            "word": "плохой ",
            "start": 122.742,
            "end": 123.025
          },
          {
            "word": "я ",
            "start": 123.025,
            "end": 123.308
          },
          {
            "word": "не ",
            "start": 123.308,
            "end": 123.591
          },
          {
            "word": "была ( ",
            "start": 123.591,
            "end": 123.874
          },
          {
            "word": "плак- ",
            "start": 123.874,
            "end": 124.157
          },
          {
            "word": "плак)",
            "start": 124.157,
            "end": 124.44
          }
        ]
      },
      {
        "verseStart": 124.44,
        "verseEnd": 127.68,
        "words": [
          {
            "word": "И ",
            "start": 124.44,
            "end": 124.764
          },
          {
            "word": "всю ",
            "start": 124.764,
            "end": 125.088
          },
          {
            "word": "жизнь ",
            "start": 125.088,
            "end": 125.412
          },
          {
            "word": "как ",
            "start": 125.412,
            "end": 125.736
          },
          {
            "word": "паинька, ",
            "start": 125.736,
            "end": 126.06
          },
          {
            "word": "по ",
            "start": 126.06,
            "end": 126.384
          },
          {
            "word": "правилам ",
            "start": 126.384,
            "end": 126.708
          },
          {
            "word": "жила ( ",
            "start": 126.708,
            "end": 127.032
          },
          {
            "word": "плак- ",
            "start": 127.032,
            "end": 127.356
          },
          {
            "word": "плак)",
            "start": 127.356,
            "end": 127.68
          }
        ]
      },
      {
        "verseStart": 127.68,
        "verseEnd": 130.7,
        "words": [
          {
            "word": "Надоело ",
            "start": 127.68,
            "end": 128.111
          },
          {
            "word": "плакать, ",
            "start": 128.111,
            "end": 128.543
          },
          {
            "word": "надоело ",
            "start": 128.543,
            "end": 128.974
          },
          {
            "word": "мне ",
            "start": 128.974,
            "end": 129.406
          },
          {
            "word": "страдать ( ",
            "start": 129.406,
            "end": 129.837
          },
          {
            "word": "плак- ",
            "start": 129.837,
            "end": 130.269
          },
          {
            "word": "плак)",
            "start": 130.269,
            "end": 130.7
          }
        ]
      },
      {
        "verseStart": 130.7,
        "verseEnd": 134.08,
        "words": [
          {
            "word": "Всё ",
            "start": 130.7,
            "end": 131.076
          },
          {
            "word": "равно ",
            "start": 131.076,
            "end": 131.451
          },
          {
            "word": "не ",
            "start": 131.451,
            "end": 131.827
          },
          {
            "word": "выйдет ",
            "start": 131.827,
            "end": 132.202
          },
          {
            "word": "свою ",
            "start": 132.202,
            "end": 132.578
          },
          {
            "word": "смерть ",
            "start": 132.578,
            "end": 132.953
          },
          {
            "word": "предугадать ( ",
            "start": 132.953,
            "end": 133.329
          },
          {
            "word": "плак- ",
            "start": 133.329,
            "end": 133.704
          },
          {
            "word": "плак)",
            "start": 133.704,
            "end": 134.08
          }
        ]
      },
      {
        "verseStart": 134.08,
        "verseEnd": 136.88,
        "words": [
          {
            "word": "Мама ",
            "start": 134.08,
            "end": 134.64
          },
          {
            "word": "говорила ",
            "start": 134.64,
            "end": 135.2
          },
          {
            "word": "мне: \" ",
            "start": 135.2,
            "end": 135.76
          },
          {
            "word": "Слушайся ",
            "start": 135.76,
            "end": 136.32
          },
          {
            "word": "мужа\"",
            "start": 136.32,
            "end": 136.88
          }
        ]
      },
      {
        "verseStart": 136.88,
        "verseEnd": 139.85,
        "words": [
          {
            "word": "Я ",
            "start": 136.88,
            "end": 137.375
          },
          {
            "word": "не ",
            "start": 137.375,
            "end": 137.87
          },
          {
            "word": "послушна, ",
            "start": 137.87,
            "end": 138.365
          },
          {
            "word": "я ",
            "start": 138.365,
            "end": 138.86
          },
          {
            "word": "делаю ",
            "start": 138.86,
            "end": 139.355
          },
          {
            "word": "хуже",
            "start": 139.355,
            "end": 139.85
          }
        ]
      },
      {
        "verseStart": 139.85,
        "verseEnd": 142.95,
        "words": [
          {
            "word": "Делаю ",
            "start": 139.85,
            "end": 140.367
          },
          {
            "word": "не ",
            "start": 140.367,
            "end": 140.883
          },
          {
            "word": "так, ",
            "start": 140.883,
            "end": 141.4
          },
          {
            "word": "как ",
            "start": 141.4,
            "end": 141.917
          },
          {
            "word": "наказывал ",
            "start": 141.917,
            "end": 142.433
          },
          {
            "word": "папа",
            "start": 142.433,
            "end": 142.95
          }
        ]
      },
      {
        "verseStart": 142.95,
        "verseEnd": 146.09,
        "words": [
          {
            "word": "Вместо ",
            "start": 142.95,
            "end": 143.578
          },
          {
            "word": "звезды ",
            "start": 143.578,
            "end": 144.206
          },
          {
            "word": "я ",
            "start": 144.206,
            "end": 144.834
          },
          {
            "word": "хватаю ",
            "start": 144.834,
            "end": 145.462
          },
          {
            "word": "гранату",
            "start": 145.462,
            "end": 146.09
          }
        ]
      },
      {
        "verseStart": 146.09,
        "verseEnd": 149.04,
        "words": [
          {
            "word": "Мама ",
            "start": 146.09,
            "end": 146.68
          },
          {
            "word": "говорила ",
            "start": 146.68,
            "end": 147.27
          },
          {
            "word": "мне: \" ",
            "start": 147.27,
            "end": 147.86
          },
          {
            "word": "Слушайся ",
            "start": 147.86,
            "end": 148.45
          },
          {
            "word": "мужа\"",
            "start": 148.45,
            "end": 149.04
          }
        ]
      },
      {
        "verseStart": 149.04,
        "verseEnd": 152.01,
        "words": [
          {
            "word": "Я ",
            "start": 149.04,
            "end": 149.535
          },
          {
            "word": "не ",
            "start": 149.535,
            "end": 150.03
          },
          {
            "word": "послушна, ",
            "start": 150.03,
            "end": 150.525
          },
          {
            "word": "я ",
            "start": 150.525,
            "end": 151.02
          },
          {
            "word": "делаю ",
            "start": 151.02,
            "end": 151.515
          },
          {
            "word": "хуже",
            "start": 151.515,
            "end": 152.01
          }
        ]
      },
      {
        "verseStart": 152.01,
        "verseEnd": 155.19,
        "words": [
          {
            "word": "Делаю ",
            "start": 152.01,
            "end": 152.54
          },
          {
            "word": "не ",
            "start": 152.54,
            "end": 153.07
          },
          {
            "word": "так, ",
            "start": 153.07,
            "end": 153.6
          },
          {
            "word": "как ",
            "start": 153.6,
            "end": 154.13
          },
          {
            "word": "наказывал ",
            "start": 154.13,
            "end": 154.66
          },
          {
            "word": "папа",
            "start": 154.66,
            "end": 155.19
          }
        ]
      },
      {
        "verseStart": 155.19,
        "verseEnd": 158.55,
        "words": [
          {
            "word": "Вместо ",
            "start": 155.19,
            "end": 155.862
          },
          {
            "word": "звезды ",
            "start": 155.862,
            "end": 156.534
          },
          {
            "word": "я ",
            "start": 156.534,
            "end": 157.206
          },
          {
            "word": "хватаю ",
            "start": 157.206,
            "end": 157.878
          },
          {
            "word": "гранату",
            "start": 157.878,
            "end": 158.55
          }
        ]
      },
      {
        "verseStart": 158.55,
        "verseEnd": 161.63,
        "words": [
          {
            "word": "Ла- ",
            "start": 158.55,
            "end": 158.935
          },
          {
            "word": "ла- ",
            "start": 158.935,
            "end": 159.32
          },
          {
            "word": "ла- ",
            "start": 159.32,
            "end": 159.705
          },
          {
            "word": "ла- ",
            "start": 159.705,
            "end": 160.09
          },
          {
            "word": "ла- ",
            "start": 160.09,
            "end": 160.475
          },
          {
            "word": "а- ",
            "start": 160.475,
            "end": 160.86
          },
          {
            "word": "а- ",
            "start": 160.86,
            "end": 161.245
          },
          {
            "word": "а",
            "start": 161.245,
            "end": 161.63
          }
        ]
      },
      {
        "verseStart": 161.63,
        "verseEnd": 164.52,
        "words": [
          {
            "word": "Ла- ",
            "start": 161.63,
            "end": 161.991
          },
          {
            "word": "ла- ",
            "start": 161.991,
            "end": 162.352
          },
          {
            "word": "ла- ",
            "start": 162.352,
            "end": 162.714
          },
          {
            "word": "ла- ",
            "start": 162.714,
            "end": 163.075
          },
          {
            "word": "ла- ",
            "start": 163.075,
            "end": 163.436
          },
          {
            "word": "а- ",
            "start": 163.436,
            "end": 163.798
          },
          {
            "word": "а- ",
            "start": 163.798,
            "end": 164.159
          },
          {
            "word": "а",
            "start": 164.159,
            "end": 164.52
          }
        ]
      },
      {
        "verseStart": 164.52,
        "verseEnd": 167.54,
        "words": [
          {
            "word": "Ла- ",
            "start": 164.52,
            "end": 164.898
          },
          {
            "word": "ла- ",
            "start": 164.898,
            "end": 165.275
          },
          {
            "word": "ла- ",
            "start": 165.275,
            "end": 165.653
          },
          {
            "word": "ла- ",
            "start": 165.653,
            "end": 166.03
          },
          {
            "word": "ла- ",
            "start": 166.03,
            "end": 166.407
          },
          {
            "word": "а- ",
            "start": 166.407,
            "end": 166.785
          },
          {
            "word": "а- ",
            "start": 166.785,
            "end": 167.162
          },
          {
            "word": "а",
            "start": 167.162,
            "end": 167.54
          }
        ]
      },
      {
        "verseStart": 167.54,
        "verseEnd": 170.48,
        "words": [
          {
            "word": "Ла- ",
            "start": 167.54,
            "end": 167.907
          },
          {
            "word": "ла- ",
            "start": 167.907,
            "end": 168.275
          },
          {
            "word": "ла- ",
            "start": 168.275,
            "end": 168.642
          },
          {
            "word": "ла- ",
            "start": 168.642,
            "end": 169.01
          },
          {
            "word": "ла- ",
            "start": 169.01,
            "end": 169.377
          },
          {
            "word": "а- ",
            "start": 169.377,
            "end": 169.745
          },
          {
            "word": "а- ",
            "start": 169.745,
            "end": 170.112
          },
          {
            "word": "а",
            "start": 170.112,
            "end": 170.48
          }
        ]
      },
      {
        "verseStart": 170.48,
        "verseEnd": 176.34,
        "words": [
          {
            "word": "Я ",
            "start": 170.48,
            "end": 171.28
          },
          {
            "word": "хотела ",
            "start": 171.28,
            "end": 172.08
          },
          {
            "word": "бы ",
            "start": 172.08,
            "end": 172.88
          },
          {
            "word": "тебя, ",
            "start": 172.88,
            "end": 173.68
          },
          {
            "word": "как ",
            "start": 173.68,
            "end": 174.48
          },
          {
            "word": "тогда, ",
            "start": 174.48,
            "end": 175.28
          },
          {
            "word": "обнять",
            "start": 175.28,
            "end": 176.08
          }
        ]
      },
      {
        "verseStart": 176.34,
        "verseEnd": 182.08,
        "words": [
          {
            "word": "Но ",
            "start": 176.34,
            "end": 177.14
          },
          {
            "word": "для ",
            "start": 177.14,
            "end": 177.94
          },
          {
            "word": "этого ",
            "start": 177.94,
            "end": 178.74
          },
          {
            "word": "придётся ",
            "start": 178.74,
            "end": 179.54
          },
          {
            "word": "тело ",
            "start": 179.54,
            "end": 180.34
          },
          {
            "word": "раскопать",
            "start": 180.34,
            "end": 181.14
          }
        ]
      },
      {
        "verseStart": 182.08,
        "verseEnd": 188.34,
        "words": [
          {
            "word": "Твои ",
            "start": 182.08,
            "end": 182.863
          },
          {
            "word": "кости ",
            "start": 182.863,
            "end": 183.645
          },
          {
            "word": "ледяные ",
            "start": 183.645,
            "end": 184.428
          },
          {
            "word": "где- ",
            "start": 184.428,
            "end": 185.21
          },
          {
            "word": "то ",
            "start": 185.21,
            "end": 185.993
          },
          {
            "word": "там ",
            "start": 185.993,
            "end": 186.775
          },
          {
            "word": "на ",
            "start": 186.775,
            "end": 187.558
          },
          {
            "word": "дне",
            "start": 187.558,
            "end": 188.34
          }
        ]
      },
      {
        "verseStart": 188.34,
        "verseEnd": 193.21,
        "words": [
          {
            "word": "Прорастут ",
            "start": 188.34,
            "end": 189.14
          },
          {
            "word": "цветы ",
            "start": 189.14,
            "end": 189.94
          },
          {
            "word": "в ",
            "start": 189.94,
            "end": 190.74
          },
          {
            "word": "этой ",
            "start": 190.74,
            "end": 191.54
          },
          {
            "word": "оплаканной ",
            "start": 191.54,
            "end": 192.34
          },
          {
            "word": "земле",
            "start": 192.34,
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
        "verseStart": 0.14,
        "verseEnd": 5.24,
        "words": [
          {
            "word": "L- ",
            "start": 0.14,
            "end": 0.778
          },
          {
            "word": "U- ",
            "start": 0.778,
            "end": 1.415
          },
          {
            "word": "C- ",
            "start": 1.415,
            "end": 2.053
          },
          {
            "word": "K ",
            "start": 2.053,
            "end": 2.69
          },
          {
            "word": "L- ",
            "start": 2.69,
            "end": 3.328
          },
          {
            "word": "U- ",
            "start": 3.328,
            "end": 3.965
          },
          {
            "word": "C- ",
            "start": 3.965,
            "end": 4.603
          },
          {
            "word": "K",
            "start": 4.603,
            "end": 5.24
          }
        ]
      },
      {
        "verseStart": 5.24,
        "verseEnd": 22.42,
        "words": [
          {
            "word": "L- ",
            "start": 5.24,
            "end": 6.04
          },
          {
            "word": "U- ",
            "start": 6.04,
            "end": 6.84
          },
          {
            "word": "C- ",
            "start": 6.84,
            "end": 7.64
          },
          {
            "word": "K ",
            "start": 7.64,
            "end": 8.44
          },
          {
            "word": "L- ",
            "start": 8.44,
            "end": 9.24
          },
          {
            "word": "U- ",
            "start": 9.24,
            "end": 10.04
          },
          {
            "word": "C- ",
            "start": 10.04,
            "end": 10.84
          },
          {
            "word": "K",
            "start": 10.84,
            "end": 11.64
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
            "word": "見上げる ( ",
            "start": 50.73,
            "end": 51.53
          },
          {
            "word": "きらきら ",
            "start": 51.53,
            "end": 52.33
          },
          {
            "word": "キラー)",
            "start": 52.33,
            "end": 53.13
          }
        ]
      },
      {
        "verseStart": 58.01,
        "verseEnd": 59.57,
        "words": [
          {
            "word": "(One, ",
            "start": 58.01,
            "end": 58.4
          },
          {
            "word": "two, ",
            "start": 58.4,
            "end": 58.79
          },
          {
            "word": "three, ",
            "start": 58.79,
            "end": 59.18
          },
          {
            "word": "four)",
            "start": 59.18,
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
            "word": "(One, ",
            "start": 70.46,
            "end": 70.825
          },
          {
            "word": "two, ",
            "start": 70.825,
            "end": 71.19
          },
          {
            "word": "three, ",
            "start": 71.19,
            "end": 71.555
          },
          {
            "word": "four)",
            "start": 71.555,
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
            "word": "キラー ( ",
            "start": 83.58,
            "end": 84.38
          },
          {
            "word": "きらきら ",
            "start": 84.38,
            "end": 85.18
          },
          {
            "word": "キラー)",
            "start": 85.18,
            "end": 85.98
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
            "word": "キラー ( ",
            "start": 89.02,
            "end": 89.82
          },
          {
            "word": "マジカルパワー)",
            "start": 89.82,
            "end": 90.62
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
            "word": "L- ",
            "start": 95.96,
            "end": 96.628
          },
          {
            "word": "U- ",
            "start": 96.628,
            "end": 97.295
          },
          {
            "word": "C- ",
            "start": 97.295,
            "end": 97.963
          },
          {
            "word": "K ",
            "start": 97.963,
            "end": 98.63
          },
          {
            "word": "L- ",
            "start": 98.63,
            "end": 99.297
          },
          {
            "word": "U- ",
            "start": 99.297,
            "end": 99.965
          },
          {
            "word": "C- ",
            "start": 99.965,
            "end": 100.632
          },
          {
            "word": "K",
            "start": 100.632,
            "end": 101.3
          }
        ]
      },
      {
        "verseStart": 101.3,
        "verseEnd": 107.49000000000001,
        "words": [
          {
            "word": "L- ",
            "start": 101.3,
            "end": 102.074
          },
          {
            "word": "U- ",
            "start": 102.074,
            "end": 102.847
          },
          {
            "word": "C- ",
            "start": 102.847,
            "end": 103.621
          },
          {
            "word": "K ",
            "start": 103.621,
            "end": 104.395
          },
          {
            "word": "L- ",
            "start": 104.395,
            "end": 105.169
          },
          {
            "word": "U- ",
            "start": 105.169,
            "end": 105.943
          },
          {
            "word": "C- ",
            "start": 105.943,
            "end": 106.716
          },
          {
            "word": "K",
            "start": 106.716,
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
            "word": "見上げる ( ",
            "start": 136.62,
            "end": 137.42
          },
          {
            "word": "きらきら ",
            "start": 137.42,
            "end": 138.22
          },
          {
            "word": "キラー)",
            "start": 138.22,
            "end": 139.02
          }
        ]
      },
      {
        "verseStart": 141.98,
        "verseEnd": 143.57,
        "words": [
          {
            "word": "(One, ",
            "start": 141.98,
            "end": 142.377
          },
          {
            "word": "two, ",
            "start": 142.377,
            "end": 142.775
          },
          {
            "word": "three, ",
            "start": 142.775,
            "end": 143.172
          },
          {
            "word": "four)",
            "start": 143.172,
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
            "word": "(One, ",
            "start": 154.06,
            "end": 154.425
          },
          {
            "word": "two, ",
            "start": 154.425,
            "end": 154.79
          },
          {
            "word": "three, ",
            "start": 154.79,
            "end": 155.155
          },
          {
            "word": "four)",
            "start": 155.155,
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
            "word": "キラー ( ",
            "start": 167.39,
            "end": 168.19
          },
          {
            "word": "きらきら ",
            "start": 168.19,
            "end": 168.99
          },
          {
            "word": "キラー)",
            "start": 168.99,
            "end": 169.79
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
            "word": "キラー ( ",
            "start": 174.23,
            "end": 175.03
          },
          {
            "word": "マジカルパワー)",
            "start": 175.03,
            "end": 175.83
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
            "word": "L- ",
            "start": 179.99,
            "end": 180.659
          },
          {
            "word": "U- ",
            "start": 180.659,
            "end": 181.328
          },
          {
            "word": "C- ",
            "start": 181.328,
            "end": 181.996
          },
          {
            "word": "K ",
            "start": 181.996,
            "end": 182.665
          },
          {
            "word": "L- ",
            "start": 182.665,
            "end": 183.334
          },
          {
            "word": "U- ",
            "start": 183.334,
            "end": 184.002
          },
          {
            "word": "C- ",
            "start": 184.002,
            "end": 184.671
          },
          {
            "word": "K",
            "start": 184.671,
            "end": 185.34
          }
        ]
      },
      {
        "verseStart": 185.34,
        "verseEnd": 191.5,
        "words": [
          {
            "word": "L- ",
            "start": 185.34,
            "end": 186.11
          },
          {
            "word": "U- ",
            "start": 186.11,
            "end": 186.88
          },
          {
            "word": "C- ",
            "start": 186.88,
            "end": 187.65
          },
          {
            "word": "K ",
            "start": 187.65,
            "end": 188.42
          },
          {
            "word": "L- ",
            "start": 188.42,
            "end": 189.19
          },
          {
            "word": "U- ",
            "start": 189.19,
            "end": 189.96
          },
          {
            "word": "C- ",
            "start": 189.96,
            "end": 190.73
          },
          {
            "word": "K",
            "start": 190.73,
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
            "word": "(One, ",
            "start": 201.96,
            "end": 202.335
          },
          {
            "word": "two, ",
            "start": 202.335,
            "end": 202.71
          },
          {
            "word": "three, ",
            "start": 202.71,
            "end": 203.085
          },
          {
            "word": "four)",
            "start": 203.085,
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
            "word": "キラー ( ",
            "start": 215.58,
            "end": 216.38
          },
          {
            "word": "きらきら ",
            "start": 216.38,
            "end": 217.18
          },
          {
            "word": "キラー)",
            "start": 217.18,
            "end": 217.98
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
            "word": "キラー ( ",
            "start": 221.57,
            "end": 222.37
          },
          {
            "word": "マジカルパワー)",
            "start": 222.37,
            "end": 223.17
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
            "word": "L- ",
            "start": 227.33,
            "end": 228.097
          },
          {
            "word": "U- ",
            "start": 228.097,
            "end": 228.865
          },
          {
            "word": "C- ",
            "start": 228.865,
            "end": 229.632
          },
          {
            "word": "K ",
            "start": 229.632,
            "end": 230.4
          },
          {
            "word": "L- ",
            "start": 230.4,
            "end": 231.167
          },
          {
            "word": "U- ",
            "start": 231.167,
            "end": 231.935
          },
          {
            "word": "C- ",
            "start": 231.935,
            "end": 232.702
          },
          {
            "word": "K",
            "start": 232.702,
            "end": 233.47
          }
        ]
      },
      {
        "verseStart": 233.47,
        "verseEnd": 239.59,
        "words": [
          {
            "word": "L- ",
            "start": 233.47,
            "end": 234.235
          },
          {
            "word": "U- ",
            "start": 234.235,
            "end": 235
          },
          {
            "word": "C- ",
            "start": 235,
            "end": 235.765
          },
          {
            "word": "K ",
            "start": 235.765,
            "end": 236.53
          },
          {
            "word": "L- ",
            "start": 236.53,
            "end": 237.295
          },
          {
            "word": "U- ",
            "start": 237.295,
            "end": 238.06
          },
          {
            "word": "C- ",
            "start": 238.06,
            "end": 238.825
          },
          {
            "word": "K",
            "start": 238.825,
            "end": 239.59
          }
        ]
      },
      {
        "verseStart": 239.59,
        "verseEnd": 245.04,
        "words": [
          {
            "word": "L- ",
            "start": 239.59,
            "end": 240.271
          },
          {
            "word": "U- ",
            "start": 240.271,
            "end": 240.952
          },
          {
            "word": "C- ",
            "start": 240.952,
            "end": 241.634
          },
          {
            "word": "K ",
            "start": 241.634,
            "end": 242.315
          },
          {
            "word": "L- ",
            "start": 242.315,
            "end": 242.996
          },
          {
            "word": "U- ",
            "start": 242.996,
            "end": 243.678
          },
          {
            "word": "C- ",
            "start": 243.678,
            "end": 244.359
          },
          {
            "word": "K",
            "start": 244.359,
            "end": 245.04
          }
        ]
      },
      {
        "verseStart": 245.04,
        "verseEnd": 248.04,
        "words": [
          {
            "word": "L- ",
            "start": 245.04,
            "end": 245.415
          },
          {
            "word": "U- ",
            "start": 245.415,
            "end": 245.79
          },
          {
            "word": "C- ",
            "start": 245.79,
            "end": 246.165
          },
          {
            "word": "K ",
            "start": 246.165,
            "end": 246.54
          },
          {
            "word": "L- ",
            "start": 246.54,
            "end": 246.915
          },
          {
            "word": "U- ",
            "start": 246.915,
            "end": 247.29
          },
          {
            "word": "C- ",
            "start": 247.29,
            "end": 247.665
          },
          {
            "word": "K",
            "start": 247.665,
            "end": 248.04
          }
        ]
      }
    ]
  }
};
