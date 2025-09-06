
// Replace the placeholders below with your actual Google Form action and field IDs.
// How to get these:
// 1) Open your Google Form -> Preview (eye icon).
// 2) Inspect the input fields to find their "name" attributes (they look like entry.123456789).
// 3) Replace the mapping below with your real entry IDs.
// 4) Find your form's action URL in the page source (form tag action="https://docs.google.com/forms/d/e/FORM_ID/formResponse").

export const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSd1UppKrhyiceD7CFNiHkfLxM9JzCsPN7mX_UALoFCfKV5PAw/formResponse";

export const GOOGLE_FORM_ENTRIES = {
    name: "entry.770694436",       // Full name
    email: "entry.599885493",      // Email
    phone: "entry.2091599787",      // Phone (optional)
    university: "entry.493033933", // Desired University (optional)
    consent: "entry.1186493492",   // Parental consent (checkbox)
};