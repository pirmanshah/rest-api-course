const _ = require('lodash');
const natural = require('natural');
const { removeStopwords, ind } = require('stopword');

const data = require('./data');

// Fungsi untuk menghilangkan tanda baca dari token
function removePunctuation(text) {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

// Fungsi untuk memisahkan teks menjadi token
function tokenizeText(text) {
  return text.split(' ').map((token) => removePunctuation(token));
}

// Fungsi untuk melakukan stemming
function performStemming(tokens) {
  const stemmer = natural.PorterStemmer;
  return tokens.map((token) => stemmer.stem(token));
}

const tfData = {};

data.forEach((course) => {
  const courseKey = `kursus${course.id}`;
  Object.keys(course).forEach((key) => {
    if (['judul', 'topic', 'kategori', 'level'].includes(key) && typeof course[key] === 'string' && course[key].trim() !== '') {
      const tokens = tokenizeText(course[key].toLowerCase());
      const filteredTokens = removeStopwords(tokens, ind); // Menghapus stopwords
      const stemmedTokens = performStemming(filteredTokens); // Melakukan stemming

      stemmedTokens.forEach((token) => {
        if (!tfData[token]) {
          tfData[token] = { data: {} };
        }
        if (!tfData[token].data[courseKey]) {
          tfData[token].data[courseKey] = 1;
        } else {
          tfData[token].data[courseKey]++;
        }
      });
    }
  });
});

// Menambahkan kata yang belum ada dalam tfData dengan nilai awal 0
Object.keys(tfData).forEach((token) => {
  data.forEach((_, index) => {
    const courseKey = `kursus${index + 1}`;
    if (!tfData[token].data[courseKey]) {
      tfData[token].data[courseKey] = 0;
    }
  });
});

const tfResult = _.map(tfData, (value, kata) => {
  const df = Object.keys(value.data).filter((kursus) => value.data[kursus] > 0).length; // Menghitung DF
  const idf = Math.log10(data.length / df).toFixed(8); // Menghitung IDF

  const tfIdf = {};
  Object.keys(value.data).forEach((kursus) => {
    tfIdf[kursus] = (value.data[kursus] * idf).toFixed(6); // Menghitung TF-IDF
  });

  return {
    kata,
    data: value.data,
    df,
    idf,
    'tf-idf': tfIdf,
  };
});

const kursusNames = ['kursus1', 'kursus2', 'kursus3', 'kursus4', 'kursus5', 'kursus6'];

// Initialize empty arrays to store TF-IDF values for each kursus
const tfidfData = {};

for (const kursus of kursusNames) {
  const tfidfValues = [];

  // Loop through the data and extract TF-IDF values for each kursus
  for (const item of tfResult) {
    tfidfValues.push(item['data'][kursus]);
  }

  tfidfData[kursus] = tfidfValues;
}

// Calculate total kuadrat for kursus6 (minat pengguna)
const kursus6Kuadrat = tfidfData['kursus6'].map((value) => value * value);
const totalKursus6Kuadrat = kursus6Kuadrat.reduce((sum, value) => sum + value, 0);

// Initialize variable to store similarity results
const similarityResults = {};

// Calculate similarity between kursus6 (minat pengguna) and other kursus
for (const kursus of kursusNames) {
  if (kursus !== 'kursus6') {
    const intermediateResults = [];

    // Loop through the data and calculate the intermediate results
    for (let i = 0; i < tfResult.length; i++) {
      const result = tfidfData[kursus][i] * tfidfData['kursus6'][i];
      intermediateResults.push(result);
    }

    // Sum the intermediate results
    const sumOfIntermediateResults = intermediateResults.reduce((sum, value) => sum + value, 0);

    const kursusKuadrat = [];

    // Loop through the data and calculate the intermediate results for kuadrat
    for (let i = 0; i < tfResult.length; i++) {
      const result = tfidfData[kursus][i] * tfidfData[kursus][i];
      kursusKuadrat.push(result);
    }

    const totalKursusKuadrat = kursusKuadrat.reduce((sum, value) => sum + value, 0);
    const squareRoot = Math.sqrt(totalKursusKuadrat);
    const square = Math.sqrt(totalKursus6Kuadrat);

    const similarity = sumOfIntermediateResults / (squareRoot * square);
    similarityResults[kursus] = similarity;
  }
}

console.log('Similarity Results:', similarityResults);
