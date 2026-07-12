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
        "verseStart": 34.062,
        "verseEnd": 38.223,
        "words": [
          {
            "word": "For ",
            "start": 34.062,
            "end": 34.719
          },
          {
            "word": "the ",
            "start": 34.719,
            "end": 35.005
          },
          {
            "word": "love ",
            "start": 35.005,
            "end": 35.249
          },
          {
            "word": "of ",
            "start": 35.249,
            "end": 35.777
          },
          {
            "word": "God, ",
            "start": 35.777,
            "end": 36.023
          },
          {
            "word": "will ",
            "start": 36.023,
            "end": 36.226
          },
          {
            "word": "you ",
            "start": 36.226,
            "end": 36.513
          },
          {
            "word": "bite ",
            "start": 36.513,
            "end": 36.838
          },
          {
            "word": "your ",
            "start": 36.838,
            "end": 37.693
          },
          {
            "word": "tongue",
            "start": 37.693,
            "end": 38.223
          }
        ]
      },
      {
        "verseStart": 38.223,
        "verseEnd": 41.449,
        "words": [
          {
            "word": "Before ",
            "start": 38.223,
            "end": 38.426
          },
          {
            "word": "we ",
            "start": 38.426,
            "end": 38.67
          },
          {
            "word": "make ",
            "start": 38.67,
            "end": 38.914
          },
          {
            "word": "you ",
            "start": 38.914,
            "end": 39.49
          },
          {
            "word": "swallow ",
            "start": 39.49,
            "end": 41.204
          },
          {
            "word": "it?",
            "start": 41.204,
            "end": 41.449
          }
        ]
      },
      {
        "verseStart": 41.449,
        "verseEnd": 47.57,
        "words": [
          {
            "word": "It's ",
            "start": 41.449,
            "end": 42.1
          },
          {
            "word": "moments ",
            "start": 42.1,
            "end": 42.508
          },
          {
            "word": "like ",
            "start": 42.508,
            "end": 42.956
          },
          {
            "word": "this ",
            "start": 42.956,
            "end": 43.242
          },
          {
            "word": "where ",
            "start": 43.242,
            "end": 43.853
          },
          {
            "word": "silence ",
            "start": 43.853,
            "end": 44.056
          },
          {
            "word": "is ",
            "start": 44.056,
            "end": 47.363
          },
          {
            "word": "golden",
            "start": 47.363,
            "end": 47.57
          }
        ]
      },
      {
        "verseStart": 47.57,
        "verseEnd": 48.67,
        "words": [
          {
            "word": "And ",
            "start": 47.57,
            "end": 47.814
          },
          {
            "word": "then ",
            "start": 47.814,
            "end": 48.017
          },
          {
            "word": "you ",
            "start": 48.017,
            "end": 48.466
          },
          {
            "word": "speak",
            "start": 48.466,
            "end": 48.67
          }
        ]
      },
      {
        "verseStart": 48.67,
        "verseEnd": 52.134,
        "words": [
          {
            "word": "No ",
            "start": 48.67,
            "end": 48.874
          },
          {
            "word": "one ",
            "start": 48.874,
            "end": 49.081
          },
          {
            "word": "wants ",
            "start": 49.081,
            "end": 49.325
          },
          {
            "word": "to ",
            "start": 49.325,
            "end": 49.936
          },
          {
            "word": "hear ",
            "start": 49.936,
            "end": 51.89
          },
          {
            "word": "you",
            "start": 51.89,
            "end": 52.134
          }
        ]
      },
      {
        "verseStart": 52.134,
        "verseEnd": 55.275,
        "words": [
          {
            "word": "No ",
            "start": 52.134,
            "end": 52.338
          },
          {
            "word": "one ",
            "start": 52.338,
            "end": 52.543
          },
          {
            "word": "wants ",
            "start": 52.543,
            "end": 52.746
          },
          {
            "word": "to ",
            "start": 52.746,
            "end": 53.399
          },
          {
            "word": "see ",
            "start": 53.399,
            "end": 54.704
          },
          {
            "word": "you",
            "start": 54.704,
            "end": 55.275
          }
        ]
      },
      {
        "verseStart": 55.275,
        "verseEnd": 58.824,
        "words": [
          {
            "word": "So ",
            "start": 55.275,
            "end": 55.806
          },
          {
            "word": "desperate ",
            "start": 55.806,
            "end": 55.969
          },
          {
            "word": "and ",
            "start": 55.969,
            "end": 56.864
          },
          {
            "word": "pathetic, ",
            "start": 56.864,
            "end": 57.068
          },
          {
            "word": "I'm ",
            "start": 57.068,
            "end": 57.515
          },
          {
            "word": "begging ",
            "start": 57.515,
            "end": 57.722
          },
          {
            "word": "you ",
            "start": 57.722,
            "end": 57.927
          },
          {
            "word": "to ",
            "start": 57.927,
            "end": 58.21
          },
          {
            "word": "spare ",
            "start": 58.21,
            "end": 58.618
          },
          {
            "word": "me",
            "start": 58.618,
            "end": 58.824
          }
        ]
      },
      {
        "verseStart": 58.824,
        "verseEnd": 63.101,
        "words": [
          {
            "word": "The ",
            "start": 58.824,
            "end": 59.311
          },
          {
            "word": "pleasure ",
            "start": 59.311,
            "end": 59.515
          },
          {
            "word": "of ",
            "start": 59.515,
            "end": 59.718
          },
          {
            "word": "your ",
            "start": 59.718,
            "end": 62.695
          },
          {
            "word": "company",
            "start": 62.695,
            "end": 63.101
          }
        ]
      },
      {
        "verseStart": 63.101,
        "verseEnd": 69.717,
        "words": [
          {
            "word": "When ",
            "start": 63.101,
            "end": 63.548
          },
          {
            "word": "did ",
            "start": 63.548,
            "end": 63.955
          },
          {
            "word": "the ",
            "start": 63.955,
            "end": 64.771
          },
          {
            "word": "diamonds ",
            "start": 64.771,
            "end": 65.178
          },
          {
            "word": "leave ",
            "start": 65.178,
            "end": 66.033
          },
          {
            "word": "your ",
            "start": 66.033,
            "end": 69.473
          },
          {
            "word": "bones?",
            "start": 69.473,
            "end": 69.717
          }
        ]
      },
      {
        "verseStart": 69.717,
        "verseEnd": 73.224,
        "words": [
          {
            "word": "I'm ",
            "start": 69.717,
            "end": 70.045
          },
          {
            "word": "burning ",
            "start": 70.045,
            "end": 70.577
          },
          {
            "word": "down ",
            "start": 70.577,
            "end": 70.943
          },
          {
            "word": "every ",
            "start": 70.943,
            "end": 71.352
          },
          {
            "word": "bridge ",
            "start": 71.352,
            "end": 71.757
          },
          {
            "word": "we ",
            "start": 71.757,
            "end": 73.02
          },
          {
            "word": "made",
            "start": 73.02,
            "end": 73.224
          }
        ]
      },
      {
        "verseStart": 73.224,
        "verseEnd": 76.66,
        "words": [
          {
            "word": "I'll ",
            "start": 73.224,
            "end": 73.43
          },
          {
            "word": "watch ",
            "start": 73.43,
            "end": 73.678
          },
          {
            "word": "you ",
            "start": 73.678,
            "end": 74.046
          },
          {
            "word": "choke ",
            "start": 74.046,
            "end": 74.29
          },
          {
            "word": "on ",
            "start": 74.29,
            "end": 74.496
          },
          {
            "word": "the ",
            "start": 74.496,
            "end": 74.945
          },
          {
            "word": "hearts ",
            "start": 74.945,
            "end": 75.351
          },
          {
            "word": "you ",
            "start": 75.351,
            "end": 76.456
          },
          {
            "word": "break",
            "start": 76.456,
            "end": 76.66
          }
        ]
      },
      {
        "verseStart": 76.66,
        "verseEnd": 80.212,
        "words": [
          {
            "word": "I'm ",
            "start": 76.66,
            "end": 77.068
          },
          {
            "word": "bleeding ",
            "start": 77.068,
            "end": 77.516
          },
          {
            "word": "out ",
            "start": 77.516,
            "end": 77.967
          },
          {
            "word": "every ",
            "start": 77.967,
            "end": 78.377
          },
          {
            "word": "word ",
            "start": 78.377,
            "end": 78.824
          },
          {
            "word": "you ",
            "start": 78.824,
            "end": 79.725
          },
          {
            "word": "said",
            "start": 79.725,
            "end": 80.212
          }
        ]
      },
      {
        "verseStart": 80.212,
        "verseEnd": 83.545,
        "words": [
          {
            "word": "Go ",
            "start": 80.212,
            "end": 80.416
          },
          {
            "word": "to ",
            "start": 80.416,
            "end": 80.985
          },
          {
            "word": "hell, ",
            "start": 80.985,
            "end": 81.434
          },
          {
            "word": "for ",
            "start": 81.434,
            "end": 82.043
          },
          {
            "word": "heaven's ",
            "start": 82.043,
            "end": 83.341
          },
          {
            "word": "sake",
            "start": 83.341,
            "end": 83.545
          }
        ]
      },
      {
        "verseStart": 83.545,
        "verseEnd": 87.11,
        "words": [
          {
            "word": "I'm ",
            "start": 83.545,
            "end": 83.998
          },
          {
            "word": "burning ",
            "start": 83.998,
            "end": 84.463
          },
          {
            "word": "down ",
            "start": 84.463,
            "end": 84.911
          },
          {
            "word": "every ",
            "start": 84.911,
            "end": 85.359
          },
          {
            "word": "bridge ",
            "start": 85.359,
            "end": 85.806
          },
          {
            "word": "we ",
            "start": 85.806,
            "end": 86.907
          },
          {
            "word": "made",
            "start": 86.907,
            "end": 87.11
          }
        ]
      },
      {
        "verseStart": 87.11,
        "verseEnd": 90.582,
        "words": [
          {
            "word": "I'll ",
            "start": 87.11,
            "end": 87.361
          },
          {
            "word": "watch ",
            "start": 87.361,
            "end": 87.567
          },
          {
            "word": "you ",
            "start": 87.567,
            "end": 88.016
          },
          {
            "word": "choke ",
            "start": 88.016,
            "end": 88.22
          },
          {
            "word": "on ",
            "start": 88.22,
            "end": 88.465
          },
          {
            "word": "the ",
            "start": 88.465,
            "end": 88.871
          },
          {
            "word": "hearts ",
            "start": 88.871,
            "end": 89.238
          },
          {
            "word": "you ",
            "start": 89.238,
            "end": 90.338
          },
          {
            "word": "break",
            "start": 90.338,
            "end": 90.582
          }
        ]
      },
      {
        "verseStart": 90.582,
        "verseEnd": 94.092,
        "words": [
          {
            "word": "I'm ",
            "start": 90.582,
            "end": 90.991
          },
          {
            "word": "bleeding ",
            "start": 90.991,
            "end": 91.438
          },
          {
            "word": "out ",
            "start": 91.438,
            "end": 91.845
          },
          {
            "word": "every ",
            "start": 91.845,
            "end": 92.291
          },
          {
            "word": "word ",
            "start": 92.291,
            "end": 92.699
          },
          {
            "word": "you ",
            "start": 92.699,
            "end": 93.599
          },
          {
            "word": "said",
            "start": 93.599,
            "end": 94.092
          }
        ]
      },
      {
        "verseStart": 94.092,
        "verseEnd": 101.11,
        "words": [
          {
            "word": "Go ",
            "start": 94.092,
            "end": 94.295
          },
          {
            "word": "to ",
            "start": 94.295,
            "end": 94.866
          },
          {
            "word": "hell, ",
            "start": 94.866,
            "end": 95.355
          },
          {
            "word": "for ",
            "start": 95.355,
            "end": 95.968
          },
          {
            "word": "heaven's ",
            "start": 95.968,
            "end": 100.905
          },
          {
            "word": "sake",
            "start": 100.905,
            "end": 101.11
          }
        ]
      },
      {
        "verseStart": 101.11,
        "verseEnd": 107.736,
        "words": [
          {
            "word": "Go ",
            "start": 101.11,
            "end": 101.313
          },
          {
            "word": "to ",
            "start": 101.313,
            "end": 102.664
          },
          {
            "word": "hell, ",
            "start": 102.664,
            "end": 103.289
          },
          {
            "word": "for ",
            "start": 103.289,
            "end": 103.701
          },
          {
            "word": "heaven's ",
            "start": 103.701,
            "end": 107.492
          },
          {
            "word": "sake",
            "start": 107.492,
            "end": 107.736
          }
        ]
      },
      {
        "verseStart": 107.736,
        "verseEnd": 111.259,
        "words": [
          {
            "word": "No ",
            "start": 107.736,
            "end": 107.946
          },
          {
            "word": "one ",
            "start": 107.946,
            "end": 108.19
          },
          {
            "word": "wants ",
            "start": 108.19,
            "end": 108.435
          },
          {
            "word": "to ",
            "start": 108.435,
            "end": 109.093
          },
          {
            "word": "hear ",
            "start": 109.093,
            "end": 110.115
          },
          {
            "word": "you ( ",
            "start": 110.115,
            "end": 110.444
          },
          {
            "word": "save ",
            "start": 110.444,
            "end": 110.811
          },
          {
            "word": "your ",
            "start": 110.811,
            "end": 111.055
          },
          {
            "word": "breath)",
            "start": 111.055,
            "end": 111.259
          }
        ]
      },
      {
        "verseStart": 111.259,
        "verseEnd": 114.488,
        "words": [
          {
            "word": "No ",
            "start": 111.259,
            "end": 111.503
          },
          {
            "word": "one ",
            "start": 111.503,
            "end": 111.706
          },
          {
            "word": "wants ",
            "start": 111.706,
            "end": 111.954
          },
          {
            "word": "to ",
            "start": 111.954,
            "end": 112.565
          },
          {
            "word": "see ",
            "start": 112.565,
            "end": 113.955
          },
          {
            "word": "you",
            "start": 113.955,
            "end": 114.488
          }
        ]
      },
      {
        "verseStart": 114.488,
        "verseEnd": 117.995,
        "words": [
          {
            "word": "So ",
            "start": 114.488,
            "end": 114.899
          },
          {
            "word": "desperate ",
            "start": 114.899,
            "end": 115.142
          },
          {
            "word": "and ",
            "start": 115.142,
            "end": 115.999
          },
          {
            "word": "pathetic, ",
            "start": 115.999,
            "end": 116.202
          },
          {
            "word": "you ",
            "start": 116.202,
            "end": 116.446
          },
          {
            "word": "think ",
            "start": 116.446,
            "end": 116.651
          },
          {
            "word": "that ",
            "start": 116.651,
            "end": 116.855
          },
          {
            "word": "no ",
            "start": 116.855,
            "end": 117.098
          },
          {
            "word": "one ",
            "start": 117.098,
            "end": 117.344
          },
          {
            "word": "sees ",
            "start": 117.344,
            "end": 117.792
          },
          {
            "word": "this?",
            "start": 117.792,
            "end": 117.995
          }
        ]
      },
      {
        "verseStart": 117.995,
        "verseEnd": 121.832,
        "words": [
          {
            "word": "I ",
            "start": 117.995,
            "end": 118.242
          },
          {
            "word": "think ",
            "start": 118.242,
            "end": 118.445
          },
          {
            "word": "it's ",
            "start": 118.445,
            "end": 118.648
          },
          {
            "word": "time ",
            "start": 118.648,
            "end": 118.893
          },
          {
            "word": "you ",
            "start": 118.893,
            "end": 119.177
          },
          {
            "word": "knew ",
            "start": 119.177,
            "end": 119.502
          },
          {
            "word": "the ",
            "start": 119.502,
            "end": 120.528
          },
          {
            "word": "truth, ",
            "start": 120.528,
            "end": 121.586
          },
          {
            "word": "yeah",
            "start": 121.586,
            "end": 121.832
          }
        ]
      },
      {
        "verseStart": 121.832,
        "verseEnd": 125.419,
        "words": [
          {
            "word": "I'm ",
            "start": 121.832,
            "end": 122.241
          },
          {
            "word": "burning ",
            "start": 122.241,
            "end": 122.726
          },
          {
            "word": "down ",
            "start": 122.726,
            "end": 123.091
          },
          {
            "word": "every ",
            "start": 123.091,
            "end": 123.497
          },
          {
            "word": "bridge ",
            "start": 123.497,
            "end": 123.947
          },
          {
            "word": "we ",
            "start": 123.947,
            "end": 125.214
          },
          {
            "word": "made",
            "start": 125.214,
            "end": 125.419
          }
        ]
      },
      {
        "verseStart": 125.419,
        "verseEnd": 128.89,
        "words": [
          {
            "word": "I'll ",
            "start": 125.419,
            "end": 125.622
          },
          {
            "word": "watch ",
            "start": 125.622,
            "end": 125.867
          },
          {
            "word": "you ",
            "start": 125.867,
            "end": 126.274
          },
          {
            "word": "choke ",
            "start": 126.274,
            "end": 126.481
          },
          {
            "word": "on ",
            "start": 126.481,
            "end": 126.726
          },
          {
            "word": "the ",
            "start": 126.726,
            "end": 127.092
          },
          {
            "word": "hearts ",
            "start": 127.092,
            "end": 127.541
          },
          {
            "word": "you ",
            "start": 127.541,
            "end": 128.686
          },
          {
            "word": "break",
            "start": 128.686,
            "end": 128.89
          }
        ]
      },
      {
        "verseStart": 128.89,
        "verseEnd": 132.355,
        "words": [
          {
            "word": "I'm ",
            "start": 128.89,
            "end": 129.299
          },
          {
            "word": "bleeding ",
            "start": 129.299,
            "end": 129.747
          },
          {
            "word": "out ",
            "start": 129.747,
            "end": 130.195
          },
          {
            "word": "every ",
            "start": 130.195,
            "end": 130.601
          },
          {
            "word": "word ",
            "start": 130.601,
            "end": 130.971
          },
          {
            "word": "you ",
            "start": 130.971,
            "end": 131.906
          },
          {
            "word": "said",
            "start": 131.906,
            "end": 132.355
          }
        ]
      },
      {
        "verseStart": 132.355,
        "verseEnd": 135.821,
        "words": [
          {
            "word": "Go ",
            "start": 132.355,
            "end": 132.521
          },
          {
            "word": "to ",
            "start": 132.521,
            "end": 133.094
          },
          {
            "word": "hell, ",
            "start": 133.094,
            "end": 133.621
          },
          {
            "word": "for ",
            "start": 133.621,
            "end": 134.231
          },
          {
            "word": "heaven's ",
            "start": 134.231,
            "end": 135.577
          },
          {
            "word": "sake",
            "start": 135.577,
            "end": 135.821
          }
        ]
      },
      {
        "verseStart": 135.821,
        "verseEnd": 139.298,
        "words": [
          {
            "word": "I'm ",
            "start": 135.821,
            "end": 136.23
          },
          {
            "word": "burning ",
            "start": 136.23,
            "end": 136.683
          },
          {
            "word": "down ",
            "start": 136.683,
            "end": 137.089
          },
          {
            "word": "every ",
            "start": 137.089,
            "end": 137.537
          },
          {
            "word": "bridge ",
            "start": 137.537,
            "end": 137.948
          },
          {
            "word": "we ",
            "start": 137.948,
            "end": 139.055
          },
          {
            "word": "made",
            "start": 139.055,
            "end": 139.298
          }
        ]
      },
      {
        "verseStart": 139.298,
        "verseEnd": 142.774,
        "words": [
          {
            "word": "I'll ",
            "start": 139.298,
            "end": 139.505
          },
          {
            "word": "watch ",
            "start": 139.505,
            "end": 139.758
          },
          {
            "word": "you ",
            "start": 139.758,
            "end": 140.128
          },
          {
            "word": "choke ",
            "start": 140.128,
            "end": 140.371
          },
          {
            "word": "on ",
            "start": 140.371,
            "end": 140.615
          },
          {
            "word": "the ",
            "start": 140.615,
            "end": 141.022
          },
          {
            "word": "hearts ",
            "start": 141.022,
            "end": 141.47
          },
          {
            "word": "you ",
            "start": 141.47,
            "end": 142.53
          },
          {
            "word": "break",
            "start": 142.53,
            "end": 142.774
          }
        ]
      },
      {
        "verseStart": 142.774,
        "verseEnd": 146.246,
        "words": [
          {
            "word": "I'm ",
            "start": 142.774,
            "end": 143.017
          },
          {
            "word": "bleeding ",
            "start": 143.017,
            "end": 143.222
          },
          {
            "word": "out ",
            "start": 143.222,
            "end": 143.962
          },
          {
            "word": "every ",
            "start": 143.962,
            "end": 144.45
          },
          {
            "word": "word ",
            "start": 144.45,
            "end": 144.938
          },
          {
            "word": "you ",
            "start": 144.938,
            "end": 145.794
          },
          {
            "word": "said",
            "start": 145.794,
            "end": 146.246
          }
        ]
      },
      {
        "verseStart": 146.246,
        "verseEnd": 150.125,
        "words": [
          {
            "word": "Go ",
            "start": 146.246,
            "end": 146.492
          },
          {
            "word": "to ",
            "start": 146.492,
            "end": 147.061
          },
          {
            "word": "hell, ",
            "start": 147.061,
            "end": 147.51
          },
          {
            "word": "for ",
            "start": 147.51,
            "end": 148.165
          },
          {
            "word": "heaven's ",
            "start": 148.165,
            "end": 149.675
          },
          {
            "word": "sake",
            "start": 149.675,
            "end": 150.125
          }
        ]
      },
      {
        "verseStart": 150.125,
        "verseEnd": 162.758,
        "words": [
          {
            "word": "When ",
            "start": 150.125,
            "end": 150.575
          },
          {
            "word": "did ",
            "start": 150.575,
            "end": 150.782
          },
          {
            "word": "the ",
            "start": 150.782,
            "end": 151.797
          },
          {
            "word": "diamonds ",
            "start": 151.797,
            "end": 152.211
          },
          {
            "word": "leave ",
            "start": 152.211,
            "end": 152.7
          },
          {
            "word": "your ",
            "start": 152.7,
            "end": 162.39
          },
          {
            "word": "bones?",
            "start": 162.39,
            "end": 162.758
          }
        ]
      },
      {
        "verseStart": 162.758,
        "verseEnd": 174.064,
        "words": [
          {
            "word": "Leave ",
            "start": 162.758,
            "end": 163.207
          },
          {
            "word": "your ",
            "start": 163.207,
            "end": 173.86
          },
          {
            "word": "bones",
            "start": 173.86,
            "end": 174.064
          }
        ]
      },
      {
        "verseStart": 174.064,
        "verseEnd": 177.586,
        "words": [
          {
            "word": "You're ",
            "start": 174.064,
            "end": 174.314
          },
          {
            "word": "not ",
            "start": 174.314,
            "end": 174.516
          },
          {
            "word": "a ",
            "start": 174.516,
            "end": 175.577
          },
          {
            "word": "shepherd, ",
            "start": 175.577,
            "end": 175.821
          },
          {
            "word": "you're ",
            "start": 175.821,
            "end": 175.984
          },
          {
            "word": "just ",
            "start": 175.984,
            "end": 176.228
          },
          {
            "word": "a ",
            "start": 176.228,
            "end": 177.382
          },
          {
            "word": "sheep",
            "start": 177.382,
            "end": 177.586
          }
        ]
      },
      {
        "verseStart": 177.586,
        "verseEnd": 181.052,
        "words": [
          {
            "word": "A ",
            "start": 177.586,
            "end": 177.993
          },
          {
            "word": "combined ",
            "start": 177.993,
            "end": 178.688
          },
          {
            "word": "effort ",
            "start": 178.688,
            "end": 178.892
          },
          {
            "word": "of ",
            "start": 178.892,
            "end": 179.542
          },
          {
            "word": "everyone ",
            "start": 179.542,
            "end": 179.746
          },
          {
            "word": "you ",
            "start": 179.746,
            "end": 180.85
          },
          {
            "word": "meet",
            "start": 180.85,
            "end": 181.052
          }
        ]
      },
      {
        "verseStart": 181.052,
        "verseEnd": 184.313,
        "words": [
          {
            "word": "You're ",
            "start": 181.052,
            "end": 181.501
          },
          {
            "word": "all ",
            "start": 181.501,
            "end": 182.562
          },
          {
            "word": "flesh ",
            "start": 182.562,
            "end": 182.766
          },
          {
            "word": "with ",
            "start": 182.766,
            "end": 183.254
          },
          {
            "word": "no ",
            "start": 183.254,
            "end": 184.11
          },
          {
            "word": "bone",
            "start": 184.11,
            "end": 184.313
          }
        ]
      },
      {
        "verseStart": 184.313,
        "verseEnd": 201.925,
        "words": [
          {
            "word": "Feed ' ",
            "start": 184.313,
            "end": 184.521
          },
          {
            "word": "em ",
            "start": 184.521,
            "end": 184.725
          },
          {
            "word": "to ",
            "start": 184.725,
            "end": 184.969
          },
          {
            "word": "the ",
            "start": 184.969,
            "end": 185.581
          },
          {
            "word": "sharks ",
            "start": 185.581,
            "end": 185.785
          },
          {
            "word": "and ",
            "start": 185.785,
            "end": 186.071
          },
          {
            "word": "throw ' ",
            "start": 186.071,
            "end": 186.276
          },
          {
            "word": "em ",
            "start": 186.276,
            "end": 186.48
          },
          {
            "word": "to ",
            "start": 186.48,
            "end": 186.685
          },
          {
            "word": "the ",
            "start": 186.685,
            "end": 201.721
          },
          {
            "word": "wolves",
            "start": 201.721,
            "end": 201.925
          }
        ]
      },
      {
        "verseStart": 201.925,
        "verseEnd": 205.41,
        "words": [
          {
            "word": "I'm ",
            "start": 201.925,
            "end": 202.294
          },
          {
            "word": "burning ",
            "start": 202.294,
            "end": 202.788
          },
          {
            "word": "down ",
            "start": 202.788,
            "end": 203.195
          },
          {
            "word": "every ",
            "start": 203.195,
            "end": 203.609
          },
          {
            "word": "bridge ",
            "start": 203.609,
            "end": 204.095
          },
          {
            "word": "we ",
            "start": 204.095,
            "end": 205.205
          },
          {
            "word": "made",
            "start": 205.205,
            "end": 205.41
          }
        ]
      },
      {
        "verseStart": 205.41,
        "verseEnd": 208.858,
        "words": [
          {
            "word": "I'll ",
            "start": 205.41,
            "end": 205.614
          },
          {
            "word": "watch ",
            "start": 205.614,
            "end": 205.818
          },
          {
            "word": "you ",
            "start": 205.818,
            "end": 206.225
          },
          {
            "word": "choke ",
            "start": 206.225,
            "end": 206.468
          },
          {
            "word": "on ",
            "start": 206.468,
            "end": 206.671
          },
          {
            "word": "the ",
            "start": 206.671,
            "end": 207.12
          },
          {
            "word": "hearts ",
            "start": 207.12,
            "end": 207.543
          },
          {
            "word": "you ",
            "start": 207.543,
            "end": 208.651
          },
          {
            "word": "break",
            "start": 208.651,
            "end": 208.858
          }
        ]
      },
      {
        "verseStart": 208.858,
        "verseEnd": 212.343,
        "words": [
          {
            "word": "I'm ",
            "start": 208.858,
            "end": 209.31
          },
          {
            "word": "bleeding ",
            "start": 209.31,
            "end": 209.762
          },
          {
            "word": "out ",
            "start": 209.762,
            "end": 210.181
          },
          {
            "word": "every ",
            "start": 210.181,
            "end": 210.589
          },
          {
            "word": "word ",
            "start": 210.589,
            "end": 210.997
          },
          {
            "word": "you ",
            "start": 210.997,
            "end": 211.895
          },
          {
            "word": "said",
            "start": 211.895,
            "end": 212.343
          }
        ]
      },
      {
        "verseStart": 212.343,
        "verseEnd": 215.74,
        "words": [
          {
            "word": "Go ",
            "start": 212.343,
            "end": 212.587
          },
          {
            "word": "to ",
            "start": 212.587,
            "end": 213.157
          },
          {
            "word": "hell, ",
            "start": 213.157,
            "end": 213.617
          },
          {
            "word": "for ",
            "start": 213.617,
            "end": 214.267
          },
          {
            "word": "heaven's ",
            "start": 214.267,
            "end": 215.576
          },
          {
            "word": "sake",
            "start": 215.576,
            "end": 215.74
          }
        ]
      },
      {
        "verseStart": 215.74,
        "verseEnd": 219.254,
        "words": [
          {
            "word": "I'm ",
            "start": 215.74,
            "end": 216.187
          },
          {
            "word": "burning ",
            "start": 216.187,
            "end": 216.673
          },
          {
            "word": "down ",
            "start": 216.673,
            "end": 217.126
          },
          {
            "word": "every ",
            "start": 217.126,
            "end": 217.534
          },
          {
            "word": "bridge ",
            "start": 217.534,
            "end": 217.984
          },
          {
            "word": "we ",
            "start": 217.984,
            "end": 219.047
          },
          {
            "word": "made",
            "start": 219.047,
            "end": 219.254
          }
        ]
      },
      {
        "verseStart": 219.254,
        "verseEnd": 222.804,
        "words": [
          {
            "word": "I'll ",
            "start": 219.254,
            "end": 219.496
          },
          {
            "word": "watch ",
            "start": 219.496,
            "end": 219.702
          },
          {
            "word": "you ",
            "start": 219.702,
            "end": 220.149
          },
          {
            "word": "choke ",
            "start": 220.149,
            "end": 220.394
          },
          {
            "word": "on ",
            "start": 220.394,
            "end": 220.598
          },
          {
            "word": "the ",
            "start": 220.598,
            "end": 221.008
          },
          {
            "word": "hearts ",
            "start": 221.008,
            "end": 221.416
          },
          {
            "word": "you ",
            "start": 221.416,
            "end": 222.555
          },
          {
            "word": "break",
            "start": 222.555,
            "end": 222.804
          }
        ]
      },
      {
        "verseStart": 222.804,
        "verseEnd": 226.227,
        "words": [
          {
            "word": "I'm ",
            "start": 222.804,
            "end": 223.21
          },
          {
            "word": "bleeding ",
            "start": 223.21,
            "end": 223.618
          },
          {
            "word": "out ",
            "start": 223.618,
            "end": 224.025
          },
          {
            "word": "every ",
            "start": 224.025,
            "end": 224.431
          },
          {
            "word": "word ",
            "start": 224.431,
            "end": 224.881
          },
          {
            "word": "you ",
            "start": 224.881,
            "end": 225.778
          },
          {
            "word": "said",
            "start": 225.778,
            "end": 226.227
          }
        ]
      },
      {
        "verseStart": 226.227,
        "verseEnd": 229.735,
        "words": [
          {
            "word": "Go ",
            "start": 226.227,
            "end": 226.472
          },
          {
            "word": "to ",
            "start": 226.472,
            "end": 227.042
          },
          {
            "word": "hell, ",
            "start": 227.042,
            "end": 227.529
          },
          {
            "word": "for ",
            "start": 227.529,
            "end": 228.183
          },
          {
            "word": "heaven's ",
            "start": 228.183,
            "end": 229.165
          },
          {
            "word": "sake",
            "start": 229.165,
            "end": 229.735
          }
        ]
      },
      {
        "verseStart": 229.735,
        "verseEnd": 233.223,
        "words": [
          {
            "word": "Go ",
            "start": 229.735,
            "end": 229.938
          },
          {
            "word": "to ",
            "start": 229.938,
            "end": 230.509
          },
          {
            "word": "hell, ",
            "start": 230.509,
            "end": 230.957
          },
          {
            "word": "for ",
            "start": 230.957,
            "end": 231.619
          },
          {
            "word": "heaven's ",
            "start": 231.619,
            "end": 232.757
          },
          {
            "word": "sake",
            "start": 232.757,
            "end": 233.223
          }
        ]
      },
      {
        "verseStart": 233.223,
        "verseEnd": 236.735,
        "words": [
          {
            "word": "Go ",
            "start": 233.223,
            "end": 233.426
          },
          {
            "word": "to ",
            "start": 233.426,
            "end": 234.042
          },
          {
            "word": "hell, ",
            "start": 234.042,
            "end": 234.49
          },
          {
            "word": "for ",
            "start": 234.49,
            "end": 235.098
          },
          {
            "word": "heaven's ",
            "start": 235.098,
            "end": 236.076
          },
          {
            "word": "sake",
            "start": 236.076,
            "end": 236.735
          }
        ]
      },
      {
        "verseStart": 236.735,
        "verseEnd": 233.64,
        "words": [
          {
            "word": "Go ",
            "start": 236.735,
            "end": 236.939
          },
          {
            "word": "to ",
            "start": 236.939,
            "end": 237.55
          },
          {
            "word": "hell, ",
            "start": 237.55,
            "end": 237.955
          },
          {
            "word": "for ",
            "start": 237.955,
            "end": 238.609
          },
          {
            "word": "heaven's ",
            "start": 238.609,
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
        "verseStart": 2.522,
        "verseEnd": 8.685,
        "words": [
          {
            "word": "Плак- ",
            "start": 2.522,
            "end": 5.385
          },
          {
            "word": "плак, ",
            "start": 5.385,
            "end": 5.753
          },
          {
            "word": "плак- ",
            "start": 5.753,
            "end": 8.318
          },
          {
            "word": "плак",
            "start": 8.318,
            "end": 8.685
          }
        ]
      },
      {
        "verseStart": 8.685,
        "verseEnd": 12.438,
        "words": [
          {
            "word": "Плак- ",
            "start": 8.685,
            "end": 11.379
          },
          {
            "word": "плак, ",
            "start": 11.379,
            "end": 11.745
          },
          {
            "word": "плак- ",
            "start": 11.745,
            "end": 12.194
          },
          {
            "word": "плак",
            "start": 12.194,
            "end": 12.438
          }
        ]
      },
      {
        "verseStart": 12.438,
        "verseEnd": 15.874,
        "words": [
          {
            "word": "Я ",
            "start": 12.438,
            "end": 12.767
          },
          {
            "word": "тебе ",
            "start": 12.767,
            "end": 13.177
          },
          {
            "word": "писала ",
            "start": 13.177,
            "end": 13.463
          },
          {
            "word": "и ",
            "start": 13.463,
            "end": 13.912
          },
          {
            "word": "ждала ",
            "start": 13.912,
            "end": 14.076
          },
          {
            "word": "тебя ",
            "start": 14.076,
            "end": 14.483
          },
          {
            "word": "в ",
            "start": 14.483,
            "end": 15.462
          },
          {
            "word": "ночи ( ",
            "start": 15.462,
            "end": 15.625
          },
          {
            "word": "плак- ",
            "start": 15.625,
            "end": 15.751
          },
          {
            "word": "плак)",
            "start": 15.751,
            "end": 15.874
          }
        ]
      },
      {
        "verseStart": 15.874,
        "verseEnd": 18.659,
        "words": [
          {
            "word": "Ты ",
            "start": 15.874,
            "end": 15.997
          },
          {
            "word": "не ",
            "start": 15.997,
            "end": 16.407
          },
          {
            "word": "отвечаешь ",
            "start": 16.407,
            "end": 16.569
          },
          {
            "word": "больше ",
            "start": 16.569,
            "end": 16.773
          },
          {
            "word": "на ",
            "start": 16.773,
            "end": 16.977
          },
          {
            "word": "мои ",
            "start": 16.977,
            "end": 17.591
          },
          {
            "word": "звонки ( ",
            "start": 17.591,
            "end": 17.923
          },
          {
            "word": "плак- ",
            "start": 17.923,
            "end": 18.249
          },
          {
            "word": "плак)",
            "start": 18.249,
            "end": 18.659
          }
        ]
      },
      {
        "verseStart": 18.659,
        "verseEnd": 21.762,
        "words": [
          {
            "word": "Каждый ",
            "start": 18.659,
            "end": 19.024
          },
          {
            "word": "вечер ",
            "start": 19.024,
            "end": 19.39
          },
          {
            "word": "оставляю ",
            "start": 19.39,
            "end": 19.594
          },
          {
            "word": "под ",
            "start": 19.594,
            "end": 19.761
          },
          {
            "word": "подушкой ",
            "start": 19.761,
            "end": 20.452
          },
          {
            "word": "зуб ( ",
            "start": 20.452,
            "end": 20.82
          },
          {
            "word": "плак- ",
            "start": 20.82,
            "end": 21.227
          },
          {
            "word": "плак)",
            "start": 21.227,
            "end": 21.762
          }
        ]
      },
      {
        "verseStart": 21.762,
        "verseEnd": 24.509,
        "words": [
          {
            "word": "Умоляю ",
            "start": 21.762,
            "end": 22.332
          },
          {
            "word": "небеса ",
            "start": 22.332,
            "end": 22.746
          },
          {
            "word": "назад ",
            "start": 22.746,
            "end": 23.03
          },
          {
            "word": "тебя ",
            "start": 23.03,
            "end": 23.442
          },
          {
            "word": "вернуть ( ",
            "start": 23.442,
            "end": 23.852
          },
          {
            "word": "плак- ",
            "start": 23.852,
            "end": 24.306
          },
          {
            "word": "плак)",
            "start": 24.306,
            "end": 24.509
          }
        ]
      },
      {
        "verseStart": 24.509,
        "verseEnd": 27.541,
        "words": [
          {
            "word": "Я ",
            "start": 24.509,
            "end": 24.881
          },
          {
            "word": "была ",
            "start": 24.881,
            "end": 25.044
          },
          {
            "word": "хорошей, ",
            "start": 25.044,
            "end": 25.496
          },
          {
            "word": "а ",
            "start": 25.496,
            "end": 25.822
          },
          {
            "word": "плохой ",
            "start": 25.822,
            "end": 26.108
          },
          {
            "word": "я ",
            "start": 26.108,
            "end": 26.27
          },
          {
            "word": "не ",
            "start": 26.27,
            "end": 26.597
          },
          {
            "word": "была ( ",
            "start": 26.597,
            "end": 27.011
          },
          {
            "word": "плак- ",
            "start": 27.011,
            "end": 27.335
          },
          {
            "word": "плак)",
            "start": 27.335,
            "end": 27.541
          }
        ]
      },
      {
        "verseStart": 27.541,
        "verseEnd": 30.858,
        "words": [
          {
            "word": "Я ",
            "start": 27.541,
            "end": 27.785
          },
          {
            "word": "всю ",
            "start": 27.785,
            "end": 28.397
          },
          {
            "word": "жизнь, ",
            "start": 28.397,
            "end": 28.601
          },
          {
            "word": "как ",
            "start": 28.601,
            "end": 28.889
          },
          {
            "word": "паинька, ",
            "start": 28.889,
            "end": 29.132
          },
          {
            "word": "по ",
            "start": 29.132,
            "end": 29.423
          },
          {
            "word": "правилам ",
            "start": 29.423,
            "end": 29.591
          },
          {
            "word": "жила ( ",
            "start": 29.591,
            "end": 30.002
          },
          {
            "word": "плак- ",
            "start": 30.002,
            "end": 30.368
          },
          {
            "word": "плак)",
            "start": 30.368,
            "end": 30.858
          }
        ]
      },
      {
        "verseStart": 30.858,
        "verseEnd": 33.767,
        "words": [
          {
            "word": "Надоело ",
            "start": 30.858,
            "end": 31.187
          },
          {
            "word": "плакать, ",
            "start": 31.187,
            "end": 31.554
          },
          {
            "word": "надоело ",
            "start": 31.554,
            "end": 31.762
          },
          {
            "word": "мне ",
            "start": 31.762,
            "end": 32.13
          },
          {
            "word": "страдать ( ",
            "start": 32.13,
            "end": 32.823
          },
          {
            "word": "плак- ",
            "start": 32.823,
            "end": 33.273
          },
          {
            "word": "плак)",
            "start": 33.273,
            "end": 33.767
          }
        ]
      },
      {
        "verseStart": 33.767,
        "verseEnd": 37.53,
        "words": [
          {
            "word": "Всё ",
            "start": 33.767,
            "end": 34.011
          },
          {
            "word": "равно ",
            "start": 34.011,
            "end": 34.173
          },
          {
            "word": "не ",
            "start": 34.173,
            "end": 34.539
          },
          {
            "word": "выйдет ",
            "start": 34.539,
            "end": 34.823
          },
          {
            "word": "свою ",
            "start": 34.823,
            "end": 34.986
          },
          {
            "word": "смерть ",
            "start": 34.986,
            "end": 35.601
          },
          {
            "word": "предугадать ( ",
            "start": 35.601,
            "end": 35.968
          },
          {
            "word": "плак- ",
            "start": 35.968,
            "end": 36.743
          },
          {
            "word": "плак)",
            "start": 36.743,
            "end": 37.53
          }
        ]
      },
      {
        "verseStart": 37.53,
        "verseEnd": 43.406,
        "words": [
          {
            "word": "Ла- ",
            "start": 37.53,
            "end": 38.144
          },
          {
            "word": "ла- ",
            "start": 38.144,
            "end": 38.795
          },
          {
            "word": "ла- ",
            "start": 38.795,
            "end": 39.245
          },
          {
            "word": "ла- ",
            "start": 39.245,
            "end": 39.816
          },
          {
            "word": "ла- ",
            "start": 39.816,
            "end": 40.384
          },
          {
            "word": "а- ",
            "start": 40.384,
            "end": 40.995
          },
          {
            "word": "а- ",
            "start": 40.995,
            "end": 42.873
          },
          {
            "word": "а",
            "start": 42.873,
            "end": 43.406
          }
        ]
      },
      {
        "verseStart": 43.406,
        "verseEnd": 48.891,
        "words": [
          {
            "word": "Ла- ",
            "start": 43.406,
            "end": 43.608
          },
          {
            "word": "ла- ",
            "start": 43.608,
            "end": 44.065
          },
          {
            "word": "ла- ",
            "start": 44.065,
            "end": 44.808
          },
          {
            "word": "ла- ",
            "start": 44.808,
            "end": 45.908
          },
          {
            "word": "ла- ",
            "start": 45.908,
            "end": 46.518
          },
          {
            "word": "а- ",
            "start": 46.518,
            "end": 47.09
          },
          {
            "word": "а- ",
            "start": 47.09,
            "end": 48.524
          },
          {
            "word": "а",
            "start": 48.524,
            "end": 48.891
          }
        ]
      },
      {
        "verseStart": 48.891,
        "verseEnd": 51.807,
        "words": [
          {
            "word": "Мама ",
            "start": 48.891,
            "end": 49.265
          },
          {
            "word": "говорила ",
            "start": 49.265,
            "end": 49.712
          },
          {
            "word": "мне: \" ",
            "start": 49.712,
            "end": 50.784
          },
          {
            "word": "Слушайся ",
            "start": 50.784,
            "end": 51.604
          },
          {
            "word": "мужа\"",
            "start": 51.604,
            "end": 51.807
          }
        ]
      },
      {
        "verseStart": 51.807,
        "verseEnd": 55.067,
        "words": [
          {
            "word": "Я ",
            "start": 51.807,
            "end": 52.052
          },
          {
            "word": "не ",
            "start": 52.052,
            "end": 53.031
          },
          {
            "word": "послушна, ",
            "start": 53.031,
            "end": 53.194
          },
          {
            "word": "я ",
            "start": 53.194,
            "end": 53.805
          },
          {
            "word": "делаю ",
            "start": 53.805,
            "end": 54.66
          },
          {
            "word": "хуже",
            "start": 54.66,
            "end": 55.067
          }
        ]
      },
      {
        "verseStart": 55.067,
        "verseEnd": 58.055,
        "words": [
          {
            "word": "Делаю ",
            "start": 55.067,
            "end": 55.433
          },
          {
            "word": "не ",
            "start": 55.433,
            "end": 55.844
          },
          {
            "word": "так, ",
            "start": 55.844,
            "end": 56.171
          },
          {
            "word": "как ",
            "start": 56.171,
            "end": 56.867
          },
          {
            "word": "наказывал ",
            "start": 56.867,
            "end": 57.565
          },
          {
            "word": "папа",
            "start": 57.565,
            "end": 58.055
          }
        ]
      },
      {
        "verseStart": 58.055,
        "verseEnd": 61.036,
        "words": [
          {
            "word": "Вместо ",
            "start": 58.055,
            "end": 58.793
          },
          {
            "word": "звезды ",
            "start": 58.793,
            "end": 59.16
          },
          {
            "word": "я ",
            "start": 59.16,
            "end": 59.569
          },
          {
            "word": "хватаю ",
            "start": 59.569,
            "end": 60.629
          },
          {
            "word": "гранату",
            "start": 60.629,
            "end": 61.036
          }
        ]
      },
      {
        "verseStart": 61.036,
        "verseEnd": 63.937,
        "words": [
          {
            "word": "Мама ",
            "start": 61.036,
            "end": 61.731
          },
          {
            "word": "говорила ",
            "start": 61.731,
            "end": 61.934
          },
          {
            "word": "мне: \" ",
            "start": 61.934,
            "end": 62.874
          },
          {
            "word": "Слушайся ",
            "start": 62.874,
            "end": 63.734
          },
          {
            "word": "мужа\"",
            "start": 63.734,
            "end": 63.937
          }
        ]
      },
      {
        "verseStart": 63.937,
        "verseEnd": 67.209,
        "words": [
          {
            "word": "Я ",
            "start": 63.937,
            "end": 64.142
          },
          {
            "word": "не ",
            "start": 64.142,
            "end": 65.214
          },
          {
            "word": "послушна, ",
            "start": 65.214,
            "end": 65.417
          },
          {
            "word": "я ",
            "start": 65.417,
            "end": 65.661
          },
          {
            "word": "делаю ",
            "start": 65.661,
            "end": 66.719
          },
          {
            "word": "хуже",
            "start": 66.719,
            "end": 67.209
          }
        ]
      },
      {
        "verseStart": 67.209,
        "verseEnd": 70.247,
        "words": [
          {
            "word": "Делаю ",
            "start": 67.209,
            "end": 67.543
          },
          {
            "word": "не ",
            "start": 67.543,
            "end": 67.991
          },
          {
            "word": "так, ",
            "start": 67.991,
            "end": 68.317
          },
          {
            "word": "как ",
            "start": 68.317,
            "end": 69.016
          },
          {
            "word": "наказывал ",
            "start": 69.016,
            "end": 69.71
          },
          {
            "word": "папа",
            "start": 69.71,
            "end": 70.247
          }
        ]
      },
      {
        "verseStart": 70.247,
        "verseEnd": 73.504,
        "words": [
          {
            "word": "Вместо ",
            "start": 70.247,
            "end": 71.266
          },
          {
            "word": "звезды ",
            "start": 71.266,
            "end": 71.592
          },
          {
            "word": "я ",
            "start": 71.592,
            "end": 71.875
          },
          {
            "word": "хватаю ",
            "start": 71.875,
            "end": 73.341
          },
          {
            "word": "гранату",
            "start": 73.341,
            "end": 73.504
          }
        ]
      },
      {
        "verseStart": 73.504,
        "verseEnd": 79.546,
        "words": [
          {
            "word": "Я ",
            "start": 73.504,
            "end": 74.005
          },
          {
            "word": "хотела ",
            "start": 74.005,
            "end": 74.373
          },
          {
            "word": "бы ",
            "start": 74.373,
            "end": 75.265
          },
          {
            "word": "тебя, ",
            "start": 75.265,
            "end": 76.57
          },
          {
            "word": "как ",
            "start": 76.57,
            "end": 77.017
          },
          {
            "word": "тогда, ",
            "start": 77.017,
            "end": 79.22
          },
          {
            "word": "обнять",
            "start": 79.22,
            "end": 79.546
          }
        ]
      },
      {
        "verseStart": 79.546,
        "verseEnd": 85.76,
        "words": [
          {
            "word": "Но ",
            "start": 79.546,
            "end": 80.155
          },
          {
            "word": "для ",
            "start": 80.155,
            "end": 81.301
          },
          {
            "word": "этого ",
            "start": 81.301,
            "end": 82.032
          },
          {
            "word": "придётся ",
            "start": 82.032,
            "end": 82.812
          },
          {
            "word": "тело ",
            "start": 82.812,
            "end": 85.019
          },
          {
            "word": "раскопать",
            "start": 85.019,
            "end": 85.76
          }
        ]
      },
      {
        "verseStart": 85.76,
        "verseEnd": 92.547,
        "words": [
          {
            "word": "Твои ",
            "start": 85.76,
            "end": 86.494
          },
          {
            "word": "кости ",
            "start": 86.494,
            "end": 87.921
          },
          {
            "word": "ледяные ",
            "start": 87.921,
            "end": 88.33
          },
          {
            "word": "где- ",
            "start": 88.33,
            "end": 88.696
          },
          {
            "word": "то ",
            "start": 88.696,
            "end": 89.066
          },
          {
            "word": "там ",
            "start": 89.066,
            "end": 89.432
          },
          {
            "word": "на ",
            "start": 89.432,
            "end": 91.109
          },
          {
            "word": "дне",
            "start": 91.109,
            "end": 92.547
          }
        ]
      },
      {
        "verseStart": 92.547,
        "verseEnd": 99.821,
        "words": [
          {
            "word": "Прорастут ",
            "start": 92.547,
            "end": 93.365
          },
          {
            "word": "цветы ",
            "start": 93.365,
            "end": 93.773
          },
          {
            "word": "в ",
            "start": 93.773,
            "end": 94.141
          },
          {
            "word": "этой ",
            "start": 94.141,
            "end": 95.279
          },
          {
            "word": "оплаканной ",
            "start": 95.279,
            "end": 99.491
          },
          {
            "word": "земле",
            "start": 99.491,
            "end": 99.821
          }
        ]
      },
      {
        "verseStart": 99.821,
        "verseEnd": 105.814,
        "words": [
          {
            "word": "Плак- ",
            "start": 99.821,
            "end": 102.629
          },
          {
            "word": "плак, ",
            "start": 102.629,
            "end": 102.955
          },
          {
            "word": "плак- ",
            "start": 102.955,
            "end": 105.488
          },
          {
            "word": "плак",
            "start": 105.488,
            "end": 105.814
          }
        ]
      },
      {
        "verseStart": 105.814,
        "verseEnd": 110.139,
        "words": [
          {
            "word": "Плак- ",
            "start": 105.814,
            "end": 108.546
          },
          {
            "word": "плак, ",
            "start": 108.546,
            "end": 108.912
          },
          {
            "word": "плак- ",
            "start": 108.912,
            "end": 109.32
          },
          {
            "word": "плак",
            "start": 109.32,
            "end": 110.139
          }
        ]
      },
      {
        "verseStart": 110.139,
        "verseEnd": 112.848,
        "words": [
          {
            "word": "Растекаются ",
            "start": 110.139,
            "end": 110.468
          },
          {
            "word": "по ",
            "start": 110.468,
            "end": 110.833
          },
          {
            "word": "всей ",
            "start": 110.833,
            "end": 111.12
          },
          {
            "word": "стене ",
            "start": 111.12,
            "end": 111.33
          },
          {
            "word": "твои ",
            "start": 111.33,
            "end": 111.744
          },
          {
            "word": "мозги ( ",
            "start": 111.744,
            "end": 111.99
          },
          {
            "word": "плак- ",
            "start": 111.99,
            "end": 112.356
          },
          {
            "word": "плак)",
            "start": 112.356,
            "end": 112.848
          }
        ]
      },
      {
        "verseStart": 112.848,
        "verseEnd": 115.869,
        "words": [
          {
            "word": "Очень ",
            "start": 112.848,
            "end": 113.417
          },
          {
            "word": "разозлилась ",
            "start": 113.417,
            "end": 113.66
          },
          {
            "word": "на ",
            "start": 113.66,
            "end": 113.946
          },
          {
            "word": "тебя, ",
            "start": 113.946,
            "end": 114.272
          },
          {
            "word": "ты ",
            "start": 114.272,
            "end": 114.441
          },
          {
            "word": "уж ",
            "start": 114.441,
            "end": 114.848
          },
          {
            "word": "прости ( ",
            "start": 114.848,
            "end": 115.094
          },
          {
            "word": "плак- ",
            "start": 115.094,
            "end": 115.419
          },
          {
            "word": "плак)",
            "start": 115.419,
            "end": 115.869
          }
        ]
      },
      {
        "verseStart": 115.869,
        "verseEnd": 118.669,
        "words": [
          {
            "word": "Сотый ",
            "start": 115.869,
            "end": 116.072
          },
          {
            "word": "раз ",
            "start": 116.072,
            "end": 116.276
          },
          {
            "word": "во ",
            "start": 116.276,
            "end": 116.62
          },
          {
            "word": "сне ",
            "start": 116.62,
            "end": 116.823
          },
          {
            "word": "я ",
            "start": 116.823,
            "end": 117.027
          },
          {
            "word": "наблюдаю ",
            "start": 117.027,
            "end": 117.353
          },
          {
            "word": "твой ",
            "start": 117.353,
            "end": 117.729
          },
          {
            "word": "конец ( ",
            "start": 117.729,
            "end": 118.055
          },
          {
            "word": "плак- ",
            "start": 118.055,
            "end": 118.425
          },
          {
            "word": "плак)",
            "start": 118.425,
            "end": 118.669
          }
        ]
      },
      {
        "verseStart": 118.669,
        "verseEnd": 121.731,
        "words": [
          {
            "word": "И ",
            "start": 118.669,
            "end": 118.954
          },
          {
            "word": "не ",
            "start": 118.954,
            "end": 119.16
          },
          {
            "word": "так ",
            "start": 119.16,
            "end": 119.365
          },
          {
            "word": "уж ",
            "start": 119.365,
            "end": 119.851
          },
          {
            "word": "страшно, ",
            "start": 119.851,
            "end": 120.054
          },
          {
            "word": "в ",
            "start": 120.054,
            "end": 120.216
          },
          {
            "word": "самом ",
            "start": 120.216,
            "end": 120.42
          },
          {
            "word": "деле, ",
            "start": 120.42,
            "end": 120.704
          },
          {
            "word": "умереть ( ",
            "start": 120.704,
            "end": 121.114
          },
          {
            "word": "плак- ",
            "start": 121.114,
            "end": 121.445
          },
          {
            "word": "плак)",
            "start": 121.445,
            "end": 121.731
          }
        ]
      },
      {
        "verseStart": 121.731,
        "verseEnd": 124.67,
        "words": [
          {
            "word": "Я ",
            "start": 121.731,
            "end": 121.893
          },
          {
            "word": "была ",
            "start": 121.893,
            "end": 122.056
          },
          {
            "word": "хорошей, ",
            "start": 122.056,
            "end": 122.544
          },
          {
            "word": "а ",
            "start": 122.544,
            "end": 122.953
          },
          {
            "word": "плохой ",
            "start": 122.953,
            "end": 123.155
          },
          {
            "word": "я ",
            "start": 123.155,
            "end": 123.364
          },
          {
            "word": "не ",
            "start": 123.364,
            "end": 123.688
          },
          {
            "word": "была ( ",
            "start": 123.688,
            "end": 124.061
          },
          {
            "word": "плак- ",
            "start": 124.061,
            "end": 124.427
          },
          {
            "word": "плак)",
            "start": 124.427,
            "end": 124.67
          }
        ]
      },
      {
        "verseStart": 124.67,
        "verseEnd": 127.697,
        "words": [
          {
            "word": "И ",
            "start": 124.67,
            "end": 124.96
          },
          {
            "word": "всю ",
            "start": 124.96,
            "end": 125.206
          },
          {
            "word": "жизнь ",
            "start": 125.206,
            "end": 125.369
          },
          {
            "word": "как ",
            "start": 125.369,
            "end": 125.776
          },
          {
            "word": "паинька, ",
            "start": 125.776,
            "end": 126.021
          },
          {
            "word": "по ",
            "start": 126.021,
            "end": 126.305
          },
          {
            "word": "правилам ",
            "start": 126.305,
            "end": 126.633
          },
          {
            "word": "жила ( ",
            "start": 126.633,
            "end": 126.88
          },
          {
            "word": "плак- ",
            "start": 126.88,
            "end": 127.452
          },
          {
            "word": "плак)",
            "start": 127.452,
            "end": 127.697
          }
        ]
      },
      {
        "verseStart": 127.697,
        "verseEnd": 130.831,
        "words": [
          {
            "word": "Надоело ",
            "start": 127.697,
            "end": 128.146
          },
          {
            "word": "плакать, ",
            "start": 128.146,
            "end": 128.877
          },
          {
            "word": "надоело ",
            "start": 128.877,
            "end": 129.081
          },
          {
            "word": "мне ",
            "start": 129.081,
            "end": 129.773
          },
          {
            "word": "страдать ( ",
            "start": 129.773,
            "end": 130.1
          },
          {
            "word": "плак- ",
            "start": 130.1,
            "end": 130.588
          },
          {
            "word": "плак)",
            "start": 130.588,
            "end": 130.831
          }
        ]
      },
      {
        "verseStart": 130.831,
        "verseEnd": 134.067,
        "words": [
          {
            "word": "Всё ",
            "start": 130.831,
            "end": 131.203
          },
          {
            "word": "равно ",
            "start": 131.203,
            "end": 131.418
          },
          {
            "word": "не ",
            "start": 131.418,
            "end": 131.784
          },
          {
            "word": "выйдет ",
            "start": 131.784,
            "end": 131.947
          },
          {
            "word": "свою ",
            "start": 131.947,
            "end": 132.354
          },
          {
            "word": "смерть ",
            "start": 132.354,
            "end": 132.803
          },
          {
            "word": "предугадать ( ",
            "start": 132.803,
            "end": 132.928
          },
          {
            "word": "плак- ",
            "start": 132.928,
            "end": 133.864
          },
          {
            "word": "плак)",
            "start": 133.864,
            "end": 134.067
          }
        ]
      },
      {
        "verseStart": 134.067,
        "verseEnd": 136.774,
        "words": [
          {
            "word": "Мама ",
            "start": 134.067,
            "end": 134.396
          },
          {
            "word": "говорила ",
            "start": 134.396,
            "end": 134.806
          },
          {
            "word": "мне: \" ",
            "start": 134.806,
            "end": 135.377
          },
          {
            "word": "Слушайся ",
            "start": 135.377,
            "end": 136.566
          },
          {
            "word": "мужа\"",
            "start": 136.566,
            "end": 136.774
          }
        ]
      },
      {
        "verseStart": 136.774,
        "verseEnd": 140.127,
        "words": [
          {
            "word": "Я ",
            "start": 136.774,
            "end": 137.102
          },
          {
            "word": "не ",
            "start": 137.102,
            "end": 137.996
          },
          {
            "word": "послушна, ",
            "start": 137.996,
            "end": 138.159
          },
          {
            "word": "я ",
            "start": 138.159,
            "end": 138.618
          },
          {
            "word": "делаю ",
            "start": 138.618,
            "end": 139.678
          },
          {
            "word": "хуже",
            "start": 139.678,
            "end": 140.127
          }
        ]
      },
      {
        "verseStart": 140.127,
        "verseEnd": 143.395,
        "words": [
          {
            "word": "Делаю ",
            "start": 140.127,
            "end": 140.498
          },
          {
            "word": "не ",
            "start": 140.498,
            "end": 140.868
          },
          {
            "word": "так, ",
            "start": 140.868,
            "end": 141.275
          },
          {
            "word": "как ",
            "start": 141.275,
            "end": 141.97
          },
          {
            "word": "наказывал ",
            "start": 141.97,
            "end": 142.66
          },
          {
            "word": "папа",
            "start": 142.66,
            "end": 143.395
          }
        ]
      },
      {
        "verseStart": 143.395,
        "verseEnd": 146.089,
        "words": [
          {
            "word": "Вместо ",
            "start": 143.395,
            "end": 143.846
          },
          {
            "word": "звезды ",
            "start": 143.846,
            "end": 144.212
          },
          {
            "word": "я ",
            "start": 144.212,
            "end": 144.621
          },
          {
            "word": "хватаю ",
            "start": 144.621,
            "end": 145.724
          },
          {
            "word": "гранату",
            "start": 145.724,
            "end": 146.089
          }
        ]
      },
      {
        "verseStart": 146.089,
        "verseEnd": 148.838,
        "words": [
          {
            "word": "Мама ",
            "start": 146.089,
            "end": 146.579
          },
          {
            "word": "говорила ",
            "start": 146.579,
            "end": 147.029
          },
          {
            "word": "мне: \" ",
            "start": 147.029,
            "end": 147.897
          },
          {
            "word": "Слушайся ",
            "start": 147.897,
            "end": 148.674
          },
          {
            "word": "мужа\"",
            "start": 148.674,
            "end": 148.838
          }
        ]
      },
      {
        "verseStart": 148.838,
        "verseEnd": 152.272,
        "words": [
          {
            "word": "Я ",
            "start": 148.838,
            "end": 149.208
          },
          {
            "word": "не ",
            "start": 149.208,
            "end": 150.107
          },
          {
            "word": "послушна, ",
            "start": 150.107,
            "end": 150.393
          },
          {
            "word": "я ",
            "start": 150.393,
            "end": 150.965
          },
          {
            "word": "делаю ",
            "start": 150.965,
            "end": 151.823
          },
          {
            "word": "хуже",
            "start": 151.823,
            "end": 152.272
          }
        ]
      },
      {
        "verseStart": 152.272,
        "verseEnd": 155.466,
        "words": [
          {
            "word": "Делаю ",
            "start": 152.272,
            "end": 152.598
          },
          {
            "word": "не ",
            "start": 152.598,
            "end": 153.05
          },
          {
            "word": "так, ",
            "start": 153.05,
            "end": 153.334
          },
          {
            "word": "как ",
            "start": 153.334,
            "end": 154.027
          },
          {
            "word": "наказывал ",
            "start": 154.027,
            "end": 154.847
          },
          {
            "word": "папа",
            "start": 154.847,
            "end": 155.466
          }
        ]
      },
      {
        "verseStart": 155.466,
        "verseEnd": 158.803,
        "words": [
          {
            "word": "Вместо ",
            "start": 155.466,
            "end": 155.872
          },
          {
            "word": "звезды ",
            "start": 155.872,
            "end": 156.237
          },
          {
            "word": "я ",
            "start": 156.237,
            "end": 156.603
          },
          {
            "word": "хватаю ",
            "start": 156.603,
            "end": 158.23
          },
          {
            "word": "гранату",
            "start": 158.23,
            "end": 158.803
          }
        ]
      },
      {
        "verseStart": 158.803,
        "verseEnd": 161.873,
        "words": [
          {
            "word": "Ла- ",
            "start": 158.803,
            "end": 158.966
          },
          {
            "word": "ла- ",
            "start": 158.966,
            "end": 159.622
          },
          {
            "word": "ла- ",
            "start": 159.622,
            "end": 160.03
          },
          {
            "word": "ла- ",
            "start": 160.03,
            "end": 160.192
          },
          {
            "word": "ла- ",
            "start": 160.192,
            "end": 160.609
          },
          {
            "word": "а- ",
            "start": 160.609,
            "end": 160.974
          },
          {
            "word": "а- ",
            "start": 160.974,
            "end": 161.304
          },
          {
            "word": "а",
            "start": 161.304,
            "end": 161.873
          }
        ]
      },
      {
        "verseStart": 161.873,
        "verseEnd": 164.841,
        "words": [
          {
            "word": "Ла- ",
            "start": 161.873,
            "end": 162.042
          },
          {
            "word": "ла- ",
            "start": 162.042,
            "end": 162.454
          },
          {
            "word": "ла- ",
            "start": 162.454,
            "end": 163.067
          },
          {
            "word": "ла- ",
            "start": 163.067,
            "end": 163.556
          },
          {
            "word": "ла- ",
            "start": 163.556,
            "end": 163.892
          },
          {
            "word": "а- ",
            "start": 163.892,
            "end": 164.135
          },
          {
            "word": "а- ",
            "start": 164.135,
            "end": 164.343
          },
          {
            "word": "а",
            "start": 164.343,
            "end": 164.841
          }
        ]
      },
      {
        "verseStart": 164.841,
        "verseEnd": 167.909,
        "words": [
          {
            "word": "Ла- ",
            "start": 164.841,
            "end": 164.964
          },
          {
            "word": "ла- ",
            "start": 164.964,
            "end": 165.412
          },
          {
            "word": "ла- ",
            "start": 165.412,
            "end": 166.067
          },
          {
            "word": "ла- ",
            "start": 166.067,
            "end": 166.23
          },
          {
            "word": "ла- ",
            "start": 166.23,
            "end": 166.635
          },
          {
            "word": "а- ",
            "start": 166.635,
            "end": 167.048
          },
          {
            "word": "а- ",
            "start": 167.048,
            "end": 167.376
          },
          {
            "word": "а",
            "start": 167.376,
            "end": 167.909
          }
        ]
      },
      {
        "verseStart": 167.909,
        "verseEnd": 170.531,
        "words": [
          {
            "word": "Ла- ",
            "start": 167.909,
            "end": 168.071
          },
          {
            "word": "ла- ",
            "start": 168.071,
            "end": 168.444
          },
          {
            "word": "ла- ",
            "start": 168.444,
            "end": 169.014
          },
          {
            "word": "ла- ",
            "start": 169.014,
            "end": 169.216
          },
          {
            "word": "ла- ",
            "start": 169.216,
            "end": 169.505
          },
          {
            "word": "а- ",
            "start": 169.505,
            "end": 169.669
          },
          {
            "word": "а- ",
            "start": 169.669,
            "end": 169.957
          },
          {
            "word": "а",
            "start": 169.957,
            "end": 170.531
          }
        ]
      },
      {
        "verseStart": 170.531,
        "verseEnd": 176.622,
        "words": [
          {
            "word": "Я ",
            "start": 170.531,
            "end": 171.601
          },
          {
            "word": "хотела ",
            "start": 171.601,
            "end": 171.969
          },
          {
            "word": "бы ",
            "start": 171.969,
            "end": 173.108
          },
          {
            "word": "тебя, ",
            "start": 173.108,
            "end": 173.766
          },
          {
            "word": "как ",
            "start": 173.766,
            "end": 174.214
          },
          {
            "word": "тогда, ",
            "start": 174.214,
            "end": 176.251
          },
          {
            "word": "обнять",
            "start": 176.251,
            "end": 176.622
          }
        ]
      },
      {
        "verseStart": 176.622,
        "verseEnd": 182.954,
        "words": [
          {
            "word": "Но ",
            "start": 176.622,
            "end": 177.394
          },
          {
            "word": "для ",
            "start": 177.394,
            "end": 178.464
          },
          {
            "word": "этого ",
            "start": 178.464,
            "end": 179.197
          },
          {
            "word": "придётся ",
            "start": 179.197,
            "end": 180.011
          },
          {
            "word": "тело ",
            "start": 180.011,
            "end": 182.258
          },
          {
            "word": "раскопать",
            "start": 182.258,
            "end": 182.954
          }
        ]
      },
      {
        "verseStart": 182.954,
        "verseEnd": 189.368,
        "words": [
          {
            "word": "Твои ",
            "start": 182.954,
            "end": 183.73
          },
          {
            "word": "кости ",
            "start": 183.73,
            "end": 185.237
          },
          {
            "word": "ледяные ",
            "start": 185.237,
            "end": 185.613
          },
          {
            "word": "где- ",
            "start": 185.613,
            "end": 185.937
          },
          {
            "word": "то ",
            "start": 185.937,
            "end": 186.343
          },
          {
            "word": "там ",
            "start": 186.343,
            "end": 186.71
          },
          {
            "word": "на ",
            "start": 186.71,
            "end": 188.177
          },
          {
            "word": "дне",
            "start": 188.177,
            "end": 189.368
          }
        ]
      },
      {
        "verseStart": 189.368,
        "verseEnd": 193.21,
        "words": [
          {
            "word": "Прорастут ",
            "start": 189.368,
            "end": 189.774
          },
          {
            "word": "цветы ",
            "start": 189.774,
            "end": 190.22
          },
          {
            "word": "в ",
            "start": 190.22,
            "end": 191.161
          },
          {
            "word": "этой ",
            "start": 191.161,
            "end": 192.424
          },
          {
            "word": "оплаканной ",
            "start": 192.424,
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
        "verseStart": 0.23,
        "verseEnd": 6.635,
        "words": [
          {
            "word": "L- ",
            "start": 0.23,
            "end": 0.639
          },
          {
            "word": "U- ",
            "start": 0.639,
            "end": 1.086
          },
          {
            "word": "C- ",
            "start": 1.086,
            "end": 3.206
          },
          {
            "word": "K ",
            "start": 3.206,
            "end": 3.572
          },
          {
            "word": "L- ",
            "start": 3.572,
            "end": 3.939
          },
          {
            "word": "U- ",
            "start": 3.939,
            "end": 4.345
          },
          {
            "word": "C- ",
            "start": 4.345,
            "end": 6.226
          },
          {
            "word": "K",
            "start": 6.226,
            "end": 6.635
          }
        ]
      },
      {
        "verseStart": 6.635,
        "verseEnd": 24.928,
        "words": [
          {
            "word": "L- ",
            "start": 6.635,
            "end": 7.006
          },
          {
            "word": "U- ",
            "start": 7.006,
            "end": 7.374
          },
          {
            "word": "C- ",
            "start": 7.374,
            "end": 9.285
          },
          {
            "word": "K ",
            "start": 9.285,
            "end": 9.612
          },
          {
            "word": "L- ",
            "start": 9.612,
            "end": 10.018
          },
          {
            "word": "U- ",
            "start": 10.018,
            "end": 10.425
          },
          {
            "word": "C- ",
            "start": 10.425,
            "end": 24.277
          },
          {
            "word": "K",
            "start": 24.277,
            "end": 24.928
          }
        ]
      },
      {
        "verseStart": 24.928,
        "verseEnd": 30.84,
        "words": [
          {
            "word": "正体 ",
            "start": 24.928,
            "end": 25.537
          },
          {
            "word": "は ",
            "start": 25.537,
            "end": 25.821
          },
          {
            "word": "誰 ",
            "start": 25.821,
            "end": 25.985
          },
          {
            "word": "も ",
            "start": 25.985,
            "end": 26.188
          },
          {
            "word": "知 ",
            "start": 26.188,
            "end": 26.556
          },
          {
            "word": "ら ",
            "start": 26.556,
            "end": 26.883
          },
          {
            "word": "ない ",
            "start": 26.883,
            "end": 27.983
          },
          {
            "word": "秘密 ",
            "start": 27.983,
            "end": 28.757
          },
          {
            "word": "の ",
            "start": 28.757,
            "end": 30.269
          },
          {
            "word": "ヒーロー",
            "start": 30.269,
            "end": 30.84
          }
        ]
      },
      {
        "verseStart": 30.84,
        "verseEnd": 37.291,
        "words": [
          {
            "word": "悪役 ",
            "start": 30.84,
            "end": 31.167
          },
          {
            "word": "の ",
            "start": 31.167,
            "end": 31.862
          },
          {
            "word": "よう ",
            "start": 31.862,
            "end": 32.351
          },
          {
            "word": "にし ",
            "start": 32.351,
            "end": 32.554
          },
          {
            "word": "て ",
            "start": 32.554,
            "end": 32.88
          },
          {
            "word": "も ",
            "start": 32.88,
            "end": 33.697
          },
          {
            "word": "みんな ",
            "start": 33.697,
            "end": 34.022
          },
          {
            "word": "は ",
            "start": 34.022,
            "end": 34.593
          },
          {
            "word": "ね ",
            "start": 34.593,
            "end": 35.12
          },
          {
            "word": "わか ",
            "start": 35.12,
            "end": 35.485
          },
          {
            "word": "って ",
            "start": 35.485,
            "end": 36.216
          },
          {
            "word": "る",
            "start": 36.216,
            "end": 37.291
          }
        ]
      },
      {
        "verseStart": 37.291,
        "verseEnd": 44.075,
        "words": [
          {
            "word": "マスク ",
            "start": 37.291,
            "end": 37.662
          },
          {
            "word": "に ",
            "start": 37.662,
            "end": 37.828
          },
          {
            "word": "隠 ",
            "start": 37.828,
            "end": 38.601
          },
          {
            "word": "さ ",
            "start": 38.601,
            "end": 39.255
          },
          {
            "word": "れ ",
            "start": 39.255,
            "end": 40.151
          },
          {
            "word": "た ",
            "start": 40.151,
            "end": 40.803
          },
          {
            "word": "強い ",
            "start": 40.803,
            "end": 41.296
          },
          {
            "word": "優 ",
            "start": 41.296,
            "end": 41.46
          },
          {
            "word": "し ",
            "start": 41.46,
            "end": 41.87
          },
          {
            "word": "さ ",
            "start": 41.87,
            "end": 43.05
          },
          {
            "word": "に",
            "start": 43.05,
            "end": 44.075
          }
        ]
      },
      {
        "verseStart": 44.075,
        "verseEnd": 49.757,
        "words": [
          {
            "word": "ずっと ",
            "start": 44.075,
            "end": 44.278
          },
          {
            "word": "憧 ",
            "start": 44.278,
            "end": 45.051
          },
          {
            "word": "れ ",
            "start": 45.051,
            "end": 48.277
          },
          {
            "word": "て",
            "start": 48.277,
            "end": 49.757
          }
        ]
      },
      {
        "verseStart": 49.757,
        "verseEnd": 59.116,
        "words": [
          {
            "word": "ざわめく ",
            "start": 49.757,
            "end": 50.372
          },
          {
            "word": "街 ",
            "start": 50.372,
            "end": 51.227
          },
          {
            "word": "の ",
            "start": 51.227,
            "end": 52.578
          },
          {
            "word": "空 ",
            "start": 52.578,
            "end": 52.824
          },
          {
            "word": "を ",
            "start": 52.824,
            "end": 55.431
          },
          {
            "word": "見上げる ( ",
            "start": 55.431,
            "end": 56.792
          },
          {
            "word": "きらきら ",
            "start": 56.792,
            "end": 58.749
          },
          {
            "word": "キラー)",
            "start": 58.749,
            "end": 59.116
          }
        ]
      },
      {
        "verseStart": 59.116,
        "verseEnd": 60.989,
        "words": [
          {
            "word": "(One, ",
            "start": 59.116,
            "end": 59.524
          },
          {
            "word": "two, ",
            "start": 59.524,
            "end": 59.929
          },
          {
            "word": "three, ",
            "start": 59.929,
            "end": 60.133
          },
          {
            "word": "four)",
            "start": 60.133,
            "end": 60.989
          }
        ]
      },
      {
        "verseStart": 60.989,
        "verseEnd": 63.817,
        "words": [
          {
            "word": "きらきら ",
            "start": 60.989,
            "end": 61.573
          },
          {
            "word": "キラー ",
            "start": 61.573,
            "end": 62.103
          },
          {
            "word": "ラッキー ",
            "start": 62.103,
            "end": 62.511
          },
          {
            "word": "ラッキー ",
            "start": 62.511,
            "end": 63.041
          },
          {
            "word": "ラッキー",
            "start": 63.041,
            "end": 63.817
          }
        ]
      },
      {
        "verseStart": 63.817,
        "verseEnd": 66.592,
        "words": [
          {
            "word": "未来 ",
            "start": 63.817,
            "end": 63.98
          },
          {
            "word": "は ",
            "start": 63.98,
            "end": 64.554
          },
          {
            "word": "ほら ",
            "start": 64.554,
            "end": 65.205
          },
          {
            "word": "ハッピー ",
            "start": 65.205,
            "end": 65.572
          },
          {
            "word": "ハッピー ",
            "start": 65.572,
            "end": 66.061
          },
          {
            "word": "ハッピー",
            "start": 66.061,
            "end": 66.592
          }
        ]
      },
      {
        "verseStart": 66.592,
        "verseEnd": 71.191,
        "words": [
          {
            "word": "空 ",
            "start": 66.592,
            "end": 66.959
          },
          {
            "word": "から ",
            "start": 66.959,
            "end": 67.529
          },
          {
            "word": "今 ",
            "start": 67.529,
            "end": 68.512
          },
          {
            "word": "きらきら ",
            "start": 68.512,
            "end": 69.001
          },
          {
            "word": "キラー ",
            "start": 69.001,
            "end": 69.538
          },
          {
            "word": "coming ",
            "start": 69.538,
            "end": 70.819
          },
          {
            "word": "now",
            "start": 70.819,
            "end": 71.191
          }
        ]
      },
      {
        "verseStart": 71.191,
        "verseEnd": 72.587,
        "words": [
          {
            "word": "(One, ",
            "start": 71.191,
            "end": 71.558
          },
          {
            "word": "two, ",
            "start": 71.558,
            "end": 71.926
          },
          {
            "word": "three, ",
            "start": 71.926,
            "end": 72.089
          },
          {
            "word": "four)",
            "start": 72.089,
            "end": 72.587
          }
        ]
      },
      {
        "verseStart": 72.587,
        "verseEnd": 75.833,
        "words": [
          {
            "word": "きらきら ",
            "start": 72.587,
            "end": 72.997
          },
          {
            "word": "キラー ",
            "start": 72.997,
            "end": 73.574
          },
          {
            "word": "ハッピー ",
            "start": 73.574,
            "end": 74.194
          },
          {
            "word": "ハッピー ",
            "start": 74.194,
            "end": 74.935
          },
          {
            "word": "ハッピー",
            "start": 74.935,
            "end": 75.833
          }
        ]
      },
      {
        "verseStart": 75.833,
        "verseEnd": 78.787,
        "words": [
          {
            "word": "未来 ",
            "start": 75.833,
            "end": 75.997
          },
          {
            "word": "は ",
            "start": 75.997,
            "end": 76.499
          },
          {
            "word": "ほら ",
            "start": 76.499,
            "end": 77.033
          },
          {
            "word": "ラッキー ",
            "start": 77.033,
            "end": 77.403
          },
          {
            "word": "ラッキー ",
            "start": 77.403,
            "end": 77.932
          },
          {
            "word": "ラッキー",
            "start": 77.932,
            "end": 78.787
          }
        ]
      },
      {
        "verseStart": 78.787,
        "verseEnd": 84.129,
        "words": [
          {
            "word": "きらきら ",
            "start": 78.787,
            "end": 79.362
          },
          {
            "word": "キラー ",
            "start": 79.362,
            "end": 80.994
          },
          {
            "word": "ドキドキドキ ",
            "start": 80.994,
            "end": 81.441
          },
          {
            "word": "fall ",
            "start": 81.441,
            "end": 81.604
          },
          {
            "word": "in ",
            "start": 81.604,
            "end": 83.436
          },
          {
            "word": "love",
            "start": 83.436,
            "end": 84.129
          }
        ]
      },
      {
        "verseStart": 84.129,
        "verseEnd": 90.055,
        "words": [
          {
            "word": "きらきら ",
            "start": 84.129,
            "end": 84.917
          },
          {
            "word": "キラー ( ",
            "start": 84.917,
            "end": 85.651
          },
          {
            "word": "きらきら ",
            "start": 85.651,
            "end": 89.358
          },
          {
            "word": "キラー)",
            "start": 89.358,
            "end": 90.055
          }
        ]
      },
      {
        "verseStart": 90.055,
        "verseEnd": 94.69,
        "words": [
          {
            "word": "きらきら ",
            "start": 90.055,
            "end": 90.85
          },
          {
            "word": "キラー ( ",
            "start": 90.85,
            "end": 93.873
          },
          {
            "word": "マジカルパワー)",
            "start": 93.873,
            "end": 94.69
          }
        ]
      },
      {
        "verseStart": 94.69,
        "verseEnd": 96.567,
        "words": [
          {
            "word": "かんぜん ",
            "start": 94.69,
            "end": 95.753
          },
          {
            "word": "きらきら ",
            "start": 95.753,
            "end": 96.202
          },
          {
            "word": "キラー",
            "start": 96.202,
            "end": 96.567
          }
        ]
      },
      {
        "verseStart": 96.567,
        "verseEnd": 102.561,
        "words": [
          {
            "word": "L- ",
            "start": 96.567,
            "end": 96.934
          },
          {
            "word": "U- ",
            "start": 96.934,
            "end": 97.303
          },
          {
            "word": "C- ",
            "start": 97.303,
            "end": 99.179
          },
          {
            "word": "K ",
            "start": 99.179,
            "end": 99.544
          },
          {
            "word": "L- ",
            "start": 99.544,
            "end": 99.952
          },
          {
            "word": "U- ",
            "start": 99.952,
            "end": 100.319
          },
          {
            "word": "C- ",
            "start": 100.319,
            "end": 102.235
          },
          {
            "word": "K",
            "start": 102.235,
            "end": 102.561
          }
        ]
      },
      {
        "verseStart": 102.561,
        "verseEnd": 108.806,
        "words": [
          {
            "word": "L- ",
            "start": 102.561,
            "end": 102.969
          },
          {
            "word": "U- ",
            "start": 102.969,
            "end": 103.299
          },
          {
            "word": "C- ",
            "start": 103.299,
            "end": 105.257
          },
          {
            "word": "K ",
            "start": 105.257,
            "end": 105.663
          },
          {
            "word": "L- ",
            "start": 105.663,
            "end": 106.07
          },
          {
            "word": "U- ",
            "start": 106.07,
            "end": 106.438
          },
          {
            "word": "C- ",
            "start": 106.438,
            "end": 108.276
          },
          {
            "word": "K",
            "start": 108.276,
            "end": 108.806
          }
        ]
      },
      {
        "verseStart": 108.806,
        "verseEnd": 114.642,
        "words": [
          {
            "word": "どれ ",
            "start": 108.806,
            "end": 109.503
          },
          {
            "word": "だけ ",
            "start": 109.503,
            "end": 109.991
          },
          {
            "word": "追 ",
            "start": 109.991,
            "end": 110.317
          },
          {
            "word": "い ",
            "start": 110.317,
            "end": 110.521
          },
          {
            "word": "かけ ",
            "start": 110.521,
            "end": 110.725
          },
          {
            "word": "て ",
            "start": 110.725,
            "end": 111.051
          },
          {
            "word": "も ",
            "start": 111.051,
            "end": 111.621
          },
          {
            "word": "ヒント ",
            "start": 111.621,
            "end": 112.601
          },
          {
            "word": "さえ ",
            "start": 112.601,
            "end": 113.05
          },
          {
            "word": "く ",
            "start": 113.05,
            "end": 113.334
          },
          {
            "word": "れ ",
            "start": 113.334,
            "end": 114.274
          },
          {
            "word": "ない",
            "start": 114.274,
            "end": 114.642
          }
        ]
      },
      {
        "verseStart": 114.642,
        "verseEnd": 121.202,
        "words": [
          {
            "word": "お ",
            "start": 114.642,
            "end": 114.886
          },
          {
            "word": "口 ",
            "start": 114.886,
            "end": 115.576
          },
          {
            "word": "を ",
            "start": 115.576,
            "end": 115.944
          },
          {
            "word": "ギュッ ",
            "start": 115.944,
            "end": 116.108
          },
          {
            "word": "と ",
            "start": 116.108,
            "end": 116.312
          },
          {
            "word": "つぐむ ",
            "start": 116.312,
            "end": 116.761
          },
          {
            "word": "の ",
            "start": 116.761,
            "end": 117.086
          },
          {
            "word": "に ",
            "start": 117.086,
            "end": 117.576
          },
          {
            "word": "誰か ",
            "start": 117.576,
            "end": 117.944
          },
          {
            "word": "は ",
            "start": 117.944,
            "end": 118.512
          },
          {
            "word": "わ ",
            "start": 118.512,
            "end": 119.081
          },
          {
            "word": "から ",
            "start": 119.081,
            "end": 120.261
          },
          {
            "word": "ない",
            "start": 120.261,
            "end": 121.202
          }
        ]
      },
      {
        "verseStart": 121.202,
        "verseEnd": 127.669,
        "words": [
          {
            "word": "ああ ",
            "start": 121.202,
            "end": 122.018
          },
          {
            "word": "おんなじ ",
            "start": 122.018,
            "end": 122.18
          },
          {
            "word": "所 ",
            "start": 122.18,
            "end": 123.971
          },
          {
            "word": "に ",
            "start": 123.971,
            "end": 124.582
          },
          {
            "word": "傷 ",
            "start": 124.582,
            "end": 124.992
          },
          {
            "word": "を ",
            "start": 124.992,
            "end": 125.4
          },
          {
            "word": "負 ",
            "start": 125.4,
            "end": 125.684
          },
          {
            "word": "っ ",
            "start": 125.684,
            "end": 125.887
          },
          {
            "word": "た ",
            "start": 125.887,
            "end": 126.389
          },
          {
            "word": "キミ ",
            "start": 126.389,
            "end": 127.008
          },
          {
            "word": "に",
            "start": 127.008,
            "end": 127.669
          }
        ]
      },
      {
        "verseStart": 127.669,
        "verseEnd": 136.294,
        "words": [
          {
            "word": "気付 ",
            "start": 127.669,
            "end": 127.878
          },
          {
            "word": "い ",
            "start": 127.878,
            "end": 128.205
          },
          {
            "word": "て ",
            "start": 128.205,
            "end": 128.897
          },
          {
            "word": "しまう ",
            "start": 128.897,
            "end": 132.121
          },
          {
            "word": "なんて ",
            "start": 132.121,
            "end": 133.712
          },
          {
            "word": "ざわめく ",
            "start": 133.712,
            "end": 135.179
          },
          {
            "word": "心",
            "start": 135.179,
            "end": 136.294
          }
        ]
      },
      {
        "verseStart": 136.294,
        "verseEnd": 143.126,
        "words": [
          {
            "word": "空 ",
            "start": 136.294,
            "end": 136.497
          },
          {
            "word": "を ",
            "start": 136.497,
            "end": 139.268
          },
          {
            "word": "見上げる ( ",
            "start": 139.268,
            "end": 140.841
          },
          {
            "word": "きらきら ",
            "start": 140.841,
            "end": 142.76
          },
          {
            "word": "キラー)",
            "start": 142.76,
            "end": 143.126
          }
        ]
      },
      {
        "verseStart": 143.126,
        "verseEnd": 144.924,
        "words": [
          {
            "word": "(One, ",
            "start": 143.126,
            "end": 143.493
          },
          {
            "word": "two, ",
            "start": 143.493,
            "end": 143.902
          },
          {
            "word": "three, ",
            "start": 143.902,
            "end": 144.106
          },
          {
            "word": "four)",
            "start": 144.106,
            "end": 144.924
          }
        ]
      },
      {
        "verseStart": 144.924,
        "verseEnd": 147.822,
        "words": [
          {
            "word": "きらきら ",
            "start": 144.924,
            "end": 145.495
          },
          {
            "word": "キラー ",
            "start": 145.495,
            "end": 146.066
          },
          {
            "word": "ラッキー ",
            "start": 146.066,
            "end": 146.474
          },
          {
            "word": "ラッキー ",
            "start": 146.474,
            "end": 147.047
          },
          {
            "word": "ラッキー",
            "start": 147.047,
            "end": 147.822
          }
        ]
      },
      {
        "verseStart": 147.822,
        "verseEnd": 150.557,
        "words": [
          {
            "word": "未来 ",
            "start": 147.822,
            "end": 147.985
          },
          {
            "word": "は ",
            "start": 147.985,
            "end": 148.554
          },
          {
            "word": "ほら ",
            "start": 148.554,
            "end": 149.043
          },
          {
            "word": "ハッピー ",
            "start": 149.043,
            "end": 149.451
          },
          {
            "word": "ハッピー ",
            "start": 149.451,
            "end": 149.981
          },
          {
            "word": "ハッピー",
            "start": 149.981,
            "end": 150.557
          }
        ]
      },
      {
        "verseStart": 150.557,
        "verseEnd": 155.127,
        "words": [
          {
            "word": "空 ",
            "start": 150.557,
            "end": 150.923
          },
          {
            "word": "から ",
            "start": 150.923,
            "end": 151.45
          },
          {
            "word": "今 ",
            "start": 151.45,
            "end": 152.429
          },
          {
            "word": "きらきら ",
            "start": 152.429,
            "end": 152.919
          },
          {
            "word": "キラー ",
            "start": 152.919,
            "end": 153.408
          },
          {
            "word": "coming ",
            "start": 153.408,
            "end": 154.76
          },
          {
            "word": "now",
            "start": 154.76,
            "end": 155.127
          }
        ]
      },
      {
        "verseStart": 155.127,
        "verseEnd": 156.907,
        "words": [
          {
            "word": "(One, ",
            "start": 155.127,
            "end": 155.537
          },
          {
            "word": "two, ",
            "start": 155.537,
            "end": 155.906
          },
          {
            "word": "three, ",
            "start": 155.906,
            "end": 156.074
          },
          {
            "word": "four)",
            "start": 156.074,
            "end": 156.907
          }
        ]
      },
      {
        "verseStart": 156.907,
        "verseEnd": 159.82,
        "words": [
          {
            "word": "きらきら ",
            "start": 156.907,
            "end": 157.408
          },
          {
            "word": "キラー ",
            "start": 157.408,
            "end": 157.963
          },
          {
            "word": "ハッピー ",
            "start": 157.963,
            "end": 158.415
          },
          {
            "word": "ハッピー ",
            "start": 158.415,
            "end": 158.916
          },
          {
            "word": "ハッピー",
            "start": 158.916,
            "end": 159.82
          }
        ]
      },
      {
        "verseStart": 159.82,
        "verseEnd": 162.873,
        "words": [
          {
            "word": "未来 ",
            "start": 159.82,
            "end": 159.982
          },
          {
            "word": "は ",
            "start": 159.982,
            "end": 160.55
          },
          {
            "word": "ほら ",
            "start": 160.55,
            "end": 161.161
          },
          {
            "word": "ラッキー ",
            "start": 161.161,
            "end": 161.529
          },
          {
            "word": "ラッキー ",
            "start": 161.529,
            "end": 161.937
          },
          {
            "word": "ラッキー",
            "start": 161.937,
            "end": 162.873
          }
        ]
      },
      {
        "verseStart": 162.873,
        "verseEnd": 168.197,
        "words": [
          {
            "word": "きらきら ",
            "start": 162.873,
            "end": 163.361
          },
          {
            "word": "キラー ",
            "start": 163.361,
            "end": 165.047
          },
          {
            "word": "ドキドキドキ ",
            "start": 165.047,
            "end": 165.454
          },
          {
            "word": "fall ",
            "start": 165.454,
            "end": 165.666
          },
          {
            "word": "in ",
            "start": 165.666,
            "end": 167.462
          },
          {
            "word": "love",
            "start": 167.462,
            "end": 168.197
          }
        ]
      },
      {
        "verseStart": 168.197,
        "verseEnd": 174.258,
        "words": [
          {
            "word": "きらきら ",
            "start": 168.197,
            "end": 168.935
          },
          {
            "word": "キラー ( ",
            "start": 168.935,
            "end": 169.712
          },
          {
            "word": "きらきら ",
            "start": 169.712,
            "end": 173.506
          },
          {
            "word": "キラー)",
            "start": 173.506,
            "end": 174.258
          }
        ]
      },
      {
        "verseStart": 174.258,
        "verseEnd": 178.676,
        "words": [
          {
            "word": "きらきら ",
            "start": 174.258,
            "end": 175.004
          },
          {
            "word": "キラー ( ",
            "start": 175.004,
            "end": 177.934
          },
          {
            "word": "マジカルパワー)",
            "start": 177.934,
            "end": 178.676
          }
        ]
      },
      {
        "verseStart": 178.676,
        "verseEnd": 180.684,
        "words": [
          {
            "word": "かんぜん ",
            "start": 178.676,
            "end": 179.421
          },
          {
            "word": "きらきら ",
            "start": 179.421,
            "end": 180.398
          },
          {
            "word": "キラー",
            "start": 180.398,
            "end": 180.684
          }
        ]
      },
      {
        "verseStart": 180.684,
        "verseEnd": 186.66,
        "words": [
          {
            "word": "L- ",
            "start": 180.684,
            "end": 181.018
          },
          {
            "word": "U- ",
            "start": 181.018,
            "end": 181.395
          },
          {
            "word": "C- ",
            "start": 181.395,
            "end": 183.228
          },
          {
            "word": "K ",
            "start": 183.228,
            "end": 183.599
          },
          {
            "word": "L- ",
            "start": 183.599,
            "end": 183.969
          },
          {
            "word": "U- ",
            "start": 183.969,
            "end": 184.376
          },
          {
            "word": "C- ",
            "start": 184.376,
            "end": 186.332
          },
          {
            "word": "K",
            "start": 186.332,
            "end": 186.66
          }
        ]
      },
      {
        "verseStart": 186.66,
        "verseEnd": 192.905,
        "words": [
          {
            "word": "L- ",
            "start": 186.66,
            "end": 187.028
          },
          {
            "word": "U- ",
            "start": 187.028,
            "end": 187.396
          },
          {
            "word": "C- ",
            "start": 187.396,
            "end": 189.229
          },
          {
            "word": "K ",
            "start": 189.229,
            "end": 189.594
          },
          {
            "word": "L- ",
            "start": 189.594,
            "end": 189.961
          },
          {
            "word": "U- ",
            "start": 189.961,
            "end": 190.368
          },
          {
            "word": "C- ",
            "start": 190.368,
            "end": 192.078
          },
          {
            "word": "K",
            "start": 192.078,
            "end": 192.905
          }
        ]
      },
      {
        "verseStart": 192.905,
        "verseEnd": 195.806,
        "words": [
          {
            "word": "きらきら ",
            "start": 192.905,
            "end": 193.474
          },
          {
            "word": "キラー ",
            "start": 193.474,
            "end": 193.962
          },
          {
            "word": "ラッキー ",
            "start": 193.962,
            "end": 194.373
          },
          {
            "word": "ラッキー ",
            "start": 194.373,
            "end": 194.989
          },
          {
            "word": "ラッキー",
            "start": 194.989,
            "end": 195.806
          }
        ]
      },
      {
        "verseStart": 195.806,
        "verseEnd": 198.577,
        "words": [
          {
            "word": "未来 ",
            "start": 195.806,
            "end": 196.01
          },
          {
            "word": "は ",
            "start": 196.01,
            "end": 196.538
          },
          {
            "word": "ほら ",
            "start": 196.538,
            "end": 197.068
          },
          {
            "word": "ハッピー ",
            "start": 197.068,
            "end": 197.433
          },
          {
            "word": "ハッピー ",
            "start": 197.433,
            "end": 198.044
          },
          {
            "word": "ハッピー",
            "start": 198.044,
            "end": 198.577
          }
        ]
      },
      {
        "verseStart": 198.577,
        "verseEnd": 203.119,
        "words": [
          {
            "word": "空 ",
            "start": 198.577,
            "end": 198.945
          },
          {
            "word": "から ",
            "start": 198.945,
            "end": 199.473
          },
          {
            "word": "今 ",
            "start": 199.473,
            "end": 200.45
          },
          {
            "word": "きらきら ",
            "start": 200.45,
            "end": 200.947
          },
          {
            "word": "キラー ",
            "start": 200.947,
            "end": 201.478
          },
          {
            "word": "coming ",
            "start": 201.478,
            "end": 202.786
          },
          {
            "word": "now",
            "start": 202.786,
            "end": 203.119
          }
        ]
      },
      {
        "verseStart": 203.119,
        "verseEnd": 204.748,
        "words": [
          {
            "word": "(One, ",
            "start": 203.119,
            "end": 203.542
          },
          {
            "word": "two, ",
            "start": 203.542,
            "end": 203.912
          },
          {
            "word": "three, ",
            "start": 203.912,
            "end": 204.077
          },
          {
            "word": "four)",
            "start": 204.077,
            "end": 204.748
          }
        ]
      },
      {
        "verseStart": 204.748,
        "verseEnd": 207.789,
        "words": [
          {
            "word": "きらきら ",
            "start": 204.748,
            "end": 205.371
          },
          {
            "word": "キラー ",
            "start": 205.371,
            "end": 205.993
          },
          {
            "word": "ハッピー ",
            "start": 205.993,
            "end": 206.4
          },
          {
            "word": "ハッピー ",
            "start": 206.4,
            "end": 206.89
          },
          {
            "word": "ハッピー",
            "start": 206.89,
            "end": 207.789
          }
        ]
      },
      {
        "verseStart": 207.789,
        "verseEnd": 210.89,
        "words": [
          {
            "word": "未来 ",
            "start": 207.789,
            "end": 207.998
          },
          {
            "word": "は ",
            "start": 207.998,
            "end": 208.527
          },
          {
            "word": "ほら ",
            "start": 208.527,
            "end": 209.057
          },
          {
            "word": "ラッキー ",
            "start": 209.057,
            "end": 209.422
          },
          {
            "word": "ラッキー ",
            "start": 209.422,
            "end": 209.952
          },
          {
            "word": "ラッキー",
            "start": 209.952,
            "end": 210.89
          }
        ]
      },
      {
        "verseStart": 210.89,
        "verseEnd": 215.841,
        "words": [
          {
            "word": "きらきら ",
            "start": 210.89,
            "end": 211.378
          },
          {
            "word": "キラー ",
            "start": 211.378,
            "end": 212.931
          },
          {
            "word": "ドキドキドキ ",
            "start": 212.931,
            "end": 213.461
          },
          {
            "word": "fall ",
            "start": 213.461,
            "end": 213.631
          },
          {
            "word": "in ",
            "start": 213.631,
            "end": 215.466
          },
          {
            "word": "love",
            "start": 215.466,
            "end": 215.841
          }
        ]
      },
      {
        "verseStart": 215.841,
        "verseEnd": 222.167,
        "words": [
          {
            "word": "きらきら ",
            "start": 215.841,
            "end": 217.343
          },
          {
            "word": "キラー ( ",
            "start": 217.343,
            "end": 217.593
          },
          {
            "word": "きらきら ",
            "start": 217.593,
            "end": 221.506
          },
          {
            "word": "キラー)",
            "start": 221.506,
            "end": 222.167
          }
        ]
      },
      {
        "verseStart": 222.167,
        "verseEnd": 226.694,
        "words": [
          {
            "word": "きらきら ",
            "start": 222.167,
            "end": 222.901
          },
          {
            "word": "キラー ( ",
            "start": 222.901,
            "end": 225.912
          },
          {
            "word": "マジカルパワー)",
            "start": 225.912,
            "end": 226.694
          }
        ]
      },
      {
        "verseStart": 226.694,
        "verseEnd": 228.571,
        "words": [
          {
            "word": "かんぜん ",
            "start": 226.694,
            "end": 227.43
          },
          {
            "word": "きらきら ",
            "start": 227.43,
            "end": 228.205
          },
          {
            "word": "キラー",
            "start": 228.205,
            "end": 228.571
          }
        ]
      },
      {
        "verseStart": 228.571,
        "verseEnd": 234.66,
        "words": [
          {
            "word": "L- ",
            "start": 228.571,
            "end": 228.981
          },
          {
            "word": "U- ",
            "start": 228.981,
            "end": 229.39
          },
          {
            "word": "C- ",
            "start": 229.39,
            "end": 231.221
          },
          {
            "word": "K ",
            "start": 231.221,
            "end": 231.587
          },
          {
            "word": "L- ",
            "start": 231.587,
            "end": 231.994
          },
          {
            "word": "U- ",
            "start": 231.994,
            "end": 232.404
          },
          {
            "word": "C- ",
            "start": 232.404,
            "end": 234.294
          },
          {
            "word": "K",
            "start": 234.294,
            "end": 234.66
          }
        ]
      },
      {
        "verseStart": 234.66,
        "verseEnd": 240.661,
        "words": [
          {
            "word": "L- ",
            "start": 234.66,
            "end": 235.069
          },
          {
            "word": "U- ",
            "start": 235.069,
            "end": 235.436
          },
          {
            "word": "C- ",
            "start": 235.436,
            "end": 237.318
          },
          {
            "word": "K ",
            "start": 237.318,
            "end": 237.647
          },
          {
            "word": "L- ",
            "start": 237.647,
            "end": 238.013
          },
          {
            "word": "U- ",
            "start": 238.013,
            "end": 238.42
          },
          {
            "word": "C- ",
            "start": 238.42,
            "end": 240.253
          },
          {
            "word": "K",
            "start": 240.253,
            "end": 240.661
          }
        ]
      },
      {
        "verseStart": 240.661,
        "verseEnd": 246.619,
        "words": [
          {
            "word": "L- ",
            "start": 240.661,
            "end": 241.028
          },
          {
            "word": "U- ",
            "start": 241.028,
            "end": 241.398
          },
          {
            "word": "C- ",
            "start": 241.398,
            "end": 243.271
          },
          {
            "word": "K ",
            "start": 243.271,
            "end": 243.678
          },
          {
            "word": "L- ",
            "start": 243.678,
            "end": 244.044
          },
          {
            "word": "U- ",
            "start": 244.044,
            "end": 244.411
          },
          {
            "word": "C- ",
            "start": 244.411,
            "end": 246.208
          },
          {
            "word": "K",
            "start": 246.208,
            "end": 246.619
          }
        ]
      },
      {
        "verseStart": 246.619,
        "verseEnd": 248.04,
        "words": [
          {
            "word": "L- ",
            "start": 246.619,
            "end": 247.024
          },
          {
            "word": "U- ",
            "start": 247.024,
            "end": 247.39
          },
          {
            "word": "C- ",
            "start": 247.39,
            "end": 249.278
          },
          {
            "word": "K ",
            "start": 249.278,
            "end": 249.685
          },
          {
            "word": "L- ",
            "start": 249.685,
            "end": 250.051
          },
          {
            "word": "U- ",
            "start": 250.051,
            "end": 250.376
          },
          {
            "word": "C- ",
            "start": 250.376,
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
