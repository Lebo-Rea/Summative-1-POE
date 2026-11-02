
/* Daily Bible Verse Feature */

// Store the Bible verses in an array.
const bibleVerses = [
    {
        text: "The LORD is my shepherd; I shall not want.",
        reference: "Psalm 23:1 (KJV)"
    },
    {
        text: "I can do all things through Christ which strengtheneth me.",
        reference: "Philippians 4:13 (KJV)"
    },
    {
        text: "Be strong and of a good courage; be not afraid.",
        reference: "Joshua 1:9 (KJV)"
    },
    {
        text: "Trust in the LORD with all thine heart.",
        reference: "Proverbs 3:5 (KJV)"
    },
    {
        text: "The LORD is my light and my salvation; whom shall I fear?",
        reference: "Psalm 27:1 (KJV)"
    },
    {
        text: "With God all things are possible.",
        reference: "Matthew 19:26 (KJV)"
    }
];

// Find the HTML elements we need to update.
const verseText = document.getElementById("verse-text");
const verseReference = document.getElementById("verse-reference");
const verseButton = document.getElementById("new-verse-button");

// Remember which verse is currently displayed.
let currentVerse = 0;

// Change the verse when the visitor clicks the button.

// Change the verse when the visitor clicks the button.
if (verseText && verseReference && verseButton) {

    verseButton.addEventListener("click", function () {

        // Move to the next verse.
        currentVerse = (currentVerse + 1) % bibleVerses.length;

        // Update the webpage with the new verse.
        verseText.textContent =
            '"' + bibleVerses[currentVerse].text + '"';

        verseReference.textContent =
            bibleVerses[currentVerse].reference;

    });

}


/* Contact Form Validation */

// Find the contact form and feedback message.
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {

    // Run this function when the visitor submits the form.
    contactForm.addEventListener("submit", function(event) {

        // Stop the form from submitting automatically.
        event.preventDefault();

        // Get the values entered by the visitor.
        const name = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check that the required fields are completed.
        if (name === "" || email === "" || message === "") {
            formFeedback.textContent =
                "Please complete your name, email address and message.";
            formFeedback.style.color = "#b00020";
            return;
        }

        // Check that the email address looks valid.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formFeedback.textContent =
                "Please enter a valid email address.";
            formFeedback.style.color = "#b00020";
            return;
        }

        // Check the optional phone number if one was entered.
        if (phone !== "" && !/^[0-9+() -]{7,20}$/.test(phone)) {
            formFeedback.textContent =
                "Please enter a valid phone number.";
            formFeedback.style.color = "#b00020";
            return;
        }

        // Display a confirmation message.
        formFeedback.textContent =
            "Thank you, " + name +
            "! Your message has passed validation.";

        formFeedback.style.color = "#006b3c";

        // Clear the form after successful validation.
        contactForm.reset();
    });
}

/* About Us - Read More / Read Less Feature */

const moreAbout = document.getElementById("more-about");
const readMoreButton = document.getElementById("read-more-button");

if (moreAbout && readMoreButton) {
    readMoreButton.addEventListener("click", function () {

        if (moreAbout.style.display === "none") {
            moreAbout.style.display = "block";
            readMoreButton.textContent = "Read Less";
        } else {
            moreAbout.style.display = "none";
            readMoreButton.textContent = "Read More";
        }

    });
}

/* Ministries - Expandable Ministry Descriptions */

const ministrySections = document.querySelectorAll("#ministries-page section");

ministrySections.forEach(function(section) {

    const heading = section.querySelector("h3");
    const description = section.querySelector("p");

    // Only apply this feature to sections with ministry headings
    if (heading && description) {

        // Hide the description initially
        description.style.display = "none";

        // Create the interactive button
        const button = document.createElement("button");

        button.textContent = "Learn More";
        button.type = "button";
        button.style.marginTop = "15px";
        button.style.padding = "9px 20px";
        button.style.backgroundColor = "#002f6c";
        button.style.color = "#ffffff";
        button.style.border = "2px solid #d4af37";
        button.style.borderRadius = "4px";
        button.style.cursor = "pointer";

        button.setAttribute("aria-expanded", "false");

        // Place the button underneath the ministry heading
        heading.insertAdjacentElement("afterend", button);

        // Show or hide the description when clicked
        button.addEventListener("click", function() {

            if (description.style.display === "none") {
                description.style.display = "block";
                button.textContent = "Show Less";
                button.setAttribute("aria-expanded", "true");
            } else {
                description.style.display = "none";
                button.textContent = "Learn More";
                button.setAttribute("aria-expanded", "false");
            }

        });
    }

});

/* Events - Interactive Weekly Programme Finder */

const programmeDay = document.getElementById("programme-day");
const programmeResult = document.getElementById("programme-result");
const programmeTitle = document.getElementById("programme-title");
const programmeTime = document.getElementById("programme-time");

// Weekly church programme information
const weeklyProgrammes = {
    Sunday: {
        title: "Sunday Service",
        time: "10:00 – 12:30"
    },

    Tuesday: {
        title: "Pause Hour Bible Study",
        time: "19:00 – 20:00"
    },

    Wednesday: {
        title: "Midweek Service",
        time: "18:30 – 19:30"
    },

    Friday: {
        title: "Youth Service",
        time: "18:00 – 20:00"
    }
};

// Display the selected day's programme
if (programmeDay && programmeResult) {

    programmeDay.addEventListener("change", function() {

        const selectedDay = programmeDay.value;

        if (weeklyProgrammes[selectedDay]) {

            programmeTitle.textContent =
                weeklyProgrammes[selectedDay].title;

            programmeTime.textContent =
                "Time: " + weeklyProgrammes[selectedDay].time;

            programmeResult.style.display = "block";

        } else if (selectedDay !== "") {

            programmeTitle.textContent =
                "No scheduled programme";

            programmeTime.textContent =
                "There is currently no regular programme listed for " +
                selectedDay + ". Please check our events page for updates.";

            programmeResult.style.display = "block";

        } else {

            programmeResult.style.display = "none";

        }

    });

}
