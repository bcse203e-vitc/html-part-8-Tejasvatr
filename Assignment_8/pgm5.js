function countWords() {
    let text = document.getElementById("text").value.toLowerCase(),
        words = text.match(/\b\w+\b/g) || [],
        count = document.getElementById("count"),
        repeats = document.getElementById("repeats"),
        freq = {};

    words.forEach(w => freq[w] = (freq[w] || 0) + 1);
    count.textContent = words.length;
    
    repeats.textContent = Object.keys(freq).filter(w => freq[w] > 1).join(", ") || "None";
}
