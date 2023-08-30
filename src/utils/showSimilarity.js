const _ = require('lodash');
const natural = require('natural');
const { removeStopwords, ind } = require('stopword');

function removePunctuation(text) {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function tokenizeText(text) {
  return text.split(' ').map((token) => removePunctuation(token));
}

function performStemming(tokens) {
  const stemmer = natural.PorterStemmer;
  return tokens.map((token) => stemmer.stem(token));
}

function showSimilarity(data) {
  const tfData = {};

  data.forEach((course, index) => {
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
    data.forEach((_) => {
      const courseKey = `kursus${_.id}`;
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

  // Initialize empty arrays to store TF-IDF values for each kursus
  const kursusNames = data.map((course) => `kursus${course.id}`);
  const tfidfData = {};

  for (const kursus of kursusNames) {
    const tfidfValues = [];

    // Loop through the data and extract TF-IDF values for each kursus
    for (const item of tfResult) {
      tfidfValues.push(item['data'][kursus]);
    }

    tfidfData[kursus] = tfidfValues;
  }

  // Calculate total kuadrat for kursus0 (minat pengguna)
  const kursus0Kuadrat = tfidfData['kursus0'].map((value) => value * value);
  const totalKursus0Kuadrat = kursus0Kuadrat.reduce((sum, value) => sum + value, 0);

  // Initialize variable to store similarity results
  const similarityResults = {};

  // Calculate similarity between kursus0 (minat pengguna) and other kursus
  for (const kursus of kursusNames) {
    if (kursus !== 'kursus0') {
      const intermediateResults = [];

      // Loop through the data and calculate the intermediate results
      for (let i = 0; i < tfResult.length; i++) {
        const result = tfidfData[kursus][i] * tfidfData['kursus0'][i];
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
      const square = Math.sqrt(totalKursus0Kuadrat);

      const similarity = sumOfIntermediateResults / (squareRoot * square);
      similarityResults[kursus] = similarity;
    }
  }

  // Membuat array dari objek similarityData
  const similarityArray = Object.keys(similarityResults).map((kursus) => ({ kursus, similarity: similarityResults[kursus] }));

  // Mengurutkan array berdasarkan nilai similarity secara menurun
  similarityArray.sort((a, b) => b.similarity - a.similarity);

  // Mengubah format objek dalam array dan menambahkan label sesuai kriteria
  const finalResult = similarityArray.map((item) => {
    const similarity = item.similarity;
    let label = '';

    if (similarity >= 0.3 && similarity <= 1) {
      label = 'Relevan';
    } else if (similarity >= 0.1 && similarity < 0.3) {
      label = 'Recomended';
    } else if (similarity >= 0 && similarity < 0.1) {
      label = 'Not Recomended';
    }

    return {
      course: parseInt(item.kursus.replace('kursus', '')),
      similarity: item.similarity,
      label: label,
    };
  });

  return {
    tfResult,
    finalResult,
  };
}

module.exports = showSimilarity;
