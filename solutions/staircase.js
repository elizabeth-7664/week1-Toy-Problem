function steps(n) {
    for (let i = 1; i <= n; i++) {
        let step = "#".repeat(i); // Repeat '#' i times
        console.log(step);
    }
}

// Test the function
steps(3);
