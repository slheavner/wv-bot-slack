const results = [
  {
    faceAnnotations: [],
    landmarkAnnotations: [],
    logoAnnotations: [],
    labelAnnotations: [],
    textAnnotations: [],
    safeSearchAnnotation: null,
    imagePropertiesAnnotation: null,
    error: {
      details: [],
      code: 3,
      message: 'Unsupported URI protocol specified: [object Object].',
    },
    cropHintsAnnotation: null,
    fullTextAnnotation: null,
    webDetection: null,
    context: null,
  },
]

const good = [
  {
    faceAnnotations: [],
    landmarkAnnotations: [],
    logoAnnotations: [],
    labelAnnotations: [],
    textAnnotations: [
      {
        locations: [],
        properties: [],
        mid: '',
        locale: 'en',
        description: "I CAN'T\nHEAR YOU,\nCOUNTRY ROADS\nIS PLAYING\n",
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [{ x: 45, y: 28 }, { x: 533, y: 28 }, { x: 533, y: 253 }, { x: 45, y: 253 }],
          normalizedVertices: [],
        },
      },
      {
        locations: [],
        properties: [],
        mid: '',
        locale: '',
        description: 'I',
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [{ x: 200, y: 29 }, { x: 210, y: 29 }, { x: 210, y: 74 }, { x: 200, y: 74 }],
          normalizedVertices: [],
        },
      },
      {
        locations: [],
        properties: [],
        mid: '',
        locale: '',
        description: "CAN'T",
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [{ x: 231, y: 29 }, { x: 397, y: 28 }, { x: 397, y: 74 }, { x: 231, y: 75 }],
          normalizedVertices: [],
        },
      },
      {
        locations: [],
        properties: [],
        mid: '',
        locale: '',
        description: 'HEAR',
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [{ x: 147, y: 86 }, { x: 297, y: 86 }, { x: 297, y: 130 }, { x: 147, y: 130 }],
          normalizedVertices: [],
        },
      },
      {
        locations: [],
        properties: [],
        mid: '',
        locale: '',
        description: 'YOU,',
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [{ x: 315, y: 86 }, { x: 451, y: 86 }, { x: 451, y: 138 }, { x: 315, y: 138 }],
          normalizedVertices: [],
        },
      },
      {
        locations: [],
        properties: [],
        mid: '',
        locale: '',
        description: 'COUNTRY',
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [{ x: 45, y: 147 }, { x: 321, y: 147 }, { x: 321, y: 192 }, { x: 45, y: 192 }],
          normalizedVertices: [],
        },
      },
      {
        locations: [],
        properties: [],
        mid: '',
        locale: '',
        description: 'ROADS',
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [
            { x: 340, y: 147 },
            { x: 533, y: 147 },
            { x: 533, y: 192 },
            { x: 340, y: 192 },
          ],
          normalizedVertices: [],
        },
      },
      {
        locations: [],
        properties: [],
        mid: '',
        locale: '',
        description: 'IS',
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [
            { x: 148, y: 208 },
            { x: 185, y: 208 },
            { x: 185, y: 253 },
            { x: 148, y: 253 },
          ],
          normalizedVertices: [],
        },
      },
      {
        locations: [],
        properties: [],
        mid: '',
        locale: '',
        description: 'PLAYING',
        score: 0,
        confidence: 0,
        topicality: 0,
        boundingPoly: {
          vertices: [
            { x: 209, y: 208 },
            { x: 452, y: 208 },
            { x: 452, y: 253 },
            { x: 209, y: 253 },
          ],
          normalizedVertices: [],
        },
      },
    ],
    safeSearchAnnotation: null,
    imagePropertiesAnnotation: null,
    error: null,
    cropHintsAnnotation: null,
    fullTextAnnotation: {
      pages: [
        {
          blocks: [
            {
              paragraphs: [
                {
                  words: [
                    {
                      symbols: [
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: { type: 'SPACE', isPrefix: false },
                          },
                          boundingBox: {
                            vertices: [
                              { x: 200, y: 29 },
                              { x: 210, y: 29 },
                              { x: 210, y: 74 },
                              { x: 200, y: 74 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'I',
                          confidence: 0,
                        },
                      ],
                      property: {
                        detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                        detectedBreak: null,
                      },
                      boundingBox: {
                        vertices: [
                          { x: 200, y: 29 },
                          { x: 210, y: 29 },
                          { x: 210, y: 74 },
                          { x: 200, y: 74 },
                        ],
                        normalizedVertices: [],
                      },
                      confidence: 0,
                    },
                    {
                      symbols: [
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 231, y: 29 },
                              { x: 265, y: 29 },
                              { x: 265, y: 74 },
                              { x: 231, y: 74 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'C',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 268, y: 29 },
                              { x: 305, y: 29 },
                              { x: 305, y: 73 },
                              { x: 268, y: 73 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'A',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 308, y: 29 },
                              { x: 334, y: 29 },
                              { x: 334, y: 73 },
                              { x: 308, y: 73 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'N',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 335, y: 29 },
                              { x: 361, y: 29 },
                              { x: 361, y: 73 },
                              { x: 335, y: 73 },
                            ],
                            normalizedVertices: [],
                          },
                          text: "'",
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: { type: 'EOL_SURE_SPACE', isPrefix: false },
                          },
                          boundingBox: {
                            vertices: [
                              { x: 363, y: 29 },
                              { x: 397, y: 29 },
                              { x: 397, y: 74 },
                              { x: 363, y: 74 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'T',
                          confidence: 0,
                        },
                      ],
                      property: {
                        detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                        detectedBreak: null,
                      },
                      boundingBox: {
                        vertices: [
                          { x: 231, y: 29 },
                          { x: 397, y: 28 },
                          { x: 397, y: 74 },
                          { x: 231, y: 75 },
                        ],
                        normalizedVertices: [],
                      },
                      confidence: 0,
                    },
                    {
                      symbols: [
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 147, y: 86 },
                              { x: 183, y: 86 },
                              { x: 183, y: 130 },
                              { x: 147, y: 130 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'H',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 190, y: 86 },
                              { x: 219, y: 86 },
                              { x: 219, y: 130 },
                              { x: 190, y: 130 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'E',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 221, y: 86 },
                              { x: 259, y: 86 },
                              { x: 259, y: 130 },
                              { x: 221, y: 130 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'A',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: { type: 'SPACE', isPrefix: false },
                          },
                          boundingBox: {
                            vertices: [
                              { x: 264, y: 86 },
                              { x: 297, y: 86 },
                              { x: 297, y: 130 },
                              { x: 264, y: 130 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'R',
                          confidence: 0,
                        },
                      ],
                      property: {
                        detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                        detectedBreak: null,
                      },
                      boundingBox: {
                        vertices: [
                          { x: 147, y: 86 },
                          { x: 297, y: 86 },
                          { x: 297, y: 130 },
                          { x: 147, y: 130 },
                        ],
                        normalizedVertices: [],
                      },
                      confidence: 0,
                    },
                    {
                      symbols: [
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 315, y: 86 },
                              { x: 353, y: 86 },
                              { x: 353, y: 130 },
                              { x: 315, y: 130 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'Y',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 356, y: 86 },
                              { x: 394, y: 86 },
                              { x: 394, y: 131 },
                              { x: 356, y: 131 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'O',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 399, y: 86 },
                              { x: 436, y: 86 },
                              { x: 436, y: 131 },
                              { x: 399, y: 131 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'U',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: { type: 'EOL_SURE_SPACE', isPrefix: false },
                          },
                          boundingBox: {
                            vertices: [
                              { x: 440, y: 121 },
                              { x: 451, y: 121 },
                              { x: 451, y: 138 },
                              { x: 440, y: 138 },
                            ],
                            normalizedVertices: [],
                          },
                          text: ',',
                          confidence: 0,
                        },
                      ],
                      property: {
                        detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                        detectedBreak: null,
                      },
                      boundingBox: {
                        vertices: [
                          { x: 315, y: 86 },
                          { x: 451, y: 86 },
                          { x: 451, y: 138 },
                          { x: 315, y: 138 },
                        ],
                        normalizedVertices: [],
                      },
                      confidence: 0,
                    },
                    {
                      symbols: [
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 45, y: 147 },
                              { x: 79, y: 147 },
                              { x: 79, y: 192 },
                              { x: 45, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'C',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 82, y: 147 },
                              { x: 121, y: 147 },
                              { x: 121, y: 192 },
                              { x: 82, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'O',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 125, y: 147 },
                              { x: 162, y: 147 },
                              { x: 162, y: 192 },
                              { x: 125, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'U',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 168, y: 147 },
                              { x: 205, y: 147 },
                              { x: 205, y: 192 },
                              { x: 168, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'N',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 208, y: 147 },
                              { x: 243, y: 147 },
                              { x: 243, y: 192 },
                              { x: 208, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'T',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 247, y: 147 },
                              { x: 281, y: 147 },
                              { x: 281, y: 192 },
                              { x: 247, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'R',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: { type: 'SPACE', isPrefix: false },
                          },
                          boundingBox: {
                            vertices: [
                              { x: 283, y: 147 },
                              { x: 321, y: 147 },
                              { x: 321, y: 192 },
                              { x: 283, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'Y',
                          confidence: 0,
                        },
                      ],
                      property: {
                        detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                        detectedBreak: null,
                      },
                      boundingBox: {
                        vertices: [
                          { x: 45, y: 147 },
                          { x: 321, y: 147 },
                          { x: 321, y: 192 },
                          { x: 45, y: 192 },
                        ],
                        normalizedVertices: [],
                      },
                      confidence: 0,
                    },
                    {
                      symbols: [
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 340, y: 147 },
                              { x: 374, y: 147 },
                              { x: 374, y: 192 },
                              { x: 340, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'R',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 378, y: 147 },
                              { x: 415, y: 147 },
                              { x: 415, y: 192 },
                              { x: 378, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'O',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 418, y: 147 },
                              { x: 457, y: 147 },
                              { x: 457, y: 192 },
                              { x: 418, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'A',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 460, y: 147 },
                              { x: 495, y: 147 },
                              { x: 495, y: 192 },
                              { x: 460, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'D',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: { type: 'EOL_SURE_SPACE', isPrefix: false },
                          },
                          boundingBox: {
                            vertices: [
                              { x: 499, y: 147 },
                              { x: 533, y: 147 },
                              { x: 533, y: 192 },
                              { x: 499, y: 192 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'S',
                          confidence: 0,
                        },
                      ],
                      property: {
                        detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                        detectedBreak: null,
                      },
                      boundingBox: {
                        vertices: [
                          { x: 340, y: 147 },
                          { x: 533, y: 147 },
                          { x: 533, y: 192 },
                          { x: 340, y: 192 },
                        ],
                        normalizedVertices: [],
                      },
                      confidence: 0,
                    },
                    {
                      symbols: [
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 148, y: 208 },
                              { x: 153, y: 208 },
                              { x: 153, y: 253 },
                              { x: 148, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'I',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: { type: 'SPACE', isPrefix: false },
                          },
                          boundingBox: {
                            vertices: [
                              { x: 154, y: 208 },
                              { x: 185, y: 208 },
                              { x: 185, y: 253 },
                              { x: 154, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'S',
                          confidence: 0,
                        },
                      ],
                      property: {
                        detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                        detectedBreak: null,
                      },
                      boundingBox: {
                        vertices: [
                          { x: 148, y: 208 },
                          { x: 185, y: 208 },
                          { x: 185, y: 253 },
                          { x: 148, y: 253 },
                        ],
                        normalizedVertices: [],
                      },
                      confidence: 0,
                    },
                    {
                      symbols: [
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 209, y: 208 },
                              { x: 240, y: 208 },
                              { x: 240, y: 253 },
                              { x: 209, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'P',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 241, y: 208 },
                              { x: 271, y: 208 },
                              { x: 271, y: 253 },
                              { x: 241, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'L',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 272, y: 208 },
                              { x: 311, y: 208 },
                              { x: 311, y: 253 },
                              { x: 272, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'A',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 312, y: 208 },
                              { x: 350, y: 208 },
                              { x: 350, y: 253 },
                              { x: 312, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'Y',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 351, y: 208 },
                              { x: 373, y: 208 },
                              { x: 373, y: 253 },
                              { x: 351, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'I',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: null,
                          },
                          boundingBox: {
                            vertices: [
                              { x: 374, y: 208 },
                              { x: 413, y: 208 },
                              { x: 413, y: 253 },
                              { x: 374, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'N',
                          confidence: 0,
                        },
                        {
                          property: {
                            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                            detectedBreak: { type: 'EOL_SURE_SPACE', isPrefix: false },
                          },
                          boundingBox: {
                            vertices: [
                              { x: 414, y: 208 },
                              { x: 452, y: 208 },
                              { x: 452, y: 253 },
                              { x: 414, y: 253 },
                            ],
                            normalizedVertices: [],
                          },
                          text: 'G',
                          confidence: 0,
                        },
                      ],
                      property: {
                        detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                        detectedBreak: null,
                      },
                      boundingBox: {
                        vertices: [
                          { x: 209, y: 208 },
                          { x: 452, y: 208 },
                          { x: 452, y: 253 },
                          { x: 209, y: 253 },
                        ],
                        normalizedVertices: [],
                      },
                      confidence: 0,
                    },
                  ],
                  property: {
                    detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                    detectedBreak: null,
                  },
                  boundingBox: {
                    vertices: [
                      { x: 45, y: 28 },
                      { x: 533, y: 28 },
                      { x: 533, y: 253 },
                      { x: 45, y: 253 },
                    ],
                    normalizedVertices: [],
                  },
                  confidence: 0,
                },
              ],
              property: {
                detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
                detectedBreak: null,
              },
              boundingBox: {
                vertices: [
                  { x: 45, y: 28 },
                  { x: 533, y: 28 },
                  { x: 533, y: 253 },
                  { x: 45, y: 253 },
                ],
                normalizedVertices: [],
              },
              blockType: 'TEXT',
              confidence: 0,
            },
          ],
          property: {
            detectedLanguages: [{ languageCode: 'en', confidence: 0 }],
            detectedBreak: null,
          },
          width: 600,
          height: 395,
          confidence: 0,
        },
      ],
      text: "I CAN'T\nHEAR YOU,\nCOUNTRY ROADS\nIS PLAYING\n",
    },
    webDetection: null,
    context: null,
  },
]
