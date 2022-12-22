/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {

    // result object that will be outputted from this function
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // looping through each book in input object
    scannedTextObj.forEach(book => {
        // storing relevant info
        const bookISBN = book.ISBN 
        
        // looping through each content text in the specific boook
        book.Content.forEach(entry => {
            // checking if the search term is found in text
            if (entry.Text.includes(searchTerm)) {
                // adding the specific text details to the results object
                result.Results.push({
                    "ISBN": bookISBN,
                    "Page": entry.Page,
                    "Line": entry.Line,
                })
            }
        })
    })
    
    // once all books and text entries are scanned, return result object
    return result; 
}


false


// ~~~~~~~~~~~~~~ TEST CASES (INPUT) ~~~~~~~~~~~~~~~~~~~~

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const test3In = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  the dark-" // changed "The" -> "the"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const test4In = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-" 
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was the profound; and however good the Canadian\'s" // changed "then" -> "the"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const test5In = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-" 
            },
        ],
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea Book 2", 
        "ISBN": "9780000528532",
        "Content": [
            {
                "Page": 21,
                "Line": 3,
                "Text": "now simply went on by her own momentum.  The light-" 
            },
        ],
    }
]
 
const test6In = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-" 
            },
        ],
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea Book 2", 
        "ISBN": "9780000528532",
        "Content": [
            {
                "Page": 21,
                "Line": 3,
                "Text": "now simply went on by her own momentum.  The light-" 
            },
        ],
    }
]

const test7In = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good then Canadian\'s" // changed "the" -> "then"
            },
        ],
    }
]

const test8In = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good then Canadian\'s" // changed "the" -> "then"
            },
        ],
    }
]





// ~~~~~~~~~~~~~~ TEST CASES (OUTPUT) ~~~~~~~~~~~~~~~~~~~~

/** Example output object */

const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const test3Out = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const test4Out = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const test5Out = {
    "SearchTerm": "now",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        },
        {
            "ISBN": "9780000528532",
            "Page": 21,
            "Line": 3
        }
    ]
}

const test6Out = {
    "SearchTerm": "Twenty",
    "Results": []
}

const test7Out = {
    "SearchTerm": "these",
    "Results": []
}

const test8Out = {
    "SearchTerm": "Canadian's",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
    ]
}





/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Testing to make sure two matches in the same book returns two corresponding results */
const test3result = findSearchTermInBooks("the", test3In); 
if (JSON.stringify(test3result) == JSON.stringify(test3Out)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", test3Out);
    console.log("Received:", test3result);
}

/** Testing to make sure two search matches in the same line returns only one result */
const test4result = findSearchTermInBooks("the", test4In); 
if (JSON.stringify(test4result) == JSON.stringify(test4Out)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", test4Out);
    console.log("Received:", test4result);
}

/** Testing to make sure that search matches across multiple books returned the correct result */
const test5result = findSearchTermInBooks("now", test5In); 
if (JSON.stringify(test5result) == JSON.stringify(test5Out)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", test5Out);
    console.log("Received:", test5result);
}

/** Testing to make sure that search does not look for matches in the book title or other irrelevant inputs, only want to search book content */
const test6result = findSearchTermInBooks("Twenty", test6In); 
if (JSON.stringify(test6result) == JSON.stringify(test6Out)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", test6Out);
    console.log("Received:", test6result);
}

/** Testing to make sure that search matches do not return false positives (no search matches should return no results) */
const test7result = findSearchTermInBooks("these", test7In); 
if (JSON.stringify(test7result) == JSON.stringify(test7Out)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", test7Out);
    console.log("Received:", test7result);
}

/** Testing to make sure that line breaks do not affect search results */
const test8result = findSearchTermInBooks("Canadian's", test8In); 
if (JSON.stringify(test8result) == JSON.stringify(test8Out)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", test8Out);
    console.log("Received:", test8result);
}
