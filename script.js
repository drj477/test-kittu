document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Correct answers
    const answers = {
        // History: Chapter 1
        h1q1: 'b', h1q2: 'b', h1q3: 'b', h1q4: 'a', h1q5: 'a',
        h1q6: 'c', h1q7: 'b', h1q8: 'c', h1q9: 'b', h1q10: 'b',
        // History: Chapter 2
        h2q1: 'b', h2q2: 'b', h2q3: 'b', h2q4: 'a', h2q5: 'a',
        h2q6: 'c', h2q7: 'c', h2q8: 'c', h2q9: 'b', h2q10: 'b',
        // History: Chapter 3
        h3q1: 'c', h3q2: 'a', h3q3: 'b', h3q4: 'd', h3q5: 'b',
        h3q6: 'b', h3q7: 'c', h3q8: 'b', h3q9: 'a', h3q10: 'a',
        // Geography: Chapter 1
        g1q1: 'a', g1q2: 'b', g1q3: 'b', g1q4: 'a', g1q5: 'b',
        g1q6: 'b', g1q7: 'b', g1q8: 'c', g1q9: 'b', g1q10: 'c',
        // Geography: Chapter 2
        g2q1: 'b', g2q2: 'b', g2q3: 'a', g2q4: 'b', g2q5: 'a',
        g2q6: 'c', g2q7: 'b', g2q8: 'a', g2q9: 'b', g2q10: 'a',
        // Polity: Chapter 1
        p1q1: 'a', p1q2: 'b', p1q3: 'b', p1q4: 'd', p1q5: 'b',
        p1q6: 'b', p1q7: 'c', p1q8: 'a', p1q9: 'b', p1q10: 'b'
    };

    // Calculate scores
    let h1Score = 0, h2Score = 0, h3Score = 0, g1Score = 0, g2Score = 0, p1Score = 0;
    const formData = new FormData(this);

    for (let i = 1; i <= 10; i++) {
        if (formData.get(`h1q${i}`) === answers[`h1q${i}`]) h1Score++;
        if (formData.get(`h2q${i}`) === answers[`h2q${i}`]) h2Score++;
        if (formData.get(`h3q${i}`) === answers[`h3q${i}`]) h3Score++;
        if (formData.get(`g1q${i}`) === answers[`g1q${i}`]) g1Score++;
        if (formData.get(`g2q${i}`) === answers[`g2q${i}`]) g2Score++;
        if (formData.get(`p1q${i}`) === answers[`p1q${i}`]) p1Score++;
    }

    const historyScore = h1Score + h2Score + h3Score;
    const geographyScore = g1Score + g2Score;
    const polityScore = p1Score;
    const totalScore = historyScore + geographyScore + polityScore;

    // Display results
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('h1Score').textContent = h1Score;
    document.getElementById('h2Score').textContent = h2Score;
    document.getElementById('h3Score').textContent = h3Score;
    document.getElementById('historyScore').textContent = historyScore;
    document.getElementById('g1Score').textContent = g1Score;
    document.getElementById('g2Score').textContent = g2Score;
    document.getElementById('geographyScore').textContent = geographyScore;
    document.getElementById('p1Score').textContent = p1Score;
    document.getElementById('polityScore').textContent = polityScore;
    document.getElementById('results').style.display = 'block';
});