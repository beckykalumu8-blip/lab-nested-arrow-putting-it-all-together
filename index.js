function createLoginTracker(userInfo) {
    // Initialize login tracking
    let attemptCount = 0;
    const maxAttempts = 3;

    console.log(`Login tracker created for user: ${userInfo.username}`)
    console.log(`Maximum allowed attempts: ${maxAttempts}`)

    return (eneteredPassword) => {
        attemptCount++;

        console.log(`\n---Login Attempt ${attempyCount}---`);
        console.log(`Entered password: "${enteredPassword}"`);
        console.log(`Expected password: "${userInfo.password}"`);
        console.log(`Current password: ${attemptedCount}"`);

        if (attemptCount > maxAttempts) {
            console.log(`STATUS: Account locked - too many attempts`);
            return"Account locked";
        }
        if (eneterdPassword === userInfo.password) {
            console.log(`STATUS: Password match - login successful`);
            return `Welcome. ${userInfo.username}!`;
        } else {
            const remainingAttemots = maxAttempys-attemptCount;
            console.log(`STATUS: Password mismatch - ${remainingAttempts} attempt(s) remaining`);
            return `Incorrect password. ${remainingAttempts} attempt(s) remaining.`;
        }
    };
}

// Test Case 1 : Successful login within login attempts
console.log(`===TEST CASE 1: Successful Login ===`);
 const user1 = {
    username: "user1",
    password: "password123"
 };

 const tracker1 = createdLoginTracker(user1);
 console.log(tracker1("wrong")); //Attempt 1 : failed
 console.log(tracker1("password123")); // Attempts 2 : successful

 //Test Case 2 : Account lock after 3 failed attempts
 console.log(`\n=== TEST CASE 2 : Account lock ===`);
 const user2 = {
    username: "user2",
    password: "secret"
 };
 const tracker2 = createLoginTracker(user2);
 console.log(tracker2('wrong1'));
 console.log(tracker2("wrong2"));
 console.log(tracker2("wrong3"));
 console.log(tracker2("secret"));

 // Test Case 3 : Successful login on firstattempt
 console.log(`n=== TEST CASE 3 : First Attempt Success ===`);
 const user3 = {
    username: "user3",
    password: "hello"
 };
 const tracker3 = createLoginTracker(user3);
 console.log(tracker3("hello"));
 console.log(tracker3("anything"));

 // Test Case 4 : Edge case - exact maximum attempts
 console.log(`\n=== TEST CASE 4: Exact maximum Attempts===`);
 const user4 = {
    username: "user4",
    password: "test"
 };
 const tracker4 = createLoginTracker(user4);
 console.log(tracker4("wrong"));
 console.log(tracker4("wrong"));
 console.log(tracker4("test"))